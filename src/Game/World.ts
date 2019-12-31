import { Time } from "../Time";
import { ISystem } from "./System";

export class World {

    private systems: ISystem[];
    private time: float;
    private frame: int;

    public constructor() {
        this.systems = [];
        this.time = Time.GetTime();
        this.frame = 0;
    }

    public Add(system: ISystem): void {
        this.systems.push(system);
    }

    public Awake(): void {
        for (const e of this.systems) {
            e.Awake();
        }
    }

    public Start(): void {
        for (const e of this.systems) {
            e.Start();
        }
    }

    public Update(now: float): void {
        this.frame++;
        const delta = now - this.time;
        this.time = now;
        for (const e of this.systems) {
            e.Update(delta);
        }
    }

}
