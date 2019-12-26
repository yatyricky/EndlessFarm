local UnitConfig = require("Game/Configs/UnitConfig")
local UnitAttr = require("Game/GameObjects/UnitAttr")

---@type table<int, { pos: int[], neg: int[] }>
local AttrAbilities = {
    [UnitAttr.Strength] = {
        neg = {},
        pos = { 'A000', 'A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A009', 'A00A', 'A00B', 'A00C' }
    },
    [UnitAttr.Agility] = {
        neg = {},
        pos = { 'A000', 'A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A009', 'A00A', 'A00B', 'A00C' }
    },
    [UnitAttr.Intelligence] = {
        neg = {},
        pos = { 'A000', 'A001', 'A002', 'A003', 'A004', 'A005', 'A006', 'A007', 'A008', 'A009', 'A00A', 'A00B', 'A00C' }
    },
}

local Unit = class("Unit") ---@class Unit

function Unit:Constructor(utid, n_unit)
    self.n_unit = n_unit
    self.config = UnitConfig.ById[utid]

    self.attrs = {}
    self.attrGet = {}
    self.attrSet = {}
    self.attrRet = {}
    self.attrMod = {}

    self.skillList = {}

    self:_InitAttribute(UnitAttr.Strength, nil, function(value)
        self.attrs[UnitAttr.Strength] = value
        self:_SetNativeAttr(UnitAttr.Strength, value)
    end, function(...)
        return GetHeroStr(self.n_unit, not ({...}[1] == nil and true or {...}[1]))
    end, function(value)
        self.attrs[UnitAttr.Strength] = self.attrs[UnitAttr.Strength] + value
        self:_SetNativeAttr(UnitAttr.Strength, self.attrs[UnitAttr.Strength])
    end)

    self:_InitAttribute(UnitAttr.Agility, nil, function(value)
        self.attrs[UnitAttr.Agility] = value
        self:_SetNativeAttr(UnitAttr.Agility, value)
    end, function(...)
        return GetHeroAgi(self.n_unit, not ({...}[1] == nil and true or {...}[1]))
    end, function(value)
        self.attrs[UnitAttr.Agility] = self.attrs[UnitAttr.Agility] + value
        self:_SetNativeAttr(UnitAttr.Agility, self.attrs[UnitAttr.Agility])
    end)

    self:_InitAttribute(UnitAttr.Intelligence, nil, function(value)
        self.attrs[UnitAttr.Intelligence] = value
        self:_SetNativeAttr(UnitAttr.Intelligence, value)
    end, function(...)
        return GetHeroInt(self.n_unit, not ({...}[1] == nil and true or {...}[1]))
    end, function(value)
        self.attrs[UnitAttr.Intelligence] = self.attrs[UnitAttr.Intelligence] + value
        self:_SetNativeAttr(UnitAttr.Intelligence, self.attrs[UnitAttr.Intelligence])
    end)

    self:_InitAttribute(UnitAttr.Life, function(...)
        if {...}[1] == nil and true or {...}[1] then
            return self.config.hp
        else
            return self.attrs[UnitAttr.Life]
        end
    end, function(value)
        self.attrs[UnitAttr.Life] = value
        self:_SetNativeAttr(UnitAttr.Life, self.attrs[UnitAttr.Life] - 1)
    end, function (...)
        if {...}[1] == nil and true or {...}[1] then
            return self.config.hp + GetHeroStr(self.n_unit, true) * 10
        else
            return GetUnitState(self.n_unit, UNIT_STATE_MAX_LIFE)
        end
    end, function (value)
        self.attrs[UnitAttr.Life] = self.attrs[UnitAttr.Life] + value
        self:_SetNativeAttr(UnitAttr.Life, self.attrs[UnitAttr.Life] - 1)
    end)

    self:_InitAttribute(UnitAttr.Mana, function(...)
        if {...}[1] == nil and true or {...}[1] then
            return self.config.mp
        else
            return self.attrs[UnitAttr.Mana]
        end
    end, function(value)
        self.attrs[UnitAttr.Mana] = value
        self:_SetNativeAttr(UnitAttr.Mana, self.attrs[UnitAttr.Mana])
    end, function(...)
        if {...}[1] == nil and true or {...}[1] then
            return self.config.mp + GetHeroInt(self.n_unit, true) * 10
        else
            return GetUnitState(self.n_unit, UNIT_STATE_MAX_MANA)
        end
    end, function (value)
        self.attrs[UnitAttr.Mana] = self.attrs[UnitAttr.Mana] + value
        self:_SetNativeAttr(UnitAttr.Mana, self.attrs[UnitAttr.Mana])
    end)

    self:_InitAttribute(UnitAttr.Power, nil, function(value)
        self.attrs[UnitAttr.Power] = value
        self:_SetNativeAttr(UnitAttr.Power, self.attrs[UnitAttr.Power])
    end, function()
        local config = self.config
        local atk = self.attrs[UnitAttr.Power] + math.random(config.atk1, config.atk2)
        return atk + self:GetMainAttrValue()
    end, function (value)
        self.attrs[UnitAttr.Power] = self.attrs[UnitAttr.Power] + value
        self:_SetNativeAttr(UnitAttr.Power, self.attrs[UnitAttr.Power])
    end)

    self:_InitAttribute(UnitAttr.DamageDealt, nil, nil, function()
        return n_max(self.attrs[UnitAttr.DamageDealt], 0)
    end, nil)

    self:_InitAttribute(UnitAttr.CritRate, nil, nil, function()
        return n_min(self.attrs[UnitAttr.CritRate], 1)
    end)

    self:_InitAttribute(UnitAttr.AttackSpeed, nil, function(value)
        self.attrs[UnitAttr.AttackSpeed] = value
        self:_SetNativeAttr(UnitAttr.AttackSpeed, n_round(value * 100))
    end, nil, function (value)
        self.attrs[UnitAttr.AttackSpeed] = self.attrs[UnitAttr.AttackSpeed] + value
        self:_SetNativeAttr(UnitAttr.AttackSpeed, n_round(self.attrs[UnitAttr.AttackSpeed] * 100))
    end)

    self:_InitAttribute(UnitAttr.AttackRate, nil, nil, function()
        return n_clamp(self.attrs[UnitAttr.AttackRate], 0.25, 1)
    end, nil)

    self:_InitAttribute(UnitAttr.SpellCDR, nil, function()
        -- todo
    end, nil)

    self:_InitAttribute(UnitAttr.DodgeRate, nil, nil, function()
        local ret = self.attrs[UnitAttr.DodgeRate] + GetHeroAgi(self.n_unit, true) * 0.002
        return n_min(ret, 0.75)
    end)

    self:_InitAttribute(UnitAttr.PhyxResist, function (...)
        if {...}[1] == nil and true or {...}[1] then
            return self.config.def
        else
            return self.config.def + self.attrs[UnitAttr.PhyxResist]
        end
    end, function (value)
        self.attrs[UnitAttr.PhyxResist] = value
        self:_SetNativeAttr(UnitAttr.PhyxResist, n_round(self.attrs[UnitAttr.PhyxResist] * 100))
    end, nil, function (value)
        self.attrs[UnitAttr.PhyxResist] = self.attrs[UnitAttr.PhyxResist] + value
        self:_SetNativeAttr(UnitAttr.PhyxResist, n_round(self.attrs[UnitAttr.PhyxResist] * 100))
    end)

    self:_InitAttribute(UnitAttr.PhyxDef, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.SpellResist, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.SpellDef, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.PhyxCritTaken, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.SpellCritTaken, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.DamageTaken, nil, nil, function()
        return n_max(self.attrs[UnitAttr.DamageTaken], 0)
    end, nil)

    self:_InitAttribute(UnitAttr.LifeRegen, nil, nil, nil, nil)

    self:_InitAttribute(UnitAttr.ManaRegen, nil, nil, nil, nil)

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

