local System = require("Game/System")
local Timer = require("Timer")
local Vector2 = require("Math/Vector2")

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
end

function TestSystem:Start()
    log("Test system is run")
end

function TestSystem:Update(dt)
end

return TestSystem
