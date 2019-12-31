local IDGenerator = require("Common/IDGenerator")

local gen = IDGenerator.New()

---@class UnitAttr
---str = hp
---agi = dodge
---int = mp
local UnitAttr = {
    -- basic --
    Strength = gen:Next(),
    Agility = gen:Next(),
    Intelligence = gen:Next(),
    Life = gen:Next(),
    Mana = gen:Next(),
    -- offensive --
    Power = gen:Next(),
    --- 0 ~ +oo
    DamageDealt = gen:Next(),
    --- 0 ~ 1.0 1 agi = 0.0025 critic
    CritRate = gen:Next(),
    --- -oo ~ +oo
    AttackSpeed = gen:Next(),
    --- 0.25 ~ 1.00
    AttackRate = gen:Next(),
    --- 0 ~ +oo 1 int = 0.002 haste
    CDR = gen:Next(),
    -- defensive --
    --- 0 ~ 0.75 1 agi = 0.004 dodge
    DodgeRate = gen:Next(),
    --- 0 ~ + oo
    PhyxResist = gen:Next(),
    PhyxDef = gen:Next(),
    --- 0 ~ + oo
    SpellResist = gen:Next(),
    SpellDef = gen:Next(),
    --- 0 ~ + oo
    PhyxCritTaken = gen:Next(),
    --- 0 ~ + oo
    SpellCritTaken = gen:Next(),
    --- 0 ~ + oo
    DamageTaken = gen:Next(),
    -- utility --
    LifeRegen = gen:Next(),
    --- 0 ~ +oo 1 int = 0.03 regen
    ManaRegen = gen:Next(),
    Speed = gen:Next(),
    Absorb = gen:Next(),
    LifeLeech = gen:Next(),
    ManaLeech = gen:Next(),
}

return UnitAttr
