const fs = require("fs");
const path = require("path");
const { readFile, utils } = require("xlsx");
const { encode_row, encode_cell, encode_col } = utils;
const logger = require("./logger");

/** @typedef {{
    ictft: IColumnTypeFieldType;
    value: any;
}} IField */

/** @typedef {{
    index: IField;
    data: IField[];
}} IRowEntry */

/** @typedef {{
    name: string;
    fields: IField[];
}} IInterface */

/** @typedef {{
    enums: Enum[];
    data: IRowEntry[];
    other: { [key: string]: IRowEntry[] };
}} IConfigObject */

/** @typedef {{
    fType: string;
    fEnum?: Enum;
}} IColumnTypeFieldType */

/** @typedef {{
    c: number;
    key: string;
    type: IColumnTypeFieldType;
    unique: boolean;
    index: boolean;
    defaultValue?: string;
}} IColumnType */

const outDir = path.join("src", "Game", "Configs");

const regexInt256 = new RegExp(/^[a-zA-Z0-9]{4}$/gm);

/**
 * @param {IInterface} data 
 */
function getInterfaceString(data) {
    let sb = `export interface ${data.name} {\n`;
    for (const e of data.fields) {
        sb += `    ${e.ictft.fType}: ${e}\n`;
    }
    return sb;
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isInt(str) {
    return !isNaN(parseInt(str, 10));
}

/**
 * @param {string} str 
 * @returns {boolean}
 */
function isFloat(str) {
    return !isNaN(parseFloat(str));
}

/**
 * @param {WorkSheet} sheet 
 * @param {number} r 
 * @param {number} c 
 * @returns {string}
 */
function g(sheet, r, c) {
    const cell = sheet[encode_cell({ c, r })];
    if (!cell) {
        return "";
    }
    const t = cell.t;
    if (t === "z" || t === "e") {
        return "";
    }
    let v = cell.v;
    if (typeof (v) === "string") {
        v = v.trim();
    }
    return v.toString();
}

/**
 * @param {IColumnType} cType 
 * @param {string} value 
 * @param {string} file 
 * @param {string} sheet 
 * @param {string} cell 
 * @returns {string}
 */
function ictValidator(cType, value, file, sheet, cell) {
    const { type, defaultValue } = cType;
    const { fType, fEnum } = type;
    value = value.trim();
    if (fType === "int") {
        if (!isInt(value)) {
            logger.log(`Value is not int @${file}[${sheet}]:${cell}`);
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                return "0";
            }
        }
        return value;
    } else if (fType === "float") {
        if (!isFloat(value)) {
            logger.log(`Value is not float @${file}[${sheet}]:${cell}`);
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                return "0";
            }
        }
        return value;
    } else if (fType === "int256") {
        if (!value.match(regexInt256)) {
            logger.log(`Value is not int256 @${file}[${sheet}]:${cell}`);
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                return "0000";
            }
        }
        return value;
    } else if (fType === "string") {
        if (value.length === 0) {
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                logger.log(`Value is not nullable @${file}[${sheet}]:${cell}`);
                return "";
            }
        }
        return value;
    } else if (fType.charCodeAt(0) === 64) {
        if (!fEnum) {
            throw new Error(`Field Enum is undefined @${file}[${sheet}]:${cell}`);
        }
        if (!fEnum.match(value)) {
            if (defaultValue !== undefined) {
                return defaultValue;
            } else {
                logger.log(`Value is not ${fEnum.name} @${file}[${sheet}]:${cell}`);
                return "";
            }
        }
        return value;
    } else {
        throw new Error(`Undefined type @${file}[${sheet}]:${cell}`);
    }
}

const primTypes = ["int", "int256", "float", "string"];

class Enum {
    /**
     * @param {string} name 
     */
    constructor(name) {
        /** @type {Array<{ name: string; value: number }>} */
        this.items = [];
        /** @type {string} */
        this.name = name;
        /** @type {string[]} */
        this.enumStrings = [];
    }

    /**
     * @param {string} name 
     * @param {string} value 
     */
    add(name, value) {
        /** @type {number} */
        let val;
        if (value === "") {
            val = this.items.length;
        } else {
            val = parseInt(value, 10);
        }
        this.items.push({ name, value: val });
        this.enumStrings.push(name);
    }

    /**
     * @param {string} value 
     * @returns {boolean}
     */
    match(value) {
        return this.enumStrings.indexOf(value) !== -1;
    }

    toString() {
        let sb = `export enum ${this.name} {\n`;
        for (const e of this.items) {
            sb += `    ${e.name} = ${e.value},\n`;
        }
        sb += "}";
        return sb;
    }
}

// -- start of workbook

const filePath = "./configs/Unit.xlsx";

/** @type {IConfigObject} */
const configObj = {
    enums: [],
    data: [],
    other: {},
};

const wb = readFile(filePath);
/** @type {string[]} */
const enumSheets = [];
/** @type {string[]} */
const dataSheets = [];
/** @type {string[]} */
const wbEnums = [];
/** @type {{ [key: string]: Enum }} */
const enumByName = {};
for (const sheetName of wb.SheetNames) {
    if (sheetName.charCodeAt(0) === 64) {
        enumSheets.push(sheetName);
        wbEnums.push(sheetName);
    } else {
        dataSheets.push(sheetName);
    }
}

