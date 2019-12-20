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
            return '"(cyclic ref ' .. str .. ')"'
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
        local kvs = {}
        kvs[#kvs + 1] = idt .. '"__id__":' .. colonw .. '"' .. str .. '"'
        for k, v in pairs(t) do
            kvs[#kvs + 1] = idt .. '"' .. tostring(k) .. '":' .. colonw .. parseTable(v, nindent, lindent, cached)
        end
        if lindent then
            sb = sb .. t_join(kvs, ",\n")
        else
            sb = sb .. t_join(kvs, ",")
        end
        if lindent then
            sb = sb .. "\n" .. (pindent or "")
        end
        sb = sb .. "}"
        cached[str] = false
        return sb
    end
    return parseTable(t, indent)
end
