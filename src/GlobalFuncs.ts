export function Stringify(obj: any): string {
    return "";
}

export function NLerp(this: void, a: number, b: number, t: number): number {
    return a + (b - a) * t;
}

export function NClamp(this: void, n: number, min: number, max: number): number {
    return Math.min(Math.max(min, n), max);
}

export function NRound(this: void, n: number): int {
    return Math.floor(n + 0.5);
}

// n_floor = math.floor
// n_min = math.min
// n_max = math.max

// ---@param n number
// ---@param a number
// ---@param b number
// ---@return number
// function n_clamp(n, a, b)
//     return n_min(n_max(n, a), b)
// end

// ---@param n number
// ---@return number
// function n_round(n)
//     return n_floor(n + 0.5)
// end

// ---@generic T
// ---@param t T[]
// ---@param delimeter string
// ---@param formatter fun(elem: T): string default=tostring(T)
// ---@return string
// function t_join(t, delimeter, formatter)
//     local res = ""
//     for i = 1, #t do
//         if formatter then
//             res = res .. formatter(t[i])
//         else
//             res = res .. tostring(t[i])
//         end
//         if i < #t then
//             res = res .. delimeter
//         end
//     end
//     return res
// end

// ---@param t table
// ---@return bool
// function t_isempty(t)
//     return next(t) == nil
// end

// ---@param t table
// ---@param indent string
// ---@return string
// function t_tojson(t, indent)
//     local function parsePrimitive(o)
//         local to = type(o)
//         if to == "string" then
//             return '"' .. o .. '"'
//         end
//         local so = tostring(o)
//         if to == "function" then
//             return '"' .. so .. '"'
//             -- local info = debug.getinfo(o, "S")
//             -- info.name is nil because o is not a calling level
//             -- if info.what == "C" then
//             --     return '"' .. so .. ", C function" .. '"'
//             -- else
//             --     -- the information is defined through lines
//             --     return '"' .. so .. ", defined in (" .. info.linedefined .. "-" .. info.lastlinedefined .. ")" .. info.source .. '"'
//             -- end
//         else
//             return so
//         end
//     end

//     local function parseTable(t, lindent, pindent, cached)
//         if type(t) ~= "table" then
//             return parsePrimitive(t)
//         end
//         cached = cached or {}
//         local str = tostring(t)
//         if cached[str] then
//             return '"_ ref ' .. str .. '"'
//         end
//         cached[str] = true
//         local sb = "{"
//         if lindent then
//             sb = sb .. "\n"
//         end
//         local idt = lindent or ""
//         local oindent = indent or ""
//         local nindent = lindent and idt .. oindent or nil
//         local colonw = lindent and " " or ""
//         sb = sb .. idt .. '"_ ":' .. colonw .. '"' .. str .. '"'
//         for k, v in pairs(t) do
//             if lindent then
//                 sb = sb .. ",\n"
//             else
//                 sb = sb .. ","
//             end
//             local ks
//             if type(k) == "number" then
//                 ks = "_ " .. k
//             else
//                 ks = tostring(k)
//             end
//             sb = sb .. idt .. '"' .. ks .. '":' .. colonw .. parseTable(v, nindent, lindent, cached)
//         end
//         if lindent then
//             sb = sb .. "\n" .. (pindent or "")
//         end
//         sb = sb .. "}"
//         -- cached[str] = false
//         return sb
//     end
//     return parseTable(t, indent)
// end

// ---@generic K
// ---@generic v
// ---@generic T
// ---@param data table<K, V> | V[]
// ---@param opts { where: (fun(k: K, v: V): boolean), select: (fun(k: K, v: V): T), any: (fun(k: K, v: V): boolean), all: (fun(k: K, v: V): boolean), asList: boolean }
// ---@return table<K, V> | T[] | boolean
// function t_query(data, opts)
//     -- parse opts
//     opts = opts or {}
//     local select = opts.select
//     local where = opts.where
//     local any = opts.any
//     local all = opts.all
//     local sort = opts.sort
//     local asList = opts.asList or (sort ~= nil)

//     local bst = nil
//     local function bstAdd(data)
//         local newNode = { v = data, l = nil, r = nil }
//         if bst == nil then
//             bst = newNode
//         else
//             local cursor = bst
//             local prev
//             local isl = true
//             while cursor ~= nil do
//                 prev = cursor
//                 if sort(data, cursor.v) then
//                     cursor = cursor.l
//                     isl = true
//                 else
//                     cursor = cursor.r
//                     isl = false
//                 end
//             end
//             if isl then
//                 prev.l = newNode
//             else
//                 prev.r = newNode
//             end
//         end
//     end

//     local returnTable = select or (any == nil and all == nil) -- return type is table or bool
//     local ret = {}
//     local key
//     local value
//     for k, v in pairs(data) do
//         if where then
//             if where(k, v) then
//                 if returnTable then
//                     if asList then
//                         key = #ret + 1
//                     else
//                         key = k
//                     end
//                     if select then
//                         value = select(k, v)
//                     else
//                         value = v
//                     end
//                     if sort then
//                         bstAdd(value)
//                     end
//                     ret[key] = value
//                 else
//                     if any then
//                         if any(k, v) then
//                             return true
//                         end
//                     elseif all then
//                         if not all(k, v) then
//                             return false
//                         end
//                     end
//                 end
//             end
//         else
//             if returnTable then
//                 if asList then
//                     key = #ret + 1
//                 else
//                     key = k
//                 end
//                 if select then
//                     value = select(k, v)
//                 else
//                     value = v
//                 end
//                 if sort then
//                     bstAdd(value)
//                 end
//                 ret[key] = value
//             else
//                 if any then
//                     if any(k, v) then
//                         return true
//                     end
//                 elseif all then
//                     if not all(k, v) then
//                         return false
//                     end
//                 end
//             end
//         end
//     end
//     if returnTable then
//         if sort then
//             local obst = {}
//             local function bstOut(node)
//                 if node == nil then
//                     return
//                 end
//                 bstOut(node.l)
//                 obst[#obst + 1] = node.v
//                 bstOut(node.r)
//             end
//             bstOut(bst)
//             return obst
//         else
//             return ret
//         end
//     else
//         if any then
//             return false
//         elseif all then
//             return true
//         end
//     end
// end

// t_insert = table.insert

// ---@param str string
// ---@param sep string
// ---@return string[]
// function s_split(str, sep)
//     if sep == nil then
//         sep = "%s"
//     end
//     local t = {}
//     for str in string.gmatch(str, "([^" .. sep .. "]+)") do
//         t_insert(t, str)
//     end
//     return t
// end
