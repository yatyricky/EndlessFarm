---@class handle
---@class agent : handle all reference counted objects
---@class event : agent a reference to an event registration
---@class player : agent a single player reference
---@class widget : agent an interactive game object with life
---@class unit : widget a single unit reference
---@class destructable : widget
---@class item : widget
---@class ability : agent
---@class buff : ability
---@class force : agent
---@class group : agent
---@class trigger : agent
---@class triggercondition : agent
---@class triggeraction : handle
---@class timer : agent
---@class location : agent
---@class region : agent
---@class rect : agent
---@class boolexpr : agent
---@class sound : agent
---@class conditionfunc : boolexpr
---@class filterfunc : boolexpr
---@class unitpool : handle
---@class itempool : handle
---@class race : handle
---@class alliancetype : handle
---@class racepreference : handle
---@class gamestate : handle
---@class igamestate : gamestate
---@class fgamestate : gamestate
---@class playerstate : handle
---@class playerscore : handle
---@class playergameresult : handle
---@class unitstate : handle
---@class aidifficulty : handle
---@class eventid : handle
---@class gameevent : eventid
---@class playerevent : eventid
---@class playerunitevent : eventid
---@class unitevent : eventid
---@class limitop : eventid
---@class widgetevent : eventid
---@class dialogevent : eventid
---@class unittype : handle
---@class gamespeed : handle
---@class gamedifficulty : handle
---@class gametype : handle
---@class mapflag : handle
---@class mapvisibility : handle
---@class mapsetting : handle
---@class mapdensity : handle
---@class mapcontrol : handle
---@class playerslotstate : handle
---@class volumegroup : handle
---@class camerafield : handle
---@class camerasetup : handle
---@class playercolor : handle
---@class placement : handle
---@class startlocprio : handle
---@class raritycontrol : handle
---@class blendmode : handle
---@class texmapflags : handle
---@class effect : agent
---@class effecttype : handle
---@class weathereffect : handle
---@class terraindeformation : handle
---@class fogstate : handle
---@class fogmodifier : agent
---@class dialog : agent
---@class button : agent
---@class quest : agent
---@class questitem : agent
---@class defeatcondition : agent
---@class timerdialog : agent
---@class leaderboard : agent
---@class multiboard : agent
---@class multiboarditem : agent
---@class trackable : agent
---@class gamecache : agent
---@class version : handle
---@class itemtype : handle
---@class texttag : handle
---@class attacktype : handle
---@class damagetype : handle
---@class weapontype : handle
---@class soundtype : handle
---@class lightning : handle
---@class pathingtype : handle
---@class mousebuttontype : handle
---@class animtype : handle
---@class subanimtype : handle
---@class image : handle
---@class ubersplat : handle
---@class hashtable : agent
---@class framehandle : handle
---@class originframetype : handle
---@class framepointtype : handle
---@class textaligntype : handle
---@class frameeventtype : handle
---@class oskeytype : handle
---@class abilityintegerfield : handle
---@class abilityrealfield : handle
---@class abilitybooleanfield : handle
---@class abilitystringfield : handle
---@class abilityintegerlevelfield : handle
---@class abilityreallevelfield : handle
---@class abilitybooleanlevelfield : handle
---@class abilitystringlevelfield : handle
---@class abilityintegerlevelarrayfield : handle
---@class abilityreallevelarrayfield : handle
---@class abilitybooleanlevelarrayfield : handle
---@class abilitystringlevelarrayfield : handle
---@class unitintegerfield : handle
---@class unitrealfield : handle
---@class unitbooleanfield : handle
---@class unitstringfield : handle
---@class unitweaponintegerfield : handle
---@class unitweaponrealfield : handle
---@class unitweaponbooleanfield : handle
---@class unitweaponstringfield : handle
---@class itemintegerfield : handle
---@class itemrealfield : handle
---@class itembooleanfield : handle
---@class itemstringfield : handle
---@class movetype : handle
---@class targetflag : handle
---@class armortype : handle
---@class heroattribute : handle
---@class defensetype : handle
---@class regentype : handle
---@class unitcategory : handle
---@class pathingflag : handle


---@param i integer
---@return race
function ConvertRace(i) end


---@param i integer
---@return alliancetype
function ConvertAllianceType(i) end


---@param i integer
---@return racepreference
function ConvertRacePref(i) end


---@param i integer
---@return igamestate
function ConvertIGameState(i) end


---@param i integer
---@return fgamestate
function ConvertFGameState(i) end


---@param i integer
---@return playerstate
function ConvertPlayerState(i) end


---@param i integer
---@return playerscore
function ConvertPlayerScore(i) end


---@param i integer
---@return playergameresult
function ConvertPlayerGameResult(i) end


---@param i integer
---@return unitstate
function ConvertUnitState(i) end


---@param i integer
---@return aidifficulty
function ConvertAIDifficulty(i) end


---@param i integer
---@return gameevent
function ConvertGameEvent(i) end


---@param i integer
---@return playerevent
function ConvertPlayerEvent(i) end


---@param i integer
---@return playerunitevent
function ConvertPlayerUnitEvent(i) end


---@param i integer
---@return widgetevent
function ConvertWidgetEvent(i) end


---@param i integer
---@return dialogevent
function ConvertDialogEvent(i) end


---@param i integer
---@return unitevent
function ConvertUnitEvent(i) end


---@param i integer
---@return limitop
function ConvertLimitOp(i) end


---@param i integer
---@return unittype
function ConvertUnitType(i) end


---@param i integer
---@return gamespeed
function ConvertGameSpeed(i) end


---@param i integer
---@return placement
function ConvertPlacement(i) end


---@param i integer
---@return startlocprio
function ConvertStartLocPrio(i) end


---@param i integer
---@return gamedifficulty
function ConvertGameDifficulty(i) end


---@param i integer
---@return gametype
function ConvertGameType(i) end


---@param i integer
---@return mapflag
function ConvertMapFlag(i) end


---@param i integer
---@return mapvisibility
function ConvertMapVisibility(i) end


---@param i integer
---@return mapsetting
function ConvertMapSetting(i) end


---@param i integer
---@return mapdensity
function ConvertMapDensity(i) end


---@param i integer
---@return mapcontrol
function ConvertMapControl(i) end


---@param i integer
---@return playercolor
function ConvertPlayerColor(i) end


---@param i integer
---@return playerslotstate
function ConvertPlayerSlotState(i) end


---@param i integer
---@return volumegroup
function ConvertVolumeGroup(i) end


---@param i integer
---@return camerafield
function ConvertCameraField(i) end


---@param i integer
---@return blendmode
function ConvertBlendMode(i) end


---@param i integer
---@return raritycontrol
function ConvertRarityControl(i) end


---@param i integer
---@return texmapflags
function ConvertTexMapFlags(i) end


---@param i integer
---@return fogstate
function ConvertFogState(i) end


---@param i integer
---@return effecttype
function ConvertEffectType(i) end


---@param i integer
---@return version
function ConvertVersion(i) end


---@param i integer
---@return itemtype
function ConvertItemType(i) end


---@param i integer
---@return attacktype
function ConvertAttackType(i) end


---@param i integer
---@return damagetype
function ConvertDamageType(i) end


---@param i integer
---@return weapontype
function ConvertWeaponType(i) end


---@param i integer
---@return soundtype
function ConvertSoundType(i) end


---@param i integer
---@return pathingtype
function ConvertPathingType(i) end


---@param i integer
---@return mousebuttontype
function ConvertMouseButtonType(i) end


---@param i integer
---@return animtype
function ConvertAnimType(i) end


---@param i integer
---@return subanimtype
function ConvertSubAnimType(i) end


---@param i integer
---@return originframetype
function ConvertOriginFrameType(i) end


---@param i integer
---@return framepointtype
function ConvertFramePointType(i) end


---@param i integer
---@return textaligntype
function ConvertTextAlignType(i) end


---@param i integer
---@return frameeventtype
function ConvertFrameEventType(i) end


---@param i integer
---@return oskeytype
function ConvertOsKeyType(i) end


---@param i integer
---@return abilityintegerfield
function ConvertAbilityIntegerField(i) end


---@param i integer
---@return abilityrealfield
function ConvertAbilityRealField(i) end


---@param i integer
---@return abilitybooleanfield
function ConvertAbilityBooleanField(i) end


---@param i integer
---@return abilitystringfield
function ConvertAbilityStringField(i) end


---@param i integer
---@return abilityintegerlevelfield
function ConvertAbilityIntegerLevelField(i) end


---@param i integer
---@return abilityreallevelfield
function ConvertAbilityRealLevelField(i) end


---@param i integer
---@return abilitybooleanlevelfield
function ConvertAbilityBooleanLevelField(i) end


---@param i integer
---@return abilitystringlevelfield
function ConvertAbilityStringLevelField(i) end


---@param i integer
---@return abilityintegerlevelarrayfield
function ConvertAbilityIntegerLevelArrayField(i) end


---@param i integer
---@return abilityreallevelarrayfield
function ConvertAbilityRealLevelArrayField(i) end


---@param i integer
---@return abilitybooleanlevelarrayfield
function ConvertAbilityBooleanLevelArrayField(i) end


---@param i integer
---@return abilitystringlevelarrayfield
function ConvertAbilityStringLevelArrayField(i) end


---@param i integer
---@return unitintegerfield
function ConvertUnitIntegerField(i) end


---@param i integer
---@return unitrealfield
function ConvertUnitRealField(i) end


---@param i integer
---@return unitbooleanfield
function ConvertUnitBooleanField(i) end


---@param i integer
---@return unitstringfield
function ConvertUnitStringField(i) end


---@param i integer
---@return unitweaponintegerfield
function ConvertUnitWeaponIntegerField(i) end


---@param i integer
---@return unitweaponrealfield
function ConvertUnitWeaponRealField(i) end


---@param i integer
---@return unitweaponbooleanfield
function ConvertUnitWeaponBooleanField(i) end


---@param i integer
---@return unitweaponstringfield
function ConvertUnitWeaponStringField(i) end


---@param i integer
---@return itemintegerfield
function ConvertItemIntegerField(i) end


---@param i integer
---@return itemrealfield
function ConvertItemRealField(i) end


---@param i integer
---@return itembooleanfield
function ConvertItemBooleanField(i) end


---@param i integer
---@return itemstringfield
function ConvertItemStringField(i) end


---@param i integer
---@return movetype
function ConvertMoveType(i) end


---@param i integer
---@return targetflag
function ConvertTargetFlag(i) end


---@param i integer
---@return armortype
function ConvertArmorType(i) end


---@param i integer
---@return heroattribute
function ConvertHeroAttribute(i) end


---@param i integer
---@return defensetype
function ConvertDefenseType(i) end


---@param i integer
---@return regentype
function ConvertRegenType(i) end


---@param i integer
---@return unitcategory
function ConvertUnitCategory(i) end


---@param i integer
---@return pathingflag
function ConvertPathingFlag(i) end


---@param orderIdString string
---@return integer
function OrderId(orderIdString) end


---@param orderId integer
---@return string
function OrderId2String(orderId) end


---@param unitIdString string
---@return integer
function UnitId(unitIdString) end


---@param unitId integer
---@return string
function UnitId2String(unitId) end


---@param abilityIdString string
---@return integer
function AbilityId(abilityIdString) end


---@param abilityId integer
---@return string
function AbilityId2String(abilityId) end


---@param objectId integer
---@return string
function GetObjectName(objectId) end


---@return integer
function GetBJMaxPlayers() end


---@return integer
function GetBJPlayerNeutralVictim() end


---@return integer
function GetBJPlayerNeutralExtra() end


---@return integer
function GetBJMaxPlayerSlots() end


---@return integer
function GetPlayerNeutralPassive() end


---@return integer
function GetPlayerNeutralAggressive() end


---false
FALSE = false ---@type boolean


---true
TRUE = true ---@type boolean


---32768
JASS_MAX_ARRAY_SIZE = 32768 ---@type integer


---GetPlayerNeutralPassive()
PLAYER_NEUTRAL_PASSIVE = GetPlayerNeutralPassive() ---@type integer


---GetPlayerNeutralAggressive()
PLAYER_NEUTRAL_AGGRESSIVE = GetPlayerNeutralAggressive() ---@type integer


---ConvertPlayerColor(0)
PLAYER_COLOR_RED = ConvertPlayerColor(0) ---@type playercolor


---ConvertPlayerColor(1)
PLAYER_COLOR_BLUE = ConvertPlayerColor(1) ---@type playercolor


---ConvertPlayerColor(2)
PLAYER_COLOR_CYAN = ConvertPlayerColor(2) ---@type playercolor


---ConvertPlayerColor(3)
PLAYER_COLOR_PURPLE = ConvertPlayerColor(3) ---@type playercolor


---ConvertPlayerColor(4)
PLAYER_COLOR_YELLOW = ConvertPlayerColor(4) ---@type playercolor


---ConvertPlayerColor(5)
PLAYER_COLOR_ORANGE = ConvertPlayerColor(5) ---@type playercolor


---ConvertPlayerColor(6)
PLAYER_COLOR_GREEN = ConvertPlayerColor(6) ---@type playercolor


---ConvertPlayerColor(7)
PLAYER_COLOR_PINK = ConvertPlayerColor(7) ---@type playercolor


---ConvertPlayerColor(8)
PLAYER_COLOR_LIGHT_GRAY = ConvertPlayerColor(8) ---@type playercolor


---ConvertPlayerColor(9)
PLAYER_COLOR_LIGHT_BLUE = ConvertPlayerColor(9) ---@type playercolor


---ConvertPlayerColor(10)
PLAYER_COLOR_AQUA = ConvertPlayerColor(10) ---@type playercolor


---ConvertPlayerColor(11)
PLAYER_COLOR_BROWN = ConvertPlayerColor(11) ---@type playercolor


---ConvertPlayerColor(12)
PLAYER_COLOR_MAROON = ConvertPlayerColor(12) ---@type playercolor


---ConvertPlayerColor(13)
PLAYER_COLOR_NAVY = ConvertPlayerColor(13) ---@type playercolor


---ConvertPlayerColor(14)
PLAYER_COLOR_TURQUOISE = ConvertPlayerColor(14) ---@type playercolor


---ConvertPlayerColor(15)
PLAYER_COLOR_VIOLET = ConvertPlayerColor(15) ---@type playercolor


---ConvertPlayerColor(16)
PLAYER_COLOR_WHEAT = ConvertPlayerColor(16) ---@type playercolor


---ConvertPlayerColor(17)
PLAYER_COLOR_PEACH = ConvertPlayerColor(17) ---@type playercolor


---ConvertPlayerColor(18)
PLAYER_COLOR_MINT = ConvertPlayerColor(18) ---@type playercolor


---ConvertPlayerColor(19)
PLAYER_COLOR_LAVENDER = ConvertPlayerColor(19) ---@type playercolor


---ConvertPlayerColor(20)
PLAYER_COLOR_COAL = ConvertPlayerColor(20) ---@type playercolor


---ConvertPlayerColor(21)
PLAYER_COLOR_SNOW = ConvertPlayerColor(21) ---@type playercolor


---ConvertPlayerColor(22)
PLAYER_COLOR_EMERALD = ConvertPlayerColor(22) ---@type playercolor


---ConvertPlayerColor(23)
PLAYER_COLOR_PEANUT = ConvertPlayerColor(23) ---@type playercolor


---ConvertRace(1)
RACE_HUMAN = ConvertRace(1) ---@type race


---ConvertRace(2)
RACE_ORC = ConvertRace(2) ---@type race


---ConvertRace(3)
RACE_UNDEAD = ConvertRace(3) ---@type race


---ConvertRace(4)
RACE_NIGHTELF = ConvertRace(4) ---@type race


---ConvertRace(5)
RACE_DEMON = ConvertRace(5) ---@type race


---ConvertRace(7)
RACE_OTHER = ConvertRace(7) ---@type race


---ConvertPlayerGameResult(0)
PLAYER_GAME_RESULT_VICTORY = ConvertPlayerGameResult(0) ---@type playergameresult


---ConvertPlayerGameResult(1)
PLAYER_GAME_RESULT_DEFEAT = ConvertPlayerGameResult(1) ---@type playergameresult


---ConvertPlayerGameResult(2)
PLAYER_GAME_RESULT_TIE = ConvertPlayerGameResult(2) ---@type playergameresult


---ConvertPlayerGameResult(3)
PLAYER_GAME_RESULT_NEUTRAL = ConvertPlayerGameResult(3) ---@type playergameresult


---ConvertAllianceType(0)
ALLIANCE_PASSIVE = ConvertAllianceType(0) ---@type alliancetype


---ConvertAllianceType(1)
ALLIANCE_HELP_REQUEST = ConvertAllianceType(1) ---@type alliancetype


---ConvertAllianceType(2)
ALLIANCE_HELP_RESPONSE = ConvertAllianceType(2) ---@type alliancetype


---ConvertAllianceType(3)
ALLIANCE_SHARED_XP = ConvertAllianceType(3) ---@type alliancetype


---ConvertAllianceType(4)
ALLIANCE_SHARED_SPELLS = ConvertAllianceType(4) ---@type alliancetype


---ConvertAllianceType(5)
ALLIANCE_SHARED_VISION = ConvertAllianceType(5) ---@type alliancetype


---ConvertAllianceType(6)
ALLIANCE_SHARED_CONTROL = ConvertAllianceType(6) ---@type alliancetype


---ConvertAllianceType(7)
ALLIANCE_SHARED_ADVANCED_CONTROL = ConvertAllianceType(7) ---@type alliancetype


---ConvertAllianceType(8)
ALLIANCE_RESCUABLE = ConvertAllianceType(8) ---@type alliancetype


---ConvertAllianceType(9)
ALLIANCE_SHARED_VISION_FORCED = ConvertAllianceType(9) ---@type alliancetype


---ConvertVersion(0)
VERSION_REIGN_OF_CHAOS = ConvertVersion(0) ---@type version


---ConvertVersion(1)
VERSION_FROZEN_THRONE = ConvertVersion(1) ---@type version


---ConvertAttackType(0)
ATTACK_TYPE_NORMAL = ConvertAttackType(0) ---@type attacktype


---ConvertAttackType(1)
ATTACK_TYPE_MELEE = ConvertAttackType(1) ---@type attacktype


---ConvertAttackType(2)
ATTACK_TYPE_PIERCE = ConvertAttackType(2) ---@type attacktype


---ConvertAttackType(3)
ATTACK_TYPE_SIEGE = ConvertAttackType(3) ---@type attacktype


---ConvertAttackType(4)
ATTACK_TYPE_MAGIC = ConvertAttackType(4) ---@type attacktype


---ConvertAttackType(5)
ATTACK_TYPE_CHAOS = ConvertAttackType(5) ---@type attacktype


---ConvertAttackType(6)
ATTACK_TYPE_HERO = ConvertAttackType(6) ---@type attacktype


---ConvertDamageType(0)
DAMAGE_TYPE_UNKNOWN = ConvertDamageType(0) ---@type damagetype


---ConvertDamageType(4)
DAMAGE_TYPE_NORMAL = ConvertDamageType(4) ---@type damagetype


---ConvertDamageType(5)
DAMAGE_TYPE_ENHANCED = ConvertDamageType(5) ---@type damagetype


---ConvertDamageType(8)
DAMAGE_TYPE_FIRE = ConvertDamageType(8) ---@type damagetype


---ConvertDamageType(9)
DAMAGE_TYPE_COLD = ConvertDamageType(9) ---@type damagetype


---ConvertDamageType(10)
DAMAGE_TYPE_LIGHTNING = ConvertDamageType(10) ---@type damagetype


---ConvertDamageType(11)
DAMAGE_TYPE_POISON = ConvertDamageType(11) ---@type damagetype


---ConvertDamageType(12)
DAMAGE_TYPE_DISEASE = ConvertDamageType(12) ---@type damagetype


---ConvertDamageType(13)
DAMAGE_TYPE_DIVINE = ConvertDamageType(13) ---@type damagetype


---ConvertDamageType(14)
DAMAGE_TYPE_MAGIC = ConvertDamageType(14) ---@type damagetype


---ConvertDamageType(15)
DAMAGE_TYPE_SONIC = ConvertDamageType(15) ---@type damagetype


---ConvertDamageType(16)
DAMAGE_TYPE_ACID = ConvertDamageType(16) ---@type damagetype


---ConvertDamageType(17)
DAMAGE_TYPE_FORCE = ConvertDamageType(17) ---@type damagetype


---ConvertDamageType(18)
DAMAGE_TYPE_DEATH = ConvertDamageType(18) ---@type damagetype


---ConvertDamageType(19)
DAMAGE_TYPE_MIND = ConvertDamageType(19) ---@type damagetype


---ConvertDamageType(20)
DAMAGE_TYPE_PLANT = ConvertDamageType(20) ---@type damagetype


---ConvertDamageType(21)
DAMAGE_TYPE_DEFENSIVE = ConvertDamageType(21) ---@type damagetype


---ConvertDamageType(22)
DAMAGE_TYPE_DEMOLITION = ConvertDamageType(22) ---@type damagetype


---ConvertDamageType(23)
DAMAGE_TYPE_SLOW_POISON = ConvertDamageType(23) ---@type damagetype


---ConvertDamageType(24)
DAMAGE_TYPE_SPIRIT_LINK = ConvertDamageType(24) ---@type damagetype


---ConvertDamageType(25)
DAMAGE_TYPE_SHADOW_STRIKE = ConvertDamageType(25) ---@type damagetype


---ConvertDamageType(26)
DAMAGE_TYPE_UNIVERSAL = ConvertDamageType(26) ---@type damagetype


---ConvertWeaponType(0)
WEAPON_TYPE_WHOKNOWS = ConvertWeaponType(0) ---@type weapontype


---ConvertWeaponType(1)
WEAPON_TYPE_METAL_LIGHT_CHOP = ConvertWeaponType(1) ---@type weapontype


---ConvertWeaponType(2)
WEAPON_TYPE_METAL_MEDIUM_CHOP = ConvertWeaponType(2) ---@type weapontype


---ConvertWeaponType(3)
WEAPON_TYPE_METAL_HEAVY_CHOP = ConvertWeaponType(3) ---@type weapontype


---ConvertWeaponType(4)
WEAPON_TYPE_METAL_LIGHT_SLICE = ConvertWeaponType(4) ---@type weapontype


---ConvertWeaponType(5)
WEAPON_TYPE_METAL_MEDIUM_SLICE = ConvertWeaponType(5) ---@type weapontype


---ConvertWeaponType(6)
WEAPON_TYPE_METAL_HEAVY_SLICE = ConvertWeaponType(6) ---@type weapontype


---ConvertWeaponType(7)
WEAPON_TYPE_METAL_MEDIUM_BASH = ConvertWeaponType(7) ---@type weapontype


---ConvertWeaponType(8)
WEAPON_TYPE_METAL_HEAVY_BASH = ConvertWeaponType(8) ---@type weapontype


---ConvertWeaponType(9)
WEAPON_TYPE_METAL_MEDIUM_STAB = ConvertWeaponType(9) ---@type weapontype


---ConvertWeaponType(10)
WEAPON_TYPE_METAL_HEAVY_STAB = ConvertWeaponType(10) ---@type weapontype


---ConvertWeaponType(11)
WEAPON_TYPE_WOOD_LIGHT_SLICE = ConvertWeaponType(11) ---@type weapontype


---ConvertWeaponType(12)
WEAPON_TYPE_WOOD_MEDIUM_SLICE = ConvertWeaponType(12) ---@type weapontype


---ConvertWeaponType(13)
WEAPON_TYPE_WOOD_HEAVY_SLICE = ConvertWeaponType(13) ---@type weapontype


---ConvertWeaponType(14)
WEAPON_TYPE_WOOD_LIGHT_BASH = ConvertWeaponType(14) ---@type weapontype


---ConvertWeaponType(15)
WEAPON_TYPE_WOOD_MEDIUM_BASH = ConvertWeaponType(15) ---@type weapontype


---ConvertWeaponType(16)
WEAPON_TYPE_WOOD_HEAVY_BASH = ConvertWeaponType(16) ---@type weapontype


---ConvertWeaponType(17)
WEAPON_TYPE_WOOD_LIGHT_STAB = ConvertWeaponType(17) ---@type weapontype


---ConvertWeaponType(18)
WEAPON_TYPE_WOOD_MEDIUM_STAB = ConvertWeaponType(18) ---@type weapontype


---ConvertWeaponType(19)
WEAPON_TYPE_CLAW_LIGHT_SLICE = ConvertWeaponType(19) ---@type weapontype


---ConvertWeaponType(20)
WEAPON_TYPE_CLAW_MEDIUM_SLICE = ConvertWeaponType(20) ---@type weapontype


---ConvertWeaponType(21)
WEAPON_TYPE_CLAW_HEAVY_SLICE = ConvertWeaponType(21) ---@type weapontype


---ConvertWeaponType(22)
WEAPON_TYPE_AXE_MEDIUM_CHOP = ConvertWeaponType(22) ---@type weapontype


---ConvertWeaponType(23)
WEAPON_TYPE_ROCK_HEAVY_BASH = ConvertWeaponType(23) ---@type weapontype


---ConvertPathingType(0)
PATHING_TYPE_ANY = ConvertPathingType(0) ---@type pathingtype


---ConvertPathingType(1)
PATHING_TYPE_WALKABILITY = ConvertPathingType(1) ---@type pathingtype


---ConvertPathingType(2)
PATHING_TYPE_FLYABILITY = ConvertPathingType(2) ---@type pathingtype


---ConvertPathingType(3)
PATHING_TYPE_BUILDABILITY = ConvertPathingType(3) ---@type pathingtype


---ConvertPathingType(4)
PATHING_TYPE_PEONHARVESTPATHING = ConvertPathingType(4) ---@type pathingtype


---ConvertPathingType(5)
PATHING_TYPE_BLIGHTPATHING = ConvertPathingType(5) ---@type pathingtype


---ConvertPathingType(6)
PATHING_TYPE_FLOATABILITY = ConvertPathingType(6) ---@type pathingtype


---ConvertPathingType(7)
PATHING_TYPE_AMPHIBIOUSPATHING = ConvertPathingType(7) ---@type pathingtype


---ConvertMouseButtonType(1)
MOUSE_BUTTON_TYPE_LEFT = ConvertMouseButtonType(1) ---@type mousebuttontype


---ConvertMouseButtonType(2)
MOUSE_BUTTON_TYPE_MIDDLE = ConvertMouseButtonType(2) ---@type mousebuttontype


---ConvertMouseButtonType(3)
MOUSE_BUTTON_TYPE_RIGHT = ConvertMouseButtonType(3) ---@type mousebuttontype


---ConvertAnimType(0)
ANIM_TYPE_BIRTH = ConvertAnimType(0) ---@type animtype


---ConvertAnimType(1)
ANIM_TYPE_DEATH = ConvertAnimType(1) ---@type animtype


---ConvertAnimType(2)
ANIM_TYPE_DECAY = ConvertAnimType(2) ---@type animtype


---ConvertAnimType(3)
ANIM_TYPE_DISSIPATE = ConvertAnimType(3) ---@type animtype


---ConvertAnimType(4)
ANIM_TYPE_STAND = ConvertAnimType(4) ---@type animtype


---ConvertAnimType(5)
ANIM_TYPE_WALK = ConvertAnimType(5) ---@type animtype


---ConvertAnimType(6)
ANIM_TYPE_ATTACK = ConvertAnimType(6) ---@type animtype


---ConvertAnimType(7)
ANIM_TYPE_MORPH = ConvertAnimType(7) ---@type animtype


---ConvertAnimType(8)
ANIM_TYPE_SLEEP = ConvertAnimType(8) ---@type animtype


---ConvertAnimType(9)
ANIM_TYPE_SPELL = ConvertAnimType(9) ---@type animtype


---ConvertAnimType(10)
ANIM_TYPE_PORTRAIT = ConvertAnimType(10) ---@type animtype


---ConvertSubAnimType(11)
SUBANIM_TYPE_ROOTED = ConvertSubAnimType(11) ---@type subanimtype


---ConvertSubAnimType(12)
SUBANIM_TYPE_ALTERNATE_EX = ConvertSubAnimType(12) ---@type subanimtype


---ConvertSubAnimType(13)
SUBANIM_TYPE_LOOPING = ConvertSubAnimType(13) ---@type subanimtype


---ConvertSubAnimType(14)
SUBANIM_TYPE_SLAM = ConvertSubAnimType(14) ---@type subanimtype


---ConvertSubAnimType(15)
SUBANIM_TYPE_THROW = ConvertSubAnimType(15) ---@type subanimtype


---ConvertSubAnimType(16)
SUBANIM_TYPE_SPIKED = ConvertSubAnimType(16) ---@type subanimtype


---ConvertSubAnimType(17)
SUBANIM_TYPE_FAST = ConvertSubAnimType(17) ---@type subanimtype


---ConvertSubAnimType(18)
SUBANIM_TYPE_SPIN = ConvertSubAnimType(18) ---@type subanimtype


---ConvertSubAnimType(19)
SUBANIM_TYPE_READY = ConvertSubAnimType(19) ---@type subanimtype


---ConvertSubAnimType(20)
SUBANIM_TYPE_CHANNEL = ConvertSubAnimType(20) ---@type subanimtype


---ConvertSubAnimType(21)
SUBANIM_TYPE_DEFEND = ConvertSubAnimType(21) ---@type subanimtype


---ConvertSubAnimType(22)
SUBANIM_TYPE_VICTORY = ConvertSubAnimType(22) ---@type subanimtype


---ConvertSubAnimType(23)
SUBANIM_TYPE_TURN = ConvertSubAnimType(23) ---@type subanimtype


---ConvertSubAnimType(24)
SUBANIM_TYPE_LEFT = ConvertSubAnimType(24) ---@type subanimtype


---ConvertSubAnimType(25)
SUBANIM_TYPE_RIGHT = ConvertSubAnimType(25) ---@type subanimtype


---ConvertSubAnimType(26)
SUBANIM_TYPE_FIRE = ConvertSubAnimType(26) ---@type subanimtype


---ConvertSubAnimType(27)
SUBANIM_TYPE_FLESH = ConvertSubAnimType(27) ---@type subanimtype


---ConvertSubAnimType(28)
SUBANIM_TYPE_HIT = ConvertSubAnimType(28) ---@type subanimtype


---ConvertSubAnimType(29)
SUBANIM_TYPE_WOUNDED = ConvertSubAnimType(29) ---@type subanimtype


---ConvertSubAnimType(30)
SUBANIM_TYPE_LIGHT = ConvertSubAnimType(30) ---@type subanimtype


---ConvertSubAnimType(31)
SUBANIM_TYPE_MODERATE = ConvertSubAnimType(31) ---@type subanimtype


---ConvertSubAnimType(32)
SUBANIM_TYPE_SEVERE = ConvertSubAnimType(32) ---@type subanimtype


---ConvertSubAnimType(33)
SUBANIM_TYPE_CRITICAL = ConvertSubAnimType(33) ---@type subanimtype


---ConvertSubAnimType(34)
SUBANIM_TYPE_COMPLETE = ConvertSubAnimType(34) ---@type subanimtype


---ConvertSubAnimType(35)
SUBANIM_TYPE_GOLD = ConvertSubAnimType(35) ---@type subanimtype


---ConvertSubAnimType(36)
SUBANIM_TYPE_LUMBER = ConvertSubAnimType(36) ---@type subanimtype


---ConvertSubAnimType(37)
SUBANIM_TYPE_WORK = ConvertSubAnimType(37) ---@type subanimtype


---ConvertSubAnimType(38)
SUBANIM_TYPE_TALK = ConvertSubAnimType(38) ---@type subanimtype


---ConvertSubAnimType(39)
SUBANIM_TYPE_FIRST = ConvertSubAnimType(39) ---@type subanimtype


---ConvertSubAnimType(40)
SUBANIM_TYPE_SECOND = ConvertSubAnimType(40) ---@type subanimtype


---ConvertSubAnimType(41)
SUBANIM_TYPE_THIRD = ConvertSubAnimType(41) ---@type subanimtype


---ConvertSubAnimType(42)
SUBANIM_TYPE_FOURTH = ConvertSubAnimType(42) ---@type subanimtype


---ConvertSubAnimType(43)
SUBANIM_TYPE_FIFTH = ConvertSubAnimType(43) ---@type subanimtype


---ConvertSubAnimType(44)
SUBANIM_TYPE_ONE = ConvertSubAnimType(44) ---@type subanimtype


---ConvertSubAnimType(45)
SUBANIM_TYPE_TWO = ConvertSubAnimType(45) ---@type subanimtype


---ConvertSubAnimType(46)
SUBANIM_TYPE_THREE = ConvertSubAnimType(46) ---@type subanimtype


---ConvertSubAnimType(47)
SUBANIM_TYPE_FOUR = ConvertSubAnimType(47) ---@type subanimtype


---ConvertSubAnimType(48)
SUBANIM_TYPE_FIVE = ConvertSubAnimType(48) ---@type subanimtype


---ConvertSubAnimType(49)
SUBANIM_TYPE_SMALL = ConvertSubAnimType(49) ---@type subanimtype


---ConvertSubAnimType(50)
SUBANIM_TYPE_MEDIUM = ConvertSubAnimType(50) ---@type subanimtype


---ConvertSubAnimType(51)
SUBANIM_TYPE_LARGE = ConvertSubAnimType(51) ---@type subanimtype


---ConvertSubAnimType(52)
SUBANIM_TYPE_UPGRADE = ConvertSubAnimType(52) ---@type subanimtype


---ConvertSubAnimType(53)
SUBANIM_TYPE_DRAIN = ConvertSubAnimType(53) ---@type subanimtype


---ConvertSubAnimType(54)
SUBANIM_TYPE_FILL = ConvertSubAnimType(54) ---@type subanimtype


---ConvertSubAnimType(55)
SUBANIM_TYPE_CHAINLIGHTNING = ConvertSubAnimType(55) ---@type subanimtype


---ConvertSubAnimType(56)
SUBANIM_TYPE_EATTREE = ConvertSubAnimType(56) ---@type subanimtype


---ConvertSubAnimType(57)
SUBANIM_TYPE_PUKE = ConvertSubAnimType(57) ---@type subanimtype


---ConvertSubAnimType(58)
SUBANIM_TYPE_FLAIL = ConvertSubAnimType(58) ---@type subanimtype


---ConvertSubAnimType(59)
SUBANIM_TYPE_OFF = ConvertSubAnimType(59) ---@type subanimtype


---ConvertSubAnimType(60)
SUBANIM_TYPE_SWIM = ConvertSubAnimType(60) ---@type subanimtype


---ConvertSubAnimType(61)
SUBANIM_TYPE_ENTANGLE = ConvertSubAnimType(61) ---@type subanimtype


---ConvertSubAnimType(62)
SUBANIM_TYPE_BERSERK = ConvertSubAnimType(62) ---@type subanimtype


---ConvertRacePref(1)
RACE_PREF_HUMAN = ConvertRacePref(1) ---@type racepreference


---ConvertRacePref(2)
RACE_PREF_ORC = ConvertRacePref(2) ---@type racepreference


---ConvertRacePref(4)
RACE_PREF_NIGHTELF = ConvertRacePref(4) ---@type racepreference


---ConvertRacePref(8)
RACE_PREF_UNDEAD = ConvertRacePref(8) ---@type racepreference


---ConvertRacePref(16)
RACE_PREF_DEMON = ConvertRacePref(16) ---@type racepreference


---ConvertRacePref(32)
RACE_PREF_RANDOM = ConvertRacePref(32) ---@type racepreference


---ConvertRacePref(64)
RACE_PREF_USER_SELECTABLE = ConvertRacePref(64) ---@type racepreference


---ConvertMapControl(0)
MAP_CONTROL_USER = ConvertMapControl(0) ---@type mapcontrol


---ConvertMapControl(1)
MAP_CONTROL_COMPUTER = ConvertMapControl(1) ---@type mapcontrol


---ConvertMapControl(2)
MAP_CONTROL_RESCUABLE = ConvertMapControl(2) ---@type mapcontrol


---ConvertMapControl(3)
MAP_CONTROL_NEUTRAL = ConvertMapControl(3) ---@type mapcontrol


---ConvertMapControl(4)
MAP_CONTROL_CREEP = ConvertMapControl(4) ---@type mapcontrol


---ConvertMapControl(5)
MAP_CONTROL_NONE = ConvertMapControl(5) ---@type mapcontrol


---ConvertGameType(1)
GAME_TYPE_MELEE = ConvertGameType(1) ---@type gametype


---ConvertGameType(2)
GAME_TYPE_FFA = ConvertGameType(2) ---@type gametype


---ConvertGameType(4)
GAME_TYPE_USE_MAP_SETTINGS = ConvertGameType(4) ---@type gametype


---ConvertGameType(8)
GAME_TYPE_BLIZ = ConvertGameType(8) ---@type gametype


---ConvertGameType(16)
GAME_TYPE_ONE_ON_ONE = ConvertGameType(16) ---@type gametype


---ConvertGameType(32)
GAME_TYPE_TWO_TEAM_PLAY = ConvertGameType(32) ---@type gametype


---ConvertGameType(64)
GAME_TYPE_THREE_TEAM_PLAY = ConvertGameType(64) ---@type gametype


---ConvertGameType(128)
GAME_TYPE_FOUR_TEAM_PLAY = ConvertGameType(128) ---@type gametype


---ConvertMapFlag(1)
MAP_FOG_HIDE_TERRAIN = ConvertMapFlag(1) ---@type mapflag


---ConvertMapFlag(2)
MAP_FOG_MAP_EXPLORED = ConvertMapFlag(2) ---@type mapflag


---ConvertMapFlag(4)
MAP_FOG_ALWAYS_VISIBLE = ConvertMapFlag(4) ---@type mapflag


---ConvertMapFlag(8)
MAP_USE_HANDICAPS = ConvertMapFlag(8) ---@type mapflag


---ConvertMapFlag(16)
MAP_OBSERVERS = ConvertMapFlag(16) ---@type mapflag


---ConvertMapFlag(32)
MAP_OBSERVERS_ON_DEATH = ConvertMapFlag(32) ---@type mapflag


---ConvertMapFlag(128)
MAP_FIXED_COLORS = ConvertMapFlag(128) ---@type mapflag


---ConvertMapFlag(256)
MAP_LOCK_RESOURCE_TRADING = ConvertMapFlag(256) ---@type mapflag


---ConvertMapFlag(512)
MAP_RESOURCE_TRADING_ALLIES_ONLY = ConvertMapFlag(512) ---@type mapflag


---ConvertMapFlag(1024)
MAP_LOCK_ALLIANCE_CHANGES = ConvertMapFlag(1024) ---@type mapflag


---ConvertMapFlag(2048)
MAP_ALLIANCE_CHANGES_HIDDEN = ConvertMapFlag(2048) ---@type mapflag


---ConvertMapFlag(4096)
MAP_CHEATS = ConvertMapFlag(4096) ---@type mapflag


---ConvertMapFlag(8192)
MAP_CHEATS_HIDDEN = ConvertMapFlag(8192) ---@type mapflag


---ConvertMapFlag(8192*2)
MAP_LOCK_SPEED = ConvertMapFlag(8192*2) ---@type mapflag


---ConvertMapFlag(8192*4)
MAP_LOCK_RANDOM_SEED = ConvertMapFlag(8192*4) ---@type mapflag


---ConvertMapFlag(8192*8)
MAP_SHARED_ADVANCED_CONTROL = ConvertMapFlag(8192*8) ---@type mapflag


---ConvertMapFlag(8192*16)
MAP_RANDOM_HERO = ConvertMapFlag(8192*16) ---@type mapflag


---ConvertMapFlag(8192*32)
MAP_RANDOM_RACES = ConvertMapFlag(8192*32) ---@type mapflag


---ConvertMapFlag(8192*64)
MAP_RELOADED = ConvertMapFlag(8192*64) ---@type mapflag


---random among all slots
---ConvertPlacement(0)
MAP_PLACEMENT_RANDOM = ConvertPlacement(0) ---@type placement


---player 0 in start loc 0...
---ConvertPlacement(1)
MAP_PLACEMENT_FIXED = ConvertPlacement(1) ---@type placement


---whatever was specified by the script
---ConvertPlacement(2)
MAP_PLACEMENT_USE_MAP_SETTINGS = ConvertPlacement(2) ---@type placement


---random with allies next to each other
---ConvertPlacement(3)
MAP_PLACEMENT_TEAMS_TOGETHER = ConvertPlacement(3) ---@type placement


---ConvertStartLocPrio(0)
MAP_LOC_PRIO_LOW = ConvertStartLocPrio(0) ---@type startlocprio


---ConvertStartLocPrio(1)
MAP_LOC_PRIO_HIGH = ConvertStartLocPrio(1) ---@type startlocprio


---ConvertStartLocPrio(2)
MAP_LOC_PRIO_NOT = ConvertStartLocPrio(2) ---@type startlocprio


---ConvertMapDensity(0)
MAP_DENSITY_NONE = ConvertMapDensity(0) ---@type mapdensity


---ConvertMapDensity(1)
MAP_DENSITY_LIGHT = ConvertMapDensity(1) ---@type mapdensity


---ConvertMapDensity(2)
MAP_DENSITY_MEDIUM = ConvertMapDensity(2) ---@type mapdensity


---ConvertMapDensity(3)
MAP_DENSITY_HEAVY = ConvertMapDensity(3) ---@type mapdensity


---ConvertGameDifficulty(0)
MAP_DIFFICULTY_EASY = ConvertGameDifficulty(0) ---@type gamedifficulty


---ConvertGameDifficulty(1)
MAP_DIFFICULTY_NORMAL = ConvertGameDifficulty(1) ---@type gamedifficulty


---ConvertGameDifficulty(2)
MAP_DIFFICULTY_HARD = ConvertGameDifficulty(2) ---@type gamedifficulty


---ConvertGameDifficulty(3)
MAP_DIFFICULTY_INSANE = ConvertGameDifficulty(3) ---@type gamedifficulty


---ConvertGameSpeed(0)
MAP_SPEED_SLOWEST = ConvertGameSpeed(0) ---@type gamespeed


---ConvertGameSpeed(1)
MAP_SPEED_SLOW = ConvertGameSpeed(1) ---@type gamespeed


---ConvertGameSpeed(2)
MAP_SPEED_NORMAL = ConvertGameSpeed(2) ---@type gamespeed


---ConvertGameSpeed(3)
MAP_SPEED_FAST = ConvertGameSpeed(3) ---@type gamespeed


---ConvertGameSpeed(4)
MAP_SPEED_FASTEST = ConvertGameSpeed(4) ---@type gamespeed


---ConvertPlayerSlotState(0)
PLAYER_SLOT_STATE_EMPTY = ConvertPlayerSlotState(0) ---@type playerslotstate


---ConvertPlayerSlotState(1)
PLAYER_SLOT_STATE_PLAYING = ConvertPlayerSlotState(1) ---@type playerslotstate


---ConvertPlayerSlotState(2)
PLAYER_SLOT_STATE_LEFT = ConvertPlayerSlotState(2) ---@type playerslotstate


---ConvertVolumeGroup(0)
SOUND_VOLUMEGROUP_UNITMOVEMENT = ConvertVolumeGroup(0) ---@type volumegroup


---ConvertVolumeGroup(1)
SOUND_VOLUMEGROUP_UNITSOUNDS = ConvertVolumeGroup(1) ---@type volumegroup


---ConvertVolumeGroup(2)
SOUND_VOLUMEGROUP_COMBAT = ConvertVolumeGroup(2) ---@type volumegroup


---ConvertVolumeGroup(3)
SOUND_VOLUMEGROUP_SPELLS = ConvertVolumeGroup(3) ---@type volumegroup


---ConvertVolumeGroup(4)
SOUND_VOLUMEGROUP_UI = ConvertVolumeGroup(4) ---@type volumegroup


---ConvertVolumeGroup(5)
SOUND_VOLUMEGROUP_MUSIC = ConvertVolumeGroup(5) ---@type volumegroup


---ConvertVolumeGroup(6)
SOUND_VOLUMEGROUP_AMBIENTSOUNDS = ConvertVolumeGroup(6) ---@type volumegroup


---ConvertVolumeGroup(7)
SOUND_VOLUMEGROUP_FIRE = ConvertVolumeGroup(7) ---@type volumegroup


---ConvertIGameState(0)
GAME_STATE_DIVINE_INTERVENTION = ConvertIGameState(0) ---@type igamestate


---ConvertIGameState(1)
GAME_STATE_DISCONNECTED = ConvertIGameState(1) ---@type igamestate


---ConvertFGameState(2)
GAME_STATE_TIME_OF_DAY = ConvertFGameState(2) ---@type fgamestate


---ConvertPlayerState(0)
PLAYER_STATE_GAME_RESULT = ConvertPlayerState(0) ---@type playerstate


---ConvertPlayerState(1)
PLAYER_STATE_RESOURCE_GOLD = ConvertPlayerState(1) ---@type playerstate


---ConvertPlayerState(2)
PLAYER_STATE_RESOURCE_LUMBER = ConvertPlayerState(2) ---@type playerstate


---ConvertPlayerState(3)
PLAYER_STATE_RESOURCE_HERO_TOKENS = ConvertPlayerState(3) ---@type playerstate


---ConvertPlayerState(4)
PLAYER_STATE_RESOURCE_FOOD_CAP = ConvertPlayerState(4) ---@type playerstate


---ConvertPlayerState(5)
PLAYER_STATE_RESOURCE_FOOD_USED = ConvertPlayerState(5) ---@type playerstate


---ConvertPlayerState(6)
PLAYER_STATE_FOOD_CAP_CEILING = ConvertPlayerState(6) ---@type playerstate


---ConvertPlayerState(7)
PLAYER_STATE_GIVES_BOUNTY = ConvertPlayerState(7) ---@type playerstate


---ConvertPlayerState(8)
PLAYER_STATE_ALLIED_VICTORY = ConvertPlayerState(8) ---@type playerstate


---ConvertPlayerState(9)
PLAYER_STATE_PLACED = ConvertPlayerState(9) ---@type playerstate


---ConvertPlayerState(10)
PLAYER_STATE_OBSERVER_ON_DEATH = ConvertPlayerState(10) ---@type playerstate


---ConvertPlayerState(11)
PLAYER_STATE_OBSERVER = ConvertPlayerState(11) ---@type playerstate


---ConvertPlayerState(12)
PLAYER_STATE_UNFOLLOWABLE = ConvertPlayerState(12) ---@type playerstate


---ConvertPlayerState(13)
PLAYER_STATE_GOLD_UPKEEP_RATE = ConvertPlayerState(13) ---@type playerstate


---ConvertPlayerState(14)
PLAYER_STATE_LUMBER_UPKEEP_RATE = ConvertPlayerState(14) ---@type playerstate


---ConvertPlayerState(15)
PLAYER_STATE_GOLD_GATHERED = ConvertPlayerState(15) ---@type playerstate


---ConvertPlayerState(16)
PLAYER_STATE_LUMBER_GATHERED = ConvertPlayerState(16) ---@type playerstate


---ConvertPlayerState(25)
PLAYER_STATE_NO_CREEP_SLEEP = ConvertPlayerState(25) ---@type playerstate


---ConvertUnitState(0)
UNIT_STATE_LIFE = ConvertUnitState(0) ---@type unitstate


---ConvertUnitState(1)
UNIT_STATE_MAX_LIFE = ConvertUnitState(1) ---@type unitstate


---ConvertUnitState(2)
UNIT_STATE_MANA = ConvertUnitState(2) ---@type unitstate


---ConvertUnitState(3)
UNIT_STATE_MAX_MANA = ConvertUnitState(3) ---@type unitstate


---ConvertAIDifficulty(0)
AI_DIFFICULTY_NEWBIE = ConvertAIDifficulty(0) ---@type aidifficulty


---ConvertAIDifficulty(1)
AI_DIFFICULTY_NORMAL = ConvertAIDifficulty(1) ---@type aidifficulty


---ConvertAIDifficulty(2)
AI_DIFFICULTY_INSANE = ConvertAIDifficulty(2) ---@type aidifficulty


---ConvertPlayerScore(0)
PLAYER_SCORE_UNITS_TRAINED = ConvertPlayerScore(0) ---@type playerscore


---ConvertPlayerScore(1)
PLAYER_SCORE_UNITS_KILLED = ConvertPlayerScore(1) ---@type playerscore


---ConvertPlayerScore(2)
PLAYER_SCORE_STRUCT_BUILT = ConvertPlayerScore(2) ---@type playerscore


---ConvertPlayerScore(3)
PLAYER_SCORE_STRUCT_RAZED = ConvertPlayerScore(3) ---@type playerscore


---ConvertPlayerScore(4)
PLAYER_SCORE_TECH_PERCENT = ConvertPlayerScore(4) ---@type playerscore


---ConvertPlayerScore(5)
PLAYER_SCORE_FOOD_MAXPROD = ConvertPlayerScore(5) ---@type playerscore


---ConvertPlayerScore(6)
PLAYER_SCORE_FOOD_MAXUSED = ConvertPlayerScore(6) ---@type playerscore


---ConvertPlayerScore(7)
PLAYER_SCORE_HEROES_KILLED = ConvertPlayerScore(7) ---@type playerscore


---ConvertPlayerScore(8)
PLAYER_SCORE_ITEMS_GAINED = ConvertPlayerScore(8) ---@type playerscore


---ConvertPlayerScore(9)
PLAYER_SCORE_MERCS_HIRED = ConvertPlayerScore(9) ---@type playerscore


---ConvertPlayerScore(10)
PLAYER_SCORE_GOLD_MINED_TOTAL = ConvertPlayerScore(10) ---@type playerscore


---ConvertPlayerScore(11)
PLAYER_SCORE_GOLD_MINED_UPKEEP = ConvertPlayerScore(11) ---@type playerscore


---ConvertPlayerScore(12)
PLAYER_SCORE_GOLD_LOST_UPKEEP = ConvertPlayerScore(12) ---@type playerscore


---ConvertPlayerScore(13)
PLAYER_SCORE_GOLD_LOST_TAX = ConvertPlayerScore(13) ---@type playerscore


---ConvertPlayerScore(14)
PLAYER_SCORE_GOLD_GIVEN = ConvertPlayerScore(14) ---@type playerscore


---ConvertPlayerScore(15)
PLAYER_SCORE_GOLD_RECEIVED = ConvertPlayerScore(15) ---@type playerscore


---ConvertPlayerScore(16)
PLAYER_SCORE_LUMBER_TOTAL = ConvertPlayerScore(16) ---@type playerscore


---ConvertPlayerScore(17)
PLAYER_SCORE_LUMBER_LOST_UPKEEP = ConvertPlayerScore(17) ---@type playerscore


---ConvertPlayerScore(18)
PLAYER_SCORE_LUMBER_LOST_TAX = ConvertPlayerScore(18) ---@type playerscore


---ConvertPlayerScore(19)
PLAYER_SCORE_LUMBER_GIVEN = ConvertPlayerScore(19) ---@type playerscore


---ConvertPlayerScore(20)
PLAYER_SCORE_LUMBER_RECEIVED = ConvertPlayerScore(20) ---@type playerscore


---ConvertPlayerScore(21)
PLAYER_SCORE_UNIT_TOTAL = ConvertPlayerScore(21) ---@type playerscore


---ConvertPlayerScore(22)
PLAYER_SCORE_HERO_TOTAL = ConvertPlayerScore(22) ---@type playerscore


---ConvertPlayerScore(23)
PLAYER_SCORE_RESOURCE_TOTAL = ConvertPlayerScore(23) ---@type playerscore


---ConvertPlayerScore(24)
PLAYER_SCORE_TOTAL = ConvertPlayerScore(24) ---@type playerscore


---ConvertGameEvent(0)
EVENT_GAME_VICTORY = ConvertGameEvent(0) ---@type gameevent


---ConvertGameEvent(1)
EVENT_GAME_END_LEVEL = ConvertGameEvent(1) ---@type gameevent


---ConvertGameEvent(2)
EVENT_GAME_VARIABLE_LIMIT = ConvertGameEvent(2) ---@type gameevent


---ConvertGameEvent(3)
EVENT_GAME_STATE_LIMIT = ConvertGameEvent(3) ---@type gameevent


---ConvertGameEvent(4)
EVENT_GAME_TIMER_EXPIRED = ConvertGameEvent(4) ---@type gameevent


---ConvertGameEvent(5)
EVENT_GAME_ENTER_REGION = ConvertGameEvent(5) ---@type gameevent


---ConvertGameEvent(6)
EVENT_GAME_LEAVE_REGION = ConvertGameEvent(6) ---@type gameevent


---ConvertGameEvent(7)
EVENT_GAME_TRACKABLE_HIT = ConvertGameEvent(7) ---@type gameevent


---ConvertGameEvent(8)
EVENT_GAME_TRACKABLE_TRACK = ConvertGameEvent(8) ---@type gameevent


---ConvertGameEvent(9)
EVENT_GAME_SHOW_SKILL = ConvertGameEvent(9) ---@type gameevent


---ConvertGameEvent(10)
EVENT_GAME_BUILD_SUBMENU = ConvertGameEvent(10) ---@type gameevent


---ConvertPlayerEvent(11)
EVENT_PLAYER_STATE_LIMIT = ConvertPlayerEvent(11) ---@type playerevent


---ConvertPlayerEvent(12)
EVENT_PLAYER_ALLIANCE_CHANGED = ConvertPlayerEvent(12) ---@type playerevent


---ConvertPlayerEvent(13)
EVENT_PLAYER_DEFEAT = ConvertPlayerEvent(13) ---@type playerevent


---ConvertPlayerEvent(14)
EVENT_PLAYER_VICTORY = ConvertPlayerEvent(14) ---@type playerevent


---ConvertPlayerEvent(15)
EVENT_PLAYER_LEAVE = ConvertPlayerEvent(15) ---@type playerevent


---ConvertPlayerEvent(16)
EVENT_PLAYER_CHAT = ConvertPlayerEvent(16) ---@type playerevent


---ConvertPlayerEvent(17)
EVENT_PLAYER_END_CINEMATIC = ConvertPlayerEvent(17) ---@type playerevent


---ConvertPlayerUnitEvent(18)
EVENT_PLAYER_UNIT_ATTACKED = ConvertPlayerUnitEvent(18) ---@type playerunitevent


---ConvertPlayerUnitEvent(19)
EVENT_PLAYER_UNIT_RESCUED = ConvertPlayerUnitEvent(19) ---@type playerunitevent


---ConvertPlayerUnitEvent(20)
EVENT_PLAYER_UNIT_DEATH = ConvertPlayerUnitEvent(20) ---@type playerunitevent


---ConvertPlayerUnitEvent(21)
EVENT_PLAYER_UNIT_DECAY = ConvertPlayerUnitEvent(21) ---@type playerunitevent


---ConvertPlayerUnitEvent(22)
EVENT_PLAYER_UNIT_DETECTED = ConvertPlayerUnitEvent(22) ---@type playerunitevent


---ConvertPlayerUnitEvent(23)
EVENT_PLAYER_UNIT_HIDDEN = ConvertPlayerUnitEvent(23) ---@type playerunitevent


---ConvertPlayerUnitEvent(24)
EVENT_PLAYER_UNIT_SELECTED = ConvertPlayerUnitEvent(24) ---@type playerunitevent


---ConvertPlayerUnitEvent(25)
EVENT_PLAYER_UNIT_DESELECTED = ConvertPlayerUnitEvent(25) ---@type playerunitevent


---ConvertPlayerUnitEvent(26)
EVENT_PLAYER_UNIT_CONSTRUCT_START = ConvertPlayerUnitEvent(26) ---@type playerunitevent


---ConvertPlayerUnitEvent(27)
EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL = ConvertPlayerUnitEvent(27) ---@type playerunitevent


---ConvertPlayerUnitEvent(28)
EVENT_PLAYER_UNIT_CONSTRUCT_FINISH = ConvertPlayerUnitEvent(28) ---@type playerunitevent


---ConvertPlayerUnitEvent(29)
EVENT_PLAYER_UNIT_UPGRADE_START = ConvertPlayerUnitEvent(29) ---@type playerunitevent


---ConvertPlayerUnitEvent(30)
EVENT_PLAYER_UNIT_UPGRADE_CANCEL = ConvertPlayerUnitEvent(30) ---@type playerunitevent


---ConvertPlayerUnitEvent(31)
EVENT_PLAYER_UNIT_UPGRADE_FINISH = ConvertPlayerUnitEvent(31) ---@type playerunitevent


---ConvertPlayerUnitEvent(32)
EVENT_PLAYER_UNIT_TRAIN_START = ConvertPlayerUnitEvent(32) ---@type playerunitevent


---ConvertPlayerUnitEvent(33)
EVENT_PLAYER_UNIT_TRAIN_CANCEL = ConvertPlayerUnitEvent(33) ---@type playerunitevent


---ConvertPlayerUnitEvent(34)
EVENT_PLAYER_UNIT_TRAIN_FINISH = ConvertPlayerUnitEvent(34) ---@type playerunitevent


---ConvertPlayerUnitEvent(35)
EVENT_PLAYER_UNIT_RESEARCH_START = ConvertPlayerUnitEvent(35) ---@type playerunitevent


---ConvertPlayerUnitEvent(36)
EVENT_PLAYER_UNIT_RESEARCH_CANCEL = ConvertPlayerUnitEvent(36) ---@type playerunitevent


---ConvertPlayerUnitEvent(37)
EVENT_PLAYER_UNIT_RESEARCH_FINISH = ConvertPlayerUnitEvent(37) ---@type playerunitevent


---ConvertPlayerUnitEvent(38)
EVENT_PLAYER_UNIT_ISSUED_ORDER = ConvertPlayerUnitEvent(38) ---@type playerunitevent


---ConvertPlayerUnitEvent(39)
EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER = ConvertPlayerUnitEvent(39) ---@type playerunitevent


---ConvertPlayerUnitEvent(40)
EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER = ConvertPlayerUnitEvent(40) ---@type playerunitevent


---for compat
---ConvertPlayerUnitEvent(40)
EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER = ConvertPlayerUnitEvent(40) ---@type playerunitevent


---ConvertPlayerUnitEvent(41)
EVENT_PLAYER_HERO_LEVEL = ConvertPlayerUnitEvent(41) ---@type playerunitevent


---ConvertPlayerUnitEvent(42)
EVENT_PLAYER_HERO_SKILL = ConvertPlayerUnitEvent(42) ---@type playerunitevent


---ConvertPlayerUnitEvent(43)
EVENT_PLAYER_HERO_REVIVABLE = ConvertPlayerUnitEvent(43) ---@type playerunitevent


---ConvertPlayerUnitEvent(44)
EVENT_PLAYER_HERO_REVIVE_START = ConvertPlayerUnitEvent(44) ---@type playerunitevent


---ConvertPlayerUnitEvent(45)
EVENT_PLAYER_HERO_REVIVE_CANCEL = ConvertPlayerUnitEvent(45) ---@type playerunitevent


---ConvertPlayerUnitEvent(46)
EVENT_PLAYER_HERO_REVIVE_FINISH = ConvertPlayerUnitEvent(46) ---@type playerunitevent


---ConvertPlayerUnitEvent(47)
EVENT_PLAYER_UNIT_SUMMON = ConvertPlayerUnitEvent(47) ---@type playerunitevent


---ConvertPlayerUnitEvent(48)
EVENT_PLAYER_UNIT_DROP_ITEM = ConvertPlayerUnitEvent(48) ---@type playerunitevent


---ConvertPlayerUnitEvent(49)
EVENT_PLAYER_UNIT_PICKUP_ITEM = ConvertPlayerUnitEvent(49) ---@type playerunitevent


---ConvertPlayerUnitEvent(50)
EVENT_PLAYER_UNIT_USE_ITEM = ConvertPlayerUnitEvent(50) ---@type playerunitevent


---ConvertPlayerUnitEvent(51)
EVENT_PLAYER_UNIT_LOADED = ConvertPlayerUnitEvent(51) ---@type playerunitevent


---ConvertPlayerUnitEvent(308)
EVENT_PLAYER_UNIT_DAMAGED = ConvertPlayerUnitEvent(308) ---@type playerunitevent


---ConvertPlayerUnitEvent(315)
EVENT_PLAYER_UNIT_DAMAGING = ConvertPlayerUnitEvent(315) ---@type playerunitevent


---ConvertUnitEvent(52)
EVENT_UNIT_DAMAGED = ConvertUnitEvent(52) ---@type unitevent


---ConvertUnitEvent(314)
EVENT_UNIT_DAMAGING = ConvertUnitEvent(314) ---@type unitevent


---ConvertUnitEvent(53)
EVENT_UNIT_DEATH = ConvertUnitEvent(53) ---@type unitevent


---ConvertUnitEvent(54)
EVENT_UNIT_DECAY = ConvertUnitEvent(54) ---@type unitevent


---ConvertUnitEvent(55)
EVENT_UNIT_DETECTED = ConvertUnitEvent(55) ---@type unitevent


---ConvertUnitEvent(56)
EVENT_UNIT_HIDDEN = ConvertUnitEvent(56) ---@type unitevent


---ConvertUnitEvent(57)
EVENT_UNIT_SELECTED = ConvertUnitEvent(57) ---@type unitevent


---ConvertUnitEvent(58)
EVENT_UNIT_DESELECTED = ConvertUnitEvent(58) ---@type unitevent


---ConvertUnitEvent(59)
EVENT_UNIT_STATE_LIMIT = ConvertUnitEvent(59) ---@type unitevent


---ConvertUnitEvent(60)
EVENT_UNIT_ACQUIRED_TARGET = ConvertUnitEvent(60) ---@type unitevent


---ConvertUnitEvent(61)
EVENT_UNIT_TARGET_IN_RANGE = ConvertUnitEvent(61) ---@type unitevent


---ConvertUnitEvent(62)
EVENT_UNIT_ATTACKED = ConvertUnitEvent(62) ---@type unitevent


---ConvertUnitEvent(63)
EVENT_UNIT_RESCUED = ConvertUnitEvent(63) ---@type unitevent


---ConvertUnitEvent(64)
EVENT_UNIT_CONSTRUCT_CANCEL = ConvertUnitEvent(64) ---@type unitevent


---ConvertUnitEvent(65)
EVENT_UNIT_CONSTRUCT_FINISH = ConvertUnitEvent(65) ---@type unitevent


---ConvertUnitEvent(66)
EVENT_UNIT_UPGRADE_START = ConvertUnitEvent(66) ---@type unitevent


---ConvertUnitEvent(67)
EVENT_UNIT_UPGRADE_CANCEL = ConvertUnitEvent(67) ---@type unitevent


---ConvertUnitEvent(68)
EVENT_UNIT_UPGRADE_FINISH = ConvertUnitEvent(68) ---@type unitevent


---ConvertUnitEvent(69)
EVENT_UNIT_TRAIN_START = ConvertUnitEvent(69) ---@type unitevent


---ConvertUnitEvent(70)
EVENT_UNIT_TRAIN_CANCEL = ConvertUnitEvent(70) ---@type unitevent


---ConvertUnitEvent(71)
EVENT_UNIT_TRAIN_FINISH = ConvertUnitEvent(71) ---@type unitevent


---ConvertUnitEvent(72)
EVENT_UNIT_RESEARCH_START = ConvertUnitEvent(72) ---@type unitevent


---ConvertUnitEvent(73)
EVENT_UNIT_RESEARCH_CANCEL = ConvertUnitEvent(73) ---@type unitevent


---ConvertUnitEvent(74)
EVENT_UNIT_RESEARCH_FINISH = ConvertUnitEvent(74) ---@type unitevent


---ConvertUnitEvent(75)
EVENT_UNIT_ISSUED_ORDER = ConvertUnitEvent(75) ---@type unitevent


---ConvertUnitEvent(76)
EVENT_UNIT_ISSUED_POINT_ORDER = ConvertUnitEvent(76) ---@type unitevent


---ConvertUnitEvent(77)
EVENT_UNIT_ISSUED_TARGET_ORDER = ConvertUnitEvent(77) ---@type unitevent


---ConvertUnitEvent(78)
EVENT_UNIT_HERO_LEVEL = ConvertUnitEvent(78) ---@type unitevent


---ConvertUnitEvent(79)
EVENT_UNIT_HERO_SKILL = ConvertUnitEvent(79) ---@type unitevent


---ConvertUnitEvent(80)
EVENT_UNIT_HERO_REVIVABLE = ConvertUnitEvent(80) ---@type unitevent


---ConvertUnitEvent(81)
EVENT_UNIT_HERO_REVIVE_START = ConvertUnitEvent(81) ---@type unitevent


---ConvertUnitEvent(82)
EVENT_UNIT_HERO_REVIVE_CANCEL = ConvertUnitEvent(82) ---@type unitevent


---ConvertUnitEvent(83)
EVENT_UNIT_HERO_REVIVE_FINISH = ConvertUnitEvent(83) ---@type unitevent


---ConvertUnitEvent(84)
EVENT_UNIT_SUMMON = ConvertUnitEvent(84) ---@type unitevent


---ConvertUnitEvent(85)
EVENT_UNIT_DROP_ITEM = ConvertUnitEvent(85) ---@type unitevent


---ConvertUnitEvent(86)
EVENT_UNIT_PICKUP_ITEM = ConvertUnitEvent(86) ---@type unitevent


---ConvertUnitEvent(87)
EVENT_UNIT_USE_ITEM = ConvertUnitEvent(87) ---@type unitevent


---ConvertUnitEvent(88)
EVENT_UNIT_LOADED = ConvertUnitEvent(88) ---@type unitevent


---ConvertWidgetEvent(89)
EVENT_WIDGET_DEATH = ConvertWidgetEvent(89) ---@type widgetevent


---ConvertDialogEvent(90)
EVENT_DIALOG_BUTTON_CLICK = ConvertDialogEvent(90) ---@type dialogevent


---ConvertDialogEvent(91)
EVENT_DIALOG_CLICK = ConvertDialogEvent(91) ---@type dialogevent


---ConvertGameEvent(256)
EVENT_GAME_LOADED = ConvertGameEvent(256) ---@type gameevent


---ConvertGameEvent(257)
EVENT_GAME_TOURNAMENT_FINISH_SOON = ConvertGameEvent(257) ---@type gameevent


---ConvertGameEvent(258)
EVENT_GAME_TOURNAMENT_FINISH_NOW = ConvertGameEvent(258) ---@type gameevent


---ConvertGameEvent(259)
EVENT_GAME_SAVE = ConvertGameEvent(259) ---@type gameevent


---ConvertGameEvent(310)
EVENT_GAME_CUSTOM_UI_FRAME = ConvertGameEvent(310) ---@type gameevent


---ConvertPlayerEvent(261)
EVENT_PLAYER_ARROW_LEFT_DOWN = ConvertPlayerEvent(261) ---@type playerevent


---ConvertPlayerEvent(262)
EVENT_PLAYER_ARROW_LEFT_UP = ConvertPlayerEvent(262) ---@type playerevent


---ConvertPlayerEvent(263)
EVENT_PLAYER_ARROW_RIGHT_DOWN = ConvertPlayerEvent(263) ---@type playerevent


---ConvertPlayerEvent(264)
EVENT_PLAYER_ARROW_RIGHT_UP = ConvertPlayerEvent(264) ---@type playerevent


---ConvertPlayerEvent(265)
EVENT_PLAYER_ARROW_DOWN_DOWN = ConvertPlayerEvent(265) ---@type playerevent


---ConvertPlayerEvent(266)
EVENT_PLAYER_ARROW_DOWN_UP = ConvertPlayerEvent(266) ---@type playerevent


---ConvertPlayerEvent(267)
EVENT_PLAYER_ARROW_UP_DOWN = ConvertPlayerEvent(267) ---@type playerevent


---ConvertPlayerEvent(268)
EVENT_PLAYER_ARROW_UP_UP = ConvertPlayerEvent(268) ---@type playerevent


---ConvertPlayerEvent(305)
EVENT_PLAYER_MOUSE_DOWN = ConvertPlayerEvent(305) ---@type playerevent


---ConvertPlayerEvent(306)
EVENT_PLAYER_MOUSE_UP = ConvertPlayerEvent(306) ---@type playerevent


---ConvertPlayerEvent(307)
EVENT_PLAYER_MOUSE_MOVE = ConvertPlayerEvent(307) ---@type playerevent


---ConvertPlayerEvent(309)
EVENT_PLAYER_SYNC_DATA = ConvertPlayerEvent(309) ---@type playerevent


---ConvertPlayerEvent(311)
EVENT_PLAYER_KEY = ConvertPlayerEvent(311) ---@type playerevent


---ConvertPlayerEvent(312)
EVENT_PLAYER_KEY_DOWN = ConvertPlayerEvent(312) ---@type playerevent


---ConvertPlayerEvent(313)
EVENT_PLAYER_KEY_UP = ConvertPlayerEvent(313) ---@type playerevent


---ConvertPlayerUnitEvent(269)
EVENT_PLAYER_UNIT_SELL = ConvertPlayerUnitEvent(269) ---@type playerunitevent


---ConvertPlayerUnitEvent(270)
EVENT_PLAYER_UNIT_CHANGE_OWNER = ConvertPlayerUnitEvent(270) ---@type playerunitevent


---ConvertPlayerUnitEvent(271)
EVENT_PLAYER_UNIT_SELL_ITEM = ConvertPlayerUnitEvent(271) ---@type playerunitevent


---ConvertPlayerUnitEvent(272)
EVENT_PLAYER_UNIT_SPELL_CHANNEL = ConvertPlayerUnitEvent(272) ---@type playerunitevent


---ConvertPlayerUnitEvent(273)
EVENT_PLAYER_UNIT_SPELL_CAST = ConvertPlayerUnitEvent(273) ---@type playerunitevent


---ConvertPlayerUnitEvent(274)
EVENT_PLAYER_UNIT_SPELL_EFFECT = ConvertPlayerUnitEvent(274) ---@type playerunitevent


---ConvertPlayerUnitEvent(275)
EVENT_PLAYER_UNIT_SPELL_FINISH = ConvertPlayerUnitEvent(275) ---@type playerunitevent


---ConvertPlayerUnitEvent(276)
EVENT_PLAYER_UNIT_SPELL_ENDCAST = ConvertPlayerUnitEvent(276) ---@type playerunitevent


---ConvertPlayerUnitEvent(277)
EVENT_PLAYER_UNIT_PAWN_ITEM = ConvertPlayerUnitEvent(277) ---@type playerunitevent


---ConvertUnitEvent(286)
EVENT_UNIT_SELL = ConvertUnitEvent(286) ---@type unitevent


---ConvertUnitEvent(287)
EVENT_UNIT_CHANGE_OWNER = ConvertUnitEvent(287) ---@type unitevent


---ConvertUnitEvent(288)
EVENT_UNIT_SELL_ITEM = ConvertUnitEvent(288) ---@type unitevent


---ConvertUnitEvent(289)
EVENT_UNIT_SPELL_CHANNEL = ConvertUnitEvent(289) ---@type unitevent


---ConvertUnitEvent(290)
EVENT_UNIT_SPELL_CAST = ConvertUnitEvent(290) ---@type unitevent


---ConvertUnitEvent(291)
EVENT_UNIT_SPELL_EFFECT = ConvertUnitEvent(291) ---@type unitevent


---ConvertUnitEvent(292)
EVENT_UNIT_SPELL_FINISH = ConvertUnitEvent(292) ---@type unitevent


---ConvertUnitEvent(293)
EVENT_UNIT_SPELL_ENDCAST = ConvertUnitEvent(293) ---@type unitevent


---ConvertUnitEvent(294)
EVENT_UNIT_PAWN_ITEM = ConvertUnitEvent(294) ---@type unitevent


---ConvertLimitOp(0)
LESS_THAN = ConvertLimitOp(0) ---@type limitop


---ConvertLimitOp(1)
LESS_THAN_OR_EQUAL = ConvertLimitOp(1) ---@type limitop


---ConvertLimitOp(2)
EQUAL = ConvertLimitOp(2) ---@type limitop


---ConvertLimitOp(3)
GREATER_THAN_OR_EQUAL = ConvertLimitOp(3) ---@type limitop


---ConvertLimitOp(4)
GREATER_THAN = ConvertLimitOp(4) ---@type limitop


---ConvertLimitOp(5)
NOT_EQUAL = ConvertLimitOp(5) ---@type limitop


---ConvertUnitType(0)
UNIT_TYPE_HERO = ConvertUnitType(0) ---@type unittype


---ConvertUnitType(1)
UNIT_TYPE_DEAD = ConvertUnitType(1) ---@type unittype


---ConvertUnitType(2)
UNIT_TYPE_STRUCTURE = ConvertUnitType(2) ---@type unittype


---ConvertUnitType(3)
UNIT_TYPE_FLYING = ConvertUnitType(3) ---@type unittype


---ConvertUnitType(4)
UNIT_TYPE_GROUND = ConvertUnitType(4) ---@type unittype


---ConvertUnitType(5)
UNIT_TYPE_ATTACKS_FLYING = ConvertUnitType(5) ---@type unittype


---ConvertUnitType(6)
UNIT_TYPE_ATTACKS_GROUND = ConvertUnitType(6) ---@type unittype


---ConvertUnitType(7)
UNIT_TYPE_MELEE_ATTACKER = ConvertUnitType(7) ---@type unittype


---ConvertUnitType(8)
UNIT_TYPE_RANGED_ATTACKER = ConvertUnitType(8) ---@type unittype


---ConvertUnitType(9)
UNIT_TYPE_GIANT = ConvertUnitType(9) ---@type unittype


---ConvertUnitType(10)
UNIT_TYPE_SUMMONED = ConvertUnitType(10) ---@type unittype


---ConvertUnitType(11)
UNIT_TYPE_STUNNED = ConvertUnitType(11) ---@type unittype


---ConvertUnitType(12)
UNIT_TYPE_PLAGUED = ConvertUnitType(12) ---@type unittype


---ConvertUnitType(13)
UNIT_TYPE_SNARED = ConvertUnitType(13) ---@type unittype


---ConvertUnitType(14)
UNIT_TYPE_UNDEAD = ConvertUnitType(14) ---@type unittype


---ConvertUnitType(15)
UNIT_TYPE_MECHANICAL = ConvertUnitType(15) ---@type unittype


---ConvertUnitType(16)
UNIT_TYPE_PEON = ConvertUnitType(16) ---@type unittype


---ConvertUnitType(17)
UNIT_TYPE_SAPPER = ConvertUnitType(17) ---@type unittype


---ConvertUnitType(18)
UNIT_TYPE_TOWNHALL = ConvertUnitType(18) ---@type unittype


---ConvertUnitType(19)
UNIT_TYPE_ANCIENT = ConvertUnitType(19) ---@type unittype


---ConvertUnitType(20)
UNIT_TYPE_TAUREN = ConvertUnitType(20) ---@type unittype


---ConvertUnitType(21)
UNIT_TYPE_POISONED = ConvertUnitType(21) ---@type unittype


---ConvertUnitType(22)
UNIT_TYPE_POLYMORPHED = ConvertUnitType(22) ---@type unittype


---ConvertUnitType(23)
UNIT_TYPE_SLEEPING = ConvertUnitType(23) ---@type unittype


---ConvertUnitType(24)
UNIT_TYPE_RESISTANT = ConvertUnitType(24) ---@type unittype


---ConvertUnitType(25)
UNIT_TYPE_ETHEREAL = ConvertUnitType(25) ---@type unittype


---ConvertUnitType(26)
UNIT_TYPE_MAGIC_IMMUNE = ConvertUnitType(26) ---@type unittype


---ConvertItemType(0)
ITEM_TYPE_PERMANENT = ConvertItemType(0) ---@type itemtype


---ConvertItemType(1)
ITEM_TYPE_CHARGED = ConvertItemType(1) ---@type itemtype


---ConvertItemType(2)
ITEM_TYPE_POWERUP = ConvertItemType(2) ---@type itemtype


---ConvertItemType(3)
ITEM_TYPE_ARTIFACT = ConvertItemType(3) ---@type itemtype


---ConvertItemType(4)
ITEM_TYPE_PURCHASABLE = ConvertItemType(4) ---@type itemtype


---ConvertItemType(5)
ITEM_TYPE_CAMPAIGN = ConvertItemType(5) ---@type itemtype


---ConvertItemType(6)
ITEM_TYPE_MISCELLANEOUS = ConvertItemType(6) ---@type itemtype


---ConvertItemType(7)
ITEM_TYPE_UNKNOWN = ConvertItemType(7) ---@type itemtype


---ConvertItemType(8)
ITEM_TYPE_ANY = ConvertItemType(8) ---@type itemtype


---ConvertItemType(2)
ITEM_TYPE_TOME = ConvertItemType(2) ---@type itemtype


---ConvertCameraField(0)
CAMERA_FIELD_TARGET_DISTANCE = ConvertCameraField(0) ---@type camerafield


---ConvertCameraField(1)
CAMERA_FIELD_FARZ = ConvertCameraField(1) ---@type camerafield


---ConvertCameraField(2)
CAMERA_FIELD_ANGLE_OF_ATTACK = ConvertCameraField(2) ---@type camerafield


---ConvertCameraField(3)
CAMERA_FIELD_FIELD_OF_VIEW = ConvertCameraField(3) ---@type camerafield


---ConvertCameraField(4)
CAMERA_FIELD_ROLL = ConvertCameraField(4) ---@type camerafield


---ConvertCameraField(5)
CAMERA_FIELD_ROTATION = ConvertCameraField(5) ---@type camerafield


---ConvertCameraField(6)
CAMERA_FIELD_ZOFFSET = ConvertCameraField(6) ---@type camerafield


---ConvertCameraField(7)
CAMERA_FIELD_NEARZ = ConvertCameraField(7) ---@type camerafield


---ConvertCameraField(8)
CAMERA_FIELD_LOCAL_PITCH = ConvertCameraField(8) ---@type camerafield


---ConvertCameraField(9)
CAMERA_FIELD_LOCAL_YAW = ConvertCameraField(9) ---@type camerafield


---ConvertCameraField(10)
CAMERA_FIELD_LOCAL_ROLL = ConvertCameraField(10) ---@type camerafield


---ConvertBlendMode(0)
BLEND_MODE_NONE = ConvertBlendMode(0) ---@type blendmode


---ConvertBlendMode(0)
BLEND_MODE_DONT_CARE = ConvertBlendMode(0) ---@type blendmode


---ConvertBlendMode(1)
BLEND_MODE_KEYALPHA = ConvertBlendMode(1) ---@type blendmode


---ConvertBlendMode(2)
BLEND_MODE_BLEND = ConvertBlendMode(2) ---@type blendmode


---ConvertBlendMode(3)
BLEND_MODE_ADDITIVE = ConvertBlendMode(3) ---@type blendmode


---ConvertBlendMode(4)
BLEND_MODE_MODULATE = ConvertBlendMode(4) ---@type blendmode


---ConvertBlendMode(5)
BLEND_MODE_MODULATE_2X = ConvertBlendMode(5) ---@type blendmode


---ConvertRarityControl(0)
RARITY_FREQUENT = ConvertRarityControl(0) ---@type raritycontrol


---ConvertRarityControl(1)
RARITY_RARE = ConvertRarityControl(1) ---@type raritycontrol


---ConvertTexMapFlags(0)
TEXMAP_FLAG_NONE = ConvertTexMapFlags(0) ---@type texmapflags


---ConvertTexMapFlags(1)
TEXMAP_FLAG_WRAP_U = ConvertTexMapFlags(1) ---@type texmapflags


---ConvertTexMapFlags(2)
TEXMAP_FLAG_WRAP_V = ConvertTexMapFlags(2) ---@type texmapflags


---ConvertTexMapFlags(3)
TEXMAP_FLAG_WRAP_UV = ConvertTexMapFlags(3) ---@type texmapflags


---ConvertFogState(1)
FOG_OF_WAR_MASKED = ConvertFogState(1) ---@type fogstate


---ConvertFogState(2)
FOG_OF_WAR_FOGGED = ConvertFogState(2) ---@type fogstate


---ConvertFogState(4)
FOG_OF_WAR_VISIBLE = ConvertFogState(4) ---@type fogstate


---0
CAMERA_MARGIN_LEFT = 0 ---@type integer


---1
CAMERA_MARGIN_RIGHT = 1 ---@type integer


---2
CAMERA_MARGIN_TOP = 2 ---@type integer


---3
CAMERA_MARGIN_BOTTOM = 3 ---@type integer


---ConvertEffectType(0)
EFFECT_TYPE_EFFECT = ConvertEffectType(0) ---@type effecttype


---ConvertEffectType(1)
EFFECT_TYPE_TARGET = ConvertEffectType(1) ---@type effecttype


---ConvertEffectType(2)
EFFECT_TYPE_CASTER = ConvertEffectType(2) ---@type effecttype


---ConvertEffectType(3)
EFFECT_TYPE_SPECIAL = ConvertEffectType(3) ---@type effecttype


---ConvertEffectType(4)
EFFECT_TYPE_AREA_EFFECT = ConvertEffectType(4) ---@type effecttype


---ConvertEffectType(5)
EFFECT_TYPE_MISSILE = ConvertEffectType(5) ---@type effecttype


---ConvertEffectType(6)
EFFECT_TYPE_LIGHTNING = ConvertEffectType(6) ---@type effecttype


---ConvertSoundType(0)
SOUND_TYPE_EFFECT = ConvertSoundType(0) ---@type soundtype


---ConvertSoundType(1)
SOUND_TYPE_EFFECT_LOOPED = ConvertSoundType(1) ---@type soundtype


---ConvertOriginFrameType(0)
ORIGIN_FRAME_GAME_UI = ConvertOriginFrameType(0) ---@type originframetype


---ConvertOriginFrameType(1)
ORIGIN_FRAME_COMMAND_BUTTON = ConvertOriginFrameType(1) ---@type originframetype


---ConvertOriginFrameType(2)
ORIGIN_FRAME_HERO_BAR = ConvertOriginFrameType(2) ---@type originframetype


---ConvertOriginFrameType(3)
ORIGIN_FRAME_HERO_BUTTON = ConvertOriginFrameType(3) ---@type originframetype


---ConvertOriginFrameType(4)
ORIGIN_FRAME_HERO_HP_BAR = ConvertOriginFrameType(4) ---@type originframetype


---ConvertOriginFrameType(5)
ORIGIN_FRAME_HERO_MANA_BAR = ConvertOriginFrameType(5) ---@type originframetype


---ConvertOriginFrameType(6)
ORIGIN_FRAME_HERO_BUTTON_INDICATOR = ConvertOriginFrameType(6) ---@type originframetype


---ConvertOriginFrameType(7)
ORIGIN_FRAME_ITEM_BUTTON = ConvertOriginFrameType(7) ---@type originframetype


---ConvertOriginFrameType(8)
ORIGIN_FRAME_MINIMAP = ConvertOriginFrameType(8) ---@type originframetype


---ConvertOriginFrameType(9)
ORIGIN_FRAME_MINIMAP_BUTTON = ConvertOriginFrameType(9) ---@type originframetype


---ConvertOriginFrameType(10)
ORIGIN_FRAME_SYSTEM_BUTTON = ConvertOriginFrameType(10) ---@type originframetype


---ConvertOriginFrameType(11)
ORIGIN_FRAME_TOOLTIP = ConvertOriginFrameType(11) ---@type originframetype


---ConvertOriginFrameType(12)
ORIGIN_FRAME_UBERTOOLTIP = ConvertOriginFrameType(12) ---@type originframetype


---ConvertOriginFrameType(13)
ORIGIN_FRAME_CHAT_MSG = ConvertOriginFrameType(13) ---@type originframetype


---ConvertOriginFrameType(14)
ORIGIN_FRAME_UNIT_MSG = ConvertOriginFrameType(14) ---@type originframetype


---ConvertOriginFrameType(15)
ORIGIN_FRAME_TOP_MSG = ConvertOriginFrameType(15) ---@type originframetype


---ConvertOriginFrameType(16)
ORIGIN_FRAME_PORTRAIT = ConvertOriginFrameType(16) ---@type originframetype


---ConvertOriginFrameType(17)
ORIGIN_FRAME_WORLD_FRAME = ConvertOriginFrameType(17) ---@type originframetype


---ConvertFramePointType(0)
FRAMEPOINT_TOPLEFT = ConvertFramePointType(0) ---@type framepointtype


---ConvertFramePointType(1)
FRAMEPOINT_TOP = ConvertFramePointType(1) ---@type framepointtype


---ConvertFramePointType(2)
FRAMEPOINT_TOPRIGHT = ConvertFramePointType(2) ---@type framepointtype


---ConvertFramePointType(3)
FRAMEPOINT_LEFT = ConvertFramePointType(3) ---@type framepointtype


---ConvertFramePointType(4)
FRAMEPOINT_CENTER = ConvertFramePointType(4) ---@type framepointtype


---ConvertFramePointType(5)
FRAMEPOINT_RIGHT = ConvertFramePointType(5) ---@type framepointtype


---ConvertFramePointType(6)
FRAMEPOINT_BOTTOMLEFT = ConvertFramePointType(6) ---@type framepointtype


---ConvertFramePointType(7)
FRAMEPOINT_BOTTOM = ConvertFramePointType(7) ---@type framepointtype


---ConvertFramePointType(8)
FRAMEPOINT_BOTTOMRIGHT = ConvertFramePointType(8) ---@type framepointtype


---ConvertTextAlignType(0)
TEXT_JUSTIFY_TOP = ConvertTextAlignType(0) ---@type textaligntype


---ConvertTextAlignType(1)
TEXT_JUSTIFY_MIDDLE = ConvertTextAlignType(1) ---@type textaligntype


---ConvertTextAlignType(2)
TEXT_JUSTIFY_BOTTOM = ConvertTextAlignType(2) ---@type textaligntype


---ConvertTextAlignType(3)
TEXT_JUSTIFY_LEFT = ConvertTextAlignType(3) ---@type textaligntype


---ConvertTextAlignType(4)
TEXT_JUSTIFY_CENTER = ConvertTextAlignType(4) ---@type textaligntype


---ConvertTextAlignType(5)
TEXT_JUSTIFY_RIGHT = ConvertTextAlignType(5) ---@type textaligntype


---ConvertFrameEventType(1)
FRAMEEVENT_CONTROL_CLICK = ConvertFrameEventType(1) ---@type frameeventtype


---ConvertFrameEventType(2)
FRAMEEVENT_MOUSE_ENTER = ConvertFrameEventType(2) ---@type frameeventtype


---ConvertFrameEventType(3)
FRAMEEVENT_MOUSE_LEAVE = ConvertFrameEventType(3) ---@type frameeventtype


---ConvertFrameEventType(4)
FRAMEEVENT_MOUSE_UP = ConvertFrameEventType(4) ---@type frameeventtype


---ConvertFrameEventType(5)
FRAMEEVENT_MOUSE_DOWN = ConvertFrameEventType(5) ---@type frameeventtype


---ConvertFrameEventType(6)
FRAMEEVENT_MOUSE_WHEEL = ConvertFrameEventType(6) ---@type frameeventtype


---ConvertFrameEventType(7)
FRAMEEVENT_CHECKBOX_CHECKED = ConvertFrameEventType(7) ---@type frameeventtype


---ConvertFrameEventType(8)
FRAMEEVENT_CHECKBOX_UNCHECKED = ConvertFrameEventType(8) ---@type frameeventtype


---ConvertFrameEventType(9)
FRAMEEVENT_EDITBOX_TEXT_CHANGED = ConvertFrameEventType(9) ---@type frameeventtype


---ConvertFrameEventType(10)
FRAMEEVENT_POPUPMENU_ITEM_CHANGED = ConvertFrameEventType(10) ---@type frameeventtype


---ConvertFrameEventType(11)
FRAMEEVENT_MOUSE_DOUBLECLICK = ConvertFrameEventType(11) ---@type frameeventtype


---ConvertFrameEventType(12)
FRAMEEVENT_SPRITE_ANIM_UPDATE = ConvertFrameEventType(12) ---@type frameeventtype


---ConvertFrameEventType(13)
FRAMEEVENT_SLIDER_VALUE_CHANGED = ConvertFrameEventType(13) ---@type frameeventtype


---ConvertFrameEventType(14)
FRAMEEVENT_DIALOG_CANCEL = ConvertFrameEventType(14) ---@type frameeventtype


---ConvertFrameEventType(15)
FRAMEEVENT_DIALOG_ACCEPT = ConvertFrameEventType(15) ---@type frameeventtype


---ConvertFrameEventType(16)
FRAMEEVENT_EDITBOX_ENTER = ConvertFrameEventType(16) ---@type frameeventtype


---ConvertOsKeyType($08)
OSKEY_BACKSPACE = ConvertOsKeyType("$08") ---@type oskeytype


---ConvertOsKeyType($09)
OSKEY_TAB = ConvertOsKeyType("$09") ---@type oskeytype


---ConvertOsKeyType($0C)
OSKEY_CLEAR = ConvertOsKeyType("$0C") ---@type oskeytype


---ConvertOsKeyType($0D)
OSKEY_RETURN = ConvertOsKeyType("$0D") ---@type oskeytype


---ConvertOsKeyType($10)
OSKEY_SHIFT = ConvertOsKeyType("$10") ---@type oskeytype


---ConvertOsKeyType($11)
OSKEY_CONTROL = ConvertOsKeyType("$11") ---@type oskeytype


---ConvertOsKeyType($12)
OSKEY_ALT = ConvertOsKeyType("$12") ---@type oskeytype


---ConvertOsKeyType($13)
OSKEY_PAUSE = ConvertOsKeyType("$13") ---@type oskeytype


---ConvertOsKeyType($14)
OSKEY_CAPSLOCK = ConvertOsKeyType("$14") ---@type oskeytype


---ConvertOsKeyType($15)
OSKEY_KANA = ConvertOsKeyType("$15") ---@type oskeytype


---ConvertOsKeyType($15)
OSKEY_HANGUL = ConvertOsKeyType("$15") ---@type oskeytype


---ConvertOsKeyType($17)
OSKEY_JUNJA = ConvertOsKeyType("$17") ---@type oskeytype


---ConvertOsKeyType($18)
OSKEY_FINAL = ConvertOsKeyType("$18") ---@type oskeytype


---ConvertOsKeyType($19)
OSKEY_HANJA = ConvertOsKeyType("$19") ---@type oskeytype


---ConvertOsKeyType($19)
OSKEY_KANJI = ConvertOsKeyType("$19") ---@type oskeytype


---ConvertOsKeyType($1B)
OSKEY_ESCAPE = ConvertOsKeyType("$1B") ---@type oskeytype


---ConvertOsKeyType($1C)
OSKEY_CONVERT = ConvertOsKeyType("$1C") ---@type oskeytype


---ConvertOsKeyType($1D)
OSKEY_NONCONVERT = ConvertOsKeyType("$1D") ---@type oskeytype


---ConvertOsKeyType($1E)
OSKEY_ACCEPT = ConvertOsKeyType("$1E") ---@type oskeytype


---ConvertOsKeyType($1F)
OSKEY_MODECHANGE = ConvertOsKeyType("$1F") ---@type oskeytype


---ConvertOsKeyType($20)
OSKEY_SPACE = ConvertOsKeyType("$20") ---@type oskeytype


---ConvertOsKeyType($21)
OSKEY_PAGEUP = ConvertOsKeyType("$21") ---@type oskeytype


---ConvertOsKeyType($22)
OSKEY_PAGEDOWN = ConvertOsKeyType("$22") ---@type oskeytype


---ConvertOsKeyType($23)
OSKEY_END = ConvertOsKeyType("$23") ---@type oskeytype


---ConvertOsKeyType($24)
OSKEY_HOME = ConvertOsKeyType("$24") ---@type oskeytype


---ConvertOsKeyType($25)
OSKEY_LEFT = ConvertOsKeyType("$25") ---@type oskeytype


---ConvertOsKeyType($26)
OSKEY_UP = ConvertOsKeyType("$26") ---@type oskeytype


---ConvertOsKeyType($27)
OSKEY_RIGHT = ConvertOsKeyType("$27") ---@type oskeytype


---ConvertOsKeyType($28)
OSKEY_DOWN = ConvertOsKeyType("$28") ---@type oskeytype


---ConvertOsKeyType($29)
OSKEY_SELECT = ConvertOsKeyType("$29") ---@type oskeytype


---ConvertOsKeyType($2A)
OSKEY_PRINT = ConvertOsKeyType("$2A") ---@type oskeytype


---ConvertOsKeyType($2B)
OSKEY_EXECUTE = ConvertOsKeyType("$2B") ---@type oskeytype


---ConvertOsKeyType($2C)
OSKEY_PRINTSCREEN = ConvertOsKeyType("$2C") ---@type oskeytype


---ConvertOsKeyType($2D)
OSKEY_INSERT = ConvertOsKeyType("$2D") ---@type oskeytype


---ConvertOsKeyType($2E)
OSKEY_DELETE = ConvertOsKeyType("$2E") ---@type oskeytype


---ConvertOsKeyType($2F)
OSKEY_HELP = ConvertOsKeyType("$2F") ---@type oskeytype


---ConvertOsKeyType($30)
OSKEY_0 = ConvertOsKeyType("$30") ---@type oskeytype


---ConvertOsKeyType($31)
OSKEY_1 = ConvertOsKeyType("$31") ---@type oskeytype


---ConvertOsKeyType($32)
OSKEY_2 = ConvertOsKeyType("$32") ---@type oskeytype


---ConvertOsKeyType($33)
OSKEY_3 = ConvertOsKeyType("$33") ---@type oskeytype


---ConvertOsKeyType($34)
OSKEY_4 = ConvertOsKeyType("$34") ---@type oskeytype


---ConvertOsKeyType($35)
OSKEY_5 = ConvertOsKeyType("$35") ---@type oskeytype


---ConvertOsKeyType($36)
OSKEY_6 = ConvertOsKeyType("$36") ---@type oskeytype


---ConvertOsKeyType($37)
OSKEY_7 = ConvertOsKeyType("$37") ---@type oskeytype


---ConvertOsKeyType($38)
OSKEY_8 = ConvertOsKeyType("$38") ---@type oskeytype


---ConvertOsKeyType($39)
OSKEY_9 = ConvertOsKeyType("$39") ---@type oskeytype


---ConvertOsKeyType($41)
OSKEY_A = ConvertOsKeyType("$41") ---@type oskeytype


---ConvertOsKeyType($42)
OSKEY_B = ConvertOsKeyType("$42") ---@type oskeytype


---ConvertOsKeyType($43)
OSKEY_C = ConvertOsKeyType("$43") ---@type oskeytype


---ConvertOsKeyType($44)
OSKEY_D = ConvertOsKeyType("$44") ---@type oskeytype


---ConvertOsKeyType($45)
OSKEY_E = ConvertOsKeyType("$45") ---@type oskeytype


---ConvertOsKeyType($46)
OSKEY_F = ConvertOsKeyType("$46") ---@type oskeytype


---ConvertOsKeyType($47)
OSKEY_G = ConvertOsKeyType("$47") ---@type oskeytype


---ConvertOsKeyType($48)
OSKEY_H = ConvertOsKeyType("$48") ---@type oskeytype


---ConvertOsKeyType($49)
OSKEY_I = ConvertOsKeyType("$49") ---@type oskeytype


---ConvertOsKeyType($4A)
OSKEY_J = ConvertOsKeyType("$4A") ---@type oskeytype


---ConvertOsKeyType($4B)
OSKEY_K = ConvertOsKeyType("$4B") ---@type oskeytype


---ConvertOsKeyType($4C)
OSKEY_L = ConvertOsKeyType("$4C") ---@type oskeytype


---ConvertOsKeyType($4D)
OSKEY_M = ConvertOsKeyType("$4D") ---@type oskeytype


---ConvertOsKeyType($4E)
OSKEY_N = ConvertOsKeyType("$4E") ---@type oskeytype


---ConvertOsKeyType($4F)
OSKEY_O = ConvertOsKeyType("$4F") ---@type oskeytype


---ConvertOsKeyType($50)
OSKEY_P = ConvertOsKeyType("$50") ---@type oskeytype


---ConvertOsKeyType($51)
OSKEY_Q = ConvertOsKeyType("$51") ---@type oskeytype


---ConvertOsKeyType($52)
OSKEY_R = ConvertOsKeyType("$52") ---@type oskeytype


---ConvertOsKeyType($53)
OSKEY_S = ConvertOsKeyType("$53") ---@type oskeytype


---ConvertOsKeyType($54)
OSKEY_T = ConvertOsKeyType("$54") ---@type oskeytype


---ConvertOsKeyType($55)
OSKEY_U = ConvertOsKeyType("$55") ---@type oskeytype


---ConvertOsKeyType($56)
OSKEY_V = ConvertOsKeyType("$56") ---@type oskeytype


---ConvertOsKeyType($57)
OSKEY_W = ConvertOsKeyType("$57") ---@type oskeytype


---ConvertOsKeyType($58)
OSKEY_X = ConvertOsKeyType("$58") ---@type oskeytype


---ConvertOsKeyType($59)
OSKEY_Y = ConvertOsKeyType("$59") ---@type oskeytype


---ConvertOsKeyType($5A)
OSKEY_Z = ConvertOsKeyType("$5A") ---@type oskeytype


---ConvertOsKeyType($5B)
OSKEY_LMETA = ConvertOsKeyType("$5B") ---@type oskeytype


---ConvertOsKeyType($5C)
OSKEY_RMETA = ConvertOsKeyType("$5C") ---@type oskeytype


---ConvertOsKeyType($5D)
OSKEY_APPS = ConvertOsKeyType("$5D") ---@type oskeytype


---ConvertOsKeyType($5F)
OSKEY_SLEEP = ConvertOsKeyType("$5F") ---@type oskeytype


---ConvertOsKeyType($60)
OSKEY_NUMPAD0 = ConvertOsKeyType("$60") ---@type oskeytype


---ConvertOsKeyType($61)
OSKEY_NUMPAD1 = ConvertOsKeyType("$61") ---@type oskeytype


---ConvertOsKeyType($62)
OSKEY_NUMPAD2 = ConvertOsKeyType("$62") ---@type oskeytype


---ConvertOsKeyType($63)
OSKEY_NUMPAD3 = ConvertOsKeyType("$63") ---@type oskeytype


---ConvertOsKeyType($64)
OSKEY_NUMPAD4 = ConvertOsKeyType("$64") ---@type oskeytype


---ConvertOsKeyType($65)
OSKEY_NUMPAD5 = ConvertOsKeyType("$65") ---@type oskeytype


---ConvertOsKeyType($66)
OSKEY_NUMPAD6 = ConvertOsKeyType("$66") ---@type oskeytype


---ConvertOsKeyType($67)
OSKEY_NUMPAD7 = ConvertOsKeyType("$67") ---@type oskeytype


---ConvertOsKeyType($68)
OSKEY_NUMPAD8 = ConvertOsKeyType("$68") ---@type oskeytype


---ConvertOsKeyType($69)
OSKEY_NUMPAD9 = ConvertOsKeyType("$69") ---@type oskeytype


---ConvertOsKeyType($6A)
OSKEY_MULTIPLY = ConvertOsKeyType("$6A") ---@type oskeytype


---ConvertOsKeyType($6B)
OSKEY_ADD = ConvertOsKeyType("$6B") ---@type oskeytype


---ConvertOsKeyType($6C)
OSKEY_SEPARATOR = ConvertOsKeyType("$6C") ---@type oskeytype


---ConvertOsKeyType($6D)
OSKEY_SUBTRACT = ConvertOsKeyType("$6D") ---@type oskeytype


---ConvertOsKeyType($6E)
OSKEY_DECIMAL = ConvertOsKeyType("$6E") ---@type oskeytype


---ConvertOsKeyType($6F)
OSKEY_DIVIDE = ConvertOsKeyType("$6F") ---@type oskeytype


---ConvertOsKeyType($70)
OSKEY_F1 = ConvertOsKeyType("$70") ---@type oskeytype


---ConvertOsKeyType($71)
OSKEY_F2 = ConvertOsKeyType("$71") ---@type oskeytype


---ConvertOsKeyType($72)
OSKEY_F3 = ConvertOsKeyType("$72") ---@type oskeytype


---ConvertOsKeyType($73)
OSKEY_F4 = ConvertOsKeyType("$73") ---@type oskeytype


---ConvertOsKeyType($74)
OSKEY_F5 = ConvertOsKeyType("$74") ---@type oskeytype


---ConvertOsKeyType($75)
OSKEY_F6 = ConvertOsKeyType("$75") ---@type oskeytype


---ConvertOsKeyType($76)
OSKEY_F7 = ConvertOsKeyType("$76") ---@type oskeytype


---ConvertOsKeyType($77)
OSKEY_F8 = ConvertOsKeyType("$77") ---@type oskeytype


---ConvertOsKeyType($78)
OSKEY_F9 = ConvertOsKeyType("$78") ---@type oskeytype


---ConvertOsKeyType($79)
OSKEY_F10 = ConvertOsKeyType("$79") ---@type oskeytype


---ConvertOsKeyType($7A)
OSKEY_F11 = ConvertOsKeyType("$7A") ---@type oskeytype


---ConvertOsKeyType($7B)
OSKEY_F12 = ConvertOsKeyType("$7B") ---@type oskeytype


---ConvertOsKeyType($7C)
OSKEY_F13 = ConvertOsKeyType("$7C") ---@type oskeytype


---ConvertOsKeyType($7D)
OSKEY_F14 = ConvertOsKeyType("$7D") ---@type oskeytype


---ConvertOsKeyType($7E)
OSKEY_F15 = ConvertOsKeyType("$7E") ---@type oskeytype


---ConvertOsKeyType($7F)
OSKEY_F16 = ConvertOsKeyType("$7F") ---@type oskeytype


---ConvertOsKeyType($80)
OSKEY_F17 = ConvertOsKeyType("$80") ---@type oskeytype


---ConvertOsKeyType($81)
OSKEY_F18 = ConvertOsKeyType("$81") ---@type oskeytype


---ConvertOsKeyType($82)
OSKEY_F19 = ConvertOsKeyType("$82") ---@type oskeytype


---ConvertOsKeyType($83)
OSKEY_F20 = ConvertOsKeyType("$83") ---@type oskeytype


---ConvertOsKeyType($84)
OSKEY_F21 = ConvertOsKeyType("$84") ---@type oskeytype


---ConvertOsKeyType($85)
OSKEY_F22 = ConvertOsKeyType("$85") ---@type oskeytype


---ConvertOsKeyType($86)
OSKEY_F23 = ConvertOsKeyType("$86") ---@type oskeytype


---ConvertOsKeyType($87)
OSKEY_F24 = ConvertOsKeyType("$87") ---@type oskeytype


---ConvertOsKeyType($90)
OSKEY_NUMLOCK = ConvertOsKeyType("$90") ---@type oskeytype


---ConvertOsKeyType($91)
OSKEY_SCROLLLOCK = ConvertOsKeyType("$91") ---@type oskeytype


---ConvertOsKeyType($92)
OSKEY_OEM_NEC_EQUAL = ConvertOsKeyType("$92") ---@type oskeytype


---ConvertOsKeyType($92)
OSKEY_OEM_FJ_JISHO = ConvertOsKeyType("$92") ---@type oskeytype


---ConvertOsKeyType($93)
OSKEY_OEM_FJ_MASSHOU = ConvertOsKeyType("$93") ---@type oskeytype


---ConvertOsKeyType($94)
OSKEY_OEM_FJ_TOUROKU = ConvertOsKeyType("$94") ---@type oskeytype


---ConvertOsKeyType($95)
OSKEY_OEM_FJ_LOYA = ConvertOsKeyType("$95") ---@type oskeytype


---ConvertOsKeyType($96)
OSKEY_OEM_FJ_ROYA = ConvertOsKeyType("$96") ---@type oskeytype


---ConvertOsKeyType($A0)
OSKEY_LSHIFT = ConvertOsKeyType("$A0") ---@type oskeytype


---ConvertOsKeyType($A1)
OSKEY_RSHIFT = ConvertOsKeyType("$A1") ---@type oskeytype


---ConvertOsKeyType($A2)
OSKEY_LCONTROL = ConvertOsKeyType("$A2") ---@type oskeytype


---ConvertOsKeyType($A3)
OSKEY_RCONTROL = ConvertOsKeyType("$A3") ---@type oskeytype


---ConvertOsKeyType($A4)
OSKEY_LALT = ConvertOsKeyType("$A4") ---@type oskeytype


---ConvertOsKeyType($A5)
OSKEY_RALT = ConvertOsKeyType("$A5") ---@type oskeytype


---ConvertOsKeyType($A6)
OSKEY_BROWSER_BACK = ConvertOsKeyType("$A6") ---@type oskeytype


---ConvertOsKeyType($A7)
OSKEY_BROWSER_FORWARD = ConvertOsKeyType("$A7") ---@type oskeytype


---ConvertOsKeyType($A8)
OSKEY_BROWSER_REFRESH = ConvertOsKeyType("$A8") ---@type oskeytype


---ConvertOsKeyType($A9)
OSKEY_BROWSER_STOP = ConvertOsKeyType("$A9") ---@type oskeytype


---ConvertOsKeyType($AA)
OSKEY_BROWSER_SEARCH = ConvertOsKeyType("$AA") ---@type oskeytype


---ConvertOsKeyType($AB)
OSKEY_BROWSER_FAVORITES = ConvertOsKeyType("$AB") ---@type oskeytype


---ConvertOsKeyType($AC)
OSKEY_BROWSER_HOME = ConvertOsKeyType("$AC") ---@type oskeytype


---ConvertOsKeyType($AD)
OSKEY_VOLUME_MUTE = ConvertOsKeyType("$AD") ---@type oskeytype


---ConvertOsKeyType($AE)
OSKEY_VOLUME_DOWN = ConvertOsKeyType("$AE") ---@type oskeytype


---ConvertOsKeyType($AF)
OSKEY_VOLUME_UP = ConvertOsKeyType("$AF") ---@type oskeytype


---ConvertOsKeyType($B0)
OSKEY_MEDIA_NEXT_TRACK = ConvertOsKeyType("$B0") ---@type oskeytype


---ConvertOsKeyType($B1)
OSKEY_MEDIA_PREV_TRACK = ConvertOsKeyType("$B1") ---@type oskeytype


---ConvertOsKeyType($B2)
OSKEY_MEDIA_STOP = ConvertOsKeyType("$B2") ---@type oskeytype


---ConvertOsKeyType($B3)
OSKEY_MEDIA_PLAY_PAUSE = ConvertOsKeyType("$B3") ---@type oskeytype


---ConvertOsKeyType($B4)
OSKEY_LAUNCH_MAIL = ConvertOsKeyType("$B4") ---@type oskeytype


---ConvertOsKeyType($B5)
OSKEY_LAUNCH_MEDIA_SELECT = ConvertOsKeyType("$B5") ---@type oskeytype


---ConvertOsKeyType($B6)
OSKEY_LAUNCH_APP1 = ConvertOsKeyType("$B6") ---@type oskeytype


---ConvertOsKeyType($B7)
OSKEY_LAUNCH_APP2 = ConvertOsKeyType("$B7") ---@type oskeytype


---ConvertOsKeyType($BA)
OSKEY_OEM_1 = ConvertOsKeyType("$BA") ---@type oskeytype


---ConvertOsKeyType($BB)
OSKEY_OEM_PLUS = ConvertOsKeyType("$BB") ---@type oskeytype


---ConvertOsKeyType($BC)
OSKEY_OEM_COMMA = ConvertOsKeyType("$BC") ---@type oskeytype


---ConvertOsKeyType($BD)
OSKEY_OEM_MINUS = ConvertOsKeyType("$BD") ---@type oskeytype


---ConvertOsKeyType($BE)
OSKEY_OEM_PERIOD = ConvertOsKeyType("$BE") ---@type oskeytype


---ConvertOsKeyType($BF)
OSKEY_OEM_2 = ConvertOsKeyType("$BF") ---@type oskeytype


---ConvertOsKeyType($C0)
OSKEY_OEM_3 = ConvertOsKeyType("$C0") ---@type oskeytype


---ConvertOsKeyType($DB)
OSKEY_OEM_4 = ConvertOsKeyType("$DB") ---@type oskeytype


---ConvertOsKeyType($DC)
OSKEY_OEM_5 = ConvertOsKeyType("$DC") ---@type oskeytype


---ConvertOsKeyType($DD)
OSKEY_OEM_6 = ConvertOsKeyType("$DD") ---@type oskeytype


---ConvertOsKeyType($DE)
OSKEY_OEM_7 = ConvertOsKeyType("$DE") ---@type oskeytype


---ConvertOsKeyType($DF)
OSKEY_OEM_8 = ConvertOsKeyType("$DF") ---@type oskeytype


---ConvertOsKeyType($E1)
OSKEY_OEM_AX = ConvertOsKeyType("$E1") ---@type oskeytype


---ConvertOsKeyType($E2)
OSKEY_OEM_102 = ConvertOsKeyType("$E2") ---@type oskeytype


---ConvertOsKeyType($E3)
OSKEY_ICO_HELP = ConvertOsKeyType("$E3") ---@type oskeytype


---ConvertOsKeyType($E4)
OSKEY_ICO_00 = ConvertOsKeyType("$E4") ---@type oskeytype


---ConvertOsKeyType($E5)
OSKEY_PROCESSKEY = ConvertOsKeyType("$E5") ---@type oskeytype


---ConvertOsKeyType($E6)
OSKEY_ICO_CLEAR = ConvertOsKeyType("$E6") ---@type oskeytype


---ConvertOsKeyType($E7)
OSKEY_PACKET = ConvertOsKeyType("$E7") ---@type oskeytype


---ConvertOsKeyType($E9)
OSKEY_OEM_RESET = ConvertOsKeyType("$E9") ---@type oskeytype


---ConvertOsKeyType($EA)
OSKEY_OEM_JUMP = ConvertOsKeyType("$EA") ---@type oskeytype


---ConvertOsKeyType($EB)
OSKEY_OEM_PA1 = ConvertOsKeyType("$EB") ---@type oskeytype


---ConvertOsKeyType($EC)
OSKEY_OEM_PA2 = ConvertOsKeyType("$EC") ---@type oskeytype


---ConvertOsKeyType($ED)
OSKEY_OEM_PA3 = ConvertOsKeyType("$ED") ---@type oskeytype


---ConvertOsKeyType($EE)
OSKEY_OEM_WSCTRL = ConvertOsKeyType("$EE") ---@type oskeytype


---ConvertOsKeyType($EF)
OSKEY_OEM_CUSEL = ConvertOsKeyType("$EF") ---@type oskeytype


---ConvertOsKeyType($F0)
OSKEY_OEM_ATTN = ConvertOsKeyType("$F0") ---@type oskeytype


---ConvertOsKeyType($F1)
OSKEY_OEM_FINISH = ConvertOsKeyType("$F1") ---@type oskeytype


---ConvertOsKeyType($F2)
OSKEY_OEM_COPY = ConvertOsKeyType("$F2") ---@type oskeytype


---ConvertOsKeyType($F3)
OSKEY_OEM_AUTO = ConvertOsKeyType("$F3") ---@type oskeytype


---ConvertOsKeyType($F4)
OSKEY_OEM_ENLW = ConvertOsKeyType("$F4") ---@type oskeytype


---ConvertOsKeyType($F5)
OSKEY_OEM_BACKTAB = ConvertOsKeyType("$F5") ---@type oskeytype


---ConvertOsKeyType($F6)
OSKEY_ATTN = ConvertOsKeyType("$F6") ---@type oskeytype


---ConvertOsKeyType($F7)
OSKEY_CRSEL = ConvertOsKeyType("$F7") ---@type oskeytype


---ConvertOsKeyType($F8)
OSKEY_EXSEL = ConvertOsKeyType("$F8") ---@type oskeytype


---ConvertOsKeyType($F9)
OSKEY_EREOF = ConvertOsKeyType("$F9") ---@type oskeytype


---ConvertOsKeyType($FA)
OSKEY_PLAY = ConvertOsKeyType("$FA") ---@type oskeytype


---ConvertOsKeyType($FB)
OSKEY_ZOOM = ConvertOsKeyType("$FB") ---@type oskeytype


---ConvertOsKeyType($FC)
OSKEY_NONAME = ConvertOsKeyType("$FC") ---@type oskeytype


---ConvertOsKeyType($FD)
OSKEY_PA1 = ConvertOsKeyType("$FD") ---@type oskeytype


---ConvertOsKeyType($FE)
OSKEY_OEM_CLEAR = ConvertOsKeyType("$FE") ---@type oskeytype


---ConvertAbilityIntegerField('abpx')
ABILITY_IF_BUTTON_POSITION_NORMAL_X = ConvertAbilityIntegerField('abpx') ---@type abilityintegerfield


---ConvertAbilityIntegerField('abpy')
ABILITY_IF_BUTTON_POSITION_NORMAL_Y = ConvertAbilityIntegerField('abpy') ---@type abilityintegerfield


---ConvertAbilityIntegerField('aubx')
ABILITY_IF_BUTTON_POSITION_ACTIVATED_X = ConvertAbilityIntegerField('aubx') ---@type abilityintegerfield


---ConvertAbilityIntegerField('auby')
ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y = ConvertAbilityIntegerField('auby') ---@type abilityintegerfield


---ConvertAbilityIntegerField('arpx')
ABILITY_IF_BUTTON_POSITION_RESEARCH_X = ConvertAbilityIntegerField('arpx') ---@type abilityintegerfield


---ConvertAbilityIntegerField('arpy')
ABILITY_IF_BUTTON_POSITION_RESEARCH_Y = ConvertAbilityIntegerField('arpy') ---@type abilityintegerfield


---ConvertAbilityIntegerField('amsp')
ABILITY_IF_MISSILE_SPEED = ConvertAbilityIntegerField('amsp') ---@type abilityintegerfield


---ConvertAbilityIntegerField('atac')
ABILITY_IF_TARGET_ATTACHMENTS = ConvertAbilityIntegerField('atac') ---@type abilityintegerfield


---ConvertAbilityIntegerField('acac')
ABILITY_IF_CASTER_ATTACHMENTS = ConvertAbilityIntegerField('acac') ---@type abilityintegerfield


---ConvertAbilityIntegerField('apri')
ABILITY_IF_PRIORITY = ConvertAbilityIntegerField('apri') ---@type abilityintegerfield


---ConvertAbilityIntegerField('alev')
ABILITY_IF_LEVELS = ConvertAbilityIntegerField('alev') ---@type abilityintegerfield


---ConvertAbilityIntegerField('arlv')
ABILITY_IF_REQUIRED_LEVEL = ConvertAbilityIntegerField('arlv') ---@type abilityintegerfield


---ConvertAbilityIntegerField('alsk')
ABILITY_IF_LEVEL_SKIP_REQUIREMENT = ConvertAbilityIntegerField('alsk') ---@type abilityintegerfield


---Get only
---ConvertAbilityBooleanField('aher')
ABILITY_BF_HERO_ABILITY = ConvertAbilityBooleanField('aher') ---@type abilitybooleanfield


---ConvertAbilityBooleanField('aite')
ABILITY_BF_ITEM_ABILITY = ConvertAbilityBooleanField('aite') ---@type abilitybooleanfield


---ConvertAbilityBooleanField('achd')
ABILITY_BF_CHECK_DEPENDENCIES = ConvertAbilityBooleanField('achd') ---@type abilitybooleanfield


---ConvertAbilityRealField('amac')
ABILITY_RF_ARF_MISSILE_ARC = ConvertAbilityRealField('amac') ---@type abilityrealfield


---Get Only
---ConvertAbilityStringField('anam')
ABILITY_SF_NAME = ConvertAbilityStringField('anam') ---@type abilitystringfield


---ConvertAbilityStringField('auar')
ABILITY_SF_ICON_ACTIVATED = ConvertAbilityStringField('auar') ---@type abilitystringfield


---ConvertAbilityStringField('arar')
ABILITY_SF_ICON_RESEARCH = ConvertAbilityStringField('arar') ---@type abilitystringfield


---ConvertAbilityStringField('aefs')
ABILITY_SF_EFFECT_SOUND = ConvertAbilityStringField('aefs') ---@type abilitystringfield


---ConvertAbilityStringField('aefl')
ABILITY_SF_EFFECT_SOUND_LOOPING = ConvertAbilityStringField('aefl') ---@type abilitystringfield


---ConvertAbilityIntegerLevelField('amcs')
ABILITY_ILF_MANA_COST = ConvertAbilityIntegerLevelField('amcs') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hbz1')
ABILITY_ILF_NUMBER_OF_WAVES = ConvertAbilityIntegerLevelField('Hbz1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hbz3')
ABILITY_ILF_NUMBER_OF_SHARDS = ConvertAbilityIntegerLevelField('Hbz3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hmt1')
ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED = ConvertAbilityIntegerLevelField('Hmt1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hwe2')
ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2 = ConvertAbilityIntegerLevelField('Hwe2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Omi1')
ABILITY_ILF_NUMBER_OF_IMAGES = ConvertAbilityIntegerLevelField('Omi1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Uan1')
ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1 = ConvertAbilityIntegerLevelField('Uan1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Eme2')
ABILITY_ILF_MORPHING_FLAGS = ConvertAbilityIntegerLevelField('Eme2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nrg5')
ABILITY_ILF_STRENGTH_BONUS_NRG5 = ConvertAbilityIntegerLevelField('Nrg5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nrg6')
ABILITY_ILF_DEFENSE_BONUS_NRG6 = ConvertAbilityIntegerLevelField('Nrg6') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ocl2')
ABILITY_ILF_NUMBER_OF_TARGETS_HIT = ConvertAbilityIntegerLevelField('Ocl2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ofs1')
ABILITY_ILF_DETECTION_TYPE_OFS1 = ConvertAbilityIntegerLevelField('Ofs1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Osf2')
ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2 = ConvertAbilityIntegerLevelField('Osf2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Efn1')
ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1 = ConvertAbilityIntegerLevelField('Efn1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hre1')
ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1 = ConvertAbilityIntegerLevelField('Hre1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hca4')
ABILITY_ILF_STACK_FLAGS = ConvertAbilityIntegerLevelField('Hca4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndp2')
ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField('Ndp2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndp3')
ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3 = ConvertAbilityIntegerLevelField('Ndp3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nrc2')
ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2 = ConvertAbilityIntegerLevelField('Nrc2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ams3')
ABILITY_ILF_SHIELD_LIFE = ConvertAbilityIntegerLevelField('Ams3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ams4')
ABILITY_ILF_MANA_LOSS_AMS4 = ConvertAbilityIntegerLevelField('Ams4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Bgm1')
ABILITY_ILF_GOLD_PER_INTERVAL_BGM1 = ConvertAbilityIntegerLevelField('Bgm1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Bgm3')
ABILITY_ILF_MAX_NUMBER_OF_MINERS = ConvertAbilityIntegerLevelField('Bgm3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Car1')
ABILITY_ILF_CARGO_CAPACITY = ConvertAbilityIntegerLevelField('Car1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Dev3')
ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3 = ConvertAbilityIntegerLevelField('Dev3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Dev1')
ABILITY_ILF_MAX_CREEP_LEVEL_DEV1 = ConvertAbilityIntegerLevelField('Dev1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Egm1')
ABILITY_ILF_GOLD_PER_INTERVAL_EGM1 = ConvertAbilityIntegerLevelField('Egm1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Fae1')
ABILITY_ILF_DEFENSE_REDUCTION = ConvertAbilityIntegerLevelField('Fae1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Fla1')
ABILITY_ILF_DETECTION_TYPE_FLA1 = ConvertAbilityIntegerLevelField('Fla1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Fla3')
ABILITY_ILF_FLARE_COUNT = ConvertAbilityIntegerLevelField('Fla3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Gld1')
ABILITY_ILF_MAX_GOLD = ConvertAbilityIntegerLevelField('Gld1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Gld3')
ABILITY_ILF_MINING_CAPACITY = ConvertAbilityIntegerLevelField('Gld3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Gyd1')
ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1 = ConvertAbilityIntegerLevelField('Gyd1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Har1')
ABILITY_ILF_DAMAGE_TO_TREE = ConvertAbilityIntegerLevelField('Har1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Har2')
ABILITY_ILF_LUMBER_CAPACITY = ConvertAbilityIntegerLevelField('Har2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Har3')
ABILITY_ILF_GOLD_CAPACITY = ConvertAbilityIntegerLevelField('Har3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Inf2')
ABILITY_ILF_DEFENSE_INCREASE_INF2 = ConvertAbilityIntegerLevelField('Inf2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Neu2')
ABILITY_ILF_INTERACTION_TYPE = ConvertAbilityIntegerLevelField('Neu2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndt1')
ABILITY_ILF_GOLD_COST_NDT1 = ConvertAbilityIntegerLevelField('Ndt1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndt2')
ABILITY_ILF_LUMBER_COST_NDT2 = ConvertAbilityIntegerLevelField('Ndt2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndt3')
ABILITY_ILF_DETECTION_TYPE_NDT3 = ConvertAbilityIntegerLevelField('Ndt3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Poi4')
ABILITY_ILF_STACKING_TYPE_POI4 = ConvertAbilityIntegerLevelField('Poi4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Poa5')
ABILITY_ILF_STACKING_TYPE_POA5 = ConvertAbilityIntegerLevelField('Poa5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ply1')
ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1 = ConvertAbilityIntegerLevelField('Ply1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Pos1')
ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1 = ConvertAbilityIntegerLevelField('Pos1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Prg1')
ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1 = ConvertAbilityIntegerLevelField('Prg1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Prg2')
ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2 = ConvertAbilityIntegerLevelField('Prg2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Prg6')
ABILITY_ILF_MANA_LOSS_PRG6 = ConvertAbilityIntegerLevelField('Prg6') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Rai1')
ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE = ConvertAbilityIntegerLevelField('Rai1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Rai2')
ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO = ConvertAbilityIntegerLevelField('Rai2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ucb5')
ABILITY_ILF_MAX_UNITS_SUMMONED = ConvertAbilityIntegerLevelField('Ucb5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Rej3')
ABILITY_ILF_ALLOW_WHEN_FULL_REJ3 = ConvertAbilityIntegerLevelField('Rej3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Rpb5')
ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER = ConvertAbilityIntegerLevelField('Rpb5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Rpb6')
ABILITY_ILF_MAXIMUM_UNITS_AFFECTED = ConvertAbilityIntegerLevelField('Rpb6') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Roa2')
ABILITY_ILF_DEFENSE_INCREASE_ROA2 = ConvertAbilityIntegerLevelField('Roa2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Roa7')
ABILITY_ILF_MAX_UNITS_ROA7 = ConvertAbilityIntegerLevelField('Roa7') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Roo1')
ABILITY_ILF_ROOTED_WEAPONS = ConvertAbilityIntegerLevelField('Roo1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Roo2')
ABILITY_ILF_UPROOTED_WEAPONS = ConvertAbilityIntegerLevelField('Roo2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Roo4')
ABILITY_ILF_UPROOTED_DEFENSE_TYPE = ConvertAbilityIntegerLevelField('Roo4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Sal2')
ABILITY_ILF_ACCUMULATION_STEP = ConvertAbilityIntegerLevelField('Sal2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Esn4')
ABILITY_ILF_NUMBER_OF_OWLS = ConvertAbilityIntegerLevelField('Esn4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Spo4')
ABILITY_ILF_STACKING_TYPE_SPO4 = ConvertAbilityIntegerLevelField('Spo4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Sod1')
ABILITY_ILF_NUMBER_OF_UNITS = ConvertAbilityIntegerLevelField('Sod1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Spa1')
ABILITY_ILF_SPIDER_CAPACITY = ConvertAbilityIntegerLevelField('Spa1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Wha2')
ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES = ConvertAbilityIntegerLevelField('Wha2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iagi')
ABILITY_ILF_AGILITY_BONUS = ConvertAbilityIntegerLevelField('Iagi') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iint')
ABILITY_ILF_INTELLIGENCE_BONUS = ConvertAbilityIntegerLevelField('Iint') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Istr')
ABILITY_ILF_STRENGTH_BONUS_ISTR = ConvertAbilityIntegerLevelField('Istr') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iatt')
ABILITY_ILF_ATTACK_BONUS = ConvertAbilityIntegerLevelField('Iatt') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Idef')
ABILITY_ILF_DEFENSE_BONUS_IDEF = ConvertAbilityIntegerLevelField('Idef') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Isn1')
ABILITY_ILF_SUMMON_1_AMOUNT = ConvertAbilityIntegerLevelField('Isn1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Isn2')
ABILITY_ILF_SUMMON_2_AMOUNT = ConvertAbilityIntegerLevelField('Isn2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ixpg')
ABILITY_ILF_EXPERIENCE_GAINED = ConvertAbilityIntegerLevelField('Ixpg') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ihpg')
ABILITY_ILF_HIT_POINTS_GAINED_IHPG = ConvertAbilityIntegerLevelField('Ihpg') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Impg')
ABILITY_ILF_MANA_POINTS_GAINED_IMPG = ConvertAbilityIntegerLevelField('Impg') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ihp2')
ABILITY_ILF_HIT_POINTS_GAINED_IHP2 = ConvertAbilityIntegerLevelField('Ihp2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Imp2')
ABILITY_ILF_MANA_POINTS_GAINED_IMP2 = ConvertAbilityIntegerLevelField('Imp2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Idic')
ABILITY_ILF_DAMAGE_BONUS_DICE = ConvertAbilityIntegerLevelField('Idic') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iarp')
ABILITY_ILF_ARMOR_PENALTY_IARP = ConvertAbilityIntegerLevelField('Iarp') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iob5')
ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5 = ConvertAbilityIntegerLevelField('Iob5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ilev')
ABILITY_ILF_LEVELS_GAINED = ConvertAbilityIntegerLevelField('Ilev') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ilif')
ABILITY_ILF_MAX_LIFE_GAINED = ConvertAbilityIntegerLevelField('Ilif') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iman')
ABILITY_ILF_MAX_MANA_GAINED = ConvertAbilityIntegerLevelField('Iman') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Igol')
ABILITY_ILF_GOLD_GIVEN = ConvertAbilityIntegerLevelField('Igol') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ilum')
ABILITY_ILF_LUMBER_GIVEN = ConvertAbilityIntegerLevelField('Ilum') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ifa1')
ABILITY_ILF_DETECTION_TYPE_IFA1 = ConvertAbilityIntegerLevelField('Ifa1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Icre')
ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE = ConvertAbilityIntegerLevelField('Icre') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Imvb')
ABILITY_ILF_MOVEMENT_SPEED_BONUS = ConvertAbilityIntegerLevelField('Imvb') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ihpr')
ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND = ConvertAbilityIntegerLevelField('Ihpr') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Isib')
ABILITY_ILF_SIGHT_RANGE_BONUS = ConvertAbilityIntegerLevelField('Isib') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Icfd')
ABILITY_ILF_DAMAGE_PER_DURATION = ConvertAbilityIntegerLevelField('Icfd') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Icfm')
ABILITY_ILF_MANA_USED_PER_SECOND = ConvertAbilityIntegerLevelField('Icfm') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Icfx')
ABILITY_ILF_EXTRA_MANA_REQUIRED = ConvertAbilityIntegerLevelField('Icfx') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Idet')
ABILITY_ILF_DETECTION_RADIUS_IDET = ConvertAbilityIntegerLevelField('Idet') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Idim')
ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM = ConvertAbilityIntegerLevelField('Idim') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Idid')
ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID = ConvertAbilityIntegerLevelField('Idid') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Irec')
ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC = ConvertAbilityIntegerLevelField('Irec') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ircd')
ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS = ConvertAbilityIntegerLevelField('Ircd') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('irc2')
ABILITY_ILF_RESTORED_LIFE = ConvertAbilityIntegerLevelField('irc2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('irc3')
ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT = ConvertAbilityIntegerLevelField('irc3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ihps')
ABILITY_ILF_HIT_POINTS_RESTORED = ConvertAbilityIntegerLevelField('Ihps') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Imps')
ABILITY_ILF_MANA_POINTS_RESTORED = ConvertAbilityIntegerLevelField('Imps') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Itpm')
ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM = ConvertAbilityIntegerLevelField('Itpm') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Cad1')
ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1 = ConvertAbilityIntegerLevelField('Cad1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Wrs3')
ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS = ConvertAbilityIntegerLevelField('Wrs3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Uds1')
ABILITY_ILF_MAXIMUM_UNITS = ConvertAbilityIntegerLevelField('Uds1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Det1')
ABILITY_ILF_DETECTION_TYPE_DET1 = ConvertAbilityIntegerLevelField('Det1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsp1')
ABILITY_ILF_GOLD_COST_PER_STRUCTURE = ConvertAbilityIntegerLevelField('Nsp1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsp2')
ABILITY_ILF_LUMBER_COST_PER_USE = ConvertAbilityIntegerLevelField('Nsp2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsp3')
ABILITY_ILF_DETECTION_TYPE_NSP3 = ConvertAbilityIntegerLevelField('Nsp3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Uls1')
ABILITY_ILF_NUMBER_OF_SWARM_UNITS = ConvertAbilityIntegerLevelField('Uls1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Uls3')
ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET = ConvertAbilityIntegerLevelField('Uls3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nba2')
ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2 = ConvertAbilityIntegerLevelField('Nba2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nch1')
ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1 = ConvertAbilityIntegerLevelField('Nch1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsi1')
ABILITY_ILF_ATTACKS_PREVENTED = ConvertAbilityIntegerLevelField('Nsi1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Efk3')
ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3 = ConvertAbilityIntegerLevelField('Efk3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Esv1')
ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1 = ConvertAbilityIntegerLevelField('Esv1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('exh1')
ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1 = ConvertAbilityIntegerLevelField('exh1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('inv1')
ABILITY_ILF_ITEM_CAPACITY = ConvertAbilityIntegerLevelField('inv1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('spl2')
ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2 = ConvertAbilityIntegerLevelField('spl2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('irl3')
ABILITY_ILF_ALLOW_WHEN_FULL_IRL3 = ConvertAbilityIntegerLevelField('irl3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('idc3')
ABILITY_ILF_MAXIMUM_DISPELLED_UNITS = ConvertAbilityIntegerLevelField('idc3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('imo1')
ABILITY_ILF_NUMBER_OF_LURES = ConvertAbilityIntegerLevelField('imo1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('ict1')
ABILITY_ILF_NEW_TIME_OF_DAY_HOUR = ConvertAbilityIntegerLevelField('ict1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('ict2')
ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE = ConvertAbilityIntegerLevelField('ict2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('mec1')
ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1 = ConvertAbilityIntegerLevelField('mec1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('spb3')
ABILITY_ILF_MINIMUM_SPELLS = ConvertAbilityIntegerLevelField('spb3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('spb4')
ABILITY_ILF_MAXIMUM_SPELLS = ConvertAbilityIntegerLevelField('spb4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('gra3')
ABILITY_ILF_DISABLED_ATTACK_INDEX = ConvertAbilityIntegerLevelField('gra3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('gra4')
ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4 = ConvertAbilityIntegerLevelField('gra4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('gra5')
ABILITY_ILF_MAXIMUM_ATTACKS = ConvertAbilityIntegerLevelField('gra5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Npr1')
ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1 = ConvertAbilityIntegerLevelField('Npr1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsa1')
ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1 = ConvertAbilityIntegerLevelField('Nsa1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iaa1')
ABILITY_ILF_ATTACK_MODIFICATION = ConvertAbilityIntegerLevelField('Iaa1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Npa5')
ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5 = ConvertAbilityIntegerLevelField('Npa5') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Igl1')
ABILITY_ILF_UPGRADE_LEVELS = ConvertAbilityIntegerLevelField('Igl1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndo2')
ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2 = ConvertAbilityIntegerLevelField('Ndo2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nst1')
ABILITY_ILF_BEASTS_PER_SECOND = ConvertAbilityIntegerLevelField('Nst1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ncl2')
ABILITY_ILF_TARGET_TYPE = ConvertAbilityIntegerLevelField('Ncl2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ncl3')
ABILITY_ILF_OPTIONS = ConvertAbilityIntegerLevelField('Ncl3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nab3')
ABILITY_ILF_ARMOR_PENALTY_NAB3 = ConvertAbilityIntegerLevelField('Nab3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nhs6')
ABILITY_ILF_WAVE_COUNT_NHS6 = ConvertAbilityIntegerLevelField('Nhs6') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ntm3')
ABILITY_ILF_MAX_CREEP_LEVEL_NTM3 = ConvertAbilityIntegerLevelField('Ntm3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ncs3')
ABILITY_ILF_MISSILE_COUNT = ConvertAbilityIntegerLevelField('Ncs3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nlm3')
ABILITY_ILF_SPLIT_ATTACK_COUNT = ConvertAbilityIntegerLevelField('Nlm3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nlm6')
ABILITY_ILF_GENERATION_COUNT = ConvertAbilityIntegerLevelField('Nlm6') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nvc1')
ABILITY_ILF_ROCK_RING_COUNT = ConvertAbilityIntegerLevelField('Nvc1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nvc2')
ABILITY_ILF_WAVE_COUNT_NVC2 = ConvertAbilityIntegerLevelField('Nvc2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Tau1')
ABILITY_ILF_PREFER_HOSTILES_TAU1 = ConvertAbilityIntegerLevelField('Tau1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Tau2')
ABILITY_ILF_PREFER_FRIENDLIES_TAU2 = ConvertAbilityIntegerLevelField('Tau2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Tau3')
ABILITY_ILF_MAX_UNITS_TAU3 = ConvertAbilityIntegerLevelField('Tau3') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Tau4')
ABILITY_ILF_NUMBER_OF_PULSES = ConvertAbilityIntegerLevelField('Tau4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Hwe1')
ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1 = ConvertAbilityIntegerLevelField('Hwe1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Uin4')
ABILITY_ILF_SUMMONED_UNIT_UIN4 = ConvertAbilityIntegerLevelField('Uin4') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Osf1')
ABILITY_ILF_SUMMONED_UNIT_OSF1 = ConvertAbilityIntegerLevelField('Osf1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Efnu')
ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU = ConvertAbilityIntegerLevelField('Efnu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nbau')
ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU = ConvertAbilityIntegerLevelField('Nbau') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ntou')
ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU = ConvertAbilityIntegerLevelField('Ntou') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Esvu')
ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU = ConvertAbilityIntegerLevelField('Esvu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nef1')
ABILITY_ILF_SUMMONED_UNIT_TYPES = ConvertAbilityIntegerLevelField('Nef1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndou')
ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU = ConvertAbilityIntegerLevelField('Ndou') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Emeu')
ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU = ConvertAbilityIntegerLevelField('Emeu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Aplu')
ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE = ConvertAbilityIntegerLevelField('Aplu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Btl1')
ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1 = ConvertAbilityIntegerLevelField('Btl1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Cha1')
ABILITY_ILF_NEW_UNIT_TYPE = ConvertAbilityIntegerLevelField('Cha1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('ent1')
ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1 = ConvertAbilityIntegerLevelField('ent1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Gydu')
ABILITY_ILF_CORPSE_UNIT_TYPE = ConvertAbilityIntegerLevelField('Gydu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Loa1')
ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1 = ConvertAbilityIntegerLevelField('Loa1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Raiu')
ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK = ConvertAbilityIntegerLevelField('Raiu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Stau')
ABILITY_ILF_WARD_UNIT_TYPE_STAU = ConvertAbilityIntegerLevelField('Stau') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iobu')
ABILITY_ILF_EFFECT_ABILITY = ConvertAbilityIntegerLevelField('Iobu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ndc2')
ABILITY_ILF_CONVERSION_UNIT = ConvertAbilityIntegerLevelField('Ndc2') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsl1')
ABILITY_ILF_UNIT_TO_PRESERVE = ConvertAbilityIntegerLevelField('Nsl1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Chl1')
ABILITY_ILF_UNIT_TYPE_ALLOWED = ConvertAbilityIntegerLevelField('Chl1') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Ulsu')
ABILITY_ILF_SWARM_UNIT_TYPE = ConvertAbilityIntegerLevelField('Ulsu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('coau')
ABILITY_ILF_RESULTING_UNIT_TYPE_COAU = ConvertAbilityIntegerLevelField('coau') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('exhu')
ABILITY_ILF_UNIT_TYPE_EXHU = ConvertAbilityIntegerLevelField('exhu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('hwdu')
ABILITY_ILF_WARD_UNIT_TYPE_HWDU = ConvertAbilityIntegerLevelField('hwdu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('imou')
ABILITY_ILF_LURE_UNIT_TYPE = ConvertAbilityIntegerLevelField('imou') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('ipmu')
ABILITY_ILF_UNIT_TYPE_IPMU = ConvertAbilityIntegerLevelField('ipmu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nsyu')
ABILITY_ILF_FACTORY_UNIT_ID = ConvertAbilityIntegerLevelField('Nsyu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nfyu')
ABILITY_ILF_SPAWN_UNIT_ID_NFYU = ConvertAbilityIntegerLevelField('Nfyu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Nvcu')
ABILITY_ILF_DESTRUCTIBLE_ID = ConvertAbilityIntegerLevelField('Nvcu') ---@type abilityintegerlevelfield


---ConvertAbilityIntegerLevelField('Iglu')
ABILITY_ILF_UPGRADE_TYPE = ConvertAbilityIntegerLevelField('Iglu') ---@type abilityintegerlevelfield


---ConvertAbilityRealLevelField('acas')
ABILITY_RLF_CASTING_TIME = ConvertAbilityRealLevelField('acas') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('adur')
ABILITY_RLF_DURATION_NORMAL = ConvertAbilityRealLevelField('adur') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ahdu')
ABILITY_RLF_DURATION_HERO = ConvertAbilityRealLevelField('ahdu') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('acdn')
ABILITY_RLF_COOLDOWN = ConvertAbilityRealLevelField('acdn') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('aare')
ABILITY_RLF_AREA_OF_EFFECT = ConvertAbilityRealLevelField('aare') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('aran')
ABILITY_RLF_CAST_RANGE = ConvertAbilityRealLevelField('aran') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbz2')
ABILITY_RLF_DAMAGE_HBZ2 = ConvertAbilityRealLevelField('Hbz2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbz4')
ABILITY_RLF_BUILDING_REDUCTION_HBZ4 = ConvertAbilityRealLevelField('Hbz4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbz5')
ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5 = ConvertAbilityRealLevelField('Hbz5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbz6')
ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE = ConvertAbilityRealLevelField('Hbz6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hab1')
ABILITY_RLF_MANA_REGENERATION_INCREASE = ConvertAbilityRealLevelField('Hab1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hmt2')
ABILITY_RLF_CASTING_DELAY = ConvertAbilityRealLevelField('Hmt2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oww1')
ABILITY_RLF_DAMAGE_PER_SECOND_OWW1 = ConvertAbilityRealLevelField('Oww1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oww2')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2 = ConvertAbilityRealLevelField('Oww2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocr1')
ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE = ConvertAbilityRealLevelField('Ocr1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocr2')
ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2 = ConvertAbilityRealLevelField('Ocr2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocr3')
ABILITY_RLF_DAMAGE_BONUS_OCR3 = ConvertAbilityRealLevelField('Ocr3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocr4')
ABILITY_RLF_CHANCE_TO_EVADE_OCR4 = ConvertAbilityRealLevelField('Ocr4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Omi2')
ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2 = ConvertAbilityRealLevelField('Omi2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Omi3')
ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3 = ConvertAbilityRealLevelField('Omi3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Omi4')
ABILITY_RLF_ANIMATION_DELAY = ConvertAbilityRealLevelField('Omi4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Owk1')
ABILITY_RLF_TRANSITION_TIME = ConvertAbilityRealLevelField('Owk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Owk2')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2 = ConvertAbilityRealLevelField('Owk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Owk3')
ABILITY_RLF_BACKSTAB_DAMAGE = ConvertAbilityRealLevelField('Owk3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Udc1')
ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1 = ConvertAbilityRealLevelField('Udc1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Udp1')
ABILITY_RLF_LIFE_CONVERTED_TO_MANA = ConvertAbilityRealLevelField('Udp1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Udp2')
ABILITY_RLF_LIFE_CONVERTED_TO_LIFE = ConvertAbilityRealLevelField('Udp2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uau1')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1 = ConvertAbilityRealLevelField('Uau1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uau2')
ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT = ConvertAbilityRealLevelField('Uau2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eev1')
ABILITY_RLF_CHANCE_TO_EVADE_EEV1 = ConvertAbilityRealLevelField('Eev1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eim1')
ABILITY_RLF_DAMAGE_PER_INTERVAL = ConvertAbilityRealLevelField('Eim1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eim2')
ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2 = ConvertAbilityRealLevelField('Eim2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eim3')
ABILITY_RLF_BUFFER_MANA_REQUIRED = ConvertAbilityRealLevelField('Eim3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Emb1')
ABILITY_RLF_MAX_MANA_DRAINED = ConvertAbilityRealLevelField('Emb1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Emb2')
ABILITY_RLF_BOLT_DELAY = ConvertAbilityRealLevelField('Emb2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Emb3')
ABILITY_RLF_BOLT_LIFETIME = ConvertAbilityRealLevelField('Emb3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eme3')
ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION = ConvertAbilityRealLevelField('Eme3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eme4')
ABILITY_RLF_LANDING_DELAY_TIME = ConvertAbilityRealLevelField('Eme4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eme5')
ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS = ConvertAbilityRealLevelField('Eme5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncr5')
ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField('Ncr5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncr6')
ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY = ConvertAbilityRealLevelField('Ncr6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ave5')
ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND = ConvertAbilityRealLevelField('ave5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Usl1')
ABILITY_RLF_STUN_DURATION_USL1 = ConvertAbilityRealLevelField('Usl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uav1')
ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT = ConvertAbilityRealLevelField('Uav1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ucs1')
ABILITY_RLF_DAMAGE_UCS1 = ConvertAbilityRealLevelField('Ucs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ucs2')
ABILITY_RLF_MAX_DAMAGE_UCS2 = ConvertAbilityRealLevelField('Ucs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ucs3')
ABILITY_RLF_DISTANCE_UCS3 = ConvertAbilityRealLevelField('Ucs3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ucs4')
ABILITY_RLF_FINAL_AREA_UCS4 = ConvertAbilityRealLevelField('Ucs4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uin1')
ABILITY_RLF_DAMAGE_UIN1 = ConvertAbilityRealLevelField('Uin1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uin2')
ABILITY_RLF_DURATION = ConvertAbilityRealLevelField('Uin2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uin3')
ABILITY_RLF_IMPACT_DELAY = ConvertAbilityRealLevelField('Uin3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocl1')
ABILITY_RLF_DAMAGE_PER_TARGET_OCL1 = ConvertAbilityRealLevelField('Ocl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ocl3')
ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET = ConvertAbilityRealLevelField('Ocl3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oeq1')
ABILITY_RLF_EFFECT_DELAY_OEQ1 = ConvertAbilityRealLevelField('Oeq1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oeq2')
ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS = ConvertAbilityRealLevelField('Oeq2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oeq3')
ABILITY_RLF_UNITS_SLOWED_PERCENT = ConvertAbilityRealLevelField('Oeq3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oeq4')
ABILITY_RLF_FINAL_AREA_OEQ4 = ConvertAbilityRealLevelField('Oeq4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eer1')
ABILITY_RLF_DAMAGE_PER_SECOND_EER1 = ConvertAbilityRealLevelField('Eer1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eah1')
ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS = ConvertAbilityRealLevelField('Eah1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Etq1')
ABILITY_RLF_LIFE_HEALED = ConvertAbilityRealLevelField('Etq1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Etq2')
ABILITY_RLF_HEAL_INTERVAL = ConvertAbilityRealLevelField('Etq2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Etq3')
ABILITY_RLF_BUILDING_REDUCTION_ETQ3 = ConvertAbilityRealLevelField('Etq3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Etq4')
ABILITY_RLF_INITIAL_IMMUNITY_DURATION = ConvertAbilityRealLevelField('Etq4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Udd1')
ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT = ConvertAbilityRealLevelField('Udd1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Udd2')
ABILITY_RLF_BUILDING_REDUCTION_UDD2 = ConvertAbilityRealLevelField('Udd2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ufa1')
ABILITY_RLF_ARMOR_DURATION = ConvertAbilityRealLevelField('Ufa1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ufa2')
ABILITY_RLF_ARMOR_BONUS_UFA2 = ConvertAbilityRealLevelField('Ufa2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ufn1')
ABILITY_RLF_AREA_OF_EFFECT_DAMAGE = ConvertAbilityRealLevelField('Ufn1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ufn2')
ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2 = ConvertAbilityRealLevelField('Ufn2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfa1')
ABILITY_RLF_DAMAGE_BONUS_HFA1 = ConvertAbilityRealLevelField('Hfa1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esf1')
ABILITY_RLF_DAMAGE_DEALT_ESF1 = ConvertAbilityRealLevelField('Esf1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esf2')
ABILITY_RLF_DAMAGE_INTERVAL_ESF2 = ConvertAbilityRealLevelField('Esf2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esf3')
ABILITY_RLF_BUILDING_REDUCTION_ESF3 = ConvertAbilityRealLevelField('Esf3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ear1')
ABILITY_RLF_DAMAGE_BONUS_PERCENT = ConvertAbilityRealLevelField('Ear1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hav1')
ABILITY_RLF_DEFENSE_BONUS_HAV1 = ConvertAbilityRealLevelField('Hav1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hav2')
ABILITY_RLF_HIT_POINT_BONUS = ConvertAbilityRealLevelField('Hav2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hav3')
ABILITY_RLF_DAMAGE_BONUS_HAV3 = ConvertAbilityRealLevelField('Hav3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hav4')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4 = ConvertAbilityRealLevelField('Hav4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbh1')
ABILITY_RLF_CHANCE_TO_BASH = ConvertAbilityRealLevelField('Hbh1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbh2')
ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2 = ConvertAbilityRealLevelField('Hbh2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbh3')
ABILITY_RLF_DAMAGE_BONUS_HBH3 = ConvertAbilityRealLevelField('Hbh3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbh4')
ABILITY_RLF_CHANCE_TO_MISS_HBH4 = ConvertAbilityRealLevelField('Hbh4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Htb1')
ABILITY_RLF_DAMAGE_HTB1 = ConvertAbilityRealLevelField('Htb1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Htc1')
ABILITY_RLF_AOE_DAMAGE = ConvertAbilityRealLevelField('Htc1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Htc2')
ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2 = ConvertAbilityRealLevelField('Htc2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Htc3')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3 = ConvertAbilityRealLevelField('Htc3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Htc4')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4 = ConvertAbilityRealLevelField('Htc4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Had1')
ABILITY_RLF_ARMOR_BONUS_HAD1 = ConvertAbilityRealLevelField('Had1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hhb1')
ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1 = ConvertAbilityRealLevelField('Hhb1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hca1')
ABILITY_RLF_EXTRA_DAMAGE_HCA1 = ConvertAbilityRealLevelField('Hca1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hca2')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2 = ConvertAbilityRealLevelField('Hca2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hca3')
ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3 = ConvertAbilityRealLevelField('Hca3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oae1')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1 = ConvertAbilityRealLevelField('Oae1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oae2')
ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2 = ConvertAbilityRealLevelField('Oae2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ore1')
ABILITY_RLF_REINCARNATION_DELAY = ConvertAbilityRealLevelField('Ore1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Osh1')
ABILITY_RLF_DAMAGE_OSH1 = ConvertAbilityRealLevelField('Osh1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Osh2')
ABILITY_RLF_MAXIMUM_DAMAGE_OSH2 = ConvertAbilityRealLevelField('Osh2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Osh3')
ABILITY_RLF_DISTANCE_OSH3 = ConvertAbilityRealLevelField('Osh3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Osh4')
ABILITY_RLF_FINAL_AREA_OSH4 = ConvertAbilityRealLevelField('Osh4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nfd1')
ABILITY_RLF_GRAPHIC_DELAY_NFD1 = ConvertAbilityRealLevelField('Nfd1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nfd2')
ABILITY_RLF_GRAPHIC_DURATION_NFD2 = ConvertAbilityRealLevelField('Nfd2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nfd3')
ABILITY_RLF_DAMAGE_NFD3 = ConvertAbilityRealLevelField('Nfd3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ams1')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1 = ConvertAbilityRealLevelField('Ams1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ams2')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2 = ConvertAbilityRealLevelField('Ams2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Apl1')
ABILITY_RLF_AURA_DURATION = ConvertAbilityRealLevelField('Apl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Apl2')
ABILITY_RLF_DAMAGE_PER_SECOND_APL2 = ConvertAbilityRealLevelField('Apl2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Apl3')
ABILITY_RLF_DURATION_OF_PLAGUE_WARD = ConvertAbilityRealLevelField('Apl3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Oar1')
ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED = ConvertAbilityRealLevelField('Oar1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Akb1')
ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1 = ConvertAbilityRealLevelField('Akb1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Adm1')
ABILITY_RLF_MANA_LOSS_ADM1 = ConvertAbilityRealLevelField('Adm1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Adm2')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2 = ConvertAbilityRealLevelField('Adm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Bli1')
ABILITY_RLF_EXPANSION_AMOUNT = ConvertAbilityRealLevelField('Bli1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Bgm2')
ABILITY_RLF_INTERVAL_DURATION_BGM2 = ConvertAbilityRealLevelField('Bgm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Bgm4')
ABILITY_RLF_RADIUS_OF_MINING_RING = ConvertAbilityRealLevelField('Bgm4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Blo1')
ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1 = ConvertAbilityRealLevelField('Blo1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Blo2')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2 = ConvertAbilityRealLevelField('Blo2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Blo3')
ABILITY_RLF_SCALING_FACTOR = ConvertAbilityRealLevelField('Blo3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Can1')
ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1 = ConvertAbilityRealLevelField('Can1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Can2')
ABILITY_RLF_MAX_HIT_POINTS = ConvertAbilityRealLevelField('Can2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dev2')
ABILITY_RLF_DAMAGE_PER_SECOND_DEV2 = ConvertAbilityRealLevelField('Dev2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Chd1')
ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1 = ConvertAbilityRealLevelField('Chd1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Chd2')
ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2 = ConvertAbilityRealLevelField('Chd2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Chd3')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3 = ConvertAbilityRealLevelField('Chd3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cri1')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1 = ConvertAbilityRealLevelField('Cri1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cri2')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2 = ConvertAbilityRealLevelField('Cri2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cri3')
ABILITY_RLF_DAMAGE_REDUCTION_CRI3 = ConvertAbilityRealLevelField('Cri3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Crs1')
ABILITY_RLF_CHANCE_TO_MISS_CRS = ConvertAbilityRealLevelField('Crs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dda1')
ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1 = ConvertAbilityRealLevelField('Dda1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dda2')
ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2 = ConvertAbilityRealLevelField('Dda2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dda3')
ABILITY_RLF_PARTIAL_DAMAGE_RADIUS = ConvertAbilityRealLevelField('Dda3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dda4')
ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField('Dda4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sds1')
ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1 = ConvertAbilityRealLevelField('Sds1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uco5')
ABILITY_RLF_MAX_DAMAGE_UCO5 = ConvertAbilityRealLevelField('Uco5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uco6')
ABILITY_RLF_MOVE_SPEED_BONUS_UCO6 = ConvertAbilityRealLevelField('Uco6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def1')
ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1 = ConvertAbilityRealLevelField('Def1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def2')
ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2 = ConvertAbilityRealLevelField('Def2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def3')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3 = ConvertAbilityRealLevelField('Def3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def4')
ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4 = ConvertAbilityRealLevelField('Def4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def5')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5 = ConvertAbilityRealLevelField('Def5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def6')
ABILITY_RLF_CHANCE_TO_DEFLECT = ConvertAbilityRealLevelField('Def6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def7')
ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING = ConvertAbilityRealLevelField('Def7') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Def8')
ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS = ConvertAbilityRealLevelField('Def8') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eat1')
ABILITY_RLF_RIP_DELAY = ConvertAbilityRealLevelField('Eat1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eat2')
ABILITY_RLF_EAT_DELAY = ConvertAbilityRealLevelField('Eat2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Eat3')
ABILITY_RLF_HIT_POINTS_GAINED_EAT3 = ConvertAbilityRealLevelField('Eat3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ens1')
ABILITY_RLF_AIR_UNIT_LOWER_DURATION = ConvertAbilityRealLevelField('Ens1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ens2')
ABILITY_RLF_AIR_UNIT_HEIGHT = ConvertAbilityRealLevelField('Ens2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ens3')
ABILITY_RLF_MELEE_ATTACK_RANGE = ConvertAbilityRealLevelField('Ens3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Egm2')
ABILITY_RLF_INTERVAL_DURATION_EGM2 = ConvertAbilityRealLevelField('Egm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Fla2')
ABILITY_RLF_EFFECT_DELAY_FLA2 = ConvertAbilityRealLevelField('Fla2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Gld2')
ABILITY_RLF_MINING_DURATION = ConvertAbilityRealLevelField('Gld2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Gyd2')
ABILITY_RLF_RADIUS_OF_GRAVESTONES = ConvertAbilityRealLevelField('Gyd2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Gyd3')
ABILITY_RLF_RADIUS_OF_CORPSES = ConvertAbilityRealLevelField('Gyd3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hea1')
ABILITY_RLF_HIT_POINTS_GAINED_HEA1 = ConvertAbilityRealLevelField('Hea1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Inf1')
ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1 = ConvertAbilityRealLevelField('Inf1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Inf3')
ABILITY_RLF_AUTOCAST_RANGE = ConvertAbilityRealLevelField('Inf3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Inf4')
ABILITY_RLF_LIFE_REGEN_RATE = ConvertAbilityRealLevelField('Inf4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Lit1')
ABILITY_RLF_GRAPHIC_DELAY_LIT1 = ConvertAbilityRealLevelField('Lit1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Lit2')
ABILITY_RLF_GRAPHIC_DURATION_LIT2 = ConvertAbilityRealLevelField('Lit2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Lsh1')
ABILITY_RLF_DAMAGE_PER_SECOND_LSH1 = ConvertAbilityRealLevelField('Lsh1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Mbt1')
ABILITY_RLF_MANA_GAINED = ConvertAbilityRealLevelField('Mbt1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Mbt2')
ABILITY_RLF_HIT_POINTS_GAINED_MBT2 = ConvertAbilityRealLevelField('Mbt2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Mbt3')
ABILITY_RLF_AUTOCAST_REQUIREMENT = ConvertAbilityRealLevelField('Mbt3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Mbt4')
ABILITY_RLF_WATER_HEIGHT = ConvertAbilityRealLevelField('Mbt4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Min1')
ABILITY_RLF_ACTIVATION_DELAY_MIN1 = ConvertAbilityRealLevelField('Min1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Min2')
ABILITY_RLF_INVISIBILITY_TRANSITION_TIME = ConvertAbilityRealLevelField('Min2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Neu1')
ABILITY_RLF_ACTIVATION_RADIUS = ConvertAbilityRealLevelField('Neu1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Arm1')
ABILITY_RLF_AMOUNT_REGENERATED = ConvertAbilityRealLevelField('Arm1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poi1')
ABILITY_RLF_DAMAGE_PER_SECOND_POI1 = ConvertAbilityRealLevelField('Poi1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poi2')
ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2 = ConvertAbilityRealLevelField('Poi2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poi3')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3 = ConvertAbilityRealLevelField('Poi3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poa1')
ABILITY_RLF_EXTRA_DAMAGE_POA1 = ConvertAbilityRealLevelField('Poa1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poa2')
ABILITY_RLF_DAMAGE_PER_SECOND_POA2 = ConvertAbilityRealLevelField('Poa2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poa3')
ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3 = ConvertAbilityRealLevelField('Poa3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Poa4')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4 = ConvertAbilityRealLevelField('Poa4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Pos2')
ABILITY_RLF_DAMAGE_AMPLIFICATION = ConvertAbilityRealLevelField('Pos2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('War1')
ABILITY_RLF_CHANCE_TO_STOMP_PERCENT = ConvertAbilityRealLevelField('War1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('War2')
ABILITY_RLF_DAMAGE_DEALT_WAR2 = ConvertAbilityRealLevelField('War2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('War3')
ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3 = ConvertAbilityRealLevelField('War3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('War4')
ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4 = ConvertAbilityRealLevelField('War4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Prg3')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3 = ConvertAbilityRealLevelField('Prg3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Prg4')
ABILITY_RLF_UNIT_PAUSE_DURATION = ConvertAbilityRealLevelField('Prg4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Prg5')
ABILITY_RLF_HERO_PAUSE_DURATION = ConvertAbilityRealLevelField('Prg5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rej1')
ABILITY_RLF_HIT_POINTS_GAINED_REJ1 = ConvertAbilityRealLevelField('Rej1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rej2')
ABILITY_RLF_MANA_POINTS_GAINED_REJ2 = ConvertAbilityRealLevelField('Rej2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rpb3')
ABILITY_RLF_MINIMUM_LIFE_REQUIRED = ConvertAbilityRealLevelField('Rpb3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rpb4')
ABILITY_RLF_MINIMUM_MANA_REQUIRED = ConvertAbilityRealLevelField('Rpb4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rep1')
ABILITY_RLF_REPAIR_COST_RATIO = ConvertAbilityRealLevelField('Rep1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rep2')
ABILITY_RLF_REPAIR_TIME_RATIO = ConvertAbilityRealLevelField('Rep2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rep3')
ABILITY_RLF_POWERBUILD_COST = ConvertAbilityRealLevelField('Rep3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rep4')
ABILITY_RLF_POWERBUILD_RATE = ConvertAbilityRealLevelField('Rep4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Rep5')
ABILITY_RLF_NAVAL_RANGE_BONUS = ConvertAbilityRealLevelField('Rep5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Roa1')
ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1 = ConvertAbilityRealLevelField('Roa1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Roa3')
ABILITY_RLF_LIFE_REGENERATION_RATE = ConvertAbilityRealLevelField('Roa3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Roa4')
ABILITY_RLF_MANA_REGEN = ConvertAbilityRealLevelField('Roa4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nbr1')
ABILITY_RLF_DAMAGE_INCREASE = ConvertAbilityRealLevelField('Nbr1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sal1')
ABILITY_RLF_SALVAGE_COST_RATIO = ConvertAbilityRealLevelField('Sal1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esn1')
ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS = ConvertAbilityRealLevelField('Esn1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esn2')
ABILITY_RLF_HOVERING_SIGHT_RADIUS = ConvertAbilityRealLevelField('Esn2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esn3')
ABILITY_RLF_HOVERING_HEIGHT = ConvertAbilityRealLevelField('Esn3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esn5')
ABILITY_RLF_DURATION_OF_OWLS = ConvertAbilityRealLevelField('Esn5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Shm1')
ABILITY_RLF_FADE_DURATION = ConvertAbilityRealLevelField('Shm1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Shm2')
ABILITY_RLF_DAY_NIGHT_DURATION = ConvertAbilityRealLevelField('Shm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Shm3')
ABILITY_RLF_ACTION_DURATION = ConvertAbilityRealLevelField('Shm3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Slo1')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1 = ConvertAbilityRealLevelField('Slo1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Slo2')
ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2 = ConvertAbilityRealLevelField('Slo2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Spo1')
ABILITY_RLF_DAMAGE_PER_SECOND_SPO1 = ConvertAbilityRealLevelField('Spo1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Spo2')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2 = ConvertAbilityRealLevelField('Spo2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Spo3')
ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3 = ConvertAbilityRealLevelField('Spo3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sta1')
ABILITY_RLF_ACTIVATION_DELAY_STA1 = ConvertAbilityRealLevelField('Sta1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sta2')
ABILITY_RLF_DETECTION_RADIUS_STA2 = ConvertAbilityRealLevelField('Sta2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sta3')
ABILITY_RLF_DETONATION_RADIUS = ConvertAbilityRealLevelField('Sta3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Sta4')
ABILITY_RLF_STUN_DURATION_STA4 = ConvertAbilityRealLevelField('Sta4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uhf1')
ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT = ConvertAbilityRealLevelField('Uhf1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uhf2')
ABILITY_RLF_DAMAGE_PER_SECOND_UHF2 = ConvertAbilityRealLevelField('Uhf2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wha1')
ABILITY_RLF_LUMBER_PER_INTERVAL = ConvertAbilityRealLevelField('Wha1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wha3')
ABILITY_RLF_ART_ATTACHMENT_HEIGHT = ConvertAbilityRealLevelField('Wha3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wrp1')
ABILITY_RLF_TELEPORT_AREA_WIDTH = ConvertAbilityRealLevelField('Wrp1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wrp2')
ABILITY_RLF_TELEPORT_AREA_HEIGHT = ConvertAbilityRealLevelField('Wrp2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ivam')
ABILITY_RLF_LIFE_STOLEN_PER_ATTACK = ConvertAbilityRealLevelField('Ivam') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Idam')
ABILITY_RLF_DAMAGE_BONUS_IDAM = ConvertAbilityRealLevelField('Idam') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Iob2')
ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT = ConvertAbilityRealLevelField('Iob2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Iob3')
ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT = ConvertAbilityRealLevelField('Iob3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Iob4')
ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT = ConvertAbilityRealLevelField('Iob4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Idel')
ABILITY_RLF_DELAY_FOR_TARGET_EFFECT = ConvertAbilityRealLevelField('Idel') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Iild')
ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL = ConvertAbilityRealLevelField('Iild') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Iilw')
ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER = ConvertAbilityRealLevelField('Iilw') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Imrp')
ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL = ConvertAbilityRealLevelField('Imrp') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ispi')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI = ConvertAbilityRealLevelField('Ispi') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Idps')
ABILITY_RLF_DAMAGE_PER_SECOND_IDPS = ConvertAbilityRealLevelField('Idps') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cac1')
ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1 = ConvertAbilityRealLevelField('Cac1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cor1')
ABILITY_RLF_DAMAGE_PER_SECOND_COR1 = ConvertAbilityRealLevelField('Cor1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Isx1')
ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1 = ConvertAbilityRealLevelField('Isx1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wrs1')
ABILITY_RLF_DAMAGE_WRS1 = ConvertAbilityRealLevelField('Wrs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Wrs2')
ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE = ConvertAbilityRealLevelField('Wrs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ctc1')
ABILITY_RLF_DAMAGE_CTC1 = ConvertAbilityRealLevelField('Ctc1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ctc2')
ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET = ConvertAbilityRealLevelField('Ctc2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ctc3')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3 = ConvertAbilityRealLevelField('Ctc3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ctc4')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4 = ConvertAbilityRealLevelField('Ctc4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ctb1')
ABILITY_RLF_DAMAGE_CTB1 = ConvertAbilityRealLevelField('Ctb1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uds2')
ABILITY_RLF_CASTING_DELAY_SECONDS = ConvertAbilityRealLevelField('Uds2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dtn1')
ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1 = ConvertAbilityRealLevelField('Dtn1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Dtn2')
ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2 = ConvertAbilityRealLevelField('Dtn2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ivs1')
ABILITY_RLF_TRANSITION_TIME_SECONDS = ConvertAbilityRealLevelField('Ivs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nmr1')
ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1 = ConvertAbilityRealLevelField('Nmr1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ssk1')
ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT = ConvertAbilityRealLevelField('Ssk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ssk2')
ABILITY_RLF_MINIMUM_DAMAGE = ConvertAbilityRealLevelField('Ssk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ssk3')
ABILITY_RLF_IGNORED_DAMAGE = ConvertAbilityRealLevelField('Ssk3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs1')
ABILITY_RLF_FULL_DAMAGE_DEALT = ConvertAbilityRealLevelField('Hfs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs2')
ABILITY_RLF_FULL_DAMAGE_INTERVAL = ConvertAbilityRealLevelField('Hfs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs3')
ABILITY_RLF_HALF_DAMAGE_DEALT = ConvertAbilityRealLevelField('Hfs3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs4')
ABILITY_RLF_HALF_DAMAGE_INTERVAL = ConvertAbilityRealLevelField('Hfs4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs5')
ABILITY_RLF_BUILDING_REDUCTION_HFS5 = ConvertAbilityRealLevelField('Hfs5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hfs6')
ABILITY_RLF_MAXIMUM_DAMAGE_HFS6 = ConvertAbilityRealLevelField('Hfs6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nms1')
ABILITY_RLF_MANA_PER_HIT_POINT = ConvertAbilityRealLevelField('Nms1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nms2')
ABILITY_RLF_DAMAGE_ABSORBED_PERCENT = ConvertAbilityRealLevelField('Nms2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uim1')
ABILITY_RLF_WAVE_DISTANCE = ConvertAbilityRealLevelField('Uim1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uim2')
ABILITY_RLF_WAVE_TIME_SECONDS = ConvertAbilityRealLevelField('Uim2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uim3')
ABILITY_RLF_DAMAGE_DEALT_UIM3 = ConvertAbilityRealLevelField('Uim3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uim4')
ABILITY_RLF_AIR_TIME_SECONDS_UIM4 = ConvertAbilityRealLevelField('Uim4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uls2')
ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS = ConvertAbilityRealLevelField('Uls2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uls4')
ABILITY_RLF_DAMAGE_RETURN_FACTOR = ConvertAbilityRealLevelField('Uls4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uls5')
ABILITY_RLF_DAMAGE_RETURN_THRESHOLD = ConvertAbilityRealLevelField('Uls5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uts1')
ABILITY_RLF_RETURNED_DAMAGE_FACTOR = ConvertAbilityRealLevelField('Uts1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uts2')
ABILITY_RLF_RECEIVED_DAMAGE_FACTOR = ConvertAbilityRealLevelField('Uts2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Uts3')
ABILITY_RLF_DEFENSE_BONUS_UTS3 = ConvertAbilityRealLevelField('Uts3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nba1')
ABILITY_RLF_DAMAGE_BONUS_NBA1 = ConvertAbilityRealLevelField('Nba1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nba3')
ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3 = ConvertAbilityRealLevelField('Nba3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cmg2')
ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT = ConvertAbilityRealLevelField('Cmg2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Cmg3')
ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE = ConvertAbilityRealLevelField('Cmg3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr1')
ABILITY_RLF_HIT_POINTS_DRAINED = ConvertAbilityRealLevelField('Ndr1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr2')
ABILITY_RLF_MANA_POINTS_DRAINED = ConvertAbilityRealLevelField('Ndr2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr3')
ABILITY_RLF_DRAIN_INTERVAL_SECONDS = ConvertAbilityRealLevelField('Ndr3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr4')
ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField('Ndr4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr5')
ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND = ConvertAbilityRealLevelField('Ndr5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr6')
ABILITY_RLF_BONUS_LIFE_FACTOR = ConvertAbilityRealLevelField('Ndr6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr7')
ABILITY_RLF_BONUS_LIFE_DECAY = ConvertAbilityRealLevelField('Ndr7') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr8')
ABILITY_RLF_BONUS_MANA_FACTOR = ConvertAbilityRealLevelField('Ndr8') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndr9')
ABILITY_RLF_BONUS_MANA_DECAY = ConvertAbilityRealLevelField('Ndr9') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsi2')
ABILITY_RLF_CHANCE_TO_MISS_PERCENT = ConvertAbilityRealLevelField('Nsi2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsi3')
ABILITY_RLF_MOVEMENT_SPEED_MODIFIER = ConvertAbilityRealLevelField('Nsi3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsi4')
ABILITY_RLF_ATTACK_SPEED_MODIFIER = ConvertAbilityRealLevelField('Nsi4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tdg1')
ABILITY_RLF_DAMAGE_PER_SECOND_TDG1 = ConvertAbilityRealLevelField('Tdg1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tdg2')
ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2 = ConvertAbilityRealLevelField('Tdg2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tdg3')
ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField('Tdg3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tdg4')
ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4 = ConvertAbilityRealLevelField('Tdg4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tdg5')
ABILITY_RLF_SMALL_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField('Tdg5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tsp1')
ABILITY_RLF_AIR_TIME_SECONDS_TSP1 = ConvertAbilityRealLevelField('Tsp1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tsp2')
ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS = ConvertAbilityRealLevelField('Tsp2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nbf5')
ABILITY_RLF_DAMAGE_PER_SECOND_NBF5 = ConvertAbilityRealLevelField('Nbf5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ebl1')
ABILITY_RLF_MAXIMUM_RANGE = ConvertAbilityRealLevelField('Ebl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ebl2')
ABILITY_RLF_MINIMUM_RANGE = ConvertAbilityRealLevelField('Ebl2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Efk1')
ABILITY_RLF_DAMAGE_PER_TARGET_EFK1 = ConvertAbilityRealLevelField('Efk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Efk2')
ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE = ConvertAbilityRealLevelField('Efk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Efk4')
ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT = ConvertAbilityRealLevelField('Efk4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esh1')
ABILITY_RLF_DECAYING_DAMAGE = ConvertAbilityRealLevelField('Esh1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esh2')
ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2 = ConvertAbilityRealLevelField('Esh2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esh3')
ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3 = ConvertAbilityRealLevelField('Esh3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esh4')
ABILITY_RLF_DECAY_POWER = ConvertAbilityRealLevelField('Esh4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Esh5')
ABILITY_RLF_INITIAL_DAMAGE_ESH5 = ConvertAbilityRealLevelField('Esh5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('abs1')
ABILITY_RLF_MAXIMUM_LIFE_ABSORBED = ConvertAbilityRealLevelField('abs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('abs2')
ABILITY_RLF_MAXIMUM_MANA_ABSORBED = ConvertAbilityRealLevelField('abs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('bsk1')
ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1 = ConvertAbilityRealLevelField('bsk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('bsk2')
ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2 = ConvertAbilityRealLevelField('bsk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('bsk3')
ABILITY_RLF_DAMAGE_TAKEN_INCREASE = ConvertAbilityRealLevelField('bsk3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('dvm1')
ABILITY_RLF_LIFE_PER_UNIT = ConvertAbilityRealLevelField('dvm1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('dvm2')
ABILITY_RLF_MANA_PER_UNIT = ConvertAbilityRealLevelField('dvm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('dvm3')
ABILITY_RLF_LIFE_PER_BUFF = ConvertAbilityRealLevelField('dvm3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('dvm4')
ABILITY_RLF_MANA_PER_BUFF = ConvertAbilityRealLevelField('dvm4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('dvm5')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5 = ConvertAbilityRealLevelField('dvm5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fak1')
ABILITY_RLF_DAMAGE_BONUS_FAK1 = ConvertAbilityRealLevelField('fak1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fak2')
ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2 = ConvertAbilityRealLevelField('fak2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fak3')
ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3 = ConvertAbilityRealLevelField('fak3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fak4')
ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4 = ConvertAbilityRealLevelField('fak4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fak5')
ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5 = ConvertAbilityRealLevelField('fak5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('liq1')
ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND = ConvertAbilityRealLevelField('liq1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('liq2')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2 = ConvertAbilityRealLevelField('liq2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('liq3')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3 = ConvertAbilityRealLevelField('liq3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mim1')
ABILITY_RLF_MAGIC_DAMAGE_FACTOR = ConvertAbilityRealLevelField('mim1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mfl1')
ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField('mfl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mfl2')
ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT = ConvertAbilityRealLevelField('mfl2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mfl3')
ABILITY_RLF_UNIT_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField('mfl3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mfl4')
ABILITY_RLF_HERO_MAXIMUM_DAMAGE = ConvertAbilityRealLevelField('mfl4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mfl5')
ABILITY_RLF_DAMAGE_COOLDOWN = ConvertAbilityRealLevelField('mfl5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('spl1')
ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1 = ConvertAbilityRealLevelField('spl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('irl1')
ABILITY_RLF_LIFE_REGENERATED = ConvertAbilityRealLevelField('irl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('irl2')
ABILITY_RLF_MANA_REGENERATED = ConvertAbilityRealLevelField('irl2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('idc1')
ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1 = ConvertAbilityRealLevelField('idc1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('idc2')
ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2 = ConvertAbilityRealLevelField('idc2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('imo2')
ABILITY_RLF_ACTIVATION_DELAY_IMO2 = ConvertAbilityRealLevelField('imo2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('imo3')
ABILITY_RLF_LURE_INTERVAL_SECONDS = ConvertAbilityRealLevelField('imo3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('isr1')
ABILITY_RLF_DAMAGE_BONUS_ISR1 = ConvertAbilityRealLevelField('isr1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('isr2')
ABILITY_RLF_DAMAGE_REDUCTION_ISR2 = ConvertAbilityRealLevelField('isr2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ipv1')
ABILITY_RLF_DAMAGE_BONUS_IPV1 = ConvertAbilityRealLevelField('ipv1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ipv2')
ABILITY_RLF_LIFE_STEAL_AMOUNT = ConvertAbilityRealLevelField('ipv2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ast1')
ABILITY_RLF_LIFE_RESTORED_FACTOR = ConvertAbilityRealLevelField('ast1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('ast2')
ABILITY_RLF_MANA_RESTORED_FACTOR = ConvertAbilityRealLevelField('ast2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('gra1')
ABILITY_RLF_ATTACH_DELAY = ConvertAbilityRealLevelField('gra1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('gra2')
ABILITY_RLF_REMOVE_DELAY = ConvertAbilityRealLevelField('gra2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsa2')
ABILITY_RLF_HERO_REGENERATION_DELAY = ConvertAbilityRealLevelField('Nsa2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsa3')
ABILITY_RLF_UNIT_REGENERATION_DELAY = ConvertAbilityRealLevelField('Nsa3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsa4')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4 = ConvertAbilityRealLevelField('Nsa4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsa5')
ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5 = ConvertAbilityRealLevelField('Nsa5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ixs1')
ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1 = ConvertAbilityRealLevelField('Ixs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ixs2')
ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2 = ConvertAbilityRealLevelField('Ixs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Npa6')
ABILITY_RLF_SUMMONED_UNIT_DURATION = ConvertAbilityRealLevelField('Npa6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nse1')
ABILITY_RLF_SHIELD_COOLDOWN_TIME = ConvertAbilityRealLevelField('Nse1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndo1')
ABILITY_RLF_DAMAGE_PER_SECOND_NDO1 = ConvertAbilityRealLevelField('Ndo1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ndo3')
ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3 = ConvertAbilityRealLevelField('Ndo3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('flk1')
ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1 = ConvertAbilityRealLevelField('flk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('flk2')
ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2 = ConvertAbilityRealLevelField('flk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('flk3')
ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3 = ConvertAbilityRealLevelField('flk3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('flk4')
ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT = ConvertAbilityRealLevelField('flk4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('flk5')
ABILITY_RLF_SMALL_DAMAGE_AMOUNT = ConvertAbilityRealLevelField('flk5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbn1')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1 = ConvertAbilityRealLevelField('Hbn1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Hbn2')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2 = ConvertAbilityRealLevelField('Hbn2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fbk1')
ABILITY_RLF_MAX_MANA_DRAINED_UNITS = ConvertAbilityRealLevelField('fbk1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fbk2')
ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT = ConvertAbilityRealLevelField('fbk2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fbk3')
ABILITY_RLF_MAX_MANA_DRAINED_HEROS = ConvertAbilityRealLevelField('fbk3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fbk4')
ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT = ConvertAbilityRealLevelField('fbk4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('fbk5')
ABILITY_RLF_SUMMONED_DAMAGE = ConvertAbilityRealLevelField('fbk5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('nca1')
ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1 = ConvertAbilityRealLevelField('nca1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('pxf1')
ABILITY_RLF_INITIAL_DAMAGE_PXF1 = ConvertAbilityRealLevelField('pxf1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('pxf2')
ABILITY_RLF_DAMAGE_PER_SECOND_PXF2 = ConvertAbilityRealLevelField('pxf2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('mls1')
ABILITY_RLF_DAMAGE_PER_SECOND_MLS1 = ConvertAbilityRealLevelField('mls1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nst2')
ABILITY_RLF_BEAST_COLLISION_RADIUS = ConvertAbilityRealLevelField('Nst2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nst3')
ABILITY_RLF_DAMAGE_AMOUNT_NST3 = ConvertAbilityRealLevelField('Nst3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nst4')
ABILITY_RLF_DAMAGE_RADIUS = ConvertAbilityRealLevelField('Nst4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nst5')
ABILITY_RLF_DAMAGE_DELAY = ConvertAbilityRealLevelField('Nst5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncl1')
ABILITY_RLF_FOLLOW_THROUGH_TIME = ConvertAbilityRealLevelField('Ncl1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncl4')
ABILITY_RLF_ART_DURATION = ConvertAbilityRealLevelField('Ncl4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nab1')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1 = ConvertAbilityRealLevelField('Nab1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nab2')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2 = ConvertAbilityRealLevelField('Nab2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nab4')
ABILITY_RLF_PRIMARY_DAMAGE = ConvertAbilityRealLevelField('Nab4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nab5')
ABILITY_RLF_SECONDARY_DAMAGE = ConvertAbilityRealLevelField('Nab5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nab6')
ABILITY_RLF_DAMAGE_INTERVAL_NAB6 = ConvertAbilityRealLevelField('Nab6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ntm1')
ABILITY_RLF_GOLD_COST_FACTOR = ConvertAbilityRealLevelField('Ntm1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ntm2')
ABILITY_RLF_LUMBER_COST_FACTOR = ConvertAbilityRealLevelField('Ntm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Neg1')
ABILITY_RLF_MOVE_SPEED_BONUS_NEG1 = ConvertAbilityRealLevelField('Neg1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Neg2')
ABILITY_RLF_DAMAGE_BONUS_NEG2 = ConvertAbilityRealLevelField('Neg2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncs1')
ABILITY_RLF_DAMAGE_AMOUNT_NCS1 = ConvertAbilityRealLevelField('Ncs1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncs2')
ABILITY_RLF_DAMAGE_INTERVAL_NCS2 = ConvertAbilityRealLevelField('Ncs2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncs4')
ABILITY_RLF_MAX_DAMAGE_NCS4 = ConvertAbilityRealLevelField('Ncs4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncs5')
ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5 = ConvertAbilityRealLevelField('Ncs5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Ncs6')
ABILITY_RLF_EFFECT_DURATION = ConvertAbilityRealLevelField('Ncs6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsy1')
ABILITY_RLF_SPAWN_INTERVAL_NSY1 = ConvertAbilityRealLevelField('Nsy1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsy3')
ABILITY_RLF_SPAWN_UNIT_DURATION = ConvertAbilityRealLevelField('Nsy3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsy4')
ABILITY_RLF_SPAWN_UNIT_OFFSET = ConvertAbilityRealLevelField('Nsy4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nsy5')
ABILITY_RLF_LEASH_RANGE_NSY5 = ConvertAbilityRealLevelField('Nsy5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nfy1')
ABILITY_RLF_SPAWN_INTERVAL_NFY1 = ConvertAbilityRealLevelField('Nfy1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nfy2')
ABILITY_RLF_LEASH_RANGE_NFY2 = ConvertAbilityRealLevelField('Nfy2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nde1')
ABILITY_RLF_CHANCE_TO_DEMOLISH = ConvertAbilityRealLevelField('Nde1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nde2')
ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS = ConvertAbilityRealLevelField('Nde2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nde3')
ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS = ConvertAbilityRealLevelField('Nde3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nde4')
ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES = ConvertAbilityRealLevelField('Nde4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic1')
ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER = ConvertAbilityRealLevelField('Nic1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic2')
ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT = ConvertAbilityRealLevelField('Nic2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic3')
ABILITY_RLF_DEATH_DAMAGE_FULL_AREA = ConvertAbilityRealLevelField('Nic3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic4')
ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT = ConvertAbilityRealLevelField('Nic4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic5')
ABILITY_RLF_DEATH_DAMAGE_HALF_AREA = ConvertAbilityRealLevelField('Nic5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nic6')
ABILITY_RLF_DEATH_DAMAGE_DELAY = ConvertAbilityRealLevelField('Nic6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nso1')
ABILITY_RLF_DAMAGE_AMOUNT_NSO1 = ConvertAbilityRealLevelField('Nso1') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nso2')
ABILITY_RLF_DAMAGE_PERIOD = ConvertAbilityRealLevelField('Nso2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nso3')
ABILITY_RLF_DAMAGE_PENALTY = ConvertAbilityRealLevelField('Nso3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nso4')
ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4 = ConvertAbilityRealLevelField('Nso4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nso5')
ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5 = ConvertAbilityRealLevelField('Nso5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nlm2')
ABILITY_RLF_SPLIT_DELAY = ConvertAbilityRealLevelField('Nlm2') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nlm4')
ABILITY_RLF_MAX_HITPOINT_FACTOR = ConvertAbilityRealLevelField('Nlm4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nlm5')
ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS = ConvertAbilityRealLevelField('Nlm5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nvc3')
ABILITY_RLF_WAVE_INTERVAL = ConvertAbilityRealLevelField('Nvc3') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nvc4')
ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4 = ConvertAbilityRealLevelField('Nvc4') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nvc5')
ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5 = ConvertAbilityRealLevelField('Nvc5') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Nvc6')
ABILITY_RLF_HALF_DAMAGE_FACTOR = ConvertAbilityRealLevelField('Nvc6') ---@type abilityreallevelfield


---ConvertAbilityRealLevelField('Tau5')
ABILITY_RLF_INTERVAL_BETWEEN_PULSES = ConvertAbilityRealLevelField('Tau5') ---@type abilityreallevelfield


---ConvertAbilityBooleanLevelField('Hab2')
ABILITY_BLF_PERCENT_BONUS_HAB2 = ConvertAbilityBooleanLevelField('Hab2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Hmt3')
ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3 = ConvertAbilityBooleanLevelField('Hmt3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ocr5')
ABILITY_BLF_NEVER_MISS_OCR5 = ConvertAbilityBooleanLevelField('Ocr5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ocr6')
ABILITY_BLF_EXCLUDE_ITEM_DAMAGE = ConvertAbilityBooleanLevelField('Ocr6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Owk4')
ABILITY_BLF_BACKSTAB_DAMAGE = ConvertAbilityBooleanLevelField('Owk4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Uan3')
ABILITY_BLF_INHERIT_UPGRADES_UAN3 = ConvertAbilityBooleanLevelField('Uan3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Udp3')
ABILITY_BLF_MANA_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField('Udp3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Udp4')
ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT = ConvertAbilityBooleanLevelField('Udp4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Udp5')
ABILITY_BLF_LEAVE_TARGET_ALIVE = ConvertAbilityBooleanLevelField('Udp5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Uau3')
ABILITY_BLF_PERCENT_BONUS_UAU3 = ConvertAbilityBooleanLevelField('Uau3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Eah2')
ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED = ConvertAbilityBooleanLevelField('Eah2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ear2')
ABILITY_BLF_MELEE_BONUS = ConvertAbilityBooleanLevelField('Ear2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ear3')
ABILITY_BLF_RANGED_BONUS = ConvertAbilityBooleanLevelField('Ear3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ear4')
ABILITY_BLF_FLAT_BONUS = ConvertAbilityBooleanLevelField('Ear4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Hbh5')
ABILITY_BLF_NEVER_MISS_HBH5 = ConvertAbilityBooleanLevelField('Hbh5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Had2')
ABILITY_BLF_PERCENT_BONUS_HAD2 = ConvertAbilityBooleanLevelField('Had2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Hds1')
ABILITY_BLF_CAN_DEACTIVATE = ConvertAbilityBooleanLevelField('Hds1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Hre2')
ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE = ConvertAbilityBooleanLevelField('Hre2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Oar2')
ABILITY_BLF_PERCENTAGE_OAR2 = ConvertAbilityBooleanLevelField('Oar2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Btl2')
ABILITY_BLF_SUMMON_BUSY_UNITS = ConvertAbilityBooleanLevelField('Btl2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Bli2')
ABILITY_BLF_CREATES_BLIGHT = ConvertAbilityBooleanLevelField('Bli2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Sds6')
ABILITY_BLF_EXPLODES_ON_DEATH = ConvertAbilityBooleanLevelField('Sds6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Fae2')
ABILITY_BLF_ALWAYS_AUTOCAST_FAE2 = ConvertAbilityBooleanLevelField('Fae2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Mbt5')
ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT = ConvertAbilityBooleanLevelField('Mbt5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Neu3')
ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON = ConvertAbilityBooleanLevelField('Neu3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Neu4')
ABILITY_BLF_SHOW_UNIT_INDICATOR = ConvertAbilityBooleanLevelField('Neu4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ans6')
ABILITY_BLF_CHARGE_OWNING_PLAYER = ConvertAbilityBooleanLevelField('Ans6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Arm2')
ABILITY_BLF_PERCENTAGE_ARM2 = ConvertAbilityBooleanLevelField('Arm2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Pos3')
ABILITY_BLF_TARGET_IS_INVULNERABLE = ConvertAbilityBooleanLevelField('Pos3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Pos4')
ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE = ConvertAbilityBooleanLevelField('Pos4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ucb6')
ABILITY_BLF_KILL_ON_CASTER_DEATH = ConvertAbilityBooleanLevelField('Ucb6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Rej4')
ABILITY_BLF_NO_TARGET_REQUIRED_REJ4 = ConvertAbilityBooleanLevelField('Rej4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Rtn1')
ABILITY_BLF_ACCEPTS_GOLD = ConvertAbilityBooleanLevelField('Rtn1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Rtn2')
ABILITY_BLF_ACCEPTS_LUMBER = ConvertAbilityBooleanLevelField('Rtn2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Roa5')
ABILITY_BLF_PREFER_HOSTILES_ROA5 = ConvertAbilityBooleanLevelField('Roa5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Roa6')
ABILITY_BLF_PREFER_FRIENDLIES_ROA6 = ConvertAbilityBooleanLevelField('Roa6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Roo3')
ABILITY_BLF_ROOTED_TURNING = ConvertAbilityBooleanLevelField('Roo3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Slo3')
ABILITY_BLF_ALWAYS_AUTOCAST_SLO3 = ConvertAbilityBooleanLevelField('Slo3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ihid')
ABILITY_BLF_HIDE_BUTTON = ConvertAbilityBooleanLevelField('Ihid') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Itp2')
ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2 = ConvertAbilityBooleanLevelField('Itp2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Eth1')
ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS = ConvertAbilityBooleanLevelField('Eth1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Eth2')
ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField('Eth2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Gho1')
ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS = ConvertAbilityBooleanLevelField('Gho1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Gho2')
ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2 = ConvertAbilityBooleanLevelField('Gho2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Gho3')
ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS = ConvertAbilityBooleanLevelField('Gho3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ssk4')
ABILITY_BLF_INCLUDE_RANGED_DAMAGE = ConvertAbilityBooleanLevelField('Ssk4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ssk5')
ABILITY_BLF_INCLUDE_MELEE_DAMAGE = ConvertAbilityBooleanLevelField('Ssk5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('coa2')
ABILITY_BLF_MOVE_TO_PARTNER = ConvertAbilityBooleanLevelField('coa2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('cyc1')
ABILITY_BLF_CAN_BE_DISPELLED = ConvertAbilityBooleanLevelField('cyc1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('dvm6')
ABILITY_BLF_IGNORE_FRIENDLY_BUFFS = ConvertAbilityBooleanLevelField('dvm6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('inv2')
ABILITY_BLF_DROP_ITEMS_ON_DEATH = ConvertAbilityBooleanLevelField('inv2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('inv3')
ABILITY_BLF_CAN_USE_ITEMS = ConvertAbilityBooleanLevelField('inv3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('inv4')
ABILITY_BLF_CAN_GET_ITEMS = ConvertAbilityBooleanLevelField('inv4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('inv5')
ABILITY_BLF_CAN_DROP_ITEMS = ConvertAbilityBooleanLevelField('inv5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('liq4')
ABILITY_BLF_REPAIRS_ALLOWED = ConvertAbilityBooleanLevelField('liq4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('mfl6')
ABILITY_BLF_CASTER_ONLY_SPLASH = ConvertAbilityBooleanLevelField('mfl6') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('irl4')
ABILITY_BLF_NO_TARGET_REQUIRED_IRL4 = ConvertAbilityBooleanLevelField('irl4') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('irl5')
ABILITY_BLF_DISPEL_ON_ATTACK = ConvertAbilityBooleanLevelField('irl5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('ipv3')
ABILITY_BLF_AMOUNT_IS_RAW_VALUE = ConvertAbilityBooleanLevelField('ipv3') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('spb2')
ABILITY_BLF_SHARED_SPELL_COOLDOWN = ConvertAbilityBooleanLevelField('spb2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('sla1')
ABILITY_BLF_SLEEP_ONCE = ConvertAbilityBooleanLevelField('sla1') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('sla2')
ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT = ConvertAbilityBooleanLevelField('sla2') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ncl5')
ABILITY_BLF_DISABLE_OTHER_ABILITIES = ConvertAbilityBooleanLevelField('Ncl5') ---@type abilitybooleanlevelfield


---ConvertAbilityBooleanLevelField('Ntm4')
ABILITY_BLF_ALLOW_BOUNTY = ConvertAbilityBooleanLevelField('Ntm4') ---@type abilitybooleanlevelfield


---ConvertAbilityStringLevelField('aart')
ABILITY_SLF_ICON_NORMAL = ConvertAbilityStringLevelField('aart') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('acat')
ABILITY_SLF_CASTER = ConvertAbilityStringLevelField('acat') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('atat')
ABILITY_SLF_TARGET = ConvertAbilityStringLevelField('atat') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('asat')
ABILITY_SLF_SPECIAL = ConvertAbilityStringLevelField('asat') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('aeat')
ABILITY_SLF_EFFECT = ConvertAbilityStringLevelField('aeat') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('aaea')
ABILITY_SLF_AREA_EFFECT = ConvertAbilityStringLevelField('aaea') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('alig')
ABILITY_SLF_LIGHTNING_EFFECTS = ConvertAbilityStringLevelField('alig') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('amat')
ABILITY_SLF_MISSILE_ART = ConvertAbilityStringLevelField('amat') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('aret')
ABILITY_SLF_TOOLTIP_LEARN = ConvertAbilityStringLevelField('aret') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('arut')
ABILITY_SLF_TOOLTIP_LEARN_EXTENDED = ConvertAbilityStringLevelField('arut') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('atp1')
ABILITY_SLF_TOOLTIP_NORMAL = ConvertAbilityStringLevelField('atp1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('aut1')
ABILITY_SLF_TOOLTIP_TURN_OFF = ConvertAbilityStringLevelField('aut1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('aub1')
ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED = ConvertAbilityStringLevelField('aub1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('auu1')
ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED = ConvertAbilityStringLevelField('auu1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Eme1')
ABILITY_SLF_NORMAL_FORM_UNIT_EME1 = ConvertAbilityStringLevelField('Eme1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ndp1')
ABILITY_SLF_SPAWNED_UNITS = ConvertAbilityStringLevelField('Ndp1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Nrc1')
ABILITY_SLF_ABILITY_FOR_UNIT_CREATION = ConvertAbilityStringLevelField('Nrc1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Mil1')
ABILITY_SLF_NORMAL_FORM_UNIT_MIL1 = ConvertAbilityStringLevelField('Mil1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Mil2')
ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2 = ConvertAbilityStringLevelField('Mil2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ans5')
ABILITY_SLF_BASE_ORDER_ID_ANS5 = ConvertAbilityStringLevelField('Ans5') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ply2')
ABILITY_SLF_MORPH_UNITS_GROUND = ConvertAbilityStringLevelField('Ply2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ply3')
ABILITY_SLF_MORPH_UNITS_AIR = ConvertAbilityStringLevelField('Ply3') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ply4')
ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS = ConvertAbilityStringLevelField('Ply4') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ply5')
ABILITY_SLF_MORPH_UNITS_WATER = ConvertAbilityStringLevelField('Ply5') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Rai3')
ABILITY_SLF_UNIT_TYPE_ONE = ConvertAbilityStringLevelField('Rai3') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Rai4')
ABILITY_SLF_UNIT_TYPE_TWO = ConvertAbilityStringLevelField('Rai4') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Sod2')
ABILITY_SLF_UNIT_TYPE_SOD2 = ConvertAbilityStringLevelField('Sod2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ist1')
ABILITY_SLF_SUMMON_1_UNIT_TYPE = ConvertAbilityStringLevelField('Ist1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ist2')
ABILITY_SLF_SUMMON_2_UNIT_TYPE = ConvertAbilityStringLevelField('Ist2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ndc1')
ABILITY_SLF_RACE_TO_CONVERT = ConvertAbilityStringLevelField('Ndc1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('coa1')
ABILITY_SLF_PARTNER_UNIT_TYPE = ConvertAbilityStringLevelField('coa1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('dcp1')
ABILITY_SLF_PARTNER_UNIT_TYPE_ONE = ConvertAbilityStringLevelField('dcp1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('dcp2')
ABILITY_SLF_PARTNER_UNIT_TYPE_TWO = ConvertAbilityStringLevelField('dcp2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('tpi1')
ABILITY_SLF_REQUIRED_UNIT_TYPE = ConvertAbilityStringLevelField('tpi1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('tpi2')
ABILITY_SLF_CONVERTED_UNIT_TYPE = ConvertAbilityStringLevelField('tpi2') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('spb1')
ABILITY_SLF_SPELL_LIST = ConvertAbilityStringLevelField('spb1') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('spb5')
ABILITY_SLF_BASE_ORDER_ID_SPB5 = ConvertAbilityStringLevelField('spb5') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Ncl6')
ABILITY_SLF_BASE_ORDER_ID_NCL6 = ConvertAbilityStringLevelField('Ncl6') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Neg3')
ABILITY_SLF_ABILITY_UPGRADE_1 = ConvertAbilityStringLevelField('Neg3') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Neg4')
ABILITY_SLF_ABILITY_UPGRADE_2 = ConvertAbilityStringLevelField('Neg4') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Neg5')
ABILITY_SLF_ABILITY_UPGRADE_3 = ConvertAbilityStringLevelField('Neg5') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Neg6')
ABILITY_SLF_ABILITY_UPGRADE_4 = ConvertAbilityStringLevelField('Neg6') ---@type abilitystringlevelfield


---ConvertAbilityStringLevelField('Nsy2')
ABILITY_SLF_SPAWN_UNIT_ID_NSY2 = ConvertAbilityStringLevelField('Nsy2') ---@type abilitystringlevelfield


---ConvertItemIntegerField('ilev')
ITEM_IF_LEVEL = ConvertItemIntegerField('ilev') ---@type itemintegerfield


---ConvertItemIntegerField('iuse')
ITEM_IF_NUMBER_OF_CHARGES = ConvertItemIntegerField('iuse') ---@type itemintegerfield


---ConvertItemIntegerField('icid')
ITEM_IF_COOLDOWN_GROUP = ConvertItemIntegerField('icid') ---@type itemintegerfield


---ConvertItemIntegerField('ihtp')
ITEM_IF_MAX_HIT_POINTS = ConvertItemIntegerField('ihtp') ---@type itemintegerfield


---ConvertItemIntegerField('ihpc')
ITEM_IF_HIT_POINTS = ConvertItemIntegerField('ihpc') ---@type itemintegerfield


---ConvertItemIntegerField('ipri')
ITEM_IF_PRIORITY = ConvertItemIntegerField('ipri') ---@type itemintegerfield


---ConvertItemIntegerField('iarm')
ITEM_IF_ARMOR_TYPE = ConvertItemIntegerField('iarm') ---@type itemintegerfield


---ConvertItemIntegerField('iclr')
ITEM_IF_TINTING_COLOR_RED = ConvertItemIntegerField('iclr') ---@type itemintegerfield


---ConvertItemIntegerField('iclg')
ITEM_IF_TINTING_COLOR_GREEN = ConvertItemIntegerField('iclg') ---@type itemintegerfield


---ConvertItemIntegerField('iclb')
ITEM_IF_TINTING_COLOR_BLUE = ConvertItemIntegerField('iclb') ---@type itemintegerfield


---ConvertItemIntegerField('ical')
ITEM_IF_TINTING_COLOR_ALPHA = ConvertItemIntegerField('ical') ---@type itemintegerfield


---ConvertItemRealField('isca')
ITEM_RF_SCALING_VALUE = ConvertItemRealField('isca') ---@type itemrealfield


---ConvertItemBooleanField('idrp')
ITEM_BF_DROPPED_WHEN_CARRIER_DIES = ConvertItemBooleanField('idrp') ---@type itembooleanfield


---ConvertItemBooleanField('idro')
ITEM_BF_CAN_BE_DROPPED = ConvertItemBooleanField('idro') ---@type itembooleanfield


---ConvertItemBooleanField('iper')
ITEM_BF_PERISHABLE = ConvertItemBooleanField('iper') ---@type itembooleanfield


---ConvertItemBooleanField('iprn')
ITEM_BF_INCLUDE_AS_RANDOM_CHOICE = ConvertItemBooleanField('iprn') ---@type itembooleanfield


---ConvertItemBooleanField('ipow')
ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED = ConvertItemBooleanField('ipow') ---@type itembooleanfield


---ConvertItemBooleanField('ipaw')
ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS = ConvertItemBooleanField('ipaw') ---@type itembooleanfield


---ConvertItemBooleanField('iusa')
ITEM_BF_ACTIVELY_USED = ConvertItemBooleanField('iusa') ---@type itembooleanfield


---ConvertItemStringField('ifil')
ITEM_SF_MODEL_USED = ConvertItemStringField('ifil') ---@type itemstringfield


---ConvertUnitIntegerField('udty')
UNIT_IF_DEFENSE_TYPE = ConvertUnitIntegerField('udty') ---@type unitintegerfield


---ConvertUnitIntegerField('uarm')
UNIT_IF_ARMOR_TYPE = ConvertUnitIntegerField('uarm') ---@type unitintegerfield


---ConvertUnitIntegerField('ulfi')
UNIT_IF_LOOPING_FADE_IN_RATE = ConvertUnitIntegerField('ulfi') ---@type unitintegerfield


---ConvertUnitIntegerField('ulfo')
UNIT_IF_LOOPING_FADE_OUT_RATE = ConvertUnitIntegerField('ulfo') ---@type unitintegerfield


---ConvertUnitIntegerField('uagc')
UNIT_IF_AGILITY = ConvertUnitIntegerField('uagc') ---@type unitintegerfield


---ConvertUnitIntegerField('uinc')
UNIT_IF_INTELLIGENCE = ConvertUnitIntegerField('uinc') ---@type unitintegerfield


---ConvertUnitIntegerField('ustc')
UNIT_IF_STRENGTH = ConvertUnitIntegerField('ustc') ---@type unitintegerfield


---ConvertUnitIntegerField('uagm')
UNIT_IF_AGILITY_PERMANENT = ConvertUnitIntegerField('uagm') ---@type unitintegerfield


---ConvertUnitIntegerField('uinm')
UNIT_IF_INTELLIGENCE_PERMANENT = ConvertUnitIntegerField('uinm') ---@type unitintegerfield


---ConvertUnitIntegerField('ustm')
UNIT_IF_STRENGTH_PERMANENT = ConvertUnitIntegerField('ustm') ---@type unitintegerfield


---ConvertUnitIntegerField('uagb')
UNIT_IF_AGILITY_WITH_BONUS = ConvertUnitIntegerField('uagb') ---@type unitintegerfield


---ConvertUnitIntegerField('uinb')
UNIT_IF_INTELLIGENCE_WITH_BONUS = ConvertUnitIntegerField('uinb') ---@type unitintegerfield


---ConvertUnitIntegerField('ustb')
UNIT_IF_STRENGTH_WITH_BONUS = ConvertUnitIntegerField('ustb') ---@type unitintegerfield


---ConvertUnitIntegerField('ubdi')
UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField('ubdi') ---@type unitintegerfield


---ConvertUnitIntegerField('ubba')
UNIT_IF_GOLD_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField('ubba') ---@type unitintegerfield


---ConvertUnitIntegerField('ubsi')
UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField('ubsi') ---@type unitintegerfield


---ConvertUnitIntegerField('ulbd')
UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE = ConvertUnitIntegerField('ulbd') ---@type unitintegerfield


---ConvertUnitIntegerField('ulba')
UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE = ConvertUnitIntegerField('ulba') ---@type unitintegerfield


---ConvertUnitIntegerField('ulbs')
UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE = ConvertUnitIntegerField('ulbs') ---@type unitintegerfield


---ConvertUnitIntegerField('ulev')
UNIT_IF_LEVEL = ConvertUnitIntegerField('ulev') ---@type unitintegerfield


---ConvertUnitIntegerField('ufor')
UNIT_IF_FORMATION_RANK = ConvertUnitIntegerField('ufor') ---@type unitintegerfield


---ConvertUnitIntegerField('uori')
UNIT_IF_ORIENTATION_INTERPOLATION = ConvertUnitIntegerField('uori') ---@type unitintegerfield


---ConvertUnitIntegerField('uept')
UNIT_IF_ELEVATION_SAMPLE_POINTS = ConvertUnitIntegerField('uept') ---@type unitintegerfield


---ConvertUnitIntegerField('uclr')
UNIT_IF_TINTING_COLOR_RED = ConvertUnitIntegerField('uclr') ---@type unitintegerfield


---ConvertUnitIntegerField('uclg')
UNIT_IF_TINTING_COLOR_GREEN = ConvertUnitIntegerField('uclg') ---@type unitintegerfield


---ConvertUnitIntegerField('uclb')
UNIT_IF_TINTING_COLOR_BLUE = ConvertUnitIntegerField('uclb') ---@type unitintegerfield


---ConvertUnitIntegerField('ucal')
UNIT_IF_TINTING_COLOR_ALPHA = ConvertUnitIntegerField('ucal') ---@type unitintegerfield


---ConvertUnitIntegerField('umvt')
UNIT_IF_MOVE_TYPE = ConvertUnitIntegerField('umvt') ---@type unitintegerfield


---ConvertUnitIntegerField('utar')
UNIT_IF_TARGETED_AS = ConvertUnitIntegerField('utar') ---@type unitintegerfield


---ConvertUnitIntegerField('utyp')
UNIT_IF_UNIT_CLASSIFICATION = ConvertUnitIntegerField('utyp') ---@type unitintegerfield


---ConvertUnitIntegerField('uhrt')
UNIT_IF_HIT_POINTS_REGENERATION_TYPE = ConvertUnitIntegerField('uhrt') ---@type unitintegerfield


---ConvertUnitIntegerField('upar')
UNIT_IF_PLACEMENT_PREVENTED_BY = ConvertUnitIntegerField('upar') ---@type unitintegerfield


---ConvertUnitIntegerField('upra')
UNIT_IF_PRIMARY_ATTRIBUTE = ConvertUnitIntegerField('upra') ---@type unitintegerfield


---ConvertUnitRealField('ustp')
UNIT_RF_STRENGTH_PER_LEVEL = ConvertUnitRealField('ustp') ---@type unitrealfield


---ConvertUnitRealField('uagp')
UNIT_RF_AGILITY_PER_LEVEL = ConvertUnitRealField('uagp') ---@type unitrealfield


---ConvertUnitRealField('uinp')
UNIT_RF_INTELLIGENCE_PER_LEVEL = ConvertUnitRealField('uinp') ---@type unitrealfield


---ConvertUnitRealField('uhpr')
UNIT_RF_HIT_POINTS_REGENERATION_RATE = ConvertUnitRealField('uhpr') ---@type unitrealfield


---ConvertUnitRealField('umpr')
UNIT_RF_MANA_REGENERATION = ConvertUnitRealField('umpr') ---@type unitrealfield


---ConvertUnitRealField('udtm')
UNIT_RF_DEATH_TIME = ConvertUnitRealField('udtm') ---@type unitrealfield


---ConvertUnitRealField('ufyh')
UNIT_RF_FLY_HEIGHT = ConvertUnitRealField('ufyh') ---@type unitrealfield


---ConvertUnitRealField('umvr')
UNIT_RF_TURN_RATE = ConvertUnitRealField('umvr') ---@type unitrealfield


---ConvertUnitRealField('uerd')
UNIT_RF_ELEVATION_SAMPLE_RADIUS = ConvertUnitRealField('uerd') ---@type unitrealfield


---ConvertUnitRealField('ufrd')
UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS = ConvertUnitRealField('ufrd') ---@type unitrealfield


---ConvertUnitRealField('umxp')
UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES = ConvertUnitRealField('umxp') ---@type unitrealfield


---ConvertUnitRealField('umxr')
UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES = ConvertUnitRealField('umxr') ---@type unitrealfield


---ConvertUnitRealField('usca')
UNIT_RF_SCALING_VALUE = ConvertUnitRealField('usca') ---@type unitrealfield


---ConvertUnitRealField('urun')
UNIT_RF_ANIMATION_RUN_SPEED = ConvertUnitRealField('urun') ---@type unitrealfield


---ConvertUnitRealField('ussc')
UNIT_RF_SELECTION_SCALE = ConvertUnitRealField('ussc') ---@type unitrealfield


---ConvertUnitRealField('uslz')
UNIT_RF_SELECTION_CIRCLE_HEIGHT = ConvertUnitRealField('uslz') ---@type unitrealfield


---ConvertUnitRealField('ushh')
UNIT_RF_SHADOW_IMAGE_HEIGHT = ConvertUnitRealField('ushh') ---@type unitrealfield


---ConvertUnitRealField('ushw')
UNIT_RF_SHADOW_IMAGE_WIDTH = ConvertUnitRealField('ushw') ---@type unitrealfield


---ConvertUnitRealField('ushx')
UNIT_RF_SHADOW_IMAGE_CENTER_X = ConvertUnitRealField('ushx') ---@type unitrealfield


---ConvertUnitRealField('ushy')
UNIT_RF_SHADOW_IMAGE_CENTER_Y = ConvertUnitRealField('ushy') ---@type unitrealfield


---ConvertUnitRealField('uwal')
UNIT_RF_ANIMATION_WALK_SPEED = ConvertUnitRealField('uwal') ---@type unitrealfield


---ConvertUnitRealField('udfc')
UNIT_RF_DEFENSE = ConvertUnitRealField('udfc') ---@type unitrealfield


---ConvertUnitRealField('usir')
UNIT_RF_SIGHT_RADIUS = ConvertUnitRealField('usir') ---@type unitrealfield


---ConvertUnitRealField('upri')
UNIT_RF_PRIORITY = ConvertUnitRealField('upri') ---@type unitrealfield


---ConvertUnitRealField('umvc')
UNIT_RF_SPEED = ConvertUnitRealField('umvc') ---@type unitrealfield


---ConvertUnitRealField('uocc')
UNIT_RF_OCCLUDER_HEIGHT = ConvertUnitRealField('uocc') ---@type unitrealfield


---ConvertUnitRealField('uhpc')
UNIT_RF_HP = ConvertUnitRealField('uhpc') ---@type unitrealfield


---ConvertUnitRealField('umpc')
UNIT_RF_MANA = ConvertUnitRealField('umpc') ---@type unitrealfield


---ConvertUnitRealField('uacq')
UNIT_RF_ACQUISITION_RANGE = ConvertUnitRealField('uacq') ---@type unitrealfield


---ConvertUnitRealField('ucbs')
UNIT_RF_CAST_BACK_SWING = ConvertUnitRealField('ucbs') ---@type unitrealfield


---ConvertUnitRealField('ucpt')
UNIT_RF_CAST_POINT = ConvertUnitRealField('ucpt') ---@type unitrealfield


---ConvertUnitRealField('uamn')
UNIT_RF_MINIMUM_ATTACK_RANGE = ConvertUnitRealField('uamn') ---@type unitrealfield


---ConvertUnitBooleanField('urai')
UNIT_BF_RAISABLE = ConvertUnitBooleanField('urai') ---@type unitbooleanfield


---ConvertUnitBooleanField('udec')
UNIT_BF_DECAYABLE = ConvertUnitBooleanField('udec') ---@type unitbooleanfield


---ConvertUnitBooleanField('ubdg')
UNIT_BF_IS_A_BUILDING = ConvertUnitBooleanField('ubdg') ---@type unitbooleanfield


---ConvertUnitBooleanField('ulos')
UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT = ConvertUnitBooleanField('ulos') ---@type unitbooleanfield


---ConvertUnitBooleanField('unbm')
UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON = ConvertUnitBooleanField('unbm') ---@type unitbooleanfield


---ConvertUnitBooleanField('uhhb')
UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON = ConvertUnitBooleanField('uhhb') ---@type unitbooleanfield


---ConvertUnitBooleanField('uhhm')
UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY = ConvertUnitBooleanField('uhhm') ---@type unitbooleanfield


---ConvertUnitBooleanField('uhhd')
UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE = ConvertUnitBooleanField('uhhd') ---@type unitbooleanfield


---ConvertUnitBooleanField('uhom')
UNIT_BF_HIDE_MINIMAP_DISPLAY = ConvertUnitBooleanField('uhom') ---@type unitbooleanfield


---ConvertUnitBooleanField('uscb')
UNIT_BF_SCALE_PROJECTILES = ConvertUnitBooleanField('uscb') ---@type unitbooleanfield


---ConvertUnitBooleanField('usew')
UNIT_BF_SELECTION_CIRCLE_ON_WATER = ConvertUnitBooleanField('usew') ---@type unitbooleanfield


---ConvertUnitBooleanField('ushr')
UNIT_BF_HAS_WATER_SHADOW = ConvertUnitBooleanField('ushr') ---@type unitbooleanfield


---ConvertUnitStringField('unam')
UNIT_SF_NAME = ConvertUnitStringField('unam') ---@type unitstringfield


---ConvertUnitStringField('upro')
UNIT_SF_PROPER_NAMES = ConvertUnitStringField('upro') ---@type unitstringfield


---ConvertUnitStringField('uubs')
UNIT_SF_GROUND_TEXTURE = ConvertUnitStringField('uubs') ---@type unitstringfield


---ConvertUnitStringField('ushu')
UNIT_SF_SHADOW_IMAGE_UNIT = ConvertUnitStringField('ushu') ---@type unitstringfield


---ConvertUnitWeaponIntegerField('ua1d')
UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE = ConvertUnitWeaponIntegerField('ua1d') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ua1b')
UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE = ConvertUnitWeaponIntegerField('ua1b') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ua1s')
UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE = ConvertUnitWeaponIntegerField('ua1s') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('utc1')
UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS = ConvertUnitWeaponIntegerField('utc1') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ua1t')
UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE = ConvertUnitWeaponIntegerField('ua1t') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ucs1')
UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND = ConvertUnitWeaponIntegerField('ucs1') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ua1p')
UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS = ConvertUnitWeaponIntegerField('ua1p') ---@type unitweaponintegerfield


---ConvertUnitWeaponIntegerField('ua1g')
UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED = ConvertUnitWeaponIntegerField('ua1g') ---@type unitweaponintegerfield


---ConvertUnitWeaponRealField('ubs1')
UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT = ConvertUnitWeaponRealField('ubs1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('udp1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT = ConvertUnitWeaponRealField('udp1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1c')
UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN = ConvertUnitWeaponRealField('ua1c') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('udl1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR = ConvertUnitWeaponRealField('udl1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('uhd1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM = ConvertUnitWeaponRealField('uhd1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('uqd1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL = ConvertUnitWeaponRealField('uqd1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('usd1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE = ConvertUnitWeaponRealField('usd1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('usr1')
UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS = ConvertUnitWeaponRealField('usr1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1z')
UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED = ConvertUnitWeaponRealField('ua1z') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('uma1')
UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC = ConvertUnitWeaponRealField('uma1') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1f')
UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE = ConvertUnitWeaponRealField('ua1f') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1h')
UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE = ConvertUnitWeaponRealField('ua1h') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1q')
UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE = ConvertUnitWeaponRealField('ua1q') ---@type unitweaponrealfield


---ConvertUnitWeaponRealField('ua1r')
UNIT_WEAPON_RF_ATTACK_RANGE = ConvertUnitWeaponRealField('ua1r') ---@type unitweaponrealfield


---ConvertUnitWeaponBooleanField('uwu1')
UNIT_WEAPON_BF_ATTACK_SHOW_UI = ConvertUnitWeaponBooleanField('uwu1') ---@type unitweaponbooleanfield


---ConvertUnitWeaponBooleanField('uaen')
UNIT_WEAPON_BF_ATTACKS_ENABLED = ConvertUnitWeaponBooleanField('uaen') ---@type unitweaponbooleanfield


---ConvertUnitWeaponBooleanField('umh1')
UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED = ConvertUnitWeaponBooleanField('umh1') ---@type unitweaponbooleanfield


---ConvertUnitWeaponStringField('ua1m')
UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART = ConvertUnitWeaponStringField('ua1m') ---@type unitweaponstringfield


---ConvertMoveType(0)
MOVE_TYPE_UNKNOWN = ConvertMoveType(0) ---@type movetype


---ConvertMoveType(1)
MOVE_TYPE_FOOT = ConvertMoveType(1) ---@type movetype


---ConvertMoveType(2)
MOVE_TYPE_FLY = ConvertMoveType(2) ---@type movetype


---ConvertMoveType(4)
MOVE_TYPE_HORSE = ConvertMoveType(4) ---@type movetype


---ConvertMoveType(8)
MOVE_TYPE_HOVER = ConvertMoveType(8) ---@type movetype


---ConvertMoveType(16)
MOVE_TYPE_FLOAT = ConvertMoveType(16) ---@type movetype


---ConvertMoveType(32)
MOVE_TYPE_AMPHIBIOUS = ConvertMoveType(32) ---@type movetype


---ConvertMoveType(64)
MOVE_TYPE_UNBUILDABLE = ConvertMoveType(64) ---@type movetype


---ConvertTargetFlag(1)
TARGET_FLAG_NONE = ConvertTargetFlag(1) ---@type targetflag


---ConvertTargetFlag(2)
TARGET_FLAG_GROUND = ConvertTargetFlag(2) ---@type targetflag


---ConvertTargetFlag(4)
TARGET_FLAG_AIR = ConvertTargetFlag(4) ---@type targetflag


---ConvertTargetFlag(8)
TARGET_FLAG_STRUCTURE = ConvertTargetFlag(8) ---@type targetflag


---ConvertTargetFlag(16)
TARGET_FLAG_WARD = ConvertTargetFlag(16) ---@type targetflag


---ConvertTargetFlag(32)
TARGET_FLAG_ITEM = ConvertTargetFlag(32) ---@type targetflag


---ConvertTargetFlag(64)
TARGET_FLAG_TREE = ConvertTargetFlag(64) ---@type targetflag


---ConvertTargetFlag(128)
TARGET_FLAG_WALL = ConvertTargetFlag(128) ---@type targetflag


---ConvertTargetFlag(256)
TARGET_FLAG_DEBRIS = ConvertTargetFlag(256) ---@type targetflag


---ConvertTargetFlag(512)
TARGET_FLAG_DECORATION = ConvertTargetFlag(512) ---@type targetflag


---ConvertTargetFlag(1024)
TARGET_FLAG_BRIDGE = ConvertTargetFlag(1024) ---@type targetflag


---ConvertDefenseType(0)
DEFENSE_TYPE_LIGHT = ConvertDefenseType(0) ---@type defensetype


---ConvertDefenseType(1)
DEFENSE_TYPE_MEDIUM = ConvertDefenseType(1) ---@type defensetype


---ConvertDefenseType(2)
DEFENSE_TYPE_LARGE = ConvertDefenseType(2) ---@type defensetype


---ConvertDefenseType(3)
DEFENSE_TYPE_FORT = ConvertDefenseType(3) ---@type defensetype


---ConvertDefenseType(4)
DEFENSE_TYPE_NORMAL = ConvertDefenseType(4) ---@type defensetype


---ConvertDefenseType(5)
DEFENSE_TYPE_HERO = ConvertDefenseType(5) ---@type defensetype


---ConvertDefenseType(6)
DEFENSE_TYPE_DIVINE = ConvertDefenseType(6) ---@type defensetype


---ConvertDefenseType(7)
DEFENSE_TYPE_NONE = ConvertDefenseType(7) ---@type defensetype


---ConvertHeroAttribute(1)
HERO_ATTRIBUTE_STR = ConvertHeroAttribute(1) ---@type heroattribute


---ConvertHeroAttribute(2)
HERO_ATTRIBUTE_INT = ConvertHeroAttribute(2) ---@type heroattribute


---ConvertHeroAttribute(3)
HERO_ATTRIBUTE_AGI = ConvertHeroAttribute(3) ---@type heroattribute


---ConvertArmorType(0)
ARMOR_TYPE_WHOKNOWS = ConvertArmorType(0) ---@type armortype


---ConvertArmorType(1)
ARMOR_TYPE_FLESH = ConvertArmorType(1) ---@type armortype


---ConvertArmorType(2)
ARMOR_TYPE_METAL = ConvertArmorType(2) ---@type armortype


---ConvertArmorType(3)
ARMOR_TYPE_WOOD = ConvertArmorType(3) ---@type armortype


---ConvertArmorType(4)
ARMOR_TYPE_ETHREAL = ConvertArmorType(4) ---@type armortype


---ConvertArmorType(5)
ARMOR_TYPE_STONE = ConvertArmorType(5) ---@type armortype


---ConvertRegenType(0)
REGENERATION_TYPE_NONE = ConvertRegenType(0) ---@type regentype


---ConvertRegenType(1)
REGENERATION_TYPE_ALWAYS = ConvertRegenType(1) ---@type regentype


---ConvertRegenType(2)
REGENERATION_TYPE_BLIGHT = ConvertRegenType(2) ---@type regentype


---ConvertRegenType(3)
REGENERATION_TYPE_DAY = ConvertRegenType(3) ---@type regentype


---ConvertRegenType(4)
REGENERATION_TYPE_NIGHT = ConvertRegenType(4) ---@type regentype


---ConvertUnitCategory(1)
UNIT_CATEGORY_GIANT = ConvertUnitCategory(1) ---@type unitcategory


---ConvertUnitCategory(2)
UNIT_CATEGORY_UNDEAD = ConvertUnitCategory(2) ---@type unitcategory


---ConvertUnitCategory(4)
UNIT_CATEGORY_SUMMONED = ConvertUnitCategory(4) ---@type unitcategory


---ConvertUnitCategory(8)
UNIT_CATEGORY_MECHANICAL = ConvertUnitCategory(8) ---@type unitcategory


---ConvertUnitCategory(16)
UNIT_CATEGORY_PEON = ConvertUnitCategory(16) ---@type unitcategory


---ConvertUnitCategory(32)
UNIT_CATEGORY_SAPPER = ConvertUnitCategory(32) ---@type unitcategory


---ConvertUnitCategory(64)
UNIT_CATEGORY_TOWNHALL = ConvertUnitCategory(64) ---@type unitcategory


---ConvertUnitCategory(128)
UNIT_CATEGORY_ANCIENT = ConvertUnitCategory(128) ---@type unitcategory


---ConvertUnitCategory(256)
UNIT_CATEGORY_NEUTRAL = ConvertUnitCategory(256) ---@type unitcategory


---ConvertUnitCategory(512)
UNIT_CATEGORY_WARD = ConvertUnitCategory(512) ---@type unitcategory


---ConvertUnitCategory(1024)
UNIT_CATEGORY_STANDON = ConvertUnitCategory(1024) ---@type unitcategory


---ConvertUnitCategory(2048)
UNIT_CATEGORY_TAUREN = ConvertUnitCategory(2048) ---@type unitcategory


---ConvertPathingFlag(2)
PATHING_FLAG_UNWALKABLE = ConvertPathingFlag(2) ---@type pathingflag


---ConvertPathingFlag(4)
PATHING_FLAG_UNFLYABLE = ConvertPathingFlag(4) ---@type pathingflag


---ConvertPathingFlag(8)
PATHING_FLAG_UNBUILDABLE = ConvertPathingFlag(8) ---@type pathingflag


---ConvertPathingFlag(16)
PATHING_FLAG_UNPEONHARVEST = ConvertPathingFlag(16) ---@type pathingflag


---ConvertPathingFlag(32)
PATHING_FLAG_BLIGHTED = ConvertPathingFlag(32) ---@type pathingflag


---ConvertPathingFlag(64)
PATHING_FLAG_UNFLOATABLE = ConvertPathingFlag(64) ---@type pathingflag


---ConvertPathingFlag(128)
PATHING_FLAG_UNAMPHIBIOUS = ConvertPathingFlag(128) ---@type pathingflag


---ConvertPathingFlag(256)
PATHING_FLAG_UNITEMPLACABLE = ConvertPathingFlag(256) ---@type pathingflag


---@param degrees real
---@return real
function Deg2Rad(degrees) end


---@param radians real
---@return real
function Rad2Deg(radians) end


---@param radians real
---@return real
function Sin(radians) end


---@param radians real
---@return real
function Cos(radians) end


---@param radians real
---@return real
function Tan(radians) end


---@param y real
---@return real
function Asin(y) end


---@param x real
---@return real
function Acos(x) end


---@param x real
---@return real
function Atan(x) end


---@param y real
---@param x real
---@return real
function Atan2(y, x) end


---@param x real
---@return real
function SquareRoot(x) end


---@param x real
---@param power real
---@return real
function Pow(x, power) end


---@param i integer
---@return real
function I2R(i) end


---@param r real
---@return integer
function R2I(r) end


---@param i integer
---@return string
function I2S(i) end


---@param r real
---@return string
function R2S(r) end


---@param r real
---@param width integer
---@param precision integer
---@return string
function R2SW(r, width, precision) end


---@param s string
---@return integer
function S2I(s) end


---@param s string
---@return real
function S2R(s) end


---@param h handle
---@return integer
function GetHandleId(h) end


---@param source string
---@param start integer
---@param end_ integer
---@return string
function SubString(source, start, end_) end


---@param s string
---@return integer
function StringLength(s) end


---@param source string
---@param upper boolean
---@return string
function StringCase(source, upper) end


---@param s string
---@return integer
function StringHash(s) end


---@param source string
---@return string
function GetLocalizedString(source) end


---@param source string
---@return integer
function GetLocalizedHotkey(source) end


---@param name string
---@return void
function SetMapName(name) end


---@param description string
---@return void
function SetMapDescription(description) end


---@param teamcount integer
---@return void
function SetTeams(teamcount) end


---@param playercount integer
---@return void
function SetPlayers(playercount) end


---@param whichStartLoc integer
---@param x real
---@param y real
---@return void
function DefineStartLocation(whichStartLoc, x, y) end


---@param whichStartLoc integer
---@param whichLocation location
---@return void
function DefineStartLocationLoc(whichStartLoc, whichLocation) end


---@param whichStartLoc integer
---@param prioSlotCount integer
---@return void
function SetStartLocPrioCount(whichStartLoc, prioSlotCount) end


---@param whichStartLoc integer
---@param prioSlotIndex integer
---@param otherStartLocIndex integer
---@param priority startlocprio
---@return void
function SetStartLocPrio(whichStartLoc, prioSlotIndex, otherStartLocIndex, priority) end


---@param whichStartLoc integer
---@param prioSlotIndex integer
---@return integer
function GetStartLocPrioSlot(whichStartLoc, prioSlotIndex) end


---@param whichStartLoc integer
---@param prioSlotIndex integer
---@return startlocprio
function GetStartLocPrio(whichStartLoc, prioSlotIndex) end


---@param whichGameType gametype
---@param value boolean
---@return void
function SetGameTypeSupported(whichGameType, value) end


---@param whichMapFlag mapflag
---@param value boolean
---@return void
function SetMapFlag(whichMapFlag, value) end


---@param whichPlacementType placement
---@return void
function SetGamePlacement(whichPlacementType) end


---@param whichspeed gamespeed
---@return void
function SetGameSpeed(whichspeed) end


---@param whichdifficulty gamedifficulty
---@return void
function SetGameDifficulty(whichdifficulty) end


---@param whichdensity mapdensity
---@return void
function SetResourceDensity(whichdensity) end


---@param whichdensity mapdensity
---@return void
function SetCreatureDensity(whichdensity) end


---@return integer
function GetTeams() end


---@return integer
function GetPlayers() end


---@param whichGameType gametype
---@return boolean
function IsGameTypeSupported(whichGameType) end


---@return gametype
function GetGameTypeSelected() end


---@param whichMapFlag mapflag
---@return boolean
function IsMapFlagSet(whichMapFlag) end


---@return placement
function GetGamePlacement() end


---@return gamespeed
function GetGameSpeed() end


---@return gamedifficulty
function GetGameDifficulty() end


---@return mapdensity
function GetResourceDensity() end


---@return mapdensity
function GetCreatureDensity() end


---@param whichStartLocation integer
---@return real
function GetStartLocationX(whichStartLocation) end


---@param whichStartLocation integer
---@return real
function GetStartLocationY(whichStartLocation) end


---@param whichStartLocation integer
---@return location
function GetStartLocationLoc(whichStartLocation) end


---@param whichPlayer player
---@param whichTeam integer
---@return void
function SetPlayerTeam(whichPlayer, whichTeam) end


---@param whichPlayer player
---@param startLocIndex integer
---@return void
function SetPlayerStartLocation(whichPlayer, startLocIndex) end


---@param whichPlayer player
---@param startLocIndex integer
---@return void
function ForcePlayerStartLocation(whichPlayer, startLocIndex) end


---@param whichPlayer player
---@param color playercolor
---@return void
function SetPlayerColor(whichPlayer, color) end


---@param sourcePlayer player
---@param otherPlayer player
---@param whichAllianceSetting alliancetype
---@param value boolean
---@return void
function SetPlayerAlliance(sourcePlayer, otherPlayer, whichAllianceSetting, value) end


---@param sourcePlayer player
---@param otherPlayer player
---@param whichResource playerstate
---@param rate integer
---@return void
function SetPlayerTaxRate(sourcePlayer, otherPlayer, whichResource, rate) end


---@param whichPlayer player
---@param whichRacePreference racepreference
---@return void
function SetPlayerRacePreference(whichPlayer, whichRacePreference) end


---@param whichPlayer player
---@param value boolean
---@return void
function SetPlayerRaceSelectable(whichPlayer, value) end


---@param whichPlayer player
---@param controlType mapcontrol
---@return void
function SetPlayerController(whichPlayer, controlType) end


---@param whichPlayer player
---@param name string
---@return void
function SetPlayerName(whichPlayer, name) end


---@param whichPlayer player
---@param flag boolean
---@return void
function SetPlayerOnScoreScreen(whichPlayer, flag) end


---@param whichPlayer player
---@return integer
function GetPlayerTeam(whichPlayer) end


---@param whichPlayer player
---@return integer
function GetPlayerStartLocation(whichPlayer) end


---@param whichPlayer player
---@return playercolor
function GetPlayerColor(whichPlayer) end


---@param whichPlayer player
---@return boolean
function GetPlayerSelectable(whichPlayer) end


---@param whichPlayer player
---@return mapcontrol
function GetPlayerController(whichPlayer) end


---@param whichPlayer player
---@return playerslotstate
function GetPlayerSlotState(whichPlayer) end


---@param sourcePlayer player
---@param otherPlayer player
---@param whichResource playerstate
---@return integer
function GetPlayerTaxRate(sourcePlayer, otherPlayer, whichResource) end


---@param whichPlayer player
---@param pref racepreference
---@return boolean
function IsPlayerRacePrefSet(whichPlayer, pref) end


---@param whichPlayer player
---@return string
function GetPlayerName(whichPlayer) end


---@return timer
function CreateTimer() end


---@param whichTimer timer
---@return void
function DestroyTimer(whichTimer) end


---@param whichTimer timer
---@param timeout real
---@param periodic boolean
---@param handlerFunc code
---@return void
function TimerStart(whichTimer, timeout, periodic, handlerFunc) end


---@param whichTimer timer
---@return real
function TimerGetElapsed(whichTimer) end


---@param whichTimer timer
---@return real
function TimerGetRemaining(whichTimer) end


---@param whichTimer timer
---@return real
function TimerGetTimeout(whichTimer) end


---@param whichTimer timer
---@return void
function PauseTimer(whichTimer) end


---@param whichTimer timer
---@return void
function ResumeTimer(whichTimer) end


---@return timer
function GetExpiredTimer() end


---@return group
function CreateGroup() end


---@param whichGroup group
---@return void
function DestroyGroup(whichGroup) end


---@param whichGroup group
---@param whichUnit unit
---@return boolean
function GroupAddUnit(whichGroup, whichUnit) end


---@param whichGroup group
---@param whichUnit unit
---@return boolean
function GroupRemoveUnit(whichGroup, whichUnit) end


---@param whichGroup group
---@param addGroup group
---@return integer
function BlzGroupAddGroupFast(whichGroup, addGroup) end


---@param whichGroup group
---@param removeGroup group
---@return integer
function BlzGroupRemoveGroupFast(whichGroup, removeGroup) end


---@param whichGroup group
---@return void
function GroupClear(whichGroup) end


---@param whichGroup group
---@return integer
function BlzGroupGetSize(whichGroup) end


---@param whichGroup group
---@param index integer
---@return unit
function BlzGroupUnitAt(whichGroup, index) end


---@param whichGroup group
---@param unitname string
---@param filter boolexpr
---@return void
function GroupEnumUnitsOfType(whichGroup, unitname, filter) end


---@param whichGroup group
---@param whichPlayer player
---@param filter boolexpr
---@return void
function GroupEnumUnitsOfPlayer(whichGroup, whichPlayer, filter) end


---@param whichGroup group
---@param unitname string
---@param filter boolexpr
---@param countLimit integer
---@return void
function GroupEnumUnitsOfTypeCounted(whichGroup, unitname, filter, countLimit) end


---@param whichGroup group
---@param r rect
---@param filter boolexpr
---@return void
function GroupEnumUnitsInRect(whichGroup, r, filter) end


---@param whichGroup group
---@param r rect
---@param filter boolexpr
---@param countLimit integer
---@return void
function GroupEnumUnitsInRectCounted(whichGroup, r, filter, countLimit) end


---@param whichGroup group
---@param x real
---@param y real
---@param radius real
---@param filter boolexpr
---@return void
function GroupEnumUnitsInRange(whichGroup, x, y, radius, filter) end


---@param whichGroup group
---@param whichLocation location
---@param radius real
---@param filter boolexpr
---@return void
function GroupEnumUnitsInRangeOfLoc(whichGroup, whichLocation, radius, filter) end


---@param whichGroup group
---@param x real
---@param y real
---@param radius real
---@param filter boolexpr
---@param countLimit integer
---@return void
function GroupEnumUnitsInRangeCounted(whichGroup, x, y, radius, filter, countLimit) end


---@param whichGroup group
---@param whichLocation location
---@param radius real
---@param filter boolexpr
---@param countLimit integer
---@return void
function GroupEnumUnitsInRangeOfLocCounted(whichGroup, whichLocation, radius, filter, countLimit) end


---@param whichGroup group
---@param whichPlayer player
---@param filter boolexpr
---@return void
function GroupEnumUnitsSelected(whichGroup, whichPlayer, filter) end


---@param whichGroup group
---@param order string
---@return boolean
function GroupImmediateOrder(whichGroup, order) end


---@param whichGroup group
---@param order integer
---@return boolean
function GroupImmediateOrderById(whichGroup, order) end


---@param whichGroup group
---@param order string
---@param x real
---@param y real
---@return boolean
function GroupPointOrder(whichGroup, order, x, y) end


---@param whichGroup group
---@param order string
---@param whichLocation location
---@return boolean
function GroupPointOrderLoc(whichGroup, order, whichLocation) end


---@param whichGroup group
---@param order integer
---@param x real
---@param y real
---@return boolean
function GroupPointOrderById(whichGroup, order, x, y) end


---@param whichGroup group
---@param order integer
---@param whichLocation location
---@return boolean
function GroupPointOrderByIdLoc(whichGroup, order, whichLocation) end


---@param whichGroup group
---@param order string
---@param targetWidget widget
---@return boolean
function GroupTargetOrder(whichGroup, order, targetWidget) end


---@param whichGroup group
---@param order integer
---@param targetWidget widget
---@return boolean
function GroupTargetOrderById(whichGroup, order, targetWidget) end


---@param whichGroup group
---@param callback code
---@return void
function ForGroup(whichGroup, callback) end


---@param whichGroup group
---@return unit
function FirstOfGroup(whichGroup) end


---@return force
function CreateForce() end


---@param whichForce force
---@return void
function DestroyForce(whichForce) end


---@param whichForce force
---@param whichPlayer player
---@return void
function ForceAddPlayer(whichForce, whichPlayer) end


---@param whichForce force
---@param whichPlayer player
---@return void
function ForceRemovePlayer(whichForce, whichPlayer) end


---@param whichForce force
---@param whichPlayer player
---@return boolean
function BlzForceHasPlayer(whichForce, whichPlayer) end


---@param whichForce force
---@return void
function ForceClear(whichForce) end


---@param whichForce force
---@param filter boolexpr
---@return void
function ForceEnumPlayers(whichForce, filter) end


---@param whichForce force
---@param filter boolexpr
---@param countLimit integer
---@return void
function ForceEnumPlayersCounted(whichForce, filter, countLimit) end


---@param whichForce force
---@param whichPlayer player
---@param filter boolexpr
---@return void
function ForceEnumAllies(whichForce, whichPlayer, filter) end


---@param whichForce force
---@param whichPlayer player
---@param filter boolexpr
---@return void
function ForceEnumEnemies(whichForce, whichPlayer, filter) end


---@param whichForce force
---@param callback code
---@return void
function ForForce(whichForce, callback) end


---@param minx real
---@param miny real
---@param maxx real
---@param maxy real
---@return rect
function Rect(minx, miny, maxx, maxy) end


---@param min location
---@param max location
---@return rect
function RectFromLoc(min, max) end


---@param whichRect rect
---@return void
function RemoveRect(whichRect) end


---@param whichRect rect
---@param minx real
---@param miny real
---@param maxx real
---@param maxy real
---@return void
function SetRect(whichRect, minx, miny, maxx, maxy) end


---@param whichRect rect
---@param min location
---@param max location
---@return void
function SetRectFromLoc(whichRect, min, max) end


---@param whichRect rect
---@param newCenterX real
---@param newCenterY real
---@return void
function MoveRectTo(whichRect, newCenterX, newCenterY) end


---@param whichRect rect
---@param newCenterLoc location
---@return void
function MoveRectToLoc(whichRect, newCenterLoc) end


---@param whichRect rect
---@return real
function GetRectCenterX(whichRect) end


---@param whichRect rect
---@return real
function GetRectCenterY(whichRect) end


---@param whichRect rect
---@return real
function GetRectMinX(whichRect) end


---@param whichRect rect
---@return real
function GetRectMinY(whichRect) end


---@param whichRect rect
---@return real
function GetRectMaxX(whichRect) end


---@param whichRect rect
---@return real
function GetRectMaxY(whichRect) end


---@return region
function CreateRegion() end


---@param whichRegion region
---@return void
function RemoveRegion(whichRegion) end


---@param whichRegion region
---@param r rect
---@return void
function RegionAddRect(whichRegion, r) end


---@param whichRegion region
---@param r rect
---@return void
function RegionClearRect(whichRegion, r) end


---@param whichRegion region
---@param x real
---@param y real
---@return void
function RegionAddCell(whichRegion, x, y) end


---@param whichRegion region
---@param whichLocation location
---@return void
function RegionAddCellAtLoc(whichRegion, whichLocation) end


---@param whichRegion region
---@param x real
---@param y real
---@return void
function RegionClearCell(whichRegion, x, y) end


---@param whichRegion region
---@param whichLocation location
---@return void
function RegionClearCellAtLoc(whichRegion, whichLocation) end


---@param x real
---@param y real
---@return location
function Location(x, y) end


---@param whichLocation location
---@return void
function RemoveLocation(whichLocation) end


---@param whichLocation location
---@param newX real
---@param newY real
---@return void
function MoveLocation(whichLocation, newX, newY) end


---@param whichLocation location
---@return real
function GetLocationX(whichLocation) end


---@param whichLocation location
---@return real
function GetLocationY(whichLocation) end


---@param whichLocation location
---@return real
function GetLocationZ(whichLocation) end


---@param whichRegion region
---@param whichUnit unit
---@return boolean
function IsUnitInRegion(whichRegion, whichUnit) end


---@param whichRegion region
---@param x real
---@param y real
---@return boolean
function IsPointInRegion(whichRegion, x, y) end


---@param whichRegion region
---@param whichLocation location
---@return boolean
function IsLocationInRegion(whichRegion, whichLocation) end


---@return rect
function GetWorldBounds() end


---@return trigger
function CreateTrigger() end


---@param whichTrigger trigger
---@return void
function DestroyTrigger(whichTrigger) end


---@param whichTrigger trigger
---@return void
function ResetTrigger(whichTrigger) end


---@param whichTrigger trigger
---@return void
function EnableTrigger(whichTrigger) end


---@param whichTrigger trigger
---@return void
function DisableTrigger(whichTrigger) end


---@param whichTrigger trigger
---@return boolean
function IsTriggerEnabled(whichTrigger) end


---@param whichTrigger trigger
---@param flag boolean
---@return void
function TriggerWaitOnSleeps(whichTrigger, flag) end


---@param whichTrigger trigger
---@return boolean
function IsTriggerWaitOnSleeps(whichTrigger) end


---@return unit
function GetFilterUnit() end


---@return unit
function GetEnumUnit() end


---@return destructable
function GetFilterDestructable() end


---@return destructable
function GetEnumDestructable() end


---@return item
function GetFilterItem() end


---@return item
function GetEnumItem() end


---@return player
function GetFilterPlayer() end


---@return player
function GetEnumPlayer() end


---@return trigger
function GetTriggeringTrigger() end


---@return eventid
function GetTriggerEventId() end


---@param whichTrigger trigger
---@return integer
function GetTriggerEvalCount(whichTrigger) end


---@param whichTrigger trigger
---@return integer
function GetTriggerExecCount(whichTrigger) end


---@param funcName string
---@return void
function ExecuteFunc(funcName) end


---@param operandA boolexpr
---@param operandB boolexpr
---@return boolexpr
function And(operandA, operandB) end


---@param operandA boolexpr
---@param operandB boolexpr
---@return boolexpr
function Or(operandA, operandB) end


---@param operand boolexpr
---@return boolexpr
function Not(operand) end


---@param func code
---@return conditionfunc
function Condition(func) end


---@param c conditionfunc
---@return void
function DestroyCondition(c) end


---@param func code
---@return filterfunc
function Filter(func) end


---@param f filterfunc
---@return void
function DestroyFilter(f) end


---@param e boolexpr
---@return void
function DestroyBoolExpr(e) end


---@param whichTrigger trigger
---@param varName string
---@param opcode limitop
---@param limitval real
---@return event
function TriggerRegisterVariableEvent(whichTrigger, varName, opcode, limitval) end


---@param whichTrigger trigger
---@param timeout real
---@param periodic boolean
---@return event
function TriggerRegisterTimerEvent(whichTrigger, timeout, periodic) end


---@param whichTrigger trigger
---@param t timer
---@return event
function TriggerRegisterTimerExpireEvent(whichTrigger, t) end


---@param whichTrigger trigger
---@param whichState gamestate
---@param opcode limitop
---@param limitval real
---@return event
function TriggerRegisterGameStateEvent(whichTrigger, whichState, opcode, limitval) end


---@param whichTrigger trigger
---@param whichDialog dialog
---@return event
function TriggerRegisterDialogEvent(whichTrigger, whichDialog) end


---@param whichTrigger trigger
---@param whichButton button
---@return event
function TriggerRegisterDialogButtonEvent(whichTrigger, whichButton) end


---@return gamestate
function GetEventGameState() end


---@param whichTrigger trigger
---@param whichGameEvent gameevent
---@return event
function TriggerRegisterGameEvent(whichTrigger, whichGameEvent) end


---@return player
function GetWinningPlayer() end


---@param whichTrigger trigger
---@param whichRegion region
---@param filter boolexpr
---@return event
function TriggerRegisterEnterRegion(whichTrigger, whichRegion, filter) end


---@return region
function GetTriggeringRegion() end


---@return unit
function GetEnteringUnit() end


---@param whichTrigger trigger
---@param whichRegion region
---@param filter boolexpr
---@return event
function TriggerRegisterLeaveRegion(whichTrigger, whichRegion, filter) end


---@return unit
function GetLeavingUnit() end


---@param whichTrigger trigger
---@param t trackable
---@return event
function TriggerRegisterTrackableHitEvent(whichTrigger, t) end


---@param whichTrigger trigger
---@param t trackable
---@return event
function TriggerRegisterTrackableTrackEvent(whichTrigger, t) end


---@return trackable
function GetTriggeringTrackable() end


---@return button
function GetClickedButton() end


---@return dialog
function GetClickedDialog() end


---@return real
function GetTournamentFinishSoonTimeRemaining() end


---@return integer
function GetTournamentFinishNowRule() end


---@return player
function GetTournamentFinishNowPlayer() end


---@param whichPlayer player
---@return integer
function GetTournamentScore(whichPlayer) end


---@return string
function GetSaveBasicFilename() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param whichPlayerEvent playerevent
---@return event
function TriggerRegisterPlayerEvent(whichTrigger, whichPlayer, whichPlayerEvent) end


---@return player
function GetTriggerPlayer() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param whichPlayerUnitEvent playerunitevent
---@param filter boolexpr
---@return event
function TriggerRegisterPlayerUnitEvent(whichTrigger, whichPlayer, whichPlayerUnitEvent, filter) end


---@return unit
function GetLevelingUnit() end


---@return unit
function GetLearningUnit() end


---@return integer
function GetLearnedSkill() end


---@return integer
function GetLearnedSkillLevel() end


---@return unit
function GetRevivableUnit() end


---@return unit
function GetRevivingUnit() end


---@return unit
function GetAttacker() end


---@return unit
function GetRescuer() end


---@return unit
function GetDyingUnit() end


---@return unit
function GetKillingUnit() end


---@return unit
function GetDecayingUnit() end


---@return unit
function GetConstructingStructure() end


---@return unit
function GetCancelledStructure() end


---@return unit
function GetConstructedStructure() end


---@return unit
function GetResearchingUnit() end


---@return integer
function GetResearched() end


---@return integer
function GetTrainedUnitType() end


---@return unit
function GetTrainedUnit() end


---@return unit
function GetDetectedUnit() end


---@return unit
function GetSummoningUnit() end


---@return unit
function GetSummonedUnit() end


---@return unit
function GetTransportUnit() end


---@return unit
function GetLoadedUnit() end


---@return unit
function GetSellingUnit() end


---@return unit
function GetSoldUnit() end


---@return unit
function GetBuyingUnit() end


---@return item
function GetSoldItem() end


---@return unit
function GetChangingUnit() end


---@return player
function GetChangingUnitPrevOwner() end


---@return unit
function GetManipulatingUnit() end


---@return item
function GetManipulatedItem() end


---@return unit
function GetOrderedUnit() end


---@return integer
function GetIssuedOrderId() end


---@return real
function GetOrderPointX() end


---@return real
function GetOrderPointY() end


---@return location
function GetOrderPointLoc() end


---@return widget
function GetOrderTarget() end


---@return destructable
function GetOrderTargetDestructable() end


---@return item
function GetOrderTargetItem() end


---@return unit
function GetOrderTargetUnit() end


---@return unit
function GetSpellAbilityUnit() end


---@return integer
function GetSpellAbilityId() end


---@return ability
function GetSpellAbility() end


---@return location
function GetSpellTargetLoc() end


---@return real
function GetSpellTargetX() end


---@return real
function GetSpellTargetY() end


---@return destructable
function GetSpellTargetDestructable() end


---@return item
function GetSpellTargetItem() end


---@return unit
function GetSpellTargetUnit() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param whichAlliance alliancetype
---@return event
function TriggerRegisterPlayerAllianceChange(whichTrigger, whichPlayer, whichAlliance) end


---@param whichTrigger trigger
---@param whichPlayer player
---@param whichState playerstate
---@param opcode limitop
---@param limitval real
---@return event
function TriggerRegisterPlayerStateEvent(whichTrigger, whichPlayer, whichState, opcode, limitval) end


---@return playerstate
function GetEventPlayerState() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param chatMessageToDetect string
---@param exactMatchOnly boolean
---@return event
function TriggerRegisterPlayerChatEvent(whichTrigger, whichPlayer, chatMessageToDetect, exactMatchOnly) end


---@return string
function GetEventPlayerChatString() end


---@return string
function GetEventPlayerChatStringMatched() end


---@param whichTrigger trigger
---@param whichWidget widget
---@return event
function TriggerRegisterDeathEvent(whichTrigger, whichWidget) end


---@return unit
function GetTriggerUnit() end


---@param whichTrigger trigger
---@param whichUnit unit
---@param whichState unitstate
---@param opcode limitop
---@param limitval real
---@return event
function TriggerRegisterUnitStateEvent(whichTrigger, whichUnit, whichState, opcode, limitval) end


---@return unitstate
function GetEventUnitState() end


---@param whichTrigger trigger
---@param whichUnit unit
---@param whichEvent unitevent
---@return event
function TriggerRegisterUnitEvent(whichTrigger, whichUnit, whichEvent) end


---@return real
function GetEventDamage() end


---@return unit
function GetEventDamageSource() end


---@return player
function GetEventDetectingPlayer() end


---@param whichTrigger trigger
---@param whichUnit unit
---@param whichEvent unitevent
---@param filter boolexpr
---@return event
function TriggerRegisterFilterUnitEvent(whichTrigger, whichUnit, whichEvent, filter) end


---@return unit
function GetEventTargetUnit() end


---@param whichTrigger trigger
---@param whichUnit unit
---@param range real
---@param filter boolexpr
---@return event
function TriggerRegisterUnitInRange(whichTrigger, whichUnit, range, filter) end


---@param whichTrigger trigger
---@param condition boolexpr
---@return triggercondition
function TriggerAddCondition(whichTrigger, condition) end


---@param whichTrigger trigger
---@param whichCondition triggercondition
---@return void
function TriggerRemoveCondition(whichTrigger, whichCondition) end


---@param whichTrigger trigger
---@return void
function TriggerClearConditions(whichTrigger) end


---@param whichTrigger trigger
---@param actionFunc code
---@return triggeraction
function TriggerAddAction(whichTrigger, actionFunc) end


---@param whichTrigger trigger
---@param whichAction triggeraction
---@return void
function TriggerRemoveAction(whichTrigger, whichAction) end


---@param whichTrigger trigger
---@return void
function TriggerClearActions(whichTrigger) end


---@param timeout real
---@return void
function TriggerSleepAction(timeout) end


---@param s sound
---@param offset real
---@return void
function TriggerWaitForSound(s, offset) end


---@param whichTrigger trigger
---@return boolean
function TriggerEvaluate(whichTrigger) end


---@param whichTrigger trigger
---@return void
function TriggerExecute(whichTrigger) end


---@param whichTrigger trigger
---@return void
function TriggerExecuteWait(whichTrigger) end


---@return void
function TriggerSyncStart() end


---@return void
function TriggerSyncReady() end


---@param whichWidget widget
---@return real
function GetWidgetLife(whichWidget) end


---@param whichWidget widget
---@param newLife real
---@return void
function SetWidgetLife(whichWidget, newLife) end


---@param whichWidget widget
---@return real
function GetWidgetX(whichWidget) end


---@param whichWidget widget
---@return real
function GetWidgetY(whichWidget) end


---@return widget
function GetTriggerWidget() end


---@param objectid integer
---@param x real
---@param y real
---@param face real
---@param scale real
---@param variation integer
---@return destructable
function CreateDestructable(objectid, x, y, face, scale, variation) end


---@param objectid integer
---@param x real
---@param y real
---@param z real
---@param face real
---@param scale real
---@param variation integer
---@return destructable
function CreateDestructableZ(objectid, x, y, z, face, scale, variation) end


---@param objectid integer
---@param x real
---@param y real
---@param face real
---@param scale real
---@param variation integer
---@return destructable
function CreateDeadDestructable(objectid, x, y, face, scale, variation) end


---@param objectid integer
---@param x real
---@param y real
---@param z real
---@param face real
---@param scale real
---@param variation integer
---@return destructable
function CreateDeadDestructableZ(objectid, x, y, z, face, scale, variation) end


---@param d destructable
---@return void
function RemoveDestructable(d) end


---@param d destructable
---@return void
function KillDestructable(d) end


---@param d destructable
---@param flag boolean
---@return void
function SetDestructableInvulnerable(d, flag) end


---@param d destructable
---@return boolean
function IsDestructableInvulnerable(d) end


---@param r rect
---@param filter boolexpr
---@param actionFunc code
---@return void
function EnumDestructablesInRect(r, filter, actionFunc) end


---@param d destructable
---@return integer
function GetDestructableTypeId(d) end


---@param d destructable
---@return real
function GetDestructableX(d) end


---@param d destructable
---@return real
function GetDestructableY(d) end


---@param d destructable
---@param life real
---@return void
function SetDestructableLife(d, life) end


---@param d destructable
---@return real
function GetDestructableLife(d) end


---@param d destructable
---@param max real
---@return void
function SetDestructableMaxLife(d, max) end


---@param d destructable
---@return real
function GetDestructableMaxLife(d) end


---@param d destructable
---@param life real
---@param birth boolean
---@return void
function DestructableRestoreLife(d, life, birth) end


---@param d destructable
---@param whichAnimation string
---@return void
function QueueDestructableAnimation(d, whichAnimation) end


---@param d destructable
---@param whichAnimation string
---@return void
function SetDestructableAnimation(d, whichAnimation) end


---@param d destructable
---@param speedFactor real
---@return void
function SetDestructableAnimationSpeed(d, speedFactor) end


---@param d destructable
---@param flag boolean
---@return void
function ShowDestructable(d, flag) end


---@param d destructable
---@return real
function GetDestructableOccluderHeight(d) end


---@param d destructable
---@param height real
---@return void
function SetDestructableOccluderHeight(d, height) end


---@param d destructable
---@return string
function GetDestructableName(d) end


---@return destructable
function GetTriggerDestructable() end


---@param itemid integer
---@param x real
---@param y real
---@return item
function CreateItem(itemid, x, y) end


---@param whichItem item
---@return void
function RemoveItem(whichItem) end


---@param whichItem item
---@return player
function GetItemPlayer(whichItem) end


---@param i item
---@return integer
function GetItemTypeId(i) end


---@param i item
---@return real
function GetItemX(i) end


---@param i item
---@return real
function GetItemY(i) end


---@param i item
---@param x real
---@param y real
---@return void
function SetItemPosition(i, x, y) end


---@param whichItem item
---@param flag boolean
---@return void
function SetItemDropOnDeath(whichItem, flag) end


---@param i item
---@param flag boolean
---@return void
function SetItemDroppable(i, flag) end


---@param i item
---@param flag boolean
---@return void
function SetItemPawnable(i, flag) end


---@param whichItem item
---@param whichPlayer player
---@param changeColor boolean
---@return void
function SetItemPlayer(whichItem, whichPlayer, changeColor) end


---@param whichItem item
---@param flag boolean
---@return void
function SetItemInvulnerable(whichItem, flag) end


---@param whichItem item
---@return boolean
function IsItemInvulnerable(whichItem) end


---@param whichItem item
---@param show boolean
---@return void
function SetItemVisible(whichItem, show) end


---@param whichItem item
---@return boolean
function IsItemVisible(whichItem) end


---@param whichItem item
---@return boolean
function IsItemOwned(whichItem) end


---@param whichItem item
---@return boolean
function IsItemPowerup(whichItem) end


---@param whichItem item
---@return boolean
function IsItemSellable(whichItem) end


---@param whichItem item
---@return boolean
function IsItemPawnable(whichItem) end


---@param itemId integer
---@return boolean
function IsItemIdPowerup(itemId) end


---@param itemId integer
---@return boolean
function IsItemIdSellable(itemId) end


---@param itemId integer
---@return boolean
function IsItemIdPawnable(itemId) end


---@param r rect
---@param filter boolexpr
---@param actionFunc code
---@return void
function EnumItemsInRect(r, filter, actionFunc) end


---@param whichItem item
---@return integer
function GetItemLevel(whichItem) end


---@param whichItem item
---@return itemtype
function GetItemType(whichItem) end


---@param whichItem item
---@param unitId integer
---@return void
function SetItemDropID(whichItem, unitId) end


---@param whichItem item
---@return string
function GetItemName(whichItem) end


---@param whichItem item
---@return integer
function GetItemCharges(whichItem) end


---@param whichItem item
---@param charges integer
---@return void
function SetItemCharges(whichItem, charges) end


---@param whichItem item
---@return integer
function GetItemUserData(whichItem) end


---@param whichItem item
---@param data integer
---@return void
function SetItemUserData(whichItem, data) end


---@param id player
---@param unitid integer
---@param x real
---@param y real
---@param face real
---@return unit
function CreateUnit(id, unitid, x, y, face) end


---@param whichPlayer player
---@param unitname string
---@param x real
---@param y real
---@param face real
---@return unit
function CreateUnitByName(whichPlayer, unitname, x, y, face) end


---@param id player
---@param unitid integer
---@param whichLocation location
---@param face real
---@return unit
function CreateUnitAtLoc(id, unitid, whichLocation, face) end


---@param id player
---@param unitname string
---@param whichLocation location
---@param face real
---@return unit
function CreateUnitAtLocByName(id, unitname, whichLocation, face) end


---@param whichPlayer player
---@param unitid integer
---@param x real
---@param y real
---@param face real
---@return unit
function CreateCorpse(whichPlayer, unitid, x, y, face) end


---@param whichUnit unit
---@return void
function KillUnit(whichUnit) end


---@param whichUnit unit
---@return void
function RemoveUnit(whichUnit) end


---@param whichUnit unit
---@param show boolean
---@return void
function ShowUnit(whichUnit, show) end


---@param whichUnit unit
---@param whichUnitState unitstate
---@param newVal real
---@return void
function SetUnitState(whichUnit, whichUnitState, newVal) end


---@param whichUnit unit
---@param newX real
---@return void
function SetUnitX(whichUnit, newX) end


---@param whichUnit unit
---@param newY real
---@return void
function SetUnitY(whichUnit, newY) end


---@param whichUnit unit
---@param newX real
---@param newY real
---@return void
function SetUnitPosition(whichUnit, newX, newY) end


---@param whichUnit unit
---@param whichLocation location
---@return void
function SetUnitPositionLoc(whichUnit, whichLocation) end


---@param whichUnit unit
---@param facingAngle real
---@return void
function SetUnitFacing(whichUnit, facingAngle) end


---@param whichUnit unit
---@param facingAngle real
---@param duration real
---@return void
function SetUnitFacingTimed(whichUnit, facingAngle, duration) end


---@param whichUnit unit
---@param newSpeed real
---@return void
function SetUnitMoveSpeed(whichUnit, newSpeed) end


---@param whichUnit unit
---@param newHeight real
---@param rate real
---@return void
function SetUnitFlyHeight(whichUnit, newHeight, rate) end


---@param whichUnit unit
---@param newTurnSpeed real
---@return void
function SetUnitTurnSpeed(whichUnit, newTurnSpeed) end


---@param whichUnit unit
---@param newPropWindowAngle real
---@return void
function SetUnitPropWindow(whichUnit, newPropWindowAngle) end


---@param whichUnit unit
---@param newAcquireRange real
---@return void
function SetUnitAcquireRange(whichUnit, newAcquireRange) end


---@param whichUnit unit
---@param creepGuard boolean
---@return void
function SetUnitCreepGuard(whichUnit, creepGuard) end


---@param whichUnit unit
---@return real
function GetUnitAcquireRange(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitTurnSpeed(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitPropWindow(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitFlyHeight(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitDefaultAcquireRange(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitDefaultTurnSpeed(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitDefaultPropWindow(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitDefaultFlyHeight(whichUnit) end


---@param whichUnit unit
---@param whichPlayer player
---@param changeColor boolean
---@return void
function SetUnitOwner(whichUnit, whichPlayer, changeColor) end


---@param whichUnit unit
---@param whichColor playercolor
---@return void
function SetUnitColor(whichUnit, whichColor) end


---@param whichUnit unit
---@param scaleX real
---@param scaleY real
---@param scaleZ real
---@return void
function SetUnitScale(whichUnit, scaleX, scaleY, scaleZ) end


---@param whichUnit unit
---@param timeScale real
---@return void
function SetUnitTimeScale(whichUnit, timeScale) end


---@param whichUnit unit
---@param blendTime real
---@return void
function SetUnitBlendTime(whichUnit, blendTime) end


---@param whichUnit unit
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetUnitVertexColor(whichUnit, red, green, blue, alpha) end


---@param whichUnit unit
---@param whichAnimation string
---@return void
function QueueUnitAnimation(whichUnit, whichAnimation) end


---@param whichUnit unit
---@param whichAnimation string
---@return void
function SetUnitAnimation(whichUnit, whichAnimation) end


---@param whichUnit unit
---@param whichAnimation integer
---@return void
function SetUnitAnimationByIndex(whichUnit, whichAnimation) end


---@param whichUnit unit
---@param whichAnimation string
---@param rarity raritycontrol
---@return void
function SetUnitAnimationWithRarity(whichUnit, whichAnimation, rarity) end


---@param whichUnit unit
---@param animProperties string
---@param add boolean
---@return void
function AddUnitAnimationProperties(whichUnit, animProperties, add) end


---@param whichUnit unit
---@param whichBone string
---@param lookAtTarget unit
---@param offsetX real
---@param offsetY real
---@param offsetZ real
---@return void
function SetUnitLookAt(whichUnit, whichBone, lookAtTarget, offsetX, offsetY, offsetZ) end


---@param whichUnit unit
---@return void
function ResetUnitLookAt(whichUnit) end


---@param whichUnit unit
---@param byWhichPlayer player
---@param flag boolean
---@return void
function SetUnitRescuable(whichUnit, byWhichPlayer, flag) end


---@param whichUnit unit
---@param range real
---@return void
function SetUnitRescueRange(whichUnit, range) end


---@param whichHero unit
---@param newStr integer
---@param permanent boolean
---@return void
function SetHeroStr(whichHero, newStr, permanent) end


---@param whichHero unit
---@param newAgi integer
---@param permanent boolean
---@return void
function SetHeroAgi(whichHero, newAgi, permanent) end


---@param whichHero unit
---@param newInt integer
---@param permanent boolean
---@return void
function SetHeroInt(whichHero, newInt, permanent) end


---@param whichHero unit
---@param includeBonuses boolean
---@return integer
function GetHeroStr(whichHero, includeBonuses) end


---@param whichHero unit
---@param includeBonuses boolean
---@return integer
function GetHeroAgi(whichHero, includeBonuses) end


---@param whichHero unit
---@param includeBonuses boolean
---@return integer
function GetHeroInt(whichHero, includeBonuses) end


---@param whichHero unit
---@param howManyLevels integer
---@return boolean
function UnitStripHeroLevel(whichHero, howManyLevels) end


---@param whichHero unit
---@return integer
function GetHeroXP(whichHero) end


---@param whichHero unit
---@param newXpVal integer
---@param showEyeCandy boolean
---@return void
function SetHeroXP(whichHero, newXpVal, showEyeCandy) end


---@param whichHero unit
---@return integer
function GetHeroSkillPoints(whichHero) end


---@param whichHero unit
---@param skillPointDelta integer
---@return boolean
function UnitModifySkillPoints(whichHero, skillPointDelta) end


---@param whichHero unit
---@param xpToAdd integer
---@param showEyeCandy boolean
---@return void
function AddHeroXP(whichHero, xpToAdd, showEyeCandy) end


---@param whichHero unit
---@param level integer
---@param showEyeCandy boolean
---@return void
function SetHeroLevel(whichHero, level, showEyeCandy) end


---@param whichHero unit
---@return integer
function GetHeroLevel(whichHero) end


---@param whichUnit unit
---@return integer
function GetUnitLevel(whichUnit) end


---@param whichHero unit
---@return string
function GetHeroProperName(whichHero) end


---@param whichHero unit
---@param flag boolean
---@return void
function SuspendHeroXP(whichHero, flag) end


---@param whichHero unit
---@return boolean
function IsSuspendedXP(whichHero) end


---@param whichHero unit
---@param abilcode integer
---@return void
function SelectHeroSkill(whichHero, abilcode) end


---@param whichUnit unit
---@param abilcode integer
---@return integer
function GetUnitAbilityLevel(whichUnit, abilcode) end


---@param whichUnit unit
---@param abilcode integer
---@return integer
function DecUnitAbilityLevel(whichUnit, abilcode) end


---@param whichUnit unit
---@param abilcode integer
---@return integer
function IncUnitAbilityLevel(whichUnit, abilcode) end


---@param whichUnit unit
---@param abilcode integer
---@param level integer
---@return integer
function SetUnitAbilityLevel(whichUnit, abilcode, level) end


---@param whichHero unit
---@param x real
---@param y real
---@param doEyecandy boolean
---@return boolean
function ReviveHero(whichHero, x, y, doEyecandy) end


---@param whichHero unit
---@param loc location
---@param doEyecandy boolean
---@return boolean
function ReviveHeroLoc(whichHero, loc, doEyecandy) end


---@param whichUnit unit
---@param exploded boolean
---@return void
function SetUnitExploded(whichUnit, exploded) end


---@param whichUnit unit
---@param flag boolean
---@return void
function SetUnitInvulnerable(whichUnit, flag) end


---@param whichUnit unit
---@param flag boolean
---@return void
function PauseUnit(whichUnit, flag) end


---@param whichHero unit
---@return boolean
function IsUnitPaused(whichHero) end


---@param whichUnit unit
---@param flag boolean
---@return void
function SetUnitPathing(whichUnit, flag) end


---@return void
function ClearSelection() end


---@param whichUnit unit
---@param flag boolean
---@return void
function SelectUnit(whichUnit, flag) end


---@param whichUnit unit
---@return integer
function GetUnitPointValue(whichUnit) end


---@param unitType integer
---@return integer
function GetUnitPointValueByType(unitType) end


---@param whichUnit unit
---@param whichItem item
---@return boolean
function UnitAddItem(whichUnit, whichItem) end


---@param whichUnit unit
---@param itemId integer
---@return item
function UnitAddItemById(whichUnit, itemId) end


---@param whichUnit unit
---@param itemId integer
---@param itemSlot integer
---@return boolean
function UnitAddItemToSlotById(whichUnit, itemId, itemSlot) end


---@param whichUnit unit
---@param whichItem item
---@return void
function UnitRemoveItem(whichUnit, whichItem) end


---@param whichUnit unit
---@param itemSlot integer
---@return item
function UnitRemoveItemFromSlot(whichUnit, itemSlot) end


---@param whichUnit unit
---@param whichItem item
---@return boolean
function UnitHasItem(whichUnit, whichItem) end


---@param whichUnit unit
---@param itemSlot integer
---@return item
function UnitItemInSlot(whichUnit, itemSlot) end


---@param whichUnit unit
---@return integer
function UnitInventorySize(whichUnit) end


---@param whichUnit unit
---@param whichItem item
---@param x real
---@param y real
---@return boolean
function UnitDropItemPoint(whichUnit, whichItem, x, y) end


---@param whichUnit unit
---@param whichItem item
---@param slot integer
---@return boolean
function UnitDropItemSlot(whichUnit, whichItem, slot) end


---@param whichUnit unit
---@param whichItem item
---@param target widget
---@return boolean
function UnitDropItemTarget(whichUnit, whichItem, target) end


---@param whichUnit unit
---@param whichItem item
---@return boolean
function UnitUseItem(whichUnit, whichItem) end


---@param whichUnit unit
---@param whichItem item
---@param x real
---@param y real
---@return boolean
function UnitUseItemPoint(whichUnit, whichItem, x, y) end


---@param whichUnit unit
---@param whichItem item
---@param target widget
---@return boolean
function UnitUseItemTarget(whichUnit, whichItem, target) end


---@param whichUnit unit
---@return real
function GetUnitX(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitY(whichUnit) end


---@param whichUnit unit
---@return location
function GetUnitLoc(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitFacing(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitMoveSpeed(whichUnit) end


---@param whichUnit unit
---@return real
function GetUnitDefaultMoveSpeed(whichUnit) end


---@param whichUnit unit
---@param whichUnitState unitstate
---@return real
function GetUnitState(whichUnit, whichUnitState) end


---@param whichUnit unit
---@return player
function GetOwningPlayer(whichUnit) end


---@param whichUnit unit
---@return integer
function GetUnitTypeId(whichUnit) end


---@param whichUnit unit
---@return race
function GetUnitRace(whichUnit) end


---@param whichUnit unit
---@return string
function GetUnitName(whichUnit) end


---@param whichUnit unit
---@return integer
function GetUnitFoodUsed(whichUnit) end


---@param whichUnit unit
---@return integer
function GetUnitFoodMade(whichUnit) end


---@param unitId integer
---@return integer
function GetFoodMade(unitId) end


---@param unitId integer
---@return integer
function GetFoodUsed(unitId) end


---@param whichUnit unit
---@param useFood boolean
---@return void
function SetUnitUseFood(whichUnit, useFood) end


---@param whichUnit unit
---@return location
function GetUnitRallyPoint(whichUnit) end


---@param whichUnit unit
---@return unit
function GetUnitRallyUnit(whichUnit) end


---@param whichUnit unit
---@return destructable
function GetUnitRallyDestructable(whichUnit) end


---@param whichUnit unit
---@param whichGroup group
---@return boolean
function IsUnitInGroup(whichUnit, whichGroup) end


---@param whichUnit unit
---@param whichForce force
---@return boolean
function IsUnitInForce(whichUnit, whichForce) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitOwnedByPlayer(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitAlly(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitEnemy(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitVisible(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitDetected(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitInvisible(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitFogged(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitMasked(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichPlayer player
---@return boolean
function IsUnitSelected(whichUnit, whichPlayer) end


---@param whichUnit unit
---@param whichRace race
---@return boolean
function IsUnitRace(whichUnit, whichRace) end


---@param whichUnit unit
---@param whichUnitType unittype
---@return boolean
function IsUnitType(whichUnit, whichUnitType) end


---@param whichUnit unit
---@param whichSpecifiedUnit unit
---@return boolean
function IsUnit(whichUnit, whichSpecifiedUnit) end


---@param whichUnit unit
---@param otherUnit unit
---@param distance real
---@return boolean
function IsUnitInRange(whichUnit, otherUnit, distance) end


---@param whichUnit unit
---@param x real
---@param y real
---@param distance real
---@return boolean
function IsUnitInRangeXY(whichUnit, x, y, distance) end


---@param whichUnit unit
---@param whichLocation location
---@param distance real
---@return boolean
function IsUnitInRangeLoc(whichUnit, whichLocation, distance) end


---@param whichUnit unit
---@return boolean
function IsUnitHidden(whichUnit) end


---@param whichUnit unit
---@return boolean
function IsUnitIllusion(whichUnit) end


---@param whichUnit unit
---@param whichTransport unit
---@return boolean
function IsUnitInTransport(whichUnit, whichTransport) end


---@param whichUnit unit
---@return boolean
function IsUnitLoaded(whichUnit) end


---@param unitId integer
---@return boolean
function IsHeroUnitId(unitId) end


---@param unitId integer
---@param whichUnitType unittype
---@return boolean
function IsUnitIdType(unitId, whichUnitType) end


---@param whichUnit unit
---@param whichPlayer player
---@param share boolean
---@return void
function UnitShareVision(whichUnit, whichPlayer, share) end


---@param whichUnit unit
---@param suspend boolean
---@return void
function UnitSuspendDecay(whichUnit, suspend) end


---@param whichUnit unit
---@param whichUnitType unittype
---@return boolean
function UnitAddType(whichUnit, whichUnitType) end


---@param whichUnit unit
---@param whichUnitType unittype
---@return boolean
function UnitRemoveType(whichUnit, whichUnitType) end


---@param whichUnit unit
---@param abilityId integer
---@return boolean
function UnitAddAbility(whichUnit, abilityId) end


---@param whichUnit unit
---@param abilityId integer
---@return boolean
function UnitRemoveAbility(whichUnit, abilityId) end


---@param whichUnit unit
---@param permanent boolean
---@param abilityId integer
---@return boolean
function UnitMakeAbilityPermanent(whichUnit, permanent, abilityId) end


---@param whichUnit unit
---@param removePositive boolean
---@param removeNegative boolean
---@return void
function UnitRemoveBuffs(whichUnit, removePositive, removeNegative) end


---@param whichUnit unit
---@param removePositive boolean
---@param removeNegative boolean
---@param magic boolean
---@param physical boolean
---@param timedLife boolean
---@param aura boolean
---@param autoDispel boolean
---@return void
function UnitRemoveBuffsEx(whichUnit, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel) end


---@param whichUnit unit
---@param removePositive boolean
---@param removeNegative boolean
---@param magic boolean
---@param physical boolean
---@param timedLife boolean
---@param aura boolean
---@param autoDispel boolean
---@return boolean
function UnitHasBuffsEx(whichUnit, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel) end


---@param whichUnit unit
---@param removePositive boolean
---@param removeNegative boolean
---@param magic boolean
---@param physical boolean
---@param timedLife boolean
---@param aura boolean
---@param autoDispel boolean
---@return integer
function UnitCountBuffsEx(whichUnit, removePositive, removeNegative, magic, physical, timedLife, aura, autoDispel) end


---@param whichUnit unit
---@param add boolean
---@return void
function UnitAddSleep(whichUnit, add) end


---@param whichUnit unit
---@return boolean
function UnitCanSleep(whichUnit) end


---@param whichUnit unit
---@param add boolean
---@return void
function UnitAddSleepPerm(whichUnit, add) end


---@param whichUnit unit
---@return boolean
function UnitCanSleepPerm(whichUnit) end


---@param whichUnit unit
---@return boolean
function UnitIsSleeping(whichUnit) end


---@param whichUnit unit
---@return void
function UnitWakeUp(whichUnit) end


---@param whichUnit unit
---@param buffId integer
---@param duration real
---@return void
function UnitApplyTimedLife(whichUnit, buffId, duration) end


---@param whichUnit unit
---@param flag boolean
---@return boolean
function UnitIgnoreAlarm(whichUnit, flag) end


---@param whichUnit unit
---@return boolean
function UnitIgnoreAlarmToggled(whichUnit) end


---@param whichUnit unit
---@return void
function UnitResetCooldown(whichUnit) end


---@param whichUnit unit
---@param constructionPercentage integer
---@return void
function UnitSetConstructionProgress(whichUnit, constructionPercentage) end


---@param whichUnit unit
---@param upgradePercentage integer
---@return void
function UnitSetUpgradeProgress(whichUnit, upgradePercentage) end


---@param whichUnit unit
---@param flag boolean
---@return void
function UnitPauseTimedLife(whichUnit, flag) end


---@param whichUnit unit
---@param flag boolean
---@return void
function UnitSetUsesAltIcon(whichUnit, flag) end


---@param whichUnit unit
---@param delay real
---@param radius real
---@param x real
---@param y real
---@param amount real
---@param attack boolean
---@param ranged boolean
---@param attackType attacktype
---@param damageType damagetype
---@param weaponType weapontype
---@return boolean
function UnitDamagePoint(whichUnit, delay, radius, x, y, amount, attack, ranged, attackType, damageType, weaponType) end


---@param whichUnit unit
---@param target widget
---@param amount real
---@param attack boolean
---@param ranged boolean
---@param attackType attacktype
---@param damageType damagetype
---@param weaponType weapontype
---@return boolean
function UnitDamageTarget(whichUnit, target, amount, attack, ranged, attackType, damageType, weaponType) end


---@param whichUnit unit
---@param order string
---@return boolean
function IssueImmediateOrder(whichUnit, order) end


---@param whichUnit unit
---@param order integer
---@return boolean
function IssueImmediateOrderById(whichUnit, order) end


---@param whichUnit unit
---@param order string
---@param x real
---@param y real
---@return boolean
function IssuePointOrder(whichUnit, order, x, y) end


---@param whichUnit unit
---@param order string
---@param whichLocation location
---@return boolean
function IssuePointOrderLoc(whichUnit, order, whichLocation) end


---@param whichUnit unit
---@param order integer
---@param x real
---@param y real
---@return boolean
function IssuePointOrderById(whichUnit, order, x, y) end


---@param whichUnit unit
---@param order integer
---@param whichLocation location
---@return boolean
function IssuePointOrderByIdLoc(whichUnit, order, whichLocation) end


---@param whichUnit unit
---@param order string
---@param targetWidget widget
---@return boolean
function IssueTargetOrder(whichUnit, order, targetWidget) end


---@param whichUnit unit
---@param order integer
---@param targetWidget widget
---@return boolean
function IssueTargetOrderById(whichUnit, order, targetWidget) end


---@param whichUnit unit
---@param order string
---@param x real
---@param y real
---@param instantTargetWidget widget
---@return boolean
function IssueInstantPointOrder(whichUnit, order, x, y, instantTargetWidget) end


---@param whichUnit unit
---@param order integer
---@param x real
---@param y real
---@param instantTargetWidget widget
---@return boolean
function IssueInstantPointOrderById(whichUnit, order, x, y, instantTargetWidget) end


---@param whichUnit unit
---@param order string
---@param targetWidget widget
---@param instantTargetWidget widget
---@return boolean
function IssueInstantTargetOrder(whichUnit, order, targetWidget, instantTargetWidget) end


---@param whichUnit unit
---@param order integer
---@param targetWidget widget
---@param instantTargetWidget widget
---@return boolean
function IssueInstantTargetOrderById(whichUnit, order, targetWidget, instantTargetWidget) end


---@param whichPeon unit
---@param unitToBuild string
---@param x real
---@param y real
---@return boolean
function IssueBuildOrder(whichPeon, unitToBuild, x, y) end


---@param whichPeon unit
---@param unitId integer
---@param x real
---@param y real
---@return boolean
function IssueBuildOrderById(whichPeon, unitId, x, y) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitToBuild string
---@return boolean
function IssueNeutralImmediateOrder(forWhichPlayer, neutralStructure, unitToBuild) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitId integer
---@return boolean
function IssueNeutralImmediateOrderById(forWhichPlayer, neutralStructure, unitId) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitToBuild string
---@param x real
---@param y real
---@return boolean
function IssueNeutralPointOrder(forWhichPlayer, neutralStructure, unitToBuild, x, y) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitId integer
---@param x real
---@param y real
---@return boolean
function IssueNeutralPointOrderById(forWhichPlayer, neutralStructure, unitId, x, y) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitToBuild string
---@param target widget
---@return boolean
function IssueNeutralTargetOrder(forWhichPlayer, neutralStructure, unitToBuild, target) end


---@param forWhichPlayer player
---@param neutralStructure unit
---@param unitId integer
---@param target widget
---@return boolean
function IssueNeutralTargetOrderById(forWhichPlayer, neutralStructure, unitId, target) end


---@param whichUnit unit
---@return integer
function GetUnitCurrentOrder(whichUnit) end


---@param whichUnit unit
---@param amount integer
---@return void
function SetResourceAmount(whichUnit, amount) end


---@param whichUnit unit
---@param amount integer
---@return void
function AddResourceAmount(whichUnit, amount) end


---@param whichUnit unit
---@return integer
function GetResourceAmount(whichUnit) end


---@param waygate unit
---@return real
function WaygateGetDestinationX(waygate) end


---@param waygate unit
---@return real
function WaygateGetDestinationY(waygate) end


---@param waygate unit
---@param x real
---@param y real
---@return void
function WaygateSetDestination(waygate, x, y) end


---@param waygate unit
---@param activate boolean
---@return void
function WaygateActivate(waygate, activate) end


---@param waygate unit
---@return boolean
function WaygateIsActive(waygate) end


---@param itemId integer
---@param currentStock integer
---@param stockMax integer
---@return void
function AddItemToAllStock(itemId, currentStock, stockMax) end


---@param whichUnit unit
---@param itemId integer
---@param currentStock integer
---@param stockMax integer
---@return void
function AddItemToStock(whichUnit, itemId, currentStock, stockMax) end


---@param unitId integer
---@param currentStock integer
---@param stockMax integer
---@return void
function AddUnitToAllStock(unitId, currentStock, stockMax) end


---@param whichUnit unit
---@param unitId integer
---@param currentStock integer
---@param stockMax integer
---@return void
function AddUnitToStock(whichUnit, unitId, currentStock, stockMax) end


---@param itemId integer
---@return void
function RemoveItemFromAllStock(itemId) end


---@param whichUnit unit
---@param itemId integer
---@return void
function RemoveItemFromStock(whichUnit, itemId) end


---@param unitId integer
---@return void
function RemoveUnitFromAllStock(unitId) end


---@param whichUnit unit
---@param unitId integer
---@return void
function RemoveUnitFromStock(whichUnit, unitId) end


---@param slots integer
---@return void
function SetAllItemTypeSlots(slots) end


---@param slots integer
---@return void
function SetAllUnitTypeSlots(slots) end


---@param whichUnit unit
---@param slots integer
---@return void
function SetItemTypeSlots(whichUnit, slots) end


---@param whichUnit unit
---@param slots integer
---@return void
function SetUnitTypeSlots(whichUnit, slots) end


---@param whichUnit unit
---@return integer
function GetUnitUserData(whichUnit) end


---@param whichUnit unit
---@param data integer
---@return void
function SetUnitUserData(whichUnit, data) end


---@param number integer
---@return player
function Player(number) end


---@return player
function GetLocalPlayer() end


---@param whichPlayer player
---@param otherPlayer player
---@return boolean
function IsPlayerAlly(whichPlayer, otherPlayer) end


---@param whichPlayer player
---@param otherPlayer player
---@return boolean
function IsPlayerEnemy(whichPlayer, otherPlayer) end


---@param whichPlayer player
---@param whichForce force
---@return boolean
function IsPlayerInForce(whichPlayer, whichForce) end


---@param whichPlayer player
---@return boolean
function IsPlayerObserver(whichPlayer) end


---@param x real
---@param y real
---@param whichPlayer player
---@return boolean
function IsVisibleToPlayer(x, y, whichPlayer) end


---@param whichLocation location
---@param whichPlayer player
---@return boolean
function IsLocationVisibleToPlayer(whichLocation, whichPlayer) end


---@param x real
---@param y real
---@param whichPlayer player
---@return boolean
function IsFoggedToPlayer(x, y, whichPlayer) end


---@param whichLocation location
---@param whichPlayer player
---@return boolean
function IsLocationFoggedToPlayer(whichLocation, whichPlayer) end


---@param x real
---@param y real
---@param whichPlayer player
---@return boolean
function IsMaskedToPlayer(x, y, whichPlayer) end


---@param whichLocation location
---@param whichPlayer player
---@return boolean
function IsLocationMaskedToPlayer(whichLocation, whichPlayer) end


---@param whichPlayer player
---@return race
function GetPlayerRace(whichPlayer) end


---@param whichPlayer player
---@return integer
function GetPlayerId(whichPlayer) end


---@param whichPlayer player
---@param includeIncomplete boolean
---@return integer
function GetPlayerUnitCount(whichPlayer, includeIncomplete) end


---@param whichPlayer player
---@param unitName string
---@param includeIncomplete boolean
---@param includeUpgrades boolean
---@return integer
function GetPlayerTypedUnitCount(whichPlayer, unitName, includeIncomplete, includeUpgrades) end


---@param whichPlayer player
---@param includeIncomplete boolean
---@return integer
function GetPlayerStructureCount(whichPlayer, includeIncomplete) end


---@param whichPlayer player
---@param whichPlayerState playerstate
---@return integer
function GetPlayerState(whichPlayer, whichPlayerState) end


---@param whichPlayer player
---@param whichPlayerScore playerscore
---@return integer
function GetPlayerScore(whichPlayer, whichPlayerScore) end


---@param sourcePlayer player
---@param otherPlayer player
---@param whichAllianceSetting alliancetype
---@return boolean
function GetPlayerAlliance(sourcePlayer, otherPlayer, whichAllianceSetting) end


---@param whichPlayer player
---@return real
function GetPlayerHandicap(whichPlayer) end


---@param whichPlayer player
---@return real
function GetPlayerHandicapXP(whichPlayer) end


---@param whichPlayer player
---@param handicap real
---@return void
function SetPlayerHandicap(whichPlayer, handicap) end


---@param whichPlayer player
---@param handicap real
---@return void
function SetPlayerHandicapXP(whichPlayer, handicap) end


---@param whichPlayer player
---@param techid integer
---@param maximum integer
---@return void
function SetPlayerTechMaxAllowed(whichPlayer, techid, maximum) end


---@param whichPlayer player
---@param techid integer
---@return integer
function GetPlayerTechMaxAllowed(whichPlayer, techid) end


---@param whichPlayer player
---@param techid integer
---@param levels integer
---@return void
function AddPlayerTechResearched(whichPlayer, techid, levels) end


---@param whichPlayer player
---@param techid integer
---@param setToLevel integer
---@return void
function SetPlayerTechResearched(whichPlayer, techid, setToLevel) end


---@param whichPlayer player
---@param techid integer
---@param specificonly boolean
---@return boolean
function GetPlayerTechResearched(whichPlayer, techid, specificonly) end


---@param whichPlayer player
---@param techid integer
---@param specificonly boolean
---@return integer
function GetPlayerTechCount(whichPlayer, techid, specificonly) end


---@param whichPlayer player
---@param newOwner integer
---@return void
function SetPlayerUnitsOwner(whichPlayer, newOwner) end


---@param whichPlayer player
---@param toWhichPlayers force
---@param flag boolean
---@return void
function CripplePlayer(whichPlayer, toWhichPlayers, flag) end


---@param whichPlayer player
---@param abilid integer
---@param avail boolean
---@return void
function SetPlayerAbilityAvailable(whichPlayer, abilid, avail) end


---@param whichPlayer player
---@param whichPlayerState playerstate
---@param value integer
---@return void
function SetPlayerState(whichPlayer, whichPlayerState, value) end


---@param whichPlayer player
---@param gameResult playergameresult
---@return void
function RemovePlayer(whichPlayer, gameResult) end


---@param whichPlayer player
---@return void
function CachePlayerHeroData(whichPlayer) end


---@param forWhichPlayer player
---@param whichState fogstate
---@param where rect
---@param useSharedVision boolean
---@return void
function SetFogStateRect(forWhichPlayer, whichState, where, useSharedVision) end


---@param forWhichPlayer player
---@param whichState fogstate
---@param centerx real
---@param centerY real
---@param radius real
---@param useSharedVision boolean
---@return void
function SetFogStateRadius(forWhichPlayer, whichState, centerx, centerY, radius, useSharedVision) end


---@param forWhichPlayer player
---@param whichState fogstate
---@param center location
---@param radius real
---@param useSharedVision boolean
---@return void
function SetFogStateRadiusLoc(forWhichPlayer, whichState, center, radius, useSharedVision) end


---@param enable boolean
---@return void
function FogMaskEnable(enable) end


---@return boolean
function IsFogMaskEnabled() end


---@param enable boolean
---@return void
function FogEnable(enable) end


---@return boolean
function IsFogEnabled() end


---@param forWhichPlayer player
---@param whichState fogstate
---@param where rect
---@param useSharedVision boolean
---@param afterUnits boolean
---@return fogmodifier
function CreateFogModifierRect(forWhichPlayer, whichState, where, useSharedVision, afterUnits) end


---@param forWhichPlayer player
---@param whichState fogstate
---@param centerx real
---@param centerY real
---@param radius real
---@param useSharedVision boolean
---@param afterUnits boolean
---@return fogmodifier
function CreateFogModifierRadius(forWhichPlayer, whichState, centerx, centerY, radius, useSharedVision, afterUnits) end


---@param forWhichPlayer player
---@param whichState fogstate
---@param center location
---@param radius real
---@param useSharedVision boolean
---@param afterUnits boolean
---@return fogmodifier
function CreateFogModifierRadiusLoc(forWhichPlayer, whichState, center, radius, useSharedVision, afterUnits) end


---@param whichFogModifier fogmodifier
---@return void
function DestroyFogModifier(whichFogModifier) end


---@param whichFogModifier fogmodifier
---@return void
function FogModifierStart(whichFogModifier) end


---@param whichFogModifier fogmodifier
---@return void
function FogModifierStop(whichFogModifier) end


---@return version
function VersionGet() end


---@param whichVersion version
---@return boolean
function VersionCompatible(whichVersion) end


---@param whichVersion version
---@return boolean
function VersionSupported(whichVersion) end


---@param doScoreScreen boolean
---@return void
function EndGame(doScoreScreen) end


---@param newLevel string
---@param doScoreScreen boolean
---@return void
function ChangeLevel(newLevel, doScoreScreen) end


---@param doScoreScreen boolean
---@return void
function RestartGame(doScoreScreen) end


---@return void
function ReloadGame() end


---@param r race
---@return void
function SetCampaignMenuRace(r) end


---@param campaignIndex integer
---@return void
function SetCampaignMenuRaceEx(campaignIndex) end


---@return void
function ForceCampaignSelectScreen() end


---@param saveFileName string
---@param doScoreScreen boolean
---@return void
function LoadGame(saveFileName, doScoreScreen) end


---@param saveFileName string
---@return void
function SaveGame(saveFileName) end


---@param sourceDirName string
---@param destDirName string
---@return boolean
function RenameSaveDirectory(sourceDirName, destDirName) end


---@param sourceDirName string
---@return boolean
function RemoveSaveDirectory(sourceDirName) end


---@param sourceSaveName string
---@param destSaveName string
---@return boolean
function CopySaveGame(sourceSaveName, destSaveName) end


---@param saveName string
---@return boolean
function SaveGameExists(saveName) end


---@return void
function SyncSelections() end


---@param whichFloatGameState fgamestate
---@param value real
---@return void
function SetFloatGameState(whichFloatGameState, value) end


---@param whichFloatGameState fgamestate
---@return real
function GetFloatGameState(whichFloatGameState) end


---@param whichIntegerGameState igamestate
---@param value integer
---@return void
function SetIntegerGameState(whichIntegerGameState, value) end


---@param whichIntegerGameState igamestate
---@return integer
function GetIntegerGameState(whichIntegerGameState) end


---@param cleared boolean
---@return void
function SetTutorialCleared(cleared) end


---@param campaignNumber integer
---@param missionNumber integer
---@param available boolean
---@return void
function SetMissionAvailable(campaignNumber, missionNumber, available) end


---@param campaignNumber integer
---@param available boolean
---@return void
function SetCampaignAvailable(campaignNumber, available) end


---@param campaignNumber integer
---@param available boolean
---@return void
function SetOpCinematicAvailable(campaignNumber, available) end


---@param campaignNumber integer
---@param available boolean
---@return void
function SetEdCinematicAvailable(campaignNumber, available) end


---@return gamedifficulty
function GetDefaultDifficulty() end


---@param g gamedifficulty
---@return void
function SetDefaultDifficulty(g) end


---@param whichButton integer
---@param visible boolean
---@return void
function SetCustomCampaignButtonVisible(whichButton, visible) end


---@param whichButton integer
---@return boolean
function GetCustomCampaignButtonVisible(whichButton) end


---@return void
function DoNotSaveReplay() end


---@return dialog
function DialogCreate() end


---@param whichDialog dialog
---@return void
function DialogDestroy(whichDialog) end


---@param whichDialog dialog
---@return void
function DialogClear(whichDialog) end


---@param whichDialog dialog
---@param messageText string
---@return void
function DialogSetMessage(whichDialog, messageText) end


---@param whichDialog dialog
---@param buttonText string
---@param hotkey integer
---@return button
function DialogAddButton(whichDialog, buttonText, hotkey) end


---@param whichDialog dialog
---@param doScoreScreen boolean
---@param buttonText string
---@param hotkey integer
---@return button
function DialogAddQuitButton(whichDialog, doScoreScreen, buttonText, hotkey) end


---@param whichPlayer player
---@param whichDialog dialog
---@param flag boolean
---@return void
function DialogDisplay(whichPlayer, whichDialog, flag) end


---@return boolean
function ReloadGameCachesFromDisk() end


---@param campaignFile string
---@return gamecache
function InitGameCache(campaignFile) end


---@param whichCache gamecache
---@return boolean
function SaveGameCache(whichCache) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param value integer
---@return void
function StoreInteger(cache, missionKey, key, value) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param value real
---@return void
function StoreReal(cache, missionKey, key, value) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param value boolean
---@return void
function StoreBoolean(cache, missionKey, key, value) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param whichUnit unit
---@return boolean
function StoreUnit(cache, missionKey, key, whichUnit) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param value string
---@return boolean
function StoreString(cache, missionKey, key, value) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function SyncStoredInteger(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function SyncStoredReal(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function SyncStoredBoolean(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function SyncStoredUnit(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function SyncStoredString(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function HaveStoredInteger(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function HaveStoredReal(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function HaveStoredBoolean(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function HaveStoredUnit(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function HaveStoredString(cache, missionKey, key) end


---@param cache gamecache
---@return void
function FlushGameCache(cache) end


---@param cache gamecache
---@param missionKey string
---@return void
function FlushStoredMission(cache, missionKey) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function FlushStoredInteger(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function FlushStoredReal(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function FlushStoredBoolean(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function FlushStoredUnit(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return void
function FlushStoredString(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return integer
function GetStoredInteger(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return real
function GetStoredReal(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return boolean
function GetStoredBoolean(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@return string
function GetStoredString(cache, missionKey, key) end


---@param cache gamecache
---@param missionKey string
---@param key string
---@param forWhichPlayer player
---@param x real
---@param y real
---@param facing real
---@return unit
function RestoreUnit(cache, missionKey, key, forWhichPlayer, x, y, facing) end


---@return hashtable
function InitHashtable() end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param value integer
---@return void
function SaveInteger(table, parentKey, childKey, value) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param value real
---@return void
function SaveReal(table, parentKey, childKey, value) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param value boolean
---@return void
function SaveBoolean(table, parentKey, childKey, value) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param value string
---@return boolean
function SaveStr(table, parentKey, childKey, value) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichPlayer player
---@return boolean
function SavePlayerHandle(table, parentKey, childKey, whichPlayer) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichWidget widget
---@return boolean
function SaveWidgetHandle(table, parentKey, childKey, whichWidget) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichDestructable destructable
---@return boolean
function SaveDestructableHandle(table, parentKey, childKey, whichDestructable) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichItem item
---@return boolean
function SaveItemHandle(table, parentKey, childKey, whichItem) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichUnit unit
---@return boolean
function SaveUnitHandle(table, parentKey, childKey, whichUnit) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichAbility ability
---@return boolean
function SaveAbilityHandle(table, parentKey, childKey, whichAbility) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTimer timer
---@return boolean
function SaveTimerHandle(table, parentKey, childKey, whichTimer) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTrigger trigger
---@return boolean
function SaveTriggerHandle(table, parentKey, childKey, whichTrigger) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTriggercondition triggercondition
---@return boolean
function SaveTriggerConditionHandle(table, parentKey, childKey, whichTriggercondition) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTriggeraction triggeraction
---@return boolean
function SaveTriggerActionHandle(table, parentKey, childKey, whichTriggeraction) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichEvent event
---@return boolean
function SaveTriggerEventHandle(table, parentKey, childKey, whichEvent) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichForce force
---@return boolean
function SaveForceHandle(table, parentKey, childKey, whichForce) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichGroup group
---@return boolean
function SaveGroupHandle(table, parentKey, childKey, whichGroup) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichLocation location
---@return boolean
function SaveLocationHandle(table, parentKey, childKey, whichLocation) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichRect rect
---@return boolean
function SaveRectHandle(table, parentKey, childKey, whichRect) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichBoolexpr boolexpr
---@return boolean
function SaveBooleanExprHandle(table, parentKey, childKey, whichBoolexpr) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichSound sound
---@return boolean
function SaveSoundHandle(table, parentKey, childKey, whichSound) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichEffect effect
---@return boolean
function SaveEffectHandle(table, parentKey, childKey, whichEffect) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichUnitpool unitpool
---@return boolean
function SaveUnitPoolHandle(table, parentKey, childKey, whichUnitpool) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichItempool itempool
---@return boolean
function SaveItemPoolHandle(table, parentKey, childKey, whichItempool) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichQuest quest
---@return boolean
function SaveQuestHandle(table, parentKey, childKey, whichQuest) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichQuestitem questitem
---@return boolean
function SaveQuestItemHandle(table, parentKey, childKey, whichQuestitem) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichDefeatcondition defeatcondition
---@return boolean
function SaveDefeatConditionHandle(table, parentKey, childKey, whichDefeatcondition) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTimerdialog timerdialog
---@return boolean
function SaveTimerDialogHandle(table, parentKey, childKey, whichTimerdialog) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichLeaderboard leaderboard
---@return boolean
function SaveLeaderboardHandle(table, parentKey, childKey, whichLeaderboard) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichMultiboard multiboard
---@return boolean
function SaveMultiboardHandle(table, parentKey, childKey, whichMultiboard) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichMultiboarditem multiboarditem
---@return boolean
function SaveMultiboardItemHandle(table, parentKey, childKey, whichMultiboarditem) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTrackable trackable
---@return boolean
function SaveTrackableHandle(table, parentKey, childKey, whichTrackable) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichDialog dialog
---@return boolean
function SaveDialogHandle(table, parentKey, childKey, whichDialog) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichButton button
---@return boolean
function SaveButtonHandle(table, parentKey, childKey, whichButton) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichTexttag texttag
---@return boolean
function SaveTextTagHandle(table, parentKey, childKey, whichTexttag) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichLightning lightning
---@return boolean
function SaveLightningHandle(table, parentKey, childKey, whichLightning) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichImage image
---@return boolean
function SaveImageHandle(table, parentKey, childKey, whichImage) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichUbersplat ubersplat
---@return boolean
function SaveUbersplatHandle(table, parentKey, childKey, whichUbersplat) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichRegion region
---@return boolean
function SaveRegionHandle(table, parentKey, childKey, whichRegion) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichFogState fogstate
---@return boolean
function SaveFogStateHandle(table, parentKey, childKey, whichFogState) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichFogModifier fogmodifier
---@return boolean
function SaveFogModifierHandle(table, parentKey, childKey, whichFogModifier) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichAgent agent
---@return boolean
function SaveAgentHandle(table, parentKey, childKey, whichAgent) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichHashtable hashtable
---@return boolean
function SaveHashtableHandle(table, parentKey, childKey, whichHashtable) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@param whichFrameHandle framehandle
---@return boolean
function SaveFrameHandle(table, parentKey, childKey, whichFrameHandle) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return integer
function LoadInteger(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return real
function LoadReal(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function LoadBoolean(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return string
function LoadStr(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return player
function LoadPlayerHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return widget
function LoadWidgetHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return destructable
function LoadDestructableHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return item
function LoadItemHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return unit
function LoadUnitHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return ability
function LoadAbilityHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return timer
function LoadTimerHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return trigger
function LoadTriggerHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return triggercondition
function LoadTriggerConditionHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return triggeraction
function LoadTriggerActionHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return event
function LoadTriggerEventHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return force
function LoadForceHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return group
function LoadGroupHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return location
function LoadLocationHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return rect
function LoadRectHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolexpr
function LoadBooleanExprHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return sound
function LoadSoundHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return effect
function LoadEffectHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return unitpool
function LoadUnitPoolHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return itempool
function LoadItemPoolHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return quest
function LoadQuestHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return questitem
function LoadQuestItemHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return defeatcondition
function LoadDefeatConditionHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return timerdialog
function LoadTimerDialogHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return leaderboard
function LoadLeaderboardHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return multiboard
function LoadMultiboardHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return multiboarditem
function LoadMultiboardItemHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return trackable
function LoadTrackableHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return dialog
function LoadDialogHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return button
function LoadButtonHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return texttag
function LoadTextTagHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return lightning
function LoadLightningHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return image
function LoadImageHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return ubersplat
function LoadUbersplatHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return region
function LoadRegionHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return fogstate
function LoadFogStateHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return fogmodifier
function LoadFogModifierHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return hashtable
function LoadHashtableHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return framehandle
function LoadFrameHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function HaveSavedInteger(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function HaveSavedReal(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function HaveSavedBoolean(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function HaveSavedString(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return boolean
function HaveSavedHandle(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return void
function RemoveSavedInteger(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return void
function RemoveSavedReal(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return void
function RemoveSavedBoolean(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return void
function RemoveSavedString(table, parentKey, childKey) end


---@param table hashtable
---@param parentKey integer
---@param childKey integer
---@return void
function RemoveSavedHandle(table, parentKey, childKey) end


---@param table hashtable
---@return void
function FlushParentHashtable(table) end


---@param table hashtable
---@param parentKey integer
---@return void
function FlushChildHashtable(table, parentKey) end


---@param lowBound integer
---@param highBound integer
---@return integer
function GetRandomInt(lowBound, highBound) end


---@param lowBound real
---@param highBound real
---@return real
function GetRandomReal(lowBound, highBound) end


---@return unitpool
function CreateUnitPool() end


---@param whichPool unitpool
---@return void
function DestroyUnitPool(whichPool) end


---@param whichPool unitpool
---@param unitId integer
---@param weight real
---@return void
function UnitPoolAddUnitType(whichPool, unitId, weight) end


---@param whichPool unitpool
---@param unitId integer
---@return void
function UnitPoolRemoveUnitType(whichPool, unitId) end


---@param whichPool unitpool
---@param forWhichPlayer player
---@param x real
---@param y real
---@param facing real
---@return unit
function PlaceRandomUnit(whichPool, forWhichPlayer, x, y, facing) end


---@return itempool
function CreateItemPool() end


---@param whichItemPool itempool
---@return void
function DestroyItemPool(whichItemPool) end


---@param whichItemPool itempool
---@param itemId integer
---@param weight real
---@return void
function ItemPoolAddItemType(whichItemPool, itemId, weight) end


---@param whichItemPool itempool
---@param itemId integer
---@return void
function ItemPoolRemoveItemType(whichItemPool, itemId) end


---@param whichItemPool itempool
---@param x real
---@param y real
---@return item
function PlaceRandomItem(whichItemPool, x, y) end


---@param level integer
---@return integer
function ChooseRandomCreep(level) end


---@return integer
function ChooseRandomNPBuilding() end


---@param level integer
---@return integer
function ChooseRandomItem(level) end


---@param whichType itemtype
---@param level integer
---@return integer
function ChooseRandomItemEx(whichType, level) end


---@param seed integer
---@return void
function SetRandomSeed(seed) end


---@param a real
---@param b real
---@param c real
---@param d real
---@param e real
---@return void
function SetTerrainFog(a, b, c, d, e) end


---@return void
function ResetTerrainFog() end


---@param a real
---@param b real
---@param c real
---@param d real
---@param e real
---@return void
function SetUnitFog(a, b, c, d, e) end


---@param style integer
---@param zstart real
---@param zend real
---@param density real
---@param red real
---@param green real
---@param blue real
---@return void
function SetTerrainFogEx(style, zstart, zend, density, red, green, blue) end


---@param toPlayer player
---@param x real
---@param y real
---@param message string
---@return void
function DisplayTextToPlayer(toPlayer, x, y, message) end


---@param toPlayer player
---@param x real
---@param y real
---@param duration real
---@param message string
---@return void
function DisplayTimedTextToPlayer(toPlayer, x, y, duration, message) end


---@param toPlayer player
---@param x real
---@param y real
---@param duration real
---@param message string
---@return void
function DisplayTimedTextFromPlayer(toPlayer, x, y, duration, message) end


---@return void
function ClearTextMessages() end


---@param terrainDNCFile string
---@param unitDNCFile string
---@return void
function SetDayNightModels(terrainDNCFile, unitDNCFile) end


---@param skyModelFile string
---@return void
function SetSkyModel(skyModelFile) end


---@param b boolean
---@return void
function EnableUserControl(b) end


---@param b boolean
---@return void
function EnableUserUI(b) end


---@param b boolean
---@return void
function SuspendTimeOfDay(b) end


---@param r real
---@return void
function SetTimeOfDayScale(r) end


---@return real
function GetTimeOfDayScale() end


---@param flag boolean
---@param fadeDuration real
---@return void
function ShowInterface(flag, fadeDuration) end


---@param flag boolean
---@return void
function PauseGame(flag) end


---@param whichUnit unit
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function UnitAddIndicator(whichUnit, red, green, blue, alpha) end


---@param whichWidget widget
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function AddIndicator(whichWidget, red, green, blue, alpha) end


---@param x real
---@param y real
---@param duration real
---@return void
function PingMinimap(x, y, duration) end


---@param x real
---@param y real
---@param duration real
---@param red integer
---@param green integer
---@param blue integer
---@param extraEffects boolean
---@return void
function PingMinimapEx(x, y, duration, red, green, blue, extraEffects) end


---@param flag boolean
---@return void
function EnableOcclusion(flag) end


---@param introText string
---@return void
function SetIntroShotText(introText) end


---@param introModelPath string
---@return void
function SetIntroShotModel(introModelPath) end


---@param b boolean
---@return void
function EnableWorldFogBoundary(b) end


---@param modelName string
---@return void
function PlayModelCinematic(modelName) end


---@param movieName string
---@return void
function PlayCinematic(movieName) end


---@param key string
---@return void
function ForceUIKey(key) end


---@return void
function ForceUICancel() end


---@return void
function DisplayLoadDialog() end


---@param iconPath string
---@return void
function SetAltMinimapIcon(iconPath) end


---@param flag boolean
---@return void
function DisableRestartMission(flag) end


---@return texttag
function CreateTextTag() end


---@param t texttag
---@return void
function DestroyTextTag(t) end


---@param t texttag
---@param s string
---@param height real
---@return void
function SetTextTagText(t, s, height) end


---@param t texttag
---@param x real
---@param y real
---@param heightOffset real
---@return void
function SetTextTagPos(t, x, y, heightOffset) end


---@param t texttag
---@param whichUnit unit
---@param heightOffset real
---@return void
function SetTextTagPosUnit(t, whichUnit, heightOffset) end


---@param t texttag
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetTextTagColor(t, red, green, blue, alpha) end


---@param t texttag
---@param xvel real
---@param yvel real
---@return void
function SetTextTagVelocity(t, xvel, yvel) end


---@param t texttag
---@param flag boolean
---@return void
function SetTextTagVisibility(t, flag) end


---@param t texttag
---@param flag boolean
---@return void
function SetTextTagSuspended(t, flag) end


---@param t texttag
---@param flag boolean
---@return void
function SetTextTagPermanent(t, flag) end


---@param t texttag
---@param age real
---@return void
function SetTextTagAge(t, age) end


---@param t texttag
---@param lifespan real
---@return void
function SetTextTagLifespan(t, lifespan) end


---@param t texttag
---@param fadepoint real
---@return void
function SetTextTagFadepoint(t, fadepoint) end


---@param reserved integer
---@return void
function SetReservedLocalHeroButtons(reserved) end


---@return integer
function GetAllyColorFilterState() end


---@param state integer
---@return void
function SetAllyColorFilterState(state) end


---@return boolean
function GetCreepCampFilterState() end


---@param state boolean
---@return void
function SetCreepCampFilterState(state) end


---@param enableAlly boolean
---@param enableCreep boolean
---@return void
function EnableMinimapFilterButtons(enableAlly, enableCreep) end


---@param state boolean
---@param ui boolean
---@return void
function EnableDragSelect(state, ui) end


---@param state boolean
---@param ui boolean
---@return void
function EnablePreSelect(state, ui) end


---@param state boolean
---@param ui boolean
---@return void
function EnableSelect(state, ui) end


---@param trackableModelPath string
---@param x real
---@param y real
---@param facing real
---@return trackable
function CreateTrackable(trackableModelPath, x, y, facing) end


---@return quest
function CreateQuest() end


---@param whichQuest quest
---@return void
function DestroyQuest(whichQuest) end


---@param whichQuest quest
---@param title string
---@return void
function QuestSetTitle(whichQuest, title) end


---@param whichQuest quest
---@param description string
---@return void
function QuestSetDescription(whichQuest, description) end


---@param whichQuest quest
---@param iconPath string
---@return void
function QuestSetIconPath(whichQuest, iconPath) end


---@param whichQuest quest
---@param required boolean
---@return void
function QuestSetRequired(whichQuest, required) end


---@param whichQuest quest
---@param completed boolean
---@return void
function QuestSetCompleted(whichQuest, completed) end


---@param whichQuest quest
---@param discovered boolean
---@return void
function QuestSetDiscovered(whichQuest, discovered) end


---@param whichQuest quest
---@param failed boolean
---@return void
function QuestSetFailed(whichQuest, failed) end


---@param whichQuest quest
---@param enabled boolean
---@return void
function QuestSetEnabled(whichQuest, enabled) end


---@param whichQuest quest
---@return boolean
function IsQuestRequired(whichQuest) end


---@param whichQuest quest
---@return boolean
function IsQuestCompleted(whichQuest) end


---@param whichQuest quest
---@return boolean
function IsQuestDiscovered(whichQuest) end


---@param whichQuest quest
---@return boolean
function IsQuestFailed(whichQuest) end


---@param whichQuest quest
---@return boolean
function IsQuestEnabled(whichQuest) end


---@param whichQuest quest
---@return questitem
function QuestCreateItem(whichQuest) end


---@param whichQuestItem questitem
---@param description string
---@return void
function QuestItemSetDescription(whichQuestItem, description) end


---@param whichQuestItem questitem
---@param completed boolean
---@return void
function QuestItemSetCompleted(whichQuestItem, completed) end


---@param whichQuestItem questitem
---@return boolean
function IsQuestItemCompleted(whichQuestItem) end


---@return defeatcondition
function CreateDefeatCondition() end


---@param whichCondition defeatcondition
---@return void
function DestroyDefeatCondition(whichCondition) end


---@param whichCondition defeatcondition
---@param description string
---@return void
function DefeatConditionSetDescription(whichCondition, description) end


---@return void
function FlashQuestDialogButton() end


---@return void
function ForceQuestDialogUpdate() end


---@param t timer
---@return timerdialog
function CreateTimerDialog(t) end


---@param whichDialog timerdialog
---@return void
function DestroyTimerDialog(whichDialog) end


---@param whichDialog timerdialog
---@param title string
---@return void
function TimerDialogSetTitle(whichDialog, title) end


---@param whichDialog timerdialog
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function TimerDialogSetTitleColor(whichDialog, red, green, blue, alpha) end


---@param whichDialog timerdialog
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function TimerDialogSetTimeColor(whichDialog, red, green, blue, alpha) end


---@param whichDialog timerdialog
---@param speedMultFactor real
---@return void
function TimerDialogSetSpeed(whichDialog, speedMultFactor) end


---@param whichDialog timerdialog
---@param display boolean
---@return void
function TimerDialogDisplay(whichDialog, display) end


---@param whichDialog timerdialog
---@return boolean
function IsTimerDialogDisplayed(whichDialog) end


---@param whichDialog timerdialog
---@param timeRemaining real
---@return void
function TimerDialogSetRealTimeRemaining(whichDialog, timeRemaining) end


---@return leaderboard
function CreateLeaderboard() end


---@param lb leaderboard
---@return void
function DestroyLeaderboard(lb) end


---@param lb leaderboard
---@param show boolean
---@return void
function LeaderboardDisplay(lb, show) end


---@param lb leaderboard
---@return boolean
function IsLeaderboardDisplayed(lb) end


---@param lb leaderboard
---@return integer
function LeaderboardGetItemCount(lb) end


---@param lb leaderboard
---@param count integer
---@return void
function LeaderboardSetSizeByItemCount(lb, count) end


---@param lb leaderboard
---@param label string
---@param value integer
---@param p player
---@return void
function LeaderboardAddItem(lb, label, value, p) end


---@param lb leaderboard
---@param index integer
---@return void
function LeaderboardRemoveItem(lb, index) end


---@param lb leaderboard
---@param p player
---@return void
function LeaderboardRemovePlayerItem(lb, p) end


---@param lb leaderboard
---@return void
function LeaderboardClear(lb) end


---@param lb leaderboard
---@param ascending boolean
---@return void
function LeaderboardSortItemsByValue(lb, ascending) end


---@param lb leaderboard
---@param ascending boolean
---@return void
function LeaderboardSortItemsByPlayer(lb, ascending) end


---@param lb leaderboard
---@param ascending boolean
---@return void
function LeaderboardSortItemsByLabel(lb, ascending) end


---@param lb leaderboard
---@param p player
---@return boolean
function LeaderboardHasPlayerItem(lb, p) end


---@param lb leaderboard
---@param p player
---@return integer
function LeaderboardGetPlayerIndex(lb, p) end


---@param lb leaderboard
---@param label string
---@return void
function LeaderboardSetLabel(lb, label) end


---@param lb leaderboard
---@return string
function LeaderboardGetLabelText(lb) end


---@param toPlayer player
---@param lb leaderboard
---@return void
function PlayerSetLeaderboard(toPlayer, lb) end


---@param toPlayer player
---@return leaderboard
function PlayerGetLeaderboard(toPlayer) end


---@param lb leaderboard
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function LeaderboardSetLabelColor(lb, red, green, blue, alpha) end


---@param lb leaderboard
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function LeaderboardSetValueColor(lb, red, green, blue, alpha) end


---@param lb leaderboard
---@param showLabel boolean
---@param showNames boolean
---@param showValues boolean
---@param showIcons boolean
---@return void
function LeaderboardSetStyle(lb, showLabel, showNames, showValues, showIcons) end


---@param lb leaderboard
---@param whichItem integer
---@param val integer
---@return void
function LeaderboardSetItemValue(lb, whichItem, val) end


---@param lb leaderboard
---@param whichItem integer
---@param val string
---@return void
function LeaderboardSetItemLabel(lb, whichItem, val) end


---@param lb leaderboard
---@param whichItem integer
---@param showLabel boolean
---@param showValue boolean
---@param showIcon boolean
---@return void
function LeaderboardSetItemStyle(lb, whichItem, showLabel, showValue, showIcon) end


---@param lb leaderboard
---@param whichItem integer
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function LeaderboardSetItemLabelColor(lb, whichItem, red, green, blue, alpha) end


---@param lb leaderboard
---@param whichItem integer
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function LeaderboardSetItemValueColor(lb, whichItem, red, green, blue, alpha) end


---@return multiboard
function CreateMultiboard() end


---@param lb multiboard
---@return void
function DestroyMultiboard(lb) end


---@param lb multiboard
---@param show boolean
---@return void
function MultiboardDisplay(lb, show) end


---@param lb multiboard
---@return boolean
function IsMultiboardDisplayed(lb) end


---@param lb multiboard
---@param minimize boolean
---@return void
function MultiboardMinimize(lb, minimize) end


---@param lb multiboard
---@return boolean
function IsMultiboardMinimized(lb) end


---@param lb multiboard
---@return void
function MultiboardClear(lb) end


---@param lb multiboard
---@param label string
---@return void
function MultiboardSetTitleText(lb, label) end


---@param lb multiboard
---@return string
function MultiboardGetTitleText(lb) end


---@param lb multiboard
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function MultiboardSetTitleTextColor(lb, red, green, blue, alpha) end


---@param lb multiboard
---@return integer
function MultiboardGetRowCount(lb) end


---@param lb multiboard
---@return integer
function MultiboardGetColumnCount(lb) end


---@param lb multiboard
---@param count integer
---@return void
function MultiboardSetColumnCount(lb, count) end


---@param lb multiboard
---@param count integer
---@return void
function MultiboardSetRowCount(lb, count) end


---@param lb multiboard
---@param showValues boolean
---@param showIcons boolean
---@return void
function MultiboardSetItemsStyle(lb, showValues, showIcons) end


---@param lb multiboard
---@param value string
---@return void
function MultiboardSetItemsValue(lb, value) end


---@param lb multiboard
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function MultiboardSetItemsValueColor(lb, red, green, blue, alpha) end


---@param lb multiboard
---@param width real
---@return void
function MultiboardSetItemsWidth(lb, width) end


---@param lb multiboard
---@param iconPath string
---@return void
function MultiboardSetItemsIcon(lb, iconPath) end


---@param lb multiboard
---@param row integer
---@param column integer
---@return multiboarditem
function MultiboardGetItem(lb, row, column) end


---@param mbi multiboarditem
---@return void
function MultiboardReleaseItem(mbi) end


---@param mbi multiboarditem
---@param showValue boolean
---@param showIcon boolean
---@return void
function MultiboardSetItemStyle(mbi, showValue, showIcon) end


---@param mbi multiboarditem
---@param val string
---@return void
function MultiboardSetItemValue(mbi, val) end


---@param mbi multiboarditem
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function MultiboardSetItemValueColor(mbi, red, green, blue, alpha) end


---@param mbi multiboarditem
---@param width real
---@return void
function MultiboardSetItemWidth(mbi, width) end


---@param mbi multiboarditem
---@param iconFileName string
---@return void
function MultiboardSetItemIcon(mbi, iconFileName) end


---@param flag boolean
---@return void
function MultiboardSuppressDisplay(flag) end


---@param x real
---@param y real
---@return void
function SetCameraPosition(x, y) end


---@param x real
---@param y real
---@return void
function SetCameraQuickPosition(x, y) end


---@param x1 real
---@param y1 real
---@param x2 real
---@param y2 real
---@param x3 real
---@param y3 real
---@param x4 real
---@param y4 real
---@return void
function SetCameraBounds(x1, y1, x2, y2, x3, y3, x4, y4) end


---@return void
function StopCamera() end


---@param duration real
---@return void
function ResetToGameCamera(duration) end


---@param x real
---@param y real
---@return void
function PanCameraTo(x, y) end


---@param x real
---@param y real
---@param duration real
---@return void
function PanCameraToTimed(x, y, duration) end


---@param x real
---@param y real
---@param zOffsetDest real
---@return void
function PanCameraToWithZ(x, y, zOffsetDest) end


---@param x real
---@param y real
---@param zOffsetDest real
---@param duration real
---@return void
function PanCameraToTimedWithZ(x, y, zOffsetDest, duration) end


---@param cameraModelFile string
---@return void
function SetCinematicCamera(cameraModelFile) end


---@param x real
---@param y real
---@param radiansToSweep real
---@param duration real
---@return void
function SetCameraRotateMode(x, y, radiansToSweep, duration) end


---@param whichField camerafield
---@param value real
---@param duration real
---@return void
function SetCameraField(whichField, value, duration) end


---@param whichField camerafield
---@param offset real
---@param duration real
---@return void
function AdjustCameraField(whichField, offset, duration) end


---@param whichUnit unit
---@param xoffset real
---@param yoffset real
---@param inheritOrientation boolean
---@return void
function SetCameraTargetController(whichUnit, xoffset, yoffset, inheritOrientation) end


---@param whichUnit unit
---@param xoffset real
---@param yoffset real
---@return void
function SetCameraOrientController(whichUnit, xoffset, yoffset) end


---@return camerasetup
function CreateCameraSetup() end


---@param whichSetup camerasetup
---@param whichField camerafield
---@param value real
---@param duration real
---@return void
function CameraSetupSetField(whichSetup, whichField, value, duration) end


---@param whichSetup camerasetup
---@param whichField camerafield
---@return real
function CameraSetupGetField(whichSetup, whichField) end


---@param whichSetup camerasetup
---@param x real
---@param y real
---@param duration real
---@return void
function CameraSetupSetDestPosition(whichSetup, x, y, duration) end


---@param whichSetup camerasetup
---@return location
function CameraSetupGetDestPositionLoc(whichSetup) end


---@param whichSetup camerasetup
---@return real
function CameraSetupGetDestPositionX(whichSetup) end


---@param whichSetup camerasetup
---@return real
function CameraSetupGetDestPositionY(whichSetup) end


---@param whichSetup camerasetup
---@param doPan boolean
---@param panTimed boolean
---@return void
function CameraSetupApply(whichSetup, doPan, panTimed) end


---@param whichSetup camerasetup
---@param zDestOffset real
---@return void
function CameraSetupApplyWithZ(whichSetup, zDestOffset) end


---@param whichSetup camerasetup
---@param doPan boolean
---@param forceDuration real
---@return void
function CameraSetupApplyForceDuration(whichSetup, doPan, forceDuration) end


---@param whichSetup camerasetup
---@param zDestOffset real
---@param forceDuration real
---@return void
function CameraSetupApplyForceDurationWithZ(whichSetup, zDestOffset, forceDuration) end


---@param mag real
---@param velocity real
---@return void
function CameraSetTargetNoise(mag, velocity) end


---@param mag real
---@param velocity real
---@return void
function CameraSetSourceNoise(mag, velocity) end


---@param mag real
---@param velocity real
---@param vertOnly boolean
---@return void
function CameraSetTargetNoiseEx(mag, velocity, vertOnly) end


---@param mag real
---@param velocity real
---@param vertOnly boolean
---@return void
function CameraSetSourceNoiseEx(mag, velocity, vertOnly) end


---@param factor real
---@return void
function CameraSetSmoothingFactor(factor) end


---@param filename string
---@return void
function SetCineFilterTexture(filename) end


---@param whichMode blendmode
---@return void
function SetCineFilterBlendMode(whichMode) end


---@param whichFlags texmapflags
---@return void
function SetCineFilterTexMapFlags(whichFlags) end


---@param minu real
---@param minv real
---@param maxu real
---@param maxv real
---@return void
function SetCineFilterStartUV(minu, minv, maxu, maxv) end


---@param minu real
---@param minv real
---@param maxu real
---@param maxv real
---@return void
function SetCineFilterEndUV(minu, minv, maxu, maxv) end


---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetCineFilterStartColor(red, green, blue, alpha) end


---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetCineFilterEndColor(red, green, blue, alpha) end


---@param duration real
---@return void
function SetCineFilterDuration(duration) end


---@param flag boolean
---@return void
function DisplayCineFilter(flag) end


---@return boolean
function IsCineFilterDisplayed() end


---@param portraitUnitId integer
---@param color playercolor
---@param speakerTitle string
---@param text string
---@param sceneDuration real
---@param voiceoverDuration real
---@return void
function SetCinematicScene(portraitUnitId, color, speakerTitle, text, sceneDuration, voiceoverDuration) end


---@return void
function EndCinematicScene() end


---@param flag boolean
---@return void
function ForceCinematicSubtitles(flag) end


---@param whichMargin integer
---@return real
function GetCameraMargin(whichMargin) end


---@return real
function GetCameraBoundMinX() end


---@return real
function GetCameraBoundMinY() end


---@return real
function GetCameraBoundMaxX() end


---@return real
function GetCameraBoundMaxY() end


---@param whichField camerafield
---@return real
function GetCameraField(whichField) end


---@return real
function GetCameraTargetPositionX() end


---@return real
function GetCameraTargetPositionY() end


---@return real
function GetCameraTargetPositionZ() end


---@return location
function GetCameraTargetPositionLoc() end


---@return real
function GetCameraEyePositionX() end


---@return real
function GetCameraEyePositionY() end


---@return real
function GetCameraEyePositionZ() end


---@return location
function GetCameraEyePositionLoc() end


---@param environmentName string
---@return void
function NewSoundEnvironment(environmentName) end


---@param fileName string
---@param looping boolean
---@param is3D boolean
---@param stopwhenoutofrange boolean
---@param fadeInRate integer
---@param fadeOutRate integer
---@param eaxSetting string
---@return sound
function CreateSound(fileName, looping, is3D, stopwhenoutofrange, fadeInRate, fadeOutRate, eaxSetting) end


---@param fileName string
---@param looping boolean
---@param is3D boolean
---@param stopwhenoutofrange boolean
---@param fadeInRate integer
---@param fadeOutRate integer
---@param SLKEntryName string
---@return sound
function CreateSoundFilenameWithLabel(fileName, looping, is3D, stopwhenoutofrange, fadeInRate, fadeOutRate, SLKEntryName) end


---@param soundLabel string
---@param looping boolean
---@param is3D boolean
---@param stopwhenoutofrange boolean
---@param fadeInRate integer
---@param fadeOutRate integer
---@return sound
function CreateSoundFromLabel(soundLabel, looping, is3D, stopwhenoutofrange, fadeInRate, fadeOutRate) end


---@param soundLabel string
---@param fadeInRate integer
---@param fadeOutRate integer
---@return sound
function CreateMIDISound(soundLabel, fadeInRate, fadeOutRate) end


---@param soundHandle sound
---@param soundLabel string
---@return void
function SetSoundParamsFromLabel(soundHandle, soundLabel) end


---@param soundHandle sound
---@param cutoff real
---@return void
function SetSoundDistanceCutoff(soundHandle, cutoff) end


---@param soundHandle sound
---@param channel integer
---@return void
function SetSoundChannel(soundHandle, channel) end


---@param soundHandle sound
---@param volume integer
---@return void
function SetSoundVolume(soundHandle, volume) end


---@param soundHandle sound
---@param pitch real
---@return void
function SetSoundPitch(soundHandle, pitch) end


---@param soundHandle sound
---@param millisecs integer
---@return void
function SetSoundPlayPosition(soundHandle, millisecs) end


---@param soundHandle sound
---@param minDist real
---@param maxDist real
---@return void
function SetSoundDistances(soundHandle, minDist, maxDist) end


---@param soundHandle sound
---@param inside real
---@param outside real
---@param outsideVolume integer
---@return void
function SetSoundConeAngles(soundHandle, inside, outside, outsideVolume) end


---@param soundHandle sound
---@param x real
---@param y real
---@param z real
---@return void
function SetSoundConeOrientation(soundHandle, x, y, z) end


---@param soundHandle sound
---@param x real
---@param y real
---@param z real
---@return void
function SetSoundPosition(soundHandle, x, y, z) end


---@param soundHandle sound
---@param x real
---@param y real
---@param z real
---@return void
function SetSoundVelocity(soundHandle, x, y, z) end


---@param soundHandle sound
---@param whichUnit unit
---@return void
function AttachSoundToUnit(soundHandle, whichUnit) end


---@param soundHandle sound
---@return void
function StartSound(soundHandle) end


---@param soundHandle sound
---@param killWhenDone boolean
---@param fadeOut boolean
---@return void
function StopSound(soundHandle, killWhenDone, fadeOut) end


---@param soundHandle sound
---@return void
function KillSoundWhenDone(soundHandle) end


---@param musicName string
---@param random boolean
---@param index integer
---@return void
function SetMapMusic(musicName, random, index) end


---@return void
function ClearMapMusic() end


---@param musicName string
---@return void
function PlayMusic(musicName) end


---@param musicName string
---@param frommsecs integer
---@param fadeinmsecs integer
---@return void
function PlayMusicEx(musicName, frommsecs, fadeinmsecs) end


---@param fadeOut boolean
---@return void
function StopMusic(fadeOut) end


---@return void
function ResumeMusic() end


---@param musicFileName string
---@return void
function PlayThematicMusic(musicFileName) end


---@param musicFileName string
---@param frommsecs integer
---@return void
function PlayThematicMusicEx(musicFileName, frommsecs) end


---@return void
function EndThematicMusic() end


---@param volume integer
---@return void
function SetMusicVolume(volume) end


---@param millisecs integer
---@return void
function SetMusicPlayPosition(millisecs) end


---@param millisecs integer
---@return void
function SetThematicMusicPlayPosition(millisecs) end


---@param soundHandle sound
---@param duration integer
---@return void
function SetSoundDuration(soundHandle, duration) end


---@param soundHandle sound
---@return integer
function GetSoundDuration(soundHandle) end


---@param musicFileName string
---@return integer
function GetSoundFileDuration(musicFileName) end


---@param vgroup volumegroup
---@param scale real
---@return void
function VolumeGroupSetVolume(vgroup, scale) end


---@return void
function VolumeGroupReset() end


---@param soundHandle sound
---@return boolean
function GetSoundIsPlaying(soundHandle) end


---@param soundHandle sound
---@return boolean
function GetSoundIsLoading(soundHandle) end


---@param soundHandle sound
---@param byPosition boolean
---@param rectwidth real
---@param rectheight real
---@return void
function RegisterStackedSound(soundHandle, byPosition, rectwidth, rectheight) end


---@param soundHandle sound
---@param byPosition boolean
---@param rectwidth real
---@param rectheight real
---@return void
function UnregisterStackedSound(soundHandle, byPosition, rectwidth, rectheight) end


---@param where rect
---@param effectID integer
---@return weathereffect
function AddWeatherEffect(where, effectID) end


---@param whichEffect weathereffect
---@return void
function RemoveWeatherEffect(whichEffect) end


---@param whichEffect weathereffect
---@param enable boolean
---@return void
function EnableWeatherEffect(whichEffect, enable) end


---@param x real
---@param y real
---@param radius real
---@param depth real
---@param duration integer
---@param permanent boolean
---@return terraindeformation
function TerrainDeformCrater(x, y, radius, depth, duration, permanent) end


---@param x real
---@param y real
---@param radius real
---@param depth real
---@param duration integer
---@param count integer
---@param spaceWaves real
---@param timeWaves real
---@param radiusStartPct real
---@param limitNeg boolean
---@return terraindeformation
function TerrainDeformRipple(x, y, radius, depth, duration, count, spaceWaves, timeWaves, radiusStartPct, limitNeg) end


---@param x real
---@param y real
---@param dirX real
---@param dirY real
---@param distance real
---@param speed real
---@param radius real
---@param depth real
---@param trailTime integer
---@param count integer
---@return terraindeformation
function TerrainDeformWave(x, y, dirX, dirY, distance, speed, radius, depth, trailTime, count) end


---@param x real
---@param y real
---@param radius real
---@param minDelta real
---@param maxDelta real
---@param duration integer
---@param updateInterval integer
---@return terraindeformation
function TerrainDeformRandom(x, y, radius, minDelta, maxDelta, duration, updateInterval) end


---@param deformation terraindeformation
---@param duration integer
---@return void
function TerrainDeformStop(deformation, duration) end


---@return void
function TerrainDeformStopAll() end


---@param modelName string
---@param x real
---@param y real
---@return effect
function AddSpecialEffect(modelName, x, y) end


---@param modelName string
---@param where location
---@return effect
function AddSpecialEffectLoc(modelName, where) end


---@param modelName string
---@param targetWidget widget
---@param attachPointName string
---@return effect
function AddSpecialEffectTarget(modelName, targetWidget, attachPointName) end


---@param whichEffect effect
---@return void
function DestroyEffect(whichEffect) end


---@param abilityString string
---@param t effecttype
---@param x real
---@param y real
---@return effect
function AddSpellEffect(abilityString, t, x, y) end


---@param abilityString string
---@param t effecttype
---@param where location
---@return effect
function AddSpellEffectLoc(abilityString, t, where) end


---@param abilityId integer
---@param t effecttype
---@param x real
---@param y real
---@return effect
function AddSpellEffectById(abilityId, t, x, y) end


---@param abilityId integer
---@param t effecttype
---@param where location
---@return effect
function AddSpellEffectByIdLoc(abilityId, t, where) end


---@param modelName string
---@param t effecttype
---@param targetWidget widget
---@param attachPoint string
---@return effect
function AddSpellEffectTarget(modelName, t, targetWidget, attachPoint) end


---@param abilityId integer
---@param t effecttype
---@param targetWidget widget
---@param attachPoint string
---@return effect
function AddSpellEffectTargetById(abilityId, t, targetWidget, attachPoint) end


---@param codeName string
---@param checkVisibility boolean
---@param x1 real
---@param y1 real
---@param x2 real
---@param y2 real
---@return lightning
function AddLightning(codeName, checkVisibility, x1, y1, x2, y2) end


---@param codeName string
---@param checkVisibility boolean
---@param x1 real
---@param y1 real
---@param z1 real
---@param x2 real
---@param y2 real
---@param z2 real
---@return lightning
function AddLightningEx(codeName, checkVisibility, x1, y1, z1, x2, y2, z2) end


---@param whichBolt lightning
---@return boolean
function DestroyLightning(whichBolt) end


---@param whichBolt lightning
---@param checkVisibility boolean
---@param x1 real
---@param y1 real
---@param x2 real
---@param y2 real
---@return boolean
function MoveLightning(whichBolt, checkVisibility, x1, y1, x2, y2) end


---@param whichBolt lightning
---@param checkVisibility boolean
---@param x1 real
---@param y1 real
---@param z1 real
---@param x2 real
---@param y2 real
---@param z2 real
---@return boolean
function MoveLightningEx(whichBolt, checkVisibility, x1, y1, z1, x2, y2, z2) end


---@param whichBolt lightning
---@return real
function GetLightningColorA(whichBolt) end


---@param whichBolt lightning
---@return real
function GetLightningColorR(whichBolt) end


---@param whichBolt lightning
---@return real
function GetLightningColorG(whichBolt) end


---@param whichBolt lightning
---@return real
function GetLightningColorB(whichBolt) end


---@param whichBolt lightning
---@param r real
---@param g real
---@param b real
---@param a real
---@return boolean
function SetLightningColor(whichBolt, r, g, b, a) end


---@param abilityString string
---@param t effecttype
---@param index integer
---@return string
function GetAbilityEffect(abilityString, t, index) end


---@param abilityId integer
---@param t effecttype
---@param index integer
---@return string
function GetAbilityEffectById(abilityId, t, index) end


---@param abilityString string
---@param t soundtype
---@return string
function GetAbilitySound(abilityString, t) end


---@param abilityId integer
---@param t soundtype
---@return string
function GetAbilitySoundById(abilityId, t) end


---@param x real
---@param y real
---@return integer
function GetTerrainCliffLevel(x, y) end


---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetWaterBaseColor(red, green, blue, alpha) end


---@param val boolean
---@return void
function SetWaterDeforms(val) end


---@param x real
---@param y real
---@return integer
function GetTerrainType(x, y) end


---@param x real
---@param y real
---@return integer
function GetTerrainVariance(x, y) end


---@param x real
---@param y real
---@param terrainType integer
---@param variation integer
---@param area integer
---@param shape integer
---@return void
function SetTerrainType(x, y, terrainType, variation, area, shape) end


---@param x real
---@param y real
---@param t pathingtype
---@return boolean
function IsTerrainPathable(x, y, t) end


---@param x real
---@param y real
---@param t pathingtype
---@param flag boolean
---@return void
function SetTerrainPathable(x, y, t, flag) end


---@param file string
---@param sizeX real
---@param sizeY real
---@param sizeZ real
---@param posX real
---@param posY real
---@param posZ real
---@param originX real
---@param originY real
---@param originZ real
---@param imageType integer
---@return image
function CreateImage(file, sizeX, sizeY, sizeZ, posX, posY, posZ, originX, originY, originZ, imageType) end


---@param whichImage image
---@return void
function DestroyImage(whichImage) end


---@param whichImage image
---@param flag boolean
---@return void
function ShowImage(whichImage, flag) end


---@param whichImage image
---@param flag boolean
---@param height real
---@return void
function SetImageConstantHeight(whichImage, flag, height) end


---@param whichImage image
---@param x real
---@param y real
---@param z real
---@return void
function SetImagePosition(whichImage, x, y, z) end


---@param whichImage image
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@return void
function SetImageColor(whichImage, red, green, blue, alpha) end


---@param whichImage image
---@param flag boolean
---@return void
function SetImageRender(whichImage, flag) end


---@param whichImage image
---@param flag boolean
---@return void
function SetImageRenderAlways(whichImage, flag) end


---@param whichImage image
---@param flag boolean
---@param useWaterAlpha boolean
---@return void
function SetImageAboveWater(whichImage, flag, useWaterAlpha) end


---@param whichImage image
---@param imageType integer
---@return void
function SetImageType(whichImage, imageType) end


---@param x real
---@param y real
---@param name string
---@param red integer
---@param green integer
---@param blue integer
---@param alpha integer
---@param forcePaused boolean
---@param noBirthTime boolean
---@return ubersplat
function CreateUbersplat(x, y, name, red, green, blue, alpha, forcePaused, noBirthTime) end


---@param whichSplat ubersplat
---@return void
function DestroyUbersplat(whichSplat) end


---@param whichSplat ubersplat
---@return void
function ResetUbersplat(whichSplat) end


---@param whichSplat ubersplat
---@return void
function FinishUbersplat(whichSplat) end


---@param whichSplat ubersplat
---@param flag boolean
---@return void
function ShowUbersplat(whichSplat, flag) end


---@param whichSplat ubersplat
---@param flag boolean
---@return void
function SetUbersplatRender(whichSplat, flag) end


---@param whichSplat ubersplat
---@param flag boolean
---@return void
function SetUbersplatRenderAlways(whichSplat, flag) end


---@param whichPlayer player
---@param x real
---@param y real
---@param radius real
---@param addBlight boolean
---@return void
function SetBlight(whichPlayer, x, y, radius, addBlight) end


---@param whichPlayer player
---@param r rect
---@param addBlight boolean
---@return void
function SetBlightRect(whichPlayer, r, addBlight) end


---@param whichPlayer player
---@param x real
---@param y real
---@param addBlight boolean
---@return void
function SetBlightPoint(whichPlayer, x, y, addBlight) end


---@param whichPlayer player
---@param whichLocation location
---@param radius real
---@param addBlight boolean
---@return void
function SetBlightLoc(whichPlayer, whichLocation, radius, addBlight) end


---@param id player
---@param x real
---@param y real
---@param face real
---@return unit
function CreateBlightedGoldmine(id, x, y, face) end


---@param x real
---@param y real
---@return boolean
function IsPointBlighted(x, y) end


---@param x real
---@param y real
---@param radius real
---@param doodadID integer
---@param nearestOnly boolean
---@param animName string
---@param animRandom boolean
---@return void
function SetDoodadAnimation(x, y, radius, doodadID, nearestOnly, animName, animRandom) end


---@param r rect
---@param doodadID integer
---@param animName string
---@param animRandom boolean
---@return void
function SetDoodadAnimationRect(r, doodadID, animName, animRandom) end


---@param num player
---@param script string
---@return void
function StartMeleeAI(num, script) end


---@param num player
---@param script string
---@return void
function StartCampaignAI(num, script) end


---@param num player
---@param command integer
---@param data integer
---@return void
function CommandAI(num, command, data) end


---@param p player
---@param pause boolean
---@return void
function PauseCompAI(p, pause) end


---@param num player
---@return aidifficulty
function GetAIDifficulty(num) end


---@param hUnit unit
---@return void
function RemoveGuardPosition(hUnit) end


---@param hUnit unit
---@return void
function RecycleGuardPosition(hUnit) end


---@param num player
---@return void
function RemoveAllGuardPositions(num) end


---@param cheatStr string
---@return void
function Cheat(cheatStr) end


---@return boolean
function IsNoVictoryCheat() end


---@return boolean
function IsNoDefeatCheat() end


---@param filename string
---@return void
function Preload(filename) end


---@param timeout real
---@return void
function PreloadEnd(timeout) end


---@return void
function PreloadStart() end


---@return void
function PreloadRefresh() end


---@return void
function PreloadEndEx() end


---@return void
function PreloadGenClear() end


---@return void
function PreloadGenStart() end


---@param filename string
---@return void
function PreloadGenEnd(filename) end


---@param filename string
---@return void
function Preloader(filename) end


---@param testType string
---@return void
function AutomationSetTestType(testType) end


---@param testName string
---@return void
function AutomationTestStart(testName) end


---@return void
function AutomationTestEnd() end


---@return void
function AutomationTestingFinished() end


---@return real
function BlzGetTriggerPlayerMouseX() end


---@return real
function BlzGetTriggerPlayerMouseY() end


---@return location
function BlzGetTriggerPlayerMousePosition() end


---@return mousebuttontype
function BlzGetTriggerPlayerMouseButton() end


---@param abilCode integer
---@param tooltip string
---@param level integer
---@return void
function BlzSetAbilityTooltip(abilCode, tooltip, level) end


---@param abilCode integer
---@param tooltip string
---@param level integer
---@return void
function BlzSetAbilityActivatedTooltip(abilCode, tooltip, level) end


---@param abilCode integer
---@param extendedTooltip string
---@param level integer
---@return void
function BlzSetAbilityExtendedTooltip(abilCode, extendedTooltip, level) end


---@param abilCode integer
---@param extendedTooltip string
---@param level integer
---@return void
function BlzSetAbilityActivatedExtendedTooltip(abilCode, extendedTooltip, level) end


---@param abilCode integer
---@param researchTooltip string
---@param level integer
---@return void
function BlzSetAbilityResearchTooltip(abilCode, researchTooltip, level) end


---@param abilCode integer
---@param researchExtendedTooltip string
---@param level integer
---@return void
function BlzSetAbilityResearchExtendedTooltip(abilCode, researchExtendedTooltip, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityTooltip(abilCode, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityActivatedTooltip(abilCode, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityExtendedTooltip(abilCode, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityActivatedExtendedTooltip(abilCode, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityResearchTooltip(abilCode, level) end


---@param abilCode integer
---@param level integer
---@return string
function BlzGetAbilityResearchExtendedTooltip(abilCode, level) end


---@param abilCode integer
---@param iconPath string
---@return void
function BlzSetAbilityIcon(abilCode, iconPath) end


---@param abilCode integer
---@return string
function BlzGetAbilityIcon(abilCode) end


---@param abilCode integer
---@param iconPath string
---@return void
function BlzSetAbilityActivatedIcon(abilCode, iconPath) end


---@param abilCode integer
---@return string
function BlzGetAbilityActivatedIcon(abilCode) end


---@param abilCode integer
---@return integer
function BlzGetAbilityPosX(abilCode) end


---@param abilCode integer
---@return integer
function BlzGetAbilityPosY(abilCode) end


---@param abilCode integer
---@param x integer
---@return void
function BlzSetAbilityPosX(abilCode, x) end


---@param abilCode integer
---@param y integer
---@return void
function BlzSetAbilityPosY(abilCode, y) end


---@param abilCode integer
---@return integer
function BlzGetAbilityActivatedPosX(abilCode) end


---@param abilCode integer
---@return integer
function BlzGetAbilityActivatedPosY(abilCode) end


---@param abilCode integer
---@param x integer
---@return void
function BlzSetAbilityActivatedPosX(abilCode, x) end


---@param abilCode integer
---@param y integer
---@return void
function BlzSetAbilityActivatedPosY(abilCode, y) end


---@param whichUnit unit
---@return integer
function BlzGetUnitMaxHP(whichUnit) end


---@param whichUnit unit
---@param hp integer
---@return void
function BlzSetUnitMaxHP(whichUnit, hp) end


---@param whichUnit unit
---@return integer
function BlzGetUnitMaxMana(whichUnit) end


---@param whichUnit unit
---@param mana integer
---@return void
function BlzSetUnitMaxMana(whichUnit, mana) end


---@param whichItem item
---@param name string
---@return void
function BlzSetItemName(whichItem, name) end


---@param whichItem item
---@param description string
---@return void
function BlzSetItemDescription(whichItem, description) end


---@param whichItem item
---@return string
function BlzGetItemDescription(whichItem) end


---@param whichItem item
---@param tooltip string
---@return void
function BlzSetItemTooltip(whichItem, tooltip) end


---@param whichItem item
---@return string
function BlzGetItemTooltip(whichItem) end


---@param whichItem item
---@param extendedTooltip string
---@return void
function BlzSetItemExtendedTooltip(whichItem, extendedTooltip) end


---@param whichItem item
---@return string
function BlzGetItemExtendedTooltip(whichItem) end


---@param whichItem item
---@param iconPath string
---@return void
function BlzSetItemIconPath(whichItem, iconPath) end


---@param whichItem item
---@return string
function BlzGetItemIconPath(whichItem) end


---@param whichUnit unit
---@param name string
---@return void
function BlzSetUnitName(whichUnit, name) end


---@param whichUnit unit
---@param heroProperName string
---@return void
function BlzSetHeroProperName(whichUnit, heroProperName) end


---@param whichUnit unit
---@param weaponIndex integer
---@return integer
function BlzGetUnitBaseDamage(whichUnit, weaponIndex) end


---@param whichUnit unit
---@param baseDamage integer
---@param weaponIndex integer
---@return void
function BlzSetUnitBaseDamage(whichUnit, baseDamage, weaponIndex) end


---@param whichUnit unit
---@param weaponIndex integer
---@return integer
function BlzGetUnitDiceNumber(whichUnit, weaponIndex) end


---@param whichUnit unit
---@param diceNumber integer
---@param weaponIndex integer
---@return void
function BlzSetUnitDiceNumber(whichUnit, diceNumber, weaponIndex) end


---@param whichUnit unit
---@param weaponIndex integer
---@return integer
function BlzGetUnitDiceSides(whichUnit, weaponIndex) end


---@param whichUnit unit
---@param diceSides integer
---@param weaponIndex integer
---@return void
function BlzSetUnitDiceSides(whichUnit, diceSides, weaponIndex) end


---@param whichUnit unit
---@param weaponIndex integer
---@return real
function BlzGetUnitAttackCooldown(whichUnit, weaponIndex) end


---@param whichUnit unit
---@param cooldown real
---@param weaponIndex integer
---@return void
function BlzSetUnitAttackCooldown(whichUnit, cooldown, weaponIndex) end


---@param whichEffect effect
---@param whichPlayer player
---@return void
function BlzSetSpecialEffectColorByPlayer(whichEffect, whichPlayer) end


---@param whichEffect effect
---@param r integer
---@param g integer
---@param b integer
---@return void
function BlzSetSpecialEffectColor(whichEffect, r, g, b) end


---@param whichEffect effect
---@param alpha integer
---@return void
function BlzSetSpecialEffectAlpha(whichEffect, alpha) end


---@param whichEffect effect
---@param scale real
---@return void
function BlzSetSpecialEffectScale(whichEffect, scale) end


---@param whichEffect effect
---@param x real
---@param y real
---@param z real
---@return void
function BlzSetSpecialEffectPosition(whichEffect, x, y, z) end


---@param whichEffect effect
---@param height real
---@return void
function BlzSetSpecialEffectHeight(whichEffect, height) end


---@param whichEffect effect
---@param timeScale real
---@return void
function BlzSetSpecialEffectTimeScale(whichEffect, timeScale) end


---@param whichEffect effect
---@param time real
---@return void
function BlzSetSpecialEffectTime(whichEffect, time) end


---@param whichEffect effect
---@param yaw real
---@param pitch real
---@param roll real
---@return void
function BlzSetSpecialEffectOrientation(whichEffect, yaw, pitch, roll) end


---@param whichEffect effect
---@param yaw real
---@return void
function BlzSetSpecialEffectYaw(whichEffect, yaw) end


---@param whichEffect effect
---@param pitch real
---@return void
function BlzSetSpecialEffectPitch(whichEffect, pitch) end


---@param whichEffect effect
---@param roll real
---@return void
function BlzSetSpecialEffectRoll(whichEffect, roll) end


---@param whichEffect effect
---@param x real
---@return void
function BlzSetSpecialEffectX(whichEffect, x) end


---@param whichEffect effect
---@param y real
---@return void
function BlzSetSpecialEffectY(whichEffect, y) end


---@param whichEffect effect
---@param z real
---@return void
function BlzSetSpecialEffectZ(whichEffect, z) end


---@param whichEffect effect
---@param loc location
---@return void
function BlzSetSpecialEffectPositionLoc(whichEffect, loc) end


---@param whichEffect effect
---@return real
function BlzGetLocalSpecialEffectX(whichEffect) end


---@param whichEffect effect
---@return real
function BlzGetLocalSpecialEffectY(whichEffect) end


---@param whichEffect effect
---@return real
function BlzGetLocalSpecialEffectZ(whichEffect) end


---@param whichEffect effect
---@return void
function BlzSpecialEffectClearSubAnimations(whichEffect) end


---@param whichEffect effect
---@param whichSubAnim subanimtype
---@return void
function BlzSpecialEffectRemoveSubAnimation(whichEffect, whichSubAnim) end


---@param whichEffect effect
---@param whichSubAnim subanimtype
---@return void
function BlzSpecialEffectAddSubAnimation(whichEffect, whichSubAnim) end


---@param whichEffect effect
---@param whichAnim animtype
---@return void
function BlzPlaySpecialEffect(whichEffect, whichAnim) end


---@param whichEffect effect
---@param whichAnim animtype
---@param timeScale real
---@return void
function BlzPlaySpecialEffectWithTimeScale(whichEffect, whichAnim, timeScale) end


---@param whichAnim animtype
---@return string
function BlzGetAnimName(whichAnim) end


---@param whichUnit unit
---@return real
function BlzGetUnitArmor(whichUnit) end


---@param whichUnit unit
---@param armorAmount real
---@return void
function BlzSetUnitArmor(whichUnit, armorAmount) end


---@param whichUnit unit
---@param abilId integer
---@param flag boolean
---@return void
function BlzUnitHideAbility(whichUnit, abilId, flag) end


---@param whichUnit unit
---@param abilId integer
---@param flag boolean
---@param hideUI boolean
---@return void
function BlzUnitDisableAbility(whichUnit, abilId, flag, hideUI) end


---@param whichUnit unit
---@return void
function BlzUnitCancelTimedLife(whichUnit) end


---@param whichUnit unit
---@return boolean
function BlzIsUnitSelectable(whichUnit) end


---@param whichUnit unit
---@return boolean
function BlzIsUnitInvulnerable(whichUnit) end


---@param whichUnit unit
---@return void
function BlzUnitInterruptAttack(whichUnit) end


---@param whichUnit unit
---@return real
function BlzGetUnitCollisionSize(whichUnit) end


---@param abilId integer
---@param level integer
---@return integer
function BlzGetAbilityManaCost(abilId, level) end


---@param abilId integer
---@param level integer
---@return real
function BlzGetAbilityCooldown(abilId, level) end


---@param whichUnit unit
---@param abilId integer
---@param level integer
---@param cooldown real
---@return void
function BlzSetUnitAbilityCooldown(whichUnit, abilId, level, cooldown) end


---@param whichUnit unit
---@param abilId integer
---@param level integer
---@return real
function BlzGetUnitAbilityCooldown(whichUnit, abilId, level) end


---@param whichUnit unit
---@param abilId integer
---@return real
function BlzGetUnitAbilityCooldownRemaining(whichUnit, abilId) end


---@param whichUnit unit
---@param abilCode integer
---@return void
function BlzEndUnitAbilityCooldown(whichUnit, abilCode) end


---@param whichUnit unit
---@param abilId integer
---@param level integer
---@return integer
function BlzGetUnitAbilityManaCost(whichUnit, abilId, level) end


---@param whichUnit unit
---@param abilId integer
---@param level integer
---@param manaCost integer
---@return void
function BlzSetUnitAbilityManaCost(whichUnit, abilId, level, manaCost) end


---@param whichUnit unit
---@return real
function BlzGetLocalUnitZ(whichUnit) end


---@param whichPlayer player
---@param techid integer
---@param levels integer
---@return void
function BlzDecPlayerTechResearched(whichPlayer, techid, levels) end


---@param damage real
---@return void
function BlzSetEventDamage(damage) end


---@return unit
function BlzGetEventDamageTarget() end


---@return attacktype
function BlzGetEventAttackType() end


---@return damagetype
function BlzGetEventDamageType() end


---@return weapontype
function BlzGetEventWeaponType() end


---@param attackType attacktype
---@return boolean
function BlzSetEventAttackType(attackType) end


---@param damageType damagetype
---@return boolean
function BlzSetEventDamageType(damageType) end


---@param weaponType weapontype
---@return boolean
function BlzSetEventWeaponType(weaponType) end


---@param dataType integer
---@param whichPlayer player
---@param param1 string
---@param param2 string
---@param param3 boolean
---@param param4 integer
---@param param5 integer
---@param param6 integer
---@return integer
function RequestExtraIntegerData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6) end


---@param dataType integer
---@param whichPlayer player
---@param param1 string
---@param param2 string
---@param param3 boolean
---@param param4 integer
---@param param5 integer
---@param param6 integer
---@return boolean
function RequestExtraBooleanData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6) end


---@param dataType integer
---@param whichPlayer player
---@param param1 string
---@param param2 string
---@param param3 boolean
---@param param4 integer
---@param param5 integer
---@param param6 integer
---@return string
function RequestExtraStringData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6) end


---@param dataType integer
---@param whichPlayer player
---@param param1 string
---@param param2 string
---@param param3 boolean
---@param param4 integer
---@param param5 integer
---@param param6 integer
---@return real
function RequestExtraRealData(dataType, whichPlayer, param1, param2, param3, param4, param5, param6) end


---@param whichUnit unit
---@return real
function BlzGetUnitZ(whichUnit) end


---@param enableSelection boolean
---@param enableSelectionCircle boolean
---@return void
function BlzEnableSelections(enableSelection, enableSelectionCircle) end


---@return boolean
function BlzIsSelectionEnabled() end


---@return boolean
function BlzIsSelectionCircleEnabled() end


---@param whichSetup camerasetup
---@param doPan boolean
---@param forcedDuration real
---@param easeInDuration real
---@param easeOutDuration real
---@param smoothFactor real
---@return void
function BlzCameraSetupApplyForceDurationSmooth(whichSetup, doPan, forcedDuration, easeInDuration, easeOutDuration, smoothFactor) end


---@param enable boolean
---@return void
function BlzEnableTargetIndicator(enable) end


---@return boolean
function BlzIsTargetIndicatorEnabled() end


---@param frameType originframetype
---@param index integer
---@return framehandle
function BlzGetOriginFrame(frameType, index) end


---@param enable boolean
---@return void
function BlzEnableUIAutoPosition(enable) end


---@param enable boolean
---@return void
function BlzHideOriginFrames(enable) end


---@param a integer
---@param r integer
---@param g integer
---@param b integer
---@return integer
function BlzConvertColor(a, r, g, b) end


---@param TOCFile string
---@return boolean
function BlzLoadTOCFile(TOCFile) end


---@param name string
---@param owner framehandle
---@param priority integer
---@param createContext integer
---@return framehandle
function BlzCreateFrame(name, owner, priority, createContext) end


---@param name string
---@param owner framehandle
---@param createContext integer
---@return framehandle
function BlzCreateSimpleFrame(name, owner, createContext) end


---@param typeName string
---@param name string
---@param owner framehandle
---@param inherits string
---@param createContext integer
---@return framehandle
function BlzCreateFrameByType(typeName, name, owner, inherits, createContext) end


---@param frame framehandle
---@return void
function BlzDestroyFrame(frame) end


---@param frame framehandle
---@param point framepointtype
---@param relative framehandle
---@param relativePoint framepointtype
---@param x real
---@param y real
---@return void
function BlzFrameSetPoint(frame, point, relative, relativePoint, x, y) end


---@param frame framehandle
---@param point framepointtype
---@param x real
---@param y real
---@return void
function BlzFrameSetAbsPoint(frame, point, x, y) end


---@param frame framehandle
---@return void
function BlzFrameClearAllPoints(frame) end


---@param frame framehandle
---@param relative framehandle
---@return void
function BlzFrameSetAllPoints(frame, relative) end


---@param frame framehandle
---@param visible boolean
---@return void
function BlzFrameSetVisible(frame, visible) end


---@param frame framehandle
---@return boolean
function BlzFrameIsVisible(frame) end


---@param name string
---@param createContext integer
---@return framehandle
function BlzGetFrameByName(name, createContext) end


---@param frame framehandle
---@return string
function BlzFrameGetName(frame) end


---@param frame framehandle
---@return void
function BlzFrameClick(frame) end


---@param frame framehandle
---@param text string
---@return void
function BlzFrameSetText(frame, text) end


---@param frame framehandle
---@return string
function BlzFrameGetText(frame) end


---@param frame framehandle
---@param size integer
---@return void
function BlzFrameSetTextSizeLimit(frame, size) end


---@param frame framehandle
---@return integer
function BlzFrameGetTextSizeLimit(frame) end


---@param frame framehandle
---@param color integer
---@return void
function BlzFrameSetTextColor(frame, color) end


---@param frame framehandle
---@param flag boolean
---@return void
function BlzFrameSetFocus(frame, flag) end


---@param frame framehandle
---@param modelFile string
---@param cameraIndex integer
---@return void
function BlzFrameSetModel(frame, modelFile, cameraIndex) end


---@param frame framehandle
---@param enabled boolean
---@return void
function BlzFrameSetEnable(frame, enabled) end


---@param frame framehandle
---@return boolean
function BlzFrameGetEnable(frame) end


---@param frame framehandle
---@param alpha integer
---@return void
function BlzFrameSetAlpha(frame, alpha) end


---@param frame framehandle
---@return integer
function BlzFrameGetAlpha(frame) end


---@param frame framehandle
---@param primaryProp integer
---@param flags integer
---@return void
function BlzFrameSetSpriteAnimate(frame, primaryProp, flags) end


---@param frame framehandle
---@param texFile string
---@param flag integer
---@param blend boolean
---@return void
function BlzFrameSetTexture(frame, texFile, flag, blend) end


---@param frame framehandle
---@param scale real
---@return void
function BlzFrameSetScale(frame, scale) end


---@param frame framehandle
---@param tooltip framehandle
---@return void
function BlzFrameSetTooltip(frame, tooltip) end


---@param frame framehandle
---@param enable boolean
---@return void
function BlzFrameCageMouse(frame, enable) end


---@param frame framehandle
---@param value real
---@return void
function BlzFrameSetValue(frame, value) end


---@param frame framehandle
---@return real
function BlzFrameGetValue(frame) end


---@param frame framehandle
---@param minValue real
---@param maxValue real
---@return void
function BlzFrameSetMinMaxValue(frame, minValue, maxValue) end


---@param frame framehandle
---@param stepSize real
---@return void
function BlzFrameSetStepSize(frame, stepSize) end


---@param frame framehandle
---@param width real
---@param height real
---@return void
function BlzFrameSetSize(frame, width, height) end


---@param frame framehandle
---@param color integer
---@return void
function BlzFrameSetVertexColor(frame, color) end


---@param frame framehandle
---@param level integer
---@return void
function BlzFrameSetLevel(frame, level) end


---@param frame framehandle
---@param parent framehandle
---@return void
function BlzFrameSetParent(frame, parent) end


---@param frame framehandle
---@return framehandle
function BlzFrameGetParent(frame) end


---@param frame framehandle
---@return real
function BlzFrameGetHeight(frame) end


---@param frame framehandle
---@return real
function BlzFrameGetWidth(frame) end


---@param frame framehandle
---@param fileName string
---@param height real
---@param flags integer
---@return void
function BlzFrameSetFont(frame, fileName, height, flags) end


---@param frame framehandle
---@param vert textaligntype
---@param horz textaligntype
---@return void
function BlzFrameSetTextAlignment(frame, vert, horz) end


---@param whichTrigger trigger
---@param frame framehandle
---@param eventId frameeventtype
---@return event
function BlzTriggerRegisterFrameEvent(whichTrigger, frame, eventId) end


---@return framehandle
function BlzGetTriggerFrame() end


---@return frameeventtype
function BlzGetTriggerFrameEvent() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param prefix string
---@param fromServer boolean
---@return event
function BlzTriggerRegisterPlayerSyncEvent(whichTrigger, whichPlayer, prefix, fromServer) end


---@param prefix string
---@param data string
---@return boolean
function BlzSendSyncData(prefix, data) end


---@return string
function BlzGetTriggerSyncPrefix() end


---@return string
function BlzGetTriggerSyncData() end


---@param whichTrigger trigger
---@param whichPlayer player
---@param key oskeytype
---@param metaKey integer
---@param keyDown boolean
---@return event
function BlzTriggerRegisterPlayerKeyEvent(whichTrigger, whichPlayer, key, metaKey, keyDown) end


---@return oskeytype
function BlzGetTriggerPlayerKey() end


---@return integer
function BlzGetTriggerPlayerMetaKey() end


---@return boolean
function BlzGetTriggerPlayerIsKeyDown() end


---@param enable boolean
---@return void
function BlzEnableCursor(enable) end


---@param x integer
---@param y integer
---@return void
function BlzSetMousePos(x, y) end


---@return integer
function BlzGetLocalClientWidth() end


---@return integer
function BlzGetLocalClientHeight() end


---@return boolean
function BlzIsLocalClientActive() end


---@return unit
function BlzGetMouseFocusUnit() end


---@param texFile string
---@return boolean
function BlzChangeMinimapTerrainTex(texFile) end


---@return string
function BlzGetLocale() end


---@param whichEffect effect
---@return real
function BlzGetSpecialEffectScale(whichEffect) end


---@param whichEffect effect
---@param x real
---@param y real
---@param z real
---@return void
function BlzSetSpecialEffectMatrixScale(whichEffect, x, y, z) end


---@param whichEffect effect
---@return void
function BlzResetSpecialEffectMatrix(whichEffect) end


---@param whichUnit unit
---@param abilId integer
---@return ability
function BlzGetUnitAbility(whichUnit, abilId) end


---@param whichUnit unit
---@param index integer
---@return ability
function BlzGetUnitAbilityByIndex(whichUnit, index) end


---@param whichPlayer player
---@param recipient integer
---@param message string
---@return void
function BlzDisplayChatMessage(whichPlayer, recipient, message) end


---@param whichUnit unit
---@param flag boolean
---@return void
function BlzPauseUnitEx(whichUnit, flag) end


---@param x integer
---@param y integer
---@return integer
function BlzBitOr(x, y) end


---@param x integer
---@param y integer
---@return integer
function BlzBitAnd(x, y) end


---@param x integer
---@param y integer
---@return integer
function BlzBitXor(x, y) end


---@param whichAbility ability
---@param whichField abilitybooleanfield
---@return boolean
function BlzGetAbilityBooleanField(whichAbility, whichField) end


---@param whichAbility ability
---@param whichField abilityintegerfield
---@return integer
function BlzGetAbilityIntegerField(whichAbility, whichField) end


---@param whichAbility ability
---@param whichField abilityrealfield
---@return real
function BlzGetAbilityRealField(whichAbility, whichField) end


---@param whichAbility ability
---@param whichField abilitystringfield
---@return string
function BlzGetAbilityStringField(whichAbility, whichField) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelfield
---@param level integer
---@return boolean
function BlzGetAbilityBooleanLevelField(whichAbility, whichField, level) end


---@param whichAbility ability
---@param whichField abilityintegerlevelfield
---@param level integer
---@return integer
function BlzGetAbilityIntegerLevelField(whichAbility, whichField, level) end


---@param whichAbility ability
---@param whichField abilityreallevelfield
---@param level integer
---@return real
function BlzGetAbilityRealLevelField(whichAbility, whichField, level) end


---@param whichAbility ability
---@param whichField abilitystringlevelfield
---@param level integer
---@return string
function BlzGetAbilityStringLevelField(whichAbility, whichField, level) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelarrayfield
---@param level integer
---@param index integer
---@return boolean
function BlzGetAbilityBooleanLevelArrayField(whichAbility, whichField, level, index) end


---@param whichAbility ability
---@param whichField abilityintegerlevelarrayfield
---@param level integer
---@param index integer
---@return integer
function BlzGetAbilityIntegerLevelArrayField(whichAbility, whichField, level, index) end


---@param whichAbility ability
---@param whichField abilityreallevelarrayfield
---@param level integer
---@param index integer
---@return real
function BlzGetAbilityRealLevelArrayField(whichAbility, whichField, level, index) end


---@param whichAbility ability
---@param whichField abilitystringlevelarrayfield
---@param level integer
---@param index integer
---@return string
function BlzGetAbilityStringLevelArrayField(whichAbility, whichField, level, index) end


---@param whichAbility ability
---@param whichField abilitybooleanfield
---@param value boolean
---@return boolean
function BlzSetAbilityBooleanField(whichAbility, whichField, value) end


---@param whichAbility ability
---@param whichField abilityintegerfield
---@param value integer
---@return boolean
function BlzSetAbilityIntegerField(whichAbility, whichField, value) end


---@param whichAbility ability
---@param whichField abilityrealfield
---@param value real
---@return boolean
function BlzSetAbilityRealField(whichAbility, whichField, value) end


---@param whichAbility ability
---@param whichField abilitystringfield
---@param value string
---@return boolean
function BlzSetAbilityStringField(whichAbility, whichField, value) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelfield
---@param level integer
---@param value boolean
---@return boolean
function BlzSetAbilityBooleanLevelField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityintegerlevelfield
---@param level integer
---@param value integer
---@return boolean
function BlzSetAbilityIntegerLevelField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityreallevelfield
---@param level integer
---@param value real
---@return boolean
function BlzSetAbilityRealLevelField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilitystringlevelfield
---@param level integer
---@param value string
---@return boolean
function BlzSetAbilityStringLevelField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelarrayfield
---@param level integer
---@param index integer
---@param value boolean
---@return boolean
function BlzSetAbilityBooleanLevelArrayField(whichAbility, whichField, level, index, value) end


---@param whichAbility ability
---@param whichField abilityintegerlevelarrayfield
---@param level integer
---@param index integer
---@param value integer
---@return boolean
function BlzSetAbilityIntegerLevelArrayField(whichAbility, whichField, level, index, value) end


---@param whichAbility ability
---@param whichField abilityreallevelarrayfield
---@param level integer
---@param index integer
---@param value real
---@return boolean
function BlzSetAbilityRealLevelArrayField(whichAbility, whichField, level, index, value) end


---@param whichAbility ability
---@param whichField abilitystringlevelarrayfield
---@param level integer
---@param index integer
---@param value string
---@return boolean
function BlzSetAbilityStringLevelArrayField(whichAbility, whichField, level, index, value) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelarrayfield
---@param level integer
---@param value boolean
---@return boolean
function BlzAddAbilityBooleanLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityintegerlevelarrayfield
---@param level integer
---@param value integer
---@return boolean
function BlzAddAbilityIntegerLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityreallevelarrayfield
---@param level integer
---@param value real
---@return boolean
function BlzAddAbilityRealLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilitystringlevelarrayfield
---@param level integer
---@param value string
---@return boolean
function BlzAddAbilityStringLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilitybooleanlevelarrayfield
---@param level integer
---@param value boolean
---@return boolean
function BlzRemoveAbilityBooleanLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityintegerlevelarrayfield
---@param level integer
---@param value integer
---@return boolean
function BlzRemoveAbilityIntegerLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilityreallevelarrayfield
---@param level integer
---@param value real
---@return boolean
function BlzRemoveAbilityRealLevelArrayField(whichAbility, whichField, level, value) end


---@param whichAbility ability
---@param whichField abilitystringlevelarrayfield
---@param level integer
---@param value string
---@return boolean
function BlzRemoveAbilityStringLevelArrayField(whichAbility, whichField, level, value) end


---@param whichItem item
---@param index integer
---@return ability
function BlzGetItemAbilityByIndex(whichItem, index) end


---@param whichItem item
---@param abilCode integer
---@return ability
function BlzGetItemAbility(whichItem, abilCode) end


---@param whichItem item
---@param abilCode integer
---@return boolean
function BlzItemAddAbility(whichItem, abilCode) end


---@param whichItem item
---@param whichField itembooleanfield
---@return boolean
function BlzGetItemBooleanField(whichItem, whichField) end


---@param whichItem item
---@param whichField itemintegerfield
---@return integer
function BlzGetItemIntegerField(whichItem, whichField) end


---@param whichItem item
---@param whichField itemrealfield
---@return real
function BlzGetItemRealField(whichItem, whichField) end


---@param whichItem item
---@param whichField itemstringfield
---@return string
function BlzGetItemStringField(whichItem, whichField) end


---@param whichItem item
---@param whichField itembooleanfield
---@param value boolean
---@return boolean
function BlzSetItemBooleanField(whichItem, whichField, value) end


---@param whichItem item
---@param whichField itemintegerfield
---@param value integer
---@return boolean
function BlzSetItemIntegerField(whichItem, whichField, value) end


---@param whichItem item
---@param whichField itemrealfield
---@param value real
---@return boolean
function BlzSetItemRealField(whichItem, whichField, value) end


---@param whichItem item
---@param whichField itemstringfield
---@param value string
---@return boolean
function BlzSetItemStringField(whichItem, whichField, value) end


---@param whichItem item
---@param abilCode integer
---@return boolean
function BlzItemRemoveAbility(whichItem, abilCode) end


---@param whichUnit unit
---@param whichField unitbooleanfield
---@return boolean
function BlzGetUnitBooleanField(whichUnit, whichField) end


---@param whichUnit unit
---@param whichField unitintegerfield
---@return integer
function BlzGetUnitIntegerField(whichUnit, whichField) end


---@param whichUnit unit
---@param whichField unitrealfield
---@return real
function BlzGetUnitRealField(whichUnit, whichField) end


---@param whichUnit unit
---@param whichField unitstringfield
---@return string
function BlzGetUnitStringField(whichUnit, whichField) end


---@param whichUnit unit
---@param whichField unitbooleanfield
---@param value boolean
---@return boolean
function BlzSetUnitBooleanField(whichUnit, whichField, value) end


---@param whichUnit unit
---@param whichField unitintegerfield
---@param value integer
---@return boolean
function BlzSetUnitIntegerField(whichUnit, whichField, value) end


---@param whichUnit unit
---@param whichField unitrealfield
---@param value real
---@return boolean
function BlzSetUnitRealField(whichUnit, whichField, value) end


---@param whichUnit unit
---@param whichField unitstringfield
---@param value string
---@return boolean
function BlzSetUnitStringField(whichUnit, whichField, value) end


---@param whichUnit unit
---@param whichField unitweaponbooleanfield
---@param index integer
---@return boolean
function BlzGetUnitWeaponBooleanField(whichUnit, whichField, index) end


---@param whichUnit unit
---@param whichField unitweaponintegerfield
---@param index integer
---@return integer
function BlzGetUnitWeaponIntegerField(whichUnit, whichField, index) end


---@param whichUnit unit
---@param whichField unitweaponrealfield
---@param index integer
---@return real
function BlzGetUnitWeaponRealField(whichUnit, whichField, index) end


---@param whichUnit unit
---@param whichField unitweaponstringfield
---@param index integer
---@return string
function BlzGetUnitWeaponStringField(whichUnit, whichField, index) end


---@param whichUnit unit
---@param whichField unitweaponbooleanfield
---@param index integer
---@param value boolean
---@return boolean
function BlzSetUnitWeaponBooleanField(whichUnit, whichField, index, value) end


---@param whichUnit unit
---@param whichField unitweaponintegerfield
---@param index integer
---@param value integer
---@return boolean
function BlzSetUnitWeaponIntegerField(whichUnit, whichField, index, value) end


---@param whichUnit unit
---@param whichField unitweaponrealfield
---@param index integer
---@param value real
---@return boolean
function BlzSetUnitWeaponRealField(whichUnit, whichField, index, value) end


---@param whichUnit unit
---@param whichField unitweaponstringfield
---@param index integer
---@param value string
---@return boolean
function BlzSetUnitWeaponStringField(whichUnit, whichField, index, value) end