function InitGlobals()
end

function CreateAllItems()
    local itemID
    BlzCreateItemWithSkin(FourCC("ckng"), 199.3, -390.7, FourCC("ckng"))
    BlzCreateItemWithSkin(FourCC("pmna"), -6.5, -366.0, FourCC("pmna"))
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

local ____modules = {}
local ____moduleCache = {}
local ____originalRequire = require
local function require(file)
    if ____moduleCache[file] then 
        return ____moduleCache[file]
    end
    if ____modules[file] then
        ____moduleCache[file] = ____modules[file]()
        return ____moduleCache[file]
    else
        if ____originalRequire then
            return ____originalRequire(file)
        else
            error("module '" .. file .. "' not found")
        end
    end
end
____modules = {
["src.Time"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Time = {}
local Time = ____exports.Time
Time.name = "Time"
Time.__index = Time
Time.prototype = {}
Time.prototype.__index = Time.prototype
Time.prototype.constructor = Time
function Time.new(...)
    local self = setmetatable({}, Time.prototype)
    self:____constructor(...)
    return self
end
function Time.prototype.____constructor(self)
end
function Time.Init()
    ____exports.Time.clock = CreateTimer()
    ____exports.Time.time = 0
    TimerStart(
        ____exports.Time.clock,
        ____exports.Time.interval,
        true,
        function()
            ____exports.Time.time = ____exports.Time.time + ____exports.Time.interval
        end
    )
end
function Time.GetTime()
    return ____exports.Time.time + TimerGetElapsed(____exports.Time.clock)
end
function Time.GetTimeHMS()
    local ct = ____exports.Time.GetTime()
    local intct = math.floor(ct)
    ct = ct - intct
    local h = math.floor(intct / 3600)
    intct = intct - h * 3600
    local m = math.floor(intct / 60)
    intct = intct - m * 60
    local s = intct + ct
    return {h = h, m = m, s = s}
end
Time.interval = 100
Time.time = 0
return ____exports
end,
["src.Timer"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Timer = {}
local Timer = ____exports.Timer
Timer.name = "Timer"
Timer.__index = Timer
Timer.prototype = {}
Timer.prototype.__index = Timer.prototype
Timer.prototype.constructor = Timer
function Timer.new(...)
    local self = setmetatable({}, Timer.prototype)
    self:____constructor(...)
    return self
end
function Timer.prototype.____constructor(self, interval, loop, callback)
    self.interval = interval
    self.loop = loop
    self.cloop = loop
    self.callback = callback
    self.nTimer = CreateTimer()
    ____exports.Timer.refs[tostring(self.nTimer)] = self
end
function Timer.Update()
    local ____self = ____exports.Timer.refs[tostring(
        GetExpiredTimer()
    )]
    if ____self == nil then
        return
    end
    ____self:callback()
    ____self.cloop = ____self.cloop - 1
    if ____self.cloop <= 0 and ____self.loop ~= -1 then
        ____self:Destroy()
    end
end
function Timer.prototype.Start(self)
    TimerStart(self.nTimer, self.interval, true, ____exports.Timer.Update)
    return self
end
function Timer.prototype.Extend(self, value, isLoop)
    if isLoop == nil then
        isLoop = false
    end
    local res = value
    if not isLoop then
        res = math.floor(value / self.interval)
    end
    self.cloop = self.cloop + res
    return self
end
function Timer.prototype.Destroy(self)
    ____exports.Timer.refs[tostring(self.nTimer)] = nil
    DestroyTimer(self.nTimer)
end
Timer.refs = {}
return ____exports
end,
["src.GlobalFuncs"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
function ____exports.Stringify(obj)
    return ""
end
function ____exports.NLerp(a, b, t)
    return a + (b - a) * t
end
function ____exports.NClamp(n, min, max)
    return math.min(
        math.max(min, n),
        max
    )
end
function ____exports.NRound(n)
    return math.floor(n + 0.5)
end
return ____exports
end,
["src.Math.Vector2"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____GlobalFuncs = require("src.GlobalFuncs")
local NClamp = ____GlobalFuncs.NClamp
local NLerp = ____GlobalFuncs.NLerp
____exports.Vector2 = {}
local Vector2 = ____exports.Vector2
Vector2.name = "Vector2"
Vector2.__index = Vector2
Vector2.prototype = {}
Vector2.prototype.____getters = {}
Vector2.prototype.__index = __TS__Index(Vector2.prototype)
Vector2.prototype.constructor = Vector2
function Vector2.new(...)
    local self = setmetatable({}, Vector2.prototype)
    self:____constructor(...)
    return self
end
function Vector2.prototype.____constructor(self, x, y)
    self.x = x or 0
    self.y = y or 0
end
function Vector2.prototype.____getters.magnitude(self)
    return math.sqrt(self.sqrMagnitude)
end
function Vector2.prototype.____getters.normalized(self)
    local v = ____exports.Vector2.Clone(self)
    v:Normalize()
    return v
end
function Vector2.prototype.____getters.sqrMagnitude(self)
    local x = self.x
    local y = self.y
    return x * x + y * y
end
function Vector2.prototype.____getters.eulerAngle(self)
    return math.atan(self.y / self.x)
end
function Vector2.Clone(v)
    return ____exports.Vector2.new(v.x, v.y)
end
function Vector2.Add(a, b)
    return ____exports.Vector2.Clone(a):Add(b)
end
function Vector2.Sub(a, b)
    return ____exports.Vector2.Clone(a):Sub(b)
end
function Vector2.Mul(a, b)
    return ____exports.Vector2.Clone(a):Mul(b)
end
function Vector2.Div(a, b)
    return ____exports.Vector2.Clone(a):Div(b)
end
function Vector2.Neg(a)
    return ____exports.Vector2.new(-a.x, -a.y)
end
function Vector2.Angle(from, to)
    local x1 = from.x
    local y1 = from.y
    local d = math.sqrt(x1 * x1 + y1 * y1)
    if d > 1e-7 then
        x1 = x1 / d
        y1 = y1 / d
    else
        x1 = 0
        y1 = 0
    end
    local x2 = to.x
    local y2 = to.y
    d = math.sqrt(x2 * x2 + y2 * y2)
    if d > 1e-7 then
        x2 = x2 / d
        y2 = y2 / d
    else
        x2 = 0
        y2 = 0
    end
    d = x1 * x2 + y1 * y2
    if d < -1 then
        d = -1
    elseif d > 1 then
        d = 1
    end
    return math.acos(d)
end
function Vector2.ClampMagnitude(vector, maxLength)
    local x = vector.x
    local y = vector.y
    local sqrMag = x * x + y * y
    if sqrMag > maxLength * maxLength then
        local mag = maxLength / math.sqrt(sqrMag)
        x = x * mag
        y = y * mag
        return ____exports.Vector2.new(x, y)
    end
    return ____exports.Vector2.new(x, y)
end
function Vector2.Distance(a, b)
    local dx = a.x - b.x
    local dy = a.y - b.y
    return math.sqrt(dx * dx + dy * dy)
end
function Vector2.Dot(lhs, rhs)
    return lhs.x * rhs.x + lhs.y * rhs.y
end
function Vector2.Cross(lhs, rhs)
    return lhs.x * rhs.y - lhs.y * rhs.x
end
function Vector2.Lerp(a, b, t)
    t = NClamp(t, 0, 1)
    return ____exports.Vector2.new(
        NLerp(a.x, b.x, t),
        NLerp(a.y, b.y, t)
    )
end
function Vector2.LerpUnclamped(a, b, t)
    return ____exports.Vector2.new(
        NLerp(a.x, b.x, t),
        NLerp(a.y, b.y, t)
    )
end
function Vector2.Max(lhs, rhs)
    return ____exports.Vector2.new(
        math.max(lhs.x, rhs.x),
        math.max(lhs.y, rhs.y)
    )
end
function Vector2.Min(lhs, rhs)
    return ____exports.Vector2.new(
        math.min(lhs.x, rhs.x),
        math.min(lhs.y, rhs.y)
    )
end
function Vector2.MoveTowards(current, target, maxDistanceDelta)
    local cx = current.x
    local cy = current.y
    local x = target.x - cx
    local y = target.y - cy
    local s = x * x + y * y
    if s > maxDistanceDelta * maxDistanceDelta and s ~= 0 then
        s = maxDistanceDelta / math.sqrt(s)
        return ____exports.Vector2.new(cx + x * s, cy + y * s)
    end
    return ____exports.Vector2.Clone(target)
end
function Vector2.Perpendicular(inDirection)
    return ____exports.Vector2.new(-inDirection.y, inDirection.x)
end
function Vector2.Reflect(inDirection, inNormal)
    local dx = inDirection.x
    local dy = inDirection.y
    local nx = inNormal.x
    local ny = inNormal.y
    local s = -2 * (dx * nx + dy * ny)
    return ____exports.Vector2.new(s * nx + dx, s * ny + dy)
end
function Vector2.Scale(a, b)
    return ____exports.Vector2.new(a.x * b.x, a.y * b.y)
end
function Vector2.SignedAngle(from, to)
    return math.atan(
        ____exports.Vector2.Cross(from, to) / ____exports.Vector2.Dot(from, to)
    )
end
function Vector2.prototype.Equals(self, v)
    return math.abs(self.x - v.x) <= 1e-7 and math.abs(self.y - v.y) <= 1e-7
end
function Vector2.prototype.Normalize(self)
    local x = self.x
    local y = self.y
    local mag = math.sqrt(x * x + y * y)
    if mag > 1e-7 then
        self.x = x / mag
        self.y = y / mag
    else
        self.x = 0
        self.y = 0
    end
    return self
end
function Vector2.prototype.Set(self, x, y)
    self.x = x
    self.y = y
end
function Vector2.prototype.ToString(self)
    return "(" .. tostring(self.x) .. ", " .. tostring(self.y) .. ")"
end
function Vector2.prototype.Add(self, value)
    self.x = self.x + value.x
    self.y = self.y + value.y
    return self
end
function Vector2.prototype.Sub(self, value)
    self.x = self.x - value.x
    self.y = self.y - value.y
    return self
end
function Vector2.prototype.Mul(self, value)
    self.x = self.x * value
    self.y = self.y * value
    return self
end
function Vector2.prototype.Div(self, value)
    self.x = self.x / value
    self.y = self.y / value
    return self
end
return ____exports
end,
["src.Game.Configs.Const"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.PlayerAID = {
    {
        Q = (1093681456),
        W = (1093681457),
        E = (1093681458),
        R = (1093681459),
        D = (1093681460),
        F = (1093681460)
    }
}
____exports.UTID = {
    BladeMaster = (1331850337),
    Paladin = (1215327329),
    DarkRanger = (1315074670),
    DemonHunter = (1164207469),
    Archmage = (1214931305),
    Warlock = (1332178020)
}
return ____exports
end,
["src.Logger"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Time = require("src.Time")
local Time = ____Time.Time
____exports.Logger = {}
local Logger = ____exports.Logger
Logger.name = "Logger"
Logger.__index = Logger
Logger.prototype = {}
Logger.prototype.__index = Logger.prototype
Logger.prototype.constructor = Logger
function Logger.new(...)
    local self = setmetatable({}, Logger.prototype)
    self:____constructor(...)
    return self
end
function Logger.prototype.____constructor(self)
end
function Logger.Log(...)
    local msg = ({...})
    ____exports.Logger.stdoutWith("I", msg)
end
function Logger.Warn(...)
    local msg = ({...})
    ____exports.Logger.stdoutWith("W", msg)
end
function Logger.Error(...)
    local msg = ({...})
    ____exports.Logger.stdoutWith("E", msg)
end
function Logger.stdoutWith(level, msg)
    local sb = ""
    for ____, e in ipairs(msg) do
        sb = tostring(sb) .. " " .. tostring(
            tostring(e)
        )
    end
    BJDebugMsg(
        tostring(
            Time.GetTime()
        ) .. "[" .. tostring(level) .. "]:" .. tostring(sb)
    )
end
return ____exports
end,
["src.Event"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Logger = require("src.Logger")
local Logger = ____Logger.Logger
____exports.Event = {}
local Event = ____exports.Event
Event.name = "Event"
Event.__index = Event
Event.prototype = {}
Event.prototype.__index = Event.prototype
Event.prototype.constructor = Event
function Event.new(...)
    local self = setmetatable({}, Event.prototype)
    self:____constructor(...)
    return self
end
function Event.prototype.____constructor(self)
    self.mId = (function()
        local ____tmp = ____exports.Event.teCounter
        ____exports.Event.teCounter = ____tmp + 1
        return ____tmp
    end)()
    self.events = {}
end
function Event.prototype.AddListener(self, thisArg, handler, once, arg)
    if once == nil then
        once = false
    end
    for ____, elem in ipairs(self.events) do
        if elem.thisArg == thisArg and elem.handler == handler then
            return Logger.Warn(
                "Event[" .. tostring(self.mId) .. "]: double register"
            )
        end
    end
    if once then
        __TS__FunctionApply(handler, thisArg, {arg})
    end
    __TS__ArrayPush(self.events, {thisArg = thisArg, handler = handler})
end
function Event.prototype.RemoveListener(self, thisArg, handler)
    local index = -1
    do
        local i = 0
        while index == -1 and i < #self.events do
            local elem = self.events[i + 1]
            if elem.thisArg == thisArg and elem.handler == handler then
                index = i
            end
            i = i + 1
        end
    end
    if index == -1 then
        return Logger.Warn(
            "Event[" .. tostring(self.mId) .. "]: cannot remove"
        )
    end
    __TS__ArraySplice(self.events, index, 1)
end
function Event.prototype.Broadcast(self, data)
    if #self.events <= 0 then
        return
    end
    for ____, e in ipairs(self.events) do
        __TS__FunctionApply(e.handler, e.thisArg, {data})
    end
end
Event.teCounter = 0
return ____exports
end,
["src.Game.EventCenter"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Event = require("src.Event")
local Event = ____Event.Event
____exports.SpellCast = Event.new()
____exports.Keyboard = Event.new()
return ____exports
end,
["src.Game.Configs.UnitConfig"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Const = require("src.Game.Configs.Const")
local UTID = ____Const.UTID
____exports.AttributeType = {}
____exports.AttributeType.STR = 1
____exports.AttributeType[____exports.AttributeType.STR] = "STR"
____exports.AttributeType.AGI = 2
____exports.AttributeType[____exports.AttributeType.AGI] = "AGI"
____exports.AttributeType.INT = 3
____exports.AttributeType[____exports.AttributeType.INT] = "INT"
____exports.AttributeType.NON = 4
____exports.AttributeType[____exports.AttributeType.NON] = "NON"
____exports.CareerType = {}
____exports.CareerType.TANK = 1
____exports.CareerType[____exports.CareerType.TANK] = "TANK"
____exports.CareerType.HEALER = 2
____exports.CareerType[____exports.CareerType.HEALER] = "HEALER"
____exports.CareerType.DPS = 4
____exports.CareerType[____exports.CareerType.DPS] = "DPS"
____exports.CareerType.MINION = 8
____exports.CareerType[____exports.CareerType.MINION] = "MINION"
____exports.CareerType.BOSS = 16
____exports.CareerType[____exports.CareerType.BOSS] = "BOSS"
____exports.CareerType.CREEP = 32
____exports.CareerType[____exports.CareerType.CREEP] = "CREEP"
____exports.UnitConfig = {[UTID.BladeMaster] = {UTID = UTID.BladeMaster, PrimAtt = ____exports.AttributeType.STR, Str = 15, Agi = 10, Int = 5, HP = 700, MP = 50, ATK1 = 50, ATK2 = 100, Def = 0.1, SDef = 1, Dodge = 0.25, Crit = 0.1, Career = ____exports.CareerType.DPS}, [UTID.DemonHunter] = {UTID = UTID.DemonHunter, PrimAtt = ____exports.AttributeType.AGI, Str = 9, Agi = 12, Int = 9, HP = 600, MP = 300, ATK1 = 30, ATK2 = 100, Def = 0.15, SDef = 1, Dodge = 0.25, Crit = 0.1, Career = ____exports.CareerType.DPS}, [UTID.Archmage] = {UTID = UTID.Archmage, PrimAtt = ____exports.AttributeType.INT, Str = 7, Agi = 5, Int = 18, HP = 600, MP = 600, ATK1 = 20, ATK2 = 40, Def = 0.05, SDef = 1, Dodge = 0.25, Crit = 0.1, Career = ____exports.CareerType.DPS}}
return ____exports
end,
["src.Game.Objects.Skill"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.Skill = {}
local Skill = ____exports.Skill
Skill.name = "Skill"
Skill.__index = Skill
Skill.prototype = {}
Skill.prototype.__index = Skill.prototype
Skill.prototype.constructor = Skill
function Skill.new(...)
    local self = setmetatable({}, Skill.prototype)
    self:____constructor(...)
    return self
end
function Skill.prototype.____constructor(self)
end
return ____exports
end,
["src.Game.Objects.UnitAttr"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.UnitAttr = {}
____exports.UnitAttr.Strength = 0
____exports.UnitAttr[____exports.UnitAttr.Strength] = "Strength"
____exports.UnitAttr.Agility = 1
____exports.UnitAttr[____exports.UnitAttr.Agility] = "Agility"
____exports.UnitAttr.Intelligence = 2
____exports.UnitAttr[____exports.UnitAttr.Intelligence] = "Intelligence"
____exports.UnitAttr.Life = 3
____exports.UnitAttr[____exports.UnitAttr.Life] = "Life"
____exports.UnitAttr.Mana = 4
____exports.UnitAttr[____exports.UnitAttr.Mana] = "Mana"
____exports.UnitAttr.Power = 5
____exports.UnitAttr[____exports.UnitAttr.Power] = "Power"
____exports.UnitAttr.DamageDealt = 6
____exports.UnitAttr[____exports.UnitAttr.DamageDealt] = "DamageDealt"
____exports.UnitAttr.CritRate = 7
____exports.UnitAttr[____exports.UnitAttr.CritRate] = "CritRate"
____exports.UnitAttr.AttackSpeed = 8
____exports.UnitAttr[____exports.UnitAttr.AttackSpeed] = "AttackSpeed"
____exports.UnitAttr.AttackRate = 9
____exports.UnitAttr[____exports.UnitAttr.AttackRate] = "AttackRate"
____exports.UnitAttr.CDR = 10
____exports.UnitAttr[____exports.UnitAttr.CDR] = "CDR"
____exports.UnitAttr.DodgeRate = 11
____exports.UnitAttr[____exports.UnitAttr.DodgeRate] = "DodgeRate"
____exports.UnitAttr.PhyxResist = 12
____exports.UnitAttr[____exports.UnitAttr.PhyxResist] = "PhyxResist"
____exports.UnitAttr.PhyxDef = 13
____exports.UnitAttr[____exports.UnitAttr.PhyxDef] = "PhyxDef"
____exports.UnitAttr.SpellResist = 14
____exports.UnitAttr[____exports.UnitAttr.SpellResist] = "SpellResist"
____exports.UnitAttr.SpellDef = 15
____exports.UnitAttr[____exports.UnitAttr.SpellDef] = "SpellDef"
____exports.UnitAttr.PhyxCritTaken = 16
____exports.UnitAttr[____exports.UnitAttr.PhyxCritTaken] = "PhyxCritTaken"
____exports.UnitAttr.SpellCritTaken = 17
____exports.UnitAttr[____exports.UnitAttr.SpellCritTaken] = "SpellCritTaken"
____exports.UnitAttr.DamageTaken = 18
____exports.UnitAttr[____exports.UnitAttr.DamageTaken] = "DamageTaken"
____exports.UnitAttr.LifeRegen = 19
____exports.UnitAttr[____exports.UnitAttr.LifeRegen] = "LifeRegen"
____exports.UnitAttr.ManaRegen = 20
____exports.UnitAttr[____exports.UnitAttr.ManaRegen] = "ManaRegen"
____exports.UnitAttr.Speed = 21
____exports.UnitAttr[____exports.UnitAttr.Speed] = "Speed"
____exports.UnitAttr.Absorb = 22
____exports.UnitAttr[____exports.UnitAttr.Absorb] = "Absorb"
____exports.UnitAttr.LifeLeech = 23
____exports.UnitAttr[____exports.UnitAttr.LifeLeech] = "LifeLeech"
____exports.UnitAttr.ManaLeech = 24
____exports.UnitAttr[____exports.UnitAttr.ManaLeech] = "ManaLeech"
return ____exports
end,
["src.Game.Objects.Unit"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____GlobalFuncs = require("src.GlobalFuncs")
local NClamp = ____GlobalFuncs.NClamp
local NRound = ____GlobalFuncs.NRound
local ____Logger = require("src.Logger")
local Logger = ____Logger.Logger
local ____UnitConfig = require("src.Game.Configs.UnitConfig")
local AttributeType = ____UnitConfig.AttributeType
local ____UnitConfig = require("src.Game.Configs.UnitConfig")
local UnitConfig = ____UnitConfig.UnitConfig
local ____UnitAttr = require("src.Game.Objects.UnitAttr")
local UnitAttr = ____UnitAttr.UnitAttr
local AttrAbilities = {
    [UnitAttr.Strength] = {
        neg = {},
        pos = {
            (1093677104),
            (1093677105),
            (1093677106),
            (1093677107),
            (1093677108),
            (1093677109),
            (1093677110),
            (1093677111),
            (1093677112),
            (1093677113),
            (1093677121),
            (1093677122)
        }
    },
    [UnitAttr.Agility] = {
        neg = {},
        pos = {
            (1093677390),
            (1093677389),
            (1093677388),
            (1093677387),
            (1093677386),
            (1093677385),
            (1093677384),
            (1093677383),
            (1093677126),
            (1093677125),
            (1093677124),
            (1093677123)
        }
    },
    [UnitAttr.Intelligence] = {
        neg = {},
        pos = {
            (1093677392),
            (1093677393),
            (1093677394),
            (1093677395),
            (1093677396),
            (1093677397),
            (1093677398),
            (1093677399),
            (1093677400),
            (1093677401),
            (1093677391),
            (1093677402)
        }
    },
    [UnitAttr.Life] = {
        neg = {},
        pos = {
            (1093677129),
            (1093677145),
            (1093677144),
            (1093677143),
            (1093677142),
            (1093677141),
            (1093677140),
            (1093677139),
            (1093677138),
            (1093677137),
            (1093677136),
            (1093677135),
            (1093677134),
            (1093677133),
            (1093677132),
            (1093677131),
            (1093677127),
            (1093677128),
            (1093677146),
            (1093677130)
        }
    },
    [UnitAttr.Mana] = {
        neg = {},
        pos = {
            (1093677366),
            (1093677360),
            (1093677361),
            (1093677362),
            (1093677363),
            (1093677364),
            (1093677382),
            (1093677367),
            (1093677368),
            (1093677369),
            (1093677377),
            (1093677378),
            (1093677379),
            (1093677380),
            (1093677381),
            (1093677365)
        }
    }
}
____exports.Unit = {}
local Unit = ____exports.Unit
Unit.name = "Unit"
Unit.__index = Unit
Unit.prototype = {}
Unit.prototype.__index = Unit.prototype
Unit.prototype.constructor = Unit
function Unit.new(...)
    local self = setmetatable({}, Unit.prototype)
    self:____constructor(...)
    return self
end
function Unit.prototype.____constructor(self, utid, nUnit)
    self.nUnit = nUnit
    self.config = UnitConfig[utid]
    self.attrs = {}
    self.attrGet = {}
    self.attrSet = {}
    self.attrRet = {}
    self.attrMod = {}
    self.skillList = {}
    self:InitAttribute(
        UnitAttr.Strength,
        nil,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Strength, value)
            self.attrs[UnitAttr.Strength] = value
        end,
        function(____, isBase)
            Logger.Log("get hero str", isBase)
            return GetHeroStr(self.nUnit, not isBase)
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Strength, self.attrs[UnitAttr.Strength] + value)
            self.attrs[UnitAttr.Strength] = self.attrs[UnitAttr.Strength] + value
        end
    )
    self:InitAttribute(
        UnitAttr.Agility,
        nil,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Agility, value)
            self.attrs[UnitAttr.Agility] = value
        end,
        function(____, isBase)
            return GetHeroAgi(self.nUnit, not isBase)
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Agility, self.attrs[UnitAttr.Agility] + value)
            self.attrs[UnitAttr.Agility] = self.attrs[UnitAttr.Agility] + value
        end
    )
    self:InitAttribute(
        UnitAttr.Intelligence,
        nil,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Intelligence, value)
            self.attrs[UnitAttr.Intelligence] = value
        end,
        function(____, isBase)
            return GetHeroInt(self.nUnit, not isBase)
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Intelligence, self.attrs[UnitAttr.Intelligence] + value)
            self.attrs[UnitAttr.Intelligence] = self.attrs[UnitAttr.Intelligence] + value
        end
    )
    self:InitAttribute(
        UnitAttr.Life,
        function(____, isBase)
            if isBase then
                return self.config.HP
            else
                return self.attrs[UnitAttr.Life]
            end
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Life, value - 1)
            self.attrs[UnitAttr.Life] = value - 1
        end,
        function(____, isBase)
            if isBase then
                return self.config.HP + GetHeroStr(self.nUnit, true) * 10
            else
                return GetUnitState(self.nUnit, UNIT_STATE_MAX_LIFE)
            end
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Life, self.attrs[UnitAttr.Life] + value)
            self.attrs[UnitAttr.Life] = self.attrs[UnitAttr.Life] + value
        end
    )
    self:InitAttribute(
        UnitAttr.Mana,
        function(____, isBase)
            if isBase then
                return self.config.MP
            else
                return self.attrs[UnitAttr.Mana]
            end
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Mana, value)
            self.attrs[UnitAttr.Mana] = value
        end,
        function(____, isBase)
            if isBase then
                return self.config.MP + GetHeroInt(self.nUnit, true) * 10
            else
                return GetUnitState(self.nUnit, UNIT_STATE_MAX_MANA)
            end
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Mana, self.attrs[UnitAttr.Mana] + value)
            self.attrs[UnitAttr.Mana] = self.attrs[UnitAttr.Mana] + value
        end
    )
    self:InitAttribute(
        UnitAttr.Power,
        nil,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Power, value)
            self.attrs[UnitAttr.Power] = value
        end,
        function()
            local config = self.config
            local atk = self.attrs[UnitAttr.Power] + GetRandomInt(config.ATK1, config.ATK2)
            return atk + self:GetPrimaryAttrValue()
        end,
        function(____, value)
            self:SetNativeAttr(UnitAttr.Power, self.attrs[UnitAttr.Power] + value)
            self.attrs[UnitAttr.Power] = self.attrs[UnitAttr.Power] + value
        end
    )
    self:InitAttribute(
        UnitAttr.DamageDealt,
        nil,
        nil,
        function()
            return math.max(self.attrs[UnitAttr.DamageDealt], 0)
        end,
        nil
    )
    self:InitAttribute(
        UnitAttr.CritRate,
        nil,
        nil,
        function()
            return math.min(self.attrs[UnitAttr.CritRate], 1)
        end,
        nil
    )
    self:InitAttribute(
        UnitAttr.AttackSpeed,
        nil,
        function(____, value)
            self:SetNativeAttr(
                UnitAttr.AttackSpeed,
                NRound(value * 100)
            )
            self.attrs[UnitAttr.AttackSpeed] = value
        end,
        nil,
        function(____, value)
            self:SetNativeAttr(
                UnitAttr.AttackSpeed,
                NRound((self.attrs[UnitAttr.AttackSpeed] + value) * 100)
            )
            self.attrs[UnitAttr.AttackSpeed] = self.attrs[UnitAttr.AttackSpeed] + value
        end
    )
    self:InitAttribute(
        UnitAttr.AttackRate,
        nil,
        nil,
        function()
            return NClamp(self.attrs[UnitAttr.AttackRate], 0.25, 1)
        end,
        nil
    )
    self:InitAttribute(
        UnitAttr.CDR,
        nil,
        function()
        end,
        nil,
        nil
    )
    self:InitAttribute(
        UnitAttr.DodgeRate,
        nil,
        nil,
        function()
            local ret = self.attrs[UnitAttr.DodgeRate] + GetHeroAgi(self.nUnit, true) * 0.002
            return math.min(ret, 0.75)
        end,
        nil
    )
    self:InitAttribute(
        UnitAttr.PhyxResist,
        function(____, isBase)
            if isBase then
                return self.config.Def
            else
                return self.config.Def + self.attrs[UnitAttr.PhyxResist]
            end
        end,
        function(____, value)
            self:SetNativeAttr(
                UnitAttr.PhyxResist,
                NRound(value * 100)
            )
            self.attrs[UnitAttr.PhyxResist] = value
        end,
        nil,
        function(____, value)
            self:SetNativeAttr(
                UnitAttr.PhyxResist,
                NRound((self.attrs[UnitAttr.PhyxResist] + value) * 100)
            )
            self.attrs[UnitAttr.PhyxResist] = self.attrs[UnitAttr.PhyxResist] + value
        end
    )
    self:InitAttribute(UnitAttr.PhyxDef, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.SpellResist, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.SpellDef, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.PhyxCritTaken, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.SpellCritTaken, nil, nil, nil, nil)
    self:InitAttribute(
        UnitAttr.DamageTaken,
        nil,
        nil,
        function()
            return math.max(self.attrs[UnitAttr.DamageTaken], 0)
        end,
        nil
    )
    self:InitAttribute(UnitAttr.LifeRegen, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.ManaRegen, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.Absorb, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.LifeLeech, nil, nil, nil, nil)
    self:InitAttribute(UnitAttr.ManaLeech, nil, nil, nil, nil)
    self:InitWithConfig()
end
function Unit.prototype.GetAttr(self, attr, isBase)
    if isBase == nil then
        isBase = false
    end
    return (function()
        local ____self = self.attrGet
        return ____self[attr](____self, isBase)
    end)()
end
function Unit.prototype.SetAttr(self, attr, value)
    (function()
        local ____self = self.attrSet
        return ____self[attr](____self, value)
    end)()
end
function Unit.prototype.ReturnAttr(self, attr, isBase)
    if isBase == nil then
        isBase = false
    end
    return (function()
        local ____self = self.attrRet
        return ____self[attr](____self, isBase)
    end)()
end
function Unit.prototype.ModAttr(self, attr, value)
    (function()
        local ____self = self.attrMod
        return ____self[attr](____self, value)
    end)()
end
function Unit.prototype.GetPrimaryAttrValue(self)
    if self.config.PrimAtt == AttributeType.STR then
        return GetHeroStr(self.nUnit, true)
    elseif self.config.PrimAtt == AttributeType.AGI then
        return GetHeroAgi(self.nUnit, true)
    elseif self.config.PrimAtt == AttributeType.INT then
        return GetHeroInt(self.nUnit, true)
    end
    return 0
end
function Unit.prototype.ReturnPhyxPowerMax(self)
    return self.config.ATK2 + self:GetPrimaryAttrValue()
end
function Unit.prototype.RemoveAll(self, u, what)
    for ____, e in ipairs(what) do
        if GetUnitAbilityLevel(u, e) > 0 then
            UnitRemoveAbility(u, e)
        end
    end
end
function Unit.prototype.AddAbs(self, u, what, value)
    local it = 1
    for ____, e in ipairs(what) do
        local should = BlzBitAnd(value, it) == it
        local has = GetUnitAbilityLevel(u, e) > 0
        if should and not has then
            UnitAddAbility(u, e)
            UnitMakeAbilityPermanent(u, true, e)
        end
        if not should and has then
            UnitRemoveAbility(u, e)
        end
        it = it * 2
    end
end
function Unit.prototype.SetNativeAttr(self, attr, value)
    if self.attrs[attr] == value then
        return
    end
    local u = self.nUnit
    local conf = AttrAbilities[attr]
    local neg = conf.neg
    local pos = conf.pos
    value = NClamp(value, 2 ^ #neg - 1, 2 ^ #pos - 1)
    if value == 0 then
        self:RemoveAll(u, neg)
        self:RemoveAll(u, pos)
    else
        if value < 0 then
            self:RemoveAll(u, pos)
            self:AddAbs(
                u,
                neg,
                math.abs(value)
            )
        else
            self:RemoveAll(u, neg)
            self:AddAbs(u, pos, value)
        end
    end
end
function Unit.prototype.InitAttribute(self, attr, getter, setter, retter, modder)
    self.attrs[attr] = 0
    getter = getter or (function(____, isBase) return self.attrs[attr] end)
    setter = setter or (function(____, value)
        self.attrs[attr] = value
    end)
    retter = retter or getter
    modder = modder or (function(____, value)
        setter(
            nil,
            getter(nil, false) + value
        )
    end)
    self.attrGet[attr] = getter
    self.attrSet[attr] = setter
    self.attrRet[attr] = retter
    self.attrMod[attr] = modder
end
function Unit.prototype.InitWithConfig(self)
    local u = self.nUnit
    local config = self.config
    SetHeroStr(u, config.Str, true)
    SetHeroAgi(u, config.Agi, true)
    SetHeroInt(u, config.Int, true)
    BlzSetUnitMaxMana(u, config.Int * 10)
    self:SetAttr(UnitAttr.Mana, config.MP)
    BlzSetUnitMaxHP(u, 1 + config.Str * 10)
    self:SetAttr(UnitAttr.Life, config.HP)
    BlzSetUnitBaseDamage(
        u,
        config.ATK1 - 1 + self:GetPrimaryAttrValue(),
        0
    )
    BlzSetUnitDiceNumber(u, 1, 0)
    BlzSetUnitDiceSides(u, config.ATK2 - config.ATK1 + 1, 0)
    BlzSetUnitArmor(
        u,
        NRound(config.Def * 100)
    )
end
return ____exports
end,
["src.Game.Managers.UnitManager"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Vector2 = require("src.Math.Vector2")
local Vector2 = ____Vector2.Vector2
local ____Unit = require("src.Game.Objects.Unit")
local Unit = ____Unit.Unit
____exports.UnitManager = {}
local UnitManager = ____exports.UnitManager
UnitManager.name = "UnitManager"
UnitManager.__index = UnitManager
UnitManager.prototype = {}
UnitManager.prototype.__index = UnitManager.prototype
UnitManager.prototype.constructor = UnitManager
function UnitManager.new(...)
    local self = setmetatable({}, UnitManager.prototype)
    self:____constructor(...)
    return self
end
function UnitManager.prototype.____constructor(self)
end
function UnitManager.CreateUnit(nPlayer, utid, pos, face)
    if pos == nil then
        pos = Vector2.new()
    end
    if face == nil then
        face = 0
    end
    local u = CreateUnit(nPlayer, utid, pos.x, pos.y, face)
    return Unit.new(utid, u)
end
return ____exports
end,
["src.Game.System"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
return ____exports
end,
["src.Game.Systems.CreateUnitSystem"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Const = require("src.Game.Configs.Const")
local UTID = ____Const.UTID
local ____EventCenter = require("src.Game.EventCenter")
local Keyboard = ____EventCenter.Keyboard
local ____UnitManager = require("src.Game.Managers.UnitManager")
local UnitManager = ____UnitManager.UnitManager
____exports.CreateUnitSystem = {}
local CreateUnitSystem = ____exports.CreateUnitSystem
CreateUnitSystem.name = "CreateUnitSystem"
CreateUnitSystem.__index = CreateUnitSystem
CreateUnitSystem.prototype = {}
CreateUnitSystem.prototype.__index = CreateUnitSystem.prototype
CreateUnitSystem.prototype.constructor = CreateUnitSystem
function CreateUnitSystem.new(...)
    local self = setmetatable({}, CreateUnitSystem.prototype)
    self:____constructor(...)
    return self
end
function CreateUnitSystem.prototype.____constructor(self)
end
function CreateUnitSystem.prototype.Awake(self)
    Keyboard:AddListener(self, self.OnKeyboard)
end
function CreateUnitSystem.prototype.Start(self)
    self.u = UnitManager.CreateUnit(
        Player(0),
        UTID.BladeMaster
    )
    self.c = 0
    UnitManager.CreateUnit(
        Player(0),
        UTID.DemonHunter
    )
    UnitManager.CreateUnit(
        Player(0),
        UTID.Archmage
    )
end
function CreateUnitSystem.prototype.Update(self, dt)
end
function CreateUnitSystem.prototype.OnKeyboard(self, data)
end
return ____exports
end,
["src.Game.Systems.TestSystem"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Logger = require("src.Logger")
local Logger = ____Logger.Logger
local ____EventCenter = require("src.Game.EventCenter")
local Keyboard = ____EventCenter.Keyboard
____exports.TestSystem = {}
local TestSystem = ____exports.TestSystem
TestSystem.name = "TestSystem"
TestSystem.__index = TestSystem
TestSystem.prototype = {}
TestSystem.prototype.__index = TestSystem.prototype
TestSystem.prototype.constructor = TestSystem
function TestSystem.new(...)
    local self = setmetatable({}, TestSystem.prototype)
    self:____constructor(...)
    return self
end
function TestSystem.prototype.____constructor(self)
end
function TestSystem.prototype.OnClickedZ(self, data)
end
function TestSystem.prototype.Awake(self)
    Keyboard:AddListener(self, self.OnClickedZ)
end
function TestSystem.prototype.Start(self)
    Logger.Log("Test system start")
end
function TestSystem.prototype.Update(self, dt)
end
return ____exports
end,
["src.Game.World"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
require("lualib_bundle");
local ____exports = {}
local ____Time = require("src.Time")
local Time = ____Time.Time
____exports.World = {}
local World = ____exports.World
World.name = "World"
World.__index = World
World.prototype = {}
World.prototype.__index = World.prototype
World.prototype.constructor = World
function World.new(...)
    local self = setmetatable({}, World.prototype)
    self:____constructor(...)
    return self
end
function World.prototype.____constructor(self)
    self.systems = {}
    self.time = Time.GetTime()
    self.frame = 0
end
function World.prototype.Add(self, system)
    __TS__ArrayPush(self.systems, system)
end
function World.prototype.Awake(self)
    for ____, e in ipairs(self.systems) do
        e:Awake()
    end
end
function World.prototype.Start(self)
    for ____, e in ipairs(self.systems) do
        e:Start()
    end
end
function World.prototype.Update(self, now)
    self.frame = self.frame + 1
    local delta = now - self.time
    self.time = now
    for ____, e in ipairs(self.systems) do
        e:Update(delta)
    end
end
return ____exports
end,
["src.Game.Engine"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Time = require("src.Time")
local Time = ____Time.Time
local ____Timer = require("src.Timer")
local Timer = ____Timer.Timer
local ____CreateUnitSystem = require("src.Game.Systems.CreateUnitSystem")
local CreateUnitSystem = ____CreateUnitSystem.CreateUnitSystem
local ____TestSystem = require("src.Game.Systems.TestSystem")
local TestSystem = ____TestSystem.TestSystem
local ____World = require("src.Game.World")
local World = ____World.World
____exports.Engine = {}
local Engine = ____exports.Engine
Engine.name = "Engine"
Engine.__index = Engine
Engine.prototype = {}
Engine.prototype.__index = Engine.prototype
Engine.prototype.constructor = Engine
function Engine.new(...)
    local self = setmetatable({}, Engine.prototype)
    self:____constructor(...)
    return self
end
function Engine.prototype.____constructor(self)
end
function Engine.Start()
    local world = World.new()
    ____exports.Engine.world = world
    world:Add(
        TestSystem.new()
    )
    world:Add(
        CreateUnitSystem.new()
    )
    world:Awake()
    world:Start()
    Timer.new(
        0.0166667,
        -1,
        function()
            world:Update(
                Time.GetTime()
            )
        end
    ):Start()
end
return ____exports
end,
["src.Locale.EN"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.EN = {skill_cleave_name = "Cleave", skill_cleave_desc = "Damage all front enemies."}
return ____exports
end,
["src.Locale.ZHCN"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.ZHCN = {}
return ____exports
end,
["src.Locale.Locale"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local ____Logger = require("src.Logger")
local Logger = ____Logger.Logger
local ____EN = require("src.Locale.EN")
local EN = ____EN.EN
local ____ZHCN = require("src.Locale.ZHCN")
local ZHCN = ____ZHCN.ZHCN
____exports.Locale = {}
local Locale = ____exports.Locale
Locale.name = "Locale"
Locale.__index = Locale
Locale.prototype = {}
Locale.prototype.__index = Locale.prototype
Locale.prototype.constructor = Locale
function Locale.new(...)
    local self = setmetatable({}, Locale.prototype)
    self:____constructor(...)
    return self
end
function Locale.prototype.____constructor(self)
end
function Locale.Init(lang)
    if lang == "EN" then
        ____exports.Locale.lang = EN
    elseif lang == "ZHCN" then
        ____exports.Locale.lang = ZHCN
    end
end
function Locale.S(key)
    local ret = ____exports.Locale.lang[key]
    if ret then
        return ret
    else
        Logger.Error(
            "Lang undefined " .. tostring(key)
        )
        return ""
    end
end
return ____exports
end,
["Main"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____Engine = require("src.Game.Engine")
local Engine = ____Engine.Engine
local ____Locale = require("src.Locale.Locale")
local Locale = ____Locale.Locale
local ____Time = require("src.Time")
local Time = ____Time.Time
Time.Init()
Locale.Init("EN")
Engine.Start()
end,
["config"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
end,
["native.emulator"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
end,
["src.Game.Configs.SkillConfig"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.SkillConfig = {}
return ____exports
end,
["src.Game.Objects.User"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
____exports.User = {}
local User = ____exports.User
User.name = "User"
User.__index = User
User.prototype = {}
User.prototype.__index = User.prototype
User.prototype.constructor = User
function User.new(...)
    local self = setmetatable({}, User.prototype)
    self:____constructor(...)
    return self
end
function User.prototype.____constructor(self)
end
function User.GetUser(id)
    return ____exports.User.new()
end
return ____exports
end,
["src.Game.Systems.InputSystem"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
end,
["src.Game.Systems.SpellCastSystem"] = function() --[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
end,
["lualib_bundle"] = function() function __TS__ArrayConcat(arr1, ...)
    local args = ({...})
    local out = {}
    for ____, val in ipairs(arr1) do
        out[#out + 1] = val
    end
    for ____, arg in ipairs(args) do
        if pcall(
            function() return #arg end
        ) and type(arg) ~= "string" then
            local argAsArray = arg
            for ____, val in ipairs(argAsArray) do
                out[#out + 1] = val
            end
        else
            out[#out + 1] = arg
        end
    end
    return out
end

function __TS__ArrayEvery(arr, callbackfn)
    do
        local i = 0
        while i < #arr do
            if not callbackfn(_G, arr[i + 1], i, arr) then
                return false
            end
            i = i + 1
        end
    end
    return true
end

function __TS__ArrayFilter(arr, callbackfn)
    local result = {}
    do
        local i = 0
        while i < #arr do
            if callbackfn(_G, arr[i + 1], i, arr) then
                result[#result + 1] = arr[i + 1]
            end
            i = i + 1
        end
    end
    return result
end

function __TS__ArrayForEach(arr, callbackFn)
    do
        local i = 0
        while i < #arr do
            callbackFn(_G, arr[i + 1], i, arr)
            i = i + 1
        end
    end
end

function __TS__ArrayFind(arr, predicate)
    local len = #arr
    local k = 0
    while k < len do
        local elem = arr[k + 1]
        if predicate(_G, elem, k, arr) then
            return elem
        end
        k = k + 1
    end
    return nil
end

function __TS__ArrayFindIndex(arr, callbackFn)
    do
        local i = 0
        local len = #arr
        while i < len do
            if callbackFn(_G, arr[i + 1], i, arr) then
                return i
            end
            i = i + 1
        end
    end
    return -1
end

function __TS__ArrayIndexOf(arr, searchElement, fromIndex)
    local len = #arr
    if len == 0 then
        return -1
    end
    local n = 0
    if fromIndex then
        n = fromIndex
    end
    if n >= len then
        return -1
    end
    local k
    if n >= 0 then
        k = n
    else
        k = len + n
        if k < 0 then
            k = 0
        end
    end
    do
        local i = k
        while i < len do
            if arr[i + 1] == searchElement then
                return i
            end
            i = i + 1
        end
    end
    return -1
end

function __TS__ArrayMap(arr, callbackfn)
    local newArray = {}
    do
        local i = 0
        while i < #arr do
            newArray[i + 1] = callbackfn(_G, arr[i + 1], i, arr)
            i = i + 1
        end
    end
    return newArray
end

function __TS__ArrayPush(arr, ...)
    local items = ({...})
    for ____, item in ipairs(items) do
        arr[#arr + 1] = item
    end
    return #arr
end

function __TS__ArrayReduce(arr, callbackFn, ...)
    local len = #arr
    local k = 0
    local accumulator = nil
    if select("#", ...) ~= 0 then
        accumulator = select(1, ...)
    elseif len > 0 then
        accumulator = arr[1]
        k = 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k, len - 1 do
        accumulator = callbackFn(_G, accumulator, arr[i + 1], i, arr)
    end
    return accumulator
end

function __TS__ArrayReduceRight(arr, callbackFn, ...)
    local len = #arr
    local k = len - 1
    local accumulator = nil
    if select("#", ...) ~= 0 then
        accumulator = select(1, ...)
    elseif len > 0 then
        accumulator = arr[k + 1]
        k = k - 1
    else
        error("Reduce of empty array with no initial value", 0)
    end
    for i = k, 0, -1 do
        accumulator = callbackFn(_G, accumulator, arr[i + 1], i, arr)
    end
    return accumulator
end

function __TS__ArrayReverse(arr)
    local i = 0
    local j = #arr - 1
    while i < j do
        local temp = arr[j + 1]
        arr[j + 1] = arr[i + 1]
        arr[i + 1] = temp
        i = i + 1
        j = j - 1
    end
    return arr
end

function __TS__ArrayShift(arr)
    return table.remove(arr, 1)
end

function __TS__ArrayUnshift(arr, ...)
    local items = ({...})
    do
        local i = #items - 1
        while i >= 0 do
            table.insert(arr, 1, items[i + 1])
            i = i - 1
        end
    end
    return #arr
end

function __TS__ArraySort(arr, compareFn)
    if compareFn ~= nil then
        table.sort(
            arr,
            function(a, b) return compareFn(_G, a, b) < 0 end
        )
    else
        table.sort(arr)
    end
    return arr
end

function __TS__ArraySlice(list, first, last)
    local len = #list
    local relativeStart = first or 0
    local k
    if relativeStart < 0 then
        k = math.max(len + relativeStart, 0)
    else
        k = math.min(relativeStart, len)
    end
    local relativeEnd = last
    if last == nil then
        relativeEnd = len
    end
    local final
    if relativeEnd < 0 then
        final = math.max(len + relativeEnd, 0)
    else
        final = math.min(relativeEnd, len)
    end
    local out = {}
    local n = 0
    while k < final do
        out[n + 1] = list[k + 1]
        k = k + 1
        n = n + 1
    end
    return out
end

function __TS__ArraySome(arr, callbackfn)
    do
        local i = 0
        while i < #arr do
            if callbackfn(_G, arr[i + 1], i, arr) then
                return true
            end
            i = i + 1
        end
    end
    return false
end

function __TS__ArraySplice(list, ...)
    local len = #list
    local actualArgumentCount = select("#", ...)
    local start = select(1, ...)
    local deleteCount = select(2, ...)
    local actualStart
    if start < 0 then
        actualStart = math.max(len + start, 0)
    else
        actualStart = math.min(start, len)
    end
    local itemCount = math.max(actualArgumentCount - 2, 0)
    local actualDeleteCount
    if actualArgumentCount == 0 then
        actualDeleteCount = 0
    elseif actualArgumentCount == 1 then
        actualDeleteCount = len - actualStart
    else
        actualDeleteCount = math.min(
            math.max(deleteCount or 0, 0),
            len - actualStart
        )
    end
    local out = {}
    do
        local k = 0
        while k < actualDeleteCount do
            local from = actualStart + k
            if list[from + 1] then
                out[k + 1] = list[from + 1]
            end
            k = k + 1
        end
    end
    if itemCount < actualDeleteCount then
        do
            local k = actualStart
            while k < len - actualDeleteCount do
                local from = k + actualDeleteCount
                local to = k + itemCount
                if list[from + 1] then
                    list[to + 1] = list[from + 1]
                else
                    list[to + 1] = nil
                end
                k = k + 1
            end
        end
        do
            local k = len
            while k > len - actualDeleteCount + itemCount do
                list[k] = nil
                k = k - 1
            end
        end
    elseif itemCount > actualDeleteCount then
        do
            local k = len - actualDeleteCount
            while k > actualStart do
                local from = k + actualDeleteCount - 1
                local to = k + itemCount - 1
                if list[from + 1] then
                    list[to + 1] = list[from + 1]
                else
                    list[to + 1] = nil
                end
                k = k - 1
            end
        end
    end
    local j = actualStart
    for i = 3, actualArgumentCount do
        list[j + 1] = select(i, ...)
        j = j + 1
    end
    do
        local k = #list - 1
        while k >= len - actualDeleteCount + itemCount do
            list[k + 1] = nil
            k = k - 1
        end
    end
    return out
end

function __TS__ArrayToObject(array)
    local object = {}
    do
        local i = 0
        while i < #array do
            object[i] = array[i + 1]
            i = i + 1
        end
    end
    return object
end

function __TS__ArrayFlat(array, depth)
    if depth == nil then
        depth = 1
    end
    local result = {}
    for ____, value in ipairs(array) do
        if depth > 0 and type(value) == "table" and (value[1] ~= nil or next(value, nil) == nil) then
            result = __TS__ArrayConcat(
                result,
                __TS__ArrayFlat(value, depth - 1)
            )
        else
            result[#result + 1] = value
        end
    end
    return result
end

function __TS__ArrayFlatMap(array, callback)
    local result = {}
    do
        local i = 0
        while i < #array do
            local value = callback(_G, array[i + 1], i, array)
            if type(value) == "table" and (value[1] ~= nil or next(value, nil) == nil) then
                result = __TS__ArrayConcat(result, value)
            else
                result[#result + 1] = value
            end
            i = i + 1
        end
    end
    return result
end

function __TS__ArraySetLength(arr, length)
    if length < 0 or length ~= length or length == math.huge or math.floor(length) ~= length then
        error(
            "invalid array length: " .. tostring(length),
            0
        )
    end
    do
        local i = #arr - 1
        while i >= length do
            arr[i + 1] = nil
            i = i - 1
        end
    end
    return length
end

function __TS__ClassIndex(classTable, key)
    while true do
        local getters = rawget(classTable, "____getters")
        if getters then
            local getter
            getter = getters[key]
            if getter then
                return getter(classTable)
            end
        end
        classTable = rawget(classTable, "____super")
        if not classTable then
            break
        end
        local val = rawget(classTable, key)
        if val ~= nil then
            return val
        end
    end
end

function __TS__ClassNewIndex(classTable, key, val)
    local tbl = classTable
    repeat
        do
            local setters = rawget(tbl, "____setters")
            if setters then
                local setter
                setter = setters[key]
                if setter then
                    setter(tbl, val)
                    return
                end
            end
            tbl = rawget(tbl, "____super")
        end
    until not tbl
    rawset(classTable, key, val)
end

function __TS__Decorate(decorators, target, key, desc)
    local result = target
    do
        local i = #decorators
        while i >= 0 do
            local decorator = decorators[i + 1]
            if decorator then
                local oldResult = result
                if key == nil then
                    result = decorator(_G, result)
                elseif desc ~= nil then
                    result = decorator(_G, target, key, result)
                else
                    result = decorator(_G, target, key)
                end
                result = result or oldResult
            end
            i = i - 1
        end
    end
    return result
end

function __TS__FunctionCall(fn, thisArg, ...)
    local args = ({...})
    return fn(
        thisArg,
        (unpack or table.unpack)(args)
    )
end

function __TS__GetErrorStack(self, constructor)
    local level = 1
    while true do
        local info = debug.getinfo(level, "f")
        level = level + 1
        if not info then
            level = 1
            break
        elseif info.func == constructor then
            break
        end
    end
    return debug.traceback(nil, level)
end
function __TS__WrapErrorToString(self, getDescription)
    return function(self)
        local description = __TS__FunctionCall(getDescription, self)
        local caller = debug.getinfo(3, "f")
        if _VERSION == "Lua 5.1" or (caller and caller.func ~= error) then
            return description
        else
            return tostring(description) .. "\n" .. tostring(self.stack)
        end
    end
end
function __TS__InitErrorClass(self, Type, name)
    Type.name = name
    return setmetatable(
        Type,
        {
            __call = function(____, _self, message) return Type.new(message) end
        }
    )
end
Error = __TS__InitErrorClass(
    _G,
    (function()
        local ____ = {}
        ____.name = "____"
        ____.__index = ____
        ____.prototype = {}
        ____.prototype.__index = ____.prototype
        ____.prototype.constructor = ____
        function ____.new(...)
            local self = setmetatable({}, ____.prototype)
            self:____constructor(...)
            return self
        end
        function ____.prototype.____constructor(self, message)
            if message == nil then
                message = ""
            end
            self.message = message
            self.name = "Error"
            self.stack = __TS__GetErrorStack(_G, self.constructor.new)
            local metatable = getmetatable(self)
            if not metatable.__errorToStringPatched then
                metatable.__errorToStringPatched = true
                metatable.__tostring = __TS__WrapErrorToString(_G, metatable.__tostring)
            end
        end
        function ____.prototype.__tostring(self)
            return ((self.message ~= "") and function() return tostring(self.name) .. ": " .. tostring(self.message) end or function() return self.name end)()
        end
        return ____
    end)(),
    "Error"
)
for ____, errorName in ipairs({"RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"}) do
    _G[errorName] = __TS__InitErrorClass(
        _G,
        (function()
            local ____ = {}
            ____.name = "____"
            ____.__index = ____
            ____.prototype = {}
            ____.prototype.__index = ____.prototype
            ____.prototype.constructor = ____
            ____.____super = Error
            setmetatable(____, ____.____super)
            setmetatable(____.prototype, ____.____super.prototype)
            function ____.new(...)
                local self = setmetatable({}, ____.prototype)
                self:____constructor(...)
                return self
            end
            function ____.prototype.____constructor(self, ...)
                Error.prototype.____constructor(self, ...)
                self.name = errorName
            end
            return ____
        end)(),
        errorName
    )
end

function __TS__FunctionApply(fn, thisArg, args)
    if args then
        return fn(
            thisArg,
            (unpack or table.unpack)(args)
        )
    else
        return fn(thisArg)
    end
end

function __TS__FunctionBind(fn, thisArg, ...)
    local boundArgs = ({...})
    return function(____, ...)
        local args = ({...})
        do
            local i = 0
            while i < #boundArgs do
                table.insert(args, i + 1, boundArgs[i + 1])
                i = i + 1
            end
        end
        return fn(
            thisArg,
            (unpack or table.unpack)(args)
        )
    end
end

function __TS__Index(classProto)
    return function(tbl, key)
        local proto = classProto
        while true do
            local val = rawget(proto, key)
            if val ~= nil then
                return val
            end
            local getters = rawget(proto, "____getters")
            if getters then
                local getter
                getter = getters[key]
                if getter then
                    return getter(tbl)
                end
            end
            local base = rawget(
                rawget(proto, "constructor"),
                "____super"
            )
            if not base then
                break
            end
            proto = rawget(base, "prototype")
        end
    end
end

local ____symbolMetatable = {
    __tostring = function(self)
        if self.description == nil then
            return "Symbol()"
        else
            return "Symbol(" .. tostring(self.description) .. ")"
        end
    end
}
function __TS__Symbol(description)
    return setmetatable({description = description}, ____symbolMetatable)
end
Symbol = {
    iterator = __TS__Symbol("Symbol.iterator"),
    hasInstance = __TS__Symbol("Symbol.hasInstance"),
    species = __TS__Symbol("Symbol.species"),
    toStringTag = __TS__Symbol("Symbol.toStringTag")
}

function __TS__InstanceOf(obj, classTbl)
    if type(classTbl) ~= "table" then
        error("Right-hand side of \'instanceof\' is not an object", 0)
    end
    if classTbl[Symbol.hasInstance] ~= nil then
        return not not classTbl[Symbol.hasInstance](classTbl, obj)
    end
    if obj ~= nil then
        local luaClass = obj.constructor
        while luaClass ~= nil do
            if luaClass == classTbl then
                return true
            end
            luaClass = luaClass.____super
        end
    end
    return false
end

function __TS__InstanceOfObject(value)
    local valueType = type(value)
    return valueType == "table" or valueType == "function"
end

function __TS__Iterator(iterable)
    if iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        return function()
            local result = iterator:next()
            if not result.done then
                return result.value
            else
                return nil
            end
        end
    else
        local i = 0
        return function()
            i = i + 1
            return iterable[i]
        end
    end
end

Map = (function()
    local Map = {}
    Map.name = "Map"
    Map.__index = Map
    Map.prototype = {}
    Map.prototype.__index = Map.prototype
    Map.prototype.constructor = Map
    function Map.new(...)
        local self = setmetatable({}, Map.prototype)
        self:____constructor(...)
        return self
    end
    function Map.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "Map"
        self.items = {}
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self:set(value[1], value[2])
            end
        else
            local array = entries
            for ____, kvp in ipairs(array) do
                self:set(kvp[1], kvp[2])
            end
        end
    end
    function Map.prototype.clear(self)
        self.items = {}
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
        return
    end
    function Map.prototype.delete(self, key)
        local contains = self:has(key)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[key]
            local previous = self.previousKey[key]
            if next and previous then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[key] = nil
            self.previousKey[key] = nil
        end
        self.items[key] = nil
        return contains
    end
    function Map.prototype.forEach(self, callback)
        for key in __TS__Iterator(
            self:keys()
        ) do
            callback(_G, self.items[key], key, self)
        end
        return
    end
    function Map.prototype.get(self, key)
        return self.items[key]
    end
    function Map.prototype.has(self, key)
        return self.nextKey[key] ~= nil or self.lastKey == key
    end
    function Map.prototype.set(self, key, value)
        local isNewValue = not self:has(key)
        if isNewValue then
            self.size = self.size + 1
        end
        self.items[key] = value
        if self.firstKey == nil then
            self.firstKey = key
            self.lastKey = key
        elseif isNewValue then
            self.nextKey[self.lastKey] = key
            self.previousKey[key] = self.lastKey
            self.lastKey = key
        end
        return self
    end
    Map.prototype[Symbol.iterator] = function(self)
        return self:entries()
    end
    function Map.prototype.entries(self)
        local items = self.items
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, items[key]}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Map.prototype.values(self)
        local items = self.items
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = items[key]}
                key = nextKey[key]
                return result
            end
        }
    end
    Map[Symbol.species] = Map
    return Map
end)()

function __TS__NewIndex(classProto)
    return function(tbl, key, val)
        local proto = classProto
        while true do
            local setters = rawget(proto, "____setters")
            if setters then
                local setter
                setter = setters[key]
                if setter then
                    setter(tbl, val)
                    return
                end
            end
            local base = rawget(
                rawget(proto, "constructor"),
                "____super"
            )
            if not base then
                break
            end
            proto = rawget(base, "prototype")
        end
        rawset(tbl, key, val)
    end
end

function __TS__Number(value)
    local valueType = type(value)
    if valueType == "number" then
        return value
    elseif valueType == "string" then
        local numberValue = tonumber(value)
        if numberValue then
            return numberValue
        end
        if value == "Infinity" then
            return math.huge
        end
        if value == "-Infinity" then
            return -math.huge
        end
        local stringWithoutSpaces = string.gsub(value, "%s", "")
        if stringWithoutSpaces == "" then
            return 0
        end
        return (0 / 0)
    elseif valueType == "boolean" then
        return value and 1 or 0
    else
        return (0 / 0)
    end
end

function __TS__NumberIsFinite(value)
    return type(value) == "number" and value == value and value ~= math.huge and value ~= -math.huge
end

function __TS__NumberIsNaN(value)
    return value ~= value
end

local ____radixChars = "0123456789abcdefghijklmnopqrstuvwxyz"
function __TS__NumberToString(self, radix)
    if radix == nil or radix == 10 or self == math.huge or self == -math.huge or self ~= self then
        return tostring(self)
    end
    radix = math.floor(radix)
    if radix < 2 or radix > 36 then
        error("toString() radix argument must be between 2 and 36", 0)
    end
    local integer, fraction = math.modf(
        math.abs(self)
    )
    local result = ""
    if radix == 8 then
        result = string.format("%o", integer)
    elseif radix == 16 then
        result = string.format("%x", integer)
    else
        repeat
            do
                result = tostring(
                    string.sub(____radixChars, (integer % radix) + 1, (integer % radix) + 1)
                ) .. tostring(result)
                integer = math.floor(integer / radix)
            end
        until not (integer ~= 0)
    end
    if fraction ~= 0 then
        result = tostring(result) .. "."
        local delta = 1e-16
        repeat
            do
                fraction = fraction * radix
                delta = delta * radix
                local digit = math.floor(fraction)
                result = tostring(result) .. tostring(
                    string.sub(____radixChars, digit + 1, digit + 1)
                )
                fraction = fraction - digit
            end
        until not (fraction >= delta)
    end
    if self < 0 then
        result = "-" .. tostring(result)
    end
    return result
end

function __TS__ObjectAssign(to, ...)
    local sources = ({...})
    if to == nil then
        return to
    end
    for ____, source in ipairs(sources) do
        for key in pairs(source) do
            to[key] = source[key]
        end
    end
    return to
end

function __TS__ObjectEntries(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = {key, obj[key]}
    end
    return result
end

function __TS__ObjectFromEntries(entries)
    local obj = {}
    local iterable = entries
    if iterable[Symbol.iterator] then
        local iterator = iterable[Symbol.iterator](iterable)
        while true do
            local result = iterator:next()
            if result.done then
                break
            end
            local value = result.value
            obj[value[1]] = value[2]
        end
    else
        for ____, entry in ipairs(entries) do
            obj[entry[1]] = entry[2]
        end
    end
    return obj
end

function __TS__ObjectKeys(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = key
    end
    return result
end

function __TS__ObjectRest(target, usedProperties)
    local result = {}
    for property in pairs(target) do
        if not usedProperties[property] then
            result[property] = target[property]
        end
    end
    return result
end

function __TS__ObjectValues(obj)
    local result = {}
    for key in pairs(obj) do
        result[#result + 1] = obj[key]
    end
    return result
end

Set = (function()
    local Set = {}
    Set.name = "Set"
    Set.__index = Set
    Set.prototype = {}
    Set.prototype.__index = Set.prototype
    Set.prototype.constructor = Set
    function Set.new(...)
        local self = setmetatable({}, Set.prototype)
        self:____constructor(...)
        return self
    end
    function Set.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "Set"
        self.size = 0
        self.nextKey = {}
        self.previousKey = {}
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self:add(result.value)
            end
        else
            local array = values
            for ____, value in ipairs(array) do
                self:add(value)
            end
        end
    end
    function Set.prototype.add(self, value)
        local isNewValue = not self:has(value)
        if isNewValue then
            self.size = self.size + 1
        end
        if self.firstKey == nil then
            self.firstKey = value
            self.lastKey = value
        elseif isNewValue then
            self.nextKey[self.lastKey] = value
            self.previousKey[value] = self.lastKey
            self.lastKey = value
        end
        return self
    end
    function Set.prototype.clear(self)
        self.nextKey = {}
        self.previousKey = {}
        self.firstKey = nil
        self.lastKey = nil
        self.size = 0
        return
    end
    function Set.prototype.delete(self, value)
        local contains = self:has(value)
        if contains then
            self.size = self.size - 1
            local next = self.nextKey[value]
            local previous = self.previousKey[value]
            if next and previous then
                self.nextKey[previous] = next
                self.previousKey[next] = previous
            elseif next then
                self.firstKey = next
                self.previousKey[next] = nil
            elseif previous then
                self.lastKey = previous
                self.nextKey[previous] = nil
            else
                self.firstKey = nil
                self.lastKey = nil
            end
            self.nextKey[value] = nil
            self.previousKey[value] = nil
        end
        return contains
    end
    function Set.prototype.forEach(self, callback)
        for key in __TS__Iterator(
            self:keys()
        ) do
            callback(_G, key, key, self)
        end
    end
    function Set.prototype.has(self, value)
        return self.nextKey[value] ~= nil or self.lastKey == value
    end
    Set.prototype[Symbol.iterator] = function(self)
        return self:values()
    end
    function Set.prototype.entries(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = {key, key}}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.keys(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    function Set.prototype.values(self)
        local nextKey = self.nextKey
        local key = self.firstKey
        return {
            [Symbol.iterator] = function(self)
                return self
            end,
            next = function(self)
                local result = {done = not key, value = key}
                key = nextKey[key]
                return result
            end
        }
    end
    Set[Symbol.species] = Set
    return Set
end)()

WeakMap = (function()
    local WeakMap = {}
    WeakMap.name = "WeakMap"
    WeakMap.__index = WeakMap
    WeakMap.prototype = {}
    WeakMap.prototype.__index = WeakMap.prototype
    WeakMap.prototype.constructor = WeakMap
    function WeakMap.new(...)
        local self = setmetatable({}, WeakMap.prototype)
        self:____constructor(...)
        return self
    end
    function WeakMap.prototype.____constructor(self, entries)
        self[Symbol.toStringTag] = "WeakMap"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if entries == nil then
            return
        end
        local iterable = entries
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                local value = result.value
                self.items[value[1]] = value[2]
            end
        else
            for ____, kvp in ipairs(entries) do
                self.items[kvp[1]] = kvp[2]
            end
        end
    end
    function WeakMap.prototype.delete(self, key)
        local contains = self:has(key)
        self.items[key] = nil
        return contains
    end
    function WeakMap.prototype.get(self, key)
        return self.items[key]
    end
    function WeakMap.prototype.has(self, key)
        return self.items[key] ~= nil
    end
    function WeakMap.prototype.set(self, key, value)
        self.items[key] = value
        return self
    end
    WeakMap[Symbol.species] = WeakMap
    return WeakMap
end)()

WeakSet = (function()
    local WeakSet = {}
    WeakSet.name = "WeakSet"
    WeakSet.__index = WeakSet
    WeakSet.prototype = {}
    WeakSet.prototype.__index = WeakSet.prototype
    WeakSet.prototype.constructor = WeakSet
    function WeakSet.new(...)
        local self = setmetatable({}, WeakSet.prototype)
        self:____constructor(...)
        return self
    end
    function WeakSet.prototype.____constructor(self, values)
        self[Symbol.toStringTag] = "WeakSet"
        self.items = {}
        setmetatable(self.items, {__mode = "k"})
        if values == nil then
            return
        end
        local iterable = values
        if iterable[Symbol.iterator] then
            local iterator = iterable[Symbol.iterator](iterable)
            while true do
                local result = iterator:next()
                if result.done then
                    break
                end
                self.items[result.value] = true
            end
        else
            for ____, value in ipairs(values) do
                self.items[value] = true
            end
        end
    end
    function WeakSet.prototype.add(self, value)
        self.items[value] = true
        return self
    end
    function WeakSet.prototype.delete(self, value)
        local contains = self:has(value)
        self.items[value] = nil
        return contains
    end
    function WeakSet.prototype.has(self, value)
        return self.items[value] == true
    end
    WeakSet[Symbol.species] = WeakSet
    return WeakSet
end)()

function __TS__SourceMapTraceBack(fileName, sourceMap)
    _G.__TS__sourcemap = _G.__TS__sourcemap or {}
    _G.__TS__sourcemap[fileName] = sourceMap
    if _G.__TS__originalTraceback == nil then
        _G.__TS__originalTraceback = debug.traceback
        debug.traceback = function(thread, message, level)
            local trace = _G.__TS__originalTraceback(thread, message, level)
            if type(trace) ~= "string" then
                return trace
            end
            local result = string.gsub(
                trace,
                "(%S+).lua:(%d+)",
                function(file, line)
                    local fileSourceMap = _G.__TS__sourcemap[tostring(file) .. ".lua"]
                    if fileSourceMap and fileSourceMap[line] then
                        return tostring(file) .. ".ts:" .. tostring(fileSourceMap[line])
                    end
                    return tostring(file) .. ".lua:" .. tostring(line)
                end
            )
            return result
        end
    end
end

function __TS__Spread(iterable)
    local arr = {}
    if type(iterable) == "string" then
        do
            local i = 0
            while i < #iterable do
                arr[#arr + 1] = string.sub(iterable, i + 1, i + 1)
                i = i + 1
            end
        end
    else
        for item in __TS__Iterator(iterable) do
            arr[#arr + 1] = item
        end
    end
    return (table.unpack or unpack)(arr)
end

function __TS__StringConcat(str1, ...)
    local args = ({...})
    local out = str1
    for ____, arg in ipairs(args) do
        out = tostring(out) .. tostring(arg)
    end
    return out
end

function __TS__StringEndsWith(self, searchString, endPosition)
    if endPosition == nil or endPosition > #self then
        endPosition = #self
    end
    return string.sub(self, endPosition - #searchString + 1, endPosition) == searchString
end

function __TS__StringPadEnd(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if maxLength == -math.huge or maxLength == math.huge then
        error("Invalid string length", 0)
    end
    if #self >= maxLength or #fillString == 0 then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = tostring(fillString) .. tostring(
            string.rep(
                fillString,
                math.floor(maxLength / #fillString)
            )
        )
    end
    return tostring(self) .. tostring(
        string.sub(
            fillString,
            1,
            math.floor(maxLength)
        )
    )
end

function __TS__StringPadStart(self, maxLength, fillString)
    if fillString == nil then
        fillString = " "
    end
    if maxLength ~= maxLength then
        maxLength = 0
    end
    if maxLength == -math.huge or maxLength == math.huge then
        error("Invalid string length", 0)
    end
    if #self >= maxLength or #fillString == 0 then
        return self
    end
    maxLength = maxLength - #self
    if maxLength > #fillString then
        fillString = tostring(fillString) .. tostring(
            string.rep(
                fillString,
                math.floor(maxLength / #fillString)
            )
        )
    end
    return tostring(
        string.sub(
            fillString,
            1,
            math.floor(maxLength)
        )
    ) .. tostring(self)
end

function __TS__StringReplace(source, searchValue, replaceValue)
    searchValue = string.gsub(searchValue, "[%%%(%)%.%+%-%*%?%[%^%$]", "%%%1")
    if type(replaceValue) == "string" then
        replaceValue = string.gsub(replaceValue, "[%%%(%)%.%+%-%*%?%[%^%$]", "%%%1")
        local result = string.gsub(source, searchValue, replaceValue, 1)
        return result
    else
        local result = string.gsub(
            source,
            searchValue,
            function(match) return replaceValue(_G, match) end,
            1
        )
        return result
    end
end

function __TS__StringSplit(source, separator, limit)
    if limit == nil then
        limit = 4294967295
    end
    if limit == 0 then
        return {}
    end
    local out = {}
    local index = 0
    local count = 0
    if separator == nil or separator == "" then
        while index < #source - 1 and count < limit do
            out[count + 1] = string.sub(source, index + 1, index + 1)
            count = count + 1
            index = index + 1
        end
    else
        local separatorLength = #separator
        local nextIndex = ((string.find(source, separator, nil, true) or 0) - 1)
        while nextIndex >= 0 and count < limit do
            out[count + 1] = string.sub(source, index + 1, nextIndex)
            count = count + 1
            index = nextIndex + separatorLength
            nextIndex = ((string.find(source, separator, index + 1, true) or 0) - 1)
        end
    end
    if count < limit then
        out[count + 1] = string.sub(source, index + 1)
    end
    return out
end

function __TS__StringStartsWith(self, searchString, position)
    if position == nil or position < 0 then
        position = 0
    end
    return string.sub(self, position + 1, #searchString + position) == searchString
end

local ____symbolRegistry = {}
function __TS__SymbolRegistryFor(key)
    if not ____symbolRegistry[key] then
        ____symbolRegistry[key] = __TS__Symbol(key)
    end
    return ____symbolRegistry[key]
end
function __TS__SymbolRegistryKeyFor(sym)
    for key in pairs(____symbolRegistry) do
        if ____symbolRegistry[key] == sym then
            return key
        end
    end
end

function __TS__TypeOf(value)
    local luaType = type(value)
    if luaType == "table" then
        return "object"
    elseif luaType == "nil" then
        return "undefined"
    else
        return luaType
    end
end

 end,
}
return require("Main")

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

