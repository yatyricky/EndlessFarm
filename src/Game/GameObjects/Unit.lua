local UnitConfig = require("Game/Configs/UnitConfig")
local UnitAttr = require("Game/GameObjects/UnitAttr")

local Unit = class("Unit") ---@class Unit

function Unit:Constructor(utid, n_unit)
    self.n_unit = n_unit
    self.config = UnitConfig.ById[utid]

    self.attrs = {}
    self.attrGet = {}
    self.attrSet = {}
    self.attrRet = {}

    self:_InitAttribute(UnitAttr.PhyxPower, nil, function()
        -- ModUnitAP(self.n_unit, num) todo
    end, function()
        local config = self.config
        local atk = self.attrs[UnitAttr.PhyxPower] + math.random(config.atk1, config.atk2)
        return atk + self:GetMainAttrValue()
    end)
    self:_InitAttribute(UnitAttr.SpellPower, nil, nil, function()
        return self.attrs[UnitAttr.SpellPower] + GetHeroInt(self.n_unit, true)
    end)
    self:_InitAttribute(UnitAttr.PhyxCrit, nil, nil, function()
        local ret = self.attrs[UnitAttr.PhyxCrit] + GetHeroAgi(self.n_unit, true) * 0.001
        return math.min(ret, 1)
    end)
    self:_InitAttribute(UnitAttr.SpellCrit, nil, nil, function()
        local ret = self.attrs[UnitAttr.SpellCrit] + GetHeroInt(self.n_unit, true) * 0.0015
        return math.min(ret, 1)
    end)
    self:_InitAttribute(UnitAttr.PhyxSpeed, nil, function(value)
        -- ModUnitAttackSpeed(self.n_unit, mod) todo
    end, nil)
    self:_InitAttribute(UnitAttr.SpellCDR, nil, function()
        -- todo
    end, nil)
    self:_InitAttribute(UnitAttr.AttackRate, nil, nil, function()
        return math.clamp(self.attrs[UnitAttr.AttackRate], 0.25, 1)
    end)
    self:_InitAttribute(UnitAttr.DamageDealt, nil, nil, function()
        return math.max(self.attrs[UnitAttr.DamageDealt], 0)
    end)
    self:_InitAttribute(UnitAttr.ParryRate, nil, nil, function()
        local ret = self.attrs[UnitAttr.ParryRate] + GetHeroStr(self.n_unit, true) * 0.002
        return math.min(ret, 0.75)
    end)
    self:_InitAttribute(UnitAttr.DodgeRate, nil, nil, function()
        local ret = self.attrs[UnitAttr.DodgeRate] + GetHeroAgi(self.n_unit, true) * 0.002
        return math.min(ret, 0.75)
    end)
    self:_InitAttribute(UnitAttr.PhyxTaken, nil, nil, function()
        local ret = 100 - self.attrs[UnitAttr.PhyxTaken] - self.config.def
        return math.max(ret, 0) / 100
    end)
    self:_InitAttribute(UnitAttr.SpellTaken, nil, nil, function()
        return math.max(self.attrs[UnitAttr.SpellTaken], 0)
    end)
    self:_InitAttribute(UnitAttr.PhyxCritTaken, nil, nil, nil)
    self:_InitAttribute(UnitAttr.SpellCritTaken, nil, nil, nil)
    self:_InitAttribute(UnitAttr.DamageTaken, nil, function()
        -- ModUnitArmor(self.n_unit, m) todo
    end, function()
        return math.max(self.attrs[UnitAttr.DamageTaken], 0)
    end)
    self:_InitAttribute(UnitAttr.Strength, function()
        return GetHeroStr(self.n_unit, true)
    end, function(value)
        -- ModUnitStr(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Agility, function()
        return GetHeroAgi(self.n_unit, true)
    end, function(value)
        -- ModUnitAgi(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Intelligence, function()
        return GetHeroInt(self.n_unit, true)
    end, function(value)
        -- ModUnitInt(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Life, function()
        return GetUnitState(self.n_unit, UNIT_STATE_MAX_LIFE)
    end, function(value)
        -- ModUnitLife(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Mana, function()
        return GetUnitState(self.n_unit, UNIT_STATE_MAX_MANA)
    end, function(value)
        -- ModUnitMaxMana(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.LifeRegen, nil, nil, nil)
    self:_InitAttribute(UnitAttr.ManaRegen, nil, nil, function()
        local ret = self.attrs[UnitAttr.ManaRegen] + GetHeroInt(self.n_unit, true) * 0.03
        if (self.config.mainAtt == ATT_INT) then
            ret = ret + 6.5
        else
            ret = ret * 0.25
        end
        return ret
    end)
    self:_InitAttribute(UnitAttr.Speed, function()
        return GetUnitMoveSpeed(self.n_unit)
    end, function(value)
        --  integer spd
        --  self.speed += mod
        --  spd = self.speed
        --  if (spd > 522) themspd = 522end
        --  if (spd < 0) themspd = 0end
        --  SetUnitMoveSpeed(self.n_unit, spd) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Absorb, nil, nil, nil)
    self:_InitAttribute(UnitAttr.LifeLeech, nil, nil, nil)
    self:_InitAttribute(UnitAttr.ManaLeech, nil, nil, nil)

    self:_InitWithConfig()
end

function Unit:_InitAttribute(attr, getter, setter, retter)
    self.attrs[attr] = 0
    getter = getter or function()
        return self.attrs[attr]
    end
    setter = setter or function(value)
        self.attrs[attr] = value
    end
    retter = retter or getter
    self.attrGet = getter
    self.attrSet = setter
    self.attrRet = retter
end

function Unit:_InitWithConfig()
    
end

---@param attr UnitAttr
---@return float
function Unit:GetAttr(attr)
    return self.attrGet[attr]()
end

---@param attr UnitAttr
---@param value float
function Unit:SetAttr(attr, value)
    self.attrSet[attr](value)
end

---@param attr UnitAttr
---@return float
function Unit:ReturnAttr(attr)
    self.attrRet[attr]()
end

---@return int
function Unit:GetMainAttrValue()
    if self.unitConfig.mainAtt == ATT_STR then
        return GetHeroStr(self.n_unit, true)
    elseif self.unitConfig.mainAttribute == ATT_AGI then
        return GetHeroAgi(self.n_unit, true)
    elseif self.unitConfig.mainAttribute == ATT_INT then
        return GetHeroInt(self.n_unit, true)
    end
    return 0
end

function Unit:ReturnPhyxPowerMax()
    return self.config.atk2 + self:GetMainAttrValue()
end

-- function Unit:GetDropValue()
--     -- return R2I(GetUnitState(self.n_unit, UNIT_STATE_MAX_LIFE) + GetUnitState(self.n_unit, UNIT_STATE_MAX_MANA))
-- end
return Unit
