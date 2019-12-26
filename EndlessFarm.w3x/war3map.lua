function InitGlobals()
end

function CreateAllItems()
    local itemID
    BlzCreateItemWithSkin(FourCC("ckng"), 199.3, -390.7, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("prvt"), 179.3, -205.3, FourCC("prvt"))
end

function InitCustomPlayerSlots()
    SetPlayerStartLocation(Player(0), 0)
    SetPlayerColor(Player(0), ConvertPlayerColor(0))
    SetPlayerRacePreference(Player(0), RACE_PREF_HUMAN)
    SetPlayerRaceSelectable(Player(0), true)
    SetPlayerController(Player(0), MAP_CONTROL_USER)
end

function InitCustomTeams()
    SetPlayerTeam(Player(0), 0)
end

function main()
    SetCameraBounds(-3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), -3328.0 + GetCameraMargin(CAMERA_MARGIN_LEFT), 3072.0 - GetCameraMargin(CAMERA_MARGIN_TOP), 3328.0 - GetCameraMargin(CAMERA_MARGIN_RIGHT), -3584.0 + GetCameraMargin(CAMERA_MARGIN_BOTTOM))
    SetDayNightModels("Environment\\DNC\\DNCLordaeron\\DNCLordaeronTerrain\\DNCLordaeronTerrain.mdl", "Environment\\DNC\\DNCLordaeron\\DNCLordaeronUnit\\DNCLordaeronUnit.mdl")
    NewSoundEnvironment("Default")
    SetAmbientDaySound("LordaeronSummerDay")
    SetAmbientNightSound("LordaeronSummerNight")
    SetMapMusic("Music", true, 0)
    CreateAllItems()
    InitBlizzard()
    InitGlobals()
--nef-inject

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
require("Extension")
require("Game/Configs/Const")
require("Math/MathExt")
require("GlobalFuncs")
require("Logger")
require("Time").Init()
require("Game/Engine").Start()

---- END Main.lua ----
 end}
