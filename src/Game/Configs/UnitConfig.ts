---@type table<int, UnitConfigItem>
local UnitConfig = {
    [UTID_BLADE_MASTER] = {
        UTID = UTID_BLADE_MASTER,
        PrimAtt = ATT_STR,
        Str = 15,
        Agi = 10,
        Int = 5,
        HP = 700,
        MP = 50,
        ATK1 = 50,
        ATK2 = 100,
        Def = 0.1,
        SDef = 1,
        Dodge = 0.25,
        Crit = 0.1,
        Career = CAREER_TYPE_DPS,
    },
    [UTID_DEMON_HUNTER] = {
        UTID = UTID_DEMON_HUNTER,
        PrimAtt = ATT_AGI,
        Str = 9,
        Agi = 12,
        Int = 9,
        HP = 600,
        MP = 300,
        ATK1 = 30,
        ATK2 = 100,
        Def = 0.15,
        SDef = 1,
        Dodge = 0.25,
        Crit = 0.1,
        Career = CAREER_TYPE_DPS,
    },
    [UTID_ARCHMAGE] = {
        UTID = UTID_ARCHMAGE,
        PrimAtt = ATT_INT,
        Str = 7,
        Agi = 5,
        Int = 18,
        HP = 600,
        MP = 600,
        ATK1 = 20,
        ATK2 = 40,
        Def = 0.05,
        SDef = 1,
        Dodge = 0.25,
        Crit = 0.1,
        Career = CAREER_TYPE_DPS,
    },
}

return UnitConfig

---@class UnitConfigItem
---@field UTID int
---@field PrimAtt int
---@field Str int
---@field Agi int
---@field Int int
---@field HP int
---@field MP int
---@field ATK1 int
---@field ATK2 int
---@field Def float
---@field SDef float
---@field Dodge float
---@field Crit float
---@field Career int
