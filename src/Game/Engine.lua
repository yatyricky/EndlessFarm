local Time = require("Time")
local Timer = require("Timer")
local World = require("Game/World")

local Engine = {}

function Engine.Start()
    local world = World.New()

    world:Add(require("Game/Systems/TestSystem").New())
    world:Add(require("Game/Systems/InputSystem").New())
    world:Add(require("Game/Systems/CreateUnitSystem").New())
    world:Add(require("Game/Systems/SpellCastSystem").New())

    world:Awake()
    world:Start()

    local time = Time.GetTime()
    local timer = Timer.New(0.01666667, -1, function ()
        local curr = Time.GetTime()
        world:Update(curr - time)
        time = curr
    end):Start()

    Engine.world = world
end

return Engine
