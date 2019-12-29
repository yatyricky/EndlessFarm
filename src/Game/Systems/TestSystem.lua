local System = require("Game/System")
local Timer = require("Timer")
local Vector2 = require("Math/Vector2")
local EventCenter = require("Game/EventCenter")

local TestSystem = class("TestSystem", System)

function TestSystem:OnClickedZ()
    
end

function TestSystem:Awake()
    EventCenter.Keyboard:AddListener(self.OnClickedZ, self)
end

function TestSystem:Start()
    log("Test system is run")
end

function TestSystem:Update(dt)
end

return TestSystem
