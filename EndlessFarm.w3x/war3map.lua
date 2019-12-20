function InitGlobals()
end

function CreateUnitsForPlayer0()
    local p = Player(0)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("Hblm"), 270.8, -324.0, 196.041, FourCC("Hblm"))
    SetHeroLevel(u, 10, false)
    SelectHeroSkill(u, FourCC("AHfs"))
    SelectHeroSkill(u, FourCC("AHfs"))
    SelectHeroSkill(u, FourCC("AHfs"))
    SelectHeroSkill(u, FourCC("AHbn"))
    SelectHeroSkill(u, FourCC("AHbn"))
    SelectHeroSkill(u, FourCC("AHbn"))
    SelectHeroSkill(u, FourCC("AHdr"))
    SelectHeroSkill(u, FourCC("AHdr"))
    SelectHeroSkill(u, FourCC("AHdr"))
    SelectHeroSkill(u, FourCC("AHpx"))
    UnitAddItemToSlotById(u, FourCC("ckng"), 0)
    UnitAddItemToSlotById(u, FourCC("ckng"), 1)
    UnitAddItemToSlotById(u, FourCC("rde4"), 2)
    UnitAddItemToSlotById(u, FourCC("ckng"), 3)
    UnitAddItemToSlotById(u, FourCC("rde4"), 4)
    UnitAddItemToSlotById(u, FourCC("ratf"), 5)
end

function CreateUnitsForPlayer3()
    local p = Player(3)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -5.3, -280.5, 208.714, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 2.1, -358.5, 101.099, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 68.8, -743.7, 306.967, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 201.3, -1037.4, 197.013, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 483.1, -44.0, 148.715, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -116.0, 78.5, 47.682, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -371.3, -201.3, 90.981, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -123.3, -633.0, 132.016, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -52.2, -1021.6, 286.192, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 723.2, -1166.2, 192.728, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 510.2, -1143.0, 181.401, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 365.0, -1332.4, 359.154, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 86.3, -1291.4, 155.769, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 793.9, -1108.1, 335.302, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 798.2, -977.7, 175.435, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 425.3, 390.0, 318.405, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -386.5, 432.2, 110.932, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -980.3, 275.5, 8.526, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -1095.7, -130.4, 248.189, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -995.2, -973.7, 93.881, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -720.8, -1535.5, 286.675, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -342.1, -1807.0, 341.949, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 369.6, -1886.2, 24.292, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 937.9, -1584.8, 319.064, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1428.6, -961.7, 197.310, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1691.1, -394.8, 354.682, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1732.9, -77.7, 9.679, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1529.6, 358.5, 17.029, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 935.1, 582.6, 228.632, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 151.3, 453.4, 99.968, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -312.6, -24.6, 71.776, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -453.5, -624.4, 187.927, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -410.0, -969.7, 34.916, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -248.2, -1150.8, 267.877, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 17.4, -1208.3, 192.915, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1135.6, -785.6, 352.287, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1388.7, -280.5, 340.707, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1391.7, 88.5, 230.357, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 954.3, 306.5, 43.727, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -588.6, 337.6, 63.503, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -950.3, 4.7, 322.678, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -946.3, -624.4, 224.985, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -732.4, -1310.1, 313.054, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -231.1, -1637.1, 34.905, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 660.9, -1668.2, 74.413, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1144.6, -1453.2, 97.902, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1295.9, -1139.2, 27.456, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1327.7, -965.7, 21.347, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1221.5, -953.6, 303.331, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -249.1, -1057.2, 225.831, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -663.7, 103.8, 61.459, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), -244.0, -934.8, 233.972, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 417.6, -1020.2, 11.470, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 826.0, -777.7, 63.096, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hfoo"), 935.7, -446.2, 210.076, FourCC("hfoo"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -395.4, -1291.4, 234.510, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -520.0, -1362.0, 233.269, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -637.0, -1298.9, 291.520, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -763.4, -1005.7, 218.931, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -726.5, -493.2, 312.010, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), -505.4, -163.6, 112.262, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 11.7, -106.5, 155.110, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 842.6, -381.2, 233.324, FourCC("hrif"))
    u = BlzCreateUnitWithSkin(p, FourCC("hrif"), 1177.1, -1100.3, 122.787, FourCC("hrif"))
end

