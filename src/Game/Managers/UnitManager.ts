import { Vector2 } from "../../Math/Vector2";

local Vector2 = require("Math/Vector2")
local Unit = require("Game/GameObjects/Unit")
local UnitAttr = require("Game/GameObjects/UnitAttr")

local UnitManager = {}

---@param n_player player
---@param utid int
---@param pos Vector2
---@param face float
---@return Unit
function UnitManager.CreateUnit(n_player, utid, pos, face)
    pos = pos or Vector2.New()
    face = face or 0
    local u = CreateUnit(n_player, utid, pos.x, pos.y, face)
    return Unit.New(utid, u)
end

return UnitManager
