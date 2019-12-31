/** @noSelfInFile **/
declare type nothing = void;
declare type integer = number;
declare type real = number;
declare type int = integer;
declare type float = real;
declare type code = Function;

declare class handle { }
/** all reference counted objects */
declare class agent extends handle { }
/** a reference to an event registration */
declare class event extends agent { }
/** a single player reference */
declare class player extends agent { }
/** an interactive game object with life */
declare class widget extends agent { }
/** a single unit reference */
declare class unit extends widget { }
declare class destructable extends widget { }
declare class item extends widget { }
declare class ability extends agent { }
declare class buff extends ability { }
declare class force extends agent { }
declare class group extends agent { }
declare class trigger extends agent { }
declare class triggercondition extends agent { }
declare class triggeraction extends handle { }
declare class timer extends agent { }
declare class location extends agent { }
declare class region extends agent { }
declare class rect extends agent { }
declare class boolexpr extends agent { }
declare class sound extends agent { }
declare class conditionfunc extends boolexpr { }
declare class filterfunc extends boolexpr { }
declare class unitpool extends handle { }
declare class itempool extends handle { }
declare class race extends handle { }
declare class alliancetype extends handle { }
declare class racepreference extends handle { }
declare class gamestate extends handle { }
declare class igamestate extends gamestate { }
declare class fgamestate extends gamestate { }
declare class playerstate extends handle { }
declare class playerscore extends handle { }
declare class playergameresult extends handle { }
declare class unitstate extends handle { }
declare class aidifficulty extends handle { }
declare class eventid extends handle { }
declare class gameevent extends eventid { }
declare class playerevent extends eventid { }
declare class playerunitevent extends eventid { }
declare class unitevent extends eventid { }
declare class limitop extends eventid { }
declare class widgetevent extends eventid { }
declare class dialogevent extends eventid { }
declare class unittype extends handle { }
declare class gamespeed extends handle { }
declare class gamedifficulty extends handle { }
declare class gametype extends handle { }
declare class mapflag extends handle { }
declare class mapvisibility extends handle { }
declare class mapsetting extends handle { }
declare class mapdensity extends handle { }
declare class mapcontrol extends handle { }
declare class playerslotstate extends handle { }
declare class volumegroup extends handle { }
declare class camerafield extends handle { }
declare class camerasetup extends handle { }
declare class playercolor extends handle { }
declare class placement extends handle { }
declare class startlocprio extends handle { }
declare class raritycontrol extends handle { }
declare class blendmode extends handle { }
declare class texmapflags extends handle { }
declare class effect extends agent { }
declare class effecttype extends handle { }
declare class weathereffect extends handle { }
declare class terraindeformation extends handle { }
declare class fogstate extends handle { }
declare class fogmodifier extends agent { }
declare class dialog extends agent { }
declare class button extends agent { }
declare class quest extends agent { }
declare class questitem extends agent { }
declare class defeatcondition extends agent { }
declare class timerdialog extends agent { }
declare class leaderboard extends agent { }
declare class multiboard extends agent { }
declare class multiboarditem extends agent { }
declare class trackable extends agent { }
declare class gamecache extends agent { }
declare class version extends handle { }
declare class itemtype extends handle { }
declare class texttag extends handle { }
declare class attacktype extends handle { }
declare class damagetype extends handle { }
declare class weapontype extends handle { }
declare class soundtype extends handle { }
declare class lightning extends handle { }
declare class pathingtype extends handle { }
declare class mousebuttontype extends handle { }
declare class animtype extends handle { }
declare class subanimtype extends handle { }
declare class image extends handle { }
declare class ubersplat extends handle { }
declare class hashtable extends agent { }
declare class framehandle extends handle { }
declare class originframetype extends handle { }
declare class framepointtype extends handle { }
declare class textaligntype extends handle { }
declare class frameeventtype extends handle { }
declare class oskeytype extends handle { }
declare class abilityintegerfield extends handle { }
declare class abilityrealfield extends handle { }
declare class abilitybooleanfield extends handle { }
declare class abilitystringfield extends handle { }
declare class abilityintegerlevelfield extends handle { }
declare class abilityreallevelfield extends handle { }
declare class abilitybooleanlevelfield extends handle { }
declare class abilitystringlevelfield extends handle { }
declare class abilityintegerlevelarrayfield extends handle { }
declare class abilityreallevelarrayfield extends handle { }
declare class abilitybooleanlevelarrayfield extends handle { }
declare class abilitystringlevelarrayfield extends handle { }
declare class unitintegerfield extends handle { }
declare class unitrealfield extends handle { }
declare class unitbooleanfield extends handle { }
declare class unitstringfield extends handle { }
declare class unitweaponintegerfield extends handle { }
declare class unitweaponrealfield extends handle { }
declare class unitweaponbooleanfield extends handle { }
declare class unitweaponstringfield extends handle { }
declare class itemintegerfield extends handle { }
declare class itemrealfield extends handle { }
declare class itembooleanfield extends handle { }
declare class itemstringfield extends handle { }
declare class movetype extends handle { }
declare class targetflag extends handle { }
declare class armortype extends handle { }
declare class heroattribute extends handle { }
declare class defensetype extends handle { }
declare class regentype extends handle { }
declare class unitcategory extends handle { }
declare class pathingflag extends handle { }

/**
 * @param i
 */
declare function ConvertRace(i: integer): race;

/**
 * @param i
 */
declare function ConvertAllianceType(i: integer): alliancetype;

/**
 * @param i
 */
declare function ConvertRacePref(i: integer): racepreference;

/**
 * @param i
 */
declare function ConvertIGameState(i: integer): igamestate;

/**
 * @param i
 */
declare function ConvertFGameState(i: integer): fgamestate;

/**
 * @param i
 */
declare function ConvertPlayerState(i: integer): playerstate;

/**
 * @param i
 */
declare function ConvertPlayerScore(i: integer): playerscore;

/**
 * @param i
 */
declare function ConvertPlayerGameResult(i: integer): playergameresult;

/**
 * @param i
 */
declare function ConvertUnitState(i: integer): unitstate;

/**
 * @param i
 */
declare function ConvertAIDifficulty(i: integer): aidifficulty;

/**
 * @param i
 */
declare function ConvertGameEvent(i: integer): gameevent;

/**
 * @param i
 */
declare function ConvertPlayerEvent(i: integer): playerevent;

/**
 * @param i
 */
declare function ConvertPlayerUnitEvent(i: integer): playerunitevent;

/**
 * @param i
 */
declare function ConvertWidgetEvent(i: integer): widgetevent;

/**
 * @param i
 */
declare function ConvertDialogEvent(i: integer): dialogevent;

/**
 * @param i
 */
declare function ConvertUnitEvent(i: integer): unitevent;

/**
 * @param i
 */
declare function ConvertLimitOp(i: integer): limitop;

/**
 * @param i
 */
declare function ConvertUnitType(i: integer): unittype;

/**
 * @param i
 */
declare function ConvertGameSpeed(i: integer): gamespeed;

/**
 * @param i
 */
declare function ConvertPlacement(i: integer): placement;

/**
 * @param i
 */
declare function ConvertStartLocPrio(i: integer): startlocprio;

/**
 * @param i
 */
declare function ConvertGameDifficulty(i: integer): gamedifficulty;

/**
 * @param i
 */
declare function ConvertGameType(i: integer): gametype;

/**
 * @param i
 */
declare function ConvertMapFlag(i: integer): mapflag;

/**
 * @param i
 */
declare function ConvertMapVisibility(i: integer): mapvisibility;

/**
 * @param i
 */
declare function ConvertMapSetting(i: integer): mapsetting;

/**
 * @param i
 */
declare function ConvertMapDensity(i: integer): mapdensity;

/**
 * @param i
 */
declare function ConvertMapControl(i: integer): mapcontrol;

/**
 * @param i
 */
declare function ConvertPlayerColor(i: integer): playercolor;

/**
 * @param i
 */
declare function ConvertPlayerSlotState(i: integer): playerslotstate;

/**
 * @param i
 */
declare function ConvertVolumeGroup(i: integer): volumegroup;

/**
 * @param i
 */
declare function ConvertCameraField(i: integer): camerafield;

/**
 * @param i
 */
declare function ConvertBlendMode(i: integer): blendmode;

/**
 * @param i
 */
declare function ConvertRarityControl(i: integer): raritycontrol;

/**
 * @param i
 */
declare function ConvertTexMapFlags(i: integer): texmapflags;

/**
 * @param i
 */
declare function ConvertFogState(i: integer): fogstate;

/**
 * @param i
 */
declare function ConvertEffectType(i: integer): effecttype;

/**
 * @param i
 */
declare function ConvertVersion(i: integer): version;

/**
 * @param i
 */
declare function ConvertItemType(i: integer): itemtype;

/**
 * @param i
 */
declare function ConvertAttackType(i: integer): attacktype;

/**
 * @param i
 */
declare function ConvertDamageType(i: integer): damagetype;

/**
 * @param i
 */
declare function ConvertWeaponType(i: integer): weapontype;

/**
 * @param i
 */
declare function ConvertSoundType(i: integer): soundtype;

/**
 * @param i
 */
declare function ConvertPathingType(i: integer): pathingtype;

/**
 * @param i
 */
declare function ConvertMouseButtonType(i: integer): mousebuttontype;

/**
 * @param i
 */
declare function ConvertAnimType(i: integer): animtype;

/**
 * @param i
 */
declare function ConvertSubAnimType(i: integer): subanimtype;

/**
 * @param i
 */
declare function ConvertOriginFrameType(i: integer): originframetype;

/**
 * @param i
 */
declare function ConvertFramePointType(i: integer): framepointtype;

/**
 * @param i
 */
declare function ConvertTextAlignType(i: integer): textaligntype;

/**
 * @param i
 */
declare function ConvertFrameEventType(i: integer): frameeventtype;

/**
 * @param i
 */
declare function ConvertOsKeyType(i: integer): oskeytype;

/**
 * @param i
 */
declare function ConvertAbilityIntegerField(i: integer): abilityintegerfield;

/**
 * @param i
 */
declare function ConvertAbilityRealField(i: integer): abilityrealfield;

/**
 * @param i
 */
declare function ConvertAbilityBooleanField(i: integer): abilitybooleanfield;

/**
 * @param i
 */
declare function ConvertAbilityStringField(i: integer): abilitystringfield;

/**
 * @param i
 */
declare function ConvertAbilityIntegerLevelField(i: integer): abilityintegerlevelfield;

/**
 * @param i
 */
declare function ConvertAbilityRealLevelField(i: integer): abilityreallevelfield;

/**
 * @param i
 */
declare function ConvertAbilityBooleanLevelField(i: integer): abilitybooleanlevelfield;

/**
 * @param i
 */
declare function ConvertAbilityStringLevelField(i: integer): abilitystringlevelfield;

/**
 * @param i
 */
declare function ConvertAbilityIntegerLevelArrayField(i: integer): abilityintegerlevelarrayfield;

/**
 * @param i
 */
declare function ConvertAbilityRealLevelArrayField(i: integer): abilityreallevelarrayfield;

/**
 * @param i
 */
declare function ConvertAbilityBooleanLevelArrayField(i: integer): abilitybooleanlevelarrayfield;

/**
 * @param i
 */
declare function ConvertAbilityStringLevelArrayField(i: integer): abilitystringlevelarrayfield;

/**
 * @param i
 */
declare function ConvertUnitIntegerField(i: integer): unitintegerfield;

/**
 * @param i
 */
declare function ConvertUnitRealField(i: integer): unitrealfield;

/**
 * @param i
 */
declare function ConvertUnitBooleanField(i: integer): unitbooleanfield;

/**
 * @param i
 */
declare function ConvertUnitStringField(i: integer): unitstringfield;

/**
 * @param i
 */
declare function ConvertUnitWeaponIntegerField(i: integer): unitweaponintegerfield;

/**
 * @param i
 */
declare function ConvertUnitWeaponRealField(i: integer): unitweaponrealfield;

/**
 * @param i
 */
declare function ConvertUnitWeaponBooleanField(i: integer): unitweaponbooleanfield;

/**
 * @param i
 */
declare function ConvertUnitWeaponStringField(i: integer): unitweaponstringfield;

/**
 * @param i
 */
declare function ConvertItemIntegerField(i: integer): itemintegerfield;

/**
 * @param i
 */
declare function ConvertItemRealField(i: integer): itemrealfield;

/**
 * @param i
 */
declare function ConvertItemBooleanField(i: integer): itembooleanfield;

/**
 * @param i
 */
declare function ConvertItemStringField(i: integer): itemstringfield;

/**
 * @param i
 */
declare function ConvertMoveType(i: integer): movetype;

/**
 * @param i
 */
declare function ConvertTargetFlag(i: integer): targetflag;

/**
 * @param i
 */
declare function ConvertArmorType(i: integer): armortype;

/**
 * @param i
 */
declare function ConvertHeroAttribute(i: integer): heroattribute;

/**
 * @param i
 */
declare function ConvertDefenseType(i: integer): defensetype;

/**
 * @param i
 */
declare function ConvertRegenType(i: integer): regentype;

/**
 * @param i
 */
declare function ConvertUnitCategory(i: integer): unitcategory;

/**
 * @param i
 */
declare function ConvertPathingFlag(i: integer): pathingflag;

/**
 * @param orderIdString
 */
declare function OrderId(orderIdString: string): integer;

/**
 * @param orderId
 */
declare function OrderId2String(orderId: integer): string;

/**
 * @param unitIdString
 */
declare function UnitId(unitIdString: string): integer;

/**
 * @param unitId
 */
declare function UnitId2String(unitId: integer): string;

/**
 * @param abilityIdString
 */
declare function AbilityId(abilityIdString: string): integer;

/**
 * @param abilityId
 */
declare function AbilityId2String(abilityId: integer): string;

/**
 * @param objectId
 */
declare function GetObjectName(objectId: integer): string;

/**
 */
declare function GetBJMaxPlayers(): integer;

/**
 */
declare function GetBJPlayerNeutralVictim(): integer;

/**
 */
declare function GetBJPlayerNeutralExtra(): integer;

/**
 */
declare function GetBJMaxPlayerSlots(): integer;

/**
 */
declare function GetPlayerNeutralPassive(): integer;

/**
 */
declare function GetPlayerNeutralAggressive(): integer;

/**
 * false
 */
declare const FALSE: boolean

/**
 * true
 */
declare const TRUE: boolean

/**
 * 32768
 */
declare const JASS_MAX_ARRAY_SIZE: integer

/**
 * GetPlayerNeutralPassive()
 */
declare const PLAYER_NEUTRAL_PASSIVE: integer

/**
 * GetPlayerNeutralAggressive()
 */
declare const PLAYER_NEUTRAL_AGGRESSIVE: integer

/**
 * ConvertPlayerColor(0)
 */
declare const PLAYER_COLOR_RED: playercolor

/**
 * ConvertPlayerColor(1)
 */
declare const PLAYER_COLOR_BLUE: playercolor

/**
 * ConvertPlayerColor(2)
 */
declare const PLAYER_COLOR_CYAN: playercolor

/**
 * ConvertPlayerColor(3)
 */
declare const PLAYER_COLOR_PURPLE: playercolor

/**
 * ConvertPlayerColor(4)
 */
declare const PLAYER_COLOR_YELLOW: playercolor

/**
 * ConvertPlayerColor(5)
 */
declare const PLAYER_COLOR_ORANGE: playercolor

/**
 * ConvertPlayerColor(6)
 */
declare const PLAYER_COLOR_GREEN: playercolor

/**
 * ConvertPlayerColor(7)
 */
declare const PLAYER_COLOR_PINK: playercolor

/**
 * ConvertPlayerColor(8)
 */
declare const PLAYER_COLOR_LIGHT_GRAY: playercolor

/**
 * ConvertPlayerColor(9)
 */
declare const PLAYER_COLOR_LIGHT_BLUE: playercolor

/**
 * ConvertPlayerColor(10)
 */
declare const PLAYER_COLOR_AQUA: playercolor

/**
 * ConvertPlayerColor(11)
 */
declare const PLAYER_COLOR_BROWN: playercolor

/**
 * ConvertPlayerColor(12)
 */
declare const PLAYER_COLOR_MAROON: playercolor

/**
 * ConvertPlayerColor(13)
 */
declare const PLAYER_COLOR_NAVY: playercolor

/**
 * ConvertPlayerColor(14)
 */
declare const PLAYER_COLOR_TURQUOISE: playercolor

/**
 * ConvertPlayerColor(15)
 */
declare const PLAYER_COLOR_VIOLET: playercolor

/**
 * ConvertPlayerColor(16)
 */
declare const PLAYER_COLOR_WHEAT: playercolor

/**
 * ConvertPlayerColor(17)
 */
declare const PLAYER_COLOR_PEACH: playercolor

/**
 * ConvertPlayerColor(18)
 */
declare const PLAYER_COLOR_MINT: playercolor

/**
 * ConvertPlayerColor(19)
 */
declare const PLAYER_COLOR_LAVENDER: playercolor

/**
 * ConvertPlayerColor(20)
 */
declare const PLAYER_COLOR_COAL: playercolor

/**
 * ConvertPlayerColor(21)
 */
declare const PLAYER_COLOR_SNOW: playercolor

/**
 * ConvertPlayerColor(22)
 */
declare const PLAYER_COLOR_EMERALD: playercolor

/**
 * ConvertPlayerColor(23)
 */
declare const PLAYER_COLOR_PEANUT: playercolor

/**
 * ConvertRace(1)
 */
declare const RACE_HUMAN: race

/**
 * ConvertRace(2)
 */
declare const RACE_ORC: race

/**
 * ConvertRace(3)
 */
declare const RACE_UNDEAD: race

/**
 * ConvertRace(4)
 */
declare const RACE_NIGHTELF: race

/**
 * ConvertRace(5)
 */
declare const RACE_DEMON: race

/**
 * ConvertRace(7)
 */
declare const RACE_OTHER: race

/**
 * ConvertPlayerGameResult(0)
 */
declare const PLAYER_GAME_RESULT_VICTORY: playergameresult

/**
 * ConvertPlayerGameResult(1)
 */
declare const PLAYER_GAME_RESULT_DEFEAT: playergameresult

/**
 * ConvertPlayerGameResult(2)
 */
declare const PLAYER_GAME_RESULT_TIE: playergameresult

/**
 * ConvertPlayerGameResult(3)
 */
declare const PLAYER_GAME_RESULT_NEUTRAL: playergameresult

/**
 * ConvertAllianceType(0)
 */
declare const ALLIANCE_PASSIVE: alliancetype

/**
 * ConvertAllianceType(1)
 */
declare const ALLIANCE_HELP_REQUEST: alliancetype

/**
 * ConvertAllianceType(2)
 */
declare const ALLIANCE_HELP_RESPONSE: alliancetype

/**
 * ConvertAllianceType(3)
 */
declare const ALLIANCE_SHARED_XP: alliancetype

/**
 * ConvertAllianceType(4)
 */
declare const ALLIANCE_SHARED_SPELLS: alliancetype

/**
 * ConvertAllianceType(5)
 */
declare const ALLIANCE_SHARED_VISION: alliancetype

/**
 * ConvertAllianceType(6)
 */
declare const ALLIANCE_SHARED_CONTROL: alliancetype

/**
 * ConvertAllianceType(7)
 */
declare const ALLIANCE_SHARED_ADVANCED_CONTROL: alliancetype

/**
 * ConvertAllianceType(8)
 */
declare const ALLIANCE_RESCUABLE: alliancetype

/**
 * ConvertAllianceType(9)
 */
declare const ALLIANCE_SHARED_VISION_FORCED: alliancetype

/**
 * ConvertVersion(0)
 */
declare const VERSION_REIGN_OF_CHAOS: version

/**
 * ConvertVersion(1)
 */
declare const VERSION_FROZEN_THRONE: version

/**
 * ConvertAttackType(0)
 */
declare const ATTACK_TYPE_NORMAL: attacktype

/**
 * ConvertAttackType(1)
 */
declare const ATTACK_TYPE_MELEE: attacktype

/**
 * ConvertAttackType(2)
 */
declare const ATTACK_TYPE_PIERCE: attacktype

/**
 * ConvertAttackType(3)
 */
declare const ATTACK_TYPE_SIEGE: attacktype

/**
 * ConvertAttackType(4)
 */
declare const ATTACK_TYPE_MAGIC: attacktype

/**
 * ConvertAttackType(5)
 */
declare const ATTACK_TYPE_CHAOS: attacktype

/**
 * ConvertAttackType(6)
 */
declare const ATTACK_TYPE_HERO: attacktype

/**
 * ConvertDamageType(0)
 */
declare const DAMAGE_TYPE_UNKNOWN: damagetype

/**
 * ConvertDamageType(4)
 */
declare const DAMAGE_TYPE_NORMAL: damagetype

/**
 * ConvertDamageType(5)
 */
declare const DAMAGE_TYPE_ENHANCED: damagetype

/**
 * ConvertDamageType(8)
 */
declare const DAMAGE_TYPE_FIRE: damagetype

/**
 * ConvertDamageType(9)
 */
declare const DAMAGE_TYPE_COLD: damagetype

/**
 * ConvertDamageType(10)
 */
declare const DAMAGE_TYPE_LIGHTNING: damagetype

/**
 * ConvertDamageType(11)
 */
declare const DAMAGE_TYPE_POISON: damagetype

/**
 * ConvertDamageType(12)
 */
declare const DAMAGE_TYPE_DISEASE: damagetype

/**
 * ConvertDamageType(13)
 */
declare const DAMAGE_TYPE_DIVINE: damagetype

/**
 * ConvertDamageType(14)
 */
declare const DAMAGE_TYPE_MAGIC: damagetype

/**
 * ConvertDamageType(15)
 */
declare const DAMAGE_TYPE_SONIC: damagetype

/**
 * ConvertDamageType(16)
 */
declare const DAMAGE_TYPE_ACID: damagetype

/**
 * ConvertDamageType(17)
 */
declare const DAMAGE_TYPE_FORCE: damagetype

/**
 * ConvertDamageType(18)
 */
declare const DAMAGE_TYPE_DEATH: damagetype

/**
 * ConvertDamageType(19)
 */
declare const DAMAGE_TYPE_MIND: damagetype

/**
 * ConvertDamageType(20)
 */
declare const DAMAGE_TYPE_PLANT: damagetype

/**
 * ConvertDamageType(21)
 */
declare const DAMAGE_TYPE_DEFENSIVE: damagetype

/**
 * ConvertDamageType(22)
 */
declare const DAMAGE_TYPE_DEMOLITION: damagetype

/**
 * ConvertDamageType(23)
 */
declare const DAMAGE_TYPE_SLOW_POISON: damagetype

/**
 * ConvertDamageType(24)
 */
declare const DAMAGE_TYPE_SPIRIT_LINK: damagetype

/**
 * ConvertDamageType(25)
 */
declare const DAMAGE_TYPE_SHADOW_STRIKE: damagetype

/**
 * ConvertDamageType(26)
 */
declare const DAMAGE_TYPE_UNIVERSAL: damagetype

/**
 * ConvertWeaponType(0)
 */
declare const WEAPON_TYPE_WHOKNOWS: weapontype

/**
 * ConvertWeaponType(1)
 */
declare const WEAPON_TYPE_METAL_LIGHT_CHOP: weapontype

/**
 * ConvertWeaponType(2)
 */
declare const WEAPON_TYPE_METAL_MEDIUM_CHOP: weapontype

/**
 * ConvertWeaponType(3)
 */
declare const WEAPON_TYPE_METAL_HEAVY_CHOP: weapontype

/**
 * ConvertWeaponType(4)
 */
declare const WEAPON_TYPE_METAL_LIGHT_SLICE: weapontype

/**
 * ConvertWeaponType(5)
 */
declare const WEAPON_TYPE_METAL_MEDIUM_SLICE: weapontype

/**
 * ConvertWeaponType(6)
 */
declare const WEAPON_TYPE_METAL_HEAVY_SLICE: weapontype

/**
 * ConvertWeaponType(7)
 */
declare const WEAPON_TYPE_METAL_MEDIUM_BASH: weapontype

/**
 * ConvertWeaponType(8)
 */
declare const WEAPON_TYPE_METAL_HEAVY_BASH: weapontype

/**
 * ConvertWeaponType(9)
 */
declare const WEAPON_TYPE_METAL_MEDIUM_STAB: weapontype

/**
 * ConvertWeaponType(10)
 */
declare const WEAPON_TYPE_METAL_HEAVY_STAB: weapontype

/**
 * ConvertWeaponType(11)
 */
declare const WEAPON_TYPE_WOOD_LIGHT_SLICE: weapontype

/**
 * ConvertWeaponType(12)
 */
declare const WEAPON_TYPE_WOOD_MEDIUM_SLICE: weapontype

/**
 * ConvertWeaponType(13)
 */
declare const WEAPON_TYPE_WOOD_HEAVY_SLICE: weapontype

/**
 * ConvertWeaponType(14)
 */
declare const WEAPON_TYPE_WOOD_LIGHT_BASH: weapontype

/**
 * ConvertWeaponType(15)
 */
declare const WEAPON_TYPE_WOOD_MEDIUM_BASH: weapontype

/**
 * ConvertWeaponType(16)
 */
declare const WEAPON_TYPE_WOOD_HEAVY_BASH: weapontype

/**
 * ConvertWeaponType(17)
 */
declare const WEAPON_TYPE_WOOD_LIGHT_STAB: weapontype

/**
 * ConvertWeaponType(18)
 */
declare const WEAPON_TYPE_WOOD_MEDIUM_STAB: weapontype

/**
 * ConvertWeaponType(19)
 */
declare const WEAPON_TYPE_CLAW_LIGHT_SLICE: weapontype

/**
 * ConvertWeaponType(20)
 */
declare const WEAPON_TYPE_CLAW_MEDIUM_SLICE: weapontype

/**
 * ConvertWeaponType(21)
 */
declare const WEAPON_TYPE_CLAW_HEAVY_SLICE: weapontype

/**
 * ConvertWeaponType(22)
 */
declare const WEAPON_TYPE_AXE_MEDIUM_CHOP: weapontype

/**
 * ConvertWeaponType(23)
 */
declare const WEAPON_TYPE_ROCK_HEAVY_BASH: weapontype

/**
 * ConvertPathingType(0)
 */
declare const PATHING_TYPE_ANY: pathingtype

/**
 * ConvertPathingType(1)
 */
declare const PATHING_TYPE_WALKABILITY: pathingtype

/**
 * ConvertPathingType(2)
 */
declare const PATHING_TYPE_FLYABILITY: pathingtype

/**
 * ConvertPathingType(3)
 */
declare const PATHING_TYPE_BUILDABILITY: pathingtype

/**
 * ConvertPathingType(4)
 */
declare const PATHING_TYPE_PEONHARVESTPATHING: pathingtype

/**
 * ConvertPathingType(5)
 */
declare const PATHING_TYPE_BLIGHTPATHING: pathingtype

/**
 * ConvertPathingType(6)
 */
declare const PATHING_TYPE_FLOATABILITY: pathingtype

/**
 * ConvertPathingType(7)
 */
declare const PATHING_TYPE_AMPHIBIOUSPATHING: pathingtype

/**
 * ConvertMouseButtonType(1)
 */
declare const MOUSE_BUTTON_TYPE_LEFT: mousebuttontype

/**
 * ConvertMouseButtonType(2)
 */
declare const MOUSE_BUTTON_TYPE_MIDDLE: mousebuttontype

/**
 * ConvertMouseButtonType(3)
 */
declare const MOUSE_BUTTON_TYPE_RIGHT: mousebuttontype

/**
 * ConvertAnimType(0)
 */
declare const ANIM_TYPE_BIRTH: animtype

/**
 * ConvertAnimType(1)
 */
declare const ANIM_TYPE_DEATH: animtype

/**
 * ConvertAnimType(2)
 */
declare const ANIM_TYPE_DECAY: animtype

/**
 * ConvertAnimType(3)
 */
declare const ANIM_TYPE_DISSIPATE: animtype

/**
 * ConvertAnimType(4)
 */
declare const ANIM_TYPE_STAND: animtype

/**
 * ConvertAnimType(5)
 */
declare const ANIM_TYPE_WALK: animtype

/**
 * ConvertAnimType(6)
 */
declare const ANIM_TYPE_ATTACK: animtype

/**
 * ConvertAnimType(7)
 */
declare const ANIM_TYPE_MORPH: animtype

/**
 * ConvertAnimType(8)
 */
declare const ANIM_TYPE_SLEEP: animtype

/**
 * ConvertAnimType(9)
 */
declare const ANIM_TYPE_SPELL: animtype

/**
 * ConvertAnimType(10)
 */
declare const ANIM_TYPE_PORTRAIT: animtype

/**
 * ConvertSubAnimType(11)
 */
declare const SUBANIM_TYPE_ROOTED: subanimtype

/**
 * ConvertSubAnimType(12)
 */
declare const SUBANIM_TYPE_ALTERNATE_EX: subanimtype

/**
 * ConvertSubAnimType(13)
 */
declare const SUBANIM_TYPE_LOOPING: subanimtype

/**
 * ConvertSubAnimType(14)
 */
declare const SUBANIM_TYPE_SLAM: subanimtype

/**
 * ConvertSubAnimType(15)
 */
declare const SUBANIM_TYPE_THROW: subanimtype

/**
 * ConvertSubAnimType(16)
 */
declare const SUBANIM_TYPE_SPIKED: subanimtype

/**
 * ConvertSubAnimType(17)
 */
declare const SUBANIM_TYPE_FAST: subanimtype

/**
 * ConvertSubAnimType(18)
 */
declare const SUBANIM_TYPE_SPIN: subanimtype

/**
 * ConvertSubAnimType(19)
 */
declare const SUBANIM_TYPE_READY: subanimtype

/**
 * ConvertSubAnimType(20)
 */
declare const SUBANIM_TYPE_CHANNEL: subanimtype

/**
 * ConvertSubAnimType(21)
 */
declare const SUBANIM_TYPE_DEFEND: subanimtype

/**
 * ConvertSubAnimType(22)
 */
declare const SUBANIM_TYPE_VICTORY: subanimtype

/**
 * ConvertSubAnimType(23)
 */
declare const SUBANIM_TYPE_TURN: subanimtype

/**
 * ConvertSubAnimType(24)
 */
declare const SUBANIM_TYPE_LEFT: subanimtype

/**
 * ConvertSubAnimType(25)
 */
declare const SUBANIM_TYPE_RIGHT: subanimtype

/**
 * ConvertSubAnimType(26)
 */
declare const SUBANIM_TYPE_FIRE: subanimtype

/**
 * ConvertSubAnimType(27)
 */
declare const SUBANIM_TYPE_FLESH: subanimtype

/**
 * ConvertSubAnimType(28)
 */
declare const SUBANIM_TYPE_HIT: subanimtype

/**
 * ConvertSubAnimType(29)
 */
declare const SUBANIM_TYPE_WOUNDED: subanimtype

/**
 * ConvertSubAnimType(30)
 */
declare const SUBANIM_TYPE_LIGHT: subanimtype

/**
 * ConvertSubAnimType(31)
 */
declare const SUBANIM_TYPE_MODERATE: subanimtype

/**
 * ConvertSubAnimType(32)
 */
declare const SUBANIM_TYPE_SEVERE: subanimtype

/**
 * ConvertSubAnimType(33)
 */
declare const SUBANIM_TYPE_CRITICAL: subanimtype

/**
 * ConvertSubAnimType(34)
 */
declare const SUBANIM_TYPE_COMPLETE: subanimtype

/**
 * ConvertSubAnimType(35)
 */
declare const SUBANIM_TYPE_GOLD: subanimtype

/**
 * ConvertSubAnimType(36)
 */
declare const SUBANIM_TYPE_LUMBER: subanimtype

/**
 * ConvertSubAnimType(37)
 */
declare const SUBANIM_TYPE_WORK: subanimtype

/**
 * ConvertSubAnimType(38)
 */
declare const SUBANIM_TYPE_TALK: subanimtype

/**
 * ConvertSubAnimType(39)
 */
declare const SUBANIM_TYPE_FIRST: subanimtype

/**
 * ConvertSubAnimType(40)
 */
declare const SUBANIM_TYPE_SECOND: subanimtype

/**
 * ConvertSubAnimType(41)
 */
declare const SUBANIM_TYPE_THIRD: subanimtype

/**
 * ConvertSubAnimType(42)
 */
declare const SUBANIM_TYPE_FOURTH: subanimtype

/**
 * ConvertSubAnimType(43)
 */
declare const SUBANIM_TYPE_FIFTH: subanimtype

/**
 * ConvertSubAnimType(44)
 */
declare const SUBANIM_TYPE_ONE: subanimtype

/**
 * ConvertSubAnimType(45)
 */
declare const SUBANIM_TYPE_TWO: subanimtype

/**
 * ConvertSubAnimType(46)
 */
declare const SUBANIM_TYPE_THREE: subanimtype

/**
 * ConvertSubAnimType(47)
 */
declare const SUBANIM_TYPE_FOUR: subanimtype

/**
 * ConvertSubAnimType(48)
 */
declare const SUBANIM_TYPE_FIVE: subanimtype

/**
 * ConvertSubAnimType(49)
 */
declare const SUBANIM_TYPE_SMALL: subanimtype

/**
 * ConvertSubAnimType(50)
 */
declare const SUBANIM_TYPE_MEDIUM: subanimtype

/**
 * ConvertSubAnimType(51)
 */
declare const SUBANIM_TYPE_LARGE: subanimtype

/**
 * ConvertSubAnimType(52)
 */
declare const SUBANIM_TYPE_UPGRADE: subanimtype

/**
 * ConvertSubAnimType(53)
 */
declare const SUBANIM_TYPE_DRAIN: subanimtype

/**
 * ConvertSubAnimType(54)
 */
declare const SUBANIM_TYPE_FILL: subanimtype

/**
 * ConvertSubAnimType(55)
 */
declare const SUBANIM_TYPE_CHAINLIGHTNING: subanimtype

/**
 * ConvertSubAnimType(56)
 */
declare const SUBANIM_TYPE_EATTREE: subanimtype

/**
 * ConvertSubAnimType(57)
 */
declare const SUBANIM_TYPE_PUKE: subanimtype

/**
 * ConvertSubAnimType(58)
 */
declare const SUBANIM_TYPE_FLAIL: subanimtype

/**
 * ConvertSubAnimType(59)
 */
declare const SUBANIM_TYPE_OFF: subanimtype

/**
 * ConvertSubAnimType(60)
 */
declare const SUBANIM_TYPE_SWIM: subanimtype

/**
 * ConvertSubAnimType(61)
 */
declare const SUBANIM_TYPE_ENTANGLE: subanimtype

/**
 * ConvertSubAnimType(62)
 */
declare const SUBANIM_TYPE_BERSERK: subanimtype

/**
 * ConvertRacePref(1)
 */
declare const RACE_PREF_HUMAN: racepreference

/**
 * ConvertRacePref(2)
 */
declare const RACE_PREF_ORC: racepreference

/**
 * ConvertRacePref(4)
 */
declare const RACE_PREF_NIGHTELF: racepreference

/**
 * ConvertRacePref(8)
 */
declare const RACE_PREF_UNDEAD: racepreference

/**
 * ConvertRacePref(16)
 */
declare const RACE_PREF_DEMON: racepreference

/**
 * ConvertRacePref(32)
 */
declare const RACE_PREF_RANDOM: racepreference

/**
 * ConvertRacePref(64)
 */
declare const RACE_PREF_USER_SELECTABLE: racepreference

/**
 * ConvertMapControl(0)
 */
declare const MAP_CONTROL_USER: mapcontrol

/**
 * ConvertMapControl(1)
 */
declare const MAP_CONTROL_COMPUTER: mapcontrol

/**
 * ConvertMapControl(2)
 */
declare const MAP_CONTROL_RESCUABLE: mapcontrol

/**
 * ConvertMapControl(3)
 */
declare const MAP_CONTROL_NEUTRAL: mapcontrol

/**
 * ConvertMapControl(4)
 */
declare const MAP_CONTROL_CREEP: mapcontrol

/**
 * ConvertMapControl(5)
 */
declare const MAP_CONTROL_NONE: mapcontrol

/**
 * ConvertGameType(1)
 */
declare const GAME_TYPE_MELEE: gametype

/**
 * ConvertGameType(2)
 */
declare const GAME_TYPE_FFA: gametype

/**
 * ConvertGameType(4)
 */
declare const GAME_TYPE_USE_MAP_SETTINGS: gametype

/**
 * ConvertGameType(8)
 */
declare const GAME_TYPE_BLIZ: gametype

/**
 * ConvertGameType(16)
 */
declare const GAME_TYPE_ONE_ON_ONE: gametype

/**
 * ConvertGameType(32)
 */
declare const GAME_TYPE_TWO_TEAM_PLAY: gametype

/**
 * ConvertGameType(64)
 */
declare const GAME_TYPE_THREE_TEAM_PLAY: gametype

/**
 * ConvertGameType(128)
 */
declare const GAME_TYPE_FOUR_TEAM_PLAY: gametype

/**
 * ConvertMapFlag(1)
 */
declare const MAP_FOG_HIDE_TERRAIN: mapflag

/**
 * ConvertMapFlag(2)
 */
declare const MAP_FOG_MAP_EXPLORED: mapflag

/**
 * ConvertMapFlag(4)
 */
declare const MAP_FOG_ALWAYS_VISIBLE: mapflag

/**
 * ConvertMapFlag(8)
 */
declare const MAP_USE_HANDICAPS: mapflag

/**
 * ConvertMapFlag(16)
 */
declare const MAP_OBSERVERS: mapflag

/**
 * ConvertMapFlag(32)
 */
declare const MAP_OBSERVERS_ON_DEATH: mapflag

/**
 * ConvertMapFlag(128)
 */
declare const MAP_FIXED_COLORS: mapflag

/**
 * ConvertMapFlag(256)
 */
declare const MAP_LOCK_RESOURCE_TRADING: mapflag

/**
 * ConvertMapFlag(512)
 */
declare const MAP_RESOURCE_TRADING_ALLIES_ONLY: mapflag

/**
 * ConvertMapFlag(1024)
 */
declare const MAP_LOCK_ALLIANCE_CHANGES: mapflag

/**
 * ConvertMapFlag(2048)
 */
declare const MAP_ALLIANCE_CHANGES_HIDDEN: mapflag

/**
 * ConvertMapFlag(4096)
 */
declare const MAP_CHEATS: mapflag

/**
 * ConvertMapFlag(8192)
 */
declare const MAP_CHEATS_HIDDEN: mapflag

/**
 * ConvertMapFlag(8192*2)
 */
declare const MAP_LOCK_SPEED: mapflag

/**
 * ConvertMapFlag(8192*4)
 */
declare const MAP_LOCK_RANDOM_SEED: mapflag

/**
 * ConvertMapFlag(8192*8)
 */
declare const MAP_SHARED_ADVANCED_CONTROL: mapflag

/**
 * ConvertMapFlag(8192*16)
 */
declare const MAP_RANDOM_HERO: mapflag

/**
 * ConvertMapFlag(8192*32)
 */
declare const MAP_RANDOM_RACES: mapflag

/**
 * ConvertMapFlag(8192*64)
 */
declare const MAP_RELOADED: mapflag

/**
 * random among all slots
 * ConvertPlacement(0)
 */
declare const MAP_PLACEMENT_RANDOM: placement

/**
 * player 0 in start loc 0...
 * ConvertPlacement(1)
 */
declare const MAP_PLACEMENT_FIXED: placement

/**
 * whatever was specified by the script
 * ConvertPlacement(2)
 */
declare const MAP_PLACEMENT_USE_MAP_SETTINGS: placement

/**
 * random with allies next to each other
 * ConvertPlacement(3)
 */
declare const MAP_PLACEMENT_TEAMS_TOGETHER: placement

/**
 * ConvertStartLocPrio(0)
 */
declare const MAP_LOC_PRIO_LOW: startlocprio

/**
 * ConvertStartLocPrio(1)
 */
declare const MAP_LOC_PRIO_HIGH: startlocprio

/**
 * ConvertStartLocPrio(2)
 */
declare const MAP_LOC_PRIO_NOT: startlocprio

/**
 * ConvertMapDensity(0)
 */
declare const MAP_DENSITY_NONE: mapdensity

/**
 * ConvertMapDensity(1)
 */
declare const MAP_DENSITY_LIGHT: mapdensity

/**
 * ConvertMapDensity(2)
 */
declare const MAP_DENSITY_MEDIUM: mapdensity

/**
 * ConvertMapDensity(3)
 */
declare const MAP_DENSITY_HEAVY: mapdensity

/**
 * ConvertGameDifficulty(0)
 */
declare const MAP_DIFFICULTY_EASY: gamedifficulty

/**
 * ConvertGameDifficulty(1)
 */
declare const MAP_DIFFICULTY_NORMAL: gamedifficulty

/**
 * ConvertGameDifficulty(2)
 */
declare const MAP_DIFFICULTY_HARD: gamedifficulty

/**
 * ConvertGameDifficulty(3)
 */
declare const MAP_DIFFICULTY_INSANE: gamedifficulty

/**
 * ConvertGameSpeed(0)
 */
declare const MAP_SPEED_SLOWEST: gamespeed

/**
 * ConvertGameSpeed(1)
 */
declare const MAP_SPEED_SLOW: gamespeed

/**
 * ConvertGameSpeed(2)
 */
declare const MAP_SPEED_NORMAL: gamespeed

/**
 * ConvertGameSpeed(3)
 */
declare const MAP_SPEED_FAST: gamespeed

/**
 * ConvertGameSpeed(4)
 */
declare const MAP_SPEED_FASTEST: gamespeed

/**
 * ConvertPlayerSlotState(0)
 */
declare const PLAYER_SLOT_STATE_EMPTY: playerslotstate

/**
 * ConvertPlayerSlotState(1)
 */
declare const PLAYER_SLOT_STATE_PLAYING: playerslotstate

/**
 * ConvertPlayerSlotState(2)
 */
declare const PLAYER_SLOT_STATE_LEFT: playerslotstate

/**
 * ConvertVolumeGroup(0)
 */
declare const SOUND_VOLUMEGROUP_UNITMOVEMENT: volumegroup

/**
 * ConvertVolumeGroup(1)
 */
declare const SOUND_VOLUMEGROUP_UNITSOUNDS: volumegroup

/**
 * ConvertVolumeGroup(2)
 */
declare const SOUND_VOLUMEGROUP_COMBAT: volumegroup

/**
 * ConvertVolumeGroup(3)
 */
declare const SOUND_VOLUMEGROUP_SPELLS: volumegroup

/**
 * ConvertVolumeGroup(4)
 */
declare const SOUND_VOLUMEGROUP_UI: volumegroup

/**
 * ConvertVolumeGroup(5)
 */
declare const SOUND_VOLUMEGROUP_MUSIC: volumegroup

/**
 * ConvertVolumeGroup(6)
 */
declare const SOUND_VOLUMEGROUP_AMBIENTSOUNDS: volumegroup

/**
 * ConvertVolumeGroup(7)
 */
declare const SOUND_VOLUMEGROUP_FIRE: volumegroup

/**
 * ConvertIGameState(0)
 */
declare const GAME_STATE_DIVINE_INTERVENTION: igamestate

/**
 * ConvertIGameState(1)
 */
declare const GAME_STATE_DISCONNECTED: igamestate

/**
 * ConvertFGameState(2)
 */
declare const GAME_STATE_TIME_OF_DAY: fgamestate

/**
 * ConvertPlayerState(0)
 */
declare const PLAYER_STATE_GAME_RESULT: playerstate

/**
 * ConvertPlayerState(1)
 */
declare const PLAYER_STATE_RESOURCE_GOLD: playerstate

/**
 * ConvertPlayerState(2)
 */
declare const PLAYER_STATE_RESOURCE_LUMBER: playerstate

/**
 * ConvertPlayerState(3)
 */
declare const PLAYER_STATE_RESOURCE_HERO_TOKENS: playerstate

/**
 * ConvertPlayerState(4)
 */
declare const PLAYER_STATE_RESOURCE_FOOD_CAP: playerstate

/**
 * ConvertPlayerState(5)
 */
declare const PLAYER_STATE_RESOURCE_FOOD_USED: playerstate

/**
 * ConvertPlayerState(6)
 */
declare const PLAYER_STATE_FOOD_CAP_CEILING: playerstate

/**
 * ConvertPlayerState(7)
 */
declare const PLAYER_STATE_GIVES_BOUNTY: playerstate

/**
 * ConvertPlayerState(8)
 */
declare const PLAYER_STATE_ALLIED_VICTORY: playerstate

/**
 * ConvertPlayerState(9)
 */
declare const PLAYER_STATE_PLACED: playerstate

/**
 * ConvertPlayerState(10)
 */
declare const PLAYER_STATE_OBSERVER_ON_DEATH: playerstate

/**
 * ConvertPlayerState(11)
 */
declare const PLAYER_STATE_OBSERVER: playerstate

/**
 * ConvertPlayerState(12)
 */
declare const PLAYER_STATE_UNFOLLOWABLE: playerstate

/**
 * ConvertPlayerState(13)
 */
declare const PLAYER_STATE_GOLD_UPKEEP_RATE: playerstate

/**
 * ConvertPlayerState(14)
 */
declare const PLAYER_STATE_LUMBER_UPKEEP_RATE: playerstate

/**
 * ConvertPlayerState(15)
 */
declare const PLAYER_STATE_GOLD_GATHERED: playerstate

/**
 * ConvertPlayerState(16)
 */
declare const PLAYER_STATE_LUMBER_GATHERED: playerstate

/**
 * ConvertPlayerState(25)
 */
declare const PLAYER_STATE_NO_CREEP_SLEEP: playerstate

/**
 * ConvertUnitState(0)
 */
declare const UNIT_STATE_LIFE: unitstate

/**
 * ConvertUnitState(1)
 */
declare const UNIT_STATE_MAX_LIFE: unitstate

/**
 * ConvertUnitState(2)
 */
declare const UNIT_STATE_MANA: unitstate

/**
 * ConvertUnitState(3)
 */
declare const UNIT_STATE_MAX_MANA: unitstate

/**
 * ConvertAIDifficulty(0)
 */
declare const AI_DIFFICULTY_NEWBIE: aidifficulty

/**
 * ConvertAIDifficulty(1)
 */
declare const AI_DIFFICULTY_NORMAL: aidifficulty

/**
 * ConvertAIDifficulty(2)
 */
declare const AI_DIFFICULTY_INSANE: aidifficulty

/**
 * ConvertPlayerScore(0)
 */
declare const PLAYER_SCORE_UNITS_TRAINED: playerscore

/**
 * ConvertPlayerScore(1)
 */
declare const PLAYER_SCORE_UNITS_KILLED: playerscore

/**
 * ConvertPlayerScore(2)
 */
declare const PLAYER_SCORE_STRUCT_BUILT: playerscore

/**
 * ConvertPlayerScore(3)
 */
declare const PLAYER_SCORE_STRUCT_RAZED: playerscore

/**
 * ConvertPlayerScore(4)
 */
declare const PLAYER_SCORE_TECH_PERCENT: playerscore

/**
 * ConvertPlayerScore(5)
 */
declare const PLAYER_SCORE_FOOD_MAXPROD: playerscore

/**
 * ConvertPlayerScore(6)
 */
declare const PLAYER_SCORE_FOOD_MAXUSED: playerscore

/**
 * ConvertPlayerScore(7)
 */
declare const PLAYER_SCORE_HEROES_KILLED: playerscore

/**
 * ConvertPlayerScore(8)
 */
declare const PLAYER_SCORE_ITEMS_GAINED: playerscore

/**
 * ConvertPlayerScore(9)
 */
declare const PLAYER_SCORE_MERCS_HIRED: playerscore

/**
 * ConvertPlayerScore(10)
 */
declare const PLAYER_SCORE_GOLD_MINED_TOTAL: playerscore

/**
 * ConvertPlayerScore(11)
 */
declare const PLAYER_SCORE_GOLD_MINED_UPKEEP: playerscore

/**
 * ConvertPlayerScore(12)
 */
declare const PLAYER_SCORE_GOLD_LOST_UPKEEP: playerscore

/**
 * ConvertPlayerScore(13)
 */
declare const PLAYER_SCORE_GOLD_LOST_TAX: playerscore

/**
 * ConvertPlayerScore(14)
 */
declare const PLAYER_SCORE_GOLD_GIVEN: playerscore

/**
 * ConvertPlayerScore(15)
 */
declare const PLAYER_SCORE_GOLD_RECEIVED: playerscore

/**
 * ConvertPlayerScore(16)
 */
declare const PLAYER_SCORE_LUMBER_TOTAL: playerscore

/**
 * ConvertPlayerScore(17)
 */
declare const PLAYER_SCORE_LUMBER_LOST_UPKEEP: playerscore

/**
 * ConvertPlayerScore(18)
 */
declare const PLAYER_SCORE_LUMBER_LOST_TAX: playerscore

/**
 * ConvertPlayerScore(19)
 */
declare const PLAYER_SCORE_LUMBER_GIVEN: playerscore

/**
 * ConvertPlayerScore(20)
 */
declare const PLAYER_SCORE_LUMBER_RECEIVED: playerscore

/**
 * ConvertPlayerScore(21)
 */
declare const PLAYER_SCORE_UNIT_TOTAL: playerscore

/**
 * ConvertPlayerScore(22)
 */
declare const PLAYER_SCORE_HERO_TOTAL: playerscore

/**
 * ConvertPlayerScore(23)
 */
declare const PLAYER_SCORE_RESOURCE_TOTAL: playerscore

/**
 * ConvertPlayerScore(24)
 */
declare const PLAYER_SCORE_TOTAL: playerscore

/**
 * ConvertGameEvent(0)
 */
declare const EVENT_GAME_VICTORY: gameevent

/**
 * ConvertGameEvent(1)
 */
declare const EVENT_GAME_END_LEVEL: gameevent

/**
 * ConvertGameEvent(2)
 */
declare const EVENT_GAME_VARIABLE_LIMIT: gameevent

/**
 * ConvertGameEvent(3)
 */
declare const EVENT_GAME_STATE_LIMIT: gameevent

/**
 * ConvertGameEvent(4)
 */
declare const EVENT_GAME_TIMER_EXPIRED: gameevent

/**
 * ConvertGameEvent(5)
 */
declare const EVENT_GAME_ENTER_REGION: gameevent

/**
 * ConvertGameEvent(6)
 */
declare const EVENT_GAME_LEAVE_REGION: gameevent

/**
 * ConvertGameEvent(7)
 */
declare const EVENT_GAME_TRACKABLE_HIT: gameevent

/**
 * ConvertGameEvent(8)
 */
declare const EVENT_GAME_TRACKABLE_TRACK: gameevent

/**
 * ConvertGameEvent(9)
 */
declare const EVENT_GAME_SHOW_SKILL: gameevent

/**
 * ConvertGameEvent(10)
 */
declare const EVENT_GAME_BUILD_SUBMENU: gameevent

/**
 * ConvertPlayerEvent(11)
 */
declare const EVENT_PLAYER_STATE_LIMIT: playerevent

/**
 * ConvertPlayerEvent(12)
 */
declare const EVENT_PLAYER_ALLIANCE_CHANGED: playerevent

/**
 * ConvertPlayerEvent(13)
 */
declare const EVENT_PLAYER_DEFEAT: playerevent

/**
 * ConvertPlayerEvent(14)
 */
declare const EVENT_PLAYER_VICTORY: playerevent

/**
 * ConvertPlayerEvent(15)
 */
declare const EVENT_PLAYER_LEAVE: playerevent

/**
 * ConvertPlayerEvent(16)
 */
declare const EVENT_PLAYER_CHAT: playerevent

/**
 * ConvertPlayerEvent(17)
 */
declare const EVENT_PLAYER_END_CINEMATIC: playerevent

/**
 * ConvertPlayerUnitEvent(18)
 */
declare const EVENT_PLAYER_UNIT_ATTACKED: playerunitevent

/**
 * ConvertPlayerUnitEvent(19)
 */
declare const EVENT_PLAYER_UNIT_RESCUED: playerunitevent

/**
 * ConvertPlayerUnitEvent(20)
 */
declare const EVENT_PLAYER_UNIT_DEATH: playerunitevent

/**
 * ConvertPlayerUnitEvent(21)
 */
declare const EVENT_PLAYER_UNIT_DECAY: playerunitevent

/**
 * ConvertPlayerUnitEvent(22)
 */
declare const EVENT_PLAYER_UNIT_DETECTED: playerunitevent

/**
 * ConvertPlayerUnitEvent(23)
 */
declare const EVENT_PLAYER_UNIT_HIDDEN: playerunitevent

/**
 * ConvertPlayerUnitEvent(24)
 */
declare const EVENT_PLAYER_UNIT_SELECTED: playerunitevent

/**
 * ConvertPlayerUnitEvent(25)
 */
declare const EVENT_PLAYER_UNIT_DESELECTED: playerunitevent

/**
 * ConvertPlayerUnitEvent(26)
 */
declare const EVENT_PLAYER_UNIT_CONSTRUCT_START: playerunitevent

/**
 * ConvertPlayerUnitEvent(27)
 */
declare const EVENT_PLAYER_UNIT_CONSTRUCT_CANCEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(28)
 */
declare const EVENT_PLAYER_UNIT_CONSTRUCT_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(29)
 */
declare const EVENT_PLAYER_UNIT_UPGRADE_START: playerunitevent

/**
 * ConvertPlayerUnitEvent(30)
 */
declare const EVENT_PLAYER_UNIT_UPGRADE_CANCEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(31)
 */
declare const EVENT_PLAYER_UNIT_UPGRADE_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(32)
 */
declare const EVENT_PLAYER_UNIT_TRAIN_START: playerunitevent

/**
 * ConvertPlayerUnitEvent(33)
 */
declare const EVENT_PLAYER_UNIT_TRAIN_CANCEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(34)
 */
declare const EVENT_PLAYER_UNIT_TRAIN_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(35)
 */
declare const EVENT_PLAYER_UNIT_RESEARCH_START: playerunitevent

/**
 * ConvertPlayerUnitEvent(36)
 */
declare const EVENT_PLAYER_UNIT_RESEARCH_CANCEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(37)
 */
declare const EVENT_PLAYER_UNIT_RESEARCH_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(38)
 */
declare const EVENT_PLAYER_UNIT_ISSUED_ORDER: playerunitevent

/**
 * ConvertPlayerUnitEvent(39)
 */
declare const EVENT_PLAYER_UNIT_ISSUED_POINT_ORDER: playerunitevent

/**
 * ConvertPlayerUnitEvent(40)
 */
declare const EVENT_PLAYER_UNIT_ISSUED_TARGET_ORDER: playerunitevent

/**
 * for compat
 * ConvertPlayerUnitEvent(40)
 */
declare const EVENT_PLAYER_UNIT_ISSUED_UNIT_ORDER: playerunitevent

/**
 * ConvertPlayerUnitEvent(41)
 */
declare const EVENT_PLAYER_HERO_LEVEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(42)
 */
declare const EVENT_PLAYER_HERO_SKILL: playerunitevent

/**
 * ConvertPlayerUnitEvent(43)
 */
declare const EVENT_PLAYER_HERO_REVIVABLE: playerunitevent

/**
 * ConvertPlayerUnitEvent(44)
 */
declare const EVENT_PLAYER_HERO_REVIVE_START: playerunitevent

/**
 * ConvertPlayerUnitEvent(45)
 */
declare const EVENT_PLAYER_HERO_REVIVE_CANCEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(46)
 */
declare const EVENT_PLAYER_HERO_REVIVE_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(47)
 */
declare const EVENT_PLAYER_UNIT_SUMMON: playerunitevent

/**
 * ConvertPlayerUnitEvent(48)
 */
declare const EVENT_PLAYER_UNIT_DROP_ITEM: playerunitevent

/**
 * ConvertPlayerUnitEvent(49)
 */
declare const EVENT_PLAYER_UNIT_PICKUP_ITEM: playerunitevent

/**
 * ConvertPlayerUnitEvent(50)
 */
declare const EVENT_PLAYER_UNIT_USE_ITEM: playerunitevent

/**
 * ConvertPlayerUnitEvent(51)
 */
declare const EVENT_PLAYER_UNIT_LOADED: playerunitevent

/**
 * ConvertPlayerUnitEvent(308)
 */
declare const EVENT_PLAYER_UNIT_DAMAGED: playerunitevent

/**
 * ConvertPlayerUnitEvent(315)
 */
declare const EVENT_PLAYER_UNIT_DAMAGING: playerunitevent

/**
 * ConvertUnitEvent(52)
 */
declare const EVENT_UNIT_DAMAGED: unitevent

/**
 * ConvertUnitEvent(314)
 */
declare const EVENT_UNIT_DAMAGING: unitevent

/**
 * ConvertUnitEvent(53)
 */
declare const EVENT_UNIT_DEATH: unitevent

/**
 * ConvertUnitEvent(54)
 */
declare const EVENT_UNIT_DECAY: unitevent

/**
 * ConvertUnitEvent(55)
 */
declare const EVENT_UNIT_DETECTED: unitevent

/**
 * ConvertUnitEvent(56)
 */
declare const EVENT_UNIT_HIDDEN: unitevent

/**
 * ConvertUnitEvent(57)
 */
declare const EVENT_UNIT_SELECTED: unitevent

/**
 * ConvertUnitEvent(58)
 */
declare const EVENT_UNIT_DESELECTED: unitevent

/**
 * ConvertUnitEvent(59)
 */
declare const EVENT_UNIT_STATE_LIMIT: unitevent

/**
 * ConvertUnitEvent(60)
 */
declare const EVENT_UNIT_ACQUIRED_TARGET: unitevent

/**
 * ConvertUnitEvent(61)
 */
declare const EVENT_UNIT_TARGET_IN_RANGE: unitevent

/**
 * ConvertUnitEvent(62)
 */
declare const EVENT_UNIT_ATTACKED: unitevent

/**
 * ConvertUnitEvent(63)
 */
declare const EVENT_UNIT_RESCUED: unitevent

/**
 * ConvertUnitEvent(64)
 */
declare const EVENT_UNIT_CONSTRUCT_CANCEL: unitevent

/**
 * ConvertUnitEvent(65)
 */
declare const EVENT_UNIT_CONSTRUCT_FINISH: unitevent

/**
 * ConvertUnitEvent(66)
 */
declare const EVENT_UNIT_UPGRADE_START: unitevent

/**
 * ConvertUnitEvent(67)
 */
declare const EVENT_UNIT_UPGRADE_CANCEL: unitevent

/**
 * ConvertUnitEvent(68)
 */
declare const EVENT_UNIT_UPGRADE_FINISH: unitevent

/**
 * ConvertUnitEvent(69)
 */
declare const EVENT_UNIT_TRAIN_START: unitevent

/**
 * ConvertUnitEvent(70)
 */
declare const EVENT_UNIT_TRAIN_CANCEL: unitevent

/**
 * ConvertUnitEvent(71)
 */
declare const EVENT_UNIT_TRAIN_FINISH: unitevent

/**
 * ConvertUnitEvent(72)
 */
declare const EVENT_UNIT_RESEARCH_START: unitevent

/**
 * ConvertUnitEvent(73)
 */
declare const EVENT_UNIT_RESEARCH_CANCEL: unitevent

/**
 * ConvertUnitEvent(74)
 */
declare const EVENT_UNIT_RESEARCH_FINISH: unitevent

/**
 * ConvertUnitEvent(75)
 */
declare const EVENT_UNIT_ISSUED_ORDER: unitevent

/**
 * ConvertUnitEvent(76)
 */
declare const EVENT_UNIT_ISSUED_POINT_ORDER: unitevent

/**
 * ConvertUnitEvent(77)
 */
declare const EVENT_UNIT_ISSUED_TARGET_ORDER: unitevent

/**
 * ConvertUnitEvent(78)
 */
declare const EVENT_UNIT_HERO_LEVEL: unitevent

/**
 * ConvertUnitEvent(79)
 */
declare const EVENT_UNIT_HERO_SKILL: unitevent

/**
 * ConvertUnitEvent(80)
 */
declare const EVENT_UNIT_HERO_REVIVABLE: unitevent

/**
 * ConvertUnitEvent(81)
 */
declare const EVENT_UNIT_HERO_REVIVE_START: unitevent

/**
 * ConvertUnitEvent(82)
 */
declare const EVENT_UNIT_HERO_REVIVE_CANCEL: unitevent

/**
 * ConvertUnitEvent(83)
 */
declare const EVENT_UNIT_HERO_REVIVE_FINISH: unitevent

/**
 * ConvertUnitEvent(84)
 */
declare const EVENT_UNIT_SUMMON: unitevent

/**
 * ConvertUnitEvent(85)
 */
declare const EVENT_UNIT_DROP_ITEM: unitevent

/**
 * ConvertUnitEvent(86)
 */
declare const EVENT_UNIT_PICKUP_ITEM: unitevent

/**
 * ConvertUnitEvent(87)
 */
declare const EVENT_UNIT_USE_ITEM: unitevent

/**
 * ConvertUnitEvent(88)
 */
declare const EVENT_UNIT_LOADED: unitevent

/**
 * ConvertWidgetEvent(89)
 */
declare const EVENT_WIDGET_DEATH: widgetevent

/**
 * ConvertDialogEvent(90)
 */
declare const EVENT_DIALOG_BUTTON_CLICK: dialogevent

/**
 * ConvertDialogEvent(91)
 */
declare const EVENT_DIALOG_CLICK: dialogevent

/**
 * ConvertGameEvent(256)
 */
declare const EVENT_GAME_LOADED: gameevent

/**
 * ConvertGameEvent(257)
 */
declare const EVENT_GAME_TOURNAMENT_FINISH_SOON: gameevent

/**
 * ConvertGameEvent(258)
 */
declare const EVENT_GAME_TOURNAMENT_FINISH_NOW: gameevent

/**
 * ConvertGameEvent(259)
 */
declare const EVENT_GAME_SAVE: gameevent

/**
 * ConvertGameEvent(310)
 */
declare const EVENT_GAME_CUSTOM_UI_FRAME: gameevent

/**
 * ConvertPlayerEvent(261)
 */
declare const EVENT_PLAYER_ARROW_LEFT_DOWN: playerevent

/**
 * ConvertPlayerEvent(262)
 */
declare const EVENT_PLAYER_ARROW_LEFT_UP: playerevent

/**
 * ConvertPlayerEvent(263)
 */
declare const EVENT_PLAYER_ARROW_RIGHT_DOWN: playerevent

/**
 * ConvertPlayerEvent(264)
 */
declare const EVENT_PLAYER_ARROW_RIGHT_UP: playerevent

/**
 * ConvertPlayerEvent(265)
 */
declare const EVENT_PLAYER_ARROW_DOWN_DOWN: playerevent

/**
 * ConvertPlayerEvent(266)
 */
declare const EVENT_PLAYER_ARROW_DOWN_UP: playerevent

/**
 * ConvertPlayerEvent(267)
 */
declare const EVENT_PLAYER_ARROW_UP_DOWN: playerevent

/**
 * ConvertPlayerEvent(268)
 */
declare const EVENT_PLAYER_ARROW_UP_UP: playerevent

/**
 * ConvertPlayerEvent(305)
 */
declare const EVENT_PLAYER_MOUSE_DOWN: playerevent

/**
 * ConvertPlayerEvent(306)
 */
declare const EVENT_PLAYER_MOUSE_UP: playerevent

/**
 * ConvertPlayerEvent(307)
 */
declare const EVENT_PLAYER_MOUSE_MOVE: playerevent

/**
 * ConvertPlayerEvent(309)
 */
declare const EVENT_PLAYER_SYNC_DATA: playerevent

/**
 * ConvertPlayerEvent(311)
 */
declare const EVENT_PLAYER_KEY: playerevent

/**
 * ConvertPlayerEvent(312)
 */
declare const EVENT_PLAYER_KEY_DOWN: playerevent

/**
 * ConvertPlayerEvent(313)
 */
declare const EVENT_PLAYER_KEY_UP: playerevent

/**
 * ConvertPlayerUnitEvent(269)
 */
declare const EVENT_PLAYER_UNIT_SELL: playerunitevent

/**
 * ConvertPlayerUnitEvent(270)
 */
declare const EVENT_PLAYER_UNIT_CHANGE_OWNER: playerunitevent

/**
 * ConvertPlayerUnitEvent(271)
 */
declare const EVENT_PLAYER_UNIT_SELL_ITEM: playerunitevent

/**
 * ConvertPlayerUnitEvent(272)
 */
declare const EVENT_PLAYER_UNIT_SPELL_CHANNEL: playerunitevent

/**
 * ConvertPlayerUnitEvent(273)
 */
declare const EVENT_PLAYER_UNIT_SPELL_CAST: playerunitevent

/**
 * ConvertPlayerUnitEvent(274)
 */
declare const EVENT_PLAYER_UNIT_SPELL_EFFECT: playerunitevent

/**
 * ConvertPlayerUnitEvent(275)
 */
declare const EVENT_PLAYER_UNIT_SPELL_FINISH: playerunitevent

/**
 * ConvertPlayerUnitEvent(276)
 */
declare const EVENT_PLAYER_UNIT_SPELL_ENDCAST: playerunitevent

/**
 * ConvertPlayerUnitEvent(277)
 */
declare const EVENT_PLAYER_UNIT_PAWN_ITEM: playerunitevent

/**
 * ConvertUnitEvent(286)
 */
declare const EVENT_UNIT_SELL: unitevent

/**
 * ConvertUnitEvent(287)
 */
declare const EVENT_UNIT_CHANGE_OWNER: unitevent

/**
 * ConvertUnitEvent(288)
 */
declare const EVENT_UNIT_SELL_ITEM: unitevent

/**
 * ConvertUnitEvent(289)
 */
declare const EVENT_UNIT_SPELL_CHANNEL: unitevent

/**
 * ConvertUnitEvent(290)
 */
declare const EVENT_UNIT_SPELL_CAST: unitevent

/**
 * ConvertUnitEvent(291)
 */
declare const EVENT_UNIT_SPELL_EFFECT: unitevent

/**
 * ConvertUnitEvent(292)
 */
declare const EVENT_UNIT_SPELL_FINISH: unitevent

/**
 * ConvertUnitEvent(293)
 */
declare const EVENT_UNIT_SPELL_ENDCAST: unitevent

/**
 * ConvertUnitEvent(294)
 */
declare const EVENT_UNIT_PAWN_ITEM: unitevent

/**
 * ConvertLimitOp(0)
 */
declare const LESS_THAN: limitop

/**
 * ConvertLimitOp(1)
 */
declare const LESS_THAN_OR_EQUAL: limitop

/**
 * ConvertLimitOp(2)
 */
declare const EQUAL: limitop

/**
 * ConvertLimitOp(3)
 */
declare const GREATER_THAN_OR_EQUAL: limitop

/**
 * ConvertLimitOp(4)
 */
declare const GREATER_THAN: limitop

/**
 * ConvertLimitOp(5)
 */
declare const NOT_EQUAL: limitop

/**
 * ConvertUnitType(0)
 */
declare const UNIT_TYPE_HERO: unittype

/**
 * ConvertUnitType(1)
 */
declare const UNIT_TYPE_DEAD: unittype

/**
 * ConvertUnitType(2)
 */
declare const UNIT_TYPE_STRUCTURE: unittype

/**
 * ConvertUnitType(3)
 */
declare const UNIT_TYPE_FLYING: unittype

/**
 * ConvertUnitType(4)
 */
declare const UNIT_TYPE_GROUND: unittype

/**
 * ConvertUnitType(5)
 */
declare const UNIT_TYPE_ATTACKS_FLYING: unittype

/**
 * ConvertUnitType(6)
 */
declare const UNIT_TYPE_ATTACKS_GROUND: unittype

/**
 * ConvertUnitType(7)
 */
declare const UNIT_TYPE_MELEE_ATTACKER: unittype

/**
 * ConvertUnitType(8)
 */
declare const UNIT_TYPE_RANGED_ATTACKER: unittype

/**
 * ConvertUnitType(9)
 */
declare const UNIT_TYPE_GIANT: unittype

/**
 * ConvertUnitType(10)
 */
declare const UNIT_TYPE_SUMMONED: unittype

/**
 * ConvertUnitType(11)
 */
declare const UNIT_TYPE_STUNNED: unittype

/**
 * ConvertUnitType(12)
 */
declare const UNIT_TYPE_PLAGUED: unittype

/**
 * ConvertUnitType(13)
 */
declare const UNIT_TYPE_SNARED: unittype

/**
 * ConvertUnitType(14)
 */
declare const UNIT_TYPE_UNDEAD: unittype

/**
 * ConvertUnitType(15)
 */
declare const UNIT_TYPE_MECHANICAL: unittype

/**
 * ConvertUnitType(16)
 */
declare const UNIT_TYPE_PEON: unittype

/**
 * ConvertUnitType(17)
 */
declare const UNIT_TYPE_SAPPER: unittype

/**
 * ConvertUnitType(18)
 */
declare const UNIT_TYPE_TOWNHALL: unittype

/**
 * ConvertUnitType(19)
 */
declare const UNIT_TYPE_ANCIENT: unittype

/**
 * ConvertUnitType(20)
 */
declare const UNIT_TYPE_TAUREN: unittype

/**
 * ConvertUnitType(21)
 */
declare const UNIT_TYPE_POISONED: unittype

/**
 * ConvertUnitType(22)
 */
declare const UNIT_TYPE_POLYMORPHED: unittype

/**
 * ConvertUnitType(23)
 */
declare const UNIT_TYPE_SLEEPING: unittype

/**
 * ConvertUnitType(24)
 */
declare const UNIT_TYPE_RESISTANT: unittype

/**
 * ConvertUnitType(25)
 */
declare const UNIT_TYPE_ETHEREAL: unittype

/**
 * ConvertUnitType(26)
 */
declare const UNIT_TYPE_MAGIC_IMMUNE: unittype

/**
 * ConvertItemType(0)
 */
declare const ITEM_TYPE_PERMANENT: itemtype

/**
 * ConvertItemType(1)
 */
declare const ITEM_TYPE_CHARGED: itemtype

/**
 * ConvertItemType(2)
 */
declare const ITEM_TYPE_POWERUP: itemtype

/**
 * ConvertItemType(3)
 */
declare const ITEM_TYPE_ARTIFACT: itemtype

/**
 * ConvertItemType(4)
 */
declare const ITEM_TYPE_PURCHASABLE: itemtype

/**
 * ConvertItemType(5)
 */
declare const ITEM_TYPE_CAMPAIGN: itemtype

/**
 * ConvertItemType(6)
 */
declare const ITEM_TYPE_MISCELLANEOUS: itemtype

/**
 * ConvertItemType(7)
 */
declare const ITEM_TYPE_UNKNOWN: itemtype

/**
 * ConvertItemType(8)
 */
declare const ITEM_TYPE_ANY: itemtype

/**
 * ConvertItemType(2)
 */
declare const ITEM_TYPE_TOME: itemtype

/**
 * ConvertCameraField(0)
 */
declare const CAMERA_FIELD_TARGET_DISTANCE: camerafield

/**
 * ConvertCameraField(1)
 */
declare const CAMERA_FIELD_FARZ: camerafield

/**
 * ConvertCameraField(2)
 */
declare const CAMERA_FIELD_ANGLE_OF_ATTACK: camerafield

/**
 * ConvertCameraField(3)
 */
declare const CAMERA_FIELD_FIELD_OF_VIEW: camerafield

/**
 * ConvertCameraField(4)
 */
declare const CAMERA_FIELD_ROLL: camerafield

/**
 * ConvertCameraField(5)
 */
declare const CAMERA_FIELD_ROTATION: camerafield

/**
 * ConvertCameraField(6)
 */
declare const CAMERA_FIELD_ZOFFSET: camerafield

/**
 * ConvertCameraField(7)
 */
declare const CAMERA_FIELD_NEARZ: camerafield

/**
 * ConvertCameraField(8)
 */
declare const CAMERA_FIELD_LOCAL_PITCH: camerafield

/**
 * ConvertCameraField(9)
 */
declare const CAMERA_FIELD_LOCAL_YAW: camerafield

/**
 * ConvertCameraField(10)
 */
declare const CAMERA_FIELD_LOCAL_ROLL: camerafield

/**
 * ConvertBlendMode(0)
 */
declare const BLEND_MODE_NONE: blendmode

/**
 * ConvertBlendMode(0)
 */
declare const BLEND_MODE_DONT_CARE: blendmode

/**
 * ConvertBlendMode(1)
 */
declare const BLEND_MODE_KEYALPHA: blendmode

/**
 * ConvertBlendMode(2)
 */
declare const BLEND_MODE_BLEND: blendmode

/**
 * ConvertBlendMode(3)
 */
declare const BLEND_MODE_ADDITIVE: blendmode

/**
 * ConvertBlendMode(4)
 */
declare const BLEND_MODE_MODULATE: blendmode

/**
 * ConvertBlendMode(5)
 */
declare const BLEND_MODE_MODULATE_2X: blendmode

/**
 * ConvertRarityControl(0)
 */
declare const RARITY_FREQUENT: raritycontrol

/**
 * ConvertRarityControl(1)
 */
declare const RARITY_RARE: raritycontrol

/**
 * ConvertTexMapFlags(0)
 */
declare const TEXMAP_FLAG_NONE: texmapflags

/**
 * ConvertTexMapFlags(1)
 */
declare const TEXMAP_FLAG_WRAP_U: texmapflags

/**
 * ConvertTexMapFlags(2)
 */
declare const TEXMAP_FLAG_WRAP_V: texmapflags

/**
 * ConvertTexMapFlags(3)
 */
declare const TEXMAP_FLAG_WRAP_UV: texmapflags

/**
 * ConvertFogState(1)
 */
declare const FOG_OF_WAR_MASKED: fogstate

/**
 * ConvertFogState(2)
 */
declare const FOG_OF_WAR_FOGGED: fogstate

/**
 * ConvertFogState(4)
 */
declare const FOG_OF_WAR_VISIBLE: fogstate

/**
 * 0
 */
declare const CAMERA_MARGIN_LEFT: integer

/**
 * 1
 */
declare const CAMERA_MARGIN_RIGHT: integer

/**
 * 2
 */
declare const CAMERA_MARGIN_TOP: integer

/**
 * 3
 */
declare const CAMERA_MARGIN_BOTTOM: integer

/**
 * ConvertEffectType(0)
 */
declare const EFFECT_TYPE_EFFECT: effecttype

/**
 * ConvertEffectType(1)
 */
declare const EFFECT_TYPE_TARGET: effecttype

/**
 * ConvertEffectType(2)
 */
declare const EFFECT_TYPE_CASTER: effecttype

/**
 * ConvertEffectType(3)
 */
declare const EFFECT_TYPE_SPECIAL: effecttype

/**
 * ConvertEffectType(4)
 */
declare const EFFECT_TYPE_AREA_EFFECT: effecttype

/**
 * ConvertEffectType(5)
 */
declare const EFFECT_TYPE_MISSILE: effecttype

/**
 * ConvertEffectType(6)
 */
declare const EFFECT_TYPE_LIGHTNING: effecttype

/**
 * ConvertSoundType(0)
 */
declare const SOUND_TYPE_EFFECT: soundtype

/**
 * ConvertSoundType(1)
 */
declare const SOUND_TYPE_EFFECT_LOOPED: soundtype

/**
 * ConvertOriginFrameType(0)
 */
declare const ORIGIN_FRAME_GAME_UI: originframetype

/**
 * ConvertOriginFrameType(1)
 */
declare const ORIGIN_FRAME_COMMAND_BUTTON: originframetype

/**
 * ConvertOriginFrameType(2)
 */
declare const ORIGIN_FRAME_HERO_BAR: originframetype

/**
 * ConvertOriginFrameType(3)
 */
declare const ORIGIN_FRAME_HERO_BUTTON: originframetype

/**
 * ConvertOriginFrameType(4)
 */
declare const ORIGIN_FRAME_HERO_HP_BAR: originframetype

/**
 * ConvertOriginFrameType(5)
 */
declare const ORIGIN_FRAME_HERO_MANA_BAR: originframetype

/**
 * ConvertOriginFrameType(6)
 */
declare const ORIGIN_FRAME_HERO_BUTTON_INDICATOR: originframetype

/**
 * ConvertOriginFrameType(7)
 */
declare const ORIGIN_FRAME_ITEM_BUTTON: originframetype

/**
 * ConvertOriginFrameType(8)
 */
declare const ORIGIN_FRAME_MINIMAP: originframetype

/**
 * ConvertOriginFrameType(9)
 */
declare const ORIGIN_FRAME_MINIMAP_BUTTON: originframetype

/**
 * ConvertOriginFrameType(10)
 */
declare const ORIGIN_FRAME_SYSTEM_BUTTON: originframetype

/**
 * ConvertOriginFrameType(11)
 */
declare const ORIGIN_FRAME_TOOLTIP: originframetype

/**
 * ConvertOriginFrameType(12)
 */
declare const ORIGIN_FRAME_UBERTOOLTIP: originframetype

/**
 * ConvertOriginFrameType(13)
 */
declare const ORIGIN_FRAME_CHAT_MSG: originframetype

/**
 * ConvertOriginFrameType(14)
 */
declare const ORIGIN_FRAME_UNIT_MSG: originframetype

/**
 * ConvertOriginFrameType(15)
 */
declare const ORIGIN_FRAME_TOP_MSG: originframetype

/**
 * ConvertOriginFrameType(16)
 */
declare const ORIGIN_FRAME_PORTRAIT: originframetype

/**
 * ConvertOriginFrameType(17)
 */
declare const ORIGIN_FRAME_WORLD_FRAME: originframetype

/**
 * ConvertFramePointType(0)
 */
declare const FRAMEPOINT_TOPLEFT: framepointtype

/**
 * ConvertFramePointType(1)
 */
declare const FRAMEPOINT_TOP: framepointtype

/**
 * ConvertFramePointType(2)
 */
declare const FRAMEPOINT_TOPRIGHT: framepointtype

/**
 * ConvertFramePointType(3)
 */
declare const FRAMEPOINT_LEFT: framepointtype

/**
 * ConvertFramePointType(4)
 */
declare const FRAMEPOINT_CENTER: framepointtype

/**
 * ConvertFramePointType(5)
 */
declare const FRAMEPOINT_RIGHT: framepointtype

/**
 * ConvertFramePointType(6)
 */
declare const FRAMEPOINT_BOTTOMLEFT: framepointtype

/**
 * ConvertFramePointType(7)
 */
declare const FRAMEPOINT_BOTTOM: framepointtype

/**
 * ConvertFramePointType(8)
 */
declare const FRAMEPOINT_BOTTOMRIGHT: framepointtype

/**
 * ConvertTextAlignType(0)
 */
declare const TEXT_JUSTIFY_TOP: textaligntype

/**
 * ConvertTextAlignType(1)
 */
declare const TEXT_JUSTIFY_MIDDLE: textaligntype

/**
 * ConvertTextAlignType(2)
 */
declare const TEXT_JUSTIFY_BOTTOM: textaligntype

/**
 * ConvertTextAlignType(3)
 */
declare const TEXT_JUSTIFY_LEFT: textaligntype

/**
 * ConvertTextAlignType(4)
 */
declare const TEXT_JUSTIFY_CENTER: textaligntype

/**
 * ConvertTextAlignType(5)
 */
declare const TEXT_JUSTIFY_RIGHT: textaligntype

/**
 * ConvertFrameEventType(1)
 */
declare const FRAMEEVENT_CONTROL_CLICK: frameeventtype

/**
 * ConvertFrameEventType(2)
 */
declare const FRAMEEVENT_MOUSE_ENTER: frameeventtype

/**
 * ConvertFrameEventType(3)
 */
declare const FRAMEEVENT_MOUSE_LEAVE: frameeventtype

/**
 * ConvertFrameEventType(4)
 */
declare const FRAMEEVENT_MOUSE_UP: frameeventtype

/**
 * ConvertFrameEventType(5)
 */
declare const FRAMEEVENT_MOUSE_DOWN: frameeventtype

/**
 * ConvertFrameEventType(6)
 */
declare const FRAMEEVENT_MOUSE_WHEEL: frameeventtype

/**
 * ConvertFrameEventType(7)
 */
declare const FRAMEEVENT_CHECKBOX_CHECKED: frameeventtype

/**
 * ConvertFrameEventType(8)
 */
declare const FRAMEEVENT_CHECKBOX_UNCHECKED: frameeventtype

/**
 * ConvertFrameEventType(9)
 */
declare const FRAMEEVENT_EDITBOX_TEXT_CHANGED: frameeventtype

/**
 * ConvertFrameEventType(10)
 */
declare const FRAMEEVENT_POPUPMENU_ITEM_CHANGED: frameeventtype

/**
 * ConvertFrameEventType(11)
 */
declare const FRAMEEVENT_MOUSE_DOUBLECLICK: frameeventtype

/**
 * ConvertFrameEventType(12)
 */
declare const FRAMEEVENT_SPRITE_ANIM_UPDATE: frameeventtype

/**
 * ConvertFrameEventType(13)
 */
declare const FRAMEEVENT_SLIDER_VALUE_CHANGED: frameeventtype

/**
 * ConvertFrameEventType(14)
 */
declare const FRAMEEVENT_DIALOG_CANCEL: frameeventtype

/**
 * ConvertFrameEventType(15)
 */
declare const FRAMEEVENT_DIALOG_ACCEPT: frameeventtype

/**
 * ConvertFrameEventType(16)
 */
declare const FRAMEEVENT_EDITBOX_ENTER: frameeventtype

/**
 * ConvertOsKeyType($08)
 */
declare const OSKEY_BACKSPACE: oskeytype

/**
 * ConvertOsKeyType($09)
 */
declare const OSKEY_TAB: oskeytype

/**
 * ConvertOsKeyType($0C)
 */
declare const OSKEY_CLEAR: oskeytype

/**
 * ConvertOsKeyType($0D)
 */
declare const OSKEY_RETURN: oskeytype

/**
 * ConvertOsKeyType($10)
 */
declare const OSKEY_SHIFT: oskeytype

/**
 * ConvertOsKeyType($11)
 */
declare const OSKEY_CONTROL: oskeytype

/**
 * ConvertOsKeyType($12)
 */
declare const OSKEY_ALT: oskeytype

/**
 * ConvertOsKeyType($13)
 */
declare const OSKEY_PAUSE: oskeytype

/**
 * ConvertOsKeyType($14)
 */
declare const OSKEY_CAPSLOCK: oskeytype

/**
 * ConvertOsKeyType($15)
 */
declare const OSKEY_KANA: oskeytype

/**
 * ConvertOsKeyType($15)
 */
declare const OSKEY_HANGUL: oskeytype

/**
 * ConvertOsKeyType($17)
 */
declare const OSKEY_JUNJA: oskeytype

/**
 * ConvertOsKeyType($18)
 */
declare const OSKEY_FINAL: oskeytype

/**
 * ConvertOsKeyType($19)
 */
declare const OSKEY_HANJA: oskeytype

/**
 * ConvertOsKeyType($19)
 */
declare const OSKEY_KANJI: oskeytype

/**
 * ConvertOsKeyType($1B)
 */
declare const OSKEY_ESCAPE: oskeytype

/**
 * ConvertOsKeyType($1C)
 */
declare const OSKEY_CONVERT: oskeytype

/**
 * ConvertOsKeyType($1D)
 */
declare const OSKEY_NONCONVERT: oskeytype

/**
 * ConvertOsKeyType($1E)
 */
declare const OSKEY_ACCEPT: oskeytype

/**
 * ConvertOsKeyType($1F)
 */
declare const OSKEY_MODECHANGE: oskeytype

/**
 * ConvertOsKeyType($20)
 */
declare const OSKEY_SPACE: oskeytype

/**
 * ConvertOsKeyType($21)
 */
declare const OSKEY_PAGEUP: oskeytype

/**
 * ConvertOsKeyType($22)
 */
declare const OSKEY_PAGEDOWN: oskeytype

/**
 * ConvertOsKeyType($23)
 */
declare const OSKEY_END: oskeytype

/**
 * ConvertOsKeyType($24)
 */
declare const OSKEY_HOME: oskeytype

/**
 * ConvertOsKeyType($25)
 */
declare const OSKEY_LEFT: oskeytype

/**
 * ConvertOsKeyType($26)
 */
declare const OSKEY_UP: oskeytype

/**
 * ConvertOsKeyType($27)
 */
declare const OSKEY_RIGHT: oskeytype

/**
 * ConvertOsKeyType($28)
 */
declare const OSKEY_DOWN: oskeytype

/**
 * ConvertOsKeyType($29)
 */
declare const OSKEY_SELECT: oskeytype

/**
 * ConvertOsKeyType($2A)
 */
declare const OSKEY_PRINT: oskeytype

/**
 * ConvertOsKeyType($2B)
 */
declare const OSKEY_EXECUTE: oskeytype

/**
 * ConvertOsKeyType($2C)
 */
declare const OSKEY_PRINTSCREEN: oskeytype

/**
 * ConvertOsKeyType($2D)
 */
declare const OSKEY_INSERT: oskeytype

/**
 * ConvertOsKeyType($2E)
 */
declare const OSKEY_DELETE: oskeytype

/**
 * ConvertOsKeyType($2F)
 */
declare const OSKEY_HELP: oskeytype

/**
 * ConvertOsKeyType($30)
 */
declare const OSKEY_0: oskeytype

/**
 * ConvertOsKeyType($31)
 */
declare const OSKEY_1: oskeytype

/**
 * ConvertOsKeyType($32)
 */
declare const OSKEY_2: oskeytype

/**
 * ConvertOsKeyType($33)
 */
declare const OSKEY_3: oskeytype

/**
 * ConvertOsKeyType($34)
 */
declare const OSKEY_4: oskeytype

/**
 * ConvertOsKeyType($35)
 */
declare const OSKEY_5: oskeytype

/**
 * ConvertOsKeyType($36)
 */
declare const OSKEY_6: oskeytype

/**
 * ConvertOsKeyType($37)
 */
declare const OSKEY_7: oskeytype

/**
 * ConvertOsKeyType($38)
 */
declare const OSKEY_8: oskeytype

/**
 * ConvertOsKeyType($39)
 */
declare const OSKEY_9: oskeytype

/**
 * ConvertOsKeyType($41)
 */
declare const OSKEY_A: oskeytype

/**
 * ConvertOsKeyType($42)
 */
declare const OSKEY_B: oskeytype

/**
 * ConvertOsKeyType($43)
 */
declare const OSKEY_C: oskeytype

/**
 * ConvertOsKeyType($44)
 */
declare const OSKEY_D: oskeytype

/**
 * ConvertOsKeyType($45)
 */
declare const OSKEY_E: oskeytype

/**
 * ConvertOsKeyType($46)
 */
declare const OSKEY_F: oskeytype

/**
 * ConvertOsKeyType($47)
 */
declare const OSKEY_G: oskeytype

/**
 * ConvertOsKeyType($48)
 */
declare const OSKEY_H: oskeytype

/**
 * ConvertOsKeyType($49)
 */
declare const OSKEY_I: oskeytype

/**
 * ConvertOsKeyType($4A)
 */
declare const OSKEY_J: oskeytype

/**
 * ConvertOsKeyType($4B)
 */
declare const OSKEY_K: oskeytype

/**
 * ConvertOsKeyType($4C)
 */
declare const OSKEY_L: oskeytype

/**
 * ConvertOsKeyType($4D)
 */
declare const OSKEY_M: oskeytype

/**
 * ConvertOsKeyType($4E)
 */
declare const OSKEY_N: oskeytype

/**
 * ConvertOsKeyType($4F)
 */
declare const OSKEY_O: oskeytype

/**
 * ConvertOsKeyType($50)
 */
declare const OSKEY_P: oskeytype

/**
 * ConvertOsKeyType($51)
 */
declare const OSKEY_Q: oskeytype

/**
 * ConvertOsKeyType($52)
 */
declare const OSKEY_R: oskeytype

/**
 * ConvertOsKeyType($53)
 */
declare const OSKEY_S: oskeytype

/**
 * ConvertOsKeyType($54)
 */
declare const OSKEY_T: oskeytype

/**
 * ConvertOsKeyType($55)
 */
declare const OSKEY_U: oskeytype

/**
 * ConvertOsKeyType($56)
 */
declare const OSKEY_V: oskeytype

/**
 * ConvertOsKeyType($57)
 */
declare const OSKEY_W: oskeytype

/**
 * ConvertOsKeyType($58)
 */
declare const OSKEY_X: oskeytype

/**
 * ConvertOsKeyType($59)
 */
declare const OSKEY_Y: oskeytype

/**
 * ConvertOsKeyType($5A)
 */
declare const OSKEY_Z: oskeytype

/**
 * ConvertOsKeyType($5B)
 */
declare const OSKEY_LMETA: oskeytype

/**
 * ConvertOsKeyType($5C)
 */
declare const OSKEY_RMETA: oskeytype

/**
 * ConvertOsKeyType($5D)
 */
declare const OSKEY_APPS: oskeytype

/**
 * ConvertOsKeyType($5F)
 */
declare const OSKEY_SLEEP: oskeytype

/**
 * ConvertOsKeyType($60)
 */
declare const OSKEY_NUMPAD0: oskeytype

/**
 * ConvertOsKeyType($61)
 */
declare const OSKEY_NUMPAD1: oskeytype

/**
 * ConvertOsKeyType($62)
 */
declare const OSKEY_NUMPAD2: oskeytype

/**
 * ConvertOsKeyType($63)
 */
declare const OSKEY_NUMPAD3: oskeytype

/**
 * ConvertOsKeyType($64)
 */
declare const OSKEY_NUMPAD4: oskeytype

/**
 * ConvertOsKeyType($65)
 */
declare const OSKEY_NUMPAD5: oskeytype

/**
 * ConvertOsKeyType($66)
 */
declare const OSKEY_NUMPAD6: oskeytype

/**
 * ConvertOsKeyType($67)
 */
declare const OSKEY_NUMPAD7: oskeytype

/**
 * ConvertOsKeyType($68)
 */
declare const OSKEY_NUMPAD8: oskeytype

/**
 * ConvertOsKeyType($69)
 */
declare const OSKEY_NUMPAD9: oskeytype

/**
 * ConvertOsKeyType($6A)
 */
declare const OSKEY_MULTIPLY: oskeytype

/**
 * ConvertOsKeyType($6B)
 */
declare const OSKEY_ADD: oskeytype

/**
 * ConvertOsKeyType($6C)
 */
declare const OSKEY_SEPARATOR: oskeytype

/**
 * ConvertOsKeyType($6D)
 */
declare const OSKEY_SUBTRACT: oskeytype

/**
 * ConvertOsKeyType($6E)
 */
declare const OSKEY_DECIMAL: oskeytype

/**
 * ConvertOsKeyType($6F)
 */
declare const OSKEY_DIVIDE: oskeytype

/**
 * ConvertOsKeyType($70)
 */
declare const OSKEY_F1: oskeytype

/**
 * ConvertOsKeyType($71)
 */
declare const OSKEY_F2: oskeytype

/**
 * ConvertOsKeyType($72)
 */
declare const OSKEY_F3: oskeytype

/**
 * ConvertOsKeyType($73)
 */
declare const OSKEY_F4: oskeytype

/**
 * ConvertOsKeyType($74)
 */
declare const OSKEY_F5: oskeytype

/**
 * ConvertOsKeyType($75)
 */
declare const OSKEY_F6: oskeytype

/**
 * ConvertOsKeyType($76)
 */
declare const OSKEY_F7: oskeytype

/**
 * ConvertOsKeyType($77)
 */
declare const OSKEY_F8: oskeytype

/**
 * ConvertOsKeyType($78)
 */
declare const OSKEY_F9: oskeytype

/**
 * ConvertOsKeyType($79)
 */
declare const OSKEY_F10: oskeytype

/**
 * ConvertOsKeyType($7A)
 */
declare const OSKEY_F11: oskeytype

/**
 * ConvertOsKeyType($7B)
 */
declare const OSKEY_F12: oskeytype

/**
 * ConvertOsKeyType($7C)
 */
declare const OSKEY_F13: oskeytype

/**
 * ConvertOsKeyType($7D)
 */
declare const OSKEY_F14: oskeytype

/**
 * ConvertOsKeyType($7E)
 */
declare const OSKEY_F15: oskeytype

/**
 * ConvertOsKeyType($7F)
 */
declare const OSKEY_F16: oskeytype

/**
 * ConvertOsKeyType($80)
 */
declare const OSKEY_F17: oskeytype

/**
 * ConvertOsKeyType($81)
 */
declare const OSKEY_F18: oskeytype

/**
 * ConvertOsKeyType($82)
 */
declare const OSKEY_F19: oskeytype

/**
 * ConvertOsKeyType($83)
 */
declare const OSKEY_F20: oskeytype

/**
 * ConvertOsKeyType($84)
 */
declare const OSKEY_F21: oskeytype

/**
 * ConvertOsKeyType($85)
 */
declare const OSKEY_F22: oskeytype

/**
 * ConvertOsKeyType($86)
 */
declare const OSKEY_F23: oskeytype

/**
 * ConvertOsKeyType($87)
 */
declare const OSKEY_F24: oskeytype

/**
 * ConvertOsKeyType($90)
 */
declare const OSKEY_NUMLOCK: oskeytype

/**
 * ConvertOsKeyType($91)
 */
declare const OSKEY_SCROLLLOCK: oskeytype

/**
 * ConvertOsKeyType($92)
 */
declare const OSKEY_OEM_NEC_EQUAL: oskeytype

/**
 * ConvertOsKeyType($92)
 */
declare const OSKEY_OEM_FJ_JISHO: oskeytype

/**
 * ConvertOsKeyType($93)
 */
declare const OSKEY_OEM_FJ_MASSHOU: oskeytype

/**
 * ConvertOsKeyType($94)
 */
declare const OSKEY_OEM_FJ_TOUROKU: oskeytype

/**
 * ConvertOsKeyType($95)
 */
declare const OSKEY_OEM_FJ_LOYA: oskeytype

/**
 * ConvertOsKeyType($96)
 */
declare const OSKEY_OEM_FJ_ROYA: oskeytype

/**
 * ConvertOsKeyType($A0)
 */
declare const OSKEY_LSHIFT: oskeytype

/**
 * ConvertOsKeyType($A1)
 */
declare const OSKEY_RSHIFT: oskeytype

/**
 * ConvertOsKeyType($A2)
 */
declare const OSKEY_LCONTROL: oskeytype

/**
 * ConvertOsKeyType($A3)
 */
declare const OSKEY_RCONTROL: oskeytype

/**
 * ConvertOsKeyType($A4)
 */
declare const OSKEY_LALT: oskeytype

/**
 * ConvertOsKeyType($A5)
 */
declare const OSKEY_RALT: oskeytype

/**
 * ConvertOsKeyType($A6)
 */
declare const OSKEY_BROWSER_BACK: oskeytype

/**
 * ConvertOsKeyType($A7)
 */
declare const OSKEY_BROWSER_FORWARD: oskeytype

/**
 * ConvertOsKeyType($A8)
 */
declare const OSKEY_BROWSER_REFRESH: oskeytype

/**
 * ConvertOsKeyType($A9)
 */
declare const OSKEY_BROWSER_STOP: oskeytype

/**
 * ConvertOsKeyType($AA)
 */
declare const OSKEY_BROWSER_SEARCH: oskeytype

/**
 * ConvertOsKeyType($AB)
 */
declare const OSKEY_BROWSER_FAVORITES: oskeytype

/**
 * ConvertOsKeyType($AC)
 */
declare const OSKEY_BROWSER_HOME: oskeytype

/**
 * ConvertOsKeyType($AD)
 */
declare const OSKEY_VOLUME_MUTE: oskeytype

/**
 * ConvertOsKeyType($AE)
 */
declare const OSKEY_VOLUME_DOWN: oskeytype

/**
 * ConvertOsKeyType($AF)
 */
declare const OSKEY_VOLUME_UP: oskeytype

/**
 * ConvertOsKeyType($B0)
 */
declare const OSKEY_MEDIA_NEXT_TRACK: oskeytype

/**
 * ConvertOsKeyType($B1)
 */
declare const OSKEY_MEDIA_PREV_TRACK: oskeytype

/**
 * ConvertOsKeyType($B2)
 */
declare const OSKEY_MEDIA_STOP: oskeytype

/**
 * ConvertOsKeyType($B3)
 */
declare const OSKEY_MEDIA_PLAY_PAUSE: oskeytype

/**
 * ConvertOsKeyType($B4)
 */
declare const OSKEY_LAUNCH_MAIL: oskeytype

/**
 * ConvertOsKeyType($B5)
 */
declare const OSKEY_LAUNCH_MEDIA_SELECT: oskeytype

/**
 * ConvertOsKeyType($B6)
 */
declare const OSKEY_LAUNCH_APP1: oskeytype

/**
 * ConvertOsKeyType($B7)
 */
declare const OSKEY_LAUNCH_APP2: oskeytype

/**
 * ConvertOsKeyType($BA)
 */
declare const OSKEY_OEM_1: oskeytype

/**
 * ConvertOsKeyType($BB)
 */
declare const OSKEY_OEM_PLUS: oskeytype

/**
 * ConvertOsKeyType($BC)
 */
declare const OSKEY_OEM_COMMA: oskeytype

/**
 * ConvertOsKeyType($BD)
 */
declare const OSKEY_OEM_MINUS: oskeytype

/**
 * ConvertOsKeyType($BE)
 */
declare const OSKEY_OEM_PERIOD: oskeytype

/**
 * ConvertOsKeyType($BF)
 */
declare const OSKEY_OEM_2: oskeytype

/**
 * ConvertOsKeyType($C0)
 */
declare const OSKEY_OEM_3: oskeytype

/**
 * ConvertOsKeyType($DB)
 */
declare const OSKEY_OEM_4: oskeytype

/**
 * ConvertOsKeyType($DC)
 */
declare const OSKEY_OEM_5: oskeytype

/**
 * ConvertOsKeyType($DD)
 */
declare const OSKEY_OEM_6: oskeytype

/**
 * ConvertOsKeyType($DE)
 */
declare const OSKEY_OEM_7: oskeytype

/**
 * ConvertOsKeyType($DF)
 */
declare const OSKEY_OEM_8: oskeytype

/**
 * ConvertOsKeyType($E1)
 */
declare const OSKEY_OEM_AX: oskeytype

/**
 * ConvertOsKeyType($E2)
 */
declare const OSKEY_OEM_102: oskeytype

/**
 * ConvertOsKeyType($E3)
 */
declare const OSKEY_ICO_HELP: oskeytype

/**
 * ConvertOsKeyType($E4)
 */
declare const OSKEY_ICO_00: oskeytype

/**
 * ConvertOsKeyType($E5)
 */
declare const OSKEY_PROCESSKEY: oskeytype

/**
 * ConvertOsKeyType($E6)
 */
declare const OSKEY_ICO_CLEAR: oskeytype

/**
 * ConvertOsKeyType($E7)
 */
declare const OSKEY_PACKET: oskeytype

/**
 * ConvertOsKeyType($E9)
 */
declare const OSKEY_OEM_RESET: oskeytype

/**
 * ConvertOsKeyType($EA)
 */
declare const OSKEY_OEM_JUMP: oskeytype

/**
 * ConvertOsKeyType($EB)
 */
declare const OSKEY_OEM_PA1: oskeytype

/**
 * ConvertOsKeyType($EC)
 */
declare const OSKEY_OEM_PA2: oskeytype

/**
 * ConvertOsKeyType($ED)
 */
declare const OSKEY_OEM_PA3: oskeytype

/**
 * ConvertOsKeyType($EE)
 */
declare const OSKEY_OEM_WSCTRL: oskeytype

/**
 * ConvertOsKeyType($EF)
 */
declare const OSKEY_OEM_CUSEL: oskeytype

/**
 * ConvertOsKeyType($F0)
 */
declare const OSKEY_OEM_ATTN: oskeytype

/**
 * ConvertOsKeyType($F1)
 */
declare const OSKEY_OEM_FINISH: oskeytype

/**
 * ConvertOsKeyType($F2)
 */
declare const OSKEY_OEM_COPY: oskeytype

/**
 * ConvertOsKeyType($F3)
 */
declare const OSKEY_OEM_AUTO: oskeytype

/**
 * ConvertOsKeyType($F4)
 */
declare const OSKEY_OEM_ENLW: oskeytype

/**
 * ConvertOsKeyType($F5)
 */
declare const OSKEY_OEM_BACKTAB: oskeytype

/**
 * ConvertOsKeyType($F6)
 */
declare const OSKEY_ATTN: oskeytype

/**
 * ConvertOsKeyType($F7)
 */
declare const OSKEY_CRSEL: oskeytype

/**
 * ConvertOsKeyType($F8)
 */
declare const OSKEY_EXSEL: oskeytype

/**
 * ConvertOsKeyType($F9)
 */
declare const OSKEY_EREOF: oskeytype

/**
 * ConvertOsKeyType($FA)
 */
declare const OSKEY_PLAY: oskeytype

/**
 * ConvertOsKeyType($FB)
 */
declare const OSKEY_ZOOM: oskeytype

/**
 * ConvertOsKeyType($FC)
 */
declare const OSKEY_NONAME: oskeytype

/**
 * ConvertOsKeyType($FD)
 */
declare const OSKEY_PA1: oskeytype

/**
 * ConvertOsKeyType($FE)
 */
declare const OSKEY_OEM_CLEAR: oskeytype

/**
 * ConvertAbilityIntegerField('abpx')
 */
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_X: abilityintegerfield

/**
 * ConvertAbilityIntegerField('abpy')
 */
declare const ABILITY_IF_BUTTON_POSITION_NORMAL_Y: abilityintegerfield

/**
 * ConvertAbilityIntegerField('aubx')
 */
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_X: abilityintegerfield

/**
 * ConvertAbilityIntegerField('auby')
 */
declare const ABILITY_IF_BUTTON_POSITION_ACTIVATED_Y: abilityintegerfield

/**
 * ConvertAbilityIntegerField('arpx')
 */
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_X: abilityintegerfield

/**
 * ConvertAbilityIntegerField('arpy')
 */
declare const ABILITY_IF_BUTTON_POSITION_RESEARCH_Y: abilityintegerfield

/**
 * ConvertAbilityIntegerField('amsp')
 */
declare const ABILITY_IF_MISSILE_SPEED: abilityintegerfield

/**
 * ConvertAbilityIntegerField('atac')
 */
declare const ABILITY_IF_TARGET_ATTACHMENTS: abilityintegerfield

/**
 * ConvertAbilityIntegerField('acac')
 */
declare const ABILITY_IF_CASTER_ATTACHMENTS: abilityintegerfield

/**
 * ConvertAbilityIntegerField('apri')
 */
declare const ABILITY_IF_PRIORITY: abilityintegerfield

/**
 * ConvertAbilityIntegerField('alev')
 */
declare const ABILITY_IF_LEVELS: abilityintegerfield

/**
 * ConvertAbilityIntegerField('arlv')
 */
declare const ABILITY_IF_REQUIRED_LEVEL: abilityintegerfield

/**
 * ConvertAbilityIntegerField('alsk')
 */
declare const ABILITY_IF_LEVEL_SKIP_REQUIREMENT: abilityintegerfield

/**
 * Get only
 * ConvertAbilityBooleanField('aher')
 */
declare const ABILITY_BF_HERO_ABILITY: abilitybooleanfield

/**
 * ConvertAbilityBooleanField('aite')
 */
declare const ABILITY_BF_ITEM_ABILITY: abilitybooleanfield

/**
 * ConvertAbilityBooleanField('achd')
 */
declare const ABILITY_BF_CHECK_DEPENDENCIES: abilitybooleanfield

/**
 * ConvertAbilityRealField('amac')
 */
declare const ABILITY_RF_ARF_MISSILE_ARC: abilityrealfield

/**
 * Get Only
 * ConvertAbilityStringField('anam')
 */
declare const ABILITY_SF_NAME: abilitystringfield

/**
 * ConvertAbilityStringField('auar')
 */
declare const ABILITY_SF_ICON_ACTIVATED: abilitystringfield

/**
 * ConvertAbilityStringField('arar')
 */
declare const ABILITY_SF_ICON_RESEARCH: abilitystringfield

/**
 * ConvertAbilityStringField('aefs')
 */
declare const ABILITY_SF_EFFECT_SOUND: abilitystringfield

/**
 * ConvertAbilityStringField('aefl')
 */
declare const ABILITY_SF_EFFECT_SOUND_LOOPING: abilitystringfield

/**
 * ConvertAbilityIntegerLevelField('amcs')
 */
declare const ABILITY_ILF_MANA_COST: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hbz1')
 */
declare const ABILITY_ILF_NUMBER_OF_WAVES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hbz3')
 */
declare const ABILITY_ILF_NUMBER_OF_SHARDS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hmt1')
 */
declare const ABILITY_ILF_NUMBER_OF_UNITS_TELEPORTED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hwe2')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_HWE2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Omi1')
 */
declare const ABILITY_ILF_NUMBER_OF_IMAGES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Uan1')
 */
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_UAN1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Eme2')
 */
declare const ABILITY_ILF_MORPHING_FLAGS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nrg5')
 */
declare const ABILITY_ILF_STRENGTH_BONUS_NRG5: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nrg6')
 */
declare const ABILITY_ILF_DEFENSE_BONUS_NRG6: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ocl2')
 */
declare const ABILITY_ILF_NUMBER_OF_TARGETS_HIT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ofs1')
 */
declare const ABILITY_ILF_DETECTION_TYPE_OFS1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Osf2')
 */
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_OSF2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Efn1')
 */
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_EFN1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hre1')
 */
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_HRE1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hca4')
 */
declare const ABILITY_ILF_STACK_FLAGS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndp2')
 */
declare const ABILITY_ILF_MINIMUM_NUMBER_OF_UNITS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndp3')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_NDP3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nrc2')
 */
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_NRC2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ams3')
 */
declare const ABILITY_ILF_SHIELD_LIFE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ams4')
 */
declare const ABILITY_ILF_MANA_LOSS_AMS4: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Bgm1')
 */
declare const ABILITY_ILF_GOLD_PER_INTERVAL_BGM1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Bgm3')
 */
declare const ABILITY_ILF_MAX_NUMBER_OF_MINERS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Car1')
 */
declare const ABILITY_ILF_CARGO_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Dev3')
 */
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_DEV3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Dev1')
 */
declare const ABILITY_ILF_MAX_CREEP_LEVEL_DEV1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Egm1')
 */
declare const ABILITY_ILF_GOLD_PER_INTERVAL_EGM1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Fae1')
 */
declare const ABILITY_ILF_DEFENSE_REDUCTION: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Fla1')
 */
declare const ABILITY_ILF_DETECTION_TYPE_FLA1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Fla3')
 */
declare const ABILITY_ILF_FLARE_COUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Gld1')
 */
declare const ABILITY_ILF_MAX_GOLD: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Gld3')
 */
declare const ABILITY_ILF_MINING_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Gyd1')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_GYD1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Har1')
 */
declare const ABILITY_ILF_DAMAGE_TO_TREE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Har2')
 */
declare const ABILITY_ILF_LUMBER_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Har3')
 */
declare const ABILITY_ILF_GOLD_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Inf2')
 */
declare const ABILITY_ILF_DEFENSE_INCREASE_INF2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Neu2')
 */
declare const ABILITY_ILF_INTERACTION_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndt1')
 */
declare const ABILITY_ILF_GOLD_COST_NDT1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndt2')
 */
declare const ABILITY_ILF_LUMBER_COST_NDT2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndt3')
 */
declare const ABILITY_ILF_DETECTION_TYPE_NDT3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Poi4')
 */
declare const ABILITY_ILF_STACKING_TYPE_POI4: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Poa5')
 */
declare const ABILITY_ILF_STACKING_TYPE_POA5: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ply1')
 */
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_PLY1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Pos1')
 */
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_POS1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Prg1')
 */
declare const ABILITY_ILF_MOVEMENT_UPDATE_FREQUENCY_PRG1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Prg2')
 */
declare const ABILITY_ILF_ATTACK_UPDATE_FREQUENCY_PRG2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Prg6')
 */
declare const ABILITY_ILF_MANA_LOSS_PRG6: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Rai1')
 */
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_ONE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Rai2')
 */
declare const ABILITY_ILF_UNITS_SUMMONED_TYPE_TWO: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ucb5')
 */
declare const ABILITY_ILF_MAX_UNITS_SUMMONED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Rej3')
 */
declare const ABILITY_ILF_ALLOW_WHEN_FULL_REJ3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Rpb5')
 */
declare const ABILITY_ILF_MAXIMUM_UNITS_CHARGED_TO_CASTER: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Rpb6')
 */
declare const ABILITY_ILF_MAXIMUM_UNITS_AFFECTED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Roa2')
 */
declare const ABILITY_ILF_DEFENSE_INCREASE_ROA2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Roa7')
 */
declare const ABILITY_ILF_MAX_UNITS_ROA7: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Roo1')
 */
declare const ABILITY_ILF_ROOTED_WEAPONS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Roo2')
 */
declare const ABILITY_ILF_UPROOTED_WEAPONS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Roo4')
 */
declare const ABILITY_ILF_UPROOTED_DEFENSE_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Sal2')
 */
declare const ABILITY_ILF_ACCUMULATION_STEP: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Esn4')
 */
declare const ABILITY_ILF_NUMBER_OF_OWLS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Spo4')
 */
declare const ABILITY_ILF_STACKING_TYPE_SPO4: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Sod1')
 */
declare const ABILITY_ILF_NUMBER_OF_UNITS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Spa1')
 */
declare const ABILITY_ILF_SPIDER_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Wha2')
 */
declare const ABILITY_ILF_INTERVALS_BEFORE_CHANGING_TREES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iagi')
 */
declare const ABILITY_ILF_AGILITY_BONUS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iint')
 */
declare const ABILITY_ILF_INTELLIGENCE_BONUS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Istr')
 */
declare const ABILITY_ILF_STRENGTH_BONUS_ISTR: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iatt')
 */
declare const ABILITY_ILF_ATTACK_BONUS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Idef')
 */
declare const ABILITY_ILF_DEFENSE_BONUS_IDEF: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Isn1')
 */
declare const ABILITY_ILF_SUMMON_1_AMOUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Isn2')
 */
declare const ABILITY_ILF_SUMMON_2_AMOUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ixpg')
 */
declare const ABILITY_ILF_EXPERIENCE_GAINED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ihpg')
 */
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHPG: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Impg')
 */
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMPG: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ihp2')
 */
declare const ABILITY_ILF_HIT_POINTS_GAINED_IHP2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Imp2')
 */
declare const ABILITY_ILF_MANA_POINTS_GAINED_IMP2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Idic')
 */
declare const ABILITY_ILF_DAMAGE_BONUS_DICE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iarp')
 */
declare const ABILITY_ILF_ARMOR_PENALTY_IARP: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iob5')
 */
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_IOB5: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ilev')
 */
declare const ABILITY_ILF_LEVELS_GAINED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ilif')
 */
declare const ABILITY_ILF_MAX_LIFE_GAINED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iman')
 */
declare const ABILITY_ILF_MAX_MANA_GAINED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Igol')
 */
declare const ABILITY_ILF_GOLD_GIVEN: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ilum')
 */
declare const ABILITY_ILF_LUMBER_GIVEN: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ifa1')
 */
declare const ABILITY_ILF_DETECTION_TYPE_IFA1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Icre')
 */
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_ICRE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Imvb')
 */
declare const ABILITY_ILF_MOVEMENT_SPEED_BONUS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ihpr')
 */
declare const ABILITY_ILF_HIT_POINTS_REGENERATED_PER_SECOND: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Isib')
 */
declare const ABILITY_ILF_SIGHT_RANGE_BONUS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Icfd')
 */
declare const ABILITY_ILF_DAMAGE_PER_DURATION: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Icfm')
 */
declare const ABILITY_ILF_MANA_USED_PER_SECOND: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Icfx')
 */
declare const ABILITY_ILF_EXTRA_MANA_REQUIRED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Idet')
 */
declare const ABILITY_ILF_DETECTION_RADIUS_IDET: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Idim')
 */
declare const ABILITY_ILF_MANA_LOSS_PER_UNIT_IDIM: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Idid')
 */
declare const ABILITY_ILF_DAMAGE_TO_SUMMONED_UNITS_IDID: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Irec')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_IREC: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ircd')
 */
declare const ABILITY_ILF_DELAY_AFTER_DEATH_SECONDS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('irc2')
 */
declare const ABILITY_ILF_RESTORED_LIFE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('irc3')
 */
declare const ABILITY_ILF_RESTORED_MANA__1_FOR_CURRENT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ihps')
 */
declare const ABILITY_ILF_HIT_POINTS_RESTORED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Imps')
 */
declare const ABILITY_ILF_MANA_POINTS_RESTORED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Itpm')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_UNITS_ITPM: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Cad1')
 */
declare const ABILITY_ILF_NUMBER_OF_CORPSES_RAISED_CAD1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Wrs3')
 */
declare const ABILITY_ILF_TERRAIN_DEFORMATION_DURATION_MS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Uds1')
 */
declare const ABILITY_ILF_MAXIMUM_UNITS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Det1')
 */
declare const ABILITY_ILF_DETECTION_TYPE_DET1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsp1')
 */
declare const ABILITY_ILF_GOLD_COST_PER_STRUCTURE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsp2')
 */
declare const ABILITY_ILF_LUMBER_COST_PER_USE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsp3')
 */
declare const ABILITY_ILF_DETECTION_TYPE_NSP3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Uls1')
 */
declare const ABILITY_ILF_NUMBER_OF_SWARM_UNITS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Uls3')
 */
declare const ABILITY_ILF_MAX_SWARM_UNITS_PER_TARGET: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nba2')
 */
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NBA2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nch1')
 */
declare const ABILITY_ILF_MAXIMUM_CREEP_LEVEL_NCH1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsi1')
 */
declare const ABILITY_ILF_ATTACKS_PREVENTED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Efk3')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_EFK3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Esv1')
 */
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_ESV1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('exh1')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_CORPSES_EXH1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('inv1')
 */
declare const ABILITY_ILF_ITEM_CAPACITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('spl2')
 */
declare const ABILITY_ILF_MAXIMUM_NUMBER_OF_TARGETS_SPL2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('irl3')
 */
declare const ABILITY_ILF_ALLOW_WHEN_FULL_IRL3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('idc3')
 */
declare const ABILITY_ILF_MAXIMUM_DISPELLED_UNITS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('imo1')
 */
declare const ABILITY_ILF_NUMBER_OF_LURES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('ict1')
 */
declare const ABILITY_ILF_NEW_TIME_OF_DAY_HOUR: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('ict2')
 */
declare const ABILITY_ILF_NEW_TIME_OF_DAY_MINUTE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('mec1')
 */
declare const ABILITY_ILF_NUMBER_OF_UNITS_CREATED_MEC1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('spb3')
 */
declare const ABILITY_ILF_MINIMUM_SPELLS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('spb4')
 */
declare const ABILITY_ILF_MAXIMUM_SPELLS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('gra3')
 */
declare const ABILITY_ILF_DISABLED_ATTACK_INDEX: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('gra4')
 */
declare const ABILITY_ILF_ENABLED_ATTACK_INDEX_GRA4: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('gra5')
 */
declare const ABILITY_ILF_MAXIMUM_ATTACKS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Npr1')
 */
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NPR1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsa1')
 */
declare const ABILITY_ILF_BUILDING_TYPES_ALLOWED_NSA1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iaa1')
 */
declare const ABILITY_ILF_ATTACK_MODIFICATION: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Npa5')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_COUNT_NPA5: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Igl1')
 */
declare const ABILITY_ILF_UPGRADE_LEVELS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndo2')
 */
declare const ABILITY_ILF_NUMBER_OF_SUMMONED_UNITS_NDO2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nst1')
 */
declare const ABILITY_ILF_BEASTS_PER_SECOND: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ncl2')
 */
declare const ABILITY_ILF_TARGET_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ncl3')
 */
declare const ABILITY_ILF_OPTIONS: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nab3')
 */
declare const ABILITY_ILF_ARMOR_PENALTY_NAB3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nhs6')
 */
declare const ABILITY_ILF_WAVE_COUNT_NHS6: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ntm3')
 */
declare const ABILITY_ILF_MAX_CREEP_LEVEL_NTM3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ncs3')
 */
declare const ABILITY_ILF_MISSILE_COUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nlm3')
 */
declare const ABILITY_ILF_SPLIT_ATTACK_COUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nlm6')
 */
declare const ABILITY_ILF_GENERATION_COUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nvc1')
 */
declare const ABILITY_ILF_ROCK_RING_COUNT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nvc2')
 */
declare const ABILITY_ILF_WAVE_COUNT_NVC2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Tau1')
 */
declare const ABILITY_ILF_PREFER_HOSTILES_TAU1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Tau2')
 */
declare const ABILITY_ILF_PREFER_FRIENDLIES_TAU2: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Tau3')
 */
declare const ABILITY_ILF_MAX_UNITS_TAU3: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Tau4')
 */
declare const ABILITY_ILF_NUMBER_OF_PULSES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Hwe1')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_HWE1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Uin4')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_UIN4: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Osf1')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_OSF1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Efnu')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_EFNU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nbau')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NBAU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ntou')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NTOU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Esvu')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_ESVU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nef1')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPES: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndou')
 */
declare const ABILITY_ILF_SUMMONED_UNIT_TYPE_NDOU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Emeu')
 */
declare const ABILITY_ILF_ALTERNATE_FORM_UNIT_EMEU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Aplu')
 */
declare const ABILITY_ILF_PLAGUE_WARD_UNIT_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Btl1')
 */
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_BTL1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Cha1')
 */
declare const ABILITY_ILF_NEW_UNIT_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('ent1')
 */
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_ENT1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Gydu')
 */
declare const ABILITY_ILF_CORPSE_UNIT_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Loa1')
 */
declare const ABILITY_ILF_ALLOWED_UNIT_TYPE_LOA1: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Raiu')
 */
declare const ABILITY_ILF_UNIT_TYPE_FOR_LIMIT_CHECK: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Stau')
 */
declare const ABILITY_ILF_WARD_UNIT_TYPE_STAU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iobu')
 */
declare const ABILITY_ILF_EFFECT_ABILITY: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ndc2')
 */
declare const ABILITY_ILF_CONVERSION_UNIT: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsl1')
 */
declare const ABILITY_ILF_UNIT_TO_PRESERVE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Chl1')
 */
declare const ABILITY_ILF_UNIT_TYPE_ALLOWED: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Ulsu')
 */
declare const ABILITY_ILF_SWARM_UNIT_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('coau')
 */
declare const ABILITY_ILF_RESULTING_UNIT_TYPE_COAU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('exhu')
 */
declare const ABILITY_ILF_UNIT_TYPE_EXHU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('hwdu')
 */
declare const ABILITY_ILF_WARD_UNIT_TYPE_HWDU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('imou')
 */
declare const ABILITY_ILF_LURE_UNIT_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('ipmu')
 */
declare const ABILITY_ILF_UNIT_TYPE_IPMU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nsyu')
 */
declare const ABILITY_ILF_FACTORY_UNIT_ID: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nfyu')
 */
declare const ABILITY_ILF_SPAWN_UNIT_ID_NFYU: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Nvcu')
 */
declare const ABILITY_ILF_DESTRUCTIBLE_ID: abilityintegerlevelfield

/**
 * ConvertAbilityIntegerLevelField('Iglu')
 */
declare const ABILITY_ILF_UPGRADE_TYPE: abilityintegerlevelfield

/**
 * ConvertAbilityRealLevelField('acas')
 */
declare const ABILITY_RLF_CASTING_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('adur')
 */
declare const ABILITY_RLF_DURATION_NORMAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ahdu')
 */
declare const ABILITY_RLF_DURATION_HERO: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('acdn')
 */
declare const ABILITY_RLF_COOLDOWN: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('aare')
 */
declare const ABILITY_RLF_AREA_OF_EFFECT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('aran')
 */
declare const ABILITY_RLF_CAST_RANGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbz2')
 */
declare const ABILITY_RLF_DAMAGE_HBZ2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbz4')
 */
declare const ABILITY_RLF_BUILDING_REDUCTION_HBZ4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbz5')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_HBZ5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbz6')
 */
declare const ABILITY_RLF_MAXIMUM_DAMAGE_PER_WAVE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hab1')
 */
declare const ABILITY_RLF_MANA_REGENERATION_INCREASE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hmt2')
 */
declare const ABILITY_RLF_CASTING_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oww1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_OWW1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oww2')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_OWW2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocr1')
 */
declare const ABILITY_RLF_CHANCE_TO_CRITICAL_STRIKE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocr2')
 */
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_OCR2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocr3')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_OCR3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocr4')
 */
declare const ABILITY_RLF_CHANCE_TO_EVADE_OCR4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Omi2')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OMI2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Omi3')
 */
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_OMI3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Omi4')
 */
declare const ABILITY_RLF_ANIMATION_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Owk1')
 */
declare const ABILITY_RLF_TRANSITION_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Owk2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OWK2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Owk3')
 */
declare const ABILITY_RLF_BACKSTAB_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Udc1')
 */
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_UDC1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Udp1')
 */
declare const ABILITY_RLF_LIFE_CONVERTED_TO_MANA: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Udp2')
 */
declare const ABILITY_RLF_LIFE_CONVERTED_TO_LIFE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uau1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_UAU1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uau2')
 */
declare const ABILITY_RLF_LIFE_REGENERATION_INCREASE_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eev1')
 */
declare const ABILITY_RLF_CHANCE_TO_EVADE_EEV1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eim1')
 */
declare const ABILITY_RLF_DAMAGE_PER_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eim2')
 */
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_EIM2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eim3')
 */
declare const ABILITY_RLF_BUFFER_MANA_REQUIRED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Emb1')
 */
declare const ABILITY_RLF_MAX_MANA_DRAINED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Emb2')
 */
declare const ABILITY_RLF_BOLT_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Emb3')
 */
declare const ABILITY_RLF_BOLT_LIFETIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eme3')
 */
declare const ABILITY_RLF_ALTITUDE_ADJUSTMENT_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eme4')
 */
declare const ABILITY_RLF_LANDING_DELAY_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eme5')
 */
declare const ABILITY_RLF_ALTERNATE_FORM_HIT_POINT_BONUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncr5')
 */
declare const ABILITY_RLF_MOVE_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncr6')
 */
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_INFO_PANEL_ONLY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ave5')
 */
declare const ABILITY_RLF_LIFE_REGENERATION_RATE_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Usl1')
 */
declare const ABILITY_RLF_STUN_DURATION_USL1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uav1')
 */
declare const ABILITY_RLF_ATTACK_DAMAGE_STOLEN_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ucs1')
 */
declare const ABILITY_RLF_DAMAGE_UCS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ucs2')
 */
declare const ABILITY_RLF_MAX_DAMAGE_UCS2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ucs3')
 */
declare const ABILITY_RLF_DISTANCE_UCS3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ucs4')
 */
declare const ABILITY_RLF_FINAL_AREA_UCS4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uin1')
 */
declare const ABILITY_RLF_DAMAGE_UIN1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uin2')
 */
declare const ABILITY_RLF_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uin3')
 */
declare const ABILITY_RLF_IMPACT_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocl1')
 */
declare const ABILITY_RLF_DAMAGE_PER_TARGET_OCL1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ocl3')
 */
declare const ABILITY_RLF_DAMAGE_REDUCTION_PER_TARGET: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oeq1')
 */
declare const ABILITY_RLF_EFFECT_DELAY_OEQ1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oeq2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TO_BUILDINGS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oeq3')
 */
declare const ABILITY_RLF_UNITS_SLOWED_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oeq4')
 */
declare const ABILITY_RLF_FINAL_AREA_OEQ4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eer1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_EER1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eah1')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_TO_ATTACKERS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Etq1')
 */
declare const ABILITY_RLF_LIFE_HEALED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Etq2')
 */
declare const ABILITY_RLF_HEAL_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Etq3')
 */
declare const ABILITY_RLF_BUILDING_REDUCTION_ETQ3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Etq4')
 */
declare const ABILITY_RLF_INITIAL_IMMUNITY_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Udd1')
 */
declare const ABILITY_RLF_MAX_LIFE_DRAINED_PER_SECOND_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Udd2')
 */
declare const ABILITY_RLF_BUILDING_REDUCTION_UDD2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ufa1')
 */
declare const ABILITY_RLF_ARMOR_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ufa2')
 */
declare const ABILITY_RLF_ARMOR_BONUS_UFA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ufn1')
 */
declare const ABILITY_RLF_AREA_OF_EFFECT_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ufn2')
 */
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_UFN2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfa1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_HFA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esf1')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_ESF1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esf2')
 */
declare const ABILITY_RLF_DAMAGE_INTERVAL_ESF2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esf3')
 */
declare const ABILITY_RLF_BUILDING_REDUCTION_ESF3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ear1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hav1')
 */
declare const ABILITY_RLF_DEFENSE_BONUS_HAV1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hav2')
 */
declare const ABILITY_RLF_HIT_POINT_BONUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hav3')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_HAV3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hav4')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_HAV4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbh1')
 */
declare const ABILITY_RLF_CHANCE_TO_BASH: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbh2')
 */
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HBH2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbh3')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_HBH3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbh4')
 */
declare const ABILITY_RLF_CHANCE_TO_MISS_HBH4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Htb1')
 */
declare const ABILITY_RLF_DAMAGE_HTB1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Htc1')
 */
declare const ABILITY_RLF_AOE_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Htc2')
 */
declare const ABILITY_RLF_SPECIFIC_TARGET_DAMAGE_HTC2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Htc3')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HTC3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Htc4')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HTC4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Had1')
 */
declare const ABILITY_RLF_ARMOR_BONUS_HAD1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hhb1')
 */
declare const ABILITY_RLF_AMOUNT_HEALED_DAMAGED_HHB1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hca1')
 */
declare const ABILITY_RLF_EXTRA_DAMAGE_HCA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hca2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_HCA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hca3')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_HCA3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oae1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_OAE1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oae2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_OAE2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ore1')
 */
declare const ABILITY_RLF_REINCARNATION_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Osh1')
 */
declare const ABILITY_RLF_DAMAGE_OSH1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Osh2')
 */
declare const ABILITY_RLF_MAXIMUM_DAMAGE_OSH2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Osh3')
 */
declare const ABILITY_RLF_DISTANCE_OSH3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Osh4')
 */
declare const ABILITY_RLF_FINAL_AREA_OSH4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nfd1')
 */
declare const ABILITY_RLF_GRAPHIC_DELAY_NFD1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nfd2')
 */
declare const ABILITY_RLF_GRAPHIC_DURATION_NFD2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nfd3')
 */
declare const ABILITY_RLF_DAMAGE_NFD3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ams1')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_AMS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ams2')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_AMS2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Apl1')
 */
declare const ABILITY_RLF_AURA_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Apl2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_APL2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Apl3')
 */
declare const ABILITY_RLF_DURATION_OF_PLAGUE_WARD: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Oar1')
 */
declare const ABILITY_RLF_AMOUNT_OF_HIT_POINTS_REGENERATED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Akb1')
 */
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_AKB1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Adm1')
 */
declare const ABILITY_RLF_MANA_LOSS_ADM1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Adm2')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_ADM2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Bli1')
 */
declare const ABILITY_RLF_EXPANSION_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Bgm2')
 */
declare const ABILITY_RLF_INTERVAL_DURATION_BGM2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Bgm4')
 */
declare const ABILITY_RLF_RADIUS_OF_MINING_RING: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Blo1')
 */
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_PERCENT_BLO1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Blo2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_PERCENT_BLO2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Blo3')
 */
declare const ABILITY_RLF_SCALING_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Can1')
 */
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_CAN1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Can2')
 */
declare const ABILITY_RLF_MAX_HIT_POINTS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dev2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_DEV2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Chd1')
 */
declare const ABILITY_RLF_MOVEMENT_UPDATE_FREQUENCY_CHD1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Chd2')
 */
declare const ABILITY_RLF_ATTACK_UPDATE_FREQUENCY_CHD2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Chd3')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_CHD3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cri1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_CRI1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cri2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_CRI2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cri3')
 */
declare const ABILITY_RLF_DAMAGE_REDUCTION_CRI3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Crs1')
 */
declare const ABILITY_RLF_CHANCE_TO_MISS_CRS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dda1')
 */
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_DDA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dda2')
 */
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_DDA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dda3')
 */
declare const ABILITY_RLF_PARTIAL_DAMAGE_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dda4')
 */
declare const ABILITY_RLF_PARTIAL_DAMAGE_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sds1')
 */
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_SDS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uco5')
 */
declare const ABILITY_RLF_MAX_DAMAGE_UCO5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uco6')
 */
declare const ABILITY_RLF_MOVE_SPEED_BONUS_UCO6: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def1')
 */
declare const ABILITY_RLF_DAMAGE_TAKEN_PERCENT_DEF1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def2')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_DEF2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def3')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_DEF3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def4')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_DEF4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def5')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_DEF5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def6')
 */
declare const ABILITY_RLF_CHANCE_TO_DEFLECT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def7')
 */
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_PIERCING: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Def8')
 */
declare const ABILITY_RLF_DEFLECT_DAMAGE_TAKEN_SPELLS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eat1')
 */
declare const ABILITY_RLF_RIP_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eat2')
 */
declare const ABILITY_RLF_EAT_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Eat3')
 */
declare const ABILITY_RLF_HIT_POINTS_GAINED_EAT3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ens1')
 */
declare const ABILITY_RLF_AIR_UNIT_LOWER_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ens2')
 */
declare const ABILITY_RLF_AIR_UNIT_HEIGHT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ens3')
 */
declare const ABILITY_RLF_MELEE_ATTACK_RANGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Egm2')
 */
declare const ABILITY_RLF_INTERVAL_DURATION_EGM2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Fla2')
 */
declare const ABILITY_RLF_EFFECT_DELAY_FLA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Gld2')
 */
declare const ABILITY_RLF_MINING_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Gyd2')
 */
declare const ABILITY_RLF_RADIUS_OF_GRAVESTONES: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Gyd3')
 */
declare const ABILITY_RLF_RADIUS_OF_CORPSES: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hea1')
 */
declare const ABILITY_RLF_HIT_POINTS_GAINED_HEA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Inf1')
 */
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_INF1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Inf3')
 */
declare const ABILITY_RLF_AUTOCAST_RANGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Inf4')
 */
declare const ABILITY_RLF_LIFE_REGEN_RATE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Lit1')
 */
declare const ABILITY_RLF_GRAPHIC_DELAY_LIT1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Lit2')
 */
declare const ABILITY_RLF_GRAPHIC_DURATION_LIT2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Lsh1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_LSH1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Mbt1')
 */
declare const ABILITY_RLF_MANA_GAINED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Mbt2')
 */
declare const ABILITY_RLF_HIT_POINTS_GAINED_MBT2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Mbt3')
 */
declare const ABILITY_RLF_AUTOCAST_REQUIREMENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Mbt4')
 */
declare const ABILITY_RLF_WATER_HEIGHT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Min1')
 */
declare const ABILITY_RLF_ACTIVATION_DELAY_MIN1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Min2')
 */
declare const ABILITY_RLF_INVISIBILITY_TRANSITION_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Neu1')
 */
declare const ABILITY_RLF_ACTIVATION_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Arm1')
 */
declare const ABILITY_RLF_AMOUNT_REGENERATED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poi1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POI1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poi2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POI2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poi3')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POI3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poa1')
 */
declare const ABILITY_RLF_EXTRA_DAMAGE_POA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poa2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_POA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poa3')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_POA3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Poa4')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_POA4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Pos2')
 */
declare const ABILITY_RLF_DAMAGE_AMPLIFICATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('War1')
 */
declare const ABILITY_RLF_CHANCE_TO_STOMP_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('War2')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_WAR2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('War3')
 */
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_WAR3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('War4')
 */
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_WAR4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Prg3')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_PRG3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Prg4')
 */
declare const ABILITY_RLF_UNIT_PAUSE_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Prg5')
 */
declare const ABILITY_RLF_HERO_PAUSE_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rej1')
 */
declare const ABILITY_RLF_HIT_POINTS_GAINED_REJ1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rej2')
 */
declare const ABILITY_RLF_MANA_POINTS_GAINED_REJ2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rpb3')
 */
declare const ABILITY_RLF_MINIMUM_LIFE_REQUIRED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rpb4')
 */
declare const ABILITY_RLF_MINIMUM_MANA_REQUIRED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rep1')
 */
declare const ABILITY_RLF_REPAIR_COST_RATIO: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rep2')
 */
declare const ABILITY_RLF_REPAIR_TIME_RATIO: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rep3')
 */
declare const ABILITY_RLF_POWERBUILD_COST: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rep4')
 */
declare const ABILITY_RLF_POWERBUILD_RATE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Rep5')
 */
declare const ABILITY_RLF_NAVAL_RANGE_BONUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Roa1')
 */
declare const ABILITY_RLF_DAMAGE_INCREASE_PERCENT_ROA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Roa3')
 */
declare const ABILITY_RLF_LIFE_REGENERATION_RATE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Roa4')
 */
declare const ABILITY_RLF_MANA_REGEN: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nbr1')
 */
declare const ABILITY_RLF_DAMAGE_INCREASE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sal1')
 */
declare const ABILITY_RLF_SALVAGE_COST_RATIO: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esn1')
 */
declare const ABILITY_RLF_IN_FLIGHT_SIGHT_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esn2')
 */
declare const ABILITY_RLF_HOVERING_SIGHT_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esn3')
 */
declare const ABILITY_RLF_HOVERING_HEIGHT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esn5')
 */
declare const ABILITY_RLF_DURATION_OF_OWLS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Shm1')
 */
declare const ABILITY_RLF_FADE_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Shm2')
 */
declare const ABILITY_RLF_DAY_NIGHT_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Shm3')
 */
declare const ABILITY_RLF_ACTION_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Slo1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SLO1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Slo2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SLO2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Spo1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_SPO1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Spo2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_SPO2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Spo3')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_SPO3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sta1')
 */
declare const ABILITY_RLF_ACTIVATION_DELAY_STA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sta2')
 */
declare const ABILITY_RLF_DETECTION_RADIUS_STA2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sta3')
 */
declare const ABILITY_RLF_DETONATION_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Sta4')
 */
declare const ABILITY_RLF_STUN_DURATION_STA4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uhf1')
 */
declare const ABILITY_RLF_ATTACK_SPEED_BONUS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uhf2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_UHF2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wha1')
 */
declare const ABILITY_RLF_LUMBER_PER_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wha3')
 */
declare const ABILITY_RLF_ART_ATTACHMENT_HEIGHT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wrp1')
 */
declare const ABILITY_RLF_TELEPORT_AREA_WIDTH: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wrp2')
 */
declare const ABILITY_RLF_TELEPORT_AREA_HEIGHT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ivam')
 */
declare const ABILITY_RLF_LIFE_STOLEN_PER_ATTACK: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Idam')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_IDAM: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Iob2')
 */
declare const ABILITY_RLF_CHANCE_TO_HIT_UNITS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Iob3')
 */
declare const ABILITY_RLF_CHANCE_TO_HIT_HEROS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Iob4')
 */
declare const ABILITY_RLF_CHANCE_TO_HIT_SUMMONS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Idel')
 */
declare const ABILITY_RLF_DELAY_FOR_TARGET_EFFECT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Iild')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_PERCENT_OF_NORMAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Iilw')
 */
declare const ABILITY_RLF_DAMAGE_RECEIVED_MULTIPLIER: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Imrp')
 */
declare const ABILITY_RLF_MANA_REGENERATION_BONUS_AS_FRACTION_OF_NORMAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ispi')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_ISPI: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Idps')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_IDPS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cac1')
 */
declare const ABILITY_RLF_ATTACK_DAMAGE_INCREASE_CAC1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cor1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_COR1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Isx1')
 */
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_ISX1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wrs1')
 */
declare const ABILITY_RLF_DAMAGE_WRS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Wrs2')
 */
declare const ABILITY_RLF_TERRAIN_DEFORMATION_AMPLITUDE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ctc1')
 */
declare const ABILITY_RLF_DAMAGE_CTC1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ctc2')
 */
declare const ABILITY_RLF_EXTRA_DAMAGE_TO_TARGET: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ctc3')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_CTC3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ctc4')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_CTC4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ctb1')
 */
declare const ABILITY_RLF_DAMAGE_CTB1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uds2')
 */
declare const ABILITY_RLF_CASTING_DELAY_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dtn1')
 */
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_DTN1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Dtn2')
 */
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_DTN2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ivs1')
 */
declare const ABILITY_RLF_TRANSITION_TIME_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nmr1')
 */
declare const ABILITY_RLF_MANA_DRAINED_PER_SECOND_NMR1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ssk1')
 */
declare const ABILITY_RLF_CHANCE_TO_REDUCE_DAMAGE_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ssk2')
 */
declare const ABILITY_RLF_MINIMUM_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ssk3')
 */
declare const ABILITY_RLF_IGNORED_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs1')
 */
declare const ABILITY_RLF_FULL_DAMAGE_DEALT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs2')
 */
declare const ABILITY_RLF_FULL_DAMAGE_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs3')
 */
declare const ABILITY_RLF_HALF_DAMAGE_DEALT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs4')
 */
declare const ABILITY_RLF_HALF_DAMAGE_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs5')
 */
declare const ABILITY_RLF_BUILDING_REDUCTION_HFS5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hfs6')
 */
declare const ABILITY_RLF_MAXIMUM_DAMAGE_HFS6: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nms1')
 */
declare const ABILITY_RLF_MANA_PER_HIT_POINT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nms2')
 */
declare const ABILITY_RLF_DAMAGE_ABSORBED_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uim1')
 */
declare const ABILITY_RLF_WAVE_DISTANCE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uim2')
 */
declare const ABILITY_RLF_WAVE_TIME_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uim3')
 */
declare const ABILITY_RLF_DAMAGE_DEALT_UIM3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uim4')
 */
declare const ABILITY_RLF_AIR_TIME_SECONDS_UIM4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uls2')
 */
declare const ABILITY_RLF_UNIT_RELEASE_INTERVAL_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uls4')
 */
declare const ABILITY_RLF_DAMAGE_RETURN_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uls5')
 */
declare const ABILITY_RLF_DAMAGE_RETURN_THRESHOLD: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uts1')
 */
declare const ABILITY_RLF_RETURNED_DAMAGE_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uts2')
 */
declare const ABILITY_RLF_RECEIVED_DAMAGE_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Uts3')
 */
declare const ABILITY_RLF_DEFENSE_BONUS_UTS3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nba1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_NBA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nba3')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NBA3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cmg2')
 */
declare const ABILITY_RLF_MANA_PER_SUMMONED_HITPOINT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Cmg3')
 */
declare const ABILITY_RLF_CHARGE_FOR_CURRENT_LIFE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr1')
 */
declare const ABILITY_RLF_HIT_POINTS_DRAINED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr2')
 */
declare const ABILITY_RLF_MANA_POINTS_DRAINED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr3')
 */
declare const ABILITY_RLF_DRAIN_INTERVAL_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr4')
 */
declare const ABILITY_RLF_LIFE_TRANSFERRED_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr5')
 */
declare const ABILITY_RLF_MANA_TRANSFERRED_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr6')
 */
declare const ABILITY_RLF_BONUS_LIFE_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr7')
 */
declare const ABILITY_RLF_BONUS_LIFE_DECAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr8')
 */
declare const ABILITY_RLF_BONUS_MANA_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndr9')
 */
declare const ABILITY_RLF_BONUS_MANA_DECAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsi2')
 */
declare const ABILITY_RLF_CHANCE_TO_MISS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsi3')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_MODIFIER: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsi4')
 */
declare const ABILITY_RLF_ATTACK_SPEED_MODIFIER: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tdg1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_TDG1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tdg2')
 */
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_TDG2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tdg3')
 */
declare const ABILITY_RLF_MEDIUM_DAMAGE_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tdg4')
 */
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_TDG4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tdg5')
 */
declare const ABILITY_RLF_SMALL_DAMAGE_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tsp1')
 */
declare const ABILITY_RLF_AIR_TIME_SECONDS_TSP1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tsp2')
 */
declare const ABILITY_RLF_MINIMUM_HIT_INTERVAL_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nbf5')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NBF5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ebl1')
 */
declare const ABILITY_RLF_MAXIMUM_RANGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ebl2')
 */
declare const ABILITY_RLF_MINIMUM_RANGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Efk1')
 */
declare const ABILITY_RLF_DAMAGE_PER_TARGET_EFK1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Efk2')
 */
declare const ABILITY_RLF_MAXIMUM_TOTAL_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Efk4')
 */
declare const ABILITY_RLF_MAXIMUM_SPEED_ADJUSTMENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esh1')
 */
declare const ABILITY_RLF_DECAYING_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esh2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_FACTOR_ESH2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esh3')
 */
declare const ABILITY_RLF_ATTACK_SPEED_FACTOR_ESH3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esh4')
 */
declare const ABILITY_RLF_DECAY_POWER: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Esh5')
 */
declare const ABILITY_RLF_INITIAL_DAMAGE_ESH5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('abs1')
 */
declare const ABILITY_RLF_MAXIMUM_LIFE_ABSORBED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('abs2')
 */
declare const ABILITY_RLF_MAXIMUM_MANA_ABSORBED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('bsk1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_INCREASE_BSK1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('bsk2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_INCREASE_BSK2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('bsk3')
 */
declare const ABILITY_RLF_DAMAGE_TAKEN_INCREASE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('dvm1')
 */
declare const ABILITY_RLF_LIFE_PER_UNIT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('dvm2')
 */
declare const ABILITY_RLF_MANA_PER_UNIT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('dvm3')
 */
declare const ABILITY_RLF_LIFE_PER_BUFF: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('dvm4')
 */
declare const ABILITY_RLF_MANA_PER_BUFF: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('dvm5')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_DVM5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fak1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_FAK1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fak2')
 */
declare const ABILITY_RLF_MEDIUM_DAMAGE_FACTOR_FAK2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fak3')
 */
declare const ABILITY_RLF_SMALL_DAMAGE_FACTOR_FAK3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fak4')
 */
declare const ABILITY_RLF_FULL_DAMAGE_RADIUS_FAK4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fak5')
 */
declare const ABILITY_RLF_HALF_DAMAGE_RADIUS_FAK5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('liq1')
 */
declare const ABILITY_RLF_EXTRA_DAMAGE_PER_SECOND: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('liq2')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_LIQ2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('liq3')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_LIQ3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mim1')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mfl1')
 */
declare const ABILITY_RLF_UNIT_DAMAGE_PER_MANA_POINT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mfl2')
 */
declare const ABILITY_RLF_HERO_DAMAGE_PER_MANA_POINT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mfl3')
 */
declare const ABILITY_RLF_UNIT_MAXIMUM_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mfl4')
 */
declare const ABILITY_RLF_HERO_MAXIMUM_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mfl5')
 */
declare const ABILITY_RLF_DAMAGE_COOLDOWN: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('spl1')
 */
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_SPL1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('irl1')
 */
declare const ABILITY_RLF_LIFE_REGENERATED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('irl2')
 */
declare const ABILITY_RLF_MANA_REGENERATED: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('idc1')
 */
declare const ABILITY_RLF_MANA_LOSS_PER_UNIT_IDC1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('idc2')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DAMAGE_IDC2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('imo2')
 */
declare const ABILITY_RLF_ACTIVATION_DELAY_IMO2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('imo3')
 */
declare const ABILITY_RLF_LURE_INTERVAL_SECONDS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('isr1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_ISR1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('isr2')
 */
declare const ABILITY_RLF_DAMAGE_REDUCTION_ISR2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ipv1')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_IPV1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ipv2')
 */
declare const ABILITY_RLF_LIFE_STEAL_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ast1')
 */
declare const ABILITY_RLF_LIFE_RESTORED_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('ast2')
 */
declare const ABILITY_RLF_MANA_RESTORED_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('gra1')
 */
declare const ABILITY_RLF_ATTACH_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('gra2')
 */
declare const ABILITY_RLF_REMOVE_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsa2')
 */
declare const ABILITY_RLF_HERO_REGENERATION_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsa3')
 */
declare const ABILITY_RLF_UNIT_REGENERATION_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsa4')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_NSA4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsa5')
 */
declare const ABILITY_RLF_HIT_POINTS_PER_SECOND_NSA5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ixs1')
 */
declare const ABILITY_RLF_DAMAGE_TO_SUMMONED_UNITS_IXS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ixs2')
 */
declare const ABILITY_RLF_MAGIC_DAMAGE_REDUCTION_IXS2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Npa6')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nse1')
 */
declare const ABILITY_RLF_SHIELD_COOLDOWN_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndo1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_NDO1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ndo3')
 */
declare const ABILITY_RLF_SUMMONED_UNIT_DURATION_SECONDS_NDO3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('flk1')
 */
declare const ABILITY_RLF_MEDIUM_DAMAGE_RADIUS_FLK1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('flk2')
 */
declare const ABILITY_RLF_SMALL_DAMAGE_RADIUS_FLK2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('flk3')
 */
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_FLK3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('flk4')
 */
declare const ABILITY_RLF_MEDIUM_DAMAGE_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('flk5')
 */
declare const ABILITY_RLF_SMALL_DAMAGE_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbn1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_HBN1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Hbn2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_HBN2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fbk1')
 */
declare const ABILITY_RLF_MAX_MANA_DRAINED_UNITS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fbk2')
 */
declare const ABILITY_RLF_DAMAGE_RATIO_UNITS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fbk3')
 */
declare const ABILITY_RLF_MAX_MANA_DRAINED_HEROS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fbk4')
 */
declare const ABILITY_RLF_DAMAGE_RATIO_HEROS_PERCENT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('fbk5')
 */
declare const ABILITY_RLF_SUMMONED_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('nca1')
 */
declare const ABILITY_RLF_DISTRIBUTED_DAMAGE_FACTOR_NCA1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('pxf1')
 */
declare const ABILITY_RLF_INITIAL_DAMAGE_PXF1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('pxf2')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_PXF2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('mls1')
 */
declare const ABILITY_RLF_DAMAGE_PER_SECOND_MLS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nst2')
 */
declare const ABILITY_RLF_BEAST_COLLISION_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nst3')
 */
declare const ABILITY_RLF_DAMAGE_AMOUNT_NST3: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nst4')
 */
declare const ABILITY_RLF_DAMAGE_RADIUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nst5')
 */
declare const ABILITY_RLF_DAMAGE_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncl1')
 */
declare const ABILITY_RLF_FOLLOW_THROUGH_TIME: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncl4')
 */
declare const ABILITY_RLF_ART_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nab1')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NAB1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nab2')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NAB2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nab4')
 */
declare const ABILITY_RLF_PRIMARY_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nab5')
 */
declare const ABILITY_RLF_SECONDARY_DAMAGE: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nab6')
 */
declare const ABILITY_RLF_DAMAGE_INTERVAL_NAB6: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ntm1')
 */
declare const ABILITY_RLF_GOLD_COST_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ntm2')
 */
declare const ABILITY_RLF_LUMBER_COST_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Neg1')
 */
declare const ABILITY_RLF_MOVE_SPEED_BONUS_NEG1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Neg2')
 */
declare const ABILITY_RLF_DAMAGE_BONUS_NEG2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncs1')
 */
declare const ABILITY_RLF_DAMAGE_AMOUNT_NCS1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncs2')
 */
declare const ABILITY_RLF_DAMAGE_INTERVAL_NCS2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncs4')
 */
declare const ABILITY_RLF_MAX_DAMAGE_NCS4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncs5')
 */
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NCS5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Ncs6')
 */
declare const ABILITY_RLF_EFFECT_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsy1')
 */
declare const ABILITY_RLF_SPAWN_INTERVAL_NSY1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsy3')
 */
declare const ABILITY_RLF_SPAWN_UNIT_DURATION: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsy4')
 */
declare const ABILITY_RLF_SPAWN_UNIT_OFFSET: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nsy5')
 */
declare const ABILITY_RLF_LEASH_RANGE_NSY5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nfy1')
 */
declare const ABILITY_RLF_SPAWN_INTERVAL_NFY1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nfy2')
 */
declare const ABILITY_RLF_LEASH_RANGE_NFY2: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nde1')
 */
declare const ABILITY_RLF_CHANCE_TO_DEMOLISH: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nde2')
 */
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_BUILDINGS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nde3')
 */
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_UNITS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nde4')
 */
declare const ABILITY_RLF_DAMAGE_MULTIPLIER_HEROES: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic1')
 */
declare const ABILITY_RLF_BONUS_DAMAGE_MULTIPLIER: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic2')
 */
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic3')
 */
declare const ABILITY_RLF_DEATH_DAMAGE_FULL_AREA: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic4')
 */
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AMOUNT: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic5')
 */
declare const ABILITY_RLF_DEATH_DAMAGE_HALF_AREA: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nic6')
 */
declare const ABILITY_RLF_DEATH_DAMAGE_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nso1')
 */
declare const ABILITY_RLF_DAMAGE_AMOUNT_NSO1: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nso2')
 */
declare const ABILITY_RLF_DAMAGE_PERIOD: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nso3')
 */
declare const ABILITY_RLF_DAMAGE_PENALTY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nso4')
 */
declare const ABILITY_RLF_MOVEMENT_SPEED_REDUCTION_PERCENT_NSO4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nso5')
 */
declare const ABILITY_RLF_ATTACK_SPEED_REDUCTION_PERCENT_NSO5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nlm2')
 */
declare const ABILITY_RLF_SPLIT_DELAY: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nlm4')
 */
declare const ABILITY_RLF_MAX_HITPOINT_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nlm5')
 */
declare const ABILITY_RLF_LIFE_DURATION_SPLIT_BONUS: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nvc3')
 */
declare const ABILITY_RLF_WAVE_INTERVAL: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nvc4')
 */
declare const ABILITY_RLF_BUILDING_DAMAGE_FACTOR_NVC4: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nvc5')
 */
declare const ABILITY_RLF_FULL_DAMAGE_AMOUNT_NVC5: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Nvc6')
 */
declare const ABILITY_RLF_HALF_DAMAGE_FACTOR: abilityreallevelfield

/**
 * ConvertAbilityRealLevelField('Tau5')
 */
declare const ABILITY_RLF_INTERVAL_BETWEEN_PULSES: abilityreallevelfield

/**
 * ConvertAbilityBooleanLevelField('Hab2')
 */
declare const ABILITY_BLF_PERCENT_BONUS_HAB2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Hmt3')
 */
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_HMT3: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ocr5')
 */
declare const ABILITY_BLF_NEVER_MISS_OCR5: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ocr6')
 */
declare const ABILITY_BLF_EXCLUDE_ITEM_DAMAGE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Owk4')
 */
declare const ABILITY_BLF_BACKSTAB_DAMAGE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Uan3')
 */
declare const ABILITY_BLF_INHERIT_UPGRADES_UAN3: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Udp3')
 */
declare const ABILITY_BLF_MANA_CONVERSION_AS_PERCENT: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Udp4')
 */
declare const ABILITY_BLF_LIFE_CONVERSION_AS_PERCENT: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Udp5')
 */
declare const ABILITY_BLF_LEAVE_TARGET_ALIVE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Uau3')
 */
declare const ABILITY_BLF_PERCENT_BONUS_UAU3: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Eah2')
 */
declare const ABILITY_BLF_DAMAGE_IS_PERCENT_RECEIVED: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ear2')
 */
declare const ABILITY_BLF_MELEE_BONUS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ear3')
 */
declare const ABILITY_BLF_RANGED_BONUS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ear4')
 */
declare const ABILITY_BLF_FLAT_BONUS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Hbh5')
 */
declare const ABILITY_BLF_NEVER_MISS_HBH5: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Had2')
 */
declare const ABILITY_BLF_PERCENT_BONUS_HAD2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Hds1')
 */
declare const ABILITY_BLF_CAN_DEACTIVATE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Hre2')
 */
declare const ABILITY_BLF_RAISED_UNITS_ARE_INVULNERABLE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Oar2')
 */
declare const ABILITY_BLF_PERCENTAGE_OAR2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Btl2')
 */
declare const ABILITY_BLF_SUMMON_BUSY_UNITS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Bli2')
 */
declare const ABILITY_BLF_CREATES_BLIGHT: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Sds6')
 */
declare const ABILITY_BLF_EXPLODES_ON_DEATH: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Fae2')
 */
declare const ABILITY_BLF_ALWAYS_AUTOCAST_FAE2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Mbt5')
 */
declare const ABILITY_BLF_REGENERATE_ONLY_AT_NIGHT: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Neu3')
 */
declare const ABILITY_BLF_SHOW_SELECT_UNIT_BUTTON: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Neu4')
 */
declare const ABILITY_BLF_SHOW_UNIT_INDICATOR: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ans6')
 */
declare const ABILITY_BLF_CHARGE_OWNING_PLAYER: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Arm2')
 */
declare const ABILITY_BLF_PERCENTAGE_ARM2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Pos3')
 */
declare const ABILITY_BLF_TARGET_IS_INVULNERABLE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Pos4')
 */
declare const ABILITY_BLF_TARGET_IS_MAGIC_IMMUNE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ucb6')
 */
declare const ABILITY_BLF_KILL_ON_CASTER_DEATH: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Rej4')
 */
declare const ABILITY_BLF_NO_TARGET_REQUIRED_REJ4: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Rtn1')
 */
declare const ABILITY_BLF_ACCEPTS_GOLD: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Rtn2')
 */
declare const ABILITY_BLF_ACCEPTS_LUMBER: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Roa5')
 */
declare const ABILITY_BLF_PREFER_HOSTILES_ROA5: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Roa6')
 */
declare const ABILITY_BLF_PREFER_FRIENDLIES_ROA6: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Roo3')
 */
declare const ABILITY_BLF_ROOTED_TURNING: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Slo3')
 */
declare const ABILITY_BLF_ALWAYS_AUTOCAST_SLO3: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ihid')
 */
declare const ABILITY_BLF_HIDE_BUTTON: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Itp2')
 */
declare const ABILITY_BLF_USE_TELEPORT_CLUSTERING_ITP2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Eth1')
 */
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Eth2')
 */
declare const ABILITY_BLF_DOES_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Gho1')
 */
declare const ABILITY_BLF_AUTO_ACQUIRE_ATTACK_TARGETS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Gho2')
 */
declare const ABILITY_BLF_IMMUNE_TO_MORPH_EFFECTS_GHO2: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Gho3')
 */
declare const ABILITY_BLF_DO_NOT_BLOCK_BUILDINGS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ssk4')
 */
declare const ABILITY_BLF_INCLUDE_RANGED_DAMAGE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ssk5')
 */
declare const ABILITY_BLF_INCLUDE_MELEE_DAMAGE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('coa2')
 */
declare const ABILITY_BLF_MOVE_TO_PARTNER: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('cyc1')
 */
declare const ABILITY_BLF_CAN_BE_DISPELLED: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('dvm6')
 */
declare const ABILITY_BLF_IGNORE_FRIENDLY_BUFFS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('inv2')
 */
declare const ABILITY_BLF_DROP_ITEMS_ON_DEATH: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('inv3')
 */
declare const ABILITY_BLF_CAN_USE_ITEMS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('inv4')
 */
declare const ABILITY_BLF_CAN_GET_ITEMS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('inv5')
 */
declare const ABILITY_BLF_CAN_DROP_ITEMS: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('liq4')
 */
declare const ABILITY_BLF_REPAIRS_ALLOWED: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('mfl6')
 */
declare const ABILITY_BLF_CASTER_ONLY_SPLASH: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('irl4')
 */
declare const ABILITY_BLF_NO_TARGET_REQUIRED_IRL4: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('irl5')
 */
declare const ABILITY_BLF_DISPEL_ON_ATTACK: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('ipv3')
 */
declare const ABILITY_BLF_AMOUNT_IS_RAW_VALUE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('spb2')
 */
declare const ABILITY_BLF_SHARED_SPELL_COOLDOWN: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('sla1')
 */
declare const ABILITY_BLF_SLEEP_ONCE: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('sla2')
 */
declare const ABILITY_BLF_ALLOW_ON_ANY_PLAYER_SLOT: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ncl5')
 */
declare const ABILITY_BLF_DISABLE_OTHER_ABILITIES: abilitybooleanlevelfield

/**
 * ConvertAbilityBooleanLevelField('Ntm4')
 */
declare const ABILITY_BLF_ALLOW_BOUNTY: abilitybooleanlevelfield

/**
 * ConvertAbilityStringLevelField('aart')
 */
declare const ABILITY_SLF_ICON_NORMAL: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('acat')
 */
declare const ABILITY_SLF_CASTER: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('atat')
 */
declare const ABILITY_SLF_TARGET: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('asat')
 */
declare const ABILITY_SLF_SPECIAL: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('aeat')
 */
declare const ABILITY_SLF_EFFECT: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('aaea')
 */
declare const ABILITY_SLF_AREA_EFFECT: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('alig')
 */
declare const ABILITY_SLF_LIGHTNING_EFFECTS: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('amat')
 */
declare const ABILITY_SLF_MISSILE_ART: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('aret')
 */
declare const ABILITY_SLF_TOOLTIP_LEARN: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('arut')
 */
declare const ABILITY_SLF_TOOLTIP_LEARN_EXTENDED: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('atp1')
 */
declare const ABILITY_SLF_TOOLTIP_NORMAL: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('aut1')
 */
declare const ABILITY_SLF_TOOLTIP_TURN_OFF: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('aub1')
 */
declare const ABILITY_SLF_TOOLTIP_NORMAL_EXTENDED: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('auu1')
 */
declare const ABILITY_SLF_TOOLTIP_TURN_OFF_EXTENDED: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Eme1')
 */
declare const ABILITY_SLF_NORMAL_FORM_UNIT_EME1: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ndp1')
 */
declare const ABILITY_SLF_SPAWNED_UNITS: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Nrc1')
 */
declare const ABILITY_SLF_ABILITY_FOR_UNIT_CREATION: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Mil1')
 */
declare const ABILITY_SLF_NORMAL_FORM_UNIT_MIL1: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Mil2')
 */
declare const ABILITY_SLF_ALTERNATE_FORM_UNIT_MIL2: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ans5')
 */
declare const ABILITY_SLF_BASE_ORDER_ID_ANS5: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ply2')
 */
declare const ABILITY_SLF_MORPH_UNITS_GROUND: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ply3')
 */
declare const ABILITY_SLF_MORPH_UNITS_AIR: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ply4')
 */
declare const ABILITY_SLF_MORPH_UNITS_AMPHIBIOUS: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ply5')
 */
declare const ABILITY_SLF_MORPH_UNITS_WATER: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Rai3')
 */
declare const ABILITY_SLF_UNIT_TYPE_ONE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Rai4')
 */
declare const ABILITY_SLF_UNIT_TYPE_TWO: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Sod2')
 */
declare const ABILITY_SLF_UNIT_TYPE_SOD2: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ist1')
 */
declare const ABILITY_SLF_SUMMON_1_UNIT_TYPE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ist2')
 */
declare const ABILITY_SLF_SUMMON_2_UNIT_TYPE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ndc1')
 */
declare const ABILITY_SLF_RACE_TO_CONVERT: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('coa1')
 */
declare const ABILITY_SLF_PARTNER_UNIT_TYPE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('dcp1')
 */
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_ONE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('dcp2')
 */
declare const ABILITY_SLF_PARTNER_UNIT_TYPE_TWO: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('tpi1')
 */
declare const ABILITY_SLF_REQUIRED_UNIT_TYPE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('tpi2')
 */
declare const ABILITY_SLF_CONVERTED_UNIT_TYPE: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('spb1')
 */
declare const ABILITY_SLF_SPELL_LIST: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('spb5')
 */
declare const ABILITY_SLF_BASE_ORDER_ID_SPB5: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Ncl6')
 */
declare const ABILITY_SLF_BASE_ORDER_ID_NCL6: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Neg3')
 */
declare const ABILITY_SLF_ABILITY_UPGRADE_1: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Neg4')
 */
declare const ABILITY_SLF_ABILITY_UPGRADE_2: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Neg5')
 */
declare const ABILITY_SLF_ABILITY_UPGRADE_3: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Neg6')
 */
declare const ABILITY_SLF_ABILITY_UPGRADE_4: abilitystringlevelfield

/**
 * ConvertAbilityStringLevelField('Nsy2')
 */
declare const ABILITY_SLF_SPAWN_UNIT_ID_NSY2: abilitystringlevelfield

/**
 * ConvertItemIntegerField('ilev')
 */
declare const ITEM_IF_LEVEL: itemintegerfield

/**
 * ConvertItemIntegerField('iuse')
 */
declare const ITEM_IF_NUMBER_OF_CHARGES: itemintegerfield

/**
 * ConvertItemIntegerField('icid')
 */
declare const ITEM_IF_COOLDOWN_GROUP: itemintegerfield

/**
 * ConvertItemIntegerField('ihtp')
 */
declare const ITEM_IF_MAX_HIT_POINTS: itemintegerfield

/**
 * ConvertItemIntegerField('ihpc')
 */
declare const ITEM_IF_HIT_POINTS: itemintegerfield

/**
 * ConvertItemIntegerField('ipri')
 */
declare const ITEM_IF_PRIORITY: itemintegerfield

/**
 * ConvertItemIntegerField('iarm')
 */
declare const ITEM_IF_ARMOR_TYPE: itemintegerfield

/**
 * ConvertItemIntegerField('iclr')
 */
declare const ITEM_IF_TINTING_COLOR_RED: itemintegerfield

/**
 * ConvertItemIntegerField('iclg')
 */
declare const ITEM_IF_TINTING_COLOR_GREEN: itemintegerfield

/**
 * ConvertItemIntegerField('iclb')
 */
declare const ITEM_IF_TINTING_COLOR_BLUE: itemintegerfield

/**
 * ConvertItemIntegerField('ical')
 */
declare const ITEM_IF_TINTING_COLOR_ALPHA: itemintegerfield

/**
 * ConvertItemRealField('isca')
 */
declare const ITEM_RF_SCALING_VALUE: itemrealfield

/**
 * ConvertItemBooleanField('idrp')
 */
declare const ITEM_BF_DROPPED_WHEN_CARRIER_DIES: itembooleanfield

/**
 * ConvertItemBooleanField('idro')
 */
declare const ITEM_BF_CAN_BE_DROPPED: itembooleanfield

/**
 * ConvertItemBooleanField('iper')
 */
declare const ITEM_BF_PERISHABLE: itembooleanfield

/**
 * ConvertItemBooleanField('iprn')
 */
declare const ITEM_BF_INCLUDE_AS_RANDOM_CHOICE: itembooleanfield

/**
 * ConvertItemBooleanField('ipow')
 */
declare const ITEM_BF_USE_AUTOMATICALLY_WHEN_ACQUIRED: itembooleanfield

/**
 * ConvertItemBooleanField('ipaw')
 */
declare const ITEM_BF_CAN_BE_SOLD_TO_MERCHANTS: itembooleanfield

/**
 * ConvertItemBooleanField('iusa')
 */
declare const ITEM_BF_ACTIVELY_USED: itembooleanfield

/**
 * ConvertItemStringField('ifil')
 */
declare const ITEM_SF_MODEL_USED: itemstringfield

/**
 * ConvertUnitIntegerField('udty')
 */
declare const UNIT_IF_DEFENSE_TYPE: unitintegerfield

/**
 * ConvertUnitIntegerField('uarm')
 */
declare const UNIT_IF_ARMOR_TYPE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulfi')
 */
declare const UNIT_IF_LOOPING_FADE_IN_RATE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulfo')
 */
declare const UNIT_IF_LOOPING_FADE_OUT_RATE: unitintegerfield

/**
 * ConvertUnitIntegerField('uagc')
 */
declare const UNIT_IF_AGILITY: unitintegerfield

/**
 * ConvertUnitIntegerField('uinc')
 */
declare const UNIT_IF_INTELLIGENCE: unitintegerfield

/**
 * ConvertUnitIntegerField('ustc')
 */
declare const UNIT_IF_STRENGTH: unitintegerfield

/**
 * ConvertUnitIntegerField('uagm')
 */
declare const UNIT_IF_AGILITY_PERMANENT: unitintegerfield

/**
 * ConvertUnitIntegerField('uinm')
 */
declare const UNIT_IF_INTELLIGENCE_PERMANENT: unitintegerfield

/**
 * ConvertUnitIntegerField('ustm')
 */
declare const UNIT_IF_STRENGTH_PERMANENT: unitintegerfield

/**
 * ConvertUnitIntegerField('uagb')
 */
declare const UNIT_IF_AGILITY_WITH_BONUS: unitintegerfield

/**
 * ConvertUnitIntegerField('uinb')
 */
declare const UNIT_IF_INTELLIGENCE_WITH_BONUS: unitintegerfield

/**
 * ConvertUnitIntegerField('ustb')
 */
declare const UNIT_IF_STRENGTH_WITH_BONUS: unitintegerfield

/**
 * ConvertUnitIntegerField('ubdi')
 */
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield

/**
 * ConvertUnitIntegerField('ubba')
 */
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_BASE: unitintegerfield

/**
 * ConvertUnitIntegerField('ubsi')
 */
declare const UNIT_IF_GOLD_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulbd')
 */
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_NUMBER_OF_DICE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulba')
 */
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_BASE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulbs')
 */
declare const UNIT_IF_LUMBER_BOUNTY_AWARDED_SIDES_PER_DIE: unitintegerfield

/**
 * ConvertUnitIntegerField('ulev')
 */
declare const UNIT_IF_LEVEL: unitintegerfield

/**
 * ConvertUnitIntegerField('ufor')
 */
declare const UNIT_IF_FORMATION_RANK: unitintegerfield

/**
 * ConvertUnitIntegerField('uori')
 */
declare const UNIT_IF_ORIENTATION_INTERPOLATION: unitintegerfield

/**
 * ConvertUnitIntegerField('uept')
 */
declare const UNIT_IF_ELEVATION_SAMPLE_POINTS: unitintegerfield

/**
 * ConvertUnitIntegerField('uclr')
 */
declare const UNIT_IF_TINTING_COLOR_RED: unitintegerfield

/**
 * ConvertUnitIntegerField('uclg')
 */
declare const UNIT_IF_TINTING_COLOR_GREEN: unitintegerfield

/**
 * ConvertUnitIntegerField('uclb')
 */
declare const UNIT_IF_TINTING_COLOR_BLUE: unitintegerfield

/**
 * ConvertUnitIntegerField('ucal')
 */
declare const UNIT_IF_TINTING_COLOR_ALPHA: unitintegerfield

/**
 * ConvertUnitIntegerField('umvt')
 */
declare const UNIT_IF_MOVE_TYPE: unitintegerfield

/**
 * ConvertUnitIntegerField('utar')
 */
declare const UNIT_IF_TARGETED_AS: unitintegerfield

/**
 * ConvertUnitIntegerField('utyp')
 */
declare const UNIT_IF_UNIT_CLASSIFICATION: unitintegerfield

/**
 * ConvertUnitIntegerField('uhrt')
 */
declare const UNIT_IF_HIT_POINTS_REGENERATION_TYPE: unitintegerfield

/**
 * ConvertUnitIntegerField('upar')
 */
declare const UNIT_IF_PLACEMENT_PREVENTED_BY: unitintegerfield

/**
 * ConvertUnitIntegerField('upra')
 */
declare const UNIT_IF_PRIMARY_ATTRIBUTE: unitintegerfield

/**
 * ConvertUnitRealField('ustp')
 */
declare const UNIT_RF_STRENGTH_PER_LEVEL: unitrealfield

/**
 * ConvertUnitRealField('uagp')
 */
declare const UNIT_RF_AGILITY_PER_LEVEL: unitrealfield

/**
 * ConvertUnitRealField('uinp')
 */
declare const UNIT_RF_INTELLIGENCE_PER_LEVEL: unitrealfield

/**
 * ConvertUnitRealField('uhpr')
 */
declare const UNIT_RF_HIT_POINTS_REGENERATION_RATE: unitrealfield

/**
 * ConvertUnitRealField('umpr')
 */
declare const UNIT_RF_MANA_REGENERATION: unitrealfield

/**
 * ConvertUnitRealField('udtm')
 */
declare const UNIT_RF_DEATH_TIME: unitrealfield

/**
 * ConvertUnitRealField('ufyh')
 */
declare const UNIT_RF_FLY_HEIGHT: unitrealfield

/**
 * ConvertUnitRealField('umvr')
 */
declare const UNIT_RF_TURN_RATE: unitrealfield

/**
 * ConvertUnitRealField('uerd')
 */
declare const UNIT_RF_ELEVATION_SAMPLE_RADIUS: unitrealfield

/**
 * ConvertUnitRealField('ufrd')
 */
declare const UNIT_RF_FOG_OF_WAR_SAMPLE_RADIUS: unitrealfield

/**
 * ConvertUnitRealField('umxp')
 */
declare const UNIT_RF_MAXIMUM_PITCH_ANGLE_DEGREES: unitrealfield

/**
 * ConvertUnitRealField('umxr')
 */
declare const UNIT_RF_MAXIMUM_ROLL_ANGLE_DEGREES: unitrealfield

/**
 * ConvertUnitRealField('usca')
 */
declare const UNIT_RF_SCALING_VALUE: unitrealfield

/**
 * ConvertUnitRealField('urun')
 */
declare const UNIT_RF_ANIMATION_RUN_SPEED: unitrealfield

/**
 * ConvertUnitRealField('ussc')
 */
declare const UNIT_RF_SELECTION_SCALE: unitrealfield

/**
 * ConvertUnitRealField('uslz')
 */
declare const UNIT_RF_SELECTION_CIRCLE_HEIGHT: unitrealfield

/**
 * ConvertUnitRealField('ushh')
 */
declare const UNIT_RF_SHADOW_IMAGE_HEIGHT: unitrealfield

/**
 * ConvertUnitRealField('ushw')
 */
declare const UNIT_RF_SHADOW_IMAGE_WIDTH: unitrealfield

/**
 * ConvertUnitRealField('ushx')
 */
declare const UNIT_RF_SHADOW_IMAGE_CENTER_X: unitrealfield

/**
 * ConvertUnitRealField('ushy')
 */
declare const UNIT_RF_SHADOW_IMAGE_CENTER_Y: unitrealfield

/**
 * ConvertUnitRealField('uwal')
 */
declare const UNIT_RF_ANIMATION_WALK_SPEED: unitrealfield

/**
 * ConvertUnitRealField('udfc')
 */
declare const UNIT_RF_DEFENSE: unitrealfield

/**
 * ConvertUnitRealField('usir')
 */
declare const UNIT_RF_SIGHT_RADIUS: unitrealfield

/**
 * ConvertUnitRealField('upri')
 */
declare const UNIT_RF_PRIORITY: unitrealfield

/**
 * ConvertUnitRealField('umvc')
 */
declare const UNIT_RF_SPEED: unitrealfield

/**
 * ConvertUnitRealField('uocc')
 */
declare const UNIT_RF_OCCLUDER_HEIGHT: unitrealfield

/**
 * ConvertUnitRealField('uhpc')
 */
declare const UNIT_RF_HP: unitrealfield

/**
 * ConvertUnitRealField('umpc')
 */
declare const UNIT_RF_MANA: unitrealfield

/**
 * ConvertUnitRealField('uacq')
 */
declare const UNIT_RF_ACQUISITION_RANGE: unitrealfield

/**
 * ConvertUnitRealField('ucbs')
 */
declare const UNIT_RF_CAST_BACK_SWING: unitrealfield

/**
 * ConvertUnitRealField('ucpt')
 */
declare const UNIT_RF_CAST_POINT: unitrealfield

/**
 * ConvertUnitRealField('uamn')
 */
declare const UNIT_RF_MINIMUM_ATTACK_RANGE: unitrealfield

/**
 * ConvertUnitBooleanField('urai')
 */
declare const UNIT_BF_RAISABLE: unitbooleanfield

/**
 * ConvertUnitBooleanField('udec')
 */
declare const UNIT_BF_DECAYABLE: unitbooleanfield

/**
 * ConvertUnitBooleanField('ubdg')
 */
declare const UNIT_BF_IS_A_BUILDING: unitbooleanfield

/**
 * ConvertUnitBooleanField('ulos')
 */
declare const UNIT_BF_USE_EXTENDED_LINE_OF_SIGHT: unitbooleanfield

/**
 * ConvertUnitBooleanField('unbm')
 */
declare const UNIT_BF_NEUTRAL_BUILDING_SHOWS_MINIMAP_ICON: unitbooleanfield

/**
 * ConvertUnitBooleanField('uhhb')
 */
declare const UNIT_BF_HERO_HIDE_HERO_INTERFACE_ICON: unitbooleanfield

/**
 * ConvertUnitBooleanField('uhhm')
 */
declare const UNIT_BF_HERO_HIDE_HERO_MINIMAP_DISPLAY: unitbooleanfield

/**
 * ConvertUnitBooleanField('uhhd')
 */
declare const UNIT_BF_HERO_HIDE_HERO_DEATH_MESSAGE: unitbooleanfield

/**
 * ConvertUnitBooleanField('uhom')
 */
declare const UNIT_BF_HIDE_MINIMAP_DISPLAY: unitbooleanfield

/**
 * ConvertUnitBooleanField('uscb')
 */
declare const UNIT_BF_SCALE_PROJECTILES: unitbooleanfield

/**
 * ConvertUnitBooleanField('usew')
 */
declare const UNIT_BF_SELECTION_CIRCLE_ON_WATER: unitbooleanfield

/**
 * ConvertUnitBooleanField('ushr')
 */
declare const UNIT_BF_HAS_WATER_SHADOW: unitbooleanfield

/**
 * ConvertUnitStringField('unam')
 */
declare const UNIT_SF_NAME: unitstringfield

/**
 * ConvertUnitStringField('upro')
 */
declare const UNIT_SF_PROPER_NAMES: unitstringfield

/**
 * ConvertUnitStringField('uubs')
 */
declare const UNIT_SF_GROUND_TEXTURE: unitstringfield

/**
 * ConvertUnitStringField('ushu')
 */
declare const UNIT_SF_SHADOW_IMAGE_UNIT: unitstringfield

/**
 * ConvertUnitWeaponIntegerField('ua1d')
 */
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_NUMBER_OF_DICE: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ua1b')
 */
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_BASE: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ua1s')
 */
declare const UNIT_WEAPON_IF_ATTACK_DAMAGE_SIDES_PER_DIE: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('utc1')
 */
declare const UNIT_WEAPON_IF_ATTACK_MAXIMUM_NUMBER_OF_TARGETS: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ua1t')
 */
declare const UNIT_WEAPON_IF_ATTACK_ATTACK_TYPE: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ucs1')
 */
declare const UNIT_WEAPON_IF_ATTACK_WEAPON_SOUND: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ua1p')
 */
declare const UNIT_WEAPON_IF_ATTACK_AREA_OF_EFFECT_TARGETS: unitweaponintegerfield

/**
 * ConvertUnitWeaponIntegerField('ua1g')
 */
declare const UNIT_WEAPON_IF_ATTACK_TARGETS_ALLOWED: unitweaponintegerfield

/**
 * ConvertUnitWeaponRealField('ubs1')
 */
declare const UNIT_WEAPON_RF_ATTACK_BACKSWING_POINT: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('udp1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_POINT: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1c')
 */
declare const UNIT_WEAPON_RF_ATTACK_BASE_COOLDOWN: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('udl1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_LOSS_FACTOR: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('uhd1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_MEDIUM: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('uqd1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_FACTOR_SMALL: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('usd1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_DISTANCE: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('usr1')
 */
declare const UNIT_WEAPON_RF_ATTACK_DAMAGE_SPILL_RADIUS: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1z')
 */
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_SPEED: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('uma1')
 */
declare const UNIT_WEAPON_RF_ATTACK_PROJECTILE_ARC: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1f')
 */
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_FULL_DAMAGE: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1h')
 */
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_MEDIUM_DAMAGE: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1q')
 */
declare const UNIT_WEAPON_RF_ATTACK_AREA_OF_EFFECT_SMALL_DAMAGE: unitweaponrealfield

/**
 * ConvertUnitWeaponRealField('ua1r')
 */
declare const UNIT_WEAPON_RF_ATTACK_RANGE: unitweaponrealfield

/**
 * ConvertUnitWeaponBooleanField('uwu1')
 */
declare const UNIT_WEAPON_BF_ATTACK_SHOW_UI: unitweaponbooleanfield

/**
 * ConvertUnitWeaponBooleanField('uaen')
 */
declare const UNIT_WEAPON_BF_ATTACKS_ENABLED: unitweaponbooleanfield

/**
 * ConvertUnitWeaponBooleanField('umh1')
 */
declare const UNIT_WEAPON_BF_ATTACK_PROJECTILE_HOMING_ENABLED: unitweaponbooleanfield

/**
 * ConvertUnitWeaponStringField('ua1m')
 */
declare const UNIT_WEAPON_SF_ATTACK_PROJECTILE_ART: unitweaponstringfield

/**
 * ConvertMoveType(0)
 */
declare const MOVE_TYPE_UNKNOWN: movetype

/**
 * ConvertMoveType(1)
 */
declare const MOVE_TYPE_FOOT: movetype

/**
 * ConvertMoveType(2)
 */
declare const MOVE_TYPE_FLY: movetype

/**
 * ConvertMoveType(4)
 */
declare const MOVE_TYPE_HORSE: movetype

/**
 * ConvertMoveType(8)
 */
declare const MOVE_TYPE_HOVER: movetype

/**
 * ConvertMoveType(16)
 */
declare const MOVE_TYPE_FLOAT: movetype

/**
 * ConvertMoveType(32)
 */
declare const MOVE_TYPE_AMPHIBIOUS: movetype

/**
 * ConvertMoveType(64)
 */
declare const MOVE_TYPE_UNBUILDABLE: movetype

/**
 * ConvertTargetFlag(1)
 */
declare const TARGET_FLAG_NONE: targetflag

/**
 * ConvertTargetFlag(2)
 */
declare const TARGET_FLAG_GROUND: targetflag

/**
 * ConvertTargetFlag(4)
 */
declare const TARGET_FLAG_AIR: targetflag

/**
 * ConvertTargetFlag(8)
 */
declare const TARGET_FLAG_STRUCTURE: targetflag

/**
 * ConvertTargetFlag(16)
 */
declare const TARGET_FLAG_WARD: targetflag

/**
 * ConvertTargetFlag(32)
 */
declare const TARGET_FLAG_ITEM: targetflag

/**
 * ConvertTargetFlag(64)
 */
declare const TARGET_FLAG_TREE: targetflag

/**
 * ConvertTargetFlag(128)
 */
declare const TARGET_FLAG_WALL: targetflag

/**
 * ConvertTargetFlag(256)
 */
declare const TARGET_FLAG_DEBRIS: targetflag

/**
 * ConvertTargetFlag(512)
 */
declare const TARGET_FLAG_DECORATION: targetflag

/**
 * ConvertTargetFlag(1024)
 */
declare const TARGET_FLAG_BRIDGE: targetflag

/**
 * ConvertDefenseType(0)
 */
declare const DEFENSE_TYPE_LIGHT: defensetype

/**
 * ConvertDefenseType(1)
 */
declare const DEFENSE_TYPE_MEDIUM: defensetype

/**
 * ConvertDefenseType(2)
 */
declare const DEFENSE_TYPE_LARGE: defensetype

/**
 * ConvertDefenseType(3)
 */
declare const DEFENSE_TYPE_FORT: defensetype

/**
 * ConvertDefenseType(4)
 */
declare const DEFENSE_TYPE_NORMAL: defensetype

/**
 * ConvertDefenseType(5)
 */
declare const DEFENSE_TYPE_HERO: defensetype

/**
 * ConvertDefenseType(6)
 */
declare const DEFENSE_TYPE_DIVINE: defensetype

/**
 * ConvertDefenseType(7)
 */
declare const DEFENSE_TYPE_NONE: defensetype

/**
 * ConvertHeroAttribute(1)
 */
declare const HERO_ATTRIBUTE_STR: heroattribute

/**
 * ConvertHeroAttribute(2)
 */
declare const HERO_ATTRIBUTE_INT: heroattribute

/**
 * ConvertHeroAttribute(3)
 */
declare const HERO_ATTRIBUTE_AGI: heroattribute

/**
 * ConvertArmorType(0)
 */
declare const ARMOR_TYPE_WHOKNOWS: armortype

/**
 * ConvertArmorType(1)
 */
declare const ARMOR_TYPE_FLESH: armortype

/**
 * ConvertArmorType(2)
 */
declare const ARMOR_TYPE_METAL: armortype

/**
 * ConvertArmorType(3)
 */
declare const ARMOR_TYPE_WOOD: armortype

/**
 * ConvertArmorType(4)
 */
declare const ARMOR_TYPE_ETHREAL: armortype

/**
 * ConvertArmorType(5)
 */
declare const ARMOR_TYPE_STONE: armortype

/**
 * ConvertRegenType(0)
 */
declare const REGENERATION_TYPE_NONE: regentype

/**
 * ConvertRegenType(1)
 */
declare const REGENERATION_TYPE_ALWAYS: regentype

/**
 * ConvertRegenType(2)
 */
declare const REGENERATION_TYPE_BLIGHT: regentype

/**
 * ConvertRegenType(3)
 */
declare const REGENERATION_TYPE_DAY: regentype

/**
 * ConvertRegenType(4)
 */
declare const REGENERATION_TYPE_NIGHT: regentype

/**
 * ConvertUnitCategory(1)
 */
declare const UNIT_CATEGORY_GIANT: unitcategory

/**
 * ConvertUnitCategory(2)
 */
declare const UNIT_CATEGORY_UNDEAD: unitcategory

/**
 * ConvertUnitCategory(4)
 */
declare const UNIT_CATEGORY_SUMMONED: unitcategory

/**
 * ConvertUnitCategory(8)
 */
declare const UNIT_CATEGORY_MECHANICAL: unitcategory

/**
 * ConvertUnitCategory(16)
 */
declare const UNIT_CATEGORY_PEON: unitcategory

/**
 * ConvertUnitCategory(32)
 */
declare const UNIT_CATEGORY_SAPPER: unitcategory

/**
 * ConvertUnitCategory(64)
 */
declare const UNIT_CATEGORY_TOWNHALL: unitcategory

/**
 * ConvertUnitCategory(128)
 */
declare const UNIT_CATEGORY_ANCIENT: unitcategory

/**
 * ConvertUnitCategory(256)
 */
declare const UNIT_CATEGORY_NEUTRAL: unitcategory

/**
 * ConvertUnitCategory(512)
 */
declare const UNIT_CATEGORY_WARD: unitcategory

/**
 * ConvertUnitCategory(1024)
 */
declare const UNIT_CATEGORY_STANDON: unitcategory

/**
 * ConvertUnitCategory(2048)
 */
declare const UNIT_CATEGORY_TAUREN: unitcategory

/**
 * ConvertPathingFlag(2)
 */
declare const PATHING_FLAG_UNWALKABLE: pathingflag

/**
 * ConvertPathingFlag(4)
 */
declare const PATHING_FLAG_UNFLYABLE: pathingflag

/**
 * ConvertPathingFlag(8)
 */
declare const PATHING_FLAG_UNBUILDABLE: pathingflag

/**
 * ConvertPathingFlag(16)
 */
declare const PATHING_FLAG_UNPEONHARVEST: pathingflag

/**
 * ConvertPathingFlag(32)
 */
declare const PATHING_FLAG_BLIGHTED: pathingflag

/**
 * ConvertPathingFlag(64)
 */
declare const PATHING_FLAG_UNFLOATABLE: pathingflag

/**
 * ConvertPathingFlag(128)
 */
declare const PATHING_FLAG_UNAMPHIBIOUS: pathingflag

/**
 * ConvertPathingFlag(256)
 */
declare const PATHING_FLAG_UNITEMPLACABLE: pathingflag

/**
 * @param degrees
 */
declare function Deg2Rad(degrees: real): real;

/**
 * @param radians
 */
declare function Rad2Deg(radians: real): real;

/**
 * @param radians
 */
declare function Sin(radians: real): real;

/**
 * @param radians
 */
declare function Cos(radians: real): real;

/**
 * @param radians
 */
declare function Tan(radians: real): real;

/**
 * @param y
 */
declare function Asin(y: real): real;

/**
 * @param x
 */
declare function Acos(x: real): real;

/**
 * @param x
 */
declare function Atan(x: real): real;

/**
 * @param y
 * @param x
 */
declare function Atan2(y: real, x: real): real;

/**
 * @param x
 */
declare function SquareRoot(x: real): real;

/**
 * @param x
 * @param power
 */
declare function Pow(x: real, power: real): real;

/**
 * @param i
 */
declare function I2R(i: integer): real;

/**
 * @param r
 */
declare function R2I(r: real): integer;

/**
 * @param i
 */
declare function I2S(i: integer): string;

/**
 * @param r
 */
declare function R2S(r: real): string;

/**
 * @param r
 * @param width
 * @param precision
 */
declare function R2SW(r: real, width: integer, precision: integer): string;

/**
 * @param s
 */
declare function S2I(s: string): integer;

/**
 * @param s
 */
declare function S2R(s: string): real;

/**
 * @param h
 */
declare function GetHandleId(h: handle): integer;

/**
 * @param source
 * @param start
 * @param end
 */
declare function SubString(source: string, start: integer, end: integer): string;

/**
 * @param s
 */
declare function StringLength(s: string): integer;

/**
 * @param source
 * @param upper
 */
declare function StringCase(source: string, upper: boolean): string;

/**
 * @param s
 */
declare function StringHash(s: string): integer;

/**
 * @param source
 */
declare function GetLocalizedString(source: string): string;

/**
 * @param source
 */
declare function GetLocalizedHotkey(source: string): integer;

/**
 * @param name
 */
declare function SetMapName(name: string): nothing;

/**
 * @param description
 */
declare function SetMapDescription(description: string): nothing;

/**
 * @param teamcount
 */
declare function SetTeams(teamcount: integer): nothing;

/**
 * @param playercount
 */
declare function SetPlayers(playercount: integer): nothing;

/**
 * @param whichStartLoc
 * @param x
 * @param y
 */
declare function DefineStartLocation(whichStartLoc: integer, x: real, y: real): nothing;

/**
 * @param whichStartLoc
 * @param whichLocation
 */
declare function DefineStartLocationLoc(whichStartLoc: integer, whichLocation: location): nothing;

/**
 * @param whichStartLoc
 * @param prioSlotCount
 */
declare function SetStartLocPrioCount(whichStartLoc: integer, prioSlotCount: integer): nothing;

/**
 * @param whichStartLoc
 * @param prioSlotIndex
 * @param otherStartLocIndex
 * @param priority
 */
declare function SetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer, otherStartLocIndex: integer, priority: startlocprio): nothing;

/**
 * @param whichStartLoc
 * @param prioSlotIndex
 */
declare function GetStartLocPrioSlot(whichStartLoc: integer, prioSlotIndex: integer): integer;

/**
 * @param whichStartLoc
 * @param prioSlotIndex
 */
declare function GetStartLocPrio(whichStartLoc: integer, prioSlotIndex: integer): startlocprio;

/**
 * @param whichGameType
 * @param value
 */
declare function SetGameTypeSupported(whichGameType: gametype, value: boolean): nothing;

/**
 * @param whichMapFlag
 * @param value
 */
declare function SetMapFlag(whichMapFlag: mapflag, value: boolean): nothing;

/**
 * @param whichPlacementType
 */
declare function SetGamePlacement(whichPlacementType: placement): nothing;

/**
 * @param whichspeed
 */
declare function SetGameSpeed(whichspeed: gamespeed): nothing;

/**
 * @param whichdifficulty
 */
declare function SetGameDifficulty(whichdifficulty: gamedifficulty): nothing;

/**
 * @param whichdensity
 */
declare function SetResourceDensity(whichdensity: mapdensity): nothing;

/**
 * @param whichdensity
 */
declare function SetCreatureDensity(whichdensity: mapdensity): nothing;

/**
 */
declare function GetTeams(): integer;

/**
 */
declare function GetPlayers(): integer;

/**
 * @param whichGameType
 */
declare function IsGameTypeSupported(whichGameType: gametype): boolean;

/**
 */
declare function GetGameTypeSelected(): gametype;

/**
 * @param whichMapFlag
 */
declare function IsMapFlagSet(whichMapFlag: mapflag): boolean;

/**
 */
declare function GetGamePlacement(): placement;

/**
 */
declare function GetGameSpeed(): gamespeed;

/**
 */
declare function GetGameDifficulty(): gamedifficulty;

/**
 */
declare function GetResourceDensity(): mapdensity;

/**
 */
declare function GetCreatureDensity(): mapdensity;

/**
 * @param whichStartLocation
 */
declare function GetStartLocationX(whichStartLocation: integer): real;

/**
 * @param whichStartLocation
 */
declare function GetStartLocationY(whichStartLocation: integer): real;

/**
 * @param whichStartLocation
 */
declare function GetStartLocationLoc(whichStartLocation: integer): location;

/**
 * @param whichPlayer
 * @param whichTeam
 */
declare function SetPlayerTeam(whichPlayer: player, whichTeam: integer): nothing;

/**
 * @param whichPlayer
 * @param startLocIndex
 */
declare function SetPlayerStartLocation(whichPlayer: player, startLocIndex: integer): nothing;

/**
 * @param whichPlayer
 * @param startLocIndex
 */
declare function ForcePlayerStartLocation(whichPlayer: player, startLocIndex: integer): nothing;

/**
 * @param whichPlayer
 * @param color
 */
declare function SetPlayerColor(whichPlayer: player, color: playercolor): nothing;

/**
 * @param sourcePlayer
 * @param otherPlayer
 * @param whichAllianceSetting
 * @param value
 */
declare function SetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): nothing;

/**
 * @param sourcePlayer
 * @param otherPlayer
 * @param whichResource
 * @param rate
 */
declare function SetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: integer): nothing;

/**
 * @param whichPlayer
 * @param whichRacePreference
 */
declare function SetPlayerRacePreference(whichPlayer: player, whichRacePreference: racepreference): nothing;

/**
 * @param whichPlayer
 * @param value
 */
declare function SetPlayerRaceSelectable(whichPlayer: player, value: boolean): nothing;

/**
 * @param whichPlayer
 * @param controlType
 */
declare function SetPlayerController(whichPlayer: player, controlType: mapcontrol): nothing;

/**
 * @param whichPlayer
 * @param name
 */
declare function SetPlayerName(whichPlayer: player, name: string): nothing;

/**
 * @param whichPlayer
 * @param flag
 */
declare function SetPlayerOnScoreScreen(whichPlayer: player, flag: boolean): nothing;

/**
 * @param whichPlayer
 */
declare function GetPlayerTeam(whichPlayer: player): integer;

/**
 * @param whichPlayer
 */
declare function GetPlayerStartLocation(whichPlayer: player): integer;

/**
 * @param whichPlayer
 */
declare function GetPlayerColor(whichPlayer: player): playercolor;

/**
 * @param whichPlayer
 */
declare function GetPlayerSelectable(whichPlayer: player): boolean;

/**
 * @param whichPlayer
 */
declare function GetPlayerController(whichPlayer: player): mapcontrol;

/**
 * @param whichPlayer
 */
declare function GetPlayerSlotState(whichPlayer: player): playerslotstate;

/**
 * @param sourcePlayer
 * @param otherPlayer
 * @param whichResource
 */
declare function GetPlayerTaxRate(sourcePlayer: player, otherPlayer: player, whichResource: playerstate): integer;

/**
 * @param whichPlayer
 * @param pref
 */
declare function IsPlayerRacePrefSet(whichPlayer: player, pref: racepreference): boolean;

/**
 * @param whichPlayer
 */
declare function GetPlayerName(whichPlayer: player): string;

/**
 */
declare function CreateTimer(): timer;

/**
 * @param whichTimer
 */
declare function DestroyTimer(whichTimer: timer): nothing;

/**
 * @param whichTimer
 * @param timeout
 * @param periodic
 * @param handlerFunc
 */
declare function TimerStart(whichTimer: timer, timeout: real, periodic: boolean, handlerFunc: code): nothing;

/**
 * @param whichTimer
 */
declare function TimerGetElapsed(whichTimer: timer): real;

/**
 * @param whichTimer
 */
declare function TimerGetRemaining(whichTimer: timer): real;

/**
 * @param whichTimer
 */
declare function TimerGetTimeout(whichTimer: timer): real;

/**
 * @param whichTimer
 */
declare function PauseTimer(whichTimer: timer): nothing;

/**
 * @param whichTimer
 */
declare function ResumeTimer(whichTimer: timer): nothing;

/**
 */
declare function GetExpiredTimer(): timer;

/**
 */
declare function CreateGroup(): group;

/**
 * @param whichGroup
 */
declare function DestroyGroup(whichGroup: group): nothing;

/**
 * @param whichGroup
 * @param whichUnit
 */
declare function GroupAddUnit(whichGroup: group, whichUnit: unit): boolean;

/**
 * @param whichGroup
 * @param whichUnit
 */
declare function GroupRemoveUnit(whichGroup: group, whichUnit: unit): boolean;

/**
 * @param whichGroup
 * @param addGroup
 */
declare function BlzGroupAddGroupFast(whichGroup: group, addGroup: group): integer;

/**
 * @param whichGroup
 * @param removeGroup
 */
declare function BlzGroupRemoveGroupFast(whichGroup: group, removeGroup: group): integer;

/**
 * @param whichGroup
 */
declare function GroupClear(whichGroup: group): nothing;

/**
 * @param whichGroup
 */
declare function BlzGroupGetSize(whichGroup: group): integer;

/**
 * @param whichGroup
 * @param index
 */
declare function BlzGroupUnitAt(whichGroup: group, index: integer): unit;

/**
 * @param whichGroup
 * @param unitname
 * @param filter
 */
declare function GroupEnumUnitsOfType(whichGroup: group, unitname: string, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param whichPlayer
 * @param filter
 */
declare function GroupEnumUnitsOfPlayer(whichGroup: group, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param unitname
 * @param filter
 * @param countLimit
 */
declare function GroupEnumUnitsOfTypeCounted(whichGroup: group, unitname: string, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup
 * @param r
 * @param filter
 */
declare function GroupEnumUnitsInRect(whichGroup: group, r: rect, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param r
 * @param filter
 * @param countLimit
 */
declare function GroupEnumUnitsInRectCounted(whichGroup: group, r: rect, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup
 * @param x
 * @param y
 * @param radius
 * @param filter
 */
declare function GroupEnumUnitsInRange(whichGroup: group, x: real, y: real, radius: real, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param whichLocation
 * @param radius
 * @param filter
 */
declare function GroupEnumUnitsInRangeOfLoc(whichGroup: group, whichLocation: location, radius: real, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param x
 * @param y
 * @param radius
 * @param filter
 * @param countLimit
 */
declare function GroupEnumUnitsInRangeCounted(whichGroup: group, x: real, y: real, radius: real, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup
 * @param whichLocation
 * @param radius
 * @param filter
 * @param countLimit
 */
declare function GroupEnumUnitsInRangeOfLocCounted(whichGroup: group, whichLocation: location, radius: real, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup
 * @param whichPlayer
 * @param filter
 */
declare function GroupEnumUnitsSelected(whichGroup: group, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichGroup
 * @param order
 */
declare function GroupImmediateOrder(whichGroup: group, order: string): boolean;

/**
 * @param whichGroup
 * @param order
 */
declare function GroupImmediateOrderById(whichGroup: group, order: integer): boolean;

/**
 * @param whichGroup
 * @param order
 * @param x
 * @param y
 */
declare function GroupPointOrder(whichGroup: group, order: string, x: real, y: real): boolean;

/**
 * @param whichGroup
 * @param order
 * @param whichLocation
 */
declare function GroupPointOrderLoc(whichGroup: group, order: string, whichLocation: location): boolean;

/**
 * @param whichGroup
 * @param order
 * @param x
 * @param y
 */
declare function GroupPointOrderById(whichGroup: group, order: integer, x: real, y: real): boolean;

/**
 * @param whichGroup
 * @param order
 * @param whichLocation
 */
declare function GroupPointOrderByIdLoc(whichGroup: group, order: integer, whichLocation: location): boolean;

/**
 * @param whichGroup
 * @param order
 * @param targetWidget
 */
declare function GroupTargetOrder(whichGroup: group, order: string, targetWidget: widget): boolean;

/**
 * @param whichGroup
 * @param order
 * @param targetWidget
 */
declare function GroupTargetOrderById(whichGroup: group, order: integer, targetWidget: widget): boolean;

/**
 * @param whichGroup
 * @param callback
 */
declare function ForGroup(whichGroup: group, callback: code): nothing;

/**
 * @param whichGroup
 */
declare function FirstOfGroup(whichGroup: group): unit;

/**
 */
declare function CreateForce(): force;

/**
 * @param whichForce
 */
declare function DestroyForce(whichForce: force): nothing;

/**
 * @param whichForce
 * @param whichPlayer
 */
declare function ForceAddPlayer(whichForce: force, whichPlayer: player): nothing;

/**
 * @param whichForce
 * @param whichPlayer
 */
declare function ForceRemovePlayer(whichForce: force, whichPlayer: player): nothing;

/**
 * @param whichForce
 * @param whichPlayer
 */
declare function BlzForceHasPlayer(whichForce: force, whichPlayer: player): boolean;

/**
 * @param whichForce
 */
declare function ForceClear(whichForce: force): nothing;

/**
 * @param whichForce
 * @param filter
 */
declare function ForceEnumPlayers(whichForce: force, filter: boolexpr): nothing;

/**
 * @param whichForce
 * @param filter
 * @param countLimit
 */
declare function ForceEnumPlayersCounted(whichForce: force, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichForce
 * @param whichPlayer
 * @param filter
 */
declare function ForceEnumAllies(whichForce: force, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichForce
 * @param whichPlayer
 * @param filter
 */
declare function ForceEnumEnemies(whichForce: force, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichForce
 * @param callback
 */
declare function ForForce(whichForce: force, callback: code): nothing;

/**
 * @param minx
 * @param miny
 * @param maxx
 * @param maxy
 */
declare function Rect(minx: real, miny: real, maxx: real, maxy: real): rect;

/**
 * @param min
 * @param max
 */
declare function RectFromLoc(min: location, max: location): rect;

/**
 * @param whichRect
 */
declare function RemoveRect(whichRect: rect): nothing;

/**
 * @param whichRect
 * @param minx
 * @param miny
 * @param maxx
 * @param maxy
 */
declare function SetRect(whichRect: rect, minx: real, miny: real, maxx: real, maxy: real): nothing;

/**
 * @param whichRect
 * @param min
 * @param max
 */
declare function SetRectFromLoc(whichRect: rect, min: location, max: location): nothing;

/**
 * @param whichRect
 * @param newCenterX
 * @param newCenterY
 */
declare function MoveRectTo(whichRect: rect, newCenterX: real, newCenterY: real): nothing;

/**
 * @param whichRect
 * @param newCenterLoc
 */
declare function MoveRectToLoc(whichRect: rect, newCenterLoc: location): nothing;

/**
 * @param whichRect
 */
declare function GetRectCenterX(whichRect: rect): real;

/**
 * @param whichRect
 */
declare function GetRectCenterY(whichRect: rect): real;

/**
 * @param whichRect
 */
declare function GetRectMinX(whichRect: rect): real;

/**
 * @param whichRect
 */
declare function GetRectMinY(whichRect: rect): real;

/**
 * @param whichRect
 */
declare function GetRectMaxX(whichRect: rect): real;

/**
 * @param whichRect
 */
declare function GetRectMaxY(whichRect: rect): real;

/**
 */
declare function CreateRegion(): region;

/**
 * @param whichRegion
 */
declare function RemoveRegion(whichRegion: region): nothing;

/**
 * @param whichRegion
 * @param r
 */
declare function RegionAddRect(whichRegion: region, r: rect): nothing;

/**
 * @param whichRegion
 * @param r
 */
declare function RegionClearRect(whichRegion: region, r: rect): nothing;

/**
 * @param whichRegion
 * @param x
 * @param y
 */
declare function RegionAddCell(whichRegion: region, x: real, y: real): nothing;

/**
 * @param whichRegion
 * @param whichLocation
 */
declare function RegionAddCellAtLoc(whichRegion: region, whichLocation: location): nothing;

/**
 * @param whichRegion
 * @param x
 * @param y
 */
declare function RegionClearCell(whichRegion: region, x: real, y: real): nothing;

/**
 * @param whichRegion
 * @param whichLocation
 */
declare function RegionClearCellAtLoc(whichRegion: region, whichLocation: location): nothing;

/**
 * @param x
 * @param y
 */
declare function Location(x: real, y: real): location;

/**
 * @param whichLocation
 */
declare function RemoveLocation(whichLocation: location): nothing;

/**
 * @param whichLocation
 * @param newX
 * @param newY
 */
declare function MoveLocation(whichLocation: location, newX: real, newY: real): nothing;

/**
 * @param whichLocation
 */
declare function GetLocationX(whichLocation: location): real;

/**
 * @param whichLocation
 */
declare function GetLocationY(whichLocation: location): real;

/**
 * @param whichLocation
 */
declare function GetLocationZ(whichLocation: location): real;

/**
 * @param whichRegion
 * @param whichUnit
 */
declare function IsUnitInRegion(whichRegion: region, whichUnit: unit): boolean;

/**
 * @param whichRegion
 * @param x
 * @param y
 */
declare function IsPointInRegion(whichRegion: region, x: real, y: real): boolean;

/**
 * @param whichRegion
 * @param whichLocation
 */
declare function IsLocationInRegion(whichRegion: region, whichLocation: location): boolean;

/**
 */
declare function GetWorldBounds(): rect;

/**
 */
declare function CreateTrigger(): trigger;

/**
 * @param whichTrigger
 */
declare function DestroyTrigger(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 */
declare function ResetTrigger(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 */
declare function EnableTrigger(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 */
declare function DisableTrigger(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 */
declare function IsTriggerEnabled(whichTrigger: trigger): boolean;

/**
 * @param whichTrigger
 * @param flag
 */
declare function TriggerWaitOnSleeps(whichTrigger: trigger, flag: boolean): nothing;

/**
 * @param whichTrigger
 */
declare function IsTriggerWaitOnSleeps(whichTrigger: trigger): boolean;

/**
 */
declare function GetFilterUnit(): unit;

/**
 */
declare function GetEnumUnit(): unit;

/**
 */
declare function GetFilterDestructable(): destructable;

/**
 */
declare function GetEnumDestructable(): destructable;

/**
 */
declare function GetFilterItem(): item;

/**
 */
declare function GetEnumItem(): item;

/**
 */
declare function GetFilterPlayer(): player;

/**
 */
declare function GetEnumPlayer(): player;

/**
 */
declare function GetTriggeringTrigger(): trigger;

/**
 */
declare function GetTriggerEventId(): eventid;

/**
 * @param whichTrigger
 */
declare function GetTriggerEvalCount(whichTrigger: trigger): integer;

/**
 * @param whichTrigger
 */
declare function GetTriggerExecCount(whichTrigger: trigger): integer;

/**
 * @param funcName
 */
declare function ExecuteFunc(funcName: string): nothing;

/**
 * @param operandA
 * @param operandB
 */
declare function And(operandA: boolexpr, operandB: boolexpr): boolexpr;

/**
 * @param operandA
 * @param operandB
 */
declare function Or(operandA: boolexpr, operandB: boolexpr): boolexpr;

/**
 * @param operand
 */
declare function Not(operand: boolexpr): boolexpr;

/**
 * @param func
 */
declare function Condition(func: code): conditionfunc;

/**
 * @param c
 */
declare function DestroyCondition(c: conditionfunc): nothing;

/**
 * @param func
 */
declare function Filter(func: code): filterfunc;

/**
 * @param f
 */
declare function DestroyFilter(f: filterfunc): nothing;

/**
 * @param e
 */
declare function DestroyBoolExpr(e: boolexpr): nothing;

/**
 * @param whichTrigger
 * @param varName
 * @param opcode
 * @param limitval
 */
declare function TriggerRegisterVariableEvent(whichTrigger: trigger, varName: string, opcode: limitop, limitval: real): event;

/**
 * @param whichTrigger
 * @param timeout
 * @param periodic
 */
declare function TriggerRegisterTimerEvent(whichTrigger: trigger, timeout: real, periodic: boolean): event;

/**
 * @param whichTrigger
 * @param t
 */
declare function TriggerRegisterTimerExpireEvent(whichTrigger: trigger, t: timer): event;

/**
 * @param whichTrigger
 * @param whichState
 * @param opcode
 * @param limitval
 */
declare function TriggerRegisterGameStateEvent(whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: real): event;

/**
 * @param whichTrigger
 * @param whichDialog
 */
declare function TriggerRegisterDialogEvent(whichTrigger: trigger, whichDialog: dialog): event;

/**
 * @param whichTrigger
 * @param whichButton
 */
declare function TriggerRegisterDialogButtonEvent(whichTrigger: trigger, whichButton: button): event;

/**
 */
declare function GetEventGameState(): gamestate;

/**
 * @param whichTrigger
 * @param whichGameEvent
 */
declare function TriggerRegisterGameEvent(whichTrigger: trigger, whichGameEvent: gameevent): event;

/**
 */
declare function GetWinningPlayer(): player;

/**
 * @param whichTrigger
 * @param whichRegion
 * @param filter
 */
declare function TriggerRegisterEnterRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr): event;

/**
 */
declare function GetTriggeringRegion(): region;

/**
 */
declare function GetEnteringUnit(): unit;

/**
 * @param whichTrigger
 * @param whichRegion
 * @param filter
 */
declare function TriggerRegisterLeaveRegion(whichTrigger: trigger, whichRegion: region, filter: boolexpr): event;

/**
 */
declare function GetLeavingUnit(): unit;

/**
 * @param whichTrigger
 * @param t
 */
declare function TriggerRegisterTrackableHitEvent(whichTrigger: trigger, t: trackable): event;

/**
 * @param whichTrigger
 * @param t
 */
declare function TriggerRegisterTrackableTrackEvent(whichTrigger: trigger, t: trackable): event;

/**
 */
declare function GetTriggeringTrackable(): trackable;

/**
 */
declare function GetClickedButton(): button;

/**
 */
declare function GetClickedDialog(): dialog;

/**
 */
declare function GetTournamentFinishSoonTimeRemaining(): real;

/**
 */
declare function GetTournamentFinishNowRule(): integer;

/**
 */
declare function GetTournamentFinishNowPlayer(): player;

/**
 * @param whichPlayer
 */
declare function GetTournamentScore(whichPlayer: player): integer;

/**
 */
declare function GetSaveBasicFilename(): string;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param whichPlayerEvent
 */
declare function TriggerRegisterPlayerEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event;

/**
 */
declare function GetTriggerPlayer(): player;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param whichPlayerUnitEvent
 * @param filter
 */
declare function TriggerRegisterPlayerUnitEvent(whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr): event;

/**
 */
declare function GetLevelingUnit(): unit;

/**
 */
declare function GetLearningUnit(): unit;

/**
 */
declare function GetLearnedSkill(): integer;

/**
 */
declare function GetLearnedSkillLevel(): integer;

/**
 */
declare function GetRevivableUnit(): unit;

/**
 */
declare function GetRevivingUnit(): unit;

/**
 */
declare function GetAttacker(): unit;

/**
 */
declare function GetRescuer(): unit;

/**
 */
declare function GetDyingUnit(): unit;

/**
 */
declare function GetKillingUnit(): unit;

/**
 */
declare function GetDecayingUnit(): unit;

/**
 */
declare function GetConstructingStructure(): unit;

/**
 */
declare function GetCancelledStructure(): unit;

/**
 */
declare function GetConstructedStructure(): unit;

/**
 */
declare function GetResearchingUnit(): unit;

/**
 */
declare function GetResearched(): integer;

/**
 */
declare function GetTrainedUnitType(): integer;

/**
 */
declare function GetTrainedUnit(): unit;

/**
 */
declare function GetDetectedUnit(): unit;

/**
 */
declare function GetSummoningUnit(): unit;

/**
 */
declare function GetSummonedUnit(): unit;

/**
 */
declare function GetTransportUnit(): unit;

/**
 */
declare function GetLoadedUnit(): unit;

/**
 */
declare function GetSellingUnit(): unit;

/**
 */
declare function GetSoldUnit(): unit;

/**
 */
declare function GetBuyingUnit(): unit;

/**
 */
declare function GetSoldItem(): item;

/**
 */
declare function GetChangingUnit(): unit;

/**
 */
declare function GetChangingUnitPrevOwner(): player;

/**
 */
declare function GetManipulatingUnit(): unit;

/**
 */
declare function GetManipulatedItem(): item;

/**
 */
declare function GetOrderedUnit(): unit;

/**
 */
declare function GetIssuedOrderId(): integer;

/**
 */
declare function GetOrderPointX(): real;

/**
 */
declare function GetOrderPointY(): real;

/**
 */
declare function GetOrderPointLoc(): location;

/**
 */
declare function GetOrderTarget(): widget;

/**
 */
declare function GetOrderTargetDestructable(): destructable;

/**
 */
declare function GetOrderTargetItem(): item;

/**
 */
declare function GetOrderTargetUnit(): unit;

/**
 */
declare function GetSpellAbilityUnit(): unit;

/**
 */
declare function GetSpellAbilityId(): integer;

/**
 */
declare function GetSpellAbility(): ability;

/**
 */
declare function GetSpellTargetLoc(): location;

/**
 */
declare function GetSpellTargetX(): real;

/**
 */
declare function GetSpellTargetY(): real;

/**
 */
declare function GetSpellTargetDestructable(): destructable;

/**
 */
declare function GetSpellTargetItem(): item;

/**
 */
declare function GetSpellTargetUnit(): unit;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param whichAlliance
 */
declare function TriggerRegisterPlayerAllianceChange(whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param whichState
 * @param opcode
 * @param limitval
 */
declare function TriggerRegisterPlayerStateEvent(whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: real): event;

/**
 */
declare function GetEventPlayerState(): playerstate;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param chatMessageToDetect
 * @param exactMatchOnly
 */
declare function TriggerRegisterPlayerChatEvent(whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event;

/**
 */
declare function GetEventPlayerChatString(): string;

/**
 */
declare function GetEventPlayerChatStringMatched(): string;

/**
 * @param whichTrigger
 * @param whichWidget
 */
declare function TriggerRegisterDeathEvent(whichTrigger: trigger, whichWidget: widget): event;

/**
 */
declare function GetTriggerUnit(): unit;

/**
 * @param whichTrigger
 * @param whichUnit
 * @param whichState
 * @param opcode
 * @param limitval
 */
declare function TriggerRegisterUnitStateEvent(whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: real): event;

/**
 */
declare function GetEventUnitState(): unitstate;

/**
 * @param whichTrigger
 * @param whichUnit
 * @param whichEvent
 */
declare function TriggerRegisterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event;

/**
 */
declare function GetEventDamage(): real;

/**
 */
declare function GetEventDamageSource(): unit;

/**
 */
declare function GetEventDetectingPlayer(): player;

/**
 * @param whichTrigger
 * @param whichUnit
 * @param whichEvent
 * @param filter
 */
declare function TriggerRegisterFilterUnitEvent(whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr): event;

/**
 */
declare function GetEventTargetUnit(): unit;

/**
 * @param whichTrigger
 * @param whichUnit
 * @param range
 * @param filter
 */
declare function TriggerRegisterUnitInRange(whichTrigger: trigger, whichUnit: unit, range: real, filter: boolexpr): event;

/**
 * @param whichTrigger
 * @param condition
 */
declare function TriggerAddCondition(whichTrigger: trigger, condition: boolexpr): triggercondition;

/**
 * @param whichTrigger
 * @param whichCondition
 */
declare function TriggerRemoveCondition(whichTrigger: trigger, whichCondition: triggercondition): nothing;

/**
 * @param whichTrigger
 */
declare function TriggerClearConditions(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 * @param actionFunc
 */
declare function TriggerAddAction(whichTrigger: trigger, actionFunc: code): triggeraction;

/**
 * @param whichTrigger
 * @param whichAction
 */
declare function TriggerRemoveAction(whichTrigger: trigger, whichAction: triggeraction): nothing;

/**
 * @param whichTrigger
 */
declare function TriggerClearActions(whichTrigger: trigger): nothing;

/**
 * @param timeout
 */
declare function TriggerSleepAction(timeout: real): nothing;

/**
 * @param s
 * @param offset
 */
declare function TriggerWaitForSound(s: sound, offset: real): nothing;

/**
 * @param whichTrigger
 */
declare function TriggerEvaluate(whichTrigger: trigger): boolean;

/**
 * @param whichTrigger
 */
declare function TriggerExecute(whichTrigger: trigger): nothing;

/**
 * @param whichTrigger
 */
declare function TriggerExecuteWait(whichTrigger: trigger): nothing;

/**
 */
declare function TriggerSyncStart(): nothing;

/**
 */
declare function TriggerSyncReady(): nothing;

/**
 * @param whichWidget
 */
declare function GetWidgetLife(whichWidget: widget): real;

/**
 * @param whichWidget
 * @param newLife
 */
declare function SetWidgetLife(whichWidget: widget, newLife: real): nothing;

/**
 * @param whichWidget
 */
declare function GetWidgetX(whichWidget: widget): real;

/**
 * @param whichWidget
 */
declare function GetWidgetY(whichWidget: widget): real;

/**
 */
declare function GetTriggerWidget(): widget;

/**
 * @param objectid
 * @param x
 * @param y
 * @param face
 * @param scale
 * @param variation
 */
declare function CreateDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid
 * @param x
 * @param y
 * @param z
 * @param face
 * @param scale
 * @param variation
 */
declare function CreateDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid
 * @param x
 * @param y
 * @param face
 * @param scale
 * @param variation
 */
declare function CreateDeadDestructable(objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid
 * @param x
 * @param y
 * @param z
 * @param face
 * @param scale
 * @param variation
 */
declare function CreateDeadDestructableZ(objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param d
 */
declare function RemoveDestructable(d: destructable): nothing;

/**
 * @param d
 */
declare function KillDestructable(d: destructable): nothing;

/**
 * @param d
 * @param flag
 */
declare function SetDestructableInvulnerable(d: destructable, flag: boolean): nothing;

/**
 * @param d
 */
declare function IsDestructableInvulnerable(d: destructable): boolean;

/**
 * @param r
 * @param filter
 * @param actionFunc
 */
declare function EnumDestructablesInRect(r: rect, filter: boolexpr, actionFunc: code): nothing;

/**
 * @param d
 */
declare function GetDestructableTypeId(d: destructable): integer;

/**
 * @param d
 */
declare function GetDestructableX(d: destructable): real;

/**
 * @param d
 */
declare function GetDestructableY(d: destructable): real;

/**
 * @param d
 * @param life
 */
declare function SetDestructableLife(d: destructable, life: real): nothing;

/**
 * @param d
 */
declare function GetDestructableLife(d: destructable): real;

/**
 * @param d
 * @param max
 */
declare function SetDestructableMaxLife(d: destructable, max: real): nothing;

/**
 * @param d
 */
declare function GetDestructableMaxLife(d: destructable): real;

/**
 * @param d
 * @param life
 * @param birth
 */
declare function DestructableRestoreLife(d: destructable, life: real, birth: boolean): nothing;

/**
 * @param d
 * @param whichAnimation
 */
declare function QueueDestructableAnimation(d: destructable, whichAnimation: string): nothing;

/**
 * @param d
 * @param whichAnimation
 */
declare function SetDestructableAnimation(d: destructable, whichAnimation: string): nothing;

/**
 * @param d
 * @param speedFactor
 */
declare function SetDestructableAnimationSpeed(d: destructable, speedFactor: real): nothing;

/**
 * @param d
 * @param flag
 */
declare function ShowDestructable(d: destructable, flag: boolean): nothing;

/**
 * @param d
 */
declare function GetDestructableOccluderHeight(d: destructable): real;

/**
 * @param d
 * @param height
 */
declare function SetDestructableOccluderHeight(d: destructable, height: real): nothing;

/**
 * @param d
 */
declare function GetDestructableName(d: destructable): string;

/**
 */
declare function GetTriggerDestructable(): destructable;

/**
 * @param itemid
 * @param x
 * @param y
 */
declare function CreateItem(itemid: integer, x: real, y: real): item;

/**
 * @param whichItem
 */
declare function RemoveItem(whichItem: item): nothing;

/**
 * @param whichItem
 */
declare function GetItemPlayer(whichItem: item): player;

/**
 * @param i
 */
declare function GetItemTypeId(i: item): integer;

/**
 * @param i
 */
declare function GetItemX(i: item): real;

/**
 * @param i
 */
declare function GetItemY(i: item): real;

/**
 * @param i
 * @param x
 * @param y
 */
declare function SetItemPosition(i: item, x: real, y: real): nothing;

/**
 * @param whichItem
 * @param flag
 */
declare function SetItemDropOnDeath(whichItem: item, flag: boolean): nothing;

/**
 * @param i
 * @param flag
 */
declare function SetItemDroppable(i: item, flag: boolean): nothing;

/**
 * @param i
 * @param flag
 */
declare function SetItemPawnable(i: item, flag: boolean): nothing;

/**
 * @param whichItem
 * @param whichPlayer
 * @param changeColor
 */
declare function SetItemPlayer(whichItem: item, whichPlayer: player, changeColor: boolean): nothing;

/**
 * @param whichItem
 * @param flag
 */
declare function SetItemInvulnerable(whichItem: item, flag: boolean): nothing;

/**
 * @param whichItem
 */
declare function IsItemInvulnerable(whichItem: item): boolean;

/**
 * @param whichItem
 * @param show
 */
declare function SetItemVisible(whichItem: item, show: boolean): nothing;

/**
 * @param whichItem
 */
declare function IsItemVisible(whichItem: item): boolean;

/**
 * @param whichItem
 */
declare function IsItemOwned(whichItem: item): boolean;

/**
 * @param whichItem
 */
declare function IsItemPowerup(whichItem: item): boolean;

/**
 * @param whichItem
 */
declare function IsItemSellable(whichItem: item): boolean;

/**
 * @param whichItem
 */
declare function IsItemPawnable(whichItem: item): boolean;

/**
 * @param itemId
 */
declare function IsItemIdPowerup(itemId: integer): boolean;

/**
 * @param itemId
 */
declare function IsItemIdSellable(itemId: integer): boolean;

/**
 * @param itemId
 */
declare function IsItemIdPawnable(itemId: integer): boolean;

/**
 * @param r
 * @param filter
 * @param actionFunc
 */
declare function EnumItemsInRect(r: rect, filter: boolexpr, actionFunc: code): nothing;

/**
 * @param whichItem
 */
declare function GetItemLevel(whichItem: item): integer;

/**
 * @param whichItem
 */
declare function GetItemType(whichItem: item): itemtype;

/**
 * @param whichItem
 * @param unitId
 */
declare function SetItemDropID(whichItem: item, unitId: integer): nothing;

/**
 * @param whichItem
 */
declare function GetItemName(whichItem: item): string;

/**
 * @param whichItem
 */
declare function GetItemCharges(whichItem: item): integer;

/**
 * @param whichItem
 * @param charges
 */
declare function SetItemCharges(whichItem: item, charges: integer): nothing;

/**
 * @param whichItem
 */
declare function GetItemUserData(whichItem: item): integer;

/**
 * @param whichItem
 * @param data
 */
declare function SetItemUserData(whichItem: item, data: integer): nothing;

/**
 * @param id
 * @param unitid
 * @param x
 * @param y
 * @param face
 */
declare function CreateUnit(id: player, unitid: integer, x: real, y: real, face: real): unit;

/**
 * @param whichPlayer
 * @param unitname
 * @param x
 * @param y
 * @param face
 */
declare function CreateUnitByName(whichPlayer: player, unitname: string, x: real, y: real, face: real): unit;

/**
 * @param id
 * @param unitid
 * @param whichLocation
 * @param face
 */
declare function CreateUnitAtLoc(id: player, unitid: integer, whichLocation: location, face: real): unit;

/**
 * @param id
 * @param unitname
 * @param whichLocation
 * @param face
 */
declare function CreateUnitAtLocByName(id: player, unitname: string, whichLocation: location, face: real): unit;

/**
 * @param whichPlayer
 * @param unitid
 * @param x
 * @param y
 * @param face
 */
declare function CreateCorpse(whichPlayer: player, unitid: integer, x: real, y: real, face: real): unit;

/**
 * @param whichUnit
 */
declare function KillUnit(whichUnit: unit): nothing;

/**
 * @param whichUnit
 */
declare function RemoveUnit(whichUnit: unit): nothing;

/**
 * @param whichUnit
 * @param show
 */
declare function ShowUnit(whichUnit: unit, show: boolean): nothing;

/**
 * @param whichUnit
 * @param whichUnitState
 * @param newVal
 */
declare function SetUnitState(whichUnit: unit, whichUnitState: unitstate, newVal: real): nothing;

/**
 * @param whichUnit
 * @param newX
 */
declare function SetUnitX(whichUnit: unit, newX: real): nothing;

/**
 * @param whichUnit
 * @param newY
 */
declare function SetUnitY(whichUnit: unit, newY: real): nothing;

/**
 * @param whichUnit
 * @param newX
 * @param newY
 */
declare function SetUnitPosition(whichUnit: unit, newX: real, newY: real): nothing;

/**
 * @param whichUnit
 * @param whichLocation
 */
declare function SetUnitPositionLoc(whichUnit: unit, whichLocation: location): nothing;

/**
 * @param whichUnit
 * @param facingAngle
 */
declare function SetUnitFacing(whichUnit: unit, facingAngle: real): nothing;

/**
 * @param whichUnit
 * @param facingAngle
 * @param duration
 */
declare function SetUnitFacingTimed(whichUnit: unit, facingAngle: real, duration: real): nothing;

/**
 * @param whichUnit
 * @param newSpeed
 */
declare function SetUnitMoveSpeed(whichUnit: unit, newSpeed: real): nothing;

/**
 * @param whichUnit
 * @param newHeight
 * @param rate
 */
declare function SetUnitFlyHeight(whichUnit: unit, newHeight: real, rate: real): nothing;

/**
 * @param whichUnit
 * @param newTurnSpeed
 */
declare function SetUnitTurnSpeed(whichUnit: unit, newTurnSpeed: real): nothing;

/**
 * @param whichUnit
 * @param newPropWindowAngle
 */
declare function SetUnitPropWindow(whichUnit: unit, newPropWindowAngle: real): nothing;

/**
 * @param whichUnit
 * @param newAcquireRange
 */
declare function SetUnitAcquireRange(whichUnit: unit, newAcquireRange: real): nothing;

/**
 * @param whichUnit
 * @param creepGuard
 */
declare function SetUnitCreepGuard(whichUnit: unit, creepGuard: boolean): nothing;

/**
 * @param whichUnit
 */
declare function GetUnitAcquireRange(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitTurnSpeed(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitPropWindow(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitFlyHeight(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitDefaultAcquireRange(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitDefaultTurnSpeed(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitDefaultPropWindow(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitDefaultFlyHeight(whichUnit: unit): real;

/**
 * @param whichUnit
 * @param whichPlayer
 * @param changeColor
 */
declare function SetUnitOwner(whichUnit: unit, whichPlayer: player, changeColor: boolean): nothing;

/**
 * @param whichUnit
 * @param whichColor
 */
declare function SetUnitColor(whichUnit: unit, whichColor: playercolor): nothing;

/**
 * @param whichUnit
 * @param scaleX
 * @param scaleY
 * @param scaleZ
 */
declare function SetUnitScale(whichUnit: unit, scaleX: real, scaleY: real, scaleZ: real): nothing;

/**
 * @param whichUnit
 * @param timeScale
 */
declare function SetUnitTimeScale(whichUnit: unit, timeScale: real): nothing;

/**
 * @param whichUnit
 * @param blendTime
 */
declare function SetUnitBlendTime(whichUnit: unit, blendTime: real): nothing;

/**
 * @param whichUnit
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetUnitVertexColor(whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichUnit
 * @param whichAnimation
 */
declare function QueueUnitAnimation(whichUnit: unit, whichAnimation: string): nothing;

/**
 * @param whichUnit
 * @param whichAnimation
 */
declare function SetUnitAnimation(whichUnit: unit, whichAnimation: string): nothing;

/**
 * @param whichUnit
 * @param whichAnimation
 */
declare function SetUnitAnimationByIndex(whichUnit: unit, whichAnimation: integer): nothing;

/**
 * @param whichUnit
 * @param whichAnimation
 * @param rarity
 */
declare function SetUnitAnimationWithRarity(whichUnit: unit, whichAnimation: string, rarity: raritycontrol): nothing;

/**
 * @param whichUnit
 * @param animProperties
 * @param add
 */
declare function AddUnitAnimationProperties(whichUnit: unit, animProperties: string, add: boolean): nothing;

/**
 * @param whichUnit
 * @param whichBone
 * @param lookAtTarget
 * @param offsetX
 * @param offsetY
 * @param offsetZ
 */
declare function SetUnitLookAt(whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: real, offsetY: real, offsetZ: real): nothing;

/**
 * @param whichUnit
 */
declare function ResetUnitLookAt(whichUnit: unit): nothing;

/**
 * @param whichUnit
 * @param byWhichPlayer
 * @param flag
 */
declare function SetUnitRescuable(whichUnit: unit, byWhichPlayer: player, flag: boolean): nothing;

/**
 * @param whichUnit
 * @param range
 */
declare function SetUnitRescueRange(whichUnit: unit, range: real): nothing;

/**
 * @param whichHero
 * @param newStr
 * @param permanent
 */
declare function SetHeroStr(whichHero: unit, newStr: integer, permanent: boolean): nothing;

/**
 * @param whichHero
 * @param newAgi
 * @param permanent
 */
declare function SetHeroAgi(whichHero: unit, newAgi: integer, permanent: boolean): nothing;

/**
 * @param whichHero
 * @param newInt
 * @param permanent
 */
declare function SetHeroInt(whichHero: unit, newInt: integer, permanent: boolean): nothing;

/**
 * @param whichHero
 * @param includeBonuses
 */
declare function GetHeroStr(whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero
 * @param includeBonuses
 */
declare function GetHeroAgi(whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero
 * @param includeBonuses
 */
declare function GetHeroInt(whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero
 * @param howManyLevels
 */
declare function UnitStripHeroLevel(whichHero: unit, howManyLevels: integer): boolean;

/**
 * @param whichHero
 */
declare function GetHeroXP(whichHero: unit): integer;

/**
 * @param whichHero
 * @param newXpVal
 * @param showEyeCandy
 */
declare function SetHeroXP(whichHero: unit, newXpVal: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero
 */
declare function GetHeroSkillPoints(whichHero: unit): integer;

/**
 * @param whichHero
 * @param skillPointDelta
 */
declare function UnitModifySkillPoints(whichHero: unit, skillPointDelta: integer): boolean;

/**
 * @param whichHero
 * @param xpToAdd
 * @param showEyeCandy
 */
declare function AddHeroXP(whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero
 * @param level
 * @param showEyeCandy
 */
declare function SetHeroLevel(whichHero: unit, level: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero
 */
declare function GetHeroLevel(whichHero: unit): integer;

/**
 * @param whichUnit
 */
declare function GetUnitLevel(whichUnit: unit): integer;

/**
 * @param whichHero
 */
declare function GetHeroProperName(whichHero: unit): string;

/**
 * @param whichHero
 * @param flag
 */
declare function SuspendHeroXP(whichHero: unit, flag: boolean): nothing;

/**
 * @param whichHero
 */
declare function IsSuspendedXP(whichHero: unit): boolean;

/**
 * @param whichHero
 * @param abilcode
 */
declare function SelectHeroSkill(whichHero: unit, abilcode: integer): nothing;

/**
 * @param whichUnit
 * @param abilcode
 */
declare function GetUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit
 * @param abilcode
 */
declare function DecUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit
 * @param abilcode
 */
declare function IncUnitAbilityLevel(whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit
 * @param abilcode
 * @param level
 */
declare function SetUnitAbilityLevel(whichUnit: unit, abilcode: integer, level: integer): integer;

/**
 * @param whichHero
 * @param x
 * @param y
 * @param doEyecandy
 */
declare function ReviveHero(whichHero: unit, x: real, y: real, doEyecandy: boolean): boolean;

/**
 * @param whichHero
 * @param loc
 * @param doEyecandy
 */
declare function ReviveHeroLoc(whichHero: unit, loc: location, doEyecandy: boolean): boolean;

/**
 * @param whichUnit
 * @param exploded
 */
declare function SetUnitExploded(whichUnit: unit, exploded: boolean): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function SetUnitInvulnerable(whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function PauseUnit(whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichHero
 */
declare function IsUnitPaused(whichHero: unit): boolean;

/**
 * @param whichUnit
 * @param flag
 */
declare function SetUnitPathing(whichUnit: unit, flag: boolean): nothing;

/**
 */
declare function ClearSelection(): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function SelectUnit(whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit
 */
declare function GetUnitPointValue(whichUnit: unit): integer;

/**
 * @param unitType
 */
declare function GetUnitPointValueByType(unitType: integer): integer;

/**
 * @param whichUnit
 * @param whichItem
 */
declare function UnitAddItem(whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit
 * @param itemId
 */
declare function UnitAddItemById(whichUnit: unit, itemId: integer): item;

/**
 * @param whichUnit
 * @param itemId
 * @param itemSlot
 */
declare function UnitAddItemToSlotById(whichUnit: unit, itemId: integer, itemSlot: integer): boolean;

/**
 * @param whichUnit
 * @param whichItem
 */
declare function UnitRemoveItem(whichUnit: unit, whichItem: item): nothing;

/**
 * @param whichUnit
 * @param itemSlot
 */
declare function UnitRemoveItemFromSlot(whichUnit: unit, itemSlot: integer): item;

/**
 * @param whichUnit
 * @param whichItem
 */
declare function UnitHasItem(whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit
 * @param itemSlot
 */
declare function UnitItemInSlot(whichUnit: unit, itemSlot: integer): item;

/**
 * @param whichUnit
 */
declare function UnitInventorySize(whichUnit: unit): integer;

/**
 * @param whichUnit
 * @param whichItem
 * @param x
 * @param y
 */
declare function UnitDropItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean;

/**
 * @param whichUnit
 * @param whichItem
 * @param slot
 */
declare function UnitDropItemSlot(whichUnit: unit, whichItem: item, slot: integer): boolean;

/**
 * @param whichUnit
 * @param whichItem
 * @param target
 */
declare function UnitDropItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * @param whichUnit
 * @param whichItem
 */
declare function UnitUseItem(whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit
 * @param whichItem
 * @param x
 * @param y
 */
declare function UnitUseItemPoint(whichUnit: unit, whichItem: item, x: real, y: real): boolean;

/**
 * @param whichUnit
 * @param whichItem
 * @param target
 */
declare function UnitUseItemTarget(whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * @param whichUnit
 */
declare function GetUnitX(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitY(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitLoc(whichUnit: unit): location;

/**
 * @param whichUnit
 */
declare function GetUnitFacing(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitMoveSpeed(whichUnit: unit): real;

/**
 * @param whichUnit
 */
declare function GetUnitDefaultMoveSpeed(whichUnit: unit): real;

/**
 * @param whichUnit
 * @param whichUnitState
 */
declare function GetUnitState(whichUnit: unit, whichUnitState: unitstate): real;

/**
 * @param whichUnit
 */
declare function GetOwningPlayer(whichUnit: unit): player;

/**
 * @param whichUnit
 */
declare function GetUnitTypeId(whichUnit: unit): integer;

/**
 * @param whichUnit
 */
declare function GetUnitRace(whichUnit: unit): race;

/**
 * @param whichUnit
 */
declare function GetUnitName(whichUnit: unit): string;

/**
 * @param whichUnit
 */
declare function GetUnitFoodUsed(whichUnit: unit): integer;

/**
 * @param whichUnit
 */
declare function GetUnitFoodMade(whichUnit: unit): integer;

/**
 * @param unitId
 */
declare function GetFoodMade(unitId: integer): integer;

/**
 * @param unitId
 */
declare function GetFoodUsed(unitId: integer): integer;

/**
 * @param whichUnit
 * @param useFood
 */
declare function SetUnitUseFood(whichUnit: unit, useFood: boolean): nothing;

/**
 * @param whichUnit
 */
declare function GetUnitRallyPoint(whichUnit: unit): location;

/**
 * @param whichUnit
 */
declare function GetUnitRallyUnit(whichUnit: unit): unit;

/**
 * @param whichUnit
 */
declare function GetUnitRallyDestructable(whichUnit: unit): destructable;

/**
 * @param whichUnit
 * @param whichGroup
 */
declare function IsUnitInGroup(whichUnit: unit, whichGroup: group): boolean;

/**
 * @param whichUnit
 * @param whichForce
 */
declare function IsUnitInForce(whichUnit: unit, whichForce: force): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitOwnedByPlayer(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitAlly(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitEnemy(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitVisible(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitDetected(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitInvisible(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitFogged(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitMasked(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 */
declare function IsUnitSelected(whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit
 * @param whichRace
 */
declare function IsUnitRace(whichUnit: unit, whichRace: race): boolean;

/**
 * @param whichUnit
 * @param whichUnitType
 */
declare function IsUnitType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit
 * @param whichSpecifiedUnit
 */
declare function IsUnit(whichUnit: unit, whichSpecifiedUnit: unit): boolean;

/**
 * @param whichUnit
 * @param otherUnit
 * @param distance
 */
declare function IsUnitInRange(whichUnit: unit, otherUnit: unit, distance: real): boolean;

/**
 * @param whichUnit
 * @param x
 * @param y
 * @param distance
 */
declare function IsUnitInRangeXY(whichUnit: unit, x: real, y: real, distance: real): boolean;

/**
 * @param whichUnit
 * @param whichLocation
 * @param distance
 */
declare function IsUnitInRangeLoc(whichUnit: unit, whichLocation: location, distance: real): boolean;

/**
 * @param whichUnit
 */
declare function IsUnitHidden(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function IsUnitIllusion(whichUnit: unit): boolean;

/**
 * @param whichUnit
 * @param whichTransport
 */
declare function IsUnitInTransport(whichUnit: unit, whichTransport: unit): boolean;

/**
 * @param whichUnit
 */
declare function IsUnitLoaded(whichUnit: unit): boolean;

/**
 * @param unitId
 */
declare function IsHeroUnitId(unitId: integer): boolean;

/**
 * @param unitId
 * @param whichUnitType
 */
declare function IsUnitIdType(unitId: integer, whichUnitType: unittype): boolean;

/**
 * @param whichUnit
 * @param whichPlayer
 * @param share
 */
declare function UnitShareVision(whichUnit: unit, whichPlayer: player, share: boolean): nothing;

/**
 * @param whichUnit
 * @param suspend
 */
declare function UnitSuspendDecay(whichUnit: unit, suspend: boolean): nothing;

/**
 * @param whichUnit
 * @param whichUnitType
 */
declare function UnitAddType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit
 * @param whichUnitType
 */
declare function UnitRemoveType(whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit
 * @param abilityId
 */
declare function UnitAddAbility(whichUnit: unit, abilityId: integer): boolean;

/**
 * @param whichUnit
 * @param abilityId
 */
declare function UnitRemoveAbility(whichUnit: unit, abilityId: integer): boolean;

/**
 * @param whichUnit
 * @param permanent
 * @param abilityId
 */
declare function UnitMakeAbilityPermanent(whichUnit: unit, permanent: boolean, abilityId: integer): boolean;

/**
 * @param whichUnit
 * @param removePositive
 * @param removeNegative
 */
declare function UnitRemoveBuffs(whichUnit: unit, removePositive: boolean, removeNegative: boolean): nothing;

/**
 * @param whichUnit
 * @param removePositive
 * @param removeNegative
 * @param magic
 * @param physical
 * @param timedLife
 * @param aura
 * @param autoDispel
 */
declare function UnitRemoveBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): nothing;

/**
 * @param whichUnit
 * @param removePositive
 * @param removeNegative
 * @param magic
 * @param physical
 * @param timedLife
 * @param aura
 * @param autoDispel
 */
declare function UnitHasBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;

/**
 * @param whichUnit
 * @param removePositive
 * @param removeNegative
 * @param magic
 * @param physical
 * @param timedLife
 * @param aura
 * @param autoDispel
 */
declare function UnitCountBuffsEx(whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): integer;

/**
 * @param whichUnit
 * @param add
 */
declare function UnitAddSleep(whichUnit: unit, add: boolean): nothing;

/**
 * @param whichUnit
 */
declare function UnitCanSleep(whichUnit: unit): boolean;

/**
 * @param whichUnit
 * @param add
 */
declare function UnitAddSleepPerm(whichUnit: unit, add: boolean): nothing;

/**
 * @param whichUnit
 */
declare function UnitCanSleepPerm(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function UnitIsSleeping(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function UnitWakeUp(whichUnit: unit): nothing;

/**
 * @param whichUnit
 * @param buffId
 * @param duration
 */
declare function UnitApplyTimedLife(whichUnit: unit, buffId: integer, duration: real): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function UnitIgnoreAlarm(whichUnit: unit, flag: boolean): boolean;

/**
 * @param whichUnit
 */
declare function UnitIgnoreAlarmToggled(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function UnitResetCooldown(whichUnit: unit): nothing;

/**
 * @param whichUnit
 * @param constructionPercentage
 */
declare function UnitSetConstructionProgress(whichUnit: unit, constructionPercentage: integer): nothing;

/**
 * @param whichUnit
 * @param upgradePercentage
 */
declare function UnitSetUpgradeProgress(whichUnit: unit, upgradePercentage: integer): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function UnitPauseTimedLife(whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function UnitSetUsesAltIcon(whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit
 * @param delay
 * @param radius
 * @param x
 * @param y
 * @param amount
 * @param attack
 * @param ranged
 * @param attackType
 * @param damageType
 * @param weaponType
 */
declare function UnitDamagePoint(whichUnit: unit, delay: real, radius: real, x: real, y: real, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * @param whichUnit
 * @param target
 * @param amount
 * @param attack
 * @param ranged
 * @param attackType
 * @param damageType
 * @param weaponType
 */
declare function UnitDamageTarget(whichUnit: unit, target: widget, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * @param whichUnit
 * @param order
 */
declare function IssueImmediateOrder(whichUnit: unit, order: string): boolean;

/**
 * @param whichUnit
 * @param order
 */
declare function IssueImmediateOrderById(whichUnit: unit, order: integer): boolean;

/**
 * @param whichUnit
 * @param order
 * @param x
 * @param y
 */
declare function IssuePointOrder(whichUnit: unit, order: string, x: real, y: real): boolean;

/**
 * @param whichUnit
 * @param order
 * @param whichLocation
 */
declare function IssuePointOrderLoc(whichUnit: unit, order: string, whichLocation: location): boolean;

/**
 * @param whichUnit
 * @param order
 * @param x
 * @param y
 */
declare function IssuePointOrderById(whichUnit: unit, order: integer, x: real, y: real): boolean;

/**
 * @param whichUnit
 * @param order
 * @param whichLocation
 */
declare function IssuePointOrderByIdLoc(whichUnit: unit, order: integer, whichLocation: location): boolean;

/**
 * @param whichUnit
 * @param order
 * @param targetWidget
 */
declare function IssueTargetOrder(whichUnit: unit, order: string, targetWidget: widget): boolean;

/**
 * @param whichUnit
 * @param order
 * @param targetWidget
 */
declare function IssueTargetOrderById(whichUnit: unit, order: integer, targetWidget: widget): boolean;

/**
 * @param whichUnit
 * @param order
 * @param x
 * @param y
 * @param instantTargetWidget
 */
declare function IssueInstantPointOrder(whichUnit: unit, order: string, x: real, y: real, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit
 * @param order
 * @param x
 * @param y
 * @param instantTargetWidget
 */
declare function IssueInstantPointOrderById(whichUnit: unit, order: integer, x: real, y: real, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit
 * @param order
 * @param targetWidget
 * @param instantTargetWidget
 */
declare function IssueInstantTargetOrder(whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit
 * @param order
 * @param targetWidget
 * @param instantTargetWidget
 */
declare function IssueInstantTargetOrderById(whichUnit: unit, order: integer, targetWidget: widget, instantTargetWidget: widget): boolean;

/**
 * @param whichPeon
 * @param unitToBuild
 * @param x
 * @param y
 */
declare function IssueBuildOrder(whichPeon: unit, unitToBuild: string, x: real, y: real): boolean;

/**
 * @param whichPeon
 * @param unitId
 * @param x
 * @param y
 */
declare function IssueBuildOrderById(whichPeon: unit, unitId: integer, x: real, y: real): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitToBuild
 */
declare function IssueNeutralImmediateOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitId
 */
declare function IssueNeutralImmediateOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitToBuild
 * @param x
 * @param y
 */
declare function IssueNeutralPointOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: real, y: real): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitId
 * @param x
 * @param y
 */
declare function IssueNeutralPointOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, x: real, y: real): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitToBuild
 * @param target
 */
declare function IssueNeutralTargetOrder(forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean;

/**
 * @param forWhichPlayer
 * @param neutralStructure
 * @param unitId
 * @param target
 */
declare function IssueNeutralTargetOrderById(forWhichPlayer: player, neutralStructure: unit, unitId: integer, target: widget): boolean;

/**
 * @param whichUnit
 */
declare function GetUnitCurrentOrder(whichUnit: unit): integer;

/**
 * @param whichUnit
 * @param amount
 */
declare function SetResourceAmount(whichUnit: unit, amount: integer): nothing;

/**
 * @param whichUnit
 * @param amount
 */
declare function AddResourceAmount(whichUnit: unit, amount: integer): nothing;

/**
 * @param whichUnit
 */
declare function GetResourceAmount(whichUnit: unit): integer;

/**
 * @param waygate
 */
declare function WaygateGetDestinationX(waygate: unit): real;

/**
 * @param waygate
 */
declare function WaygateGetDestinationY(waygate: unit): real;

/**
 * @param waygate
 * @param x
 * @param y
 */
declare function WaygateSetDestination(waygate: unit, x: real, y: real): nothing;

/**
 * @param waygate
 * @param activate
 */
declare function WaygateActivate(waygate: unit, activate: boolean): nothing;

/**
 * @param waygate
 */
declare function WaygateIsActive(waygate: unit): boolean;

/**
 * @param itemId
 * @param currentStock
 * @param stockMax
 */
declare function AddItemToAllStock(itemId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param whichUnit
 * @param itemId
 * @param currentStock
 * @param stockMax
 */
declare function AddItemToStock(whichUnit: unit, itemId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param unitId
 * @param currentStock
 * @param stockMax
 */
declare function AddUnitToAllStock(unitId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param whichUnit
 * @param unitId
 * @param currentStock
 * @param stockMax
 */
declare function AddUnitToStock(whichUnit: unit, unitId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param itemId
 */
declare function RemoveItemFromAllStock(itemId: integer): nothing;

/**
 * @param whichUnit
 * @param itemId
 */
declare function RemoveItemFromStock(whichUnit: unit, itemId: integer): nothing;

/**
 * @param unitId
 */
declare function RemoveUnitFromAllStock(unitId: integer): nothing;

/**
 * @param whichUnit
 * @param unitId
 */
declare function RemoveUnitFromStock(whichUnit: unit, unitId: integer): nothing;

/**
 * @param slots
 */
declare function SetAllItemTypeSlots(slots: integer): nothing;

/**
 * @param slots
 */
declare function SetAllUnitTypeSlots(slots: integer): nothing;

/**
 * @param whichUnit
 * @param slots
 */
declare function SetItemTypeSlots(whichUnit: unit, slots: integer): nothing;

/**
 * @param whichUnit
 * @param slots
 */
declare function SetUnitTypeSlots(whichUnit: unit, slots: integer): nothing;

/**
 * @param whichUnit
 */
declare function GetUnitUserData(whichUnit: unit): integer;

/**
 * @param whichUnit
 * @param data
 */
declare function SetUnitUserData(whichUnit: unit, data: integer): nothing;

/**
 * @param number
 */
declare function Player(number: integer): player;

/**
 */
declare function GetLocalPlayer(): player;

/**
 * @param whichPlayer
 * @param otherPlayer
 */
declare function IsPlayerAlly(whichPlayer: player, otherPlayer: player): boolean;

/**
 * @param whichPlayer
 * @param otherPlayer
 */
declare function IsPlayerEnemy(whichPlayer: player, otherPlayer: player): boolean;

/**
 * @param whichPlayer
 * @param whichForce
 */
declare function IsPlayerInForce(whichPlayer: player, whichForce: force): boolean;

/**
 * @param whichPlayer
 */
declare function IsPlayerObserver(whichPlayer: player): boolean;

/**
 * @param x
 * @param y
 * @param whichPlayer
 */
declare function IsVisibleToPlayer(x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation
 * @param whichPlayer
 */
declare function IsLocationVisibleToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * @param x
 * @param y
 * @param whichPlayer
 */
declare function IsFoggedToPlayer(x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation
 * @param whichPlayer
 */
declare function IsLocationFoggedToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * @param x
 * @param y
 * @param whichPlayer
 */
declare function IsMaskedToPlayer(x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation
 * @param whichPlayer
 */
declare function IsLocationMaskedToPlayer(whichLocation: location, whichPlayer: player): boolean;

/**
 * @param whichPlayer
 */
declare function GetPlayerRace(whichPlayer: player): race;

/**
 * @param whichPlayer
 */
declare function GetPlayerId(whichPlayer: player): integer;

/**
 * @param whichPlayer
 * @param includeIncomplete
 */
declare function GetPlayerUnitCount(whichPlayer: player, includeIncomplete: boolean): integer;

/**
 * @param whichPlayer
 * @param unitName
 * @param includeIncomplete
 * @param includeUpgrades
 */
declare function GetPlayerTypedUnitCount(whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): integer;

/**
 * @param whichPlayer
 * @param includeIncomplete
 */
declare function GetPlayerStructureCount(whichPlayer: player, includeIncomplete: boolean): integer;

/**
 * @param whichPlayer
 * @param whichPlayerState
 */
declare function GetPlayerState(whichPlayer: player, whichPlayerState: playerstate): integer;

/**
 * @param whichPlayer
 * @param whichPlayerScore
 */
declare function GetPlayerScore(whichPlayer: player, whichPlayerScore: playerscore): integer;

/**
 * @param sourcePlayer
 * @param otherPlayer
 * @param whichAllianceSetting
 */
declare function GetPlayerAlliance(sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;

/**
 * @param whichPlayer
 */
declare function GetPlayerHandicap(whichPlayer: player): real;

/**
 * @param whichPlayer
 */
declare function GetPlayerHandicapXP(whichPlayer: player): real;

/**
 * @param whichPlayer
 * @param handicap
 */
declare function SetPlayerHandicap(whichPlayer: player, handicap: real): nothing;

/**
 * @param whichPlayer
 * @param handicap
 */
declare function SetPlayerHandicapXP(whichPlayer: player, handicap: real): nothing;

/**
 * @param whichPlayer
 * @param techid
 * @param maximum
 */
declare function SetPlayerTechMaxAllowed(whichPlayer: player, techid: integer, maximum: integer): nothing;

/**
 * @param whichPlayer
 * @param techid
 */
declare function GetPlayerTechMaxAllowed(whichPlayer: player, techid: integer): integer;

/**
 * @param whichPlayer
 * @param techid
 * @param levels
 */
declare function AddPlayerTechResearched(whichPlayer: player, techid: integer, levels: integer): nothing;

/**
 * @param whichPlayer
 * @param techid
 * @param setToLevel
 */
declare function SetPlayerTechResearched(whichPlayer: player, techid: integer, setToLevel: integer): nothing;

/**
 * @param whichPlayer
 * @param techid
 * @param specificonly
 */
declare function GetPlayerTechResearched(whichPlayer: player, techid: integer, specificonly: boolean): boolean;

/**
 * @param whichPlayer
 * @param techid
 * @param specificonly
 */
declare function GetPlayerTechCount(whichPlayer: player, techid: integer, specificonly: boolean): integer;

/**
 * @param whichPlayer
 * @param newOwner
 */
declare function SetPlayerUnitsOwner(whichPlayer: player, newOwner: integer): nothing;

/**
 * @param whichPlayer
 * @param toWhichPlayers
 * @param flag
 */
declare function CripplePlayer(whichPlayer: player, toWhichPlayers: force, flag: boolean): nothing;

/**
 * @param whichPlayer
 * @param abilid
 * @param avail
 */
declare function SetPlayerAbilityAvailable(whichPlayer: player, abilid: integer, avail: boolean): nothing;

/**
 * @param whichPlayer
 * @param whichPlayerState
 * @param value
 */
declare function SetPlayerState(whichPlayer: player, whichPlayerState: playerstate, value: integer): nothing;

/**
 * @param whichPlayer
 * @param gameResult
 */
declare function RemovePlayer(whichPlayer: player, gameResult: playergameresult): nothing;

/**
 * @param whichPlayer
 */
declare function CachePlayerHeroData(whichPlayer: player): nothing;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param where
 * @param useSharedVision
 */
declare function SetFogStateRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): nothing;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param centerx
 * @param centerY
 * @param radius
 * @param useSharedVision
 */
declare function SetFogStateRadius(forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean): nothing;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param center
 * @param radius
 * @param useSharedVision
 */
declare function SetFogStateRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean): nothing;

/**
 * @param enable
 */
declare function FogMaskEnable(enable: boolean): nothing;

/**
 */
declare function IsFogMaskEnabled(): boolean;

/**
 * @param enable
 */
declare function FogEnable(enable: boolean): nothing;

/**
 */
declare function IsFogEnabled(): boolean;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param where
 * @param useSharedVision
 * @param afterUnits
 */
declare function CreateFogModifierRect(forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param centerx
 * @param centerY
 * @param radius
 * @param useSharedVision
 * @param afterUnits
 */
declare function CreateFogModifierRadius(forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param forWhichPlayer
 * @param whichState
 * @param center
 * @param radius
 * @param useSharedVision
 * @param afterUnits
 */
declare function CreateFogModifierRadiusLoc(forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param whichFogModifier
 */
declare function DestroyFogModifier(whichFogModifier: fogmodifier): nothing;

/**
 * @param whichFogModifier
 */
declare function FogModifierStart(whichFogModifier: fogmodifier): nothing;

/**
 * @param whichFogModifier
 */
declare function FogModifierStop(whichFogModifier: fogmodifier): nothing;

/**
 */
declare function VersionGet(): version;

/**
 * @param whichVersion
 */
declare function VersionCompatible(whichVersion: version): boolean;

/**
 * @param whichVersion
 */
declare function VersionSupported(whichVersion: version): boolean;

/**
 * @param doScoreScreen
 */
declare function EndGame(doScoreScreen: boolean): nothing;

/**
 * @param newLevel
 * @param doScoreScreen
 */
declare function ChangeLevel(newLevel: string, doScoreScreen: boolean): nothing;

/**
 * @param doScoreScreen
 */
declare function RestartGame(doScoreScreen: boolean): nothing;

/**
 */
declare function ReloadGame(): nothing;

/**
 * @param r
 */
declare function SetCampaignMenuRace(r: race): nothing;

/**
 * @param campaignIndex
 */
declare function SetCampaignMenuRaceEx(campaignIndex: integer): nothing;

/**
 */
declare function ForceCampaignSelectScreen(): nothing;

/**
 * @param saveFileName
 * @param doScoreScreen
 */
declare function LoadGame(saveFileName: string, doScoreScreen: boolean): nothing;

/**
 * @param saveFileName
 */
declare function SaveGame(saveFileName: string): nothing;

/**
 * @param sourceDirName
 * @param destDirName
 */
declare function RenameSaveDirectory(sourceDirName: string, destDirName: string): boolean;

/**
 * @param sourceDirName
 */
declare function RemoveSaveDirectory(sourceDirName: string): boolean;

/**
 * @param sourceSaveName
 * @param destSaveName
 */
declare function CopySaveGame(sourceSaveName: string, destSaveName: string): boolean;

/**
 * @param saveName
 */
declare function SaveGameExists(saveName: string): boolean;

/**
 */
declare function SyncSelections(): nothing;

/**
 * @param whichFloatGameState
 * @param value
 */
declare function SetFloatGameState(whichFloatGameState: fgamestate, value: real): nothing;

/**
 * @param whichFloatGameState
 */
declare function GetFloatGameState(whichFloatGameState: fgamestate): real;

/**
 * @param whichIntegerGameState
 * @param value
 */
declare function SetIntegerGameState(whichIntegerGameState: igamestate, value: integer): nothing;

/**
 * @param whichIntegerGameState
 */
declare function GetIntegerGameState(whichIntegerGameState: igamestate): integer;

/**
 * @param cleared
 */
declare function SetTutorialCleared(cleared: boolean): nothing;

/**
 * @param campaignNumber
 * @param missionNumber
 * @param available
 */
declare function SetMissionAvailable(campaignNumber: integer, missionNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber
 * @param available
 */
declare function SetCampaignAvailable(campaignNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber
 * @param available
 */
declare function SetOpCinematicAvailable(campaignNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber
 * @param available
 */
declare function SetEdCinematicAvailable(campaignNumber: integer, available: boolean): nothing;

/**
 */
declare function GetDefaultDifficulty(): gamedifficulty;

/**
 * @param g
 */
declare function SetDefaultDifficulty(g: gamedifficulty): nothing;

/**
 * @param whichButton
 * @param visible
 */
declare function SetCustomCampaignButtonVisible(whichButton: integer, visible: boolean): nothing;

/**
 * @param whichButton
 */
declare function GetCustomCampaignButtonVisible(whichButton: integer): boolean;

/**
 */
declare function DoNotSaveReplay(): nothing;

/**
 */
declare function DialogCreate(): dialog;

/**
 * @param whichDialog
 */
declare function DialogDestroy(whichDialog: dialog): nothing;

/**
 * @param whichDialog
 */
declare function DialogClear(whichDialog: dialog): nothing;

/**
 * @param whichDialog
 * @param messageText
 */
declare function DialogSetMessage(whichDialog: dialog, messageText: string): nothing;

/**
 * @param whichDialog
 * @param buttonText
 * @param hotkey
 */
declare function DialogAddButton(whichDialog: dialog, buttonText: string, hotkey: integer): button;

/**
 * @param whichDialog
 * @param doScoreScreen
 * @param buttonText
 * @param hotkey
 */
declare function DialogAddQuitButton(whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: integer): button;

/**
 * @param whichPlayer
 * @param whichDialog
 * @param flag
 */
declare function DialogDisplay(whichPlayer: player, whichDialog: dialog, flag: boolean): nothing;

/**
 */
declare function ReloadGameCachesFromDisk(): boolean;

/**
 * @param campaignFile
 */
declare function InitGameCache(campaignFile: string): gamecache;

/**
 * @param whichCache
 */
declare function SaveGameCache(whichCache: gamecache): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param value
 */
declare function StoreInteger(cache: gamecache, missionKey: string, key: string, value: integer): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param value
 */
declare function StoreReal(cache: gamecache, missionKey: string, key: string, value: real): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param value
 */
declare function StoreBoolean(cache: gamecache, missionKey: string, key: string, value: boolean): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param whichUnit
 */
declare function StoreUnit(cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param value
 */
declare function StoreString(cache: gamecache, missionKey: string, key: string, value: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function SyncStoredInteger(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function SyncStoredReal(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function SyncStoredBoolean(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function SyncStoredUnit(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function SyncStoredString(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function HaveStoredInteger(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function HaveStoredReal(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function HaveStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function HaveStoredUnit(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function HaveStoredString(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 */
declare function FlushGameCache(cache: gamecache): nothing;

/**
 * @param cache
 * @param missionKey
 */
declare function FlushStoredMission(cache: gamecache, missionKey: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function FlushStoredInteger(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function FlushStoredReal(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function FlushStoredBoolean(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function FlushStoredUnit(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function FlushStoredString(cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function GetStoredInteger(cache: gamecache, missionKey: string, key: string): integer;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function GetStoredReal(cache: gamecache, missionKey: string, key: string): real;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function GetStoredBoolean(cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache
 * @param missionKey
 * @param key
 */
declare function GetStoredString(cache: gamecache, missionKey: string, key: string): string;

/**
 * @param cache
 * @param missionKey
 * @param key
 * @param forWhichPlayer
 * @param x
 * @param y
 * @param facing
 */
declare function RestoreUnit(cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: real, y: real, facing: real): unit;

/**
 */
declare function InitHashtable(): hashtable;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param value
 */
declare function SaveInteger(table: hashtable, parentKey: integer, childKey: integer, value: integer): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param value
 */
declare function SaveReal(table: hashtable, parentKey: integer, childKey: integer, value: real): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param value
 */
declare function SaveBoolean(table: hashtable, parentKey: integer, childKey: integer, value: boolean): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param value
 */
declare function SaveStr(table: hashtable, parentKey: integer, childKey: integer, value: string): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichPlayer
 */
declare function SavePlayerHandle(table: hashtable, parentKey: integer, childKey: integer, whichPlayer: player): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichWidget
 */
declare function SaveWidgetHandle(table: hashtable, parentKey: integer, childKey: integer, whichWidget: widget): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichDestructable
 */
declare function SaveDestructableHandle(table: hashtable, parentKey: integer, childKey: integer, whichDestructable: destructable): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichItem
 */
declare function SaveItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichItem: item): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichUnit
 */
declare function SaveUnitHandle(table: hashtable, parentKey: integer, childKey: integer, whichUnit: unit): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichAbility
 */
declare function SaveAbilityHandle(table: hashtable, parentKey: integer, childKey: integer, whichAbility: ability): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTimer
 */
declare function SaveTimerHandle(table: hashtable, parentKey: integer, childKey: integer, whichTimer: timer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTrigger
 */
declare function SaveTriggerHandle(table: hashtable, parentKey: integer, childKey: integer, whichTrigger: trigger): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTriggercondition
 */
declare function SaveTriggerConditionHandle(table: hashtable, parentKey: integer, childKey: integer, whichTriggercondition: triggercondition): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTriggeraction
 */
declare function SaveTriggerActionHandle(table: hashtable, parentKey: integer, childKey: integer, whichTriggeraction: triggeraction): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichEvent
 */
declare function SaveTriggerEventHandle(table: hashtable, parentKey: integer, childKey: integer, whichEvent: event): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichForce
 */
declare function SaveForceHandle(table: hashtable, parentKey: integer, childKey: integer, whichForce: force): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichGroup
 */
declare function SaveGroupHandle(table: hashtable, parentKey: integer, childKey: integer, whichGroup: group): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichLocation
 */
declare function SaveLocationHandle(table: hashtable, parentKey: integer, childKey: integer, whichLocation: location): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichRect
 */
declare function SaveRectHandle(table: hashtable, parentKey: integer, childKey: integer, whichRect: rect): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichBoolexpr
 */
declare function SaveBooleanExprHandle(table: hashtable, parentKey: integer, childKey: integer, whichBoolexpr: boolexpr): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichSound
 */
declare function SaveSoundHandle(table: hashtable, parentKey: integer, childKey: integer, whichSound: sound): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichEffect
 */
declare function SaveEffectHandle(table: hashtable, parentKey: integer, childKey: integer, whichEffect: effect): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichUnitpool
 */
declare function SaveUnitPoolHandle(table: hashtable, parentKey: integer, childKey: integer, whichUnitpool: unitpool): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichItempool
 */
declare function SaveItemPoolHandle(table: hashtable, parentKey: integer, childKey: integer, whichItempool: itempool): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichQuest
 */
declare function SaveQuestHandle(table: hashtable, parentKey: integer, childKey: integer, whichQuest: quest): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichQuestitem
 */
declare function SaveQuestItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichQuestitem: questitem): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichDefeatcondition
 */
declare function SaveDefeatConditionHandle(table: hashtable, parentKey: integer, childKey: integer, whichDefeatcondition: defeatcondition): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTimerdialog
 */
declare function SaveTimerDialogHandle(table: hashtable, parentKey: integer, childKey: integer, whichTimerdialog: timerdialog): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichLeaderboard
 */
declare function SaveLeaderboardHandle(table: hashtable, parentKey: integer, childKey: integer, whichLeaderboard: leaderboard): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichMultiboard
 */
declare function SaveMultiboardHandle(table: hashtable, parentKey: integer, childKey: integer, whichMultiboard: multiboard): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichMultiboarditem
 */
declare function SaveMultiboardItemHandle(table: hashtable, parentKey: integer, childKey: integer, whichMultiboarditem: multiboarditem): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTrackable
 */
declare function SaveTrackableHandle(table: hashtable, parentKey: integer, childKey: integer, whichTrackable: trackable): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichDialog
 */
declare function SaveDialogHandle(table: hashtable, parentKey: integer, childKey: integer, whichDialog: dialog): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichButton
 */
declare function SaveButtonHandle(table: hashtable, parentKey: integer, childKey: integer, whichButton: button): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichTexttag
 */
declare function SaveTextTagHandle(table: hashtable, parentKey: integer, childKey: integer, whichTexttag: texttag): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichLightning
 */
declare function SaveLightningHandle(table: hashtable, parentKey: integer, childKey: integer, whichLightning: lightning): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichImage
 */
declare function SaveImageHandle(table: hashtable, parentKey: integer, childKey: integer, whichImage: image): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichUbersplat
 */
declare function SaveUbersplatHandle(table: hashtable, parentKey: integer, childKey: integer, whichUbersplat: ubersplat): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichRegion
 */
declare function SaveRegionHandle(table: hashtable, parentKey: integer, childKey: integer, whichRegion: region): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichFogState
 */
declare function SaveFogStateHandle(table: hashtable, parentKey: integer, childKey: integer, whichFogState: fogstate): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichFogModifier
 */
declare function SaveFogModifierHandle(table: hashtable, parentKey: integer, childKey: integer, whichFogModifier: fogmodifier): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichAgent
 */
declare function SaveAgentHandle(table: hashtable, parentKey: integer, childKey: integer, whichAgent: agent): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichHashtable
 */
declare function SaveHashtableHandle(table: hashtable, parentKey: integer, childKey: integer, whichHashtable: hashtable): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 * @param whichFrameHandle
 */
declare function SaveFrameHandle(table: hashtable, parentKey: integer, childKey: integer, whichFrameHandle: framehandle): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadInteger(table: hashtable, parentKey: integer, childKey: integer): integer;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadReal(table: hashtable, parentKey: integer, childKey: integer): real;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadStr(table: hashtable, parentKey: integer, childKey: integer): string;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadPlayerHandle(table: hashtable, parentKey: integer, childKey: integer): player;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadWidgetHandle(table: hashtable, parentKey: integer, childKey: integer): widget;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadDestructableHandle(table: hashtable, parentKey: integer, childKey: integer): destructable;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadItemHandle(table: hashtable, parentKey: integer, childKey: integer): item;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadUnitHandle(table: hashtable, parentKey: integer, childKey: integer): unit;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadAbilityHandle(table: hashtable, parentKey: integer, childKey: integer): ability;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTimerHandle(table: hashtable, parentKey: integer, childKey: integer): timer;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTriggerHandle(table: hashtable, parentKey: integer, childKey: integer): trigger;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTriggerConditionHandle(table: hashtable, parentKey: integer, childKey: integer): triggercondition;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTriggerActionHandle(table: hashtable, parentKey: integer, childKey: integer): triggeraction;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTriggerEventHandle(table: hashtable, parentKey: integer, childKey: integer): event;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadForceHandle(table: hashtable, parentKey: integer, childKey: integer): force;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadGroupHandle(table: hashtable, parentKey: integer, childKey: integer): group;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadLocationHandle(table: hashtable, parentKey: integer, childKey: integer): location;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadRectHandle(table: hashtable, parentKey: integer, childKey: integer): rect;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadBooleanExprHandle(table: hashtable, parentKey: integer, childKey: integer): boolexpr;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadSoundHandle(table: hashtable, parentKey: integer, childKey: integer): sound;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadEffectHandle(table: hashtable, parentKey: integer, childKey: integer): effect;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadUnitPoolHandle(table: hashtable, parentKey: integer, childKey: integer): unitpool;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadItemPoolHandle(table: hashtable, parentKey: integer, childKey: integer): itempool;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadQuestHandle(table: hashtable, parentKey: integer, childKey: integer): quest;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadQuestItemHandle(table: hashtable, parentKey: integer, childKey: integer): questitem;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadDefeatConditionHandle(table: hashtable, parentKey: integer, childKey: integer): defeatcondition;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTimerDialogHandle(table: hashtable, parentKey: integer, childKey: integer): timerdialog;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadLeaderboardHandle(table: hashtable, parentKey: integer, childKey: integer): leaderboard;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadMultiboardHandle(table: hashtable, parentKey: integer, childKey: integer): multiboard;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadMultiboardItemHandle(table: hashtable, parentKey: integer, childKey: integer): multiboarditem;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTrackableHandle(table: hashtable, parentKey: integer, childKey: integer): trackable;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadDialogHandle(table: hashtable, parentKey: integer, childKey: integer): dialog;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadButtonHandle(table: hashtable, parentKey: integer, childKey: integer): button;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadTextTagHandle(table: hashtable, parentKey: integer, childKey: integer): texttag;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadLightningHandle(table: hashtable, parentKey: integer, childKey: integer): lightning;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadImageHandle(table: hashtable, parentKey: integer, childKey: integer): image;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadUbersplatHandle(table: hashtable, parentKey: integer, childKey: integer): ubersplat;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadRegionHandle(table: hashtable, parentKey: integer, childKey: integer): region;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadFogStateHandle(table: hashtable, parentKey: integer, childKey: integer): fogstate;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadFogModifierHandle(table: hashtable, parentKey: integer, childKey: integer): fogmodifier;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadHashtableHandle(table: hashtable, parentKey: integer, childKey: integer): hashtable;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function LoadFrameHandle(table: hashtable, parentKey: integer, childKey: integer): framehandle;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function HaveSavedInteger(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function HaveSavedReal(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function HaveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function HaveSavedString(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function HaveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function RemoveSavedInteger(table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function RemoveSavedReal(table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function RemoveSavedBoolean(table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function RemoveSavedString(table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table
 * @param parentKey
 * @param childKey
 */
declare function RemoveSavedHandle(table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table
 */
declare function FlushParentHashtable(table: hashtable): nothing;

/**
 * @param table
 * @param parentKey
 */
declare function FlushChildHashtable(table: hashtable, parentKey: integer): nothing;

/**
 * @param lowBound
 * @param highBound
 */
declare function GetRandomInt(lowBound: integer, highBound: integer): integer;

/**
 * @param lowBound
 * @param highBound
 */
declare function GetRandomReal(lowBound: real, highBound: real): real;

/**
 */
declare function CreateUnitPool(): unitpool;

/**
 * @param whichPool
 */
declare function DestroyUnitPool(whichPool: unitpool): nothing;

/**
 * @param whichPool
 * @param unitId
 * @param weight
 */
declare function UnitPoolAddUnitType(whichPool: unitpool, unitId: integer, weight: real): nothing;

/**
 * @param whichPool
 * @param unitId
 */
declare function UnitPoolRemoveUnitType(whichPool: unitpool, unitId: integer): nothing;

/**
 * @param whichPool
 * @param forWhichPlayer
 * @param x
 * @param y
 * @param facing
 */
declare function PlaceRandomUnit(whichPool: unitpool, forWhichPlayer: player, x: real, y: real, facing: real): unit;

/**
 */
declare function CreateItemPool(): itempool;

/**
 * @param whichItemPool
 */
declare function DestroyItemPool(whichItemPool: itempool): nothing;

/**
 * @param whichItemPool
 * @param itemId
 * @param weight
 */
declare function ItemPoolAddItemType(whichItemPool: itempool, itemId: integer, weight: real): nothing;

/**
 * @param whichItemPool
 * @param itemId
 */
declare function ItemPoolRemoveItemType(whichItemPool: itempool, itemId: integer): nothing;

/**
 * @param whichItemPool
 * @param x
 * @param y
 */
declare function PlaceRandomItem(whichItemPool: itempool, x: real, y: real): item;

/**
 * @param level
 */
declare function ChooseRandomCreep(level: integer): integer;

/**
 */
declare function ChooseRandomNPBuilding(): integer;

/**
 * @param level
 */
declare function ChooseRandomItem(level: integer): integer;

/**
 * @param whichType
 * @param level
 */
declare function ChooseRandomItemEx(whichType: itemtype, level: integer): integer;

/**
 * @param seed
 */
declare function SetRandomSeed(seed: integer): nothing;

/**
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 */
declare function SetTerrainFog(a: real, b: real, c: real, d: real, e: real): nothing;

/**
 */
declare function ResetTerrainFog(): nothing;

/**
 * @param a
 * @param b
 * @param c
 * @param d
 * @param e
 */
declare function SetUnitFog(a: real, b: real, c: real, d: real, e: real): nothing;

/**
 * @param style
 * @param zstart
 * @param zend
 * @param density
 * @param red
 * @param green
 * @param blue
 */
declare function SetTerrainFogEx(style: integer, zstart: real, zend: real, density: real, red: real, green: real, blue: real): nothing;

/**
 * @param toPlayer
 * @param x
 * @param y
 * @param message
 */
declare function DisplayTextToPlayer(toPlayer: player, x: real, y: real, message: string): nothing;

/**
 * @param toPlayer
 * @param x
 * @param y
 * @param duration
 * @param message
 */
declare function DisplayTimedTextToPlayer(toPlayer: player, x: real, y: real, duration: real, message: string): nothing;

/**
 * @param toPlayer
 * @param x
 * @param y
 * @param duration
 * @param message
 */
declare function DisplayTimedTextFromPlayer(toPlayer: player, x: real, y: real, duration: real, message: string): nothing;

/**
 */
declare function ClearTextMessages(): nothing;

/**
 * @param terrainDNCFile
 * @param unitDNCFile
 */
declare function SetDayNightModels(terrainDNCFile: string, unitDNCFile: string): nothing;

/**
 * @param skyModelFile
 */
declare function SetSkyModel(skyModelFile: string): nothing;

/**
 * @param b
 */
declare function EnableUserControl(b: boolean): nothing;

/**
 * @param b
 */
declare function EnableUserUI(b: boolean): nothing;

/**
 * @param b
 */
declare function SuspendTimeOfDay(b: boolean): nothing;

/**
 * @param r
 */
declare function SetTimeOfDayScale(r: real): nothing;

/**
 */
declare function GetTimeOfDayScale(): real;

/**
 * @param flag
 * @param fadeDuration
 */
declare function ShowInterface(flag: boolean, fadeDuration: real): nothing;

/**
 * @param flag
 */
declare function PauseGame(flag: boolean): nothing;

/**
 * @param whichUnit
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function UnitAddIndicator(whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichWidget
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function AddIndicator(whichWidget: widget, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param x
 * @param y
 * @param duration
 */
declare function PingMinimap(x: real, y: real, duration: real): nothing;

/**
 * @param x
 * @param y
 * @param duration
 * @param red
 * @param green
 * @param blue
 * @param extraEffects
 */
declare function PingMinimapEx(x: real, y: real, duration: real, red: integer, green: integer, blue: integer, extraEffects: boolean): nothing;

/**
 * @param flag
 */
declare function EnableOcclusion(flag: boolean): nothing;

/**
 * @param introText
 */
declare function SetIntroShotText(introText: string): nothing;

/**
 * @param introModelPath
 */
declare function SetIntroShotModel(introModelPath: string): nothing;

/**
 * @param b
 */
declare function EnableWorldFogBoundary(b: boolean): nothing;

/**
 * @param modelName
 */
declare function PlayModelCinematic(modelName: string): nothing;

/**
 * @param movieName
 */
declare function PlayCinematic(movieName: string): nothing;

/**
 * @param key
 */
declare function ForceUIKey(key: string): nothing;

/**
 */
declare function ForceUICancel(): nothing;

/**
 */
declare function DisplayLoadDialog(): nothing;

/**
 * @param iconPath
 */
declare function SetAltMinimapIcon(iconPath: string): nothing;

/**
 * @param flag
 */
declare function DisableRestartMission(flag: boolean): nothing;

/**
 */
declare function CreateTextTag(): texttag;

/**
 * @param t
 */
declare function DestroyTextTag(t: texttag): nothing;

/**
 * @param t
 * @param s
 * @param height
 */
declare function SetTextTagText(t: texttag, s: string, height: real): nothing;

/**
 * @param t
 * @param x
 * @param y
 * @param heightOffset
 */
declare function SetTextTagPos(t: texttag, x: real, y: real, heightOffset: real): nothing;

/**
 * @param t
 * @param whichUnit
 * @param heightOffset
 */
declare function SetTextTagPosUnit(t: texttag, whichUnit: unit, heightOffset: real): nothing;

/**
 * @param t
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetTextTagColor(t: texttag, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param t
 * @param xvel
 * @param yvel
 */
declare function SetTextTagVelocity(t: texttag, xvel: real, yvel: real): nothing;

/**
 * @param t
 * @param flag
 */
declare function SetTextTagVisibility(t: texttag, flag: boolean): nothing;

/**
 * @param t
 * @param flag
 */
declare function SetTextTagSuspended(t: texttag, flag: boolean): nothing;

/**
 * @param t
 * @param flag
 */
declare function SetTextTagPermanent(t: texttag, flag: boolean): nothing;

/**
 * @param t
 * @param age
 */
declare function SetTextTagAge(t: texttag, age: real): nothing;

/**
 * @param t
 * @param lifespan
 */
declare function SetTextTagLifespan(t: texttag, lifespan: real): nothing;

/**
 * @param t
 * @param fadepoint
 */
declare function SetTextTagFadepoint(t: texttag, fadepoint: real): nothing;

/**
 * @param reserved
 */
declare function SetReservedLocalHeroButtons(reserved: integer): nothing;

/**
 */
declare function GetAllyColorFilterState(): integer;

/**
 * @param state
 */
declare function SetAllyColorFilterState(state: integer): nothing;

/**
 */
declare function GetCreepCampFilterState(): boolean;

/**
 * @param state
 */
declare function SetCreepCampFilterState(state: boolean): nothing;

/**
 * @param enableAlly
 * @param enableCreep
 */
declare function EnableMinimapFilterButtons(enableAlly: boolean, enableCreep: boolean): nothing;

/**
 * @param state
 * @param ui
 */
declare function EnableDragSelect(state: boolean, ui: boolean): nothing;

/**
 * @param state
 * @param ui
 */
declare function EnablePreSelect(state: boolean, ui: boolean): nothing;

/**
 * @param state
 * @param ui
 */
declare function EnableSelect(state: boolean, ui: boolean): nothing;

/**
 * @param trackableModelPath
 * @param x
 * @param y
 * @param facing
 */
declare function CreateTrackable(trackableModelPath: string, x: real, y: real, facing: real): trackable;

/**
 */
declare function CreateQuest(): quest;

/**
 * @param whichQuest
 */
declare function DestroyQuest(whichQuest: quest): nothing;

/**
 * @param whichQuest
 * @param title
 */
declare function QuestSetTitle(whichQuest: quest, title: string): nothing;

/**
 * @param whichQuest
 * @param description
 */
declare function QuestSetDescription(whichQuest: quest, description: string): nothing;

/**
 * @param whichQuest
 * @param iconPath
 */
declare function QuestSetIconPath(whichQuest: quest, iconPath: string): nothing;

/**
 * @param whichQuest
 * @param required
 */
declare function QuestSetRequired(whichQuest: quest, required: boolean): nothing;

/**
 * @param whichQuest
 * @param completed
 */
declare function QuestSetCompleted(whichQuest: quest, completed: boolean): nothing;

/**
 * @param whichQuest
 * @param discovered
 */
declare function QuestSetDiscovered(whichQuest: quest, discovered: boolean): nothing;

/**
 * @param whichQuest
 * @param failed
 */
declare function QuestSetFailed(whichQuest: quest, failed: boolean): nothing;

/**
 * @param whichQuest
 * @param enabled
 */
declare function QuestSetEnabled(whichQuest: quest, enabled: boolean): nothing;

/**
 * @param whichQuest
 */
declare function IsQuestRequired(whichQuest: quest): boolean;

/**
 * @param whichQuest
 */
declare function IsQuestCompleted(whichQuest: quest): boolean;

/**
 * @param whichQuest
 */
declare function IsQuestDiscovered(whichQuest: quest): boolean;

/**
 * @param whichQuest
 */
declare function IsQuestFailed(whichQuest: quest): boolean;

/**
 * @param whichQuest
 */
declare function IsQuestEnabled(whichQuest: quest): boolean;

/**
 * @param whichQuest
 */
declare function QuestCreateItem(whichQuest: quest): questitem;

/**
 * @param whichQuestItem
 * @param description
 */
declare function QuestItemSetDescription(whichQuestItem: questitem, description: string): nothing;

/**
 * @param whichQuestItem
 * @param completed
 */
declare function QuestItemSetCompleted(whichQuestItem: questitem, completed: boolean): nothing;

/**
 * @param whichQuestItem
 */
declare function IsQuestItemCompleted(whichQuestItem: questitem): boolean;

/**
 */
declare function CreateDefeatCondition(): defeatcondition;

/**
 * @param whichCondition
 */
declare function DestroyDefeatCondition(whichCondition: defeatcondition): nothing;

/**
 * @param whichCondition
 * @param description
 */
declare function DefeatConditionSetDescription(whichCondition: defeatcondition, description: string): nothing;

/**
 */
declare function FlashQuestDialogButton(): nothing;

/**
 */
declare function ForceQuestDialogUpdate(): nothing;

/**
 * @param t
 */
declare function CreateTimerDialog(t: timer): timerdialog;

/**
 * @param whichDialog
 */
declare function DestroyTimerDialog(whichDialog: timerdialog): nothing;

/**
 * @param whichDialog
 * @param title
 */
declare function TimerDialogSetTitle(whichDialog: timerdialog, title: string): nothing;

/**
 * @param whichDialog
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function TimerDialogSetTitleColor(whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichDialog
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function TimerDialogSetTimeColor(whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichDialog
 * @param speedMultFactor
 */
declare function TimerDialogSetSpeed(whichDialog: timerdialog, speedMultFactor: real): nothing;

/**
 * @param whichDialog
 * @param display
 */
declare function TimerDialogDisplay(whichDialog: timerdialog, display: boolean): nothing;

/**
 * @param whichDialog
 */
declare function IsTimerDialogDisplayed(whichDialog: timerdialog): boolean;

/**
 * @param whichDialog
 * @param timeRemaining
 */
declare function TimerDialogSetRealTimeRemaining(whichDialog: timerdialog, timeRemaining: real): nothing;

/**
 */
declare function CreateLeaderboard(): leaderboard;

/**
 * @param lb
 */
declare function DestroyLeaderboard(lb: leaderboard): nothing;

/**
 * @param lb
 * @param show
 */
declare function LeaderboardDisplay(lb: leaderboard, show: boolean): nothing;

/**
 * @param lb
 */
declare function IsLeaderboardDisplayed(lb: leaderboard): boolean;

/**
 * @param lb
 */
declare function LeaderboardGetItemCount(lb: leaderboard): integer;

/**
 * @param lb
 * @param count
 */
declare function LeaderboardSetSizeByItemCount(lb: leaderboard, count: integer): nothing;

/**
 * @param lb
 * @param label
 * @param value
 * @param p
 */
declare function LeaderboardAddItem(lb: leaderboard, label: string, value: integer, p: player): nothing;

/**
 * @param lb
 * @param index
 */
declare function LeaderboardRemoveItem(lb: leaderboard, index: integer): nothing;

/**
 * @param lb
 * @param p
 */
declare function LeaderboardRemovePlayerItem(lb: leaderboard, p: player): nothing;

/**
 * @param lb
 */
declare function LeaderboardClear(lb: leaderboard): nothing;

/**
 * @param lb
 * @param ascending
 */
declare function LeaderboardSortItemsByValue(lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb
 * @param ascending
 */
declare function LeaderboardSortItemsByPlayer(lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb
 * @param ascending
 */
declare function LeaderboardSortItemsByLabel(lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb
 * @param p
 */
declare function LeaderboardHasPlayerItem(lb: leaderboard, p: player): boolean;

/**
 * @param lb
 * @param p
 */
declare function LeaderboardGetPlayerIndex(lb: leaderboard, p: player): integer;

/**
 * @param lb
 * @param label
 */
declare function LeaderboardSetLabel(lb: leaderboard, label: string): nothing;

/**
 * @param lb
 */
declare function LeaderboardGetLabelText(lb: leaderboard): string;

/**
 * @param toPlayer
 * @param lb
 */
declare function PlayerSetLeaderboard(toPlayer: player, lb: leaderboard): nothing;

/**
 * @param toPlayer
 */
declare function PlayerGetLeaderboard(toPlayer: player): leaderboard;

/**
 * @param lb
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function LeaderboardSetLabelColor(lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function LeaderboardSetValueColor(lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb
 * @param showLabel
 * @param showNames
 * @param showValues
 * @param showIcons
 */
declare function LeaderboardSetStyle(lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): nothing;

/**
 * @param lb
 * @param whichItem
 * @param val
 */
declare function LeaderboardSetItemValue(lb: leaderboard, whichItem: integer, val: integer): nothing;

/**
 * @param lb
 * @param whichItem
 * @param val
 */
declare function LeaderboardSetItemLabel(lb: leaderboard, whichItem: integer, val: string): nothing;

/**
 * @param lb
 * @param whichItem
 * @param showLabel
 * @param showValue
 * @param showIcon
 */
declare function LeaderboardSetItemStyle(lb: leaderboard, whichItem: integer, showLabel: boolean, showValue: boolean, showIcon: boolean): nothing;

/**
 * @param lb
 * @param whichItem
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function LeaderboardSetItemLabelColor(lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb
 * @param whichItem
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function LeaderboardSetItemValueColor(lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 */
declare function CreateMultiboard(): multiboard;

/**
 * @param lb
 */
declare function DestroyMultiboard(lb: multiboard): nothing;

/**
 * @param lb
 * @param show
 */
declare function MultiboardDisplay(lb: multiboard, show: boolean): nothing;

/**
 * @param lb
 */
declare function IsMultiboardDisplayed(lb: multiboard): boolean;

/**
 * @param lb
 * @param minimize
 */
declare function MultiboardMinimize(lb: multiboard, minimize: boolean): nothing;

/**
 * @param lb
 */
declare function IsMultiboardMinimized(lb: multiboard): boolean;

/**
 * @param lb
 */
declare function MultiboardClear(lb: multiboard): nothing;

/**
 * @param lb
 * @param label
 */
declare function MultiboardSetTitleText(lb: multiboard, label: string): nothing;

/**
 * @param lb
 */
declare function MultiboardGetTitleText(lb: multiboard): string;

/**
 * @param lb
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function MultiboardSetTitleTextColor(lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb
 */
declare function MultiboardGetRowCount(lb: multiboard): integer;

/**
 * @param lb
 */
declare function MultiboardGetColumnCount(lb: multiboard): integer;

/**
 * @param lb
 * @param count
 */
declare function MultiboardSetColumnCount(lb: multiboard, count: integer): nothing;

/**
 * @param lb
 * @param count
 */
declare function MultiboardSetRowCount(lb: multiboard, count: integer): nothing;

/**
 * @param lb
 * @param showValues
 * @param showIcons
 */
declare function MultiboardSetItemsStyle(lb: multiboard, showValues: boolean, showIcons: boolean): nothing;

/**
 * @param lb
 * @param value
 */
declare function MultiboardSetItemsValue(lb: multiboard, value: string): nothing;

/**
 * @param lb
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function MultiboardSetItemsValueColor(lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb
 * @param width
 */
declare function MultiboardSetItemsWidth(lb: multiboard, width: real): nothing;

/**
 * @param lb
 * @param iconPath
 */
declare function MultiboardSetItemsIcon(lb: multiboard, iconPath: string): nothing;

/**
 * @param lb
 * @param row
 * @param column
 */
declare function MultiboardGetItem(lb: multiboard, row: integer, column: integer): multiboarditem;

/**
 * @param mbi
 */
declare function MultiboardReleaseItem(mbi: multiboarditem): nothing;

/**
 * @param mbi
 * @param showValue
 * @param showIcon
 */
declare function MultiboardSetItemStyle(mbi: multiboarditem, showValue: boolean, showIcon: boolean): nothing;

/**
 * @param mbi
 * @param val
 */
declare function MultiboardSetItemValue(mbi: multiboarditem, val: string): nothing;

/**
 * @param mbi
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function MultiboardSetItemValueColor(mbi: multiboarditem, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param mbi
 * @param width
 */
declare function MultiboardSetItemWidth(mbi: multiboarditem, width: real): nothing;

/**
 * @param mbi
 * @param iconFileName
 */
declare function MultiboardSetItemIcon(mbi: multiboarditem, iconFileName: string): nothing;

/**
 * @param flag
 */
declare function MultiboardSuppressDisplay(flag: boolean): nothing;

/**
 * @param x
 * @param y
 */
declare function SetCameraPosition(x: real, y: real): nothing;

/**
 * @param x
 * @param y
 */
declare function SetCameraQuickPosition(x: real, y: real): nothing;

/**
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 * @param x3
 * @param y3
 * @param x4
 * @param y4
 */
declare function SetCameraBounds(x1: real, y1: real, x2: real, y2: real, x3: real, y3: real, x4: real, y4: real): nothing;

/**
 */
declare function StopCamera(): nothing;

/**
 * @param duration
 */
declare function ResetToGameCamera(duration: real): nothing;

/**
 * @param x
 * @param y
 */
declare function PanCameraTo(x: real, y: real): nothing;

/**
 * @param x
 * @param y
 * @param duration
 */
declare function PanCameraToTimed(x: real, y: real, duration: real): nothing;

/**
 * @param x
 * @param y
 * @param zOffsetDest
 */
declare function PanCameraToWithZ(x: real, y: real, zOffsetDest: real): nothing;

/**
 * @param x
 * @param y
 * @param zOffsetDest
 * @param duration
 */
declare function PanCameraToTimedWithZ(x: real, y: real, zOffsetDest: real, duration: real): nothing;

/**
 * @param cameraModelFile
 */
declare function SetCinematicCamera(cameraModelFile: string): nothing;

/**
 * @param x
 * @param y
 * @param radiansToSweep
 * @param duration
 */
declare function SetCameraRotateMode(x: real, y: real, radiansToSweep: real, duration: real): nothing;

/**
 * @param whichField
 * @param value
 * @param duration
 */
declare function SetCameraField(whichField: camerafield, value: real, duration: real): nothing;

/**
 * @param whichField
 * @param offset
 * @param duration
 */
declare function AdjustCameraField(whichField: camerafield, offset: real, duration: real): nothing;

/**
 * @param whichUnit
 * @param xoffset
 * @param yoffset
 * @param inheritOrientation
 */
declare function SetCameraTargetController(whichUnit: unit, xoffset: real, yoffset: real, inheritOrientation: boolean): nothing;

/**
 * @param whichUnit
 * @param xoffset
 * @param yoffset
 */
declare function SetCameraOrientController(whichUnit: unit, xoffset: real, yoffset: real): nothing;

/**
 */
declare function CreateCameraSetup(): camerasetup;

/**
 * @param whichSetup
 * @param whichField
 * @param value
 * @param duration
 */
declare function CameraSetupSetField(whichSetup: camerasetup, whichField: camerafield, value: real, duration: real): nothing;

/**
 * @param whichSetup
 * @param whichField
 */
declare function CameraSetupGetField(whichSetup: camerasetup, whichField: camerafield): real;

/**
 * @param whichSetup
 * @param x
 * @param y
 * @param duration
 */
declare function CameraSetupSetDestPosition(whichSetup: camerasetup, x: real, y: real, duration: real): nothing;

/**
 * @param whichSetup
 */
declare function CameraSetupGetDestPositionLoc(whichSetup: camerasetup): location;

/**
 * @param whichSetup
 */
declare function CameraSetupGetDestPositionX(whichSetup: camerasetup): real;

/**
 * @param whichSetup
 */
declare function CameraSetupGetDestPositionY(whichSetup: camerasetup): real;

/**
 * @param whichSetup
 * @param doPan
 * @param panTimed
 */
declare function CameraSetupApply(whichSetup: camerasetup, doPan: boolean, panTimed: boolean): nothing;

/**
 * @param whichSetup
 * @param zDestOffset
 */
declare function CameraSetupApplyWithZ(whichSetup: camerasetup, zDestOffset: real): nothing;

/**
 * @param whichSetup
 * @param doPan
 * @param forceDuration
 */
declare function CameraSetupApplyForceDuration(whichSetup: camerasetup, doPan: boolean, forceDuration: real): nothing;

/**
 * @param whichSetup
 * @param zDestOffset
 * @param forceDuration
 */
declare function CameraSetupApplyForceDurationWithZ(whichSetup: camerasetup, zDestOffset: real, forceDuration: real): nothing;

/**
 * @param mag
 * @param velocity
 */
declare function CameraSetTargetNoise(mag: real, velocity: real): nothing;

/**
 * @param mag
 * @param velocity
 */
declare function CameraSetSourceNoise(mag: real, velocity: real): nothing;

/**
 * @param mag
 * @param velocity
 * @param vertOnly
 */
declare function CameraSetTargetNoiseEx(mag: real, velocity: real, vertOnly: boolean): nothing;

/**
 * @param mag
 * @param velocity
 * @param vertOnly
 */
declare function CameraSetSourceNoiseEx(mag: real, velocity: real, vertOnly: boolean): nothing;

/**
 * @param factor
 */
declare function CameraSetSmoothingFactor(factor: real): nothing;

/**
 * @param filename
 */
declare function SetCineFilterTexture(filename: string): nothing;

/**
 * @param whichMode
 */
declare function SetCineFilterBlendMode(whichMode: blendmode): nothing;

/**
 * @param whichFlags
 */
declare function SetCineFilterTexMapFlags(whichFlags: texmapflags): nothing;

/**
 * @param minu
 * @param minv
 * @param maxu
 * @param maxv
 */
declare function SetCineFilterStartUV(minu: real, minv: real, maxu: real, maxv: real): nothing;

/**
 * @param minu
 * @param minv
 * @param maxu
 * @param maxv
 */
declare function SetCineFilterEndUV(minu: real, minv: real, maxu: real, maxv: real): nothing;

/**
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetCineFilterStartColor(red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetCineFilterEndColor(red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param duration
 */
declare function SetCineFilterDuration(duration: real): nothing;

/**
 * @param flag
 */
declare function DisplayCineFilter(flag: boolean): nothing;

/**
 */
declare function IsCineFilterDisplayed(): boolean;

/**
 * @param portraitUnitId
 * @param color
 * @param speakerTitle
 * @param text
 * @param sceneDuration
 * @param voiceoverDuration
 */
declare function SetCinematicScene(portraitUnitId: integer, color: playercolor, speakerTitle: string, text: string, sceneDuration: real, voiceoverDuration: real): nothing;

/**
 */
declare function EndCinematicScene(): nothing;

/**
 * @param flag
 */
declare function ForceCinematicSubtitles(flag: boolean): nothing;

/**
 * @param whichMargin
 */
declare function GetCameraMargin(whichMargin: integer): real;

/**
 */
declare function GetCameraBoundMinX(): real;

/**
 */
declare function GetCameraBoundMinY(): real;

/**
 */
declare function GetCameraBoundMaxX(): real;

/**
 */
declare function GetCameraBoundMaxY(): real;

/**
 * @param whichField
 */
declare function GetCameraField(whichField: camerafield): real;

/**
 */
declare function GetCameraTargetPositionX(): real;

/**
 */
declare function GetCameraTargetPositionY(): real;

/**
 */
declare function GetCameraTargetPositionZ(): real;

/**
 */
declare function GetCameraTargetPositionLoc(): location;

/**
 */
declare function GetCameraEyePositionX(): real;

/**
 */
declare function GetCameraEyePositionY(): real;

/**
 */
declare function GetCameraEyePositionZ(): real;

/**
 */
declare function GetCameraEyePositionLoc(): location;

/**
 * @param environmentName
 */
declare function NewSoundEnvironment(environmentName: string): nothing;

/**
 * @param fileName
 * @param looping
 * @param is3D
 * @param stopwhenoutofrange
 * @param fadeInRate
 * @param fadeOutRate
 * @param eaxSetting
 */
declare function CreateSound(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, eaxSetting: string): sound;

/**
 * @param fileName
 * @param looping
 * @param is3D
 * @param stopwhenoutofrange
 * @param fadeInRate
 * @param fadeOutRate
 * @param SLKEntryName
 */
declare function CreateSoundFilenameWithLabel(fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, SLKEntryName: string): sound;

/**
 * @param soundLabel
 * @param looping
 * @param is3D
 * @param stopwhenoutofrange
 * @param fadeInRate
 * @param fadeOutRate
 */
declare function CreateSoundFromLabel(soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer): sound;

/**
 * @param soundLabel
 * @param fadeInRate
 * @param fadeOutRate
 */
declare function CreateMIDISound(soundLabel: string, fadeInRate: integer, fadeOutRate: integer): sound;

/**
 * @param soundHandle
 * @param soundLabel
 */
declare function SetSoundParamsFromLabel(soundHandle: sound, soundLabel: string): nothing;

/**
 * @param soundHandle
 * @param cutoff
 */
declare function SetSoundDistanceCutoff(soundHandle: sound, cutoff: real): nothing;

/**
 * @param soundHandle
 * @param channel
 */
declare function SetSoundChannel(soundHandle: sound, channel: integer): nothing;

/**
 * @param soundHandle
 * @param volume
 */
declare function SetSoundVolume(soundHandle: sound, volume: integer): nothing;

/**
 * @param soundHandle
 * @param pitch
 */
declare function SetSoundPitch(soundHandle: sound, pitch: real): nothing;

/**
 * @param soundHandle
 * @param millisecs
 */
declare function SetSoundPlayPosition(soundHandle: sound, millisecs: integer): nothing;

/**
 * @param soundHandle
 * @param minDist
 * @param maxDist
 */
declare function SetSoundDistances(soundHandle: sound, minDist: real, maxDist: real): nothing;

/**
 * @param soundHandle
 * @param inside
 * @param outside
 * @param outsideVolume
 */
declare function SetSoundConeAngles(soundHandle: sound, inside: real, outside: real, outsideVolume: integer): nothing;

/**
 * @param soundHandle
 * @param x
 * @param y
 * @param z
 */
declare function SetSoundConeOrientation(soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle
 * @param x
 * @param y
 * @param z
 */
declare function SetSoundPosition(soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle
 * @param x
 * @param y
 * @param z
 */
declare function SetSoundVelocity(soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle
 * @param whichUnit
 */
declare function AttachSoundToUnit(soundHandle: sound, whichUnit: unit): nothing;

/**
 * @param soundHandle
 */
declare function StartSound(soundHandle: sound): nothing;

/**
 * @param soundHandle
 * @param killWhenDone
 * @param fadeOut
 */
declare function StopSound(soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): nothing;

/**
 * @param soundHandle
 */
declare function KillSoundWhenDone(soundHandle: sound): nothing;

/**
 * @param musicName
 * @param random
 * @param index
 */
declare function SetMapMusic(musicName: string, random: boolean, index: integer): nothing;

/**
 */
declare function ClearMapMusic(): nothing;

/**
 * @param musicName
 */
declare function PlayMusic(musicName: string): nothing;

/**
 * @param musicName
 * @param frommsecs
 * @param fadeinmsecs
 */
declare function PlayMusicEx(musicName: string, frommsecs: integer, fadeinmsecs: integer): nothing;

/**
 * @param fadeOut
 */
declare function StopMusic(fadeOut: boolean): nothing;

/**
 */
declare function ResumeMusic(): nothing;

/**
 * @param musicFileName
 */
declare function PlayThematicMusic(musicFileName: string): nothing;

/**
 * @param musicFileName
 * @param frommsecs
 */
declare function PlayThematicMusicEx(musicFileName: string, frommsecs: integer): nothing;

/**
 */
declare function EndThematicMusic(): nothing;

/**
 * @param volume
 */
declare function SetMusicVolume(volume: integer): nothing;

/**
 * @param millisecs
 */
declare function SetMusicPlayPosition(millisecs: integer): nothing;

/**
 * @param millisecs
 */
declare function SetThematicMusicPlayPosition(millisecs: integer): nothing;

/**
 * @param soundHandle
 * @param duration
 */
declare function SetSoundDuration(soundHandle: sound, duration: integer): nothing;

/**
 * @param soundHandle
 */
declare function GetSoundDuration(soundHandle: sound): integer;

/**
 * @param musicFileName
 */
declare function GetSoundFileDuration(musicFileName: string): integer;

/**
 * @param vgroup
 * @param scale
 */
declare function VolumeGroupSetVolume(vgroup: volumegroup, scale: real): nothing;

/**
 */
declare function VolumeGroupReset(): nothing;

/**
 * @param soundHandle
 */
declare function GetSoundIsPlaying(soundHandle: sound): boolean;

/**
 * @param soundHandle
 */
declare function GetSoundIsLoading(soundHandle: sound): boolean;

/**
 * @param soundHandle
 * @param byPosition
 * @param rectwidth
 * @param rectheight
 */
declare function RegisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): nothing;

/**
 * @param soundHandle
 * @param byPosition
 * @param rectwidth
 * @param rectheight
 */
declare function UnregisterStackedSound(soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): nothing;

/**
 * @param where
 * @param effectID
 */
declare function AddWeatherEffect(where: rect, effectID: integer): weathereffect;

/**
 * @param whichEffect
 */
declare function RemoveWeatherEffect(whichEffect: weathereffect): nothing;

/**
 * @param whichEffect
 * @param enable
 */
declare function EnableWeatherEffect(whichEffect: weathereffect, enable: boolean): nothing;

/**
 * @param x
 * @param y
 * @param radius
 * @param depth
 * @param duration
 * @param permanent
 */
declare function TerrainDeformCrater(x: real, y: real, radius: real, depth: real, duration: integer, permanent: boolean): terraindeformation;

/**
 * @param x
 * @param y
 * @param radius
 * @param depth
 * @param duration
 * @param count
 * @param spaceWaves
 * @param timeWaves
 * @param radiusStartPct
 * @param limitNeg
 */
declare function TerrainDeformRipple(x: real, y: real, radius: real, depth: real, duration: integer, count: integer, spaceWaves: real, timeWaves: real, radiusStartPct: real, limitNeg: boolean): terraindeformation;

/**
 * @param x
 * @param y
 * @param dirX
 * @param dirY
 * @param distance
 * @param speed
 * @param radius
 * @param depth
 * @param trailTime
 * @param count
 */
declare function TerrainDeformWave(x: real, y: real, dirX: real, dirY: real, distance: real, speed: real, radius: real, depth: real, trailTime: integer, count: integer): terraindeformation;

/**
 * @param x
 * @param y
 * @param radius
 * @param minDelta
 * @param maxDelta
 * @param duration
 * @param updateInterval
 */
declare function TerrainDeformRandom(x: real, y: real, radius: real, minDelta: real, maxDelta: real, duration: integer, updateInterval: integer): terraindeformation;

/**
 * @param deformation
 * @param duration
 */
declare function TerrainDeformStop(deformation: terraindeformation, duration: integer): nothing;

/**
 */
declare function TerrainDeformStopAll(): nothing;

/**
 * @param modelName
 * @param x
 * @param y
 */
declare function AddSpecialEffect(modelName: string, x: real, y: real): effect;

/**
 * @param modelName
 * @param where
 */
declare function AddSpecialEffectLoc(modelName: string, where: location): effect;

/**
 * @param modelName
 * @param targetWidget
 * @param attachPointName
 */
declare function AddSpecialEffectTarget(modelName: string, targetWidget: widget, attachPointName: string): effect;

/**
 * @param whichEffect
 */
declare function DestroyEffect(whichEffect: effect): nothing;

/**
 * @param abilityString
 * @param t
 * @param x
 * @param y
 */
declare function AddSpellEffect(abilityString: string, t: effecttype, x: real, y: real): effect;

/**
 * @param abilityString
 * @param t
 * @param where
 */
declare function AddSpellEffectLoc(abilityString: string, t: effecttype, where: location): effect;

/**
 * @param abilityId
 * @param t
 * @param x
 * @param y
 */
declare function AddSpellEffectById(abilityId: integer, t: effecttype, x: real, y: real): effect;

/**
 * @param abilityId
 * @param t
 * @param where
 */
declare function AddSpellEffectByIdLoc(abilityId: integer, t: effecttype, where: location): effect;

/**
 * @param modelName
 * @param t
 * @param targetWidget
 * @param attachPoint
 */
declare function AddSpellEffectTarget(modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * @param abilityId
 * @param t
 * @param targetWidget
 * @param attachPoint
 */
declare function AddSpellEffectTargetById(abilityId: integer, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * @param codeName
 * @param checkVisibility
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
declare function AddLightning(codeName: string, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): lightning;

/**
 * @param codeName
 * @param checkVisibility
 * @param x1
 * @param y1
 * @param z1
 * @param x2
 * @param y2
 * @param z2
 */
declare function AddLightningEx(codeName: string, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): lightning;

/**
 * @param whichBolt
 */
declare function DestroyLightning(whichBolt: lightning): boolean;

/**
 * @param whichBolt
 * @param checkVisibility
 * @param x1
 * @param y1
 * @param x2
 * @param y2
 */
declare function MoveLightning(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean;

/**
 * @param whichBolt
 * @param checkVisibility
 * @param x1
 * @param y1
 * @param z1
 * @param x2
 * @param y2
 * @param z2
 */
declare function MoveLightningEx(whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): boolean;

/**
 * @param whichBolt
 */
declare function GetLightningColorA(whichBolt: lightning): real;

/**
 * @param whichBolt
 */
declare function GetLightningColorR(whichBolt: lightning): real;

/**
 * @param whichBolt
 */
declare function GetLightningColorG(whichBolt: lightning): real;

/**
 * @param whichBolt
 */
declare function GetLightningColorB(whichBolt: lightning): real;

/**
 * @param whichBolt
 * @param r
 * @param g
 * @param b
 * @param a
 */
declare function SetLightningColor(whichBolt: lightning, r: real, g: real, b: real, a: real): boolean;

/**
 * @param abilityString
 * @param t
 * @param index
 */
declare function GetAbilityEffect(abilityString: string, t: effecttype, index: integer): string;

/**
 * @param abilityId
 * @param t
 * @param index
 */
declare function GetAbilityEffectById(abilityId: integer, t: effecttype, index: integer): string;

/**
 * @param abilityString
 * @param t
 */
declare function GetAbilitySound(abilityString: string, t: soundtype): string;

/**
 * @param abilityId
 * @param t
 */
declare function GetAbilitySoundById(abilityId: integer, t: soundtype): string;

/**
 * @param x
 * @param y
 */
declare function GetTerrainCliffLevel(x: real, y: real): integer;

/**
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetWaterBaseColor(red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param val
 */
declare function SetWaterDeforms(val: boolean): nothing;

/**
 * @param x
 * @param y
 */
declare function GetTerrainType(x: real, y: real): integer;

/**
 * @param x
 * @param y
 */
declare function GetTerrainVariance(x: real, y: real): integer;

/**
 * @param x
 * @param y
 * @param terrainType
 * @param variation
 * @param area
 * @param shape
 */
declare function SetTerrainType(x: real, y: real, terrainType: integer, variation: integer, area: integer, shape: integer): nothing;

/**
 * @param x
 * @param y
 * @param t
 */
declare function IsTerrainPathable(x: real, y: real, t: pathingtype): boolean;

/**
 * @param x
 * @param y
 * @param t
 * @param flag
 */
declare function SetTerrainPathable(x: real, y: real, t: pathingtype, flag: boolean): nothing;

/**
 * @param file
 * @param sizeX
 * @param sizeY
 * @param sizeZ
 * @param posX
 * @param posY
 * @param posZ
 * @param originX
 * @param originY
 * @param originZ
 * @param imageType
 */
declare function CreateImage(file: string, sizeX: real, sizeY: real, sizeZ: real, posX: real, posY: real, posZ: real, originX: real, originY: real, originZ: real, imageType: integer): image;

/**
 * @param whichImage
 */
declare function DestroyImage(whichImage: image): nothing;

/**
 * @param whichImage
 * @param flag
 */
declare function ShowImage(whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage
 * @param flag
 * @param height
 */
declare function SetImageConstantHeight(whichImage: image, flag: boolean, height: real): nothing;

/**
 * @param whichImage
 * @param x
 * @param y
 * @param z
 */
declare function SetImagePosition(whichImage: image, x: real, y: real, z: real): nothing;

/**
 * @param whichImage
 * @param red
 * @param green
 * @param blue
 * @param alpha
 */
declare function SetImageColor(whichImage: image, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichImage
 * @param flag
 */
declare function SetImageRender(whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage
 * @param flag
 */
declare function SetImageRenderAlways(whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage
 * @param flag
 * @param useWaterAlpha
 */
declare function SetImageAboveWater(whichImage: image, flag: boolean, useWaterAlpha: boolean): nothing;

/**
 * @param whichImage
 * @param imageType
 */
declare function SetImageType(whichImage: image, imageType: integer): nothing;

/**
 * @param x
 * @param y
 * @param name
 * @param red
 * @param green
 * @param blue
 * @param alpha
 * @param forcePaused
 * @param noBirthTime
 */
declare function CreateUbersplat(x: real, y: real, name: string, red: integer, green: integer, blue: integer, alpha: integer, forcePaused: boolean, noBirthTime: boolean): ubersplat;

/**
 * @param whichSplat
 */
declare function DestroyUbersplat(whichSplat: ubersplat): nothing;

/**
 * @param whichSplat
 */
declare function ResetUbersplat(whichSplat: ubersplat): nothing;

/**
 * @param whichSplat
 */
declare function FinishUbersplat(whichSplat: ubersplat): nothing;

/**
 * @param whichSplat
 * @param flag
 */
declare function ShowUbersplat(whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichSplat
 * @param flag
 */
declare function SetUbersplatRender(whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichSplat
 * @param flag
 */
declare function SetUbersplatRenderAlways(whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichPlayer
 * @param x
 * @param y
 * @param radius
 * @param addBlight
 */
declare function SetBlight(whichPlayer: player, x: real, y: real, radius: real, addBlight: boolean): nothing;

/**
 * @param whichPlayer
 * @param r
 * @param addBlight
 */
declare function SetBlightRect(whichPlayer: player, r: rect, addBlight: boolean): nothing;

/**
 * @param whichPlayer
 * @param x
 * @param y
 * @param addBlight
 */
declare function SetBlightPoint(whichPlayer: player, x: real, y: real, addBlight: boolean): nothing;

/**
 * @param whichPlayer
 * @param whichLocation
 * @param radius
 * @param addBlight
 */
declare function SetBlightLoc(whichPlayer: player, whichLocation: location, radius: real, addBlight: boolean): nothing;

/**
 * @param id
 * @param x
 * @param y
 * @param face
 */
declare function CreateBlightedGoldmine(id: player, x: real, y: real, face: real): unit;

/**
 * @param x
 * @param y
 */
declare function IsPointBlighted(x: real, y: real): boolean;

/**
 * @param x
 * @param y
 * @param radius
 * @param doodadID
 * @param nearestOnly
 * @param animName
 * @param animRandom
 */
declare function SetDoodadAnimation(x: real, y: real, radius: real, doodadID: integer, nearestOnly: boolean, animName: string, animRandom: boolean): nothing;

/**
 * @param r
 * @param doodadID
 * @param animName
 * @param animRandom
 */
declare function SetDoodadAnimationRect(r: rect, doodadID: integer, animName: string, animRandom: boolean): nothing;

/**
 * @param num
 * @param script
 */
declare function StartMeleeAI(num: player, script: string): nothing;

/**
 * @param num
 * @param script
 */
declare function StartCampaignAI(num: player, script: string): nothing;

/**
 * @param num
 * @param command
 * @param data
 */
declare function CommandAI(num: player, command: integer, data: integer): nothing;

/**
 * @param p
 * @param pause
 */
declare function PauseCompAI(p: player, pause: boolean): nothing;

/**
 * @param num
 */
declare function GetAIDifficulty(num: player): aidifficulty;

/**
 * @param hUnit
 */
declare function RemoveGuardPosition(hUnit: unit): nothing;

/**
 * @param hUnit
 */
declare function RecycleGuardPosition(hUnit: unit): nothing;

/**
 * @param num
 */
declare function RemoveAllGuardPositions(num: player): nothing;

/**
 * @param cheatStr
 */
declare function Cheat(cheatStr: string): nothing;

/**
 */
declare function IsNoVictoryCheat(): boolean;

/**
 */
declare function IsNoDefeatCheat(): boolean;

/**
 * @param filename
 */
declare function Preload(filename: string): nothing;

/**
 * @param timeout
 */
declare function PreloadEnd(timeout: real): nothing;

/**
 */
declare function PreloadStart(): nothing;

/**
 */
declare function PreloadRefresh(): nothing;

/**
 */
declare function PreloadEndEx(): nothing;

/**
 */
declare function PreloadGenClear(): nothing;

/**
 */
declare function PreloadGenStart(): nothing;

/**
 * @param filename
 */
declare function PreloadGenEnd(filename: string): nothing;

/**
 * @param filename
 */
declare function Preloader(filename: string): nothing;

/**
 * @param testType
 */
declare function AutomationSetTestType(testType: string): nothing;

/**
 * @param testName
 */
declare function AutomationTestStart(testName: string): nothing;

/**
 */
declare function AutomationTestEnd(): nothing;

/**
 */
declare function AutomationTestingFinished(): nothing;

/**
 */
declare function BlzGetTriggerPlayerMouseX(): real;

/**
 */
declare function BlzGetTriggerPlayerMouseY(): real;

/**
 */
declare function BlzGetTriggerPlayerMousePosition(): location;

/**
 */
declare function BlzGetTriggerPlayerMouseButton(): mousebuttontype;

/**
 * @param abilCode
 * @param tooltip
 * @param level
 */
declare function BlzSetAbilityTooltip(abilCode: integer, tooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param tooltip
 * @param level
 */
declare function BlzSetAbilityActivatedTooltip(abilCode: integer, tooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param extendedTooltip
 * @param level
 */
declare function BlzSetAbilityExtendedTooltip(abilCode: integer, extendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param extendedTooltip
 * @param level
 */
declare function BlzSetAbilityActivatedExtendedTooltip(abilCode: integer, extendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param researchTooltip
 * @param level
 */
declare function BlzSetAbilityResearchTooltip(abilCode: integer, researchTooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param researchExtendedTooltip
 * @param level
 */
declare function BlzSetAbilityResearchExtendedTooltip(abilCode: integer, researchExtendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityActivatedTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityExtendedTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityActivatedExtendedTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityResearchTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param level
 */
declare function BlzGetAbilityResearchExtendedTooltip(abilCode: integer, level: integer): string;

/**
 * @param abilCode
 * @param iconPath
 */
declare function BlzSetAbilityIcon(abilCode: integer, iconPath: string): nothing;

/**
 * @param abilCode
 */
declare function BlzGetAbilityIcon(abilCode: integer): string;

/**
 * @param abilCode
 * @param iconPath
 */
declare function BlzSetAbilityActivatedIcon(abilCode: integer, iconPath: string): nothing;

/**
 * @param abilCode
 */
declare function BlzGetAbilityActivatedIcon(abilCode: integer): string;

/**
 * @param abilCode
 */
declare function BlzGetAbilityPosX(abilCode: integer): integer;

/**
 * @param abilCode
 */
declare function BlzGetAbilityPosY(abilCode: integer): integer;

/**
 * @param abilCode
 * @param x
 */
declare function BlzSetAbilityPosX(abilCode: integer, x: integer): nothing;

/**
 * @param abilCode
 * @param y
 */
declare function BlzSetAbilityPosY(abilCode: integer, y: integer): nothing;

/**
 * @param abilCode
 */
declare function BlzGetAbilityActivatedPosX(abilCode: integer): integer;

/**
 * @param abilCode
 */
declare function BlzGetAbilityActivatedPosY(abilCode: integer): integer;

/**
 * @param abilCode
 * @param x
 */
declare function BlzSetAbilityActivatedPosX(abilCode: integer, x: integer): nothing;

/**
 * @param abilCode
 * @param y
 */
declare function BlzSetAbilityActivatedPosY(abilCode: integer, y: integer): nothing;

/**
 * @param whichUnit
 */
declare function BlzGetUnitMaxHP(whichUnit: unit): integer;

/**
 * @param whichUnit
 * @param hp
 */
declare function BlzSetUnitMaxHP(whichUnit: unit, hp: integer): nothing;

/**
 * @param whichUnit
 */
declare function BlzGetUnitMaxMana(whichUnit: unit): integer;

/**
 * @param whichUnit
 * @param mana
 */
declare function BlzSetUnitMaxMana(whichUnit: unit, mana: integer): nothing;

/**
 * @param whichItem
 * @param name
 */
declare function BlzSetItemName(whichItem: item, name: string): nothing;

/**
 * @param whichItem
 * @param description
 */
declare function BlzSetItemDescription(whichItem: item, description: string): nothing;

/**
 * @param whichItem
 */
declare function BlzGetItemDescription(whichItem: item): string;

/**
 * @param whichItem
 * @param tooltip
 */
declare function BlzSetItemTooltip(whichItem: item, tooltip: string): nothing;

/**
 * @param whichItem
 */
declare function BlzGetItemTooltip(whichItem: item): string;

/**
 * @param whichItem
 * @param extendedTooltip
 */
declare function BlzSetItemExtendedTooltip(whichItem: item, extendedTooltip: string): nothing;

/**
 * @param whichItem
 */
declare function BlzGetItemExtendedTooltip(whichItem: item): string;

/**
 * @param whichItem
 * @param iconPath
 */
declare function BlzSetItemIconPath(whichItem: item, iconPath: string): nothing;

/**
 * @param whichItem
 */
declare function BlzGetItemIconPath(whichItem: item): string;

/**
 * @param whichUnit
 * @param name
 */
declare function BlzSetUnitName(whichUnit: unit, name: string): nothing;

/**
 * @param whichUnit
 * @param heroProperName
 */
declare function BlzSetHeroProperName(whichUnit: unit, heroProperName: string): nothing;

/**
 * @param whichUnit
 * @param weaponIndex
 */
declare function BlzGetUnitBaseDamage(whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit
 * @param baseDamage
 * @param weaponIndex
 */
declare function BlzSetUnitBaseDamage(whichUnit: unit, baseDamage: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit
 * @param weaponIndex
 */
declare function BlzGetUnitDiceNumber(whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit
 * @param diceNumber
 * @param weaponIndex
 */
declare function BlzSetUnitDiceNumber(whichUnit: unit, diceNumber: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit
 * @param weaponIndex
 */
declare function BlzGetUnitDiceSides(whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit
 * @param diceSides
 * @param weaponIndex
 */
declare function BlzSetUnitDiceSides(whichUnit: unit, diceSides: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit
 * @param weaponIndex
 */
declare function BlzGetUnitAttackCooldown(whichUnit: unit, weaponIndex: integer): real;

/**
 * @param whichUnit
 * @param cooldown
 * @param weaponIndex
 */
declare function BlzSetUnitAttackCooldown(whichUnit: unit, cooldown: real, weaponIndex: integer): nothing;

/**
 * @param whichEffect
 * @param whichPlayer
 */
declare function BlzSetSpecialEffectColorByPlayer(whichEffect: effect, whichPlayer: player): nothing;

/**
 * @param whichEffect
 * @param r
 * @param g
 * @param b
 */
declare function BlzSetSpecialEffectColor(whichEffect: effect, r: integer, g: integer, b: integer): nothing;

/**
 * @param whichEffect
 * @param alpha
 */
declare function BlzSetSpecialEffectAlpha(whichEffect: effect, alpha: integer): nothing;

/**
 * @param whichEffect
 * @param scale
 */
declare function BlzSetSpecialEffectScale(whichEffect: effect, scale: real): nothing;

/**
 * @param whichEffect
 * @param x
 * @param y
 * @param z
 */
declare function BlzSetSpecialEffectPosition(whichEffect: effect, x: real, y: real, z: real): nothing;

/**
 * @param whichEffect
 * @param height
 */
declare function BlzSetSpecialEffectHeight(whichEffect: effect, height: real): nothing;

/**
 * @param whichEffect
 * @param timeScale
 */
declare function BlzSetSpecialEffectTimeScale(whichEffect: effect, timeScale: real): nothing;

/**
 * @param whichEffect
 * @param time
 */
declare function BlzSetSpecialEffectTime(whichEffect: effect, time: real): nothing;

/**
 * @param whichEffect
 * @param yaw
 * @param pitch
 * @param roll
 */
declare function BlzSetSpecialEffectOrientation(whichEffect: effect, yaw: real, pitch: real, roll: real): nothing;

/**
 * @param whichEffect
 * @param yaw
 */
declare function BlzSetSpecialEffectYaw(whichEffect: effect, yaw: real): nothing;

/**
 * @param whichEffect
 * @param pitch
 */
declare function BlzSetSpecialEffectPitch(whichEffect: effect, pitch: real): nothing;

/**
 * @param whichEffect
 * @param roll
 */
declare function BlzSetSpecialEffectRoll(whichEffect: effect, roll: real): nothing;

/**
 * @param whichEffect
 * @param x
 */
declare function BlzSetSpecialEffectX(whichEffect: effect, x: real): nothing;

/**
 * @param whichEffect
 * @param y
 */
declare function BlzSetSpecialEffectY(whichEffect: effect, y: real): nothing;

/**
 * @param whichEffect
 * @param z
 */
declare function BlzSetSpecialEffectZ(whichEffect: effect, z: real): nothing;

/**
 * @param whichEffect
 * @param loc
 */
declare function BlzSetSpecialEffectPositionLoc(whichEffect: effect, loc: location): nothing;

/**
 * @param whichEffect
 */
declare function BlzGetLocalSpecialEffectX(whichEffect: effect): real;

/**
 * @param whichEffect
 */
declare function BlzGetLocalSpecialEffectY(whichEffect: effect): real;

/**
 * @param whichEffect
 */
declare function BlzGetLocalSpecialEffectZ(whichEffect: effect): real;

/**
 * @param whichEffect
 */
declare function BlzSpecialEffectClearSubAnimations(whichEffect: effect): nothing;

/**
 * @param whichEffect
 * @param whichSubAnim
 */
declare function BlzSpecialEffectRemoveSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): nothing;

/**
 * @param whichEffect
 * @param whichSubAnim
 */
declare function BlzSpecialEffectAddSubAnimation(whichEffect: effect, whichSubAnim: subanimtype): nothing;

/**
 * @param whichEffect
 * @param whichAnim
 */
declare function BlzPlaySpecialEffect(whichEffect: effect, whichAnim: animtype): nothing;

/**
 * @param whichEffect
 * @param whichAnim
 * @param timeScale
 */
declare function BlzPlaySpecialEffectWithTimeScale(whichEffect: effect, whichAnim: animtype, timeScale: real): nothing;

/**
 * @param whichAnim
 */
declare function BlzGetAnimName(whichAnim: animtype): string;

/**
 * @param whichUnit
 */
declare function BlzGetUnitArmor(whichUnit: unit): real;

/**
 * @param whichUnit
 * @param armorAmount
 */
declare function BlzSetUnitArmor(whichUnit: unit, armorAmount: real): nothing;

/**
 * @param whichUnit
 * @param abilId
 * @param flag
 */
declare function BlzUnitHideAbility(whichUnit: unit, abilId: integer, flag: boolean): nothing;

/**
 * @param whichUnit
 * @param abilId
 * @param flag
 * @param hideUI
 */
declare function BlzUnitDisableAbility(whichUnit: unit, abilId: integer, flag: boolean, hideUI: boolean): nothing;

/**
 * @param whichUnit
 */
declare function BlzUnitCancelTimedLife(whichUnit: unit): nothing;

/**
 * @param whichUnit
 */
declare function BlzIsUnitSelectable(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function BlzIsUnitInvulnerable(whichUnit: unit): boolean;

/**
 * @param whichUnit
 */
declare function BlzUnitInterruptAttack(whichUnit: unit): nothing;

/**
 * @param whichUnit
 */
declare function BlzGetUnitCollisionSize(whichUnit: unit): real;

/**
 * @param abilId
 * @param level
 */
declare function BlzGetAbilityManaCost(abilId: integer, level: integer): integer;

/**
 * @param abilId
 * @param level
 */
declare function BlzGetAbilityCooldown(abilId: integer, level: integer): real;

/**
 * @param whichUnit
 * @param abilId
 * @param level
 * @param cooldown
 */
declare function BlzSetUnitAbilityCooldown(whichUnit: unit, abilId: integer, level: integer, cooldown: real): nothing;

/**
 * @param whichUnit
 * @param abilId
 * @param level
 */
declare function BlzGetUnitAbilityCooldown(whichUnit: unit, abilId: integer, level: integer): real;

/**
 * @param whichUnit
 * @param abilId
 */
declare function BlzGetUnitAbilityCooldownRemaining(whichUnit: unit, abilId: integer): real;

/**
 * @param whichUnit
 * @param abilCode
 */
declare function BlzEndUnitAbilityCooldown(whichUnit: unit, abilCode: integer): nothing;

/**
 * @param whichUnit
 * @param abilId
 * @param level
 */
declare function BlzGetUnitAbilityManaCost(whichUnit: unit, abilId: integer, level: integer): integer;

/**
 * @param whichUnit
 * @param abilId
 * @param level
 * @param manaCost
 */
declare function BlzSetUnitAbilityManaCost(whichUnit: unit, abilId: integer, level: integer, manaCost: integer): nothing;

/**
 * @param whichUnit
 */
declare function BlzGetLocalUnitZ(whichUnit: unit): real;

/**
 * @param whichPlayer
 * @param techid
 * @param levels
 */
declare function BlzDecPlayerTechResearched(whichPlayer: player, techid: integer, levels: integer): nothing;

/**
 * @param damage
 */
declare function BlzSetEventDamage(damage: real): nothing;

/**
 */
declare function BlzGetEventDamageTarget(): unit;

/**
 */
declare function BlzGetEventAttackType(): attacktype;

/**
 */
declare function BlzGetEventDamageType(): damagetype;

/**
 */
declare function BlzGetEventWeaponType(): weapontype;

/**
 * @param attackType
 */
declare function BlzSetEventAttackType(attackType: attacktype): boolean;

/**
 * @param damageType
 */
declare function BlzSetEventDamageType(damageType: damagetype): boolean;

/**
 * @param weaponType
 */
declare function BlzSetEventWeaponType(weaponType: weapontype): boolean;

/**
 * @param dataType
 * @param whichPlayer
 * @param param1
 * @param param2
 * @param param3
 * @param param4
 * @param param5
 * @param param6
 */
declare function RequestExtraIntegerData(dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): integer;

/**
 * @param dataType
 * @param whichPlayer
 * @param param1
 * @param param2
 * @param param3
 * @param param4
 * @param param5
 * @param param6
 */
declare function RequestExtraBooleanData(dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): boolean;

/**
 * @param dataType
 * @param whichPlayer
 * @param param1
 * @param param2
 * @param param3
 * @param param4
 * @param param5
 * @param param6
 */
declare function RequestExtraStringData(dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): string;

/**
 * @param dataType
 * @param whichPlayer
 * @param param1
 * @param param2
 * @param param3
 * @param param4
 * @param param5
 * @param param6
 */
declare function RequestExtraRealData(dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): real;

/**
 * @param whichUnit
 */
declare function BlzGetUnitZ(whichUnit: unit): real;

/**
 * @param enableSelection
 * @param enableSelectionCircle
 */
declare function BlzEnableSelections(enableSelection: boolean, enableSelectionCircle: boolean): nothing;

/**
 */
declare function BlzIsSelectionEnabled(): boolean;

/**
 */
declare function BlzIsSelectionCircleEnabled(): boolean;

/**
 * @param whichSetup
 * @param doPan
 * @param forcedDuration
 * @param easeInDuration
 * @param easeOutDuration
 * @param smoothFactor
 */
declare function BlzCameraSetupApplyForceDurationSmooth(whichSetup: camerasetup, doPan: boolean, forcedDuration: real, easeInDuration: real, easeOutDuration: real, smoothFactor: real): nothing;

/**
 * @param enable
 */
declare function BlzEnableTargetIndicator(enable: boolean): nothing;

/**
 */
declare function BlzIsTargetIndicatorEnabled(): boolean;

/**
 * @param frameType
 * @param index
 */
declare function BlzGetOriginFrame(frameType: originframetype, index: integer): framehandle;

/**
 * @param enable
 */
declare function BlzEnableUIAutoPosition(enable: boolean): nothing;

/**
 * @param enable
 */
declare function BlzHideOriginFrames(enable: boolean): nothing;

/**
 * @param a
 * @param r
 * @param g
 * @param b
 */
declare function BlzConvertColor(a: integer, r: integer, g: integer, b: integer): integer;

/**
 * @param TOCFile
 */
declare function BlzLoadTOCFile(TOCFile: string): boolean;

/**
 * @param name
 * @param owner
 * @param priority
 * @param createContext
 */
declare function BlzCreateFrame(name: string, owner: framehandle, priority: integer, createContext: integer): framehandle;

/**
 * @param name
 * @param owner
 * @param createContext
 */
declare function BlzCreateSimpleFrame(name: string, owner: framehandle, createContext: integer): framehandle;

/**
 * @param typeName
 * @param name
 * @param owner
 * @param inherits
 * @param createContext
 */
declare function BlzCreateFrameByType(typeName: string, name: string, owner: framehandle, inherits: string, createContext: integer): framehandle;

/**
 * @param frame
 */
declare function BlzDestroyFrame(frame: framehandle): nothing;

/**
 * @param frame
 * @param point
 * @param relative
 * @param relativePoint
 * @param x
 * @param y
 */
declare function BlzFrameSetPoint(frame: framehandle, point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: real, y: real): nothing;

/**
 * @param frame
 * @param point
 * @param x
 * @param y
 */
declare function BlzFrameSetAbsPoint(frame: framehandle, point: framepointtype, x: real, y: real): nothing;

/**
 * @param frame
 */
declare function BlzFrameClearAllPoints(frame: framehandle): nothing;

/**
 * @param frame
 * @param relative
 */
declare function BlzFrameSetAllPoints(frame: framehandle, relative: framehandle): nothing;

/**
 * @param frame
 * @param visible
 */
declare function BlzFrameSetVisible(frame: framehandle, visible: boolean): nothing;

/**
 * @param frame
 */
declare function BlzFrameIsVisible(frame: framehandle): boolean;

/**
 * @param name
 * @param createContext
 */
declare function BlzGetFrameByName(name: string, createContext: integer): framehandle;

/**
 * @param frame
 */
declare function BlzFrameGetName(frame: framehandle): string;

/**
 * @param frame
 */
declare function BlzFrameClick(frame: framehandle): nothing;

/**
 * @param frame
 * @param text
 */
declare function BlzFrameSetText(frame: framehandle, text: string): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetText(frame: framehandle): string;

/**
 * @param frame
 * @param size
 */
declare function BlzFrameSetTextSizeLimit(frame: framehandle, size: integer): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetTextSizeLimit(frame: framehandle): integer;

/**
 * @param frame
 * @param color
 */
declare function BlzFrameSetTextColor(frame: framehandle, color: integer): nothing;

/**
 * @param frame
 * @param flag
 */
declare function BlzFrameSetFocus(frame: framehandle, flag: boolean): nothing;

/**
 * @param frame
 * @param modelFile
 * @param cameraIndex
 */
declare function BlzFrameSetModel(frame: framehandle, modelFile: string, cameraIndex: integer): nothing;

/**
 * @param frame
 * @param enabled
 */
declare function BlzFrameSetEnable(frame: framehandle, enabled: boolean): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetEnable(frame: framehandle): boolean;

/**
 * @param frame
 * @param alpha
 */
declare function BlzFrameSetAlpha(frame: framehandle, alpha: integer): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetAlpha(frame: framehandle): integer;

/**
 * @param frame
 * @param primaryProp
 * @param flags
 */
declare function BlzFrameSetSpriteAnimate(frame: framehandle, primaryProp: integer, flags: integer): nothing;

/**
 * @param frame
 * @param texFile
 * @param flag
 * @param blend
 */
declare function BlzFrameSetTexture(frame: framehandle, texFile: string, flag: integer, blend: boolean): nothing;

/**
 * @param frame
 * @param scale
 */
declare function BlzFrameSetScale(frame: framehandle, scale: real): nothing;

/**
 * @param frame
 * @param tooltip
 */
declare function BlzFrameSetTooltip(frame: framehandle, tooltip: framehandle): nothing;

/**
 * @param frame
 * @param enable
 */
declare function BlzFrameCageMouse(frame: framehandle, enable: boolean): nothing;

/**
 * @param frame
 * @param value
 */
declare function BlzFrameSetValue(frame: framehandle, value: real): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetValue(frame: framehandle): real;

/**
 * @param frame
 * @param minValue
 * @param maxValue
 */
declare function BlzFrameSetMinMaxValue(frame: framehandle, minValue: real, maxValue: real): nothing;

/**
 * @param frame
 * @param stepSize
 */
declare function BlzFrameSetStepSize(frame: framehandle, stepSize: real): nothing;

/**
 * @param frame
 * @param width
 * @param height
 */
declare function BlzFrameSetSize(frame: framehandle, width: real, height: real): nothing;

/**
 * @param frame
 * @param color
 */
declare function BlzFrameSetVertexColor(frame: framehandle, color: integer): nothing;

/**
 * @param frame
 * @param level
 */
declare function BlzFrameSetLevel(frame: framehandle, level: integer): nothing;

/**
 * @param frame
 * @param parent
 */
declare function BlzFrameSetParent(frame: framehandle, parent: framehandle): nothing;

/**
 * @param frame
 */
declare function BlzFrameGetParent(frame: framehandle): framehandle;

/**
 * @param frame
 */
declare function BlzFrameGetHeight(frame: framehandle): real;

/**
 * @param frame
 */
declare function BlzFrameGetWidth(frame: framehandle): real;

/**
 * @param frame
 * @param fileName
 * @param height
 * @param flags
 */
declare function BlzFrameSetFont(frame: framehandle, fileName: string, height: real, flags: integer): nothing;

/**
 * @param frame
 * @param vert
 * @param horz
 */
declare function BlzFrameSetTextAlignment(frame: framehandle, vert: textaligntype, horz: textaligntype): nothing;

/**
 * @param whichTrigger
 * @param frame
 * @param eventId
 */
declare function BlzTriggerRegisterFrameEvent(whichTrigger: trigger, frame: framehandle, eventId: frameeventtype): event;

/**
 */
declare function BlzGetTriggerFrame(): framehandle;

/**
 */
declare function BlzGetTriggerFrameEvent(): frameeventtype;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param prefix
 * @param fromServer
 */
declare function BlzTriggerRegisterPlayerSyncEvent(whichTrigger: trigger, whichPlayer: player, prefix: string, fromServer: boolean): event;

/**
 * @param prefix
 * @param data
 */
declare function BlzSendSyncData(prefix: string, data: string): boolean;

/**
 */
declare function BlzGetTriggerSyncPrefix(): string;

/**
 */
declare function BlzGetTriggerSyncData(): string;

/**
 * @param whichTrigger
 * @param whichPlayer
 * @param key
 * @param metaKey
 * @param keyDown
 */
declare function BlzTriggerRegisterPlayerKeyEvent(whichTrigger: trigger, whichPlayer: player, key: oskeytype, metaKey: integer, keyDown: boolean): event;

/**
 */
declare function BlzGetTriggerPlayerKey(): oskeytype;

/**
 */
declare function BlzGetTriggerPlayerMetaKey(): integer;

/**
 */
declare function BlzGetTriggerPlayerIsKeyDown(): boolean;

/**
 * @param enable
 */
declare function BlzEnableCursor(enable: boolean): nothing;

/**
 * @param x
 * @param y
 */
declare function BlzSetMousePos(x: integer, y: integer): nothing;

/**
 */
declare function BlzGetLocalClientWidth(): integer;

/**
 */
declare function BlzGetLocalClientHeight(): integer;

/**
 */
declare function BlzIsLocalClientActive(): boolean;

/**
 */
declare function BlzGetMouseFocusUnit(): unit;

/**
 * @param texFile
 */
declare function BlzChangeMinimapTerrainTex(texFile: string): boolean;

/**
 */
declare function BlzGetLocale(): string;

/**
 * @param whichEffect
 */
declare function BlzGetSpecialEffectScale(whichEffect: effect): real;

/**
 * @param whichEffect
 * @param x
 * @param y
 * @param z
 */
declare function BlzSetSpecialEffectMatrixScale(whichEffect: effect, x: real, y: real, z: real): nothing;

/**
 * @param whichEffect
 */
declare function BlzResetSpecialEffectMatrix(whichEffect: effect): nothing;

/**
 * @param whichUnit
 * @param abilId
 */
declare function BlzGetUnitAbility(whichUnit: unit, abilId: integer): ability;

/**
 * @param whichUnit
 * @param index
 */
declare function BlzGetUnitAbilityByIndex(whichUnit: unit, index: integer): ability;

/**
 * @param whichPlayer
 * @param recipient
 * @param message
 */
declare function BlzDisplayChatMessage(whichPlayer: player, recipient: integer, message: string): nothing;

/**
 * @param whichUnit
 * @param flag
 */
declare function BlzPauseUnitEx(whichUnit: unit, flag: boolean): nothing;

/**
 * @param x
 * @param y
 */
declare function BlzBitOr(x: integer, y: integer): integer;

/**
 * @param x
 * @param y
 */
declare function BlzBitAnd(x: integer, y: integer): integer;

/**
 * @param x
 * @param y
 */
declare function BlzBitXor(x: integer, y: integer): integer;

/**
 * @param whichAbility
 * @param whichField
 */
declare function BlzGetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield): boolean;

/**
 * @param whichAbility
 * @param whichField
 */
declare function BlzGetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield): integer;

/**
 * @param whichAbility
 * @param whichField
 */
declare function BlzGetAbilityRealField(whichAbility: ability, whichField: abilityrealfield): real;

/**
 * @param whichAbility
 * @param whichField
 */
declare function BlzGetAbilityStringField(whichAbility: ability, whichField: abilitystringfield): string;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 */
declare function BlzGetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 */
declare function BlzGetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: integer): integer;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 */
declare function BlzGetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: integer): real;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 */
declare function BlzGetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: integer): string;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 */
declare function BlzGetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 */
declare function BlzGetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer): integer;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 */
declare function BlzGetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer): real;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 */
declare function BlzGetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer): string;

/**
 * @param whichAbility
 * @param whichField
 * @param value
 */
declare function BlzSetAbilityBooleanField(whichAbility: ability, whichField: abilitybooleanfield, value: boolean): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param value
 */
declare function BlzSetAbilityIntegerField(whichAbility: ability, whichField: abilityintegerfield, value: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param value
 */
declare function BlzSetAbilityRealField(whichAbility: ability, whichField: abilityrealfield, value: real): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param value
 */
declare function BlzSetAbilityStringField(whichAbility: ability, whichField: abilitystringfield, value: string): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzSetAbilityBooleanLevelField(whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzSetAbilityIntegerLevelField(whichAbility: ability, whichField: abilityintegerlevelfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzSetAbilityRealLevelField(whichAbility: ability, whichField: abilityreallevelfield, level: integer, value: real): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzSetAbilityStringLevelField(whichAbility: ability, whichField: abilitystringlevelfield, level: integer, value: string): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 * @param value
 */
declare function BlzSetAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer, value: boolean): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 * @param value
 */
declare function BlzSetAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer, value: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 * @param value
 */
declare function BlzSetAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer, value: real): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param index
 * @param value
 */
declare function BlzSetAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer, value: string): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzAddAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzAddAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzAddAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzAddAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzRemoveAbilityBooleanLevelArrayField(whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzRemoveAbilityIntegerLevelArrayField(whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzRemoveAbilityRealLevelArrayField(whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean;

/**
 * @param whichAbility
 * @param whichField
 * @param level
 * @param value
 */
declare function BlzRemoveAbilityStringLevelArrayField(whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean;

/**
 * @param whichItem
 * @param index
 */
declare function BlzGetItemAbilityByIndex(whichItem: item, index: integer): ability;

/**
 * @param whichItem
 * @param abilCode
 */
declare function BlzGetItemAbility(whichItem: item, abilCode: integer): ability;

/**
 * @param whichItem
 * @param abilCode
 */
declare function BlzItemAddAbility(whichItem: item, abilCode: integer): boolean;

/**
 * @param whichItem
 * @param whichField
 */
declare function BlzGetItemBooleanField(whichItem: item, whichField: itembooleanfield): boolean;

/**
 * @param whichItem
 * @param whichField
 */
declare function BlzGetItemIntegerField(whichItem: item, whichField: itemintegerfield): integer;

/**
 * @param whichItem
 * @param whichField
 */
declare function BlzGetItemRealField(whichItem: item, whichField: itemrealfield): real;

/**
 * @param whichItem
 * @param whichField
 */
declare function BlzGetItemStringField(whichItem: item, whichField: itemstringfield): string;

/**
 * @param whichItem
 * @param whichField
 * @param value
 */
declare function BlzSetItemBooleanField(whichItem: item, whichField: itembooleanfield, value: boolean): boolean;

/**
 * @param whichItem
 * @param whichField
 * @param value
 */
declare function BlzSetItemIntegerField(whichItem: item, whichField: itemintegerfield, value: integer): boolean;

/**
 * @param whichItem
 * @param whichField
 * @param value
 */
declare function BlzSetItemRealField(whichItem: item, whichField: itemrealfield, value: real): boolean;

/**
 * @param whichItem
 * @param whichField
 * @param value
 */
declare function BlzSetItemStringField(whichItem: item, whichField: itemstringfield, value: string): boolean;

/**
 * @param whichItem
 * @param abilCode
 */
declare function BlzItemRemoveAbility(whichItem: item, abilCode: integer): boolean;

/**
 * @param whichUnit
 * @param whichField
 */
declare function BlzGetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield): boolean;

/**
 * @param whichUnit
 * @param whichField
 */
declare function BlzGetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield): integer;

/**
 * @param whichUnit
 * @param whichField
 */
declare function BlzGetUnitRealField(whichUnit: unit, whichField: unitrealfield): real;

/**
 * @param whichUnit
 * @param whichField
 */
declare function BlzGetUnitStringField(whichUnit: unit, whichField: unitstringfield): string;

/**
 * @param whichUnit
 * @param whichField
 * @param value
 */
declare function BlzSetUnitBooleanField(whichUnit: unit, whichField: unitbooleanfield, value: boolean): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param value
 */
declare function BlzSetUnitIntegerField(whichUnit: unit, whichField: unitintegerfield, value: integer): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param value
 */
declare function BlzSetUnitRealField(whichUnit: unit, whichField: unitrealfield, value: real): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param value
 */
declare function BlzSetUnitStringField(whichUnit: unit, whichField: unitstringfield, value: string): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 */
declare function BlzGetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: integer): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 */
declare function BlzGetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: integer): integer;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 */
declare function BlzGetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: integer): real;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 */
declare function BlzGetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: integer): string;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 * @param value
 */
declare function BlzSetUnitWeaponBooleanField(whichUnit: unit, whichField: unitweaponbooleanfield, index: integer, value: boolean): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 * @param value
 */
declare function BlzSetUnitWeaponIntegerField(whichUnit: unit, whichField: unitweaponintegerfield, index: integer, value: integer): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 * @param value
 */
declare function BlzSetUnitWeaponRealField(whichUnit: unit, whichField: unitweaponrealfield, index: integer, value: real): boolean;

/**
 * @param whichUnit
 * @param whichField
 * @param index
 * @param value
 */
declare function BlzSetUnitWeaponStringField(whichUnit: unit, whichField: unitweaponstringfield, index: integer, value: string): boolean;