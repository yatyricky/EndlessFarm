interface ITime {
    h: integer;
    m: integer;
    s: real;
}

/** @noSelf */
export class Time {

    public static Init(): void {
        Time.clock = CreateTimer();
        Time.time = 0;
        TimerStart(Time.clock, Time.interval, true, () => {
            Time.time = Time.time + Time.interval;
        });
    }

    /**
     * @returns in seconds
     */
    public static GetTime(): number {
        return Time.time + TimerGetElapsed(Time.clock);
    }

    public static GetTimeHMS(): ITime {
        let ct = Time.GetTime();
        let intct = Math.floor(ct);
        ct = ct - intct;
        const h = Math.floor(intct / 3600);
        intct = intct - h * 3600;
        const m = Math.floor(intct / 60);
        intct = intct - m * 60;
        const s = intct + ct;
        return { h, m, s };
    }

    private static interval: number = 100;
    private static clock: timer;
    private static time: number = 0;

}