// get enums
for (const e of enumSheets) {
    const sheet = wb.Sheets[e];
    const enumObj = new Enum(e.slice(1));
    let r = 0;
    while (true) {
        const cell = g(sheet, r, 0);
        if (cell.length === 0) {
            break;
        }
        enumObj.add(cell, g(sheet, r, 1));
        r++;
    }
    configObj.enums.push(enumObj);
    enumByName[e] = enumObj;
}

// get sheets
for (const e of dataSheets) {
    const sheet = wb.Sheets[e];
    // filter out #
    /** @type {IColumnType[]} */
    const exportCols = [];
    /** @type {number} */
    let indexCol = -1;
    let col = 0;
    while (true) {
        // key
        const key = g(sheet, 0, col);
        if (key.length === 0) {
            break;
        }
        if (key.charCodeAt(0) === 35) {
            col++;
            continue;
        }
        const ictKey = key;
        // type
        let type = g(sheet, 1, col);
        if (type.length === 0) {
            type = "string";
        }
        const primTypeIndex = primTypes.indexOf(type);
        const wbEnumIndex = wbEnums.indexOf(type);
        const isPrimTypeIndex = primTypeIndex !== -1;
        const iswbEnumIndex = wbEnumIndex !== -1;
        if (!isPrimTypeIndex && !iswbEnumIndex) {
            throw new Error(`Unknown type @${filePath}[${e}]:${encode_cell({ r: 1, c: col })}`);
        }
        if (isPrimTypeIndex && iswbEnumIndex) {
            throw new Error(`Type matches multiple types @${filePath}[${e}]:${encode_cell({ r: 1, c: col })}`);
        }
        /** @type {IColumnTypeFieldType} */
        const ictType = {
            fType: type,
            fEnum: isPrimTypeIndex ? undefined : enumByName[type],
        };
        // rules
        const rules = g(sheet, 2, col);
        let ictIndex = false;
        let ictUnique = false;
        let ictDefaultVal;
        if (rules.length !== 0) {
            const rulesTokens = rules.split(",");
            for (const rulesToken of rulesTokens) {
                const ruleParts = rulesToken.split(":");
                const rule = ruleParts[0];
                const ruleValue = ruleParts[1];
                if (rule === "Index") {
                    ictIndex = true;
                    if (indexCol !== -1) {
                        throw new Error(`Multiple Index found @${filePath}[${e}]`);
                    }
                    indexCol = col;
                    ictUnique = true;
                } else if (rule === "Unique") {
                    ictUnique = true;
                } else if (rule === "Default") {
                    ictDefaultVal = ruleValue;
                } else {
                    throw new Error(`Unknown Rule ${rule} found @${filePath}[${e}]`);
                }
            }
        }

        /** @type {IColumnType} */
        const colTypeObj = {
            c: col++,
            key: ictKey,
            type: ictType,
            unique: ictUnique,
            index: ictIndex,
            defaultValue: ictDefaultVal,
        };

        exportCols.push(colTypeObj);
    }

    if (exportCols.length === 0) {
        logger.log(`Sheet is empty @${filePath}[${e}]`);
        continue;
    }

    /** @type {Array<{ index: IField, data: IField[] }>} */
    const obj = [];

    const firstIct = exportCols[0];
    let sheetRow = 4;
    /** @type {{ [key: number]: { [key: string]: boolean } }} */
    const uniqueMaps = {};
    while (true) {
        const firstCell = g(sheet, sheetRow, firstIct.c);
        if (firstCell.length === 0) {
            break;
        }
        /** @type {IField[]} */
        const entry = [];
        /** @type {IField} */
        let indexField = null;
        for (const ict of exportCols) {
            const validated = ictValidator(ict, g(sheet, sheetRow, ict.c), filePath, e, encode_cell({ r: sheetRow, c: ict.c }));
            if (ict.unique) {
                let currentMap = uniqueMaps[ict.c];
                if (!currentMap) {
                    uniqueMaps[ict.c] = {};
                    currentMap = uniqueMaps[ict.c];
                }
                if (currentMap[validated]) {
                    logger.log(`Duplicate value ${validated} @${filePath}[${e}]:${encode_cell({ r: sheetRow, c: ict.c })}`);
                } else {
                    currentMap[validated] = true;
                }
            }
            const entryField = {
                ictft: ict.type,
                value: validated,
            };
            if (ict.index) {
                indexField = entryField;
            }
            entry.push(entryField);
        }
        obj.push({
            index: indexField,
            data: entry,
        });
        sheetRow++;
    }

    if (wb.SheetNames.indexOf(e) === 0) {
        configObj.data = obj;
    } else {
        configObj.other[e] = obj;
    }
}

const baseFN = path.basename(filePath, ".xlsx");

// main
let sb = "";

for (const e of configObj.enums) {
    sb += e.toString() + "\n";
}

/** @type {Array<{ name: string, item: IRowEntry }>} */
const allItemTypes = [{ name: null, item: configObj.data }];
for (const key in configObj.other) {
    if (configObj.other.hasOwnProperty(key)) {
        const e = configObj.other[key];
        allItemTypes.push({ name: key, item: e });
    }
}

for (let i = 0; i < allItemTypes.length; i++) {
    const e = allItemTypes[i];
    let iName;
    if (i === 0) {
        iName = `I${baseFN}ConfigItem`;
    } else {
        iName = `I${baseFN}Config${e.name}Item`;
    }
    // sb += "export interface "
}

const first = configObj.data[0].data;

for (const e of configObj.data) {
    if (e.index) {
        
    }
}

const mainFN = path.join(outDir, baseFN + "Config_.ts");
fs.writeFileSync(mainFN, sb);
