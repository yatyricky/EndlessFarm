export enum CareerType {
    Tank = 1,
    Healer = 2,
    DPS = 4,
    Minion = 8,
    Boss = 8,
    Creep = 32,
}

export enum AttributeType {
    None = 0,
    Strength = 1,
    Agility = 2,
    Intelligence = 3,
}

export interface IUnitConfig {
    UTID: number;
    PrimAtt: AttributeType;
    Str: number;
    Agi: number;
    Int: number;
    HP: number;
    MP: number;
    ATK1: number;
    ATK2: number;
    Def: number;
    SDef: number;
    Dodge: number;
    Crit: number;
    CritEx: number;
    Career: CareerType;
}

export const UnitConfig: { [key: number]: IUnitConfig } = {
    [1331850337]: { UTID: 1331850337, PrimAtt: AttributeType.Strength, Str: 15, Agi: 10, Int: 5, HP: 700, MP: 50, ATK1: 50, ATK2: 100, Def: 0.1, SDef: 0.05, Dodge: 0.25, Crit: 0.1, CritEx: 1.1, Career: CareerType.DPS },
    [1164207469]: { UTID: 1164207469, PrimAtt: AttributeType.Agility, Str: 9, Agi: 12, Int: 9, HP: 600, MP: 300, ATK1: 30, ATK2: 70, Def: 0.15, SDef: 0.1, Dodge: 0.35, Crit: 0.2, CritEx: 1, Career: CareerType.DPS },
    [1214931305]: { UTID: 1214931305, PrimAtt: AttributeType.Intelligence, Str: 7, Agi: 5, Int: 18, HP: 600, MP: 600, ATK1: 20, ATK2: 80, Def: 0.05, SDef: 0.2, Dodge: 0.03, Crit: 0.05, CritEx: 1, Career: CareerType.DPS },
};
