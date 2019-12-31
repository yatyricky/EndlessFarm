export enum AttributeType {
    STR = 1,
    AGI = 2,
    INT = 3,
    NON = 4,
}

export enum CareerType {
    TANK = 1,
    HEALER = 2,
    DPS = 4,
    MINION = 8,
    BOSS = 16,
    CREEP = 32,
}

export const PlayerAID = [
    { Q: int256("A0A0"), W: int256("A0A1"), E: int256("A0A2"), R: int256("A0A3"), D: int256("A0A4"), F: int256("A0A4") },
];

export const UTID = {
    BladeMaster: int256("Obla"),
    Paladin: int256("Hpla"),
    DarkRanger: int256("Nbrn"),
    DemonHunter: int256("Edem"),
    Archmage: int256("Hjai"),
    Warlock: int256("Ogld"),
};
