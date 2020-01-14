import { Vector2 } from "../../Math/Vector2";
import { Timer } from "../../Timer";
import { UTID } from "../Configs/IDConfig";
import { Engine } from "../Engine";
import { Keyboard } from "../EventCenter";
import { UnitManager } from "../Managers/UnitManager";
import { Unit } from "../Objects/Unit";
import { UnitAttr } from "../Objects/UnitAttr";
import { ISystem } from "../System";

export class CreateUnitSystem implements ISystem {

    private u!: Unit;
    private c!: int;

    public Awake(): void {
        Keyboard.AddListener(this, this.OnKeyboard);
    }

    public Start(): void {
        this.u = UnitManager.CreateUnit(Player(0), UTID.BladeMaster);
        this.c = 0;

        UnitManager.CreateUnit(Player(0), UTID.DemonHunter);
        UnitManager.CreateUnit(Player(0), UTID.Archmage);
    }

    public Update(dt: float): void {
        //
    }

    private OnKeyboard(data?: { player: player, key: oskeytype }): void {
        // if key == OSKEY_Q then
        //     log(this.u.ModAttr(UnitAttr.Strength, 1))
        // end
        // if key == OSKEY_W then
        //     log(this.u.ModAttr(UnitAttr.Strength, -1))
        // end
        // if key == OSKEY_E then
        //     log(this.u.ModAttr(UnitAttr.Agility, 1))
        // end
        // if key == OSKEY_R then
        //     log(this.u.ModAttr(UnitAttr.Agility, -1))
        // end
        // if key == OSKEY_T then
        //     log(this.u.ModAttr(UnitAttr.Intelligence, 1))
        // end
        // if key == OSKEY_Y then
        //     log(this.u.ModAttr(UnitAttr.Intelligence, -1))
        // end
        // if key == OSKEY_U then
        //     log(this.u.ModAttr(UnitAttr.Life, 1))
        // end
        // if key == OSKEY_I then
        //     log(this.u.ModAttr(UnitAttr.Life, -1))
        // end
        // if key == OSKEY_A then
        //     log(this.u.ModAttr(UnitAttr.Mana, 1))
        // end
        // if key == OSKEY_S then
        //     log(this.u.ModAttr(UnitAttr.Mana, -1))
        // end
        // if key == OSKEY_P then
        //     log(this.u.ModAttr(UnitAttr.Power, 1))
        // end
        // if key == OSKEY_D then
        //     log(this.u.ModAttr(UnitAttr.PhyxResist, 0.1))
        // end
    }

}
