import { Logger } from "./Logger";

export class Timer {

    private static refs: { [key: string]: Timer | null } = {};

    private static Update(): void {
        Logger.Log("update called");
        const self = Timer.refs[tostring(GetExpiredTimer())];
        if (self === null) {
            return;
        }
        self.callback();
        self.cloop--;
        if (self.cloop <= 0 && self.loop !== -1) {
            self.Destroy();
        }
    }

    private interval: float;
    private loop: int;
    private cloop: int;
    private callback: () => void;
    private nTimer: timer;

    public constructor(interval: float, loop: int, callback: () => void) {
        this.interval = interval;
        this.loop = loop;
        this.cloop = loop;
        this.callback = callback;
        this.nTimer = CreateTimer();
        Timer.refs[tostring(this.nTimer)] = this;
    }

    public Start(): Timer {
        Logger.Log("timer start");
        TimerStart(this.nTimer, this.interval, true, Timer.Update);
        return this;
    }

    public Extend(value: number, isLoop: boolean = false): Timer {
        let res = value;
        if (!isLoop) {
            res = Math.floor(value / this.interval);
        }
        this.cloop += res;
        return this;
    }

    private Destroy(): void {
        Timer.refs[tostring(this.nTimer)] = null;
        DestroyTimer(this.nTimer);
    }

}
