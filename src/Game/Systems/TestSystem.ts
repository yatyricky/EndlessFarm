import { Logger } from "../../Logger";
import { Vector2 } from "../../Math/Vector2";
import { Timer } from "../../Timer";
import { Keyboard } from "../EventCenter";
import { ISystem } from "../System";

export class TestSystem implements ISystem {

    public OnClickedZ(data: { player: player, key: oskeytype } | void): void {
        //
    }

    public Awake(): void {
        Keyboard.AddListener(this, this.OnClickedZ);
    }

    public Start(): void {
        Logger.Log("Test system is run");
    }

    public Update(dt: float): void {
        //
    }

}
