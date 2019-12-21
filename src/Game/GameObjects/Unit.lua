local UnitConfig = require("Game/Configs/UnitConfig")

local Unit = class("Unit")

function Unit:Constructor()
    self.phyxPower = 0 -- 0 ~ +oo main attribute
    self.spellPower = 0
    self.phyxCrit = 0 -- 0 ~ 1.0 1 agi = 0.0025 critic
    self.spellCrit = 0 -- 0 ~ 1.0 1 int = 0.003 critic
    self.phyxSpeed = 0 -- -oo ~ +oo
    self.spellSpeed = 0 -- 0 ~ +oo 1 int = 0.002 haste
    self.attackRate = 0 -- 0.25 ~ 1.00
    self.damageDealt = 0 -- 0 ~ +oo

    self.parryRate = 0 -- 0 ~ 0.75 1 str = 0.002 block
    self.dodgeRate = 0 -- 0 ~ 0.75 1 agi = 0.004 dodge
    self.phyxTaken = 0 -- 0 ~ + oo
    self.spellTaken = 0 -- 0 ~ + oo
    self.phyxCTaken = 0 -- 0 ~ + oo
    self.spellCTaken = 0 -- 0 ~ + oo
    self.damageTaken = 0 -- 0 ~ +oo

    self.speed = 0
    self.absorb = 0
    self.life = 0
    self.mana = 0
    self.lifeRegen = 0
    self.manaRegen = 0 -- 0 ~ +oo 1 int = 0.03 regen
    self.strength = 0
    self.agility = 0
    self.intelligence = 0
    self.stunned = 0
    self.leechLife = 0
    self.leechMana = 0

    self.unitConfig = nil
    self.nativeUnit = nil
end

---@return int
function Unit:GetMainAttributeValue()
    if self.unitConfig.mainAtt == ATT_STR then
        return GetHeroStr(self.nativeUnit, true)
    elseif self.unitConfig.mainAttribute == ATT_AGI then
        return GetHeroAgi(self.nativeUnit, true)
    elseif self.unitConfig.mainAttribute == ATT_INT then
        return GetHeroInt(self.nativeUnit, true)
    end
    return 0
end

function Unit:GetPhyxPower()
    local atk = math.floor(self.phyxPower + self.unitConfig.atk1 + math.random() * (self.unitConfig.atk2 - self.unitConfig.atk1))
    return atk + self:GetMainAttributeValue()
end

function Unit:GetPhyxPowerMax()
    return self.unitConfig.atk2 + self:GetMainAttributeValue()
end

function Unit:GetSpellPower()
    return GetHeroInt(self.nativeUnit, true) + self.spellPower
end

function Unit:GetPhyxCrit()
    local ret = self.phyxCrit + GetHeroAgi(self.nativeUnit, true) * 0.001
    if (ret > 1) then
        ret = 1
    end
    return ret
end

function Unit:GetSpellCrit()
    local ret = self.spellCrit + GetHeroInt(self.nativeUnit, true) * 0.0015
    if (ret > 1) then
        ret = 1
    end
    return ret
end

function Unit:GetPhyxSpeed()
    return self.phyxSpeed
end

function Unit:GetSpellSpeed()
    return self.spellSpeed + GetHeroInt(self.nativeUnit, true) * 0.001
end

function Unit:GetAttackRate()
    local ret = self.attackRate
    if (ret < 0.25) then
        ret = 0.25
    end
    if (ret > 1) then
        ret = 1
    end
    return ret
end

function Unit:GetDamageDealt()
    local ret = self.damageDealt
    if (ret < 0) then
        ret = 0
    end
    return ret
end

function Unit:GetParryRate()
    local ret = self.parryRate + GetHeroStr(self.nativeUnit, true) * 0.002
    if (ret > 0.75) then
        ret = 0.75
    end
    -- if (!CanUnitBlock(self.nativeUnit)) then
    --     ret = 0.0
    -- end
    return ret
end

function Unit:GetDodgeRate()
    local ret = self.dodgeRate + GetHeroAgi(self.nativeUnit, true) * 0.002
    if (ret > 0.75) then
        ret = 0.75
    end
    return ret
end

function Unit:GetPhyxTaken()
    local ret = self.phyxTaken + self.unitConfig.def
    if (ret > 75) then
        ret = 75
    end
    return ret
end

function Unit:GetSpellTaken()
    local ret = self.spellTaken
    if (ret < 0) then
        ret = 0
    end
    return ret
end

function Unit:GetPhyxCritTaken()
    return self.phyxCTaken
end

function Unit:GetSpellCritTaken()
    return self.spellCTaken
end

function Unit:GetDamageTaken()
    local ret = self.damageTaken
    if (ret < 0) then
        ret = 0
    end
    return ret
end

function Unit:GetSpeed()
    return GetUnitMoveSpeed(self.nativeUnit)
end

-- function Unit:ModArmor(integer m) then
--         ModUnitArmor(self.nativeUnit, m)
--     end
-- function Unit:ModInt(integer m) then
--         ModUnitInt(self.nativeUnit, m)
--     end
-- function Unit:ModAgi(integer m) then
--         ModUnitAgi(self.nativeUnit, m)
--     end
-- function Unit:ModStr(integer m) then
--         ModUnitStr(self.nativeUnit, m)
--     end
function Unit:GetLifeRegen()
    return self.lifeRegen
end

-- 1 int = 10 mp, 1 mp = 10 secs, thus 100 secs = 1 full mana slot
-- 0.1 = 100% / 10
function Unit:GetManaRegen()
    local ret = self.manaRegen + GetHeroInt(self.nativeUnit, true) * 0.03
    if (self.unitConfig.mainAtt == ATT_INT) then
        ret = ret + 6.5
    else
        ret = ret * 0.25
    end
    return ret
end

-- function Unit:ModAttackSpeed(integer mod) then
--         ModUnitAttackSpeed(self.nativeUnit, mod)
--     end
-- function Unit:ModAP(integer num) then
--         ModUnitAP(self.nativeUnit, num)
--     end
-- function Unit:ModLife(integer m) then
--         ModUnitLife(self.nativeUnit, m)
--     end
-- function Unit:ModMana(integer m) then
--         ModUnitMaxMana(self.nativeUnit, m)
--     end
-- function Unit:ModSpeed(integer mod) then
--         integer spd
--         self.speed += mod
--         spd = self.speed
--         if (spd > 522) themspd = 522end
--         if (spd < 0) themspd = 0end
--         SetUnitMoveSpeed(self.nativeUnit, spd)
--     end
-- function Unit:GetDropValue()
--     -- return R2I(GetUnitState(self.nativeUnit, UNIT_STATE_MAX_LIFE) + GetUnitState(self.nativeUnit, UNIT_STATE_MAX_MANA))
-- end
return Unit
