import { UnitConfig, IUnitConfigItem } from "../Configs/UnitConfig";
import { UnitAttr } from "./UnitAttr";
import { Skill } from "./Skill";
import { Logger } from "../../Logger";

const AttrAbilities: { [key: number]: { neg: string[]; pos: string[]; } } = {
    [UnitAttr.Strength]: {
        neg: [],
        pos: ["$A000", "$A001", "$A002", "$A003", "$A004", "$A005", "$A006", "$A007", "$A008", "$A009", "$A00A", "$A00B"]
    },
    [UnitAttr.Agility]: {
        neg: [],
        pos: ["$A01N", "$A01M", "$A01L", "$A01K", "$A01J", "$A01I", "$A01H", "$A01G", "$A00F", "$A00E", "$A00D", "$A00C"]
    },
    [UnitAttr.Intelligence]: {
        neg: [],
        pos: ["$A01P", "$A01Q", "$A01R", "$A01S", "$A01T", "$A01U", "$A01V", "$A01W", "$A01X", "$A01Y", "$A01O", "$A01Z"]
    },
    [UnitAttr.Life]: {
        neg: [],
        pos: ["$A00I", "$A00Y", "$A00X", "$A00W", "$A00V", "$A00U", "$A00T", "$A00S", "$A00R", "$A00Q", "$A00P", "$A00O", "$A00N", "$A00M", "$A00L", "$A00K", "$A00G", "$A00H", "$A00Z", "$A00J"]
    },
    [UnitAttr.Mana]: {
        neg: [],
        pos: ["$A016", "$A010", "$A011", "$A012", "$A013", "$A014", "$A01F", "$A017", "$A018", "$A019", "$A01A", "$A01B", "$A01C", "$A01D", "$A01E", "$A015"]
    },
}

export class Unit {

    private nUnit: unit;
    private config: IUnitConfigItem;
    private attrs: { [key: number]: float };
    private attrGet: { [key: number]: (isBase: boolean) => float };
    private attrSet: { [key: number]: (value: float) => void };
    private attrRet: { [key: number]: (isBase: boolean) => float };
    private attrMod: { [key: number]: (value: float) => void };
    private skillList: Skill[];

    public constructor(utid: string, nUnit: unit) {
        this.nUnit = nUnit
        this.config = UnitConfig[utid]

        this.attrs = {}
        this.attrGet = {}
        this.attrSet = {}
        this.attrRet = {}
        this.attrMod = {}

        this.skillList = [];

        this._InitAttribute(UnitAttr.Strength, null, (value: float) => {
            this._SetNativeAttr(UnitAttr.Strength, value)
            this.attrs[UnitAttr.Strength] = value
        }, (isBase: boolean) => {
            Logger.Log("get hero str", isBase)
            return GetHeroStr(this.nUnit, !isBase)
        }, (value: float) => {
            this._SetNativeAttr(UnitAttr.Strength, this.attrs[UnitAttr.Strength] + value)
            this.attrs[UnitAttr.Strength] = this.attrs[UnitAttr.Strength] + value
        })

        this._InitAttribute(UnitAttr.Agility, null, (value: float) => {
            this._SetNativeAttr(UnitAttr.Agility, value)
            this.attrs[UnitAttr.Agility] = value
        }, (isBase) => {
            return GetHeroAgi(this.nUnit, !isBase)
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Agility, this.attrs[UnitAttr.Agility] + value)
            this.attrs[UnitAttr.Agility] = this.attrs[UnitAttr.Agility] + value
        })

