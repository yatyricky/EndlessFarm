local System = require("Game/System")
local Timer = require("Timer")

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
end

function TestSystem:Start()
    self.counter = 1
    self.t = Timer.New(0.7, 1, self.Callback, self):Start()
end

function TestSystem:Update(dt)
end

function TestSystem:Callback()
    log("definite timer called", self.counter)
end

return TestSystem
