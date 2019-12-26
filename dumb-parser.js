const fs = require("fs")
const readline = require("readline")

const whichFile = process.argv[2]

const ri = readline.createInterface({
    input: fs.createReadStream("native/" + whichFile + ".j"),
});

const output = []

if (whichFile === "common") {
    output.push("---@class handle")
}

const luaKeywords = ["end"]

const reg_type = new RegExp(/type[ \t]+(\w+)[ \t]+extends[ \t]+(\w+)[ \t]*(\/\/[\t ]*(.*))?/gm)
const reg_func = new RegExp(/(constant[ \t]+)?(native|function)[ \t]+(\w+)[ \t]+takes[ \t]+([\w \t,]+)[ \t]+returns[ \t]+(\w+)[ \t]*(\/\/[\t ]*(.*))?/gm)
const reg_expr = new RegExp(/constant[ \t]+(\w+)[ \t]+(\w+)[ \t]*=[ \t]*([\w\(\)'*$ \+\.]+)[ \t]*(\/\/[\t ]*(.*))?/gm)

/**
 * @param {string} text 
 */
function q(text) {
    if (luaKeywords.indexOf(text) !== -1) {
        return text + "_"
    }
    if (text.indexOf("$") !== -1) {
        const res = text.match(/\$[0-9A-F]+/)
        return text.replace(/\$[0-9A-F]+/, "\"" + res[0] + "\"")
    }
    return text
}

/**
 * 
 * @param {string} text 
 * @param {RegExp} regex 
 */
function extract(text, regex, count) {
    return regex.exec(text).slice(1, 1 + count)
}

ri.on("line", function (line) {
    line = line.trim()
    if (line.startsWith("//")) {
        // do nothing
    } else if (line.length === 0) {
        // do nothing
    } else if (line === "globals") {
        // do nothing
    } else if (line === "endglobals") {
        // do nothing
    } else if (line.match(reg_type)) {
        const r = extract(line, reg_type, 4)
        output.push(`---@class ${r[0]} : ${r[1]}` + (r[3] ? " " + r[3] : ""))
    } else if (line.match(reg_func)) {
        const r = extract(line, reg_func, 7)
        output.push("\n")
        if (r[6]) {
            output.push("---" + r[6])
        }
        const argNames = []
        if (r[3] !== "nothing") {
            const args = r[3].split(",")
            for (let i = 0; i < args.length; i++) {
                const ps = args[i].trim().split(/[ \t]+/)
                const argName = q(ps[1])
                output.push(`---@param ${argName} ${ps[0]}`)
                argNames.push(argName)
            }
        }
        output.push("---@return " + (r[4] === "nothing" ? "void" : r[4]))
        output.push(`function ${r[2]}(${argNames.join(", ")}) end`)
    } else if (line.match(reg_expr)) {
        const r = extract(line, reg_expr, 5)
        output.push("\n")
        if (r[4]) {
            output.push("---" + r[4])
        }
        output.push("---" + r[2].trim())
        output.push(`${r[1]} = ${q(r[2]).trim()} ---@type ${r[0]}`)
    } else {
        // console.log(line)
    }
});

ri.on("close", function () {
    fs.writeFileSync("native/" + whichFile + ".lua", output.join("\n"))
})