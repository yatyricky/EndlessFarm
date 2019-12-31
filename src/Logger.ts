import { Time } from "Time";

export class Logger {

    public static Log(this: void, ...msg: any[]): void {
        Logger.stdoutWith("I", msg);
    }

    public static Warn(this: void, ...msg: any[]): void {
        Logger.stdoutWith("W", msg);
    }

    public static Error(this: void, ...msg: any[]): void {
        Logger.stdoutWith("E", msg);
    }
    private static stdoutWith(this: void, level: string, msg: any[]): void {
        let sb = "";
        for (const e of msg) {
            sb = sb + " " + e.toString();
        }
        BJDebugMsg(Time.GetTime() + "[" + level + "]:" + sb);
    }

}
