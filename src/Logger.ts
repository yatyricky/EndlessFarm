import { Time } from "Time";

/** @noSelf */
export class Logger {

    public static Log(...msg: any[]): void {
        Logger.stdoutWith("I", msg);
    }

    public static Warn(...msg: any[]): void {
        Logger.stdoutWith("W", msg);
    }

    public static Error(...msg: any[]): void {
        Logger.stdoutWith("E", msg);
    }
    private static stdoutWith(level: string, msg: any[]): void {
        let sb = "";
        for (const e of msg) {
            sb = sb + " " + e.toString();
        }
        BJDebugMsg(Time.GetTime() + "[" + level + "]:" + sb);
    }

}
