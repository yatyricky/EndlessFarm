---@generic T
---@param t T[]
---@param delimeter string
---@param formatter fun(elem: T): string default=tostring(T)
---@return string
function t_join(t, delimeter, formatter)
    local res = ""
    for i = 1, #t do
        if formatter then
            res = res .. formatter(t[i])
        else
            res = res .. tostring(t[i])
        end
        if i < #t then
            res = res .. delimeter
        end
    end
    return res
end

---@param t table
---@return bool
function t_isempty(t)
    return next(t) == nil
end

---@param t table
---@param indent string
---@return string
function t_tojson(t, indent)
    local function parsePrimitive(o)
        local to = type(o)
        if to == "string" then
            return '"' .. o .. '"'
        end
        local so = tostring(o)
        if to == "function" then
            local info = debug.getinfo(o, "S")
            -- info.name is nil because o is not a calling level
            if info.what == "C" then
                return '"' .. so .. ", C function" .. '"'
            else
                -- the information is defined through lines
                return '"' .. so .. ", defined in (" .. info.linedefined .. "-" .. info.lastlinedefined .. ")" .. info.source .. '"'
            end
        else
            return so
        end
    end

    local function parseTable(t, lindent, pindent, cached)
        if type(t) ~= "table" then
            return parsePrimitive(t)
        end
        cached = cached or {}
        local str = tostring(t)
        if cached[str] then
            return '"_ ref ' .. str .. '"'
        end
        cached[str] = true
        local sb = "{"
        if lindent then
            sb = sb .. "\n"
        end
        local idt = lindent or ""
        local oindent = indent or ""
        local nindent = lindent and idt .. oindent or nil
        local colonw = lindent and " " or ""
        sb = sb .. idt .. '"_ ":' .. colonw .. '"' .. str .. '"'
        for k, v in pairs(t) do
            if lindent then
                sb = sb .. ",\n"
            else
                sb = sb .. ","
            end
            local ks
            if type(k) == "number" then
                ks = "_ " .. k
            else
                ks = tostring(k)
            end
            sb = sb .. idt .. '"' .. ks .. '":' .. colonw .. parseTable(v, nindent, lindent, cached)
        end
        if lindent then
            sb = sb .. "\n" .. (pindent or "")
        end
        sb = sb .. "}"
        -- cached[str] = false
        return sb
    end
    return parseTable(t, indent)
end

---@generic K
---@generic v
---@generic T
---@param data table<K, V> | V[]
---@param opts { where: (fun(k: K, v: V): boolean), select: (fun(k: K, v: V): T), any: (fun(k: K, v: V): boolean), all: (fun(k: K, v: V): boolean), asList: boolean }
---@return table<K, V> | T[] | boolean
function t_query(data, opts)
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

t_insert = table.insert
