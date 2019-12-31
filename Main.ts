// import { Logger } from "src/Logger";
// import { Time } from "src/Time";
import { Logger } from "./src/Logger";
import { Time } from "./src/Time";
import { Timer } from "./src/Timer";

Time.Init();

class Test {
    private tm: Timer;
    private count: number;
    private name: string;
    constructor(intv: number, name: string) {
        this.tm = new Timer(intv, -1, this.callback.bind(this));
        this.count = 0;
        this.name = name;
    }

    public fire(): void {
        this.tm.Start();
    }

    private callback(): void {
        this.count++;
        Logger.Log(this.name + "callback" + this.count);
    }
}

const t = new Test(0.7, "------");
t.fire();

new Test(0.5, "<><>").fire();
// Logger.Log("main log");
// print(Time.GetTime());

// require("Extension")
// require("Game/Configs/Const")
// require("GlobalFuncs")
// require("Logger")
// require("Time").Init()
// require("Locale/Locale").Init("EN")
// require("Game/Engine").Start()
