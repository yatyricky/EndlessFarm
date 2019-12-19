
local __modules = {}
local require = function(path)
    local module = __modules[path]
    if module ~= nil then
        if not module.inited then
            module.cached = module.loader()
            module.inited = true
        end
        return module.cached
    else
        error("module not found")
        return nil
    end
end

----------------
__modules["Main"] = { inited = false, cached = false, loader = function(...)
---- START Main.lua ----
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

---- END Main.lua ----
 end}
----------------
__modules["Query"] = { inited = false, cached = false, loader = function(...)
---- START Query.lua ----
---@generic K
---@generic v
---@generic T
---@param data table<K, V> | V[]
---@param opts { where: (fun(k: K, v: V): boolean), select: (fun(k: K, v: V): T), any: (fun(k: K, v: V): boolean), all: (fun(k: K, v: V): boolean), asList: boolean }
---@return table<K, V> | T[] | boolean
local Query = function(data, opts)
    opts = opts or {}
    local asList = opts.asList
    local where = opts.where
    local select = opts.select
    local any = opts.any
    local all = opts.all
    local returnTable = select or (any == nil and all == nil)
    local ret = {}
    local key
    local value
    for k, v in pairs(data) do
        if where then
            if where(k, v) then
                if returnTable then
                    if asList then
                        key = #ret + 1
                    else
                        key = k
                    end
                    if select then
                        value = select(k, v)
                    else
                        value = v
                    end
                    ret[key] = value
                else
                    if any then
                        if any(k, v) then
                            return true
                        end
                    elseif all then
                        if not all(k, v) then
                            return false
                        end
                    end
                end
            end
        else
            if returnTable then
                if asList then
                    key = #ret + 1
                else
                    key = k
                end
                if select then
                    value = select(k, v)
                else
                    value = v
                end
                ret[key] = value
            else
                if any then
                    if any(k, v) then
                        return true
                    end
                elseif all then
                    if not all(k, v) then
                        return false
                    end
                end
            end
        end
    end
    if returnTable then
        return ret
    else
        if any then
            return false
        elseif all then
            return true
        end
    end
end

return Query

---- END Query.lua ----
 end}
__modules["Main"].loader()