----------------
__modules["Extension"] = { inited = false, cached = false, loader = function(...)
---- START Extension.lua ----
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
            return '"' .. so .. '"'
            -- local info = debug.getinfo(o, "S")
            -- info.name is nil because o is not a calling level
            -- if info.what == "C" then
            --     return '"' .. so .. ", C function" .. '"'
            -- else
            --     -- the information is defined through lines
            --     return '"' .. so .. ", defined in (" .. info.linedefined .. "-" .. info.lastlinedefined .. ")" .. info.source .. '"'
            -- end
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
    -- parse opts
    opts = opts or {}
    local select = opts.select
    local where = opts.where
    local any = opts.any
    local all = opts.all
    local sort = opts.sort
    local asList = opts.asList or (sort ~= nil)

    local bst = nil
    local function bstAdd(data)
        local newNode = { v = data, l = nil, r = nil }
        if bst == nil then
            bst = newNode
        else
            local cursor = bst
            local prev
            local isl = true
            while cursor ~= nil do
                prev = cursor
                if sort(data, cursor.v) then
                    cursor = cursor.l
                    isl = true
                else
                    cursor = cursor.r
                    isl = false
                end
            end
            if isl then
                prev.l = newNode
            else
                prev.r = newNode
            end
        end
    end

    local returnTable = select or (any == nil and all == nil) -- return type is table or bool
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
                    if sort then
                        bstAdd(value)
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
                if sort then
                    bstAdd(value)
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
        if sort then
            local obst = {}
            local function bstOut(node)
                if node == nil then
                    return
                end
                bstOut(node.l)
                obst[#obst + 1] = node.v
                bstOut(node.r)
            end
            bstOut(bst)
            return obst
        else
            return ret
        end
    else
        if any then
            return false
        elseif all then
            return true
        end
    end
end

t_insert = table.insert

---@param str string
---@param sep string
---@return string[]
function s_split(str, sep)
    if sep == nil then
        sep = "%s"
    end
    local t = {}
    for str in string.gmatch(str, "([^" .. sep .. "]+)") do
        t_insert(t, str)
    end
    return t
end

---- END Extension.lua ----
 end}
----------------
__modules["Game/Configs/Const"] = { inited = false, cached = false, loader = function(...)
---- START Game/Configs/Const.lua ----
ATT_STR = 1
ATT_AGI = 2
ATT_INT = 3
ATT_NON = 4

CAREER_TYPE_TANK = 32
CAREER_TYPE_HEALER = 2
CAREER_TYPE_DPS = 4
CAREER_TYPE_MINION = 64
CAREER_TYPE_BOSS = 8
CAREER_TYPE_CREEP = 16

UTID_BLADE_MASTER = 1331850337

---- END Game/Configs/Const.lua ----
 end}
----------------
__modules["Math/MathExt"] = { inited = false, cached = false, loader = function(...)
---- START Math/MathExt.lua ----
---@param n number
---@param a number
---@param b number
---@return number
math.clamp = function(n, a, b)
    return math.min(math.max(n, a), b)
end

---- END Math/MathExt.lua ----
 end}
----------------
__modules["GlobalFuncs"] = { inited = false, cached = false, loader = function(...)
---- START GlobalFuncs.lua ----
function clone(object)
    local lookup_table = {}
    local function _copy(object)
        if type(object) ~= "table" then
            return object
        elseif lookup_table[object] then
            return lookup_table[object]
        end
        local new_table = {}
        lookup_table[object] = new_table
        for key, value in pairs(object) do
            new_table[_copy(key)] = _copy(value)
        end
        return setmetatable(new_table, getmetatable(object))
    end
    return _copy(object)
end

---@param classname string
---@param super class
function class(classname, super)
    local superType = type(super)
    local cls
    if superType ~= "function" and superType ~= "table" then
        superType = nil
        super = nil
    end
    if superType == "function" or (super and super.__ctype == 1) then
        cls = {}
        if superType == "table" then
            for k, v in pairs(super) do cls[k] = v end
            cls.__create = super.__create
            cls.super    = super
        else
            cls.__create = super
        end
        cls.Constructor = function() end
        cls.__cname = classname
        cls.__ctype = 1
        function cls.New(...)
            local instance = cls.__create(...)
            for k, v in pairs(cls) do instance[k] = v end
            instance.class = cls
            instance:Constructor(...)
            return instance
        end
    else
        if super then
            cls = clone(super)
            cls.super = super
        else
            cls = { Constructor = function() end }
        end

        cls.__cname = classname
        cls.__ctype = 2
        cls.__index = cls
        function cls.New(...)
            local instance = setmetatable({}, cls)
            instance.class = cls
            instance:Constructor(...)
            return instance
        end
    end
    return cls
end

function bindfunc(func, context)
    return function(...)
        return func(context, ...)
    end
end

---- END GlobalFuncs.lua ----
 end}
----------------
__modules["Logger"] = { inited = false, cached = false, loader = function(...)
---- START Logger.lua ----
local Time = require("Time")

function log(...)
    local sb = ""
    for _, v in pairs({...}) do
        sb = sb .. " " .. t_tojson(v)
    end
    print(Time.GetTime() .. "[I]:" .. sb)
end

function logwarn(...)
    print(Time.GetTime() .. "[W]:", ...)
end

function logerror(...)
    print(Time.GetTime() .. "[E]:", ...)
end

---- END Logger.lua ----
 end}
----------------
__modules["Time"] = { inited = false, cached = false, loader = function(...)
---- START Time.lua ----
local Time = {}

local _interval = 100

function Time.Init()
    Time.clock = CreateTimer()
    Time.time = 0
    TimerStart(Time.clock, _interval, true, function()
        Time.time = Time.time + _interval
    end)
end

---@return float in seconds
function Time.GetTime()
    return Time.time + TimerGetElapsed(Time.clock)
end

---@return { h: int, m: int, s: float }
function Time.GetTimeHMS()
    local ct = Time.GetTime()
    local t = {}
    local intct = math.floor(ct)
    ct = ct - intct
    t.h = math.floor(intct / 3600)
    intct = intct - t.h * 3600
    t.m = math.floor(intct / 60)
    intct = intct - t.m * 60
    t.s = intct + ct
    return t
end

return Time

---- END Time.lua ----
 end}
----------------
__modules["Game/Engine"] = { inited = false, cached = false, loader = function(...)
---- START Game/Engine.lua ----
local Time = require("Time")
local Timer = require("Timer")
local World = require("Game/World")

local Engine = {}

function Engine.Start()
    local world = World.New()

    world:Add(require("Game/Systems/TestSystem").New())
    world:Add(require("Game/Systems/CreateUnitSystem").New())
    world:Add(require("Game/Systems/SpellCastSystem").New())

    world:Awake()
    world:Start()

    local time = Time.GetTime()
    local timer = Timer.New(0.01666667, -1, function ()
        local curr = Time.GetTime()
        world:Update(curr - time)
        time = curr
    end):Start()
end

return Engine

---- END Game/Engine.lua ----
 end}
----------------
__modules["Timer"] = { inited = false, cached = false, loader = function(...)
---- START Timer.lua ----
local Timer = class("Timer")

Timer.refs = {}

function Timer.Update()
    local this = Timer.refs[GetExpiredTimer()]
    if this.this then
        this.callback(this.this)
    else
        this.callback()
    end
    this.cloop = this.cloop - 1
    if this.cloop <= 0 then
        Timer.Destroy(this)
    end
end

---@param interval float
---@param loop int loop times, -1 is infinity loop
---@param callback fun(...): void
---@param this any if present, pass to callback as the first arg
function Timer:Constructor(interval, loop, callback, this)
    self.interval = interval
    self.loop = loop
    self.cloop = self.loop
    self.callback = callback
    self.this = this
    self.nTimer = CreateTimer()
    Timer.refs[self.nTimer] = self
end

function Timer:Start()
    TimerStart(self.nTimer, self.interval, true, Timer.Update)
    return self
end

---@param value number
---@param isLoop boolean true = extend loop count, false = extend by seconds
function Timer:Extend(value, isLoop)
    isLoop = isLoop or false
    local res = value
    if not isLoop then
        res = math.floor(value / self.interval)
    end
    self.cloop = self.cloop + res
end

function Timer:Pause()

end

function Timer:Resume()

end

function Timer:Destroy()
    Timer.refs[self.nTimer] = nil
    DestroyTimer(self.nTimer)
end

return Timer

---- END Timer.lua ----
 end}
----------------
__modules["Game/World"] = { inited = false, cached = false, loader = function(...)
---- START Game/World.lua ----
local World = class("World")

function World:Constructor()
    self:Init()
end

function World:Init()
    self.systems = {} ---@type System[]
    self.time = 0 ---@type float
end

---@param system System
function World:Add(system)
    t_insert(self.systems, system)
end

function World:Awake()
    for _, v in pairs(self.systems) do
        v:Awake()
    end
end

function World:Start()
    for _, v in pairs(self.systems) do
        v:Start()
    end
end

---@param delta float in seconds
function World:Update(delta)
    self.time = self.time + delta
    for _, v in pairs(self.systems) do
        v:Update(delta)
    end
end

return World

---- END Game/World.lua ----
 end}
----------------
__modules["Game/Systems/TestSystem"] = { inited = false, cached = false, loader = function(...)
---- START Game/Systems/TestSystem.lua ----
local System = require("Game/System")
local Timer = require("Timer")
local Vector2 = require("Math/Vector2")

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
end

function TestSystem:Start()
    log("Test system is run")
end

function TestSystem:Update(dt)
end

return TestSystem

---- END Game/Systems/TestSystem.lua ----
 end}
----------------
__modules["Game/System"] = { inited = false, cached = false, loader = function(...)
---- START Game/System.lua ----
local System = class("System")

function System:Awake() end
function System:Start() end
function System:Update(delta) end

return System

---- END Game/System.lua ----
 end}
----------------
__modules["Math/Vector2"] = { inited = false, cached = false, loader = function(...)
---- START Math/Vector2.lua ----
local sqrt = math.sqrt
local acos = math.acos
local max = math.max

local Vector2 = {} ---@class Vector2

Vector2.__index = Vector2

Vector2.__div = function(va, d)
    return setmetatable({ x = va.x / d, y = va.y / d }, Vector2)
end

Vector2.__mul = function(a, d)
    if type(d) == "number" then
        return setmetatable({ x = a.x * d, y = a.y * d }, Vector2)
    else
        return setmetatable({ x = a * d.x, y = a * d.y }, Vector2)
    end
end

Vector2.__add = function(a, b)
    return setmetatable({ x = a.x + b.x, y = a.y + b.y }, Vector2)
end

Vector2.__sub = function(a, b)
    return setmetatable({ x = a.x - b.x, y = a.y - b.y }, Vector2)
end

Vector2.__unm = function(v)
    return setmetatable({ x = -v.x, y = -v.y }, Vector2)
end

Vector2.__eq = function(a, b)
    return ((a.x - b.x) ^ 2 + (a.y - b.y) ^ 2) < 9.999999e-11
end

---@param x float
---@param y float
---@return Vector2
function Vector2.New(x, y)
    return setmetatable({ x = x or 0, y = y or 0 }, Vector2)
end

function Vector2:ToString()
    return string.format("(%f,%f)", self.x, self.y)
end

function Vector2.Normalize(v)
    local x = v.x
    local y = v.y
    local magnitude = sqrt(x * x + y * y)

    if magnitude > 0.00000001 then
        x = x / magnitude
        y = y / magnitude
    else
        x = 0
        y = 0
    end

    return setmetatable({ x = x, y = y }, Vector2)
end

function Vector2.Dot(lhs, rhs)
    return lhs.x * rhs.x + lhs.y * rhs.y
end

function Vector2.Angle(from, to)
    local x1, y1 = from.x, from.y
    local d = sqrt(x1 * x1 + y1 * y1)

    if d > 0.00000001 then
        x1 = x1 / d
        y1 = y1 / d
    else
        x1, y1 = 0, 0
    end

    local x2, y2 = to.x, to.y
    d = sqrt(x2 * x2 + y2 * y2)

    if d > 0.00000001 then
        x2 = x2 / d
        y2 = y2 / d
    else
        x2, y2 = 0, 0
    end

    d = x1 * x2 + y1 * y2

    if d < -1 then
        d = -1
    elseif d > 1 then
        d = 1
    end

    return acos(d) * 57.29578
end

function Vector2.Magnitude(v)
    return sqrt(v.x * v.x + v.y * v.y)
end

function Vector2.Reflect(dir, normal)
    local dx = dir.x
    local dy = dir.y
    local nx = normal.x
    local ny = normal.y
    local s = -2 * (dx * nx + dy * ny)
    return setmetatable({ x = s * nx + dx, y = s * ny + dy }, Vector2)
end

function Vector2.Distance(a, b)
    return sqrt((a.x - b.x) ^ 2 + (a.y - b.y) ^ 2)
end

function Vector2.Lerp(a, b, t)
    if t < 0 then
        t = 0
    elseif t > 1 then
        t = 1
    end
    return setmetatable({ x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t }, Vector2)
end

function Vector2.LerpUnclamped(a, b, t)
    return setmetatable({ x = a.x + (b.x - a.x) * t, y = a.y + (b.y - a.y) * t }, Vector2)
end

function Vector2.MoveTowards(current, target, maxDistanceDelta)
    local cx = current.x
    local cy = current.y
    local x = target.x - cx
    local y = target.y - cy
    local s = x * x + y * y
    if s > maxDistanceDelta * maxDistanceDelta and s ~= 0 then
        s = maxDistanceDelta / sqrt(s)
        return setmetatable({ x = cx + x * s, y = cy + y * s }, Vector2)
    end
    return setmetatable({ x = target.x, y = target.y }, Vector2)
end

function Vector2.ClampMagnitude(v, maxLength)
    local x = v.x
    local y = v.y
    local sqrMag = x * x + y * y
    if sqrMag > maxLength * maxLength then
        local mag = maxLength / sqrt(sqrMag)
        x = x * mag
        y = y * mag
        return setmetatable({ x = x, y = y }, Vector2)
    end
    return setmetatable({ x = x, y = y }, Vector2)
end

function Vector2.Max(a, b)
    return setmetatable({ x = math.max(a.x, b.x), y = math.max(a.y, b.y) }, Vector2)
end

function Vector2.Min(a, b)
    return setmetatable({ x = math.min(a.x, b.x), y = math.min(a.y, b.y) }, Vector2)
end

function Vector2.Scale(a, b)
    return setmetatable({ x = a.x * b.x, y = a.y * b.y }, Vector2)
end

function Vector2:Set(x, y)
    self.x = x or 0
    self.y = y or 0
    return self
end

function Vector2:Clone()
    return setmetatable({ x = self.x, y = self.y }, Vector2)
end

function Vector2:Div(d)
    self.x = self.x / d
    self.y = self.y / d
    return self
end

function Vector2:Mul(d)
    self.x = self.x * d
    self.y = self.y * d
    return self
end

function Vector2:Add(b)
    self.x = self.x + b.x
    self.y = self.y + b.y
    return self
end

function Vector2:Sub(b)
    self.x = self.x - b.x
    self.y = self.y - b.y
    return self
end

function Vector2:SetNormalize()
    local magnitude = sqrt(self.x * self.x + self.y * self.y)
    if magnitude > 0.00000001 then
        self.x = self.x / magnitude
        self.y = self.y / magnitude
    else
        self.x = 0
        self.y = 0
    end
    return self
end

function Vector2:SqrMagnitude()
    return self.x * self.x + self.y * self.y
end

return Vector2

---- END Math/Vector2.lua ----
 end}
----------------
__modules["Game/Systems/CreateUnitSystem"] = { inited = false, cached = false, loader = function(...)
---- START Game/Systems/CreateUnitSystem.lua ----
local System = require("Game/System")
local UnitManager = require("Game/Managers/UnitManager")
local Vector2 = require("Math/Vector2")
local Timer = require("Timer")

local CreateUnitSystem = class("CreateUnitSystem", System)

function CreateUnitSystem:Awake()
end

function CreateUnitSystem:Start()
    log("CreateUnitSystem system started")
    local u = UnitManager.CreateUnit(Player(0), UTID_BLADE_MASTER)
    log("maxhp", BlzGetUnitMaxHP(u.n_unit))
    local timer = Timer.New(5, 1, function ()
        log("set hp")
        -- BlzSetUnitMaxHP(u.n_unit, 3000) bullshit api...
    end):Start()
end

function CreateUnitSystem:Update(dt)
end

return CreateUnitSystem

---- END Game/Systems/CreateUnitSystem.lua ----
 end}
----------------
__modules["Game/Managers/UnitManager"] = { inited = false, cached = false, loader = function(...)
---- START Game/Managers/UnitManager.lua ----
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

---- END Game/Managers/UnitManager.lua ----
 end}
----------------
__modules["Game/GameObjects/Unit"] = { inited = false, cached = false, loader = function(...)
---- START Game/GameObjects/Unit.lua ----
local UnitConfig = require("Game/Configs/UnitConfig")
local UnitAttr = require("Game/GameObjects/UnitAttr")

local AttrAbilities = {
    [UnitAttr.Strength] = {
        pos = {
            1093677104,
            1093677105,
            1093677106,
            1093677107,
            1093677108,
            1093677109,
            1093677110,
            1093677111,
            1093677112,
            1093677113,
            1093677121,
            1093677122,
            1093677123,
        }
    }
}

local Unit = class("Unit") ---@class Unit

function Unit:Constructor(utid, n_unit)
    self.n_unit = n_unit
    self.config = UnitConfig.ById[utid]

    self.attrs = {}
    self.attrGet = {}
    self.attrSet = {}
    self.attrRet = {}

    self:_InitAttribute(UnitAttr.PhyxPower, nil, function(value)
        -- ModUnitAP(self.n_unit, num) todo
    end, function()
        local config = self.config
        local atk = self.attrs[UnitAttr.PhyxPower] + math.random(config.atk1, config.atk2)
        return atk + self:GetMainAttrValue()
    end)
    self:_InitAttribute(UnitAttr.SpellPower, nil, nil, function()
        return self.attrs[UnitAttr.SpellPower] + GetHeroInt(self.n_unit, true)
    end)
    self:_InitAttribute(UnitAttr.PhyxCrit, nil, nil, function()
        local ret = self.attrs[UnitAttr.PhyxCrit] + GetHeroAgi(self.n_unit, true) * 0.001
        return math.min(ret, 1)
    end)
    self:_InitAttribute(UnitAttr.SpellCrit, nil, nil, function()
        local ret = self.attrs[UnitAttr.SpellCrit] + GetHeroInt(self.n_unit, true) * 0.0015
        return math.min(ret, 1)
    end)
    self:_InitAttribute(UnitAttr.PhyxSpeed, nil, function(value)
        -- ModUnitAttackSpeed(self.n_unit, mod) todo
    end, nil)
    self:_InitAttribute(UnitAttr.SpellCDR, nil, function()
        -- todo
    end, nil)
    self:_InitAttribute(UnitAttr.AttackRate, nil, nil, function()
        return math.clamp(self.attrs[UnitAttr.AttackRate], 0.25, 1)
    end)
    self:_InitAttribute(UnitAttr.DamageDealt, nil, nil, function()
        return math.max(self.attrs[UnitAttr.DamageDealt], 0)
    end)
    self:_InitAttribute(UnitAttr.ParryRate, nil, nil, function()
        local ret = self.attrs[UnitAttr.ParryRate] + GetHeroStr(self.n_unit, true) * 0.002
        return math.min(ret, 0.75)
    end)
    self:_InitAttribute(UnitAttr.DodgeRate, nil, nil, function()
        local ret = self.attrs[UnitAttr.DodgeRate] + GetHeroAgi(self.n_unit, true) * 0.002
        return math.min(ret, 0.75)
    end)
    self:_InitAttribute(UnitAttr.PhyxTaken, nil, nil, function()
        local ret = 100 - self.attrs[UnitAttr.PhyxTaken] - self.config.def
        return math.max(ret, 0) / 100
    end)
    self:_InitAttribute(UnitAttr.SpellTaken, nil, nil, function()
        return math.max(self.attrs[UnitAttr.SpellTaken], 0)
    end)
    self:_InitAttribute(UnitAttr.PhyxCritTaken, nil, nil, nil)
    self:_InitAttribute(UnitAttr.SpellCritTaken, nil, nil, nil)
    self:_InitAttribute(UnitAttr.DamageTaken, nil, function()
        -- ModUnitArmor(self.n_unit, m) todo
    end, function()
        return math.max(self.attrs[UnitAttr.DamageTaken], 0)
    end)
    self:_InitAttribute(UnitAttr.Strength, function()
        return GetHeroStr(self.n_unit, true)
    end, function(value)
        -- ModUnitStr(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Agility, function()
        return GetHeroAgi(self.n_unit, true)
    end, function(value)
        -- ModUnitAgi(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Intelligence, function()
        return GetHeroInt(self.n_unit, true)
    end, function(value)
        -- ModUnitInt(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Life, function()
        return GetUnitState(self.n_unit, UNIT_STATE_MAX_LIFE)
    end, function(value)
        -- ModUnitLife(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Mana, function()
        return GetUnitState(self.n_unit, UNIT_STATE_MAX_MANA)
    end, function(value)
        -- ModUnitMaxMana(self.n_unit, m) todo
    end, nil)
    self:_InitAttribute(UnitAttr.LifeRegen, nil, nil, nil)
    self:_InitAttribute(UnitAttr.ManaRegen, nil, nil, function()
        local ret = self.attrs[UnitAttr.ManaRegen] + GetHeroInt(self.n_unit, true) * 0.03
        if (self.config.mainAtt == ATT_INT) then
            ret = ret + 6.5
        else
            ret = ret * 0.25
        end
        return ret
    end)
    self:_InitAttribute(UnitAttr.Speed, function()
        return GetUnitMoveSpeed(self.n_unit)
    end, function(value)
        --  integer spd
        --  self.speed += mod
        --  spd = self.speed
        --  if (spd > 522) themspd = 522end
        --  if (spd < 0) themspd = 0end
        --  SetUnitMoveSpeed(self.n_unit, spd) todo
    end, nil)
    self:_InitAttribute(UnitAttr.Absorb, nil, nil, nil)
    self:_InitAttribute(UnitAttr.LifeLeech, nil, nil, nil)
    self:_InitAttribute(UnitAttr.ManaLeech, nil, nil, nil)

    self:_InitWithConfig()
end

---@param n_unit unit
---@param attr UnitAttr
---@param value int
function Unit._SetNativeAttr(attr, value)
    
end

---@param attr UnitAttr
---@param getter fun(): float
---@param setter fun(val: float): void
---@param retter fun(): float
---@param modder fun(val: float, pct: boolean): void
function Unit:_InitAttribute(attr, getter, setter, retter, modder)
    self.attrs[attr] = 0
    getter = getter or function()
        return self.attrs[attr]
    end
    setter = setter or function(value)
        self.attrs[attr] = value
    end
    retter = retter or getter
    modder = modder or function (val, pct)
        logwarn("modder unimplemented " .. attr)
    end
    self.attrGet = getter
    self.attrSet = setter
    self.attrRet = retter
end

function Unit:_InitWithConfig()
    
end

---@param attr UnitAttr
---@return float
function Unit:GetAttr(attr)
    return self.attrGet[attr]()
end

---@param attr UnitAttr
---@param value float
function Unit:SetAttr(attr, value)
    self.attrSet[attr](value)
end

---@param attr UnitAttr
---@return float
function Unit:ReturnAttr(attr)
    self.attrRet[attr]()
end

---@return int
function Unit:GetMainAttrValue()
    if self.unitConfig.mainAtt == ATT_STR then
        return GetHeroStr(self.n_unit, true)
    elseif self.unitConfig.mainAttribute == ATT_AGI then
        return GetHeroAgi(self.n_unit, true)
    elseif self.unitConfig.mainAttribute == ATT_INT then
        return GetHeroInt(self.n_unit, true)
    end
    return 0
end

function Unit:ReturnPhyxPowerMax()
    return self.config.atk2 + self:GetMainAttrValue()
end

-- function Unit:GetDropValue()
--     -- return R2I(GetUnitState(self.n_unit, UNIT_STATE_MAX_LIFE) + GetUnitState(self.n_unit, UNIT_STATE_MAX_MANA))
-- end
return Unit

---- END Game/GameObjects/Unit.lua ----
 end}
----------------
__modules["Game/Configs/UnitConfig"] = { inited = false, cached = false, loader = function(...)
---- START Game/Configs/UnitConfig.lua ----
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

---- END Game/Configs/UnitConfig.lua ----
 end}
----------------
__modules["Game/GameObjects/UnitAttr"] = { inited = false, cached = false, loader = function(...)
---- START Game/GameObjects/UnitAttr.lua ----
local IDGenerator = require("Common/IDGenerator")

local gen = IDGenerator.New()

---@class UnitAttr
---str = hp
---agi = dodge
---int = mp
local UnitAttr = {
    -- basic --
    Strength = gen:Next(),
    Agility = gen:Next(),
    Intelligence = gen:Next(),
    Life = gen:Next(),
    BaseLife = gen:Next(),
    Mana = gen:Next(),
    BaseMana = gen:Next(),
    -- offensive --
    Power = gen:Next(),
    --- 0 ~ +oo
    DamageDealt = gen:Next(),
    --- 0 ~ 1.0 1 agi = 0.0025 critic
    CritRate = gen:Next(),
    --- -oo ~ +oo
    AttackSpeed = gen:Next(),
    --- 0.25 ~ 1.00
    AttackRate = gen:Next(),
    --- 0 ~ +oo 1 int = 0.002 haste
    CDR = gen:Next(),
    -- defensive --
    --- 0 ~ 0.75 1 agi = 0.004 dodge
    DodgeRate = gen:Next(),
    --- 0 ~ + oo
    PhyxResist = gen:Next(),
    PhyxDef = gen:Next(),
    --- 0 ~ + oo
    SpellResist = gen:Next(),
    SpellDef = gen:Next(),
    --- 0 ~ + oo
    PhyxCritTaken = gen:Next(),
    --- 0 ~ + oo
    SpellCritTaken = gen:Next(),
    --- 0 ~ + oo
    DamageTaken = gen:Next(),
    -- utility --
    LifeRegen = gen:Next(),
    --- 0 ~ +oo 1 int = 0.03 regen
    ManaRegen = gen:Next(),
    Speed = gen:Next(),
    Absorb = gen:Next(),
    LifeLeech = gen:Next(),
    ManaLeech = gen:Next(),
}

return UnitAttr

---- END Game/GameObjects/UnitAttr.lua ----
 end}
----------------
__modules["Common/IDGenerator"] = { inited = false, cached = false, loader = function(...)
---- START Common/IDGenerator.lua ----
local IDGenerator = class("IDGenerator")

function IDGenerator:Constructor(start)
    self.start = start or 0
end

function IDGenerator:Next()
    self.start = self.start + 1
    return self.start
end

return IDGenerator

---- END Common/IDGenerator.lua ----
 end}
----------------
__modules["Game/Systems/SpellCastSystem"] = { inited = false, cached = false, loader = function(...)
---- START Game/Systems/SpellCastSystem.lua ----
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

---- END Game/Systems/SpellCastSystem.lua ----
 end}
----------------
__modules["Game/EventCenter"] = { inited = false, cached = false, loader = function(...)
---- START Game/EventCenter.lua ----
local Event = require("Event")

local id = 0

local function GetId()
    id = id + 1
    return id
end

return {
    ---@param data { unit: unit, ability: int }
    SpellCast = Event.New(GetId()),
}

---- END Game/EventCenter.lua ----
 end}
----------------
__modules["Event"] = { inited = false, cached = false, loader = function(...)
---- START Event.lua ----
local Event = class("Event")

function Event:Constructor(id)
    self.id = id
    self.handlers = {}
end

---@param handler fun(...): void
---@param context this
function Event:AddListener(handler, context)
    if self.handlers[handler] then
        logwarn("double AddListener ", self.id, handler, context)
    end
    self.handlers[handler] = context or false
end

function Event:RemoveListener(handler)
    if handler then
        if not self.handlers[handler] then
            logwarn("no hander in event ", self.id, handler)
        end
        self.handlers[handler] = nil
    else
        self.handlers = {}
    end
end

function Event:Broadcast(...)
    local count = 0
    for handler, context in pairs(self.handlers) do
        if context then
            handler(context, ...)
        else
            handler(...)
        end
        count = count + 1
    end
    if count == 0 then
        log("event " .. self.id .. " has no listener")
    end
end

return Event

---- END Event.lua ----
 end}
__modules["Main"].loader()
--nef-inject-end
end

function config()
    SetMapName("TRIGSTR_001")
    SetMapDescription("TRIGSTR_003")
    SetPlayers(1)
    SetTeams(1)
    SetGamePlacement(MAP_PLACEMENT_USE_MAP_SETTINGS)
    DefineStartLocation(0, 576.0, -576.0)
    InitCustomPlayerSlots()
    SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    InitGenericPlayerSlots()
end

