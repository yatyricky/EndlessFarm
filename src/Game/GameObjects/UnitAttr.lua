---@class UnitAttr
local UnitAttr = {
    PhyxPower = 1,
    SpellPower = 2,
    --- 0 ~ 1.0 1 agi = 0.0025 critic
    PhyxCrit = 3,
    --- 0 ~ 1.0 1 int = 0.003 critic
    SpellCrit = 4,
    --- -oo ~ +oo
    PhyxSpeed = 5,
    --- 0 ~ +oo 1 int = 0.002 haste
    SpellCDR = 6,
    --- 0.25 ~ 1.00
    AttackRate = 7,
    --- 0 ~ +oo
    DamageDealt = 8,
    --- 0 ~ 0.75 1 str = 0.002 block
    ParryRate = 9,
    --- 0 ~ 0.75 1 agi = 0.004 dodge
    DodgeRate = 10,
    --- 0 ~ + oo
    PhyxTaken = 11,
    --- 0 ~ + oo
    SpellTaken = 12,
    --- 0 ~ + oo
    PhyxCritTaken = 13,
    --- 0 ~ + oo
    SpellCritTaken = 14,
    --- 0 ~ + oo
    DamageTaken = 15,
    Strength = 16,
    Agility = 17,
    Intelligence = 18,
    Life = 19,
    Mana = 20,
    LifeRegen = 21,
    --- 0 ~ +oo 1 int = 0.03 regen
    ManaRegen = 22,
    Speed = 23,
    Absorb = 24,
    LifeLeech = 25,
    ManaLeech = 26,
}

return UnitAttr
