local System = require("Game/System")
local EventCenter = require("Game/EventCenter")

local InputSystem = class("InputSystem", System)

function InputSystem:Awake()
    local trigger

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_A, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_A) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_B, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_B) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_C, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_C) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_D, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_D) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_E, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_E) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_F, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_F) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_G, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_G) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_H, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_H) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_I, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_I) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_J, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_J) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_K, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_K) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_L, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_L) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_M, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_M) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_N, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_N) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_O, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_O) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_P, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_P) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_Q, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_Q) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_R, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_R) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_S, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_S) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_T, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_T) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_U, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_U) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_V, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_V) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_W, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_W) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_X, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_X) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_Y, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_Y) end)

    trigger = CreateTrigger()
    BlzTriggerRegisterPlayerKeyEvent(trigger, Player(0), OSKEY_Z, 0, true)
    TriggerAddAction(trigger, function () EventCenter.Keyboard:Broadcast(OSKEY_Z) end)
end

return InputSystem
