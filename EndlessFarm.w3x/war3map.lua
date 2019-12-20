function InitGlobals()
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), -185.2, -74.9, 191.245, FourCC("Hblm"))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
end

function CreateAllUnits()
    CreatePlayerBuildings()
    CreatePlayerUnits()
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
    CreateAllUnits()
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
require("class")
require("clone")
require("TableExt")
local Timer = require("Timer")

local Test = class("Test")

function Test:Constructor()
    
end

function Test:Run()
    
end

print("start of program")
local timer = Timer.New(1, 5, function ()
    print("called")
end):Start()

---- END Main.lua ----
 end}
----------------
__modules["class"] = { inited = false, cached = false, loader = function(...)
---- START class.lua ----
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

---- END class.lua ----
 end}
----------------
__modules["clone"] = { inited = false, cached = false, loader = function(...)
---- START clone.lua ----
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

---- END clone.lua ----
 end}
----------------
__modules["TableExt"] = { inited = false, cached = false, loader = function(...)
---- START TableExt.lua ----
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

---- END TableExt.lua ----
 end}
----------------
__modules["Timer"] = { inited = false, cached = false, loader = function(...)
---- START Timer.lua ----
local Timer = class("Timer")

---@param interval float
---@param loop int loop times, -1 is infinity loop
---@param callback fun(...): void
---@param this any if present, pass to callback as the first arg
function Timer:Constructor(interval, loop, callback, this)
    print("Timer Constructor")
    self.interval = interval
    self.loop = loop
    self.callback = callback
    self.this = this
    self.nTimer = CreateTimer()
end

function Timer:Start()
    print("Timer start")
    self.updater = function ()
        self:Update()
    end
    TimerStart(self.nTimer, self.interval, self.loop ~= 1, self.updater)
end

function Timer:Pause()
    
end

function Timer:Stop()
    
end

function Timer:Update(...)
    print("Timer update, self = " .. t_tojson(self) .. "args = " .. t_tojson({...}))
    if self.this then
        self.callback(self.this, ...)
    else
        self.callback(...)
    end
end

return Timer

---- END Timer.lua ----
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
    DefineStartLocation(0, 128.0, -320.0)
    InitCustomPlayerSlots()
    SetPlayerSlotAvailable(Player(0), MAP_CONTROL_USER)
    InitGenericPlayerSlots()
end

