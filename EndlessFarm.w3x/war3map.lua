function InitGlobals()
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
    InitBlizzard()
    InitGlobals()
--nef-inject
local a={}local b=function(c)local d=a[c]if d~=nil then if not d.inited then d.cached=d.loader()d.inited=true end;return d.cached else error("module not found")return nil end end;a["Main"]={inited=false,cached=false,loader=function(...)local e=b("Query")local f={15,50,66}local g=e(f,{where=function(h,i)return i<20 end})for j,k in ipairs(g)do print(k)end end}a["Query"]={inited=false,cached=false,loader=function(...)local e=function(l,m)m=m or{}local n=m.asList;local o=m.where;local p=m.select;local q=m.any;local r=m.all;local s=p or q==nil and r==nil;local t={}local u;local k;for h,i in pairs(l)do if o then if o(h,i)then if s then if n then u=#t+1 else u=h end;if p then k=p(h,i)else k=i end;t[u]=k else if q then if q(h,i)then return true end elseif r then if not r(h,i)then return false end end end end else if s then if n then u=#t+1 else u=h end;if p then k=p(h,i)else k=i end;t[u]=k else if q then if q(h,i)then return true end elseif r then if not r(h,i)then return false end end end end end;if s then return t else if q then return false elseif r then return true end end end;return e end}a["Main"].loader()
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

