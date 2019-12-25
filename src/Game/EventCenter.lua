local Event = require("Event")

local id = 0

local function GetId()
    id = id + 1
    return id
end

return {
    ---@param data { unit: unit, ability: int }
    SpellCast = Event.New(GetId()),
    Keyboard = Event.New(GetId()),
}
