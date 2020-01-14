import { NClamp, NRound } from "../../GlobalFuncs";
import { Logger } from "../../Logger";
import { AuxAID } from "../Configs/IDConfig";
import { AttributeType } from "../Configs/UnitConfig";
import { IUnitConfig, UnitConfig } from "../Configs/UnitConfig";
import { Skill } from "./Skill";
import { UnitAttr } from "./UnitAttr";

const AttrAbilities: { [key: number]: { neg: int[]; pos: int[]; } } = {
    [UnitAttr.Strength]: {
        neg: [],
        pos: [AuxAID.Str0, AuxAID.Str1, AuxAID.Str2, AuxAID.Str3, AuxAID.Str4, AuxAID.Str5, AuxAID.Str6, AuxAID.Str7, AuxAID.Str8, AuxAID.Str9, AuxAID.Str10, AuxAID.Str11],
    },
    [UnitAttr.Agility]: {
        neg: [],
        pos: [AuxAID.Agi0, AuxAID.Agi1, AuxAID.Agi2, AuxAID.Agi3, AuxAID.Agi4, AuxAID.Agi5, AuxAID.Agi6, AuxAID.Agi7, AuxAID.Agi8, AuxAID.Agi9, AuxAID.Agi10, AuxAID.Agi11],
    },
    [UnitAttr.Intelligence]: {
        neg: [],
        pos: [AuxAID.Int0, AuxAID.Int1, AuxAID.Int2, AuxAID.Int3, AuxAID.Int4, AuxAID.Int5, AuxAID.Int6, AuxAID.Int7, AuxAID.Int8, AuxAID.Int9, AuxAID.Int10, AuxAID.Int11],
    },
    [UnitAttr.Life]: {
        neg: [],
        pos: [AuxAID.HP0, AuxAID.HP1, AuxAID.HP2, AuxAID.HP3, AuxAID.HP4, AuxAID.HP5, AuxAID.HP6, AuxAID.HP7, AuxAID.HP8, AuxAID.HP9, AuxAID.HP10, AuxAID.HP11, AuxAID.HP12, AuxAID.HP13, AuxAID.HP14, AuxAID.HP15, AuxAID.HP16, AuxAID.HP17, AuxAID.HP18, AuxAID.HP19],
    },
    [UnitAttr.Mana]: {
        neg: [],
        pos: [AuxAID.MP0, AuxAID.MP1, AuxAID.MP2, AuxAID.MP3, AuxAID.MP4, AuxAID.MP5, AuxAID.MP6, AuxAID.MP7, AuxAID.MP8, AuxAID.MP9, AuxAID.MP10, AuxAID.MP11, AuxAID.MP12, AuxAID.MP13, AuxAID.MP14, AuxAID.MP15],
    },
};

export class Unit {

    private nUnit: unit;
    private config: IUnitConfig;
    private attrs: { [key: number]: float };
    private attrGet: { [key: number]: (isBase: boolean) => float };
    private attrSet: { [key: number]: (value: float) => void };
    private attrRet: { [key: number]: (isBase: boolean) => float };
    private attrMod: { [key: number]: (value: float) => void };
    private skillList: Skill[];

