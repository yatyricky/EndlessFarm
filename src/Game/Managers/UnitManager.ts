import { Vector2 } from "../../Math/Vector2";
import { Unit } from "../Objects/Unit";

export class UnitManager {

    public static CreateUnit(this: void, nPlayer: player, utid: int, pos: Vector2 = new Vector2(), face: float = 0): Unit {
        const u = CreateUnit(nPlayer, utid, pos.x, pos.y, face);
        return new Unit(utid, u);
    }

}
