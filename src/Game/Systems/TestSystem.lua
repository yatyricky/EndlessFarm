local System = require("Game/System")

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
    log("TestSystem:Awake")
end

function TestSystem:Start()
    log("TestSystem:Start")
end

function TestSystem:Update(dt)
    log("TestSystem:Update " .. dt)
end

return TestSystem
