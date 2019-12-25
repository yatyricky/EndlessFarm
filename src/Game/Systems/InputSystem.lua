local System = require("Game/System")
local EventCenter = require("Game/EventCenter")

local InputSystem = class("InputSystem", System)

function InputSystem.NativeKeyEventZ()
    EventCenter.Keyboard:Broadcast(OSKEY_Z)
end

function InputSystem.NativeKeyEventX()
    EventCenter.Keyboard:Broadcast(OSKEY_X)
end

function InputSystem:Awake()
    local trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_Z, 0, true)
    TriggerAddAction(trigger, InputSystem.NativeKeyEventZ)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_X, 0, true)
    TriggerAddAction(trigger, InputSystem.NativeKeyEventX)
end

return InputSystem