        this._InitAttribute(UnitAttr.Intelligence, null, (value) => {
            this._SetNativeAttr(UnitAttr.Intelligence, value)
            this.attrs[UnitAttr.Intelligence] = value
        }, (isBase) => {
            return GetHeroInt(this.nUnit, !isBase)
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Intelligence, this.attrs[UnitAttr.Intelligence] + value)
            this.attrs[UnitAttr.Intelligence] = this.attrs[UnitAttr.Intelligence] + value
        })

        this._InitAttribute(UnitAttr.Life, (isBase) => {
            if isBase {
                return this.config.HP
            } else {
                return this.attrs[UnitAttr.Life]
            }
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Life, value - 1)
            this.attrs[UnitAttr.Life] = value - 1
        }, (isBase) => {
            if isBase {
                return this.config.HP + GetHeroStr(this.nUnit, true) * 10
            } else {
                return GetUnitState(this.nUnit, UNIT_STATE_MAX_LIFE)
            }
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Life, this.attrs[UnitAttr.Life] + value)
            this.attrs[UnitAttr.Life] = this.attrs[UnitAttr.Life] + value
        })

        this._InitAttribute(UnitAttr.Mana, (isBase) => {
            if isBase {
                return this.config.MP
            } else {
                return this.attrs[UnitAttr.Mana]
            }
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Mana, value)
            this.attrs[UnitAttr.Mana] = value
        }, (isBase) => {
            if isBase {
                return this.config.MP + GetHeroInt(this.nUnit, true) * 10
            } else {
                return GetUnitState(this.nUnit, UNIT_STATE_MAX_MANA)
            }
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Mana, this.attrs[UnitAttr.Mana] + value)
            this.attrs[UnitAttr.Mana] = this.attrs[UnitAttr.Mana] + value
        })

        this._InitAttribute(UnitAttr.Power, null, (value) => {
            this._SetNativeAttr(UnitAttr.Power, value)
            this.attrs[UnitAttr.Power] = value
        }, () => {
            const config = this.config
            const atk = this.attrs[UnitAttr.Power] + math.random(config.ATK1, config.ATK2)
            return atk + this.GetPrimaryAttrValue()
        }, (value) => {
            this._SetNativeAttr(UnitAttr.Power, this.attrs[UnitAttr.Power] + value)
            this.attrs[UnitAttr.Power] = this.attrs[UnitAttr.Power] + value
        })

        this._InitAttribute(UnitAttr.DamageDealt, null, null, () => {
            return n_max(this.attrs[UnitAttr.DamageDealt], 0)
        }, null)

        this._InitAttribute(UnitAttr.CritRate, null, null, () => {
            return n_min(this.attrs[UnitAttr.CritRate], 1)
        })

        this._InitAttribute(UnitAttr.AttackSpeed, null, (value) => {
            this._SetNativeAttr(UnitAttr.AttackSpeed, n_round(value * 100))
            this.attrs[UnitAttr.AttackSpeed] = value
        }, null, (value) => {
            this._SetNativeAttr(UnitAttr.AttackSpeed, n_round((this.attrs[UnitAttr.AttackSpeed] + value) * 100))
            this.attrs[UnitAttr.AttackSpeed] = this.attrs[UnitAttr.AttackSpeed] + value
        })

        this._InitAttribute(UnitAttr.AttackRate, null, null, () => {
            return n_clamp(this.attrs[UnitAttr.AttackRate], 0.25, 1)
        }, null)

        this._InitAttribute(UnitAttr.CDR, null, () => {
            --todo
        }, null)

        this._InitAttribute(UnitAttr.DodgeRate, null, null, () => {
            const ret = this.attrs[UnitAttr.DodgeRate] + GetHeroAgi(this.nUnit, true) * 0.002
            return n_min(ret, 0.75)
        })

        this._InitAttribute(UnitAttr.PhyxResist, (isBase) => {
            if isBase {
                return this.config.Def
            } else {
                return this.config.Def + this.attrs[UnitAttr.PhyxResist]
            }
        }, (value) => {
            this._SetNativeAttr(UnitAttr.PhyxResist, n_round(value * 100))
            this.attrs[UnitAttr.PhyxResist] = value
        }, null, (value) => {
            this._SetNativeAttr(UnitAttr.PhyxResist, n_round((this.attrs[UnitAttr.PhyxResist] + value) * 100))
            this.attrs[UnitAttr.PhyxResist] = this.attrs[UnitAttr.PhyxResist] + value
        })

        this._InitAttribute(UnitAttr.PhyxDef, null, null, null, null)

        this._InitAttribute(UnitAttr.SpellResist, null, null, null, null)

        this._InitAttribute(UnitAttr.SpellDef, null, null, null, null)

        this._InitAttribute(UnitAttr.PhyxCritTaken, null, null, null, null)

        this._InitAttribute(UnitAttr.SpellCritTaken, null, null, null, null)

        this._InitAttribute(UnitAttr.DamageTaken, null, null, () => {
            return n_max(this.attrs[UnitAttr.DamageTaken], 0)
        }, null)

        this._InitAttribute(UnitAttr.LifeRegen, null, null, null, null)

        this._InitAttribute(UnitAttr.ManaRegen, null, null, null, null)

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

        this._InitAttribute(UnitAttr.Absorb, null, null, null)

        this._InitAttribute(UnitAttr.LifeLeech, null, null, null)

        this._InitAttribute(UnitAttr.ManaLeech, null, null, null)

        this._InitWithConfig()
    }

    // ---@param nUnit unit
    // ---@param attr UnitAttr
    // ---@param value int
    private _SetNativeAttr(attr, value) {
        if this.attrs[attr] == value { return }
        const u = this.nUnit
        const conf = AttrAbilities[attr]
        const neg = conf.neg
        const pos = conf.pos
        --validation
        value = n_clamp(value, 2 ^ #neg - 1, 2 ^ #pos - 1)

        const removeAll(what)
        for i = 1, #what do
            const e = what[i]
            if GetUnitAbilityLevel(u, e) > 0 {
            UnitRemoveAbility(u, e)
        }
    }
}