---@param n_unit unit
---@param attr UnitAttr
---@param value int
function Unit:_SetNativeAttr(attr, value)
    local prev = self:GetAttr(attr)
    if prev == value then return end
    self:SetAttr(attr, value)
    -- log("$VAR$ of " + GetUnitNameEx(u) +" is set to " + I2S(amount))
    local u = self.n_unit
    local conf = AttrAbilities[attr]
    local neg = conf.neg
    local pos = conf.pos
    -- validation
    value = n_clamp(value, 2 ^ #neg - 1, 2 ^ #pos - 1)

    local function removeAll(what)
        for i = 1, #what do
            local e = what[i]
            if GetUnitAbilityLevel(u, e) > 0 then
                UnitRemoveAbility(u, e)
            end
        end
    end

    local function addAbs(what, v)
        local it = 1
        for i = 1, #what do
            local e = what[i]
            local should = BlzBitAnd(v, it) == it
            local has = GetUnitAbilityLevel(u, e) > 0
            if should and not has then
                UnitAddAbility(u, e)
                UnitMakeAbilityPermanent(u, true, e)
            end
            if not should and has then
                UnitRemoveAbility(u, e)
            end
            it = it * 2
        end
    end

    if value == 0 then
        removeAll(neg)
        removeAll(pos)
    else
        if value < 0 then
            removeAll(pos)
            addAbs(neg, math.abs(value))
        else
            removeAll(neg)
            addAbs(pos, value)
        end
    end
end

---@param attr UnitAttr
---@param getter fun(): float
---@param setter fun(val: float): void
---@param retter fun(): float
---@param modder fun(val: float): void
function Unit:_InitAttribute(attr, getter, setter, retter, modder)
    self.attrs[attr] = 0
    getter = getter or function()
        return self.attrs[attr]
    end
    setter = setter or function(value)
        self.attrs[attr] = value
    end
    retter = retter or getter
    modder = modder or function(value)
        setter(getter() + value)
    end
    self.attrGet[attr] = getter
    self.attrSet[attr] = setter
    self.attrRet[attr] = retter
    self.attrMod[attr] = modder
end

function Unit:_InitWithConfig()

end

---@param attr UnitAttr
---@return float
function Unit:GetAttr(attr, ...)
    return self.attrGet[attr](...)
end

---@param attr UnitAttr
---@param value float
function Unit:SetAttr(attr, value)
    self.attrSet[attr](value)
end

---@param attr UnitAttr
---@return float
function Unit:ReturnAttr(attr, ...)
    self.attrRet[attr](...)
end

function Unit:ModAttr(attr, value)
    self.attrMod[attr](value)
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
