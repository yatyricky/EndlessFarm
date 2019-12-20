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
local a={}local b=function(c)local d=a[c]if d~=nil then if not d.inited then d.cached=d.loader()d.inited=true end;return d.cached else error("module not found")return nil end end;a["Main"]={inited=false,cached=false,loader=function(...)b("GlobalFuncs")b("TableExt")b("Logger")local e=b("Time")local f=b("Game/Engine")e.Init()f.Start()BlzHideOriginFrames(true)end}a["GlobalFuncs"]={inited=false,cached=false,loader=function(...)function clone(g)local h={}local function i(g)if type(g)~="table"then return g elseif h[g]then return h[g]end;local j={}h[g]=j;for k,l in pairs(g)do j[i(k)]=i(l)end;return setmetatable(j,getmetatable(g))end;return i(g)end;function class(m,n)local o=type(n)local p;if o~="function"and o~="table"then o=nil;n=nil end;if o=="function"or n and n.__ctype==1 then p={}if o=="table"then for q,r in pairs(n)do p[q]=r end;p.__create=n.__create;p.super=n else p.__create=n end;p.Constructor=function()end;p.__cname=m;p.__ctype=1;function p.New(...)local s=p.__create(...)for q,r in pairs(p)do s[q]=r end;s.class=p;s:Constructor(...)return s end else if n then p=clone(n)p.super=n else p={Constructor=function()end}end;p.__cname=m;p.__ctype=2;p.__index=p;function p.New(...)local s=setmetatable({},p)s.class=p;s:Constructor(...)return s end end;return p end;function bindfunc(t,u)return function(...)return t(u,...)end end end}a["TableExt"]={inited=false,cached=false,loader=function(...)function t_join(v,w,x)local y=""for z=1,#v do if x then y=y..x(v[z])else y=y..tostring(v[z])end;if z<#v then y=y..w end end;return y end;function t_isempty(v)return next(v)==nil end;function t_tojson(v,A)local function B(C)local D=type(C)if D=="string"then return'"'..C..'"'end;local E=tostring(C)if D=="function"then return'"'..E..'"'else return E end end;local function F(v,G,H,I)if type(v)~="table"then return B(v)end;I=I or{}local J=tostring(v)if I[J]then return'"_ ref '..J..'"'end;I[J]=true;local K="{"if G then K=K.."\n"end;local L=G or""local M=A or""local N=G and L..M or nil;local O=G and" "or""K=K..L..'"_ ":'..O..'"'..J..'"'for q,r in pairs(v)do if G then K=K..",\n"else K=K..","end;local P;if type(q)=="number"then P="_ "..q else P=tostring(q)end;K=K..L..'"'..P..'":'..O..F(r,N,G,I)end;if G then K=K.."\n"..(H or"")end;K=K.."}"return K end;return F(v,A)end;function t_query(Q,R)R=R or{}local S=R.asList;local T=R.where;local U=R.select;local V=R.any;local W=R.all;local X=U or V==nil and W==nil;local Y={}local k;local l;for q,r in pairs(Q)do if T then if T(q,r)then if X then if S then k=#Y+1 else k=q end;if U then l=U(q,r)else l=r end;Y[k]=l else if V then if V(q,r)then return true end elseif W then if not W(q,r)then return false end end end end else if X then if S then k=#Y+1 else k=q end;if U then l=U(q,r)else l=r end;Y[k]=l else if V then if V(q,r)then return true end elseif W then if not W(q,r)then return false end end end end end;if X then return Y else if V then return false elseif W then return true end end end;t_insert=table.insert end}a["Logger"]={inited=false,cached=false,loader=function(...)local e=b("Time")function log(...)local K=""for Z,r in pairs({...})do K=K.." "..t_tojson(r)end;print(e.GetTime().."[I]:"..K)end;function logwarn(...)print(e.GetTime().."[W]:",...)end;function logerror(...)print(e.GetTime().."[E]:",...)end end}a["Time"]={inited=false,cached=false,loader=function(...)local e={}local _=100;function e.Init()e.clock=CreateTimer()e.time=0;TimerStart(e.clock,_,true,function()e.time=e.time+_ end)end;function e.GetTime()return e.time+TimerGetElapsed(e.clock)end;function e.GetTimeHMS()local a0=GetGameTime()local v={}local a1=math.floor(a0)a0=a0-a1;v.h=math.floor(a1/3600)a1=a1-v.h*3600;v.m=math.floor(a1/60)a1=a1-v.m*60;v.s=a1+a0;return v end;return e end}a["Game/Engine"]={inited=false,cached=false,loader=function(...)local e=b("Time")local a2=b("Timer")local a3=b("Game/World")local f={}function f.Start()local a4=a3.New()a4:Add(b("Game/Systems/TestSystem").New())a4:Add(b("Game/Systems/SpellCastSystem").New())a4:Awake()a4:Start()local a5=e.GetTime()local a6=a2.New(0.01666667,-1,function()local a7=e.GetTime()a4:Update(a7-a5)a5=a7 end):Start()end;return f end}a["Timer"]={inited=false,cached=false,loader=function(...)local a2=class("Timer")a2.refs={}function a2.Update()local a8=a2.refs[GetExpiredTimer()]if a8.this then a8.callback(a8.this)else a8.callback()end end;function a2:Constructor(a9,aa,ab,a8)self.interval=a9;self.loop=aa;self.callback=ab;self.this=a8;self.nTimer=CreateTimer()a2.refs[self.nTimer]=self end;function a2:Start()TimerStart(self.nTimer,self.interval,self.loop~=1,a2.Update)end;function a2:Pause()end;function a2:Stop()end;return a2 end}a["Game/World"]={inited=false,cached=false,loader=function(...)local a3=class("World")function a3:Constructor()self:Init()end;function a3:Init()self.systems={}self.time=0 end;function a3:Add(ac)t_insert(self.systems,ac)end;function a3:Awake()for Z,r in pairs(self.systems)do r:Awake()end end;function a3:Start()for Z,r in pairs(self.systems)do r:Start()end end;function a3:Update(ad)self.time=self.time+ad;for Z,r in pairs(self.systems)do r:Update(ad)end end;return a3 end}a["Game/Systems/TestSystem"]={inited=false,cached=false,loader=function(...)local ae=b("Game/System")local af=class("TestSystem",ae)function af:Awake()log("TestSystem:Awake")end;function af:Start()log("TestSystem:Start")end;function af:Update(ag)end;return af end}a["Game/System"]={inited=false,cached=false,loader=function(...)local ae=class("System")function ae:Awake()end;function ae:Start()end;function ae:Update(ad)end;return ae end}a["Game/Systems/SpellCastSystem"]={inited=false,cached=false,loader=function(...)local ae=b("Game/System")local ah=b("Game/EventCenter")local ai=class("SpellCastSystem",ae)function ai:Awake()ah.SpellCast:AddListener(self.OnSpellCast,self)end;function ai:OnSpellCast(aj,ak)log(GetUnitName(aj).." cast "..ak)end;return ai end}a["Game/EventCenter"]={inited=false,cached=false,loader=function(...)local al=b("Event")local am=0;local function an()am=am+1;return am end;return{SpellCast=al.New(an())}end}a["Event"]={inited=false,cached=false,loader=function(...)local al=class("Event")function al:Constructor(am)self.id=am;self.handlers={}end;function al:AddListener(ao,u)if self.handlers[ao]then logwarn("double AddListener ",self.id,ao,u)end;self.handlers[ao]=u or false end;function al:RemoveListener(ao)if ao then if not self.handlers[ao]then logwarn("no hander in event ",self.id,ao)end;self.handlers[ao]=nil else self.handlers={}end end;function al:Broadcast(...)local ap=0;for ao,u in pairs(self.handlers)do if u then ao(u,...)else ao(...)end;ap=ap+1 end;if ap==0 then log("event "..self.id.." has no listener")end end;return al end}a["Main"].loader()
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