const addAbs(what, v)
const it = 1
for i = 1, #what do
    const e = what[i]
            const should = BlzBitAnd(v, it) == it
const has = GetUnitAbilityLevel(u, e) > 0
if should and! has {
    UnitAddAbility(u, e)
    UnitMakeAbilityPermanent(u, true, e)
}
if !should and has {
    UnitRemoveAbility(u, e)
}
it = it * 2
}
}

if value == 0 {
    removeAll(neg)
    removeAll(pos)
} else {
    if value < 0 {
        removeAll(pos)
        addAbs(neg, math.abs(value))
    } else {
        removeAll(neg)
        addAbs(pos, value)
    }
}
}

---@param attr UnitAttr
---@param getter fun(): float
---@param setter fun(val: float): void
    ---@param retter fun(): float
---@param modder fun(val: float): void
    Unit: _InitAttribute(attr, getter, setter, retter, modder)
this.attrs[attr] = 0
getter = getter or()
return this.attrs[attr]
}
setter = setter or(value)
this.attrs[attr] = value
}
retter = retter or getter
modder = modder or(value)
setter(getter() + value)
}
this.attrGet[attr] = getter
this.attrSet[attr] = setter
this.attrRet[attr] = retter
this.attrMod[attr] = modder
}

Unit: _InitWithConfig()
const u = this.nUnit
const config = this.config
SetHeroStr(u, config.Str, true)
SetHeroAgi(u, config.Agi, true)
SetHeroInt(u, config.Int, true)
BlzSetUnitMaxMana(u, config.Int * 10)
this.SetAttr(UnitAttr.Mana, config.MP)
BlzSetUnitMaxHP(u, 1 + config.Str * 10)
this.SetAttr(UnitAttr.Life, config.HP)
BlzSetUnitBaseDamage(u, config.ATK1 - 1 + this.GetPrimaryAttrValue(), 0)
BlzSetUnitDiceNumber(u, 1, 0)
BlzSetUnitDiceSides(u, config.ATK2 - config.ATK1 + 1, 0)
BlzSetUnitArmor(u, n_round(config.Def * 100))
}

---@param attr UnitAttr
---@return float
Unit: GetAttr(attr, ...)
return this.attrGet[attr](...)
}

---@param attr UnitAttr
---@param value float
Unit: SetAttr(attr, value)
this.attrSet[attr](value)
}

---@param attr UnitAttr
---@return float
Unit: ReturnAttr(attr, ...)
return this.attrRet[attr](...)
}

Unit: ModAttr(attr, value)
this.attrMod[attr](value)
}

---@return int
Unit: GetPrimaryAttrValue()
if this.config.PrimAtt == ATT_STR {
    return GetHeroStr(this.nUnit, true)
    elseif this.config.PrimAtt == ATT_AGI {
        return GetHeroAgi(this.nUnit, true)
        elseif this.config.PrimAtt == ATT_INT {
            return GetHeroInt(this.nUnit, true)
        }
        return 0
    }

    Unit: ReturnPhyxPowerMax()
    return this.config.ATK2 + this.GetPrimaryAttrValue()
}

--Unit: GetDropValue()
--     -- return R2I(GetUnitState(this.nUnit, UNIT_STATE_MAX_LIFE) + GetUnitState(this.nUnit, UNIT_STATE_MAX_MANA))
--}
}
