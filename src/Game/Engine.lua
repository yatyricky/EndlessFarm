local Timer = require("Timer")
local World = require("Game/World")

local Engine = {}

function Engine.Start()
    local world = World.New()

    world:Add(require("Game/Systems/TestSystem").New())
    world:Add(require("Game/Systems/SpellCastSystem").New())

    world:Awake()
    world:Start()

    local timer = Timer.New(0.001, -1, function (delta)
        world:Update(delta)
    end)
end

return Engine
