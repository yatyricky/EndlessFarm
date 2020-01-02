const fs = require("fs");
const readline = require("readline");

const whichFile = process.argv[2];

const ri = readline.createInterface({
    input: fs.createReadStream("native/" + whichFile + ".jass"),
});

const output = ["/** @noSelfInFile **/"];

if (whichFile === "common") {
    output.push("declare type nothing = void;");
    output.push("declare type integer = number;");
    output.push("declare type real = number;");
    output.push("declare type int = integer;");
    output.push("declare type float = real;");
    output.push("declare type code = Function;");
    output.push("");
    output.push("declare class handle { }");
}

const reg_type = new RegExp(/type[ \t]+(\w+)[ \t]+extends[ \t]+(\w+)[ \t]*(\/\/[\t ]*(.*))?/gm);
const reg_func = new RegExp(/(constant[ \t]+)?(native|function)[ \t]+(\w+)[ \t]+takes[ \t]+([\w \t,]+)[ \t]+returns[ \t]+(\w+)[ \t]*(\/\/[\t ]*(.*))?/gm);
const reg_expr = new RegExp(/constant[ \t]+(\w+)[ \t]+(\w+)[ \t]*=[ \t]*([\w\(\)'*$ \+\.]+)[ \t]*(\/\/[\t ]*(.*))?/gm);

/**
 * @param {string} text 
 */
function q(text) {
    if (text.indexOf("$") !== -1) {
        const res = text.match(/\$[0-9A-F]+/);
        return text.replace(/\$[0-9A-F]+/, "\"" + res[0] + "\"");
    }
    return text;
}

/**
 * 
 * @param {string} text 
 * @param {RegExp} regex 
 */
function extract(text, regex, count) {
    return regex.exec(text).slice(1, 1 + count);
}

ri.on("line", function (line) {
    line = line.trim();
    if (line.startsWith("//")) {
        // do nothing
    } else if (line.length === 0) {
        // do nothing
    } else if (line === "globals") {
        // do nothing
    } else if (line === "endglobals") {
        // do nothing
    } else if (line.match(reg_type)) {
        const r = extract(line, reg_type, 4);
        if (r[3]) {
            output.push(`/** ${r[3]} */`);
        }
        output.push(`declare class ${r[0]} extends ${r[1]} { }`);
    } else if (line.match(reg_func)) {
        const r = extract(line, reg_func, 7);
        output.push("");
        output.push("/**");
        if (r[6]) {
            output.push(` * ${r[6]}`);
        }
        const argList = [];
        if (r[3] !== "nothing") {
            const args = r[3].split(",");
            for (let i = 0; i < args.length; i++) {
                const ps = args[i].trim().split(/[ \t]+/);
                const argName = q(ps[1]);
                output.push(` * @param ${argName}`);
                argList.push({ name: argName, type: ps[0] });
            }
        }
        output.push(" */");
        output.push(`declare function ${r[2]}(${argList.map((e) => e.name + ": " + e.type).join(", ")}): ${r[4]};`);
    } else if (line.match(reg_expr)) {
        const r = extract(line, reg_expr, 5);
        output.push("");
        output.push("/**");
        if (r[4]) {
            output.push(" * " + r[4]);
        }
        output.push(" * " + r[2].trim());
        output.push(" */");
        output.push(`declare const ${r[1]}: ${r[0]}`);
    } else {
        // console.log(line)
    }
});

ri.on("close", function () {
    fs.writeFileSync("native/" + whichFile + ".d.ts", output.join("\n"));
});