    public constructor(utid: int, nUnit: unit) {
        this.nUnit = nUnit;
        this.config = UnitConfig[utid];

        this.attrs = {};
        this.attrGet = {};
        this.attrSet = {};
        this.attrRet = {};
        this.attrMod = {};

        this.skillList = [];

        this.InitAttribute(UnitAttr.Strength, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.Strength, value);
            this.attrs[UnitAttr.Strength] = value;
        }, (isBase: boolean) => {
            Logger.Log("get hero str", isBase);
            return GetHeroStr(this.nUnit, !isBase);
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Strength, this.attrs[UnitAttr.Strength] + value);
            this.attrs[UnitAttr.Strength] = this.attrs[UnitAttr.Strength] + value;
        });

        this.InitAttribute(UnitAttr.Agility, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.Agility, value);
            this.attrs[UnitAttr.Agility] = value;
        }, (isBase: boolean) => {
            return GetHeroAgi(this.nUnit, !isBase);
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Agility, this.attrs[UnitAttr.Agility] + value);
            this.attrs[UnitAttr.Agility] = this.attrs[UnitAttr.Agility] + value;
        });

        this.InitAttribute(UnitAttr.Intelligence, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.Intelligence, value);
            this.attrs[UnitAttr.Intelligence] = value;
        }, (isBase: boolean) => {
            return GetHeroInt(this.nUnit, !isBase);
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Intelligence, this.attrs[UnitAttr.Intelligence] + value);
            this.attrs[UnitAttr.Intelligence] = this.attrs[UnitAttr.Intelligence] + value;
        });

        this.InitAttribute(UnitAttr.Life, (isBase: boolean) => {
            if (isBase) {
                return this.config.HP;
            } else {
                return this.attrs[UnitAttr.Life];
            }
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Life, value - 1);
            this.attrs[UnitAttr.Life] = value - 1;
        }, (isBase: boolean) => {
            if (isBase) {
                return this.config.HP + GetHeroStr(this.nUnit, true) * 10;
            } else {
                return GetUnitState(this.nUnit, UNIT_STATE_MAX_LIFE);
            }
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Life, this.attrs[UnitAttr.Life] + value);
            this.attrs[UnitAttr.Life] = this.attrs[UnitAttr.Life] + value;
        });

        this.InitAttribute(UnitAttr.Mana, (isBase: boolean) => {
            if (isBase) {
                return this.config.MP;
            } else {
                return this.attrs[UnitAttr.Mana];
            }
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Mana, value);
            this.attrs[UnitAttr.Mana] = value;
        }, (isBase: boolean) => {
            if (isBase) {
                return this.config.MP + GetHeroInt(this.nUnit, true) * 10;
            } else {
                return GetUnitState(this.nUnit, UNIT_STATE_MAX_MANA);
            }
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Mana, this.attrs[UnitAttr.Mana] + value);
            this.attrs[UnitAttr.Mana] = this.attrs[UnitAttr.Mana] + value;
        });

        this.InitAttribute(UnitAttr.Power, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.Power, value);
            this.attrs[UnitAttr.Power] = value;
        }, () => {
            const config = this.config;
            const atk = this.attrs[UnitAttr.Power] + GetRandomInt(config.ATK1, config.ATK2);
            return atk + this.GetPrimaryAttrValue();
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.Power, this.attrs[UnitAttr.Power] + value);
            this.attrs[UnitAttr.Power] = this.attrs[UnitAttr.Power] + value;
        });

        this.InitAttribute(UnitAttr.DamageDealt, undefined, undefined, () => {
            return Math.max(this.attrs[UnitAttr.DamageDealt], 0);
        }, undefined);

        this.InitAttribute(UnitAttr.CritRate, undefined, undefined, () => {
            return Math.min(this.attrs[UnitAttr.CritRate], 1);
        }, undefined);

        this.InitAttribute(UnitAttr.AttackSpeed, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.AttackSpeed, NRound(value * 100));
            this.attrs[UnitAttr.AttackSpeed] = value;
        }, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.AttackSpeed, NRound((this.attrs[UnitAttr.AttackSpeed] + value) * 100));
            this.attrs[UnitAttr.AttackSpeed] = this.attrs[UnitAttr.AttackSpeed] + value;
        });

        this.InitAttribute(UnitAttr.AttackRate, undefined, undefined, () => {
            return NClamp(this.attrs[UnitAttr.AttackRate], 0.25, 1);
        }, undefined);

        this.InitAttribute(UnitAttr.CDR, undefined, () => {
            // --todo;
        }, undefined, undefined);

        this.InitAttribute(UnitAttr.DodgeRate, undefined, undefined, () => {
            const ret = this.attrs[UnitAttr.DodgeRate] + GetHeroAgi(this.nUnit, true) * 0.002;
            return Math.min(ret, 0.75);
        }, undefined);

        this.InitAttribute(UnitAttr.PhyxResist, (isBase: boolean) => {
            if (isBase) {
                return this.config.Def;
            } else {
                return this.config.Def + this.attrs[UnitAttr.PhyxResist];
            }
        }, (value: float) => {
            this.SetNativeAttr(UnitAttr.PhyxResist, NRound(value * 100));
            this.attrs[UnitAttr.PhyxResist] = value;
        }, undefined, (value: float) => {
            this.SetNativeAttr(UnitAttr.PhyxResist, NRound((this.attrs[UnitAttr.PhyxResist] + value) * 100));
            this.attrs[UnitAttr.PhyxResist] = this.attrs[UnitAttr.PhyxResist] + value;
        });

        this.InitAttribute(UnitAttr.PhyxDef, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.SpellResist, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.SpellDef, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.PhyxCritTaken, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.SpellCritTaken, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.DamageTaken, undefined, undefined, () => {
            return Math.max(this.attrs[UnitAttr.DamageTaken], 0);
        }, undefined);

        this.InitAttribute(UnitAttr.LifeRegen, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.ManaRegen, undefined, undefined, undefined, undefined);

        //         this._InitAttribute(UnitAttr.Speed, () => {
        //             return GetUnitMoveSpeed(this.nUnit)
        //         }, (value) => {
        //             // --integer spd
        //             // --this.speed += mod
        //             // --spd = this.speed
        //             // --  if (spd > 522) themspd = 522
        //         }
        // --  if (spd < 0) themspd = 0
        //     }
        // --SetUnitMoveSpeed(this.nUnit, spd) todo
        // }, null)

        this.InitAttribute(UnitAttr.Absorb, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.LifeLeech, undefined, undefined, undefined, undefined);

        this.InitAttribute(UnitAttr.ManaLeech, undefined, undefined, undefined, undefined);

        this.InitWithConfig();
    }

    /**
     * @param attr
     * @param isBase
     */
    public GetAttr(attr: UnitAttr, isBase = false): float {
        return this.attrGet[attr](isBase);
    }

    /**
     * @param attr
     * @param value
     */
    public SetAttr(attr: UnitAttr, value: float): void {
        this.attrSet[attr](value);
    }

    /**
     * @param attr
     * @param isBase
     */
    public ReturnAttr(attr: UnitAttr, isBase = false): float {
        return this.attrRet[attr](isBase);
    }

    /**
     * @param attr
     * @param value
     */
    public ModAttr(attr: UnitAttr, value: float): void {
        this.attrMod[attr](value);
    }

    public GetPrimaryAttrValue(): int {
        if (this.config.PrimAtt === AttributeType.Strength) {
            return GetHeroStr(this.nUnit, true);
        } else if (this.config.PrimAtt === AttributeType.Agility) {
            return GetHeroAgi(this.nUnit, true);
        } else if (this.config.PrimAtt === AttributeType.Intelligence) {
            return GetHeroInt(this.nUnit, true);
        }
        return 0;
    }

    public ReturnPhyxPowerMax(): int {
        return this.config.ATK2 + this.GetPrimaryAttrValue();
    }

    private RemoveAll(u: unit, what: int[]): void {
        for (const e of what) {
            if (GetUnitAbilityLevel(u, e) > 0) {
                UnitRemoveAbility(u, e);
            }
        }
    }

    private AddAbs(u: unit, what: int[], value: int): void {
        let it = 1;
        for (const e of what) {
            const should = BlzBitAnd(value, it) === it;
            const has = GetUnitAbilityLevel(u, e) > 0;
            if (should && !has) {
                UnitAddAbility(u, e);
                UnitMakeAbilityPermanent(u, true, e);
            }
            if (!should && has) {
                UnitRemoveAbility(u, e);
            }
            it *= 2;
        }
    }

    private SetNativeAttr(attr: UnitAttr, value: int): void {
        if (this.attrs[attr] === value) { return; }
        const u = this.nUnit;
        const conf = AttrAbilities[attr];
        const neg = conf.neg;
        const pos = conf.pos;
        // validation
        value = NClamp(value, 2 ** neg.length - 1, 2 ** pos.length - 1);
        if (value === 0) {
            this.RemoveAll(u, neg);
            this.RemoveAll(u, pos);
        } else {
            if (value < 0) {
                this.RemoveAll(u, pos);
                this.AddAbs(u, neg, Math.abs(value));
            } else {
                this.RemoveAll(u, neg);
                this.AddAbs(u, pos, value);
            }
        }
    }

    // ---@param attr UnitAttr
    // ---@param getter fun(): float
    // ---@param setter fun(val: float): void
    //     ---@param retter fun(): float
    // ---@param modder fun(val: float): void
    private InitAttribute(attr: UnitAttr, getter?: (isBase: boolean) => float, setter?: (value: float) => void, retter?: (isBase: boolean) => float, modder?: (value: float) => void): void {
        this.attrs[attr] = 0;
        getter = getter || ((isBase) => this.attrs[attr]);
        setter = setter || ((value) => { this.attrs[attr] = value; });
        retter = retter || getter;
        modder = modder || ((value) => { setter!(getter!(false) + value); });
        this.attrGet[attr] = getter;
        this.attrSet[attr] = setter;
        this.attrRet[attr] = retter;
        this.attrMod[attr] = modder;
    }

    private InitWithConfig(): void {
        const u = this.nUnit;
        const config = this.config;
        SetHeroStr(u, config.Str, true);
        SetHeroAgi(u, config.Agi, true);
        SetHeroInt(u, config.Int, true);
        BlzSetUnitMaxMana(u, config.Int * 10);
        this.SetAttr(UnitAttr.Mana, config.MP);
        BlzSetUnitMaxHP(u, 1 + config.Str * 10);
        this.SetAttr(UnitAttr.Life, config.HP);
        BlzSetUnitBaseDamage(u, config.ATK1 - 1 + this.GetPrimaryAttrValue(), 0);
        BlzSetUnitDiceNumber(u, 1, 0);
        BlzSetUnitDiceSides(u, config.ATK2 - config.ATK1 + 1, 0);
        BlzSetUnitArmor(u, NRound(config.Def * 100));
    }

    // --Unit: GetDropValue()
    // --     -- return R2I(GetUnitState(this.nUnit, UNIT_STATE_MAX_LIFE) + GetUnitState(this.nUnit, UNIT_STATE_MAX_MANA))
    // --}
}
