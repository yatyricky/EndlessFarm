local System = require("Game/System")
local UnitManager = require("Game/Managers/UnitManager")
local Vector2 = require("Math/Vector2")
local Timer = require("Timer")

local CreateUnitSystem = class("CreateUnitSystem", System)

function CreateUnitSystem:Awake()
end

function CreateUnitSystem:Start()
    log("CreateUnitSystem system started")
    local u = UnitManager.CreateUnit(Player(0), UTID_BLADE_MASTER)
    log("maxhp", BlzGetUnitMaxHP(u.n_unit))
    local timer = Timer.New(5, 1, function ()
        log("set hp")
        -- BlzSetUnitMaxHP(u.n_unit, 3000) bullshit api...
    end):Start()
end

function CreateUnitSystem:Update(dt)
end

return CreateUnitSystem
