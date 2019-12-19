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
