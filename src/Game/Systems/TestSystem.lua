local System = require("Game/System")

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
    print("TestSystem:Awake")
end

function TestSystem:Start()
    print("TestSystem:Start")
end

function TestSystem:Update(dt)
    print("TestSystem:Update " .. dt)
end

return TestSystem
