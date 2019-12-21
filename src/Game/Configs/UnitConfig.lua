local UnitConfig = {}

UnitConfig.DB = {
    { utid = UTID_BLADE_MASTER , mainAtt = ATT_STR, hp = 3000  , mp = 200, atk1 = 50  , atk2 = 100  , def = 10 , dodge = 0.25    , parry = 0.25    , staken = 1    , pcrit = 0.1    , career = CAREER_TYPE_DPS   },
}

local ref = {}
for _, v in pairs(UnitConfig.DB) do
    ref[v.utid] = v
end
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
