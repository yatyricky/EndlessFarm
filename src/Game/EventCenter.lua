local IDGenerator = require("Common/IDGenerator")
local Event = require("Event")

local id = IDGenerator.New()

return {
    ---@param data { unit: unit, ability: int }
    SpellCast = Event.New(id:Next()),
    Keyboard = Event.New(id:Next()),
}
