const fs = require("fs");
const readline = require("readline");
const luamin = require("luamin");
const logger = require("./logger");
const child = require("child_process");

const args = process.argv.slice(2);

let mode = "-d";
if (args[0] === "-p") {
    mode = "-p";
}

const startMark = "--nef-inject";
const endMark = "--nef-inject-end";

function injectWC3(outLua, wc3path, iMode) {
    if (!fs.existsSync(wc3path) || !fs.statSync(wc3path).isFile()) {
        logger.error(`File not found ${wc3path}`);
        return;
    }
    let file = fs.readFileSync(outLua).toString();
    if (iMode === "-p") {
        file = luamin.minify(file);
    }
    file = file.replace(/int256\("(....)"\)/gm, (a, b) => {
        const v1 = b.charCodeAt(0) << 24;
        const v2 = b.charCodeAt(1) << 16;
        const v3 = b.charCodeAt(2) << 8;
        const v4 = b.charCodeAt(3);
        return "(" + (v1 | v2 | v3 | v4) + ")";
    });
    const ri = readline.createInterface({
        input: fs.createReadStream(wc3path),
    });
    let state = 0;
    let outFile = "";
    let changed = false;
    ri.on("line", function (line) {
        if (line.trim() === endMark) {
            outFile += file + "\n";
            state = 0;
        }
        if (state === 2) {
            return;
        }
        if (state === 0 && line === "function main()") {
            state = 1;
            changed = true;
        }
        if (state === 1 && line === "end") {
            outFile += startMark + "\n";
            outFile += file + "\n";
            outFile += endMark + "\n";
            state = 0;
        }
        if (line.trim() === startMark) {
            state = 2;
            changed = true;
        }
        outFile += line + "\n";
    });
    ri.on("close", function () {
        fs.writeFileSync(wc3path, outFile);
        if (changed) {
            logger.success("Write to war3map.lua success");
        } else {
            logger.error("Target file is not war3map.lua");
        }
    });
}

// ts to lua
try {
    child.execSync(".\\node_modules\\.bin\\tstl -p .\\tsconfig.json", { stdio: "inherit" });
} catch (error) {
    process.exit(1);
}
logger.success("Ts to Lua success");

// inject
injectWC3("./out.lua", "./EndlessFarm.w3x/war3map.lua", mode);
