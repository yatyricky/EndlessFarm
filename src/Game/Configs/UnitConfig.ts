import { AttributeType, CareerType, UTID } from "./Const";

export interface IUnitConfigItem {
    UTID: string;
    PrimAtt: AttributeType;
    Str: int;
    Agi: int;
    Int: int;
    HP: int;
    MP: int;
    ATK1: int;
    ATK2: int;
    Def: float;
    SDef: float;
    Dodge: float;
    Crit: float;
    Career: CareerType;
}

export const UnitConfig: { [key: string]: IUnitConfigItem } = {
    [UTID.BladeMaster]: {
        UTID: UTID.BladeMaster,
        PrimAtt: AttributeType.STR,
        Str: 15,
        Agi: 10,
        Int: 5,
        HP: 700,
        MP: 50,
        ATK1: 50,
        ATK2: 100,
        Def: 0.1,
        SDef: 1,
        Dodge: 0.25,
        Crit: 0.1,
        Career: CareerType.DPS,
    },
    [UTID.DemonHunter]: {
        UTID: UTID.DemonHunter,
        PrimAtt: AttributeType.AGI,
        Str: 9,
        Agi: 12,
        Int: 9,
        HP: 600,
        MP: 300,
        ATK1: 30,
        ATK2: 100,
        Def: 0.15,
        SDef: 1,
        Dodge: 0.25,
        Crit: 0.1,
        Career: CareerType.DPS,
    },
    [UTID.Archmage]: {
        UTID: UTID.Archmage,
        PrimAtt: AttributeType.INT,
        Str: 7,
        Agi: 5,
        Int: 18,
        HP: 600,
        MP: 600,
        ATK1: 20,
        ATK2: 40,
        Def: 0.05,
        SDef: 1,
        Dodge: 0.25,
        Crit: 0.1,
        Career: CareerType.DPS,
    },
};