function CreateUnitsForPlayer4()
    local p = Player(4)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1806.0, -412.8, 84.696, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1511.1, -96.9, 276.227, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 802.1, 173.6, 207.033, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 279.4, 214.1, 329.314, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -265.3, 188.7, 117.942, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -635.8, -0.2, 202.572, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -760.7, -331.1, 341.652, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -717.0, -818.8, 208.813, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -221.7, -1560.2, 180.643, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 586.7, -1657.9, 5.713, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1109.2, -1595.4, 40.574, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1419.7, -1310.1, 106.955, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1645.5, -658.8, 36.003, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1600.1, -220.1, 161.746, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1085.2, 133.3, 148.672, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 286.0, 265.2, 69.776, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 19.7, 39.0, 338.323, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -172.9, -408.3, 181.829, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), -143.6, -847.7, 334.006, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 36.2, -989.7, 227.995, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 567.1, -1017.6, 216.349, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 791.6, -973.7, 131.346, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 957.1, -806.4, 35.025, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1100.3, -528.5, 301.826, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hgry"), 1138.2, -376.7, 50.352, FourCC("hgry"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1475.3, -493.2, 341.729, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 844.3, -1420.6, 4.603, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 383.1, -1499.9, 267.382, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -227.9, -1242.5, 184.093, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -573.7, -913.2, 200.485, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -697.4, -412.8, 313.966, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -634.7, -77.7, 252.342, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 432.9, -262.0, 278.314, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1084.2, -620.1, 125.567, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1135.0, -1365.7, 250.485, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 958.0, -1499.9, 224.952, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 661.6, -1471.2, 306.253, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 255.6, -1208.3, 111.811, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 214.3, -1139.2, 295.146, FourCC("hkni"))
end

function CreateUnitsForPlayer6()
    local p = Player(6)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1347.0, -135.1, 93.343, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1098.7, 108.4, 93.804, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 829.8, 219.2, 161.823, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 468.0, 173.6, 138.871, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 210.9, -39.1, 191.981, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -56.6, -457.7, 87.871, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -152.5, -917.2, 253.825, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), -47.6, -1268.9, 186.389, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 255.6, -1336.1, 178.083, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 861.2, -1158.5, 209.801, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1261.1, -709.9, 258.110, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1283.5, 234.5, 101.275, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 961.6, 214.1, 236.389, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 819.1, 118.3, 147.891, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 808.8, 24.3, 9.635, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 835.6, -58.5, 163.910, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 996.0, -229.4, 32.488, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 1034.9, -312.8, 63.272, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 998.0, -541.7, 96.441, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 705.7, -925.3, 271.788, FourCC("hkni"))
    u = BlzCreateUnitWithSkin(p, FourCC("hkni"), 369.8, -1208.3, 337.422, FourCC("hkni"))
end

function CreateUnitsForPlayer9()
    local p = Player(9)
    local u
    local unitID
    local t
    local life
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 396.9, 138.4, 293.619, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 33.1, 73.6, 42.244, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -190.0, -96.9, 171.172, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -310.7, -326.5, 147.265, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -335.9, -860.1, 166.997, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 163.4, -1539.0, 159.735, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 996.4, -1546.1, 330.885, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 1508.2, -1061.1, 286.884, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 1657.1, -502.1, 333.324, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 1609.4, -168.3, 262.362, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 1133.2, 63.7, 227.918, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 542.6, 93.4, 359.583, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 271.8, -135.1, 72.292, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 160.9, -524.1, 48.319, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 185.1, -735.2, 25.885, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 301.0, -868.3, 333.951, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 440.0, -917.2, 285.148, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 701.7, -802.2, 349.914, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 900.5, -528.5, 324.194, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 918.4, -271.3, 207.176, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 780.4, -63.3, 184.598, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 379.7, -0.2, 113.459, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), 40.4, -177.8, 183.115, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -118.8, -479.9, 261.461, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -93.4, -781.4, 164.415, FourCC("hmpr"))
    u = BlzCreateUnitWithSkin(p, FourCC("hmpr"), -70.7, -818.8, 190.816, FourCC("hmpr"))
end

function CreatePlayerBuildings()
end

function CreatePlayerUnits()
    CreateUnitsForPlayer0()
    CreateUnitsForPlayer3()
    CreateUnitsForPlayer4()
    CreateUnitsForPlayer6()
    CreateUnitsForPlayer9()
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
require("GlobalFuncs")
require("TableExt")
require("Logger")
local Time = require("Time")
local Engine = require("Game/Engine")

Time.Init()
Engine.Start()

---- END Main.lua ----
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

---- END TableExt.lua ----
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
    local ct = GetGameTime()
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
end

---@param interval float
---@param loop int loop times, -1 is infinity loop
---@param callback fun(...): void
---@param this any if present, pass to callback as the first arg
function Timer:Constructor(interval, loop, callback, this)
    self.interval = interval
    self.loop = loop
    self.callback = callback
    self.this = this
    self.nTimer = CreateTimer()
    Timer.refs[self.nTimer] = self
end

function Timer:Start()
    TimerStart(self.nTimer, self.interval, self.loop ~= 1, Timer.Update)
end

function Timer:Pause()
    
end

function Timer:Stop()
    
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

local TestSystem = class("TestSystem", System)

function TestSystem:Awake()
    log("TestSystem:Awake")
end

function TestSystem:Start()
    log("TestSystem:Start")
end

function TestSystem:Update(dt)
    log("TestSystem:Update " .. dt)
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

