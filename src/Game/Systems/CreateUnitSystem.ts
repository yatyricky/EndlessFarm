local System = require("Game/System")
local UnitManager = require("Game/Managers/UnitManager")
local Vector2 = require("Math/Vector2")
local Timer = require("Timer")
local EventCenter = require("Game/EventCenter")
local Engine = require("Game/Engine")
local UnitAttr = require("Game/GameObjects/UnitAttr")

local CreateUnitSystem = class("CreateUnitSystem", System)

function CreateUnitSystem:Awake()
    EventCenter.Keyboard:AddListener(self.OnKeyboard, self)
end

function CreateUnitSystem:Start()
    self.u = UnitManager.CreateUnit(Player(0), UTID_BLADE_MASTER)
    self.c = 0

    UnitManager.CreateUnit(Player(0), UTID_DEMON_HUNTER)
    UnitManager.CreateUnit(Player(0), UTID_ARCHMAGE)
end

function CreateUnitSystem:Update(dt)
end

function CreateUnitSystem:OnKeyboard(key)
    if key == OSKEY_Q then
        log(self.u:ModAttr(UnitAttr.Strength, 1))
    end
    if key == OSKEY_W then
        log(self.u:ModAttr(UnitAttr.Strength, -1))
    end
    if key == OSKEY_E then
        log(self.u:ModAttr(UnitAttr.Agility, 1))
    end
    if key == OSKEY_R then
        log(self.u:ModAttr(UnitAttr.Agility, -1))
    end
    if key == OSKEY_T then
        log(self.u:ModAttr(UnitAttr.Intelligence, 1))
    end
    if key == OSKEY_Y then
        log(self.u:ModAttr(UnitAttr.Intelligence, -1))
    end
    if key == OSKEY_U then
        log(self.u:ModAttr(UnitAttr.Life, 1))
    end
    if key == OSKEY_I then
        log(self.u:ModAttr(UnitAttr.Life, -1))
    end
    if key == OSKEY_A then
        log(self.u:ModAttr(UnitAttr.Mana, 1))
    end
    if key == OSKEY_S then
        log(self.u:ModAttr(UnitAttr.Mana, -1))
    end
    if key == OSKEY_P then
        log(self.u:ModAttr(UnitAttr.Power, 1))
    end
    if key == OSKEY_D then
        log(self.u:ModAttr(UnitAttr.PhyxResist, 0.1))
    end
end

return CreateUnitSystem
