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
    { Q: "$A0A0", W: "$A0A1", E: "$A0A2", R: "$A0A3", D: "$A0A4", F: "$A0A4" },
];

export const UTID = {
    BladeMaster: "$Obla",
    Paladin: "$Hpla",
    DarkRanger: "$Nbrn",
    DemonHunter: "$Edem",
    Archmage: "$Hjai",
    Warlock: "$Ogld",
};
