import { Logger } from "Logger";

export class Event<T> {

    private static teCounter: number = 0;

    private events: Array<{ thisArg: object, handler: (data: T) => void; }>;
    private mId: number;

    constructor() {
        this.mId = Event.teCounter++;
        this.events = [];
    }

    public AddListener(thisArg: object, handler: (data: T | void) => void, once: boolean = false, arg?: T): void {
        for (const elem of this.events) {
            if (elem.thisArg === thisArg && elem.handler === handler) {
                return Logger.Warn(`Event[${this.mId}]: double register`);
            }
        }
        if (once) {
            handler.apply(thisArg, [arg]);
        }
        this.events.push({ thisArg, handler });
    }

    public RemoveListener(thisArg: object, handler: (data: T) => void): void {
        let index: number = -1;
        for (let i = 0; index === -1 && i < this.events.length; i++) {
            const elem = this.events[i];
            if (elem.thisArg === thisArg && elem.handler === handler) {
                index = i;
            }
        }
        if (index === -1) {
            return Logger.Warn(`Event[${this.mId}]: cannot remove`);
        }
        this.events.splice(index, 1);
    }

    public Broadcast(data: T): void {
        if (this.events.length <= 0) {
            return;
        }
        for (const e of this.events) {
            e.handler.apply(e.thisArg, [data]);
        }
    }

}
