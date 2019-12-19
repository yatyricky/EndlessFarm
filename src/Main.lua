local Query = require("Query")

local datas = {
    15,
    50,
    66
}
local res = Query(datas, {
    where = function(k, v)
        return v < 20
    end
})

for index, value in ipairs(res) do
    print(value)
end
