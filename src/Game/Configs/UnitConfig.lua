local UnitConfig = {}

---@class UnitConfig
---@field UTID int
---@field MainAtt int
---@field HP int
---@field MP int
---@field ATK1 int
---@field ATK2 int
---@field Def float
---@field SDef float
---@field Dodge float
---@field Crit float
---@field Career int

---@type UnitConfig[]
UnitConfig.DB = {
    { UTID = UTID_BLADE_MASTER , MainAtt = ATT_STR, HP = 3000  , MP = 200, ATK1 = 50  , ATK2 = 100  , Def = 0.1, SDef = 1 , Dodge = 0.25    ,  Crit = 0.1    , Career = CAREER_TYPE_DPS   },
}

local ref = {}
for _, v in pairs(UnitConfig.DB) do
    ref[v.UTID] = v
end
---@type table<int, UnitConfig>
UnitConfig.ById = setmetatable(ref, {
    __index = function(t, k)
        local v = rawget(t, k)
        if v then
            return v
        else
            logerror("id not found " .. k)
        end
    end
})

return UnitConfig
