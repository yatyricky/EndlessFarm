local System = require("Game/System")
local EventCenter = require("Game/EventCenter")

local SpellCastSystem = class("SpellCastSystem", System)

function SpellCastSystem:Awake()
    EventCenter.SpellCast:AddListener(self.OnSpellCast, self)
end

function SpellCastSystem:OnSpellCast(unit, ability)
    log(GetUnitName(unit) .. " cast " .. ability)
end

return SpellCastSystem
