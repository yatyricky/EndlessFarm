local Time = require("Time")
local Timer = require("Timer")
local World = require("Game/World")

local Engine = {}

function Engine.Start()
    local world = World.New()
    Engine.world = world

    world:Add(require("Game/Systems/TestSystem").New())
    world:Add(require("Game/Systems/InputSystem").New())
    world:Add(require("Game/Systems/CreateUnitSystem").New())
    -- world:Add(require("Game/Systems/SpellCastSystem").New())

    world:Awake()
    world:Start()

    local timer = Timer.New(0.01666667, -1, function ()
        world:Update(Time.GetTime())
    end):Start()
end

return Engine
