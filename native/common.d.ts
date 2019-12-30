declare type nothing = void;
declare type integer = number;
declare type real = number;
declare type int = integer;
declare type float = real;
declare type code = () => void;

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
 * @param i integer
 */
declare function ConvertRace(this: void, i: integer): race;

/**
 * @param i integer
 */
declare function ConvertAllianceType(this: void, i: integer): alliancetype;

/**
 * @param i integer
 */
declare function ConvertRacePref(this: void, i: integer): racepreference;

/**
 * @param i integer
 */
declare function ConvertIGameState(this: void, i: integer): igamestate;

/**
 * @param i integer
 */
declare function ConvertFGameState(this: void, i: integer): fgamestate;

/**
 * @param i integer
 */
declare function ConvertPlayerState(this: void, i: integer): playerstate;

/**
 * @param i integer
 */
declare function ConvertPlayerScore(this: void, i: integer): playerscore;

/**
 * @param i integer
 */
declare function ConvertPlayerGameResult(this: void, i: integer): playergameresult;

/**
 * @param i integer
 */
declare function ConvertUnitState(this: void, i: integer): unitstate;

/**
 * @param i integer
 */
declare function ConvertAIDifficulty(this: void, i: integer): aidifficulty;

/**
 * @param i integer
 */
declare function ConvertGameEvent(this: void, i: integer): gameevent;

/**
 * @param i integer
 */
declare function ConvertPlayerEvent(this: void, i: integer): playerevent;

/**
 * @param i integer
 */
declare function ConvertPlayerUnitEvent(this: void, i: integer): playerunitevent;

/**
 * @param i integer
 */
declare function ConvertWidgetEvent(this: void, i: integer): widgetevent;

/**
 * @param i integer
 */
declare function ConvertDialogEvent(this: void, i: integer): dialogevent;

/**
 * @param i integer
 */
declare function ConvertUnitEvent(this: void, i: integer): unitevent;

/**
 * @param i integer
 */
declare function ConvertLimitOp(this: void, i: integer): limitop;

/**
 * @param i integer
 */
declare function ConvertUnitType(this: void, i: integer): unittype;

/**
 * @param i integer
 */
declare function ConvertGameSpeed(this: void, i: integer): gamespeed;

/**
 * @param i integer
 */
declare function ConvertPlacement(this: void, i: integer): placement;

/**
 * @param i integer
 */
declare function ConvertStartLocPrio(this: void, i: integer): startlocprio;

/**
 * @param i integer
 */
declare function ConvertGameDifficulty(this: void, i: integer): gamedifficulty;

/**
 * @param i integer
 */
declare function ConvertGameType(this: void, i: integer): gametype;

/**
 * @param i integer
 */
declare function ConvertMapFlag(this: void, i: integer): mapflag;

/**
 * @param i integer
 */
declare function ConvertMapVisibility(this: void, i: integer): mapvisibility;

/**
 * @param i integer
 */
declare function ConvertMapSetting(this: void, i: integer): mapsetting;

/**
 * @param i integer
 */
declare function ConvertMapDensity(this: void, i: integer): mapdensity;

/**
 * @param i integer
 */
declare function ConvertMapControl(this: void, i: integer): mapcontrol;

/**
 * @param i integer
 */
declare function ConvertPlayerColor(this: void, i: integer): playercolor;

/**
 * @param i integer
 */
declare function ConvertPlayerSlotState(this: void, i: integer): playerslotstate;

/**
 * @param i integer
 */
declare function ConvertVolumeGroup(this: void, i: integer): volumegroup;

/**
 * @param i integer
 */
declare function ConvertCameraField(this: void, i: integer): camerafield;

/**
 * @param i integer
 */
declare function ConvertBlendMode(this: void, i: integer): blendmode;

/**
 * @param i integer
 */
declare function ConvertRarityControl(this: void, i: integer): raritycontrol;

/**
 * @param i integer
 */
declare function ConvertTexMapFlags(this: void, i: integer): texmapflags;

/**
 * @param i integer
 */
declare function ConvertFogState(this: void, i: integer): fogstate;

/**
 * @param i integer
 */
declare function ConvertEffectType(this: void, i: integer): effecttype;

/**
 * @param i integer
 */
declare function ConvertVersion(this: void, i: integer): version;

/**
 * @param i integer
 */
declare function ConvertItemType(this: void, i: integer): itemtype;

/**
 * @param i integer
 */
declare function ConvertAttackType(this: void, i: integer): attacktype;

/**
 * @param i integer
 */
declare function ConvertDamageType(this: void, i: integer): damagetype;

/**
 * @param i integer
 */
declare function ConvertWeaponType(this: void, i: integer): weapontype;

/**
 * @param i integer
 */
declare function ConvertSoundType(this: void, i: integer): soundtype;

/**
 * @param i integer
 */
declare function ConvertPathingType(this: void, i: integer): pathingtype;

/**
 * @param i integer
 */
declare function ConvertMouseButtonType(this: void, i: integer): mousebuttontype;

/**
 * @param i integer
 */
declare function ConvertAnimType(this: void, i: integer): animtype;

/**
 * @param i integer
 */
declare function ConvertSubAnimType(this: void, i: integer): subanimtype;

/**
 * @param i integer
 */
declare function ConvertOriginFrameType(this: void, i: integer): originframetype;

/**
 * @param i integer
 */
declare function ConvertFramePointType(this: void, i: integer): framepointtype;

/**
 * @param i integer
 */
declare function ConvertTextAlignType(this: void, i: integer): textaligntype;

/**
 * @param i integer
 */
declare function ConvertFrameEventType(this: void, i: integer): frameeventtype;

/**
 * @param i integer
 */
declare function ConvertOsKeyType(this: void, i: integer): oskeytype;

/**
 * @param i integer
 */
declare function ConvertAbilityIntegerField(this: void, i: integer): abilityintegerfield;

/**
 * @param i integer
 */
declare function ConvertAbilityRealField(this: void, i: integer): abilityrealfield;

/**
 * @param i integer
 */
declare function ConvertAbilityBooleanField(this: void, i: integer): abilitybooleanfield;

/**
 * @param i integer
 */
declare function ConvertAbilityStringField(this: void, i: integer): abilitystringfield;

/**
 * @param i integer
 */
declare function ConvertAbilityIntegerLevelField(this: void, i: integer): abilityintegerlevelfield;

/**
 * @param i integer
 */
declare function ConvertAbilityRealLevelField(this: void, i: integer): abilityreallevelfield;

/**
 * @param i integer
 */
declare function ConvertAbilityBooleanLevelField(this: void, i: integer): abilitybooleanlevelfield;

/**
 * @param i integer
 */
declare function ConvertAbilityStringLevelField(this: void, i: integer): abilitystringlevelfield;

/**
 * @param i integer
 */
declare function ConvertAbilityIntegerLevelArrayField(this: void, i: integer): abilityintegerlevelarrayfield;

/**
 * @param i integer
 */
declare function ConvertAbilityRealLevelArrayField(this: void, i: integer): abilityreallevelarrayfield;

/**
 * @param i integer
 */
declare function ConvertAbilityBooleanLevelArrayField(this: void, i: integer): abilitybooleanlevelarrayfield;

/**
 * @param i integer
 */
declare function ConvertAbilityStringLevelArrayField(this: void, i: integer): abilitystringlevelarrayfield;

/**
 * @param i integer
 */
declare function ConvertUnitIntegerField(this: void, i: integer): unitintegerfield;

/**
 * @param i integer
 */
declare function ConvertUnitRealField(this: void, i: integer): unitrealfield;

/**
 * @param i integer
 */
declare function ConvertUnitBooleanField(this: void, i: integer): unitbooleanfield;

/**
 * @param i integer
 */
declare function ConvertUnitStringField(this: void, i: integer): unitstringfield;

/**
 * @param i integer
 */
declare function ConvertUnitWeaponIntegerField(this: void, i: integer): unitweaponintegerfield;

/**
 * @param i integer
 */
declare function ConvertUnitWeaponRealField(this: void, i: integer): unitweaponrealfield;

/**
 * @param i integer
 */
declare function ConvertUnitWeaponBooleanField(this: void, i: integer): unitweaponbooleanfield;

/**
 * @param i integer
 */
declare function ConvertUnitWeaponStringField(this: void, i: integer): unitweaponstringfield;

/**
 * @param i integer
 */
declare function ConvertItemIntegerField(this: void, i: integer): itemintegerfield;

/**
 * @param i integer
 */
declare function ConvertItemRealField(this: void, i: integer): itemrealfield;

/**
 * @param i integer
 */
declare function ConvertItemBooleanField(this: void, i: integer): itembooleanfield;

/**
 * @param i integer
 */
declare function ConvertItemStringField(this: void, i: integer): itemstringfield;

/**
 * @param i integer
 */
declare function ConvertMoveType(this: void, i: integer): movetype;

/**
 * @param i integer
 */
declare function ConvertTargetFlag(this: void, i: integer): targetflag;

/**
 * @param i integer
 */
declare function ConvertArmorType(this: void, i: integer): armortype;

/**
 * @param i integer
 */
declare function ConvertHeroAttribute(this: void, i: integer): heroattribute;

/**
 * @param i integer
 */
declare function ConvertDefenseType(this: void, i: integer): defensetype;

/**
 * @param i integer
 */
declare function ConvertRegenType(this: void, i: integer): regentype;

/**
 * @param i integer
 */
declare function ConvertUnitCategory(this: void, i: integer): unitcategory;

/**
 * @param i integer
 */
declare function ConvertPathingFlag(this: void, i: integer): pathingflag;

/**
 * @param orderIdString string
 */
declare function OrderId(this: void, orderIdString: string): integer;

/**
 * @param orderId integer
 */
declare function OrderId2String(this: void, orderId: integer): string;

/**
 * @param unitIdString string
 */
declare function UnitId(this: void, unitIdString: string): integer;

/**
 * @param unitId integer
 */
declare function UnitId2String(this: void, unitId: integer): string;

/**
 * @param abilityIdString string
 */
declare function AbilityId(this: void, abilityIdString: string): integer;

/**
 * @param abilityId integer
 */
declare function AbilityId2String(this: void, abilityId: integer): string;

/**
 * @param objectId integer
 */
declare function GetObjectName(this: void, objectId: integer): string;

/**
 */
declare function GetBJMaxPlayers(this: void): integer;

/**
 */
declare function GetBJPlayerNeutralVictim(this: void): integer;

/**
 */
declare function GetBJPlayerNeutralExtra(this: void): integer;

/**
 */
declare function GetBJMaxPlayerSlots(this: void): integer;

/**
 */
declare function GetPlayerNeutralPassive(this: void): integer;

/**
 */
declare function GetPlayerNeutralAggressive(this: void): integer;

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
 * @param degrees real
 */
declare function Deg2Rad(this: void, degrees: real): real;

/**
 * @param radians real
 */
declare function Rad2Deg(this: void, radians: real): real;

/**
 * @param radians real
 */
declare function Sin(this: void, radians: real): real;

/**
 * @param radians real
 */
declare function Cos(this: void, radians: real): real;

/**
 * @param radians real
 */
declare function Tan(this: void, radians: real): real;

/**
 * @param y real
 */
declare function Asin(this: void, y: real): real;

/**
 * @param x real
 */
declare function Acos(this: void, x: real): real;

/**
 * @param x real
 */
declare function Atan(this: void, x: real): real;

/**
 * @param y real
 * @param x real
 */
declare function Atan2(this: void, y: real, x: real): real;

/**
 * @param x real
 */
declare function SquareRoot(this: void, x: real): real;

/**
 * @param x real
 * @param power real
 */
declare function Pow(this: void, x: real, power: real): real;

/**
 * @param i integer
 */
declare function I2R(this: void, i: integer): real;

/**
 * @param r real
 */
declare function R2I(this: void, r: real): integer;

/**
 * @param i integer
 */
declare function I2S(this: void, i: integer): string;

/**
 * @param r real
 */
declare function R2S(this: void, r: real): string;

/**
 * @param r real
 * @param width integer
 * @param precision integer
 */
declare function R2SW(this: void, r: real, width: integer, precision: integer): string;

/**
 * @param s string
 */
declare function S2I(this: void, s: string): integer;

/**
 * @param s string
 */
declare function S2R(this: void, s: string): real;

/**
 * @param h handle
 */
declare function GetHandleId(this: void, h: handle): integer;

/**
 * @param source string
 * @param start integer
 * @param end integer
 */
declare function SubString(this: void, source: string, start: integer, end: integer): string;

/**
 * @param s string
 */
declare function StringLength(this: void, s: string): integer;

/**
 * @param source string
 * @param upper boolean
 */
declare function StringCase(this: void, source: string, upper: boolean): string;

/**
 * @param s string
 */
declare function StringHash(this: void, s: string): integer;

/**
 * @param source string
 */
declare function GetLocalizedString(this: void, source: string): string;

/**
 * @param source string
 */
declare function GetLocalizedHotkey(this: void, source: string): integer;

/**
 * @param name string
 */
declare function SetMapName(this: void, name: string): nothing;

/**
 * @param description string
 */
declare function SetMapDescription(this: void, description: string): nothing;

/**
 * @param teamcount integer
 */
declare function SetTeams(this: void, teamcount: integer): nothing;

/**
 * @param playercount integer
 */
declare function SetPlayers(this: void, playercount: integer): nothing;

/**
 * @param whichStartLoc integer
 * @param x real
 * @param y real
 */
declare function DefineStartLocation(this: void, whichStartLoc: integer, x: real, y: real): nothing;

/**
 * @param whichStartLoc integer
 * @param whichLocation location
 */
declare function DefineStartLocationLoc(this: void, whichStartLoc: integer, whichLocation: location): nothing;

/**
 * @param whichStartLoc integer
 * @param prioSlotCount integer
 */
declare function SetStartLocPrioCount(this: void, whichStartLoc: integer, prioSlotCount: integer): nothing;

/**
 * @param whichStartLoc integer
 * @param prioSlotIndex integer
 * @param otherStartLocIndex integer
 * @param priority startlocprio
 */
declare function SetStartLocPrio(this: void, whichStartLoc: integer, prioSlotIndex: integer, otherStartLocIndex: integer, priority: startlocprio): nothing;

/**
 * @param whichStartLoc integer
 * @param prioSlotIndex integer
 */
declare function GetStartLocPrioSlot(this: void, whichStartLoc: integer, prioSlotIndex: integer): integer;

/**
 * @param whichStartLoc integer
 * @param prioSlotIndex integer
 */
declare function GetStartLocPrio(this: void, whichStartLoc: integer, prioSlotIndex: integer): startlocprio;

/**
 * @param whichGameType gametype
 * @param value boolean
 */
declare function SetGameTypeSupported(this: void, whichGameType: gametype, value: boolean): nothing;

/**
 * @param whichMapFlag mapflag
 * @param value boolean
 */
declare function SetMapFlag(this: void, whichMapFlag: mapflag, value: boolean): nothing;

/**
 * @param whichPlacementType placement
 */
declare function SetGamePlacement(this: void, whichPlacementType: placement): nothing;

/**
 * @param whichspeed gamespeed
 */
declare function SetGameSpeed(this: void, whichspeed: gamespeed): nothing;

/**
 * @param whichdifficulty gamedifficulty
 */
declare function SetGameDifficulty(this: void, whichdifficulty: gamedifficulty): nothing;

/**
 * @param whichdensity mapdensity
 */
declare function SetResourceDensity(this: void, whichdensity: mapdensity): nothing;

/**
 * @param whichdensity mapdensity
 */
declare function SetCreatureDensity(this: void, whichdensity: mapdensity): nothing;

/**
 */
declare function GetTeams(this: void): integer;

/**
 */
declare function GetPlayers(this: void): integer;

/**
 * @param whichGameType gametype
 */
declare function IsGameTypeSupported(this: void, whichGameType: gametype): boolean;

/**
 */
declare function GetGameTypeSelected(this: void): gametype;

/**
 * @param whichMapFlag mapflag
 */
declare function IsMapFlagSet(this: void, whichMapFlag: mapflag): boolean;

/**
 */
declare function GetGamePlacement(this: void): placement;

/**
 */
declare function GetGameSpeed(this: void): gamespeed;

/**
 */
declare function GetGameDifficulty(this: void): gamedifficulty;

/**
 */
declare function GetResourceDensity(this: void): mapdensity;

/**
 */
declare function GetCreatureDensity(this: void): mapdensity;

/**
 * @param whichStartLocation integer
 */
declare function GetStartLocationX(this: void, whichStartLocation: integer): real;

/**
 * @param whichStartLocation integer
 */
declare function GetStartLocationY(this: void, whichStartLocation: integer): real;

/**
 * @param whichStartLocation integer
 */
declare function GetStartLocationLoc(this: void, whichStartLocation: integer): location;

/**
 * @param whichPlayer player
 * @param whichTeam integer
 */
declare function SetPlayerTeam(this: void, whichPlayer: player, whichTeam: integer): nothing;

/**
 * @param whichPlayer player
 * @param startLocIndex integer
 */
declare function SetPlayerStartLocation(this: void, whichPlayer: player, startLocIndex: integer): nothing;

/**
 * @param whichPlayer player
 * @param startLocIndex integer
 */
declare function ForcePlayerStartLocation(this: void, whichPlayer: player, startLocIndex: integer): nothing;

/**
 * @param whichPlayer player
 * @param color playercolor
 */
declare function SetPlayerColor(this: void, whichPlayer: player, color: playercolor): nothing;

/**
 * @param sourcePlayer player
 * @param otherPlayer player
 * @param whichAllianceSetting alliancetype
 * @param value boolean
 */
declare function SetPlayerAlliance(this: void, sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype, value: boolean): nothing;

/**
 * @param sourcePlayer player
 * @param otherPlayer player
 * @param whichResource playerstate
 * @param rate integer
 */
declare function SetPlayerTaxRate(this: void, sourcePlayer: player, otherPlayer: player, whichResource: playerstate, rate: integer): nothing;

/**
 * @param whichPlayer player
 * @param whichRacePreference racepreference
 */
declare function SetPlayerRacePreference(this: void, whichPlayer: player, whichRacePreference: racepreference): nothing;

/**
 * @param whichPlayer player
 * @param value boolean
 */
declare function SetPlayerRaceSelectable(this: void, whichPlayer: player, value: boolean): nothing;

/**
 * @param whichPlayer player
 * @param controlType mapcontrol
 */
declare function SetPlayerController(this: void, whichPlayer: player, controlType: mapcontrol): nothing;

/**
 * @param whichPlayer player
 * @param name string
 */
declare function SetPlayerName(this: void, whichPlayer: player, name: string): nothing;

/**
 * @param whichPlayer player
 * @param flag boolean
 */
declare function SetPlayerOnScoreScreen(this: void, whichPlayer: player, flag: boolean): nothing;

/**
 * @param whichPlayer player
 */
declare function GetPlayerTeam(this: void, whichPlayer: player): integer;

/**
 * @param whichPlayer player
 */
declare function GetPlayerStartLocation(this: void, whichPlayer: player): integer;

/**
 * @param whichPlayer player
 */
declare function GetPlayerColor(this: void, whichPlayer: player): playercolor;

/**
 * @param whichPlayer player
 */
declare function GetPlayerSelectable(this: void, whichPlayer: player): boolean;

/**
 * @param whichPlayer player
 */
declare function GetPlayerController(this: void, whichPlayer: player): mapcontrol;

/**
 * @param whichPlayer player
 */
declare function GetPlayerSlotState(this: void, whichPlayer: player): playerslotstate;

/**
 * @param sourcePlayer player
 * @param otherPlayer player
 * @param whichResource playerstate
 */
declare function GetPlayerTaxRate(this: void, sourcePlayer: player, otherPlayer: player, whichResource: playerstate): integer;

/**
 * @param whichPlayer player
 * @param pref racepreference
 */
declare function IsPlayerRacePrefSet(this: void, whichPlayer: player, pref: racepreference): boolean;

/**
 * @param whichPlayer player
 */
declare function GetPlayerName(this: void, whichPlayer: player): string;

/**
 */
declare function CreateTimer(this: void): timer;

/**
 * @param whichTimer timer
 */
declare function DestroyTimer(this: void, whichTimer: timer): nothing;

/**
 * @param whichTimer timer
 * @param timeout real
 * @param periodic boolean
 * @param handlerFunc code
 */
declare function TimerStart(this: void, whichTimer: timer, timeout: real, periodic: boolean, handlerFunc: code): nothing;

/**
 * @param whichTimer timer
 */
declare function TimerGetElapsed(this: void, whichTimer: timer): real;

/**
 * @param whichTimer timer
 */
declare function TimerGetRemaining(this: void, whichTimer: timer): real;

/**
 * @param whichTimer timer
 */
declare function TimerGetTimeout(this: void, whichTimer: timer): real;

/**
 * @param whichTimer timer
 */
declare function PauseTimer(this: void, whichTimer: timer): nothing;

/**
 * @param whichTimer timer
 */
declare function ResumeTimer(this: void, whichTimer: timer): nothing;

/**
 */
declare function GetExpiredTimer(this: void): timer;

/**
 */
declare function CreateGroup(this: void): group;

/**
 * @param whichGroup group
 */
declare function DestroyGroup(this: void, whichGroup: group): nothing;

/**
 * @param whichGroup group
 * @param whichUnit unit
 */
declare function GroupAddUnit(this: void, whichGroup: group, whichUnit: unit): boolean;

/**
 * @param whichGroup group
 * @param whichUnit unit
 */
declare function GroupRemoveUnit(this: void, whichGroup: group, whichUnit: unit): boolean;

/**
 * @param whichGroup group
 * @param addGroup group
 */
declare function BlzGroupAddGroupFast(this: void, whichGroup: group, addGroup: group): integer;

/**
 * @param whichGroup group
 * @param removeGroup group
 */
declare function BlzGroupRemoveGroupFast(this: void, whichGroup: group, removeGroup: group): integer;

/**
 * @param whichGroup group
 */
declare function GroupClear(this: void, whichGroup: group): nothing;

/**
 * @param whichGroup group
 */
declare function BlzGroupGetSize(this: void, whichGroup: group): integer;

/**
 * @param whichGroup group
 * @param index integer
 */
declare function BlzGroupUnitAt(this: void, whichGroup: group, index: integer): unit;

/**
 * @param whichGroup group
 * @param unitname string
 * @param filter boolexpr
 */
declare function GroupEnumUnitsOfType(this: void, whichGroup: group, unitname: string, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param whichPlayer player
 * @param filter boolexpr
 */
declare function GroupEnumUnitsOfPlayer(this: void, whichGroup: group, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param unitname string
 * @param filter boolexpr
 * @param countLimit integer
 */
declare function GroupEnumUnitsOfTypeCounted(this: void, whichGroup: group, unitname: string, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup group
 * @param r rect
 * @param filter boolexpr
 */
declare function GroupEnumUnitsInRect(this: void, whichGroup: group, r: rect, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param r rect
 * @param filter boolexpr
 * @param countLimit integer
 */
declare function GroupEnumUnitsInRectCounted(this: void, whichGroup: group, r: rect, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup group
 * @param x real
 * @param y real
 * @param radius real
 * @param filter boolexpr
 */
declare function GroupEnumUnitsInRange(this: void, whichGroup: group, x: real, y: real, radius: real, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param whichLocation location
 * @param radius real
 * @param filter boolexpr
 */
declare function GroupEnumUnitsInRangeOfLoc(this: void, whichGroup: group, whichLocation: location, radius: real, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param x real
 * @param y real
 * @param radius real
 * @param filter boolexpr
 * @param countLimit integer
 */
declare function GroupEnumUnitsInRangeCounted(this: void, whichGroup: group, x: real, y: real, radius: real, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup group
 * @param whichLocation location
 * @param radius real
 * @param filter boolexpr
 * @param countLimit integer
 */
declare function GroupEnumUnitsInRangeOfLocCounted(this: void, whichGroup: group, whichLocation: location, radius: real, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichGroup group
 * @param whichPlayer player
 * @param filter boolexpr
 */
declare function GroupEnumUnitsSelected(this: void, whichGroup: group, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichGroup group
 * @param order string
 */
declare function GroupImmediateOrder(this: void, whichGroup: group, order: string): boolean;

/**
 * @param whichGroup group
 * @param order integer
 */
declare function GroupImmediateOrderById(this: void, whichGroup: group, order: integer): boolean;

/**
 * @param whichGroup group
 * @param order string
 * @param x real
 * @param y real
 */
declare function GroupPointOrder(this: void, whichGroup: group, order: string, x: real, y: real): boolean;

/**
 * @param whichGroup group
 * @param order string
 * @param whichLocation location
 */
declare function GroupPointOrderLoc(this: void, whichGroup: group, order: string, whichLocation: location): boolean;

/**
 * @param whichGroup group
 * @param order integer
 * @param x real
 * @param y real
 */
declare function GroupPointOrderById(this: void, whichGroup: group, order: integer, x: real, y: real): boolean;

/**
 * @param whichGroup group
 * @param order integer
 * @param whichLocation location
 */
declare function GroupPointOrderByIdLoc(this: void, whichGroup: group, order: integer, whichLocation: location): boolean;

/**
 * @param whichGroup group
 * @param order string
 * @param targetWidget widget
 */
declare function GroupTargetOrder(this: void, whichGroup: group, order: string, targetWidget: widget): boolean;

/**
 * @param whichGroup group
 * @param order integer
 * @param targetWidget widget
 */
declare function GroupTargetOrderById(this: void, whichGroup: group, order: integer, targetWidget: widget): boolean;

/**
 * @param whichGroup group
 * @param callback code
 */
declare function ForGroup(this: void, whichGroup: group, callback: code): nothing;

/**
 * @param whichGroup group
 */
declare function FirstOfGroup(this: void, whichGroup: group): unit;

/**
 */
declare function CreateForce(this: void): force;

/**
 * @param whichForce force
 */
declare function DestroyForce(this: void, whichForce: force): nothing;

/**
 * @param whichForce force
 * @param whichPlayer player
 */
declare function ForceAddPlayer(this: void, whichForce: force, whichPlayer: player): nothing;

/**
 * @param whichForce force
 * @param whichPlayer player
 */
declare function ForceRemovePlayer(this: void, whichForce: force, whichPlayer: player): nothing;

/**
 * @param whichForce force
 * @param whichPlayer player
 */
declare function BlzForceHasPlayer(this: void, whichForce: force, whichPlayer: player): boolean;

/**
 * @param whichForce force
 */
declare function ForceClear(this: void, whichForce: force): nothing;

/**
 * @param whichForce force
 * @param filter boolexpr
 */
declare function ForceEnumPlayers(this: void, whichForce: force, filter: boolexpr): nothing;

/**
 * @param whichForce force
 * @param filter boolexpr
 * @param countLimit integer
 */
declare function ForceEnumPlayersCounted(this: void, whichForce: force, filter: boolexpr, countLimit: integer): nothing;

/**
 * @param whichForce force
 * @param whichPlayer player
 * @param filter boolexpr
 */
declare function ForceEnumAllies(this: void, whichForce: force, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichForce force
 * @param whichPlayer player
 * @param filter boolexpr
 */
declare function ForceEnumEnemies(this: void, whichForce: force, whichPlayer: player, filter: boolexpr): nothing;

/**
 * @param whichForce force
 * @param callback code
 */
declare function ForForce(this: void, whichForce: force, callback: code): nothing;

/**
 * @param minx real
 * @param miny real
 * @param maxx real
 * @param maxy real
 */
declare function Rect(this: void, minx: real, miny: real, maxx: real, maxy: real): rect;

/**
 * @param min location
 * @param max location
 */
declare function RectFromLoc(this: void, min: location, max: location): rect;

/**
 * @param whichRect rect
 */
declare function RemoveRect(this: void, whichRect: rect): nothing;

/**
 * @param whichRect rect
 * @param minx real
 * @param miny real
 * @param maxx real
 * @param maxy real
 */
declare function SetRect(this: void, whichRect: rect, minx: real, miny: real, maxx: real, maxy: real): nothing;

/**
 * @param whichRect rect
 * @param min location
 * @param max location
 */
declare function SetRectFromLoc(this: void, whichRect: rect, min: location, max: location): nothing;

/**
 * @param whichRect rect
 * @param newCenterX real
 * @param newCenterY real
 */
declare function MoveRectTo(this: void, whichRect: rect, newCenterX: real, newCenterY: real): nothing;

/**
 * @param whichRect rect
 * @param newCenterLoc location
 */
declare function MoveRectToLoc(this: void, whichRect: rect, newCenterLoc: location): nothing;

/**
 * @param whichRect rect
 */
declare function GetRectCenterX(this: void, whichRect: rect): real;

/**
 * @param whichRect rect
 */
declare function GetRectCenterY(this: void, whichRect: rect): real;

/**
 * @param whichRect rect
 */
declare function GetRectMinX(this: void, whichRect: rect): real;

/**
 * @param whichRect rect
 */
declare function GetRectMinY(this: void, whichRect: rect): real;

/**
 * @param whichRect rect
 */
declare function GetRectMaxX(this: void, whichRect: rect): real;

/**
 * @param whichRect rect
 */
declare function GetRectMaxY(this: void, whichRect: rect): real;

/**
 */
declare function CreateRegion(this: void): region;

/**
 * @param whichRegion region
 */
declare function RemoveRegion(this: void, whichRegion: region): nothing;

/**
 * @param whichRegion region
 * @param r rect
 */
declare function RegionAddRect(this: void, whichRegion: region, r: rect): nothing;

/**
 * @param whichRegion region
 * @param r rect
 */
declare function RegionClearRect(this: void, whichRegion: region, r: rect): nothing;

/**
 * @param whichRegion region
 * @param x real
 * @param y real
 */
declare function RegionAddCell(this: void, whichRegion: region, x: real, y: real): nothing;

/**
 * @param whichRegion region
 * @param whichLocation location
 */
declare function RegionAddCellAtLoc(this: void, whichRegion: region, whichLocation: location): nothing;

/**
 * @param whichRegion region
 * @param x real
 * @param y real
 */
declare function RegionClearCell(this: void, whichRegion: region, x: real, y: real): nothing;

/**
 * @param whichRegion region
 * @param whichLocation location
 */
declare function RegionClearCellAtLoc(this: void, whichRegion: region, whichLocation: location): nothing;

/**
 * @param x real
 * @param y real
 */
declare function Location(this: void, x: real, y: real): location;

/**
 * @param whichLocation location
 */
declare function RemoveLocation(this: void, whichLocation: location): nothing;

/**
 * @param whichLocation location
 * @param newX real
 * @param newY real
 */
declare function MoveLocation(this: void, whichLocation: location, newX: real, newY: real): nothing;

/**
 * @param whichLocation location
 */
declare function GetLocationX(this: void, whichLocation: location): real;

/**
 * @param whichLocation location
 */
declare function GetLocationY(this: void, whichLocation: location): real;

/**
 * @param whichLocation location
 */
declare function GetLocationZ(this: void, whichLocation: location): real;

/**
 * @param whichRegion region
 * @param whichUnit unit
 */
declare function IsUnitInRegion(this: void, whichRegion: region, whichUnit: unit): boolean;

/**
 * @param whichRegion region
 * @param x real
 * @param y real
 */
declare function IsPointInRegion(this: void, whichRegion: region, x: real, y: real): boolean;

/**
 * @param whichRegion region
 * @param whichLocation location
 */
declare function IsLocationInRegion(this: void, whichRegion: region, whichLocation: location): boolean;

/**
 */
declare function GetWorldBounds(this: void): rect;

/**
 */
declare function CreateTrigger(this: void): trigger;

/**
 * @param whichTrigger trigger
 */
declare function DestroyTrigger(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 */
declare function ResetTrigger(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 */
declare function EnableTrigger(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 */
declare function DisableTrigger(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 */
declare function IsTriggerEnabled(this: void, whichTrigger: trigger): boolean;

/**
 * @param whichTrigger trigger
 * @param flag boolean
 */
declare function TriggerWaitOnSleeps(this: void, whichTrigger: trigger, flag: boolean): nothing;

/**
 * @param whichTrigger trigger
 */
declare function IsTriggerWaitOnSleeps(this: void, whichTrigger: trigger): boolean;

/**
 */
declare function GetFilterUnit(this: void): unit;

/**
 */
declare function GetEnumUnit(this: void): unit;

/**
 */
declare function GetFilterDestructable(this: void): destructable;

/**
 */
declare function GetEnumDestructable(this: void): destructable;

/**
 */
declare function GetFilterItem(this: void): item;

/**
 */
declare function GetEnumItem(this: void): item;

/**
 */
declare function GetFilterPlayer(this: void): player;

/**
 */
declare function GetEnumPlayer(this: void): player;

/**
 */
declare function GetTriggeringTrigger(this: void): trigger;

/**
 */
declare function GetTriggerEventId(this: void): eventid;

/**
 * @param whichTrigger trigger
 */
declare function GetTriggerEvalCount(this: void, whichTrigger: trigger): integer;

/**
 * @param whichTrigger trigger
 */
declare function GetTriggerExecCount(this: void, whichTrigger: trigger): integer;

/**
 * @param funcName string
 */
declare function ExecuteFunc(this: void, funcName: string): nothing;

/**
 * @param operandA boolexpr
 * @param operandB boolexpr
 */
declare function And(this: void, operandA: boolexpr, operandB: boolexpr): boolexpr;

/**
 * @param operandA boolexpr
 * @param operandB boolexpr
 */
declare function Or(this: void, operandA: boolexpr, operandB: boolexpr): boolexpr;

/**
 * @param operand boolexpr
 */
declare function Not(this: void, operand: boolexpr): boolexpr;

/**
 * @param func code
 */
declare function Condition(this: void, func: code): conditionfunc;

/**
 * @param c conditionfunc
 */
declare function DestroyCondition(this: void, c: conditionfunc): nothing;

/**
 * @param func code
 */
declare function Filter(this: void, func: code): filterfunc;

/**
 * @param f filterfunc
 */
declare function DestroyFilter(this: void, f: filterfunc): nothing;

/**
 * @param e boolexpr
 */
declare function DestroyBoolExpr(this: void, e: boolexpr): nothing;

/**
 * @param whichTrigger trigger
 * @param varName string
 * @param opcode limitop
 * @param limitval real
 */
declare function TriggerRegisterVariableEvent(this: void, whichTrigger: trigger, varName: string, opcode: limitop, limitval: real): event;

/**
 * @param whichTrigger trigger
 * @param timeout real
 * @param periodic boolean
 */
declare function TriggerRegisterTimerEvent(this: void, whichTrigger: trigger, timeout: real, periodic: boolean): event;

/**
 * @param whichTrigger trigger
 * @param t timer
 */
declare function TriggerRegisterTimerExpireEvent(this: void, whichTrigger: trigger, t: timer): event;

/**
 * @param whichTrigger trigger
 * @param whichState gamestate
 * @param opcode limitop
 * @param limitval real
 */
declare function TriggerRegisterGameStateEvent(this: void, whichTrigger: trigger, whichState: gamestate, opcode: limitop, limitval: real): event;

/**
 * @param whichTrigger trigger
 * @param whichDialog dialog
 */
declare function TriggerRegisterDialogEvent(this: void, whichTrigger: trigger, whichDialog: dialog): event;

/**
 * @param whichTrigger trigger
 * @param whichButton button
 */
declare function TriggerRegisterDialogButtonEvent(this: void, whichTrigger: trigger, whichButton: button): event;

/**
 */
declare function GetEventGameState(this: void): gamestate;

/**
 * @param whichTrigger trigger
 * @param whichGameEvent gameevent
 */
declare function TriggerRegisterGameEvent(this: void, whichTrigger: trigger, whichGameEvent: gameevent): event;

/**
 */
declare function GetWinningPlayer(this: void): player;

/**
 * @param whichTrigger trigger
 * @param whichRegion region
 * @param filter boolexpr
 */
declare function TriggerRegisterEnterRegion(this: void, whichTrigger: trigger, whichRegion: region, filter: boolexpr): event;

/**
 */
declare function GetTriggeringRegion(this: void): region;

/**
 */
declare function GetEnteringUnit(this: void): unit;

/**
 * @param whichTrigger trigger
 * @param whichRegion region
 * @param filter boolexpr
 */
declare function TriggerRegisterLeaveRegion(this: void, whichTrigger: trigger, whichRegion: region, filter: boolexpr): event;

/**
 */
declare function GetLeavingUnit(this: void): unit;

/**
 * @param whichTrigger trigger
 * @param t trackable
 */
declare function TriggerRegisterTrackableHitEvent(this: void, whichTrigger: trigger, t: trackable): event;

/**
 * @param whichTrigger trigger
 * @param t trackable
 */
declare function TriggerRegisterTrackableTrackEvent(this: void, whichTrigger: trigger, t: trackable): event;

/**
 */
declare function GetTriggeringTrackable(this: void): trackable;

/**
 */
declare function GetClickedButton(this: void): button;

/**
 */
declare function GetClickedDialog(this: void): dialog;

/**
 */
declare function GetTournamentFinishSoonTimeRemaining(this: void): real;

/**
 */
declare function GetTournamentFinishNowRule(this: void): integer;

/**
 */
declare function GetTournamentFinishNowPlayer(this: void): player;

/**
 * @param whichPlayer player
 */
declare function GetTournamentScore(this: void, whichPlayer: player): integer;

/**
 */
declare function GetSaveBasicFilename(this: void): string;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param whichPlayerEvent playerevent
 */
declare function TriggerRegisterPlayerEvent(this: void, whichTrigger: trigger, whichPlayer: player, whichPlayerEvent: playerevent): event;

/**
 */
declare function GetTriggerPlayer(this: void): player;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param whichPlayerUnitEvent playerunitevent
 * @param filter boolexpr
 */
declare function TriggerRegisterPlayerUnitEvent(this: void, whichTrigger: trigger, whichPlayer: player, whichPlayerUnitEvent: playerunitevent, filter: boolexpr): event;

/**
 */
declare function GetLevelingUnit(this: void): unit;

/**
 */
declare function GetLearningUnit(this: void): unit;

/**
 */
declare function GetLearnedSkill(this: void): integer;

/**
 */
declare function GetLearnedSkillLevel(this: void): integer;

/**
 */
declare function GetRevivableUnit(this: void): unit;

/**
 */
declare function GetRevivingUnit(this: void): unit;

/**
 */
declare function GetAttacker(this: void): unit;

/**
 */
declare function GetRescuer(this: void): unit;

/**
 */
declare function GetDyingUnit(this: void): unit;

/**
 */
declare function GetKillingUnit(this: void): unit;

/**
 */
declare function GetDecayingUnit(this: void): unit;

/**
 */
declare function GetConstructingStructure(this: void): unit;

/**
 */
declare function GetCancelledStructure(this: void): unit;

/**
 */
declare function GetConstructedStructure(this: void): unit;

/**
 */
declare function GetResearchingUnit(this: void): unit;

/**
 */
declare function GetResearched(this: void): integer;

/**
 */
declare function GetTrainedUnitType(this: void): integer;

/**
 */
declare function GetTrainedUnit(this: void): unit;

/**
 */
declare function GetDetectedUnit(this: void): unit;

/**
 */
declare function GetSummoningUnit(this: void): unit;

/**
 */
declare function GetSummonedUnit(this: void): unit;

/**
 */
declare function GetTransportUnit(this: void): unit;

/**
 */
declare function GetLoadedUnit(this: void): unit;

/**
 */
declare function GetSellingUnit(this: void): unit;

/**
 */
declare function GetSoldUnit(this: void): unit;

/**
 */
declare function GetBuyingUnit(this: void): unit;

/**
 */
declare function GetSoldItem(this: void): item;

/**
 */
declare function GetChangingUnit(this: void): unit;

/**
 */
declare function GetChangingUnitPrevOwner(this: void): player;

/**
 */
declare function GetManipulatingUnit(this: void): unit;

/**
 */
declare function GetManipulatedItem(this: void): item;

/**
 */
declare function GetOrderedUnit(this: void): unit;

/**
 */
declare function GetIssuedOrderId(this: void): integer;

/**
 */
declare function GetOrderPointX(this: void): real;

/**
 */
declare function GetOrderPointY(this: void): real;

/**
 */
declare function GetOrderPointLoc(this: void): location;

/**
 */
declare function GetOrderTarget(this: void): widget;

/**
 */
declare function GetOrderTargetDestructable(this: void): destructable;

/**
 */
declare function GetOrderTargetItem(this: void): item;

/**
 */
declare function GetOrderTargetUnit(this: void): unit;

/**
 */
declare function GetSpellAbilityUnit(this: void): unit;

/**
 */
declare function GetSpellAbilityId(this: void): integer;

/**
 */
declare function GetSpellAbility(this: void): ability;

/**
 */
declare function GetSpellTargetLoc(this: void): location;

/**
 */
declare function GetSpellTargetX(this: void): real;

/**
 */
declare function GetSpellTargetY(this: void): real;

/**
 */
declare function GetSpellTargetDestructable(this: void): destructable;

/**
 */
declare function GetSpellTargetItem(this: void): item;

/**
 */
declare function GetSpellTargetUnit(this: void): unit;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param whichAlliance alliancetype
 */
declare function TriggerRegisterPlayerAllianceChange(this: void, whichTrigger: trigger, whichPlayer: player, whichAlliance: alliancetype): event;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param whichState playerstate
 * @param opcode limitop
 * @param limitval real
 */
declare function TriggerRegisterPlayerStateEvent(this: void, whichTrigger: trigger, whichPlayer: player, whichState: playerstate, opcode: limitop, limitval: real): event;

/**
 */
declare function GetEventPlayerState(this: void): playerstate;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param chatMessageToDetect string
 * @param exactMatchOnly boolean
 */
declare function TriggerRegisterPlayerChatEvent(this: void, whichTrigger: trigger, whichPlayer: player, chatMessageToDetect: string, exactMatchOnly: boolean): event;

/**
 */
declare function GetEventPlayerChatString(this: void): string;

/**
 */
declare function GetEventPlayerChatStringMatched(this: void): string;

/**
 * @param whichTrigger trigger
 * @param whichWidget widget
 */
declare function TriggerRegisterDeathEvent(this: void, whichTrigger: trigger, whichWidget: widget): event;

/**
 */
declare function GetTriggerUnit(this: void): unit;

/**
 * @param whichTrigger trigger
 * @param whichUnit unit
 * @param whichState unitstate
 * @param opcode limitop
 * @param limitval real
 */
declare function TriggerRegisterUnitStateEvent(this: void, whichTrigger: trigger, whichUnit: unit, whichState: unitstate, opcode: limitop, limitval: real): event;

/**
 */
declare function GetEventUnitState(this: void): unitstate;

/**
 * @param whichTrigger trigger
 * @param whichUnit unit
 * @param whichEvent unitevent
 */
declare function TriggerRegisterUnitEvent(this: void, whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent): event;

/**
 */
declare function GetEventDamage(this: void): real;

/**
 */
declare function GetEventDamageSource(this: void): unit;

/**
 */
declare function GetEventDetectingPlayer(this: void): player;

/**
 * @param whichTrigger trigger
 * @param whichUnit unit
 * @param whichEvent unitevent
 * @param filter boolexpr
 */
declare function TriggerRegisterFilterUnitEvent(this: void, whichTrigger: trigger, whichUnit: unit, whichEvent: unitevent, filter: boolexpr): event;

/**
 */
declare function GetEventTargetUnit(this: void): unit;

/**
 * @param whichTrigger trigger
 * @param whichUnit unit
 * @param range real
 * @param filter boolexpr
 */
declare function TriggerRegisterUnitInRange(this: void, whichTrigger: trigger, whichUnit: unit, range: real, filter: boolexpr): event;

/**
 * @param whichTrigger trigger
 * @param condition boolexpr
 */
declare function TriggerAddCondition(this: void, whichTrigger: trigger, condition: boolexpr): triggercondition;

/**
 * @param whichTrigger trigger
 * @param whichCondition triggercondition
 */
declare function TriggerRemoveCondition(this: void, whichTrigger: trigger, whichCondition: triggercondition): nothing;

/**
 * @param whichTrigger trigger
 */
declare function TriggerClearConditions(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 * @param actionFunc code
 */
declare function TriggerAddAction(this: void, whichTrigger: trigger, actionFunc: code): triggeraction;

/**
 * @param whichTrigger trigger
 * @param whichAction triggeraction
 */
declare function TriggerRemoveAction(this: void, whichTrigger: trigger, whichAction: triggeraction): nothing;

/**
 * @param whichTrigger trigger
 */
declare function TriggerClearActions(this: void, whichTrigger: trigger): nothing;

/**
 * @param timeout real
 */
declare function TriggerSleepAction(this: void, timeout: real): nothing;

/**
 * @param s sound
 * @param offset real
 */
declare function TriggerWaitForSound(this: void, s: sound, offset: real): nothing;

/**
 * @param whichTrigger trigger
 */
declare function TriggerEvaluate(this: void, whichTrigger: trigger): boolean;

/**
 * @param whichTrigger trigger
 */
declare function TriggerExecute(this: void, whichTrigger: trigger): nothing;

/**
 * @param whichTrigger trigger
 */
declare function TriggerExecuteWait(this: void, whichTrigger: trigger): nothing;

/**
 */
declare function TriggerSyncStart(this: void): nothing;

/**
 */
declare function TriggerSyncReady(this: void): nothing;

/**
 * @param whichWidget widget
 */
declare function GetWidgetLife(this: void, whichWidget: widget): real;

/**
 * @param whichWidget widget
 * @param newLife real
 */
declare function SetWidgetLife(this: void, whichWidget: widget, newLife: real): nothing;

/**
 * @param whichWidget widget
 */
declare function GetWidgetX(this: void, whichWidget: widget): real;

/**
 * @param whichWidget widget
 */
declare function GetWidgetY(this: void, whichWidget: widget): real;

/**
 */
declare function GetTriggerWidget(this: void): widget;

/**
 * @param objectid integer
 * @param x real
 * @param y real
 * @param face real
 * @param scale real
 * @param variation integer
 */
declare function CreateDestructable(this: void, objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid integer
 * @param x real
 * @param y real
 * @param z real
 * @param face real
 * @param scale real
 * @param variation integer
 */
declare function CreateDestructableZ(this: void, objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid integer
 * @param x real
 * @param y real
 * @param face real
 * @param scale real
 * @param variation integer
 */
declare function CreateDeadDestructable(this: void, objectid: integer, x: real, y: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param objectid integer
 * @param x real
 * @param y real
 * @param z real
 * @param face real
 * @param scale real
 * @param variation integer
 */
declare function CreateDeadDestructableZ(this: void, objectid: integer, x: real, y: real, z: real, face: real, scale: real, variation: integer): destructable;

/**
 * @param d destructable
 */
declare function RemoveDestructable(this: void, d: destructable): nothing;

/**
 * @param d destructable
 */
declare function KillDestructable(this: void, d: destructable): nothing;

/**
 * @param d destructable
 * @param flag boolean
 */
declare function SetDestructableInvulnerable(this: void, d: destructable, flag: boolean): nothing;

/**
 * @param d destructable
 */
declare function IsDestructableInvulnerable(this: void, d: destructable): boolean;

/**
 * @param r rect
 * @param filter boolexpr
 * @param actionFunc code
 */
declare function EnumDestructablesInRect(this: void, r: rect, filter: boolexpr, actionFunc: code): nothing;

/**
 * @param d destructable
 */
declare function GetDestructableTypeId(this: void, d: destructable): integer;

/**
 * @param d destructable
 */
declare function GetDestructableX(this: void, d: destructable): real;

/**
 * @param d destructable
 */
declare function GetDestructableY(this: void, d: destructable): real;

/**
 * @param d destructable
 * @param life real
 */
declare function SetDestructableLife(this: void, d: destructable, life: real): nothing;

/**
 * @param d destructable
 */
declare function GetDestructableLife(this: void, d: destructable): real;

/**
 * @param d destructable
 * @param max real
 */
declare function SetDestructableMaxLife(this: void, d: destructable, max: real): nothing;

/**
 * @param d destructable
 */
declare function GetDestructableMaxLife(this: void, d: destructable): real;

/**
 * @param d destructable
 * @param life real
 * @param birth boolean
 */
declare function DestructableRestoreLife(this: void, d: destructable, life: real, birth: boolean): nothing;

/**
 * @param d destructable
 * @param whichAnimation string
 */
declare function QueueDestructableAnimation(this: void, d: destructable, whichAnimation: string): nothing;

/**
 * @param d destructable
 * @param whichAnimation string
 */
declare function SetDestructableAnimation(this: void, d: destructable, whichAnimation: string): nothing;

/**
 * @param d destructable
 * @param speedFactor real
 */
declare function SetDestructableAnimationSpeed(this: void, d: destructable, speedFactor: real): nothing;

/**
 * @param d destructable
 * @param flag boolean
 */
declare function ShowDestructable(this: void, d: destructable, flag: boolean): nothing;

/**
 * @param d destructable
 */
declare function GetDestructableOccluderHeight(this: void, d: destructable): real;

/**
 * @param d destructable
 * @param height real
 */
declare function SetDestructableOccluderHeight(this: void, d: destructable, height: real): nothing;

/**
 * @param d destructable
 */
declare function GetDestructableName(this: void, d: destructable): string;

/**
 */
declare function GetTriggerDestructable(this: void): destructable;

/**
 * @param itemid integer
 * @param x real
 * @param y real
 */
declare function CreateItem(this: void, itemid: integer, x: real, y: real): item;

/**
 * @param whichItem item
 */
declare function RemoveItem(this: void, whichItem: item): nothing;

/**
 * @param whichItem item
 */
declare function GetItemPlayer(this: void, whichItem: item): player;

/**
 * @param i item
 */
declare function GetItemTypeId(this: void, i: item): integer;

/**
 * @param i item
 */
declare function GetItemX(this: void, i: item): real;

/**
 * @param i item
 */
declare function GetItemY(this: void, i: item): real;

/**
 * @param i item
 * @param x real
 * @param y real
 */
declare function SetItemPosition(this: void, i: item, x: real, y: real): nothing;

/**
 * @param whichItem item
 * @param flag boolean
 */
declare function SetItemDropOnDeath(this: void, whichItem: item, flag: boolean): nothing;

/**
 * @param i item
 * @param flag boolean
 */
declare function SetItemDroppable(this: void, i: item, flag: boolean): nothing;

/**
 * @param i item
 * @param flag boolean
 */
declare function SetItemPawnable(this: void, i: item, flag: boolean): nothing;

/**
 * @param whichItem item
 * @param whichPlayer player
 * @param changeColor boolean
 */
declare function SetItemPlayer(this: void, whichItem: item, whichPlayer: player, changeColor: boolean): nothing;

/**
 * @param whichItem item
 * @param flag boolean
 */
declare function SetItemInvulnerable(this: void, whichItem: item, flag: boolean): nothing;

/**
 * @param whichItem item
 */
declare function IsItemInvulnerable(this: void, whichItem: item): boolean;

/**
 * @param whichItem item
 * @param show boolean
 */
declare function SetItemVisible(this: void, whichItem: item, show: boolean): nothing;

/**
 * @param whichItem item
 */
declare function IsItemVisible(this: void, whichItem: item): boolean;

/**
 * @param whichItem item
 */
declare function IsItemOwned(this: void, whichItem: item): boolean;

/**
 * @param whichItem item
 */
declare function IsItemPowerup(this: void, whichItem: item): boolean;

/**
 * @param whichItem item
 */
declare function IsItemSellable(this: void, whichItem: item): boolean;

/**
 * @param whichItem item
 */
declare function IsItemPawnable(this: void, whichItem: item): boolean;

/**
 * @param itemId integer
 */
declare function IsItemIdPowerup(this: void, itemId: integer): boolean;

/**
 * @param itemId integer
 */
declare function IsItemIdSellable(this: void, itemId: integer): boolean;

/**
 * @param itemId integer
 */
declare function IsItemIdPawnable(this: void, itemId: integer): boolean;

/**
 * @param r rect
 * @param filter boolexpr
 * @param actionFunc code
 */
declare function EnumItemsInRect(this: void, r: rect, filter: boolexpr, actionFunc: code): nothing;

/**
 * @param whichItem item
 */
declare function GetItemLevel(this: void, whichItem: item): integer;

/**
 * @param whichItem item
 */
declare function GetItemType(this: void, whichItem: item): itemtype;

/**
 * @param whichItem item
 * @param unitId integer
 */
declare function SetItemDropID(this: void, whichItem: item, unitId: integer): nothing;

/**
 * @param whichItem item
 */
declare function GetItemName(this: void, whichItem: item): string;

/**
 * @param whichItem item
 */
declare function GetItemCharges(this: void, whichItem: item): integer;

/**
 * @param whichItem item
 * @param charges integer
 */
declare function SetItemCharges(this: void, whichItem: item, charges: integer): nothing;

/**
 * @param whichItem item
 */
declare function GetItemUserData(this: void, whichItem: item): integer;

/**
 * @param whichItem item
 * @param data integer
 */
declare function SetItemUserData(this: void, whichItem: item, data: integer): nothing;

/**
 * @param id player
 * @param unitid integer
 * @param x real
 * @param y real
 * @param face real
 */
declare function CreateUnit(this: void, id: player, unitid: integer, x: real, y: real, face: real): unit;

/**
 * @param whichPlayer player
 * @param unitname string
 * @param x real
 * @param y real
 * @param face real
 */
declare function CreateUnitByName(this: void, whichPlayer: player, unitname: string, x: real, y: real, face: real): unit;

/**
 * @param id player
 * @param unitid integer
 * @param whichLocation location
 * @param face real
 */
declare function CreateUnitAtLoc(this: void, id: player, unitid: integer, whichLocation: location, face: real): unit;

/**
 * @param id player
 * @param unitname string
 * @param whichLocation location
 * @param face real
 */
declare function CreateUnitAtLocByName(this: void, id: player, unitname: string, whichLocation: location, face: real): unit;

/**
 * @param whichPlayer player
 * @param unitid integer
 * @param x real
 * @param y real
 * @param face real
 */
declare function CreateCorpse(this: void, whichPlayer: player, unitid: integer, x: real, y: real, face: real): unit;

/**
 * @param whichUnit unit
 */
declare function KillUnit(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 */
declare function RemoveUnit(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 * @param show boolean
 */
declare function ShowUnit(this: void, whichUnit: unit, show: boolean): nothing;

/**
 * @param whichUnit unit
 * @param whichUnitState unitstate
 * @param newVal real
 */
declare function SetUnitState(this: void, whichUnit: unit, whichUnitState: unitstate, newVal: real): nothing;

/**
 * @param whichUnit unit
 * @param newX real
 */
declare function SetUnitX(this: void, whichUnit: unit, newX: real): nothing;

/**
 * @param whichUnit unit
 * @param newY real
 */
declare function SetUnitY(this: void, whichUnit: unit, newY: real): nothing;

/**
 * @param whichUnit unit
 * @param newX real
 * @param newY real
 */
declare function SetUnitPosition(this: void, whichUnit: unit, newX: real, newY: real): nothing;

/**
 * @param whichUnit unit
 * @param whichLocation location
 */
declare function SetUnitPositionLoc(this: void, whichUnit: unit, whichLocation: location): nothing;

/**
 * @param whichUnit unit
 * @param facingAngle real
 */
declare function SetUnitFacing(this: void, whichUnit: unit, facingAngle: real): nothing;

/**
 * @param whichUnit unit
 * @param facingAngle real
 * @param duration real
 */
declare function SetUnitFacingTimed(this: void, whichUnit: unit, facingAngle: real, duration: real): nothing;

/**
 * @param whichUnit unit
 * @param newSpeed real
 */
declare function SetUnitMoveSpeed(this: void, whichUnit: unit, newSpeed: real): nothing;

/**
 * @param whichUnit unit
 * @param newHeight real
 * @param rate real
 */
declare function SetUnitFlyHeight(this: void, whichUnit: unit, newHeight: real, rate: real): nothing;

/**
 * @param whichUnit unit
 * @param newTurnSpeed real
 */
declare function SetUnitTurnSpeed(this: void, whichUnit: unit, newTurnSpeed: real): nothing;

/**
 * @param whichUnit unit
 * @param newPropWindowAngle real
 */
declare function SetUnitPropWindow(this: void, whichUnit: unit, newPropWindowAngle: real): nothing;

/**
 * @param whichUnit unit
 * @param newAcquireRange real
 */
declare function SetUnitAcquireRange(this: void, whichUnit: unit, newAcquireRange: real): nothing;

/**
 * @param whichUnit unit
 * @param creepGuard boolean
 */
declare function SetUnitCreepGuard(this: void, whichUnit: unit, creepGuard: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function GetUnitAcquireRange(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitTurnSpeed(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitPropWindow(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitFlyHeight(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitDefaultAcquireRange(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitDefaultTurnSpeed(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitDefaultPropWindow(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitDefaultFlyHeight(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 * @param changeColor boolean
 */
declare function SetUnitOwner(this: void, whichUnit: unit, whichPlayer: player, changeColor: boolean): nothing;

/**
 * @param whichUnit unit
 * @param whichColor playercolor
 */
declare function SetUnitColor(this: void, whichUnit: unit, whichColor: playercolor): nothing;

/**
 * @param whichUnit unit
 * @param scaleX real
 * @param scaleY real
 * @param scaleZ real
 */
declare function SetUnitScale(this: void, whichUnit: unit, scaleX: real, scaleY: real, scaleZ: real): nothing;

/**
 * @param whichUnit unit
 * @param timeScale real
 */
declare function SetUnitTimeScale(this: void, whichUnit: unit, timeScale: real): nothing;

/**
 * @param whichUnit unit
 * @param blendTime real
 */
declare function SetUnitBlendTime(this: void, whichUnit: unit, blendTime: real): nothing;

/**
 * @param whichUnit unit
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetUnitVertexColor(this: void, whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichUnit unit
 * @param whichAnimation string
 */
declare function QueueUnitAnimation(this: void, whichUnit: unit, whichAnimation: string): nothing;

/**
 * @param whichUnit unit
 * @param whichAnimation string
 */
declare function SetUnitAnimation(this: void, whichUnit: unit, whichAnimation: string): nothing;

/**
 * @param whichUnit unit
 * @param whichAnimation integer
 */
declare function SetUnitAnimationByIndex(this: void, whichUnit: unit, whichAnimation: integer): nothing;

/**
 * @param whichUnit unit
 * @param whichAnimation string
 * @param rarity raritycontrol
 */
declare function SetUnitAnimationWithRarity(this: void, whichUnit: unit, whichAnimation: string, rarity: raritycontrol): nothing;

/**
 * @param whichUnit unit
 * @param animProperties string
 * @param add boolean
 */
declare function AddUnitAnimationProperties(this: void, whichUnit: unit, animProperties: string, add: boolean): nothing;

/**
 * @param whichUnit unit
 * @param whichBone string
 * @param lookAtTarget unit
 * @param offsetX real
 * @param offsetY real
 * @param offsetZ real
 */
declare function SetUnitLookAt(this: void, whichUnit: unit, whichBone: string, lookAtTarget: unit, offsetX: real, offsetY: real, offsetZ: real): nothing;

/**
 * @param whichUnit unit
 */
declare function ResetUnitLookAt(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 * @param byWhichPlayer player
 * @param flag boolean
 */
declare function SetUnitRescuable(this: void, whichUnit: unit, byWhichPlayer: player, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param range real
 */
declare function SetUnitRescueRange(this: void, whichUnit: unit, range: real): nothing;

/**
 * @param whichHero unit
 * @param newStr integer
 * @param permanent boolean
 */
declare function SetHeroStr(this: void, whichHero: unit, newStr: integer, permanent: boolean): nothing;

/**
 * @param whichHero unit
 * @param newAgi integer
 * @param permanent boolean
 */
declare function SetHeroAgi(this: void, whichHero: unit, newAgi: integer, permanent: boolean): nothing;

/**
 * @param whichHero unit
 * @param newInt integer
 * @param permanent boolean
 */
declare function SetHeroInt(this: void, whichHero: unit, newInt: integer, permanent: boolean): nothing;

/**
 * @param whichHero unit
 * @param includeBonuses boolean
 */
declare function GetHeroStr(this: void, whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero unit
 * @param includeBonuses boolean
 */
declare function GetHeroAgi(this: void, whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero unit
 * @param includeBonuses boolean
 */
declare function GetHeroInt(this: void, whichHero: unit, includeBonuses: boolean): integer;

/**
 * @param whichHero unit
 * @param howManyLevels integer
 */
declare function UnitStripHeroLevel(this: void, whichHero: unit, howManyLevels: integer): boolean;

/**
 * @param whichHero unit
 */
declare function GetHeroXP(this: void, whichHero: unit): integer;

/**
 * @param whichHero unit
 * @param newXpVal integer
 * @param showEyeCandy boolean
 */
declare function SetHeroXP(this: void, whichHero: unit, newXpVal: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero unit
 */
declare function GetHeroSkillPoints(this: void, whichHero: unit): integer;

/**
 * @param whichHero unit
 * @param skillPointDelta integer
 */
declare function UnitModifySkillPoints(this: void, whichHero: unit, skillPointDelta: integer): boolean;

/**
 * @param whichHero unit
 * @param xpToAdd integer
 * @param showEyeCandy boolean
 */
declare function AddHeroXP(this: void, whichHero: unit, xpToAdd: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero unit
 * @param level integer
 * @param showEyeCandy boolean
 */
declare function SetHeroLevel(this: void, whichHero: unit, level: integer, showEyeCandy: boolean): nothing;

/**
 * @param whichHero unit
 */
declare function GetHeroLevel(this: void, whichHero: unit): integer;

/**
 * @param whichUnit unit
 */
declare function GetUnitLevel(this: void, whichUnit: unit): integer;

/**
 * @param whichHero unit
 */
declare function GetHeroProperName(this: void, whichHero: unit): string;

/**
 * @param whichHero unit
 * @param flag boolean
 */
declare function SuspendHeroXP(this: void, whichHero: unit, flag: boolean): nothing;

/**
 * @param whichHero unit
 */
declare function IsSuspendedXP(this: void, whichHero: unit): boolean;

/**
 * @param whichHero unit
 * @param abilcode integer
 */
declare function SelectHeroSkill(this: void, whichHero: unit, abilcode: integer): nothing;

/**
 * @param whichUnit unit
 * @param abilcode integer
 */
declare function GetUnitAbilityLevel(this: void, whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit unit
 * @param abilcode integer
 */
declare function DecUnitAbilityLevel(this: void, whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit unit
 * @param abilcode integer
 */
declare function IncUnitAbilityLevel(this: void, whichUnit: unit, abilcode: integer): integer;

/**
 * @param whichUnit unit
 * @param abilcode integer
 * @param level integer
 */
declare function SetUnitAbilityLevel(this: void, whichUnit: unit, abilcode: integer, level: integer): integer;

/**
 * @param whichHero unit
 * @param x real
 * @param y real
 * @param doEyecandy boolean
 */
declare function ReviveHero(this: void, whichHero: unit, x: real, y: real, doEyecandy: boolean): boolean;

/**
 * @param whichHero unit
 * @param loc location
 * @param doEyecandy boolean
 */
declare function ReviveHeroLoc(this: void, whichHero: unit, loc: location, doEyecandy: boolean): boolean;

/**
 * @param whichUnit unit
 * @param exploded boolean
 */
declare function SetUnitExploded(this: void, whichUnit: unit, exploded: boolean): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function SetUnitInvulnerable(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function PauseUnit(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichHero unit
 */
declare function IsUnitPaused(this: void, whichHero: unit): boolean;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function SetUnitPathing(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 */
declare function ClearSelection(this: void): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function SelectUnit(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function GetUnitPointValue(this: void, whichUnit: unit): integer;

/**
 * @param unitType integer
 */
declare function GetUnitPointValueByType(this: void, unitType: integer): integer;

/**
 * @param whichUnit unit
 * @param whichItem item
 */
declare function UnitAddItem(this: void, whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit unit
 * @param itemId integer
 */
declare function UnitAddItemById(this: void, whichUnit: unit, itemId: integer): item;

/**
 * @param whichUnit unit
 * @param itemId integer
 * @param itemSlot integer
 */
declare function UnitAddItemToSlotById(this: void, whichUnit: unit, itemId: integer, itemSlot: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 */
declare function UnitRemoveItem(this: void, whichUnit: unit, whichItem: item): nothing;

/**
 * @param whichUnit unit
 * @param itemSlot integer
 */
declare function UnitRemoveItemFromSlot(this: void, whichUnit: unit, itemSlot: integer): item;

/**
 * @param whichUnit unit
 * @param whichItem item
 */
declare function UnitHasItem(this: void, whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit unit
 * @param itemSlot integer
 */
declare function UnitItemInSlot(this: void, whichUnit: unit, itemSlot: integer): item;

/**
 * @param whichUnit unit
 */
declare function UnitInventorySize(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 * @param whichItem item
 * @param x real
 * @param y real
 */
declare function UnitDropItemPoint(this: void, whichUnit: unit, whichItem: item, x: real, y: real): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 * @param slot integer
 */
declare function UnitDropItemSlot(this: void, whichUnit: unit, whichItem: item, slot: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 * @param target widget
 */
declare function UnitDropItemTarget(this: void, whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 */
declare function UnitUseItem(this: void, whichUnit: unit, whichItem: item): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 * @param x real
 * @param y real
 */
declare function UnitUseItemPoint(this: void, whichUnit: unit, whichItem: item, x: real, y: real): boolean;

/**
 * @param whichUnit unit
 * @param whichItem item
 * @param target widget
 */
declare function UnitUseItemTarget(this: void, whichUnit: unit, whichItem: item, target: widget): boolean;

/**
 * @param whichUnit unit
 */
declare function GetUnitX(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitY(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitLoc(this: void, whichUnit: unit): location;

/**
 * @param whichUnit unit
 */
declare function GetUnitFacing(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitMoveSpeed(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 */
declare function GetUnitDefaultMoveSpeed(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 * @param whichUnitState unitstate
 */
declare function GetUnitState(this: void, whichUnit: unit, whichUnitState: unitstate): real;

/**
 * @param whichUnit unit
 */
declare function GetOwningPlayer(this: void, whichUnit: unit): player;

/**
 * @param whichUnit unit
 */
declare function GetUnitTypeId(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 */
declare function GetUnitRace(this: void, whichUnit: unit): race;

/**
 * @param whichUnit unit
 */
declare function GetUnitName(this: void, whichUnit: unit): string;

/**
 * @param whichUnit unit
 */
declare function GetUnitFoodUsed(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 */
declare function GetUnitFoodMade(this: void, whichUnit: unit): integer;

/**
 * @param unitId integer
 */
declare function GetFoodMade(this: void, unitId: integer): integer;

/**
 * @param unitId integer
 */
declare function GetFoodUsed(this: void, unitId: integer): integer;

/**
 * @param whichUnit unit
 * @param useFood boolean
 */
declare function SetUnitUseFood(this: void, whichUnit: unit, useFood: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function GetUnitRallyPoint(this: void, whichUnit: unit): location;

/**
 * @param whichUnit unit
 */
declare function GetUnitRallyUnit(this: void, whichUnit: unit): unit;

/**
 * @param whichUnit unit
 */
declare function GetUnitRallyDestructable(this: void, whichUnit: unit): destructable;

/**
 * @param whichUnit unit
 * @param whichGroup group
 */
declare function IsUnitInGroup(this: void, whichUnit: unit, whichGroup: group): boolean;

/**
 * @param whichUnit unit
 * @param whichForce force
 */
declare function IsUnitInForce(this: void, whichUnit: unit, whichForce: force): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitOwnedByPlayer(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitAlly(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitEnemy(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitVisible(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitDetected(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitInvisible(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitFogged(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitMasked(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 */
declare function IsUnitSelected(this: void, whichUnit: unit, whichPlayer: player): boolean;

/**
 * @param whichUnit unit
 * @param whichRace race
 */
declare function IsUnitRace(this: void, whichUnit: unit, whichRace: race): boolean;

/**
 * @param whichUnit unit
 * @param whichUnitType unittype
 */
declare function IsUnitType(this: void, whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit unit
 * @param whichSpecifiedUnit unit
 */
declare function IsUnit(this: void, whichUnit: unit, whichSpecifiedUnit: unit): boolean;

/**
 * @param whichUnit unit
 * @param otherUnit unit
 * @param distance real
 */
declare function IsUnitInRange(this: void, whichUnit: unit, otherUnit: unit, distance: real): boolean;

/**
 * @param whichUnit unit
 * @param x real
 * @param y real
 * @param distance real
 */
declare function IsUnitInRangeXY(this: void, whichUnit: unit, x: real, y: real, distance: real): boolean;

/**
 * @param whichUnit unit
 * @param whichLocation location
 * @param distance real
 */
declare function IsUnitInRangeLoc(this: void, whichUnit: unit, whichLocation: location, distance: real): boolean;

/**
 * @param whichUnit unit
 */
declare function IsUnitHidden(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function IsUnitIllusion(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 * @param whichTransport unit
 */
declare function IsUnitInTransport(this: void, whichUnit: unit, whichTransport: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function IsUnitLoaded(this: void, whichUnit: unit): boolean;

/**
 * @param unitId integer
 */
declare function IsHeroUnitId(this: void, unitId: integer): boolean;

/**
 * @param unitId integer
 * @param whichUnitType unittype
 */
declare function IsUnitIdType(this: void, unitId: integer, whichUnitType: unittype): boolean;

/**
 * @param whichUnit unit
 * @param whichPlayer player
 * @param share boolean
 */
declare function UnitShareVision(this: void, whichUnit: unit, whichPlayer: player, share: boolean): nothing;

/**
 * @param whichUnit unit
 * @param suspend boolean
 */
declare function UnitSuspendDecay(this: void, whichUnit: unit, suspend: boolean): nothing;

/**
 * @param whichUnit unit
 * @param whichUnitType unittype
 */
declare function UnitAddType(this: void, whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit unit
 * @param whichUnitType unittype
 */
declare function UnitRemoveType(this: void, whichUnit: unit, whichUnitType: unittype): boolean;

/**
 * @param whichUnit unit
 * @param abilityId integer
 */
declare function UnitAddAbility(this: void, whichUnit: unit, abilityId: integer): boolean;

/**
 * @param whichUnit unit
 * @param abilityId integer
 */
declare function UnitRemoveAbility(this: void, whichUnit: unit, abilityId: integer): boolean;

/**
 * @param whichUnit unit
 * @param permanent boolean
 * @param abilityId integer
 */
declare function UnitMakeAbilityPermanent(this: void, whichUnit: unit, permanent: boolean, abilityId: integer): boolean;

/**
 * @param whichUnit unit
 * @param removePositive boolean
 * @param removeNegative boolean
 */
declare function UnitRemoveBuffs(this: void, whichUnit: unit, removePositive: boolean, removeNegative: boolean): nothing;

/**
 * @param whichUnit unit
 * @param removePositive boolean
 * @param removeNegative boolean
 * @param magic boolean
 * @param physical boolean
 * @param timedLife boolean
 * @param aura boolean
 * @param autoDispel boolean
 */
declare function UnitRemoveBuffsEx(this: void, whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): nothing;

/**
 * @param whichUnit unit
 * @param removePositive boolean
 * @param removeNegative boolean
 * @param magic boolean
 * @param physical boolean
 * @param timedLife boolean
 * @param aura boolean
 * @param autoDispel boolean
 */
declare function UnitHasBuffsEx(this: void, whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): boolean;

/**
 * @param whichUnit unit
 * @param removePositive boolean
 * @param removeNegative boolean
 * @param magic boolean
 * @param physical boolean
 * @param timedLife boolean
 * @param aura boolean
 * @param autoDispel boolean
 */
declare function UnitCountBuffsEx(this: void, whichUnit: unit, removePositive: boolean, removeNegative: boolean, magic: boolean, physical: boolean, timedLife: boolean, aura: boolean, autoDispel: boolean): integer;

/**
 * @param whichUnit unit
 * @param add boolean
 */
declare function UnitAddSleep(this: void, whichUnit: unit, add: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function UnitCanSleep(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 * @param add boolean
 */
declare function UnitAddSleepPerm(this: void, whichUnit: unit, add: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function UnitCanSleepPerm(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function UnitIsSleeping(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function UnitWakeUp(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 * @param buffId integer
 * @param duration real
 */
declare function UnitApplyTimedLife(this: void, whichUnit: unit, buffId: integer, duration: real): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function UnitIgnoreAlarm(this: void, whichUnit: unit, flag: boolean): boolean;

/**
 * @param whichUnit unit
 */
declare function UnitIgnoreAlarmToggled(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function UnitResetCooldown(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 * @param constructionPercentage integer
 */
declare function UnitSetConstructionProgress(this: void, whichUnit: unit, constructionPercentage: integer): nothing;

/**
 * @param whichUnit unit
 * @param upgradePercentage integer
 */
declare function UnitSetUpgradeProgress(this: void, whichUnit: unit, upgradePercentage: integer): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function UnitPauseTimedLife(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function UnitSetUsesAltIcon(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param delay real
 * @param radius real
 * @param x real
 * @param y real
 * @param amount real
 * @param attack boolean
 * @param ranged boolean
 * @param attackType attacktype
 * @param damageType damagetype
 * @param weaponType weapontype
 */
declare function UnitDamagePoint(this: void, whichUnit: unit, delay: real, radius: real, x: real, y: real, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * @param whichUnit unit
 * @param target widget
 * @param amount real
 * @param attack boolean
 * @param ranged boolean
 * @param attackType attacktype
 * @param damageType damagetype
 * @param weaponType weapontype
 */
declare function UnitDamageTarget(this: void, whichUnit: unit, target: widget, amount: real, attack: boolean, ranged: boolean, attackType: attacktype, damageType: damagetype, weaponType: weapontype): boolean;

/**
 * @param whichUnit unit
 * @param order string
 */
declare function IssueImmediateOrder(this: void, whichUnit: unit, order: string): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 */
declare function IssueImmediateOrderById(this: void, whichUnit: unit, order: integer): boolean;

/**
 * @param whichUnit unit
 * @param order string
 * @param x real
 * @param y real
 */
declare function IssuePointOrder(this: void, whichUnit: unit, order: string, x: real, y: real): boolean;

/**
 * @param whichUnit unit
 * @param order string
 * @param whichLocation location
 */
declare function IssuePointOrderLoc(this: void, whichUnit: unit, order: string, whichLocation: location): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 * @param x real
 * @param y real
 */
declare function IssuePointOrderById(this: void, whichUnit: unit, order: integer, x: real, y: real): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 * @param whichLocation location
 */
declare function IssuePointOrderByIdLoc(this: void, whichUnit: unit, order: integer, whichLocation: location): boolean;

/**
 * @param whichUnit unit
 * @param order string
 * @param targetWidget widget
 */
declare function IssueTargetOrder(this: void, whichUnit: unit, order: string, targetWidget: widget): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 * @param targetWidget widget
 */
declare function IssueTargetOrderById(this: void, whichUnit: unit, order: integer, targetWidget: widget): boolean;

/**
 * @param whichUnit unit
 * @param order string
 * @param x real
 * @param y real
 * @param instantTargetWidget widget
 */
declare function IssueInstantPointOrder(this: void, whichUnit: unit, order: string, x: real, y: real, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 * @param x real
 * @param y real
 * @param instantTargetWidget widget
 */
declare function IssueInstantPointOrderById(this: void, whichUnit: unit, order: integer, x: real, y: real, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit unit
 * @param order string
 * @param targetWidget widget
 * @param instantTargetWidget widget
 */
declare function IssueInstantTargetOrder(this: void, whichUnit: unit, order: string, targetWidget: widget, instantTargetWidget: widget): boolean;

/**
 * @param whichUnit unit
 * @param order integer
 * @param targetWidget widget
 * @param instantTargetWidget widget
 */
declare function IssueInstantTargetOrderById(this: void, whichUnit: unit, order: integer, targetWidget: widget, instantTargetWidget: widget): boolean;

/**
 * @param whichPeon unit
 * @param unitToBuild string
 * @param x real
 * @param y real
 */
declare function IssueBuildOrder(this: void, whichPeon: unit, unitToBuild: string, x: real, y: real): boolean;

/**
 * @param whichPeon unit
 * @param unitId integer
 * @param x real
 * @param y real
 */
declare function IssueBuildOrderById(this: void, whichPeon: unit, unitId: integer, x: real, y: real): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitToBuild string
 */
declare function IssueNeutralImmediateOrder(this: void, forWhichPlayer: player, neutralStructure: unit, unitToBuild: string): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitId integer
 */
declare function IssueNeutralImmediateOrderById(this: void, forWhichPlayer: player, neutralStructure: unit, unitId: integer): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitToBuild string
 * @param x real
 * @param y real
 */
declare function IssueNeutralPointOrder(this: void, forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, x: real, y: real): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitId integer
 * @param x real
 * @param y real
 */
declare function IssueNeutralPointOrderById(this: void, forWhichPlayer: player, neutralStructure: unit, unitId: integer, x: real, y: real): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitToBuild string
 * @param target widget
 */
declare function IssueNeutralTargetOrder(this: void, forWhichPlayer: player, neutralStructure: unit, unitToBuild: string, target: widget): boolean;

/**
 * @param forWhichPlayer player
 * @param neutralStructure unit
 * @param unitId integer
 * @param target widget
 */
declare function IssueNeutralTargetOrderById(this: void, forWhichPlayer: player, neutralStructure: unit, unitId: integer, target: widget): boolean;

/**
 * @param whichUnit unit
 */
declare function GetUnitCurrentOrder(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 * @param amount integer
 */
declare function SetResourceAmount(this: void, whichUnit: unit, amount: integer): nothing;

/**
 * @param whichUnit unit
 * @param amount integer
 */
declare function AddResourceAmount(this: void, whichUnit: unit, amount: integer): nothing;

/**
 * @param whichUnit unit
 */
declare function GetResourceAmount(this: void, whichUnit: unit): integer;

/**
 * @param waygate unit
 */
declare function WaygateGetDestinationX(this: void, waygate: unit): real;

/**
 * @param waygate unit
 */
declare function WaygateGetDestinationY(this: void, waygate: unit): real;

/**
 * @param waygate unit
 * @param x real
 * @param y real
 */
declare function WaygateSetDestination(this: void, waygate: unit, x: real, y: real): nothing;

/**
 * @param waygate unit
 * @param activate boolean
 */
declare function WaygateActivate(this: void, waygate: unit, activate: boolean): nothing;

/**
 * @param waygate unit
 */
declare function WaygateIsActive(this: void, waygate: unit): boolean;

/**
 * @param itemId integer
 * @param currentStock integer
 * @param stockMax integer
 */
declare function AddItemToAllStock(this: void, itemId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param whichUnit unit
 * @param itemId integer
 * @param currentStock integer
 * @param stockMax integer
 */
declare function AddItemToStock(this: void, whichUnit: unit, itemId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param unitId integer
 * @param currentStock integer
 * @param stockMax integer
 */
declare function AddUnitToAllStock(this: void, unitId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param whichUnit unit
 * @param unitId integer
 * @param currentStock integer
 * @param stockMax integer
 */
declare function AddUnitToStock(this: void, whichUnit: unit, unitId: integer, currentStock: integer, stockMax: integer): nothing;

/**
 * @param itemId integer
 */
declare function RemoveItemFromAllStock(this: void, itemId: integer): nothing;

/**
 * @param whichUnit unit
 * @param itemId integer
 */
declare function RemoveItemFromStock(this: void, whichUnit: unit, itemId: integer): nothing;

/**
 * @param unitId integer
 */
declare function RemoveUnitFromAllStock(this: void, unitId: integer): nothing;

/**
 * @param whichUnit unit
 * @param unitId integer
 */
declare function RemoveUnitFromStock(this: void, whichUnit: unit, unitId: integer): nothing;

/**
 * @param slots integer
 */
declare function SetAllItemTypeSlots(this: void, slots: integer): nothing;

/**
 * @param slots integer
 */
declare function SetAllUnitTypeSlots(this: void, slots: integer): nothing;

/**
 * @param whichUnit unit
 * @param slots integer
 */
declare function SetItemTypeSlots(this: void, whichUnit: unit, slots: integer): nothing;

/**
 * @param whichUnit unit
 * @param slots integer
 */
declare function SetUnitTypeSlots(this: void, whichUnit: unit, slots: integer): nothing;

/**
 * @param whichUnit unit
 */
declare function GetUnitUserData(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 * @param data integer
 */
declare function SetUnitUserData(this: void, whichUnit: unit, data: integer): nothing;

/**
 * @param number integer
 */
declare function Player(this: void, number: integer): player;

/**
 */
declare function GetLocalPlayer(this: void): player;

/**
 * @param whichPlayer player
 * @param otherPlayer player
 */
declare function IsPlayerAlly(this: void, whichPlayer: player, otherPlayer: player): boolean;

/**
 * @param whichPlayer player
 * @param otherPlayer player
 */
declare function IsPlayerEnemy(this: void, whichPlayer: player, otherPlayer: player): boolean;

/**
 * @param whichPlayer player
 * @param whichForce force
 */
declare function IsPlayerInForce(this: void, whichPlayer: player, whichForce: force): boolean;

/**
 * @param whichPlayer player
 */
declare function IsPlayerObserver(this: void, whichPlayer: player): boolean;

/**
 * @param x real
 * @param y real
 * @param whichPlayer player
 */
declare function IsVisibleToPlayer(this: void, x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation location
 * @param whichPlayer player
 */
declare function IsLocationVisibleToPlayer(this: void, whichLocation: location, whichPlayer: player): boolean;

/**
 * @param x real
 * @param y real
 * @param whichPlayer player
 */
declare function IsFoggedToPlayer(this: void, x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation location
 * @param whichPlayer player
 */
declare function IsLocationFoggedToPlayer(this: void, whichLocation: location, whichPlayer: player): boolean;

/**
 * @param x real
 * @param y real
 * @param whichPlayer player
 */
declare function IsMaskedToPlayer(this: void, x: real, y: real, whichPlayer: player): boolean;

/**
 * @param whichLocation location
 * @param whichPlayer player
 */
declare function IsLocationMaskedToPlayer(this: void, whichLocation: location, whichPlayer: player): boolean;

/**
 * @param whichPlayer player
 */
declare function GetPlayerRace(this: void, whichPlayer: player): race;

/**
 * @param whichPlayer player
 */
declare function GetPlayerId(this: void, whichPlayer: player): integer;

/**
 * @param whichPlayer player
 * @param includeIncomplete boolean
 */
declare function GetPlayerUnitCount(this: void, whichPlayer: player, includeIncomplete: boolean): integer;

/**
 * @param whichPlayer player
 * @param unitName string
 * @param includeIncomplete boolean
 * @param includeUpgrades boolean
 */
declare function GetPlayerTypedUnitCount(this: void, whichPlayer: player, unitName: string, includeIncomplete: boolean, includeUpgrades: boolean): integer;

/**
 * @param whichPlayer player
 * @param includeIncomplete boolean
 */
declare function GetPlayerStructureCount(this: void, whichPlayer: player, includeIncomplete: boolean): integer;

/**
 * @param whichPlayer player
 * @param whichPlayerState playerstate
 */
declare function GetPlayerState(this: void, whichPlayer: player, whichPlayerState: playerstate): integer;

/**
 * @param whichPlayer player
 * @param whichPlayerScore playerscore
 */
declare function GetPlayerScore(this: void, whichPlayer: player, whichPlayerScore: playerscore): integer;

/**
 * @param sourcePlayer player
 * @param otherPlayer player
 * @param whichAllianceSetting alliancetype
 */
declare function GetPlayerAlliance(this: void, sourcePlayer: player, otherPlayer: player, whichAllianceSetting: alliancetype): boolean;

/**
 * @param whichPlayer player
 */
declare function GetPlayerHandicap(this: void, whichPlayer: player): real;

/**
 * @param whichPlayer player
 */
declare function GetPlayerHandicapXP(this: void, whichPlayer: player): real;

/**
 * @param whichPlayer player
 * @param handicap real
 */
declare function SetPlayerHandicap(this: void, whichPlayer: player, handicap: real): nothing;

/**
 * @param whichPlayer player
 * @param handicap real
 */
declare function SetPlayerHandicapXP(this: void, whichPlayer: player, handicap: real): nothing;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param maximum integer
 */
declare function SetPlayerTechMaxAllowed(this: void, whichPlayer: player, techid: integer, maximum: integer): nothing;

/**
 * @param whichPlayer player
 * @param techid integer
 */
declare function GetPlayerTechMaxAllowed(this: void, whichPlayer: player, techid: integer): integer;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param levels integer
 */
declare function AddPlayerTechResearched(this: void, whichPlayer: player, techid: integer, levels: integer): nothing;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param setToLevel integer
 */
declare function SetPlayerTechResearched(this: void, whichPlayer: player, techid: integer, setToLevel: integer): nothing;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param specificonly boolean
 */
declare function GetPlayerTechResearched(this: void, whichPlayer: player, techid: integer, specificonly: boolean): boolean;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param specificonly boolean
 */
declare function GetPlayerTechCount(this: void, whichPlayer: player, techid: integer, specificonly: boolean): integer;

/**
 * @param whichPlayer player
 * @param newOwner integer
 */
declare function SetPlayerUnitsOwner(this: void, whichPlayer: player, newOwner: integer): nothing;

/**
 * @param whichPlayer player
 * @param toWhichPlayers force
 * @param flag boolean
 */
declare function CripplePlayer(this: void, whichPlayer: player, toWhichPlayers: force, flag: boolean): nothing;

/**
 * @param whichPlayer player
 * @param abilid integer
 * @param avail boolean
 */
declare function SetPlayerAbilityAvailable(this: void, whichPlayer: player, abilid: integer, avail: boolean): nothing;

/**
 * @param whichPlayer player
 * @param whichPlayerState playerstate
 * @param value integer
 */
declare function SetPlayerState(this: void, whichPlayer: player, whichPlayerState: playerstate, value: integer): nothing;

/**
 * @param whichPlayer player
 * @param gameResult playergameresult
 */
declare function RemovePlayer(this: void, whichPlayer: player, gameResult: playergameresult): nothing;

/**
 * @param whichPlayer player
 */
declare function CachePlayerHeroData(this: void, whichPlayer: player): nothing;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param where rect
 * @param useSharedVision boolean
 */
declare function SetFogStateRect(this: void, forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean): nothing;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param centerx real
 * @param centerY real
 * @param radius real
 * @param useSharedVision boolean
 */
declare function SetFogStateRadius(this: void, forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean): nothing;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param center location
 * @param radius real
 * @param useSharedVision boolean
 */
declare function SetFogStateRadiusLoc(this: void, forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean): nothing;

/**
 * @param enable boolean
 */
declare function FogMaskEnable(this: void, enable: boolean): nothing;

/**
 */
declare function IsFogMaskEnabled(this: void): boolean;

/**
 * @param enable boolean
 */
declare function FogEnable(this: void, enable: boolean): nothing;

/**
 */
declare function IsFogEnabled(this: void): boolean;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param where rect
 * @param useSharedVision boolean
 * @param afterUnits boolean
 */
declare function CreateFogModifierRect(this: void, forWhichPlayer: player, whichState: fogstate, where: rect, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param centerx real
 * @param centerY real
 * @param radius real
 * @param useSharedVision boolean
 * @param afterUnits boolean
 */
declare function CreateFogModifierRadius(this: void, forWhichPlayer: player, whichState: fogstate, centerx: real, centerY: real, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param forWhichPlayer player
 * @param whichState fogstate
 * @param center location
 * @param radius real
 * @param useSharedVision boolean
 * @param afterUnits boolean
 */
declare function CreateFogModifierRadiusLoc(this: void, forWhichPlayer: player, whichState: fogstate, center: location, radius: real, useSharedVision: boolean, afterUnits: boolean): fogmodifier;

/**
 * @param whichFogModifier fogmodifier
 */
declare function DestroyFogModifier(this: void, whichFogModifier: fogmodifier): nothing;

/**
 * @param whichFogModifier fogmodifier
 */
declare function FogModifierStart(this: void, whichFogModifier: fogmodifier): nothing;

/**
 * @param whichFogModifier fogmodifier
 */
declare function FogModifierStop(this: void, whichFogModifier: fogmodifier): nothing;

/**
 */
declare function VersionGet(this: void): version;

/**
 * @param whichVersion version
 */
declare function VersionCompatible(this: void, whichVersion: version): boolean;

/**
 * @param whichVersion version
 */
declare function VersionSupported(this: void, whichVersion: version): boolean;

/**
 * @param doScoreScreen boolean
 */
declare function EndGame(this: void, doScoreScreen: boolean): nothing;

/**
 * @param newLevel string
 * @param doScoreScreen boolean
 */
declare function ChangeLevel(this: void, newLevel: string, doScoreScreen: boolean): nothing;

/**
 * @param doScoreScreen boolean
 */
declare function RestartGame(this: void, doScoreScreen: boolean): nothing;

/**
 */
declare function ReloadGame(this: void): nothing;

/**
 * @param r race
 */
declare function SetCampaignMenuRace(this: void, r: race): nothing;

/**
 * @param campaignIndex integer
 */
declare function SetCampaignMenuRaceEx(this: void, campaignIndex: integer): nothing;

/**
 */
declare function ForceCampaignSelectScreen(this: void): nothing;

/**
 * @param saveFileName string
 * @param doScoreScreen boolean
 */
declare function LoadGame(this: void, saveFileName: string, doScoreScreen: boolean): nothing;

/**
 * @param saveFileName string
 */
declare function SaveGame(this: void, saveFileName: string): nothing;

/**
 * @param sourceDirName string
 * @param destDirName string
 */
declare function RenameSaveDirectory(this: void, sourceDirName: string, destDirName: string): boolean;

/**
 * @param sourceDirName string
 */
declare function RemoveSaveDirectory(this: void, sourceDirName: string): boolean;

/**
 * @param sourceSaveName string
 * @param destSaveName string
 */
declare function CopySaveGame(this: void, sourceSaveName: string, destSaveName: string): boolean;

/**
 * @param saveName string
 */
declare function SaveGameExists(this: void, saveName: string): boolean;

/**
 */
declare function SyncSelections(this: void): nothing;

/**
 * @param whichFloatGameState fgamestate
 * @param value real
 */
declare function SetFloatGameState(this: void, whichFloatGameState: fgamestate, value: real): nothing;

/**
 * @param whichFloatGameState fgamestate
 */
declare function GetFloatGameState(this: void, whichFloatGameState: fgamestate): real;

/**
 * @param whichIntegerGameState igamestate
 * @param value integer
 */
declare function SetIntegerGameState(this: void, whichIntegerGameState: igamestate, value: integer): nothing;

/**
 * @param whichIntegerGameState igamestate
 */
declare function GetIntegerGameState(this: void, whichIntegerGameState: igamestate): integer;

/**
 * @param cleared boolean
 */
declare function SetTutorialCleared(this: void, cleared: boolean): nothing;

/**
 * @param campaignNumber integer
 * @param missionNumber integer
 * @param available boolean
 */
declare function SetMissionAvailable(this: void, campaignNumber: integer, missionNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber integer
 * @param available boolean
 */
declare function SetCampaignAvailable(this: void, campaignNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber integer
 * @param available boolean
 */
declare function SetOpCinematicAvailable(this: void, campaignNumber: integer, available: boolean): nothing;

/**
 * @param campaignNumber integer
 * @param available boolean
 */
declare function SetEdCinematicAvailable(this: void, campaignNumber: integer, available: boolean): nothing;

/**
 */
declare function GetDefaultDifficulty(this: void): gamedifficulty;

/**
 * @param g gamedifficulty
 */
declare function SetDefaultDifficulty(this: void, g: gamedifficulty): nothing;

/**
 * @param whichButton integer
 * @param visible boolean
 */
declare function SetCustomCampaignButtonVisible(this: void, whichButton: integer, visible: boolean): nothing;

/**
 * @param whichButton integer
 */
declare function GetCustomCampaignButtonVisible(this: void, whichButton: integer): boolean;

/**
 */
declare function DoNotSaveReplay(this: void): nothing;

/**
 */
declare function DialogCreate(this: void): dialog;

/**
 * @param whichDialog dialog
 */
declare function DialogDestroy(this: void, whichDialog: dialog): nothing;

/**
 * @param whichDialog dialog
 */
declare function DialogClear(this: void, whichDialog: dialog): nothing;

/**
 * @param whichDialog dialog
 * @param messageText string
 */
declare function DialogSetMessage(this: void, whichDialog: dialog, messageText: string): nothing;

/**
 * @param whichDialog dialog
 * @param buttonText string
 * @param hotkey integer
 */
declare function DialogAddButton(this: void, whichDialog: dialog, buttonText: string, hotkey: integer): button;

/**
 * @param whichDialog dialog
 * @param doScoreScreen boolean
 * @param buttonText string
 * @param hotkey integer
 */
declare function DialogAddQuitButton(this: void, whichDialog: dialog, doScoreScreen: boolean, buttonText: string, hotkey: integer): button;

/**
 * @param whichPlayer player
 * @param whichDialog dialog
 * @param flag boolean
 */
declare function DialogDisplay(this: void, whichPlayer: player, whichDialog: dialog, flag: boolean): nothing;

/**
 */
declare function ReloadGameCachesFromDisk(this: void): boolean;

/**
 * @param campaignFile string
 */
declare function InitGameCache(this: void, campaignFile: string): gamecache;

/**
 * @param whichCache gamecache
 */
declare function SaveGameCache(this: void, whichCache: gamecache): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param value integer
 */
declare function StoreInteger(this: void, cache: gamecache, missionKey: string, key: string, value: integer): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param value real
 */
declare function StoreReal(this: void, cache: gamecache, missionKey: string, key: string, value: real): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param value boolean
 */
declare function StoreBoolean(this: void, cache: gamecache, missionKey: string, key: string, value: boolean): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param whichUnit unit
 */
declare function StoreUnit(this: void, cache: gamecache, missionKey: string, key: string, whichUnit: unit): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param value string
 */
declare function StoreString(this: void, cache: gamecache, missionKey: string, key: string, value: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function SyncStoredInteger(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function SyncStoredReal(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function SyncStoredBoolean(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function SyncStoredUnit(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function SyncStoredString(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function HaveStoredInteger(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function HaveStoredReal(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function HaveStoredBoolean(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function HaveStoredUnit(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function HaveStoredString(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 */
declare function FlushGameCache(this: void, cache: gamecache): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 */
declare function FlushStoredMission(this: void, cache: gamecache, missionKey: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function FlushStoredInteger(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function FlushStoredReal(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function FlushStoredBoolean(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function FlushStoredUnit(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function FlushStoredString(this: void, cache: gamecache, missionKey: string, key: string): nothing;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function GetStoredInteger(this: void, cache: gamecache, missionKey: string, key: string): integer;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function GetStoredReal(this: void, cache: gamecache, missionKey: string, key: string): real;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function GetStoredBoolean(this: void, cache: gamecache, missionKey: string, key: string): boolean;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 */
declare function GetStoredString(this: void, cache: gamecache, missionKey: string, key: string): string;

/**
 * @param cache gamecache
 * @param missionKey string
 * @param key string
 * @param forWhichPlayer player
 * @param x real
 * @param y real
 * @param facing real
 */
declare function RestoreUnit(this: void, cache: gamecache, missionKey: string, key: string, forWhichPlayer: player, x: real, y: real, facing: real): unit;

/**
 */
declare function InitHashtable(this: void): hashtable;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param value integer
 */
declare function SaveInteger(this: void, table: hashtable, parentKey: integer, childKey: integer, value: integer): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param value real
 */
declare function SaveReal(this: void, table: hashtable, parentKey: integer, childKey: integer, value: real): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param value boolean
 */
declare function SaveBoolean(this: void, table: hashtable, parentKey: integer, childKey: integer, value: boolean): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param value string
 */
declare function SaveStr(this: void, table: hashtable, parentKey: integer, childKey: integer, value: string): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichPlayer player
 */
declare function SavePlayerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichPlayer: player): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichWidget widget
 */
declare function SaveWidgetHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichWidget: widget): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichDestructable destructable
 */
declare function SaveDestructableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichDestructable: destructable): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichItem item
 */
declare function SaveItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichItem: item): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichUnit unit
 */
declare function SaveUnitHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichUnit: unit): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichAbility ability
 */
declare function SaveAbilityHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichAbility: ability): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTimer timer
 */
declare function SaveTimerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTimer: timer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTrigger trigger
 */
declare function SaveTriggerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTrigger: trigger): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTriggercondition triggercondition
 */
declare function SaveTriggerConditionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTriggercondition: triggercondition): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTriggeraction triggeraction
 */
declare function SaveTriggerActionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTriggeraction: triggeraction): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichEvent event
 */
declare function SaveTriggerEventHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichEvent: event): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichForce force
 */
declare function SaveForceHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichForce: force): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichGroup group
 */
declare function SaveGroupHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichGroup: group): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichLocation location
 */
declare function SaveLocationHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichLocation: location): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichRect rect
 */
declare function SaveRectHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichRect: rect): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichBoolexpr boolexpr
 */
declare function SaveBooleanExprHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichBoolexpr: boolexpr): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichSound sound
 */
declare function SaveSoundHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichSound: sound): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichEffect effect
 */
declare function SaveEffectHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichEffect: effect): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichUnitpool unitpool
 */
declare function SaveUnitPoolHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichUnitpool: unitpool): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichItempool itempool
 */
declare function SaveItemPoolHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichItempool: itempool): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichQuest quest
 */
declare function SaveQuestHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichQuest: quest): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichQuestitem questitem
 */
declare function SaveQuestItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichQuestitem: questitem): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichDefeatcondition defeatcondition
 */
declare function SaveDefeatConditionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichDefeatcondition: defeatcondition): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTimerdialog timerdialog
 */
declare function SaveTimerDialogHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTimerdialog: timerdialog): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichLeaderboard leaderboard
 */
declare function SaveLeaderboardHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichLeaderboard: leaderboard): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichMultiboard multiboard
 */
declare function SaveMultiboardHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichMultiboard: multiboard): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichMultiboarditem multiboarditem
 */
declare function SaveMultiboardItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichMultiboarditem: multiboarditem): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTrackable trackable
 */
declare function SaveTrackableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTrackable: trackable): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichDialog dialog
 */
declare function SaveDialogHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichDialog: dialog): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichButton button
 */
declare function SaveButtonHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichButton: button): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichTexttag texttag
 */
declare function SaveTextTagHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichTexttag: texttag): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichLightning lightning
 */
declare function SaveLightningHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichLightning: lightning): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichImage image
 */
declare function SaveImageHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichImage: image): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichUbersplat ubersplat
 */
declare function SaveUbersplatHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichUbersplat: ubersplat): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichRegion region
 */
declare function SaveRegionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichRegion: region): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichFogState fogstate
 */
declare function SaveFogStateHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichFogState: fogstate): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichFogModifier fogmodifier
 */
declare function SaveFogModifierHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichFogModifier: fogmodifier): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichAgent agent
 */
declare function SaveAgentHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichAgent: agent): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichHashtable hashtable
 */
declare function SaveHashtableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichHashtable: hashtable): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 * @param whichFrameHandle framehandle
 */
declare function SaveFrameHandle(this: void, table: hashtable, parentKey: integer, childKey: integer, whichFrameHandle: framehandle): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadInteger(this: void, table: hashtable, parentKey: integer, childKey: integer): integer;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadReal(this: void, table: hashtable, parentKey: integer, childKey: integer): real;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadBoolean(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadStr(this: void, table: hashtable, parentKey: integer, childKey: integer): string;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadPlayerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): player;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadWidgetHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): widget;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadDestructableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): destructable;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): item;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadUnitHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): unit;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadAbilityHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): ability;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTimerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): timer;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTriggerHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): trigger;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTriggerConditionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): triggercondition;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTriggerActionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): triggeraction;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTriggerEventHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): event;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadForceHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): force;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadGroupHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): group;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadLocationHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): location;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadRectHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): rect;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadBooleanExprHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): boolexpr;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadSoundHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): sound;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadEffectHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): effect;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadUnitPoolHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): unitpool;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadItemPoolHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): itempool;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadQuestHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): quest;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadQuestItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): questitem;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadDefeatConditionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): defeatcondition;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTimerDialogHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): timerdialog;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadLeaderboardHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): leaderboard;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadMultiboardHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): multiboard;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadMultiboardItemHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): multiboarditem;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTrackableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): trackable;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadDialogHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): dialog;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadButtonHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): button;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadTextTagHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): texttag;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadLightningHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): lightning;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadImageHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): image;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadUbersplatHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): ubersplat;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadRegionHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): region;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadFogStateHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): fogstate;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadFogModifierHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): fogmodifier;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadHashtableHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): hashtable;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function LoadFrameHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): framehandle;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function HaveSavedInteger(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function HaveSavedReal(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function HaveSavedBoolean(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function HaveSavedString(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function HaveSavedHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): boolean;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function RemoveSavedInteger(this: void, table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function RemoveSavedReal(this: void, table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function RemoveSavedBoolean(this: void, table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function RemoveSavedString(this: void, table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 * @param childKey integer
 */
declare function RemoveSavedHandle(this: void, table: hashtable, parentKey: integer, childKey: integer): nothing;

/**
 * @param table hashtable
 */
declare function FlushParentHashtable(this: void, table: hashtable): nothing;

/**
 * @param table hashtable
 * @param parentKey integer
 */
declare function FlushChildHashtable(this: void, table: hashtable, parentKey: integer): nothing;

/**
 * @param lowBound integer
 * @param highBound integer
 */
declare function GetRandomInt(this: void, lowBound: integer, highBound: integer): integer;

/**
 * @param lowBound real
 * @param highBound real
 */
declare function GetRandomReal(this: void, lowBound: real, highBound: real): real;

/**
 */
declare function CreateUnitPool(this: void): unitpool;

/**
 * @param whichPool unitpool
 */
declare function DestroyUnitPool(this: void, whichPool: unitpool): nothing;

/**
 * @param whichPool unitpool
 * @param unitId integer
 * @param weight real
 */
declare function UnitPoolAddUnitType(this: void, whichPool: unitpool, unitId: integer, weight: real): nothing;

/**
 * @param whichPool unitpool
 * @param unitId integer
 */
declare function UnitPoolRemoveUnitType(this: void, whichPool: unitpool, unitId: integer): nothing;

/**
 * @param whichPool unitpool
 * @param forWhichPlayer player
 * @param x real
 * @param y real
 * @param facing real
 */
declare function PlaceRandomUnit(this: void, whichPool: unitpool, forWhichPlayer: player, x: real, y: real, facing: real): unit;

/**
 */
declare function CreateItemPool(this: void): itempool;

/**
 * @param whichItemPool itempool
 */
declare function DestroyItemPool(this: void, whichItemPool: itempool): nothing;

/**
 * @param whichItemPool itempool
 * @param itemId integer
 * @param weight real
 */
declare function ItemPoolAddItemType(this: void, whichItemPool: itempool, itemId: integer, weight: real): nothing;

/**
 * @param whichItemPool itempool
 * @param itemId integer
 */
declare function ItemPoolRemoveItemType(this: void, whichItemPool: itempool, itemId: integer): nothing;

/**
 * @param whichItemPool itempool
 * @param x real
 * @param y real
 */
declare function PlaceRandomItem(this: void, whichItemPool: itempool, x: real, y: real): item;

/**
 * @param level integer
 */
declare function ChooseRandomCreep(this: void, level: integer): integer;

/**
 */
declare function ChooseRandomNPBuilding(this: void): integer;

/**
 * @param level integer
 */
declare function ChooseRandomItem(this: void, level: integer): integer;

/**
 * @param whichType itemtype
 * @param level integer
 */
declare function ChooseRandomItemEx(this: void, whichType: itemtype, level: integer): integer;

/**
 * @param seed integer
 */
declare function SetRandomSeed(this: void, seed: integer): nothing;

/**
 * @param a real
 * @param b real
 * @param c real
 * @param d real
 * @param e real
 */
declare function SetTerrainFog(this: void, a: real, b: real, c: real, d: real, e: real): nothing;

/**
 */
declare function ResetTerrainFog(this: void): nothing;

/**
 * @param a real
 * @param b real
 * @param c real
 * @param d real
 * @param e real
 */
declare function SetUnitFog(this: void, a: real, b: real, c: real, d: real, e: real): nothing;

/**
 * @param style integer
 * @param zstart real
 * @param zend real
 * @param density real
 * @param red real
 * @param green real
 * @param blue real
 */
declare function SetTerrainFogEx(this: void, style: integer, zstart: real, zend: real, density: real, red: real, green: real, blue: real): nothing;

/**
 * @param toPlayer player
 * @param x real
 * @param y real
 * @param message string
 */
declare function DisplayTextToPlayer(this: void, toPlayer: player, x: real, y: real, message: string): nothing;

/**
 * @param toPlayer player
 * @param x real
 * @param y real
 * @param duration real
 * @param message string
 */
declare function DisplayTimedTextToPlayer(this: void, toPlayer: player, x: real, y: real, duration: real, message: string): nothing;

/**
 * @param toPlayer player
 * @param x real
 * @param y real
 * @param duration real
 * @param message string
 */
declare function DisplayTimedTextFromPlayer(this: void, toPlayer: player, x: real, y: real, duration: real, message: string): nothing;

/**
 */
declare function ClearTextMessages(this: void): nothing;

/**
 * @param terrainDNCFile string
 * @param unitDNCFile string
 */
declare function SetDayNightModels(this: void, terrainDNCFile: string, unitDNCFile: string): nothing;

/**
 * @param skyModelFile string
 */
declare function SetSkyModel(this: void, skyModelFile: string): nothing;

/**
 * @param b boolean
 */
declare function EnableUserControl(this: void, b: boolean): nothing;

/**
 * @param b boolean
 */
declare function EnableUserUI(this: void, b: boolean): nothing;

/**
 * @param b boolean
 */
declare function SuspendTimeOfDay(this: void, b: boolean): nothing;

/**
 * @param r real
 */
declare function SetTimeOfDayScale(this: void, r: real): nothing;

/**
 */
declare function GetTimeOfDayScale(this: void): real;

/**
 * @param flag boolean
 * @param fadeDuration real
 */
declare function ShowInterface(this: void, flag: boolean, fadeDuration: real): nothing;

/**
 * @param flag boolean
 */
declare function PauseGame(this: void, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function UnitAddIndicator(this: void, whichUnit: unit, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichWidget widget
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function AddIndicator(this: void, whichWidget: widget, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param x real
 * @param y real
 * @param duration real
 */
declare function PingMinimap(this: void, x: real, y: real, duration: real): nothing;

/**
 * @param x real
 * @param y real
 * @param duration real
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param extraEffects boolean
 */
declare function PingMinimapEx(this: void, x: real, y: real, duration: real, red: integer, green: integer, blue: integer, extraEffects: boolean): nothing;

/**
 * @param flag boolean
 */
declare function EnableOcclusion(this: void, flag: boolean): nothing;

/**
 * @param introText string
 */
declare function SetIntroShotText(this: void, introText: string): nothing;

/**
 * @param introModelPath string
 */
declare function SetIntroShotModel(this: void, introModelPath: string): nothing;

/**
 * @param b boolean
 */
declare function EnableWorldFogBoundary(this: void, b: boolean): nothing;

/**
 * @param modelName string
 */
declare function PlayModelCinematic(this: void, modelName: string): nothing;

/**
 * @param movieName string
 */
declare function PlayCinematic(this: void, movieName: string): nothing;

/**
 * @param key string
 */
declare function ForceUIKey(this: void, key: string): nothing;

/**
 */
declare function ForceUICancel(this: void): nothing;

/**
 */
declare function DisplayLoadDialog(this: void): nothing;

/**
 * @param iconPath string
 */
declare function SetAltMinimapIcon(this: void, iconPath: string): nothing;

/**
 * @param flag boolean
 */
declare function DisableRestartMission(this: void, flag: boolean): nothing;

/**
 */
declare function CreateTextTag(this: void): texttag;

/**
 * @param t texttag
 */
declare function DestroyTextTag(this: void, t: texttag): nothing;

/**
 * @param t texttag
 * @param s string
 * @param height real
 */
declare function SetTextTagText(this: void, t: texttag, s: string, height: real): nothing;

/**
 * @param t texttag
 * @param x real
 * @param y real
 * @param heightOffset real
 */
declare function SetTextTagPos(this: void, t: texttag, x: real, y: real, heightOffset: real): nothing;

/**
 * @param t texttag
 * @param whichUnit unit
 * @param heightOffset real
 */
declare function SetTextTagPosUnit(this: void, t: texttag, whichUnit: unit, heightOffset: real): nothing;

/**
 * @param t texttag
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetTextTagColor(this: void, t: texttag, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param t texttag
 * @param xvel real
 * @param yvel real
 */
declare function SetTextTagVelocity(this: void, t: texttag, xvel: real, yvel: real): nothing;

/**
 * @param t texttag
 * @param flag boolean
 */
declare function SetTextTagVisibility(this: void, t: texttag, flag: boolean): nothing;

/**
 * @param t texttag
 * @param flag boolean
 */
declare function SetTextTagSuspended(this: void, t: texttag, flag: boolean): nothing;

/**
 * @param t texttag
 * @param flag boolean
 */
declare function SetTextTagPermanent(this: void, t: texttag, flag: boolean): nothing;

/**
 * @param t texttag
 * @param age real
 */
declare function SetTextTagAge(this: void, t: texttag, age: real): nothing;

/**
 * @param t texttag
 * @param lifespan real
 */
declare function SetTextTagLifespan(this: void, t: texttag, lifespan: real): nothing;

/**
 * @param t texttag
 * @param fadepoint real
 */
declare function SetTextTagFadepoint(this: void, t: texttag, fadepoint: real): nothing;

/**
 * @param reserved integer
 */
declare function SetReservedLocalHeroButtons(this: void, reserved: integer): nothing;

/**
 */
declare function GetAllyColorFilterState(this: void): integer;

/**
 * @param state integer
 */
declare function SetAllyColorFilterState(this: void, state: integer): nothing;

/**
 */
declare function GetCreepCampFilterState(this: void): boolean;

/**
 * @param state boolean
 */
declare function SetCreepCampFilterState(this: void, state: boolean): nothing;

/**
 * @param enableAlly boolean
 * @param enableCreep boolean
 */
declare function EnableMinimapFilterButtons(this: void, enableAlly: boolean, enableCreep: boolean): nothing;

/**
 * @param state boolean
 * @param ui boolean
 */
declare function EnableDragSelect(this: void, state: boolean, ui: boolean): nothing;

/**
 * @param state boolean
 * @param ui boolean
 */
declare function EnablePreSelect(this: void, state: boolean, ui: boolean): nothing;

/**
 * @param state boolean
 * @param ui boolean
 */
declare function EnableSelect(this: void, state: boolean, ui: boolean): nothing;

/**
 * @param trackableModelPath string
 * @param x real
 * @param y real
 * @param facing real
 */
declare function CreateTrackable(this: void, trackableModelPath: string, x: real, y: real, facing: real): trackable;

/**
 */
declare function CreateQuest(this: void): quest;

/**
 * @param whichQuest quest
 */
declare function DestroyQuest(this: void, whichQuest: quest): nothing;

/**
 * @param whichQuest quest
 * @param title string
 */
declare function QuestSetTitle(this: void, whichQuest: quest, title: string): nothing;

/**
 * @param whichQuest quest
 * @param description string
 */
declare function QuestSetDescription(this: void, whichQuest: quest, description: string): nothing;

/**
 * @param whichQuest quest
 * @param iconPath string
 */
declare function QuestSetIconPath(this: void, whichQuest: quest, iconPath: string): nothing;

/**
 * @param whichQuest quest
 * @param required boolean
 */
declare function QuestSetRequired(this: void, whichQuest: quest, required: boolean): nothing;

/**
 * @param whichQuest quest
 * @param completed boolean
 */
declare function QuestSetCompleted(this: void, whichQuest: quest, completed: boolean): nothing;

/**
 * @param whichQuest quest
 * @param discovered boolean
 */
declare function QuestSetDiscovered(this: void, whichQuest: quest, discovered: boolean): nothing;

/**
 * @param whichQuest quest
 * @param failed boolean
 */
declare function QuestSetFailed(this: void, whichQuest: quest, failed: boolean): nothing;

/**
 * @param whichQuest quest
 * @param enabled boolean
 */
declare function QuestSetEnabled(this: void, whichQuest: quest, enabled: boolean): nothing;

/**
 * @param whichQuest quest
 */
declare function IsQuestRequired(this: void, whichQuest: quest): boolean;

/**
 * @param whichQuest quest
 */
declare function IsQuestCompleted(this: void, whichQuest: quest): boolean;

/**
 * @param whichQuest quest
 */
declare function IsQuestDiscovered(this: void, whichQuest: quest): boolean;

/**
 * @param whichQuest quest
 */
declare function IsQuestFailed(this: void, whichQuest: quest): boolean;

/**
 * @param whichQuest quest
 */
declare function IsQuestEnabled(this: void, whichQuest: quest): boolean;

/**
 * @param whichQuest quest
 */
declare function QuestCreateItem(this: void, whichQuest: quest): questitem;

/**
 * @param whichQuestItem questitem
 * @param description string
 */
declare function QuestItemSetDescription(this: void, whichQuestItem: questitem, description: string): nothing;

/**
 * @param whichQuestItem questitem
 * @param completed boolean
 */
declare function QuestItemSetCompleted(this: void, whichQuestItem: questitem, completed: boolean): nothing;

/**
 * @param whichQuestItem questitem
 */
declare function IsQuestItemCompleted(this: void, whichQuestItem: questitem): boolean;

/**
 */
declare function CreateDefeatCondition(this: void): defeatcondition;

/**
 * @param whichCondition defeatcondition
 */
declare function DestroyDefeatCondition(this: void, whichCondition: defeatcondition): nothing;

/**
 * @param whichCondition defeatcondition
 * @param description string
 */
declare function DefeatConditionSetDescription(this: void, whichCondition: defeatcondition, description: string): nothing;

/**
 */
declare function FlashQuestDialogButton(this: void): nothing;

/**
 */
declare function ForceQuestDialogUpdate(this: void): nothing;

/**
 * @param t timer
 */
declare function CreateTimerDialog(this: void, t: timer): timerdialog;

/**
 * @param whichDialog timerdialog
 */
declare function DestroyTimerDialog(this: void, whichDialog: timerdialog): nothing;

/**
 * @param whichDialog timerdialog
 * @param title string
 */
declare function TimerDialogSetTitle(this: void, whichDialog: timerdialog, title: string): nothing;

/**
 * @param whichDialog timerdialog
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function TimerDialogSetTitleColor(this: void, whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichDialog timerdialog
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function TimerDialogSetTimeColor(this: void, whichDialog: timerdialog, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichDialog timerdialog
 * @param speedMultFactor real
 */
declare function TimerDialogSetSpeed(this: void, whichDialog: timerdialog, speedMultFactor: real): nothing;

/**
 * @param whichDialog timerdialog
 * @param display boolean
 */
declare function TimerDialogDisplay(this: void, whichDialog: timerdialog, display: boolean): nothing;

/**
 * @param whichDialog timerdialog
 */
declare function IsTimerDialogDisplayed(this: void, whichDialog: timerdialog): boolean;

/**
 * @param whichDialog timerdialog
 * @param timeRemaining real
 */
declare function TimerDialogSetRealTimeRemaining(this: void, whichDialog: timerdialog, timeRemaining: real): nothing;

/**
 */
declare function CreateLeaderboard(this: void): leaderboard;

/**
 * @param lb leaderboard
 */
declare function DestroyLeaderboard(this: void, lb: leaderboard): nothing;

/**
 * @param lb leaderboard
 * @param show boolean
 */
declare function LeaderboardDisplay(this: void, lb: leaderboard, show: boolean): nothing;

/**
 * @param lb leaderboard
 */
declare function IsLeaderboardDisplayed(this: void, lb: leaderboard): boolean;

/**
 * @param lb leaderboard
 */
declare function LeaderboardGetItemCount(this: void, lb: leaderboard): integer;

/**
 * @param lb leaderboard
 * @param count integer
 */
declare function LeaderboardSetSizeByItemCount(this: void, lb: leaderboard, count: integer): nothing;

/**
 * @param lb leaderboard
 * @param label string
 * @param value integer
 * @param p player
 */
declare function LeaderboardAddItem(this: void, lb: leaderboard, label: string, value: integer, p: player): nothing;

/**
 * @param lb leaderboard
 * @param index integer
 */
declare function LeaderboardRemoveItem(this: void, lb: leaderboard, index: integer): nothing;

/**
 * @param lb leaderboard
 * @param p player
 */
declare function LeaderboardRemovePlayerItem(this: void, lb: leaderboard, p: player): nothing;

/**
 * @param lb leaderboard
 */
declare function LeaderboardClear(this: void, lb: leaderboard): nothing;

/**
 * @param lb leaderboard
 * @param ascending boolean
 */
declare function LeaderboardSortItemsByValue(this: void, lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb leaderboard
 * @param ascending boolean
 */
declare function LeaderboardSortItemsByPlayer(this: void, lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb leaderboard
 * @param ascending boolean
 */
declare function LeaderboardSortItemsByLabel(this: void, lb: leaderboard, ascending: boolean): nothing;

/**
 * @param lb leaderboard
 * @param p player
 */
declare function LeaderboardHasPlayerItem(this: void, lb: leaderboard, p: player): boolean;

/**
 * @param lb leaderboard
 * @param p player
 */
declare function LeaderboardGetPlayerIndex(this: void, lb: leaderboard, p: player): integer;

/**
 * @param lb leaderboard
 * @param label string
 */
declare function LeaderboardSetLabel(this: void, lb: leaderboard, label: string): nothing;

/**
 * @param lb leaderboard
 */
declare function LeaderboardGetLabelText(this: void, lb: leaderboard): string;

/**
 * @param toPlayer player
 * @param lb leaderboard
 */
declare function PlayerSetLeaderboard(this: void, toPlayer: player, lb: leaderboard): nothing;

/**
 * @param toPlayer player
 */
declare function PlayerGetLeaderboard(this: void, toPlayer: player): leaderboard;

/**
 * @param lb leaderboard
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function LeaderboardSetLabelColor(this: void, lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb leaderboard
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function LeaderboardSetValueColor(this: void, lb: leaderboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb leaderboard
 * @param showLabel boolean
 * @param showNames boolean
 * @param showValues boolean
 * @param showIcons boolean
 */
declare function LeaderboardSetStyle(this: void, lb: leaderboard, showLabel: boolean, showNames: boolean, showValues: boolean, showIcons: boolean): nothing;

/**
 * @param lb leaderboard
 * @param whichItem integer
 * @param val integer
 */
declare function LeaderboardSetItemValue(this: void, lb: leaderboard, whichItem: integer, val: integer): nothing;

/**
 * @param lb leaderboard
 * @param whichItem integer
 * @param val string
 */
declare function LeaderboardSetItemLabel(this: void, lb: leaderboard, whichItem: integer, val: string): nothing;

/**
 * @param lb leaderboard
 * @param whichItem integer
 * @param showLabel boolean
 * @param showValue boolean
 * @param showIcon boolean
 */
declare function LeaderboardSetItemStyle(this: void, lb: leaderboard, whichItem: integer, showLabel: boolean, showValue: boolean, showIcon: boolean): nothing;

/**
 * @param lb leaderboard
 * @param whichItem integer
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function LeaderboardSetItemLabelColor(this: void, lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb leaderboard
 * @param whichItem integer
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function LeaderboardSetItemValueColor(this: void, lb: leaderboard, whichItem: integer, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 */
declare function CreateMultiboard(this: void): multiboard;

/**
 * @param lb multiboard
 */
declare function DestroyMultiboard(this: void, lb: multiboard): nothing;

/**
 * @param lb multiboard
 * @param show boolean
 */
declare function MultiboardDisplay(this: void, lb: multiboard, show: boolean): nothing;

/**
 * @param lb multiboard
 */
declare function IsMultiboardDisplayed(this: void, lb: multiboard): boolean;

/**
 * @param lb multiboard
 * @param minimize boolean
 */
declare function MultiboardMinimize(this: void, lb: multiboard, minimize: boolean): nothing;

/**
 * @param lb multiboard
 */
declare function IsMultiboardMinimized(this: void, lb: multiboard): boolean;

/**
 * @param lb multiboard
 */
declare function MultiboardClear(this: void, lb: multiboard): nothing;

/**
 * @param lb multiboard
 * @param label string
 */
declare function MultiboardSetTitleText(this: void, lb: multiboard, label: string): nothing;

/**
 * @param lb multiboard
 */
declare function MultiboardGetTitleText(this: void, lb: multiboard): string;

/**
 * @param lb multiboard
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function MultiboardSetTitleTextColor(this: void, lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb multiboard
 */
declare function MultiboardGetRowCount(this: void, lb: multiboard): integer;

/**
 * @param lb multiboard
 */
declare function MultiboardGetColumnCount(this: void, lb: multiboard): integer;

/**
 * @param lb multiboard
 * @param count integer
 */
declare function MultiboardSetColumnCount(this: void, lb: multiboard, count: integer): nothing;

/**
 * @param lb multiboard
 * @param count integer
 */
declare function MultiboardSetRowCount(this: void, lb: multiboard, count: integer): nothing;

/**
 * @param lb multiboard
 * @param showValues boolean
 * @param showIcons boolean
 */
declare function MultiboardSetItemsStyle(this: void, lb: multiboard, showValues: boolean, showIcons: boolean): nothing;

/**
 * @param lb multiboard
 * @param value string
 */
declare function MultiboardSetItemsValue(this: void, lb: multiboard, value: string): nothing;

/**
 * @param lb multiboard
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function MultiboardSetItemsValueColor(this: void, lb: multiboard, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param lb multiboard
 * @param width real
 */
declare function MultiboardSetItemsWidth(this: void, lb: multiboard, width: real): nothing;

/**
 * @param lb multiboard
 * @param iconPath string
 */
declare function MultiboardSetItemsIcon(this: void, lb: multiboard, iconPath: string): nothing;

/**
 * @param lb multiboard
 * @param row integer
 * @param column integer
 */
declare function MultiboardGetItem(this: void, lb: multiboard, row: integer, column: integer): multiboarditem;

/**
 * @param mbi multiboarditem
 */
declare function MultiboardReleaseItem(this: void, mbi: multiboarditem): nothing;

/**
 * @param mbi multiboarditem
 * @param showValue boolean
 * @param showIcon boolean
 */
declare function MultiboardSetItemStyle(this: void, mbi: multiboarditem, showValue: boolean, showIcon: boolean): nothing;

/**
 * @param mbi multiboarditem
 * @param val string
 */
declare function MultiboardSetItemValue(this: void, mbi: multiboarditem, val: string): nothing;

/**
 * @param mbi multiboarditem
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function MultiboardSetItemValueColor(this: void, mbi: multiboarditem, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param mbi multiboarditem
 * @param width real
 */
declare function MultiboardSetItemWidth(this: void, mbi: multiboarditem, width: real): nothing;

/**
 * @param mbi multiboarditem
 * @param iconFileName string
 */
declare function MultiboardSetItemIcon(this: void, mbi: multiboarditem, iconFileName: string): nothing;

/**
 * @param flag boolean
 */
declare function MultiboardSuppressDisplay(this: void, flag: boolean): nothing;

/**
 * @param x real
 * @param y real
 */
declare function SetCameraPosition(this: void, x: real, y: real): nothing;

/**
 * @param x real
 * @param y real
 */
declare function SetCameraQuickPosition(this: void, x: real, y: real): nothing;

/**
 * @param x1 real
 * @param y1 real
 * @param x2 real
 * @param y2 real
 * @param x3 real
 * @param y3 real
 * @param x4 real
 * @param y4 real
 */
declare function SetCameraBounds(this: void, x1: real, y1: real, x2: real, y2: real, x3: real, y3: real, x4: real, y4: real): nothing;

/**
 */
declare function StopCamera(this: void): nothing;

/**
 * @param duration real
 */
declare function ResetToGameCamera(this: void, duration: real): nothing;

/**
 * @param x real
 * @param y real
 */
declare function PanCameraTo(this: void, x: real, y: real): nothing;

/**
 * @param x real
 * @param y real
 * @param duration real
 */
declare function PanCameraToTimed(this: void, x: real, y: real, duration: real): nothing;

/**
 * @param x real
 * @param y real
 * @param zOffsetDest real
 */
declare function PanCameraToWithZ(this: void, x: real, y: real, zOffsetDest: real): nothing;

/**
 * @param x real
 * @param y real
 * @param zOffsetDest real
 * @param duration real
 */
declare function PanCameraToTimedWithZ(this: void, x: real, y: real, zOffsetDest: real, duration: real): nothing;

/**
 * @param cameraModelFile string
 */
declare function SetCinematicCamera(this: void, cameraModelFile: string): nothing;

/**
 * @param x real
 * @param y real
 * @param radiansToSweep real
 * @param duration real
 */
declare function SetCameraRotateMode(this: void, x: real, y: real, radiansToSweep: real, duration: real): nothing;

/**
 * @param whichField camerafield
 * @param value real
 * @param duration real
 */
declare function SetCameraField(this: void, whichField: camerafield, value: real, duration: real): nothing;

/**
 * @param whichField camerafield
 * @param offset real
 * @param duration real
 */
declare function AdjustCameraField(this: void, whichField: camerafield, offset: real, duration: real): nothing;

/**
 * @param whichUnit unit
 * @param xoffset real
 * @param yoffset real
 * @param inheritOrientation boolean
 */
declare function SetCameraTargetController(this: void, whichUnit: unit, xoffset: real, yoffset: real, inheritOrientation: boolean): nothing;

/**
 * @param whichUnit unit
 * @param xoffset real
 * @param yoffset real
 */
declare function SetCameraOrientController(this: void, whichUnit: unit, xoffset: real, yoffset: real): nothing;

/**
 */
declare function CreateCameraSetup(this: void): camerasetup;

/**
 * @param whichSetup camerasetup
 * @param whichField camerafield
 * @param value real
 * @param duration real
 */
declare function CameraSetupSetField(this: void, whichSetup: camerasetup, whichField: camerafield, value: real, duration: real): nothing;

/**
 * @param whichSetup camerasetup
 * @param whichField camerafield
 */
declare function CameraSetupGetField(this: void, whichSetup: camerasetup, whichField: camerafield): real;

/**
 * @param whichSetup camerasetup
 * @param x real
 * @param y real
 * @param duration real
 */
declare function CameraSetupSetDestPosition(this: void, whichSetup: camerasetup, x: real, y: real, duration: real): nothing;

/**
 * @param whichSetup camerasetup
 */
declare function CameraSetupGetDestPositionLoc(this: void, whichSetup: camerasetup): location;

/**
 * @param whichSetup camerasetup
 */
declare function CameraSetupGetDestPositionX(this: void, whichSetup: camerasetup): real;

/**
 * @param whichSetup camerasetup
 */
declare function CameraSetupGetDestPositionY(this: void, whichSetup: camerasetup): real;

/**
 * @param whichSetup camerasetup
 * @param doPan boolean
 * @param panTimed boolean
 */
declare function CameraSetupApply(this: void, whichSetup: camerasetup, doPan: boolean, panTimed: boolean): nothing;

/**
 * @param whichSetup camerasetup
 * @param zDestOffset real
 */
declare function CameraSetupApplyWithZ(this: void, whichSetup: camerasetup, zDestOffset: real): nothing;

/**
 * @param whichSetup camerasetup
 * @param doPan boolean
 * @param forceDuration real
 */
declare function CameraSetupApplyForceDuration(this: void, whichSetup: camerasetup, doPan: boolean, forceDuration: real): nothing;

/**
 * @param whichSetup camerasetup
 * @param zDestOffset real
 * @param forceDuration real
 */
declare function CameraSetupApplyForceDurationWithZ(this: void, whichSetup: camerasetup, zDestOffset: real, forceDuration: real): nothing;

/**
 * @param mag real
 * @param velocity real
 */
declare function CameraSetTargetNoise(this: void, mag: real, velocity: real): nothing;

/**
 * @param mag real
 * @param velocity real
 */
declare function CameraSetSourceNoise(this: void, mag: real, velocity: real): nothing;

/**
 * @param mag real
 * @param velocity real
 * @param vertOnly boolean
 */
declare function CameraSetTargetNoiseEx(this: void, mag: real, velocity: real, vertOnly: boolean): nothing;

/**
 * @param mag real
 * @param velocity real
 * @param vertOnly boolean
 */
declare function CameraSetSourceNoiseEx(this: void, mag: real, velocity: real, vertOnly: boolean): nothing;

/**
 * @param factor real
 */
declare function CameraSetSmoothingFactor(this: void, factor: real): nothing;

/**
 * @param filename string
 */
declare function SetCineFilterTexture(this: void, filename: string): nothing;

/**
 * @param whichMode blendmode
 */
declare function SetCineFilterBlendMode(this: void, whichMode: blendmode): nothing;

/**
 * @param whichFlags texmapflags
 */
declare function SetCineFilterTexMapFlags(this: void, whichFlags: texmapflags): nothing;

/**
 * @param minu real
 * @param minv real
 * @param maxu real
 * @param maxv real
 */
declare function SetCineFilterStartUV(this: void, minu: real, minv: real, maxu: real, maxv: real): nothing;

/**
 * @param minu real
 * @param minv real
 * @param maxu real
 * @param maxv real
 */
declare function SetCineFilterEndUV(this: void, minu: real, minv: real, maxu: real, maxv: real): nothing;

/**
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetCineFilterStartColor(this: void, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetCineFilterEndColor(this: void, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param duration real
 */
declare function SetCineFilterDuration(this: void, duration: real): nothing;

/**
 * @param flag boolean
 */
declare function DisplayCineFilter(this: void, flag: boolean): nothing;

/**
 */
declare function IsCineFilterDisplayed(this: void): boolean;

/**
 * @param portraitUnitId integer
 * @param color playercolor
 * @param speakerTitle string
 * @param text string
 * @param sceneDuration real
 * @param voiceoverDuration real
 */
declare function SetCinematicScene(this: void, portraitUnitId: integer, color: playercolor, speakerTitle: string, text: string, sceneDuration: real, voiceoverDuration: real): nothing;

/**
 */
declare function EndCinematicScene(this: void): nothing;

/**
 * @param flag boolean
 */
declare function ForceCinematicSubtitles(this: void, flag: boolean): nothing;

/**
 * @param whichMargin integer
 */
declare function GetCameraMargin(this: void, whichMargin: integer): real;

/**
 */
declare function GetCameraBoundMinX(this: void): real;

/**
 */
declare function GetCameraBoundMinY(this: void): real;

/**
 */
declare function GetCameraBoundMaxX(this: void): real;

/**
 */
declare function GetCameraBoundMaxY(this: void): real;

/**
 * @param whichField camerafield
 */
declare function GetCameraField(this: void, whichField: camerafield): real;

/**
 */
declare function GetCameraTargetPositionX(this: void): real;

/**
 */
declare function GetCameraTargetPositionY(this: void): real;

/**
 */
declare function GetCameraTargetPositionZ(this: void): real;

/**
 */
declare function GetCameraTargetPositionLoc(this: void): location;

/**
 */
declare function GetCameraEyePositionX(this: void): real;

/**
 */
declare function GetCameraEyePositionY(this: void): real;

/**
 */
declare function GetCameraEyePositionZ(this: void): real;

/**
 */
declare function GetCameraEyePositionLoc(this: void): location;

/**
 * @param environmentName string
 */
declare function NewSoundEnvironment(this: void, environmentName: string): nothing;

/**
 * @param fileName string
 * @param looping boolean
 * @param is3D boolean
 * @param stopwhenoutofrange boolean
 * @param fadeInRate integer
 * @param fadeOutRate integer
 * @param eaxSetting string
 */
declare function CreateSound(this: void, fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, eaxSetting: string): sound;

/**
 * @param fileName string
 * @param looping boolean
 * @param is3D boolean
 * @param stopwhenoutofrange boolean
 * @param fadeInRate integer
 * @param fadeOutRate integer
 * @param SLKEntryName string
 */
declare function CreateSoundFilenameWithLabel(this: void, fileName: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer, SLKEntryName: string): sound;

/**
 * @param soundLabel string
 * @param looping boolean
 * @param is3D boolean
 * @param stopwhenoutofrange boolean
 * @param fadeInRate integer
 * @param fadeOutRate integer
 */
declare function CreateSoundFromLabel(this: void, soundLabel: string, looping: boolean, is3D: boolean, stopwhenoutofrange: boolean, fadeInRate: integer, fadeOutRate: integer): sound;

/**
 * @param soundLabel string
 * @param fadeInRate integer
 * @param fadeOutRate integer
 */
declare function CreateMIDISound(this: void, soundLabel: string, fadeInRate: integer, fadeOutRate: integer): sound;

/**
 * @param soundHandle sound
 * @param soundLabel string
 */
declare function SetSoundParamsFromLabel(this: void, soundHandle: sound, soundLabel: string): nothing;

/**
 * @param soundHandle sound
 * @param cutoff real
 */
declare function SetSoundDistanceCutoff(this: void, soundHandle: sound, cutoff: real): nothing;

/**
 * @param soundHandle sound
 * @param channel integer
 */
declare function SetSoundChannel(this: void, soundHandle: sound, channel: integer): nothing;

/**
 * @param soundHandle sound
 * @param volume integer
 */
declare function SetSoundVolume(this: void, soundHandle: sound, volume: integer): nothing;

/**
 * @param soundHandle sound
 * @param pitch real
 */
declare function SetSoundPitch(this: void, soundHandle: sound, pitch: real): nothing;

/**
 * @param soundHandle sound
 * @param millisecs integer
 */
declare function SetSoundPlayPosition(this: void, soundHandle: sound, millisecs: integer): nothing;

/**
 * @param soundHandle sound
 * @param minDist real
 * @param maxDist real
 */
declare function SetSoundDistances(this: void, soundHandle: sound, minDist: real, maxDist: real): nothing;

/**
 * @param soundHandle sound
 * @param inside real
 * @param outside real
 * @param outsideVolume integer
 */
declare function SetSoundConeAngles(this: void, soundHandle: sound, inside: real, outside: real, outsideVolume: integer): nothing;

/**
 * @param soundHandle sound
 * @param x real
 * @param y real
 * @param z real
 */
declare function SetSoundConeOrientation(this: void, soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle sound
 * @param x real
 * @param y real
 * @param z real
 */
declare function SetSoundPosition(this: void, soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle sound
 * @param x real
 * @param y real
 * @param z real
 */
declare function SetSoundVelocity(this: void, soundHandle: sound, x: real, y: real, z: real): nothing;

/**
 * @param soundHandle sound
 * @param whichUnit unit
 */
declare function AttachSoundToUnit(this: void, soundHandle: sound, whichUnit: unit): nothing;

/**
 * @param soundHandle sound
 */
declare function StartSound(this: void, soundHandle: sound): nothing;

/**
 * @param soundHandle sound
 * @param killWhenDone boolean
 * @param fadeOut boolean
 */
declare function StopSound(this: void, soundHandle: sound, killWhenDone: boolean, fadeOut: boolean): nothing;

/**
 * @param soundHandle sound
 */
declare function KillSoundWhenDone(this: void, soundHandle: sound): nothing;

/**
 * @param musicName string
 * @param random boolean
 * @param index integer
 */
declare function SetMapMusic(this: void, musicName: string, random: boolean, index: integer): nothing;

/**
 */
declare function ClearMapMusic(this: void): nothing;

/**
 * @param musicName string
 */
declare function PlayMusic(this: void, musicName: string): nothing;

/**
 * @param musicName string
 * @param frommsecs integer
 * @param fadeinmsecs integer
 */
declare function PlayMusicEx(this: void, musicName: string, frommsecs: integer, fadeinmsecs: integer): nothing;

/**
 * @param fadeOut boolean
 */
declare function StopMusic(this: void, fadeOut: boolean): nothing;

/**
 */
declare function ResumeMusic(this: void): nothing;

/**
 * @param musicFileName string
 */
declare function PlayThematicMusic(this: void, musicFileName: string): nothing;

/**
 * @param musicFileName string
 * @param frommsecs integer
 */
declare function PlayThematicMusicEx(this: void, musicFileName: string, frommsecs: integer): nothing;

/**
 */
declare function EndThematicMusic(this: void): nothing;

/**
 * @param volume integer
 */
declare function SetMusicVolume(this: void, volume: integer): nothing;

/**
 * @param millisecs integer
 */
declare function SetMusicPlayPosition(this: void, millisecs: integer): nothing;

/**
 * @param millisecs integer
 */
declare function SetThematicMusicPlayPosition(this: void, millisecs: integer): nothing;

/**
 * @param soundHandle sound
 * @param duration integer
 */
declare function SetSoundDuration(this: void, soundHandle: sound, duration: integer): nothing;

/**
 * @param soundHandle sound
 */
declare function GetSoundDuration(this: void, soundHandle: sound): integer;

/**
 * @param musicFileName string
 */
declare function GetSoundFileDuration(this: void, musicFileName: string): integer;

/**
 * @param vgroup volumegroup
 * @param scale real
 */
declare function VolumeGroupSetVolume(this: void, vgroup: volumegroup, scale: real): nothing;

/**
 */
declare function VolumeGroupReset(this: void): nothing;

/**
 * @param soundHandle sound
 */
declare function GetSoundIsPlaying(this: void, soundHandle: sound): boolean;

/**
 * @param soundHandle sound
 */
declare function GetSoundIsLoading(this: void, soundHandle: sound): boolean;

/**
 * @param soundHandle sound
 * @param byPosition boolean
 * @param rectwidth real
 * @param rectheight real
 */
declare function RegisterStackedSound(this: void, soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): nothing;

/**
 * @param soundHandle sound
 * @param byPosition boolean
 * @param rectwidth real
 * @param rectheight real
 */
declare function UnregisterStackedSound(this: void, soundHandle: sound, byPosition: boolean, rectwidth: real, rectheight: real): nothing;

/**
 * @param where rect
 * @param effectID integer
 */
declare function AddWeatherEffect(this: void, where: rect, effectID: integer): weathereffect;

/**
 * @param whichEffect weathereffect
 */
declare function RemoveWeatherEffect(this: void, whichEffect: weathereffect): nothing;

/**
 * @param whichEffect weathereffect
 * @param enable boolean
 */
declare function EnableWeatherEffect(this: void, whichEffect: weathereffect, enable: boolean): nothing;

/**
 * @param x real
 * @param y real
 * @param radius real
 * @param depth real
 * @param duration integer
 * @param permanent boolean
 */
declare function TerrainDeformCrater(this: void, x: real, y: real, radius: real, depth: real, duration: integer, permanent: boolean): terraindeformation;

/**
 * @param x real
 * @param y real
 * @param radius real
 * @param depth real
 * @param duration integer
 * @param count integer
 * @param spaceWaves real
 * @param timeWaves real
 * @param radiusStartPct real
 * @param limitNeg boolean
 */
declare function TerrainDeformRipple(this: void, x: real, y: real, radius: real, depth: real, duration: integer, count: integer, spaceWaves: real, timeWaves: real, radiusStartPct: real, limitNeg: boolean): terraindeformation;

/**
 * @param x real
 * @param y real
 * @param dirX real
 * @param dirY real
 * @param distance real
 * @param speed real
 * @param radius real
 * @param depth real
 * @param trailTime integer
 * @param count integer
 */
declare function TerrainDeformWave(this: void, x: real, y: real, dirX: real, dirY: real, distance: real, speed: real, radius: real, depth: real, trailTime: integer, count: integer): terraindeformation;

/**
 * @param x real
 * @param y real
 * @param radius real
 * @param minDelta real
 * @param maxDelta real
 * @param duration integer
 * @param updateInterval integer
 */
declare function TerrainDeformRandom(this: void, x: real, y: real, radius: real, minDelta: real, maxDelta: real, duration: integer, updateInterval: integer): terraindeformation;

/**
 * @param deformation terraindeformation
 * @param duration integer
 */
declare function TerrainDeformStop(this: void, deformation: terraindeformation, duration: integer): nothing;

/**
 */
declare function TerrainDeformStopAll(this: void): nothing;

/**
 * @param modelName string
 * @param x real
 * @param y real
 */
declare function AddSpecialEffect(this: void, modelName: string, x: real, y: real): effect;

/**
 * @param modelName string
 * @param where location
 */
declare function AddSpecialEffectLoc(this: void, modelName: string, where: location): effect;

/**
 * @param modelName string
 * @param targetWidget widget
 * @param attachPointName string
 */
declare function AddSpecialEffectTarget(this: void, modelName: string, targetWidget: widget, attachPointName: string): effect;

/**
 * @param whichEffect effect
 */
declare function DestroyEffect(this: void, whichEffect: effect): nothing;

/**
 * @param abilityString string
 * @param t effecttype
 * @param x real
 * @param y real
 */
declare function AddSpellEffect(this: void, abilityString: string, t: effecttype, x: real, y: real): effect;

/**
 * @param abilityString string
 * @param t effecttype
 * @param where location
 */
declare function AddSpellEffectLoc(this: void, abilityString: string, t: effecttype, where: location): effect;

/**
 * @param abilityId integer
 * @param t effecttype
 * @param x real
 * @param y real
 */
declare function AddSpellEffectById(this: void, abilityId: integer, t: effecttype, x: real, y: real): effect;

/**
 * @param abilityId integer
 * @param t effecttype
 * @param where location
 */
declare function AddSpellEffectByIdLoc(this: void, abilityId: integer, t: effecttype, where: location): effect;

/**
 * @param modelName string
 * @param t effecttype
 * @param targetWidget widget
 * @param attachPoint string
 */
declare function AddSpellEffectTarget(this: void, modelName: string, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * @param abilityId integer
 * @param t effecttype
 * @param targetWidget widget
 * @param attachPoint string
 */
declare function AddSpellEffectTargetById(this: void, abilityId: integer, t: effecttype, targetWidget: widget, attachPoint: string): effect;

/**
 * @param codeName string
 * @param checkVisibility boolean
 * @param x1 real
 * @param y1 real
 * @param x2 real
 * @param y2 real
 */
declare function AddLightning(this: void, codeName: string, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): lightning;

/**
 * @param codeName string
 * @param checkVisibility boolean
 * @param x1 real
 * @param y1 real
 * @param z1 real
 * @param x2 real
 * @param y2 real
 * @param z2 real
 */
declare function AddLightningEx(this: void, codeName: string, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): lightning;

/**
 * @param whichBolt lightning
 */
declare function DestroyLightning(this: void, whichBolt: lightning): boolean;

/**
 * @param whichBolt lightning
 * @param checkVisibility boolean
 * @param x1 real
 * @param y1 real
 * @param x2 real
 * @param y2 real
 */
declare function MoveLightning(this: void, whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, x2: real, y2: real): boolean;

/**
 * @param whichBolt lightning
 * @param checkVisibility boolean
 * @param x1 real
 * @param y1 real
 * @param z1 real
 * @param x2 real
 * @param y2 real
 * @param z2 real
 */
declare function MoveLightningEx(this: void, whichBolt: lightning, checkVisibility: boolean, x1: real, y1: real, z1: real, x2: real, y2: real, z2: real): boolean;

/**
 * @param whichBolt lightning
 */
declare function GetLightningColorA(this: void, whichBolt: lightning): real;

/**
 * @param whichBolt lightning
 */
declare function GetLightningColorR(this: void, whichBolt: lightning): real;

/**
 * @param whichBolt lightning
 */
declare function GetLightningColorG(this: void, whichBolt: lightning): real;

/**
 * @param whichBolt lightning
 */
declare function GetLightningColorB(this: void, whichBolt: lightning): real;

/**
 * @param whichBolt lightning
 * @param r real
 * @param g real
 * @param b real
 * @param a real
 */
declare function SetLightningColor(this: void, whichBolt: lightning, r: real, g: real, b: real, a: real): boolean;

/**
 * @param abilityString string
 * @param t effecttype
 * @param index integer
 */
declare function GetAbilityEffect(this: void, abilityString: string, t: effecttype, index: integer): string;

/**
 * @param abilityId integer
 * @param t effecttype
 * @param index integer
 */
declare function GetAbilityEffectById(this: void, abilityId: integer, t: effecttype, index: integer): string;

/**
 * @param abilityString string
 * @param t soundtype
 */
declare function GetAbilitySound(this: void, abilityString: string, t: soundtype): string;

/**
 * @param abilityId integer
 * @param t soundtype
 */
declare function GetAbilitySoundById(this: void, abilityId: integer, t: soundtype): string;

/**
 * @param x real
 * @param y real
 */
declare function GetTerrainCliffLevel(this: void, x: real, y: real): integer;

/**
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetWaterBaseColor(this: void, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param val boolean
 */
declare function SetWaterDeforms(this: void, val: boolean): nothing;

/**
 * @param x real
 * @param y real
 */
declare function GetTerrainType(this: void, x: real, y: real): integer;

/**
 * @param x real
 * @param y real
 */
declare function GetTerrainVariance(this: void, x: real, y: real): integer;

/**
 * @param x real
 * @param y real
 * @param terrainType integer
 * @param variation integer
 * @param area integer
 * @param shape integer
 */
declare function SetTerrainType(this: void, x: real, y: real, terrainType: integer, variation: integer, area: integer, shape: integer): nothing;

/**
 * @param x real
 * @param y real
 * @param t pathingtype
 */
declare function IsTerrainPathable(this: void, x: real, y: real, t: pathingtype): boolean;

/**
 * @param x real
 * @param y real
 * @param t pathingtype
 * @param flag boolean
 */
declare function SetTerrainPathable(this: void, x: real, y: real, t: pathingtype, flag: boolean): nothing;

/**
 * @param file string
 * @param sizeX real
 * @param sizeY real
 * @param sizeZ real
 * @param posX real
 * @param posY real
 * @param posZ real
 * @param originX real
 * @param originY real
 * @param originZ real
 * @param imageType integer
 */
declare function CreateImage(this: void, file: string, sizeX: real, sizeY: real, sizeZ: real, posX: real, posY: real, posZ: real, originX: real, originY: real, originZ: real, imageType: integer): image;

/**
 * @param whichImage image
 */
declare function DestroyImage(this: void, whichImage: image): nothing;

/**
 * @param whichImage image
 * @param flag boolean
 */
declare function ShowImage(this: void, whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage image
 * @param flag boolean
 * @param height real
 */
declare function SetImageConstantHeight(this: void, whichImage: image, flag: boolean, height: real): nothing;

/**
 * @param whichImage image
 * @param x real
 * @param y real
 * @param z real
 */
declare function SetImagePosition(this: void, whichImage: image, x: real, y: real, z: real): nothing;

/**
 * @param whichImage image
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 */
declare function SetImageColor(this: void, whichImage: image, red: integer, green: integer, blue: integer, alpha: integer): nothing;

/**
 * @param whichImage image
 * @param flag boolean
 */
declare function SetImageRender(this: void, whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage image
 * @param flag boolean
 */
declare function SetImageRenderAlways(this: void, whichImage: image, flag: boolean): nothing;

/**
 * @param whichImage image
 * @param flag boolean
 * @param useWaterAlpha boolean
 */
declare function SetImageAboveWater(this: void, whichImage: image, flag: boolean, useWaterAlpha: boolean): nothing;

/**
 * @param whichImage image
 * @param imageType integer
 */
declare function SetImageType(this: void, whichImage: image, imageType: integer): nothing;

/**
 * @param x real
 * @param y real
 * @param name string
 * @param red integer
 * @param green integer
 * @param blue integer
 * @param alpha integer
 * @param forcePaused boolean
 * @param noBirthTime boolean
 */
declare function CreateUbersplat(this: void, x: real, y: real, name: string, red: integer, green: integer, blue: integer, alpha: integer, forcePaused: boolean, noBirthTime: boolean): ubersplat;

/**
 * @param whichSplat ubersplat
 */
declare function DestroyUbersplat(this: void, whichSplat: ubersplat): nothing;

/**
 * @param whichSplat ubersplat
 */
declare function ResetUbersplat(this: void, whichSplat: ubersplat): nothing;

/**
 * @param whichSplat ubersplat
 */
declare function FinishUbersplat(this: void, whichSplat: ubersplat): nothing;

/**
 * @param whichSplat ubersplat
 * @param flag boolean
 */
declare function ShowUbersplat(this: void, whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichSplat ubersplat
 * @param flag boolean
 */
declare function SetUbersplatRender(this: void, whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichSplat ubersplat
 * @param flag boolean
 */
declare function SetUbersplatRenderAlways(this: void, whichSplat: ubersplat, flag: boolean): nothing;

/**
 * @param whichPlayer player
 * @param x real
 * @param y real
 * @param radius real
 * @param addBlight boolean
 */
declare function SetBlight(this: void, whichPlayer: player, x: real, y: real, radius: real, addBlight: boolean): nothing;

/**
 * @param whichPlayer player
 * @param r rect
 * @param addBlight boolean
 */
declare function SetBlightRect(this: void, whichPlayer: player, r: rect, addBlight: boolean): nothing;

/**
 * @param whichPlayer player
 * @param x real
 * @param y real
 * @param addBlight boolean
 */
declare function SetBlightPoint(this: void, whichPlayer: player, x: real, y: real, addBlight: boolean): nothing;

/**
 * @param whichPlayer player
 * @param whichLocation location
 * @param radius real
 * @param addBlight boolean
 */
declare function SetBlightLoc(this: void, whichPlayer: player, whichLocation: location, radius: real, addBlight: boolean): nothing;

/**
 * @param id player
 * @param x real
 * @param y real
 * @param face real
 */
declare function CreateBlightedGoldmine(this: void, id: player, x: real, y: real, face: real): unit;

/**
 * @param x real
 * @param y real
 */
declare function IsPointBlighted(this: void, x: real, y: real): boolean;

/**
 * @param x real
 * @param y real
 * @param radius real
 * @param doodadID integer
 * @param nearestOnly boolean
 * @param animName string
 * @param animRandom boolean
 */
declare function SetDoodadAnimation(this: void, x: real, y: real, radius: real, doodadID: integer, nearestOnly: boolean, animName: string, animRandom: boolean): nothing;

/**
 * @param r rect
 * @param doodadID integer
 * @param animName string
 * @param animRandom boolean
 */
declare function SetDoodadAnimationRect(this: void, r: rect, doodadID: integer, animName: string, animRandom: boolean): nothing;

/**
 * @param num player
 * @param script string
 */
declare function StartMeleeAI(this: void, num: player, script: string): nothing;

/**
 * @param num player
 * @param script string
 */
declare function StartCampaignAI(this: void, num: player, script: string): nothing;

/**
 * @param num player
 * @param command integer
 * @param data integer
 */
declare function CommandAI(this: void, num: player, command: integer, data: integer): nothing;

/**
 * @param p player
 * @param pause boolean
 */
declare function PauseCompAI(this: void, p: player, pause: boolean): nothing;

/**
 * @param num player
 */
declare function GetAIDifficulty(this: void, num: player): aidifficulty;

/**
 * @param hUnit unit
 */
declare function RemoveGuardPosition(this: void, hUnit: unit): nothing;

/**
 * @param hUnit unit
 */
declare function RecycleGuardPosition(this: void, hUnit: unit): nothing;

/**
 * @param num player
 */
declare function RemoveAllGuardPositions(this: void, num: player): nothing;

/**
 * @param cheatStr string
 */
declare function Cheat(this: void, cheatStr: string): nothing;

/**
 */
declare function IsNoVictoryCheat(this: void): boolean;

/**
 */
declare function IsNoDefeatCheat(this: void): boolean;

/**
 * @param filename string
 */
declare function Preload(this: void, filename: string): nothing;

/**
 * @param timeout real
 */
declare function PreloadEnd(this: void, timeout: real): nothing;

/**
 */
declare function PreloadStart(this: void): nothing;

/**
 */
declare function PreloadRefresh(this: void): nothing;

/**
 */
declare function PreloadEndEx(this: void): nothing;

/**
 */
declare function PreloadGenClear(this: void): nothing;

/**
 */
declare function PreloadGenStart(this: void): nothing;

/**
 * @param filename string
 */
declare function PreloadGenEnd(this: void, filename: string): nothing;

/**
 * @param filename string
 */
declare function Preloader(this: void, filename: string): nothing;

/**
 * @param testType string
 */
declare function AutomationSetTestType(this: void, testType: string): nothing;

/**
 * @param testName string
 */
declare function AutomationTestStart(this: void, testName: string): nothing;

/**
 */
declare function AutomationTestEnd(this: void): nothing;

/**
 */
declare function AutomationTestingFinished(this: void): nothing;

/**
 */
declare function BlzGetTriggerPlayerMouseX(this: void): real;

/**
 */
declare function BlzGetTriggerPlayerMouseY(this: void): real;

/**
 */
declare function BlzGetTriggerPlayerMousePosition(this: void): location;

/**
 */
declare function BlzGetTriggerPlayerMouseButton(this: void): mousebuttontype;

/**
 * @param abilCode integer
 * @param tooltip string
 * @param level integer
 */
declare function BlzSetAbilityTooltip(this: void, abilCode: integer, tooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param tooltip string
 * @param level integer
 */
declare function BlzSetAbilityActivatedTooltip(this: void, abilCode: integer, tooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param extendedTooltip string
 * @param level integer
 */
declare function BlzSetAbilityExtendedTooltip(this: void, abilCode: integer, extendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param extendedTooltip string
 * @param level integer
 */
declare function BlzSetAbilityActivatedExtendedTooltip(this: void, abilCode: integer, extendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param researchTooltip string
 * @param level integer
 */
declare function BlzSetAbilityResearchTooltip(this: void, abilCode: integer, researchTooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param researchExtendedTooltip string
 * @param level integer
 */
declare function BlzSetAbilityResearchExtendedTooltip(this: void, abilCode: integer, researchExtendedTooltip: string, level: integer): nothing;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityActivatedTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityExtendedTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityActivatedExtendedTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityResearchTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param level integer
 */
declare function BlzGetAbilityResearchExtendedTooltip(this: void, abilCode: integer, level: integer): string;

/**
 * @param abilCode integer
 * @param iconPath string
 */
declare function BlzSetAbilityIcon(this: void, abilCode: integer, iconPath: string): nothing;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityIcon(this: void, abilCode: integer): string;

/**
 * @param abilCode integer
 * @param iconPath string
 */
declare function BlzSetAbilityActivatedIcon(this: void, abilCode: integer, iconPath: string): nothing;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityActivatedIcon(this: void, abilCode: integer): string;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityPosX(this: void, abilCode: integer): integer;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityPosY(this: void, abilCode: integer): integer;

/**
 * @param abilCode integer
 * @param x integer
 */
declare function BlzSetAbilityPosX(this: void, abilCode: integer, x: integer): nothing;

/**
 * @param abilCode integer
 * @param y integer
 */
declare function BlzSetAbilityPosY(this: void, abilCode: integer, y: integer): nothing;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityActivatedPosX(this: void, abilCode: integer): integer;

/**
 * @param abilCode integer
 */
declare function BlzGetAbilityActivatedPosY(this: void, abilCode: integer): integer;

/**
 * @param abilCode integer
 * @param x integer
 */
declare function BlzSetAbilityActivatedPosX(this: void, abilCode: integer, x: integer): nothing;

/**
 * @param abilCode integer
 * @param y integer
 */
declare function BlzSetAbilityActivatedPosY(this: void, abilCode: integer, y: integer): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzGetUnitMaxHP(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 * @param hp integer
 */
declare function BlzSetUnitMaxHP(this: void, whichUnit: unit, hp: integer): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzGetUnitMaxMana(this: void, whichUnit: unit): integer;

/**
 * @param whichUnit unit
 * @param mana integer
 */
declare function BlzSetUnitMaxMana(this: void, whichUnit: unit, mana: integer): nothing;

/**
 * @param whichItem item
 * @param name string
 */
declare function BlzSetItemName(this: void, whichItem: item, name: string): nothing;

/**
 * @param whichItem item
 * @param description string
 */
declare function BlzSetItemDescription(this: void, whichItem: item, description: string): nothing;

/**
 * @param whichItem item
 */
declare function BlzGetItemDescription(this: void, whichItem: item): string;

/**
 * @param whichItem item
 * @param tooltip string
 */
declare function BlzSetItemTooltip(this: void, whichItem: item, tooltip: string): nothing;

/**
 * @param whichItem item
 */
declare function BlzGetItemTooltip(this: void, whichItem: item): string;

/**
 * @param whichItem item
 * @param extendedTooltip string
 */
declare function BlzSetItemExtendedTooltip(this: void, whichItem: item, extendedTooltip: string): nothing;

/**
 * @param whichItem item
 */
declare function BlzGetItemExtendedTooltip(this: void, whichItem: item): string;

/**
 * @param whichItem item
 * @param iconPath string
 */
declare function BlzSetItemIconPath(this: void, whichItem: item, iconPath: string): nothing;

/**
 * @param whichItem item
 */
declare function BlzGetItemIconPath(this: void, whichItem: item): string;

/**
 * @param whichUnit unit
 * @param name string
 */
declare function BlzSetUnitName(this: void, whichUnit: unit, name: string): nothing;

/**
 * @param whichUnit unit
 * @param heroProperName string
 */
declare function BlzSetHeroProperName(this: void, whichUnit: unit, heroProperName: string): nothing;

/**
 * @param whichUnit unit
 * @param weaponIndex integer
 */
declare function BlzGetUnitBaseDamage(this: void, whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit unit
 * @param baseDamage integer
 * @param weaponIndex integer
 */
declare function BlzSetUnitBaseDamage(this: void, whichUnit: unit, baseDamage: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit unit
 * @param weaponIndex integer
 */
declare function BlzGetUnitDiceNumber(this: void, whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit unit
 * @param diceNumber integer
 * @param weaponIndex integer
 */
declare function BlzSetUnitDiceNumber(this: void, whichUnit: unit, diceNumber: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit unit
 * @param weaponIndex integer
 */
declare function BlzGetUnitDiceSides(this: void, whichUnit: unit, weaponIndex: integer): integer;

/**
 * @param whichUnit unit
 * @param diceSides integer
 * @param weaponIndex integer
 */
declare function BlzSetUnitDiceSides(this: void, whichUnit: unit, diceSides: integer, weaponIndex: integer): nothing;

/**
 * @param whichUnit unit
 * @param weaponIndex integer
 */
declare function BlzGetUnitAttackCooldown(this: void, whichUnit: unit, weaponIndex: integer): real;

/**
 * @param whichUnit unit
 * @param cooldown real
 * @param weaponIndex integer
 */
declare function BlzSetUnitAttackCooldown(this: void, whichUnit: unit, cooldown: real, weaponIndex: integer): nothing;

/**
 * @param whichEffect effect
 * @param whichPlayer player
 */
declare function BlzSetSpecialEffectColorByPlayer(this: void, whichEffect: effect, whichPlayer: player): nothing;

/**
 * @param whichEffect effect
 * @param r integer
 * @param g integer
 * @param b integer
 */
declare function BlzSetSpecialEffectColor(this: void, whichEffect: effect, r: integer, g: integer, b: integer): nothing;

/**
 * @param whichEffect effect
 * @param alpha integer
 */
declare function BlzSetSpecialEffectAlpha(this: void, whichEffect: effect, alpha: integer): nothing;

/**
 * @param whichEffect effect
 * @param scale real
 */
declare function BlzSetSpecialEffectScale(this: void, whichEffect: effect, scale: real): nothing;

/**
 * @param whichEffect effect
 * @param x real
 * @param y real
 * @param z real
 */
declare function BlzSetSpecialEffectPosition(this: void, whichEffect: effect, x: real, y: real, z: real): nothing;

/**
 * @param whichEffect effect
 * @param height real
 */
declare function BlzSetSpecialEffectHeight(this: void, whichEffect: effect, height: real): nothing;

/**
 * @param whichEffect effect
 * @param timeScale real
 */
declare function BlzSetSpecialEffectTimeScale(this: void, whichEffect: effect, timeScale: real): nothing;

/**
 * @param whichEffect effect
 * @param time real
 */
declare function BlzSetSpecialEffectTime(this: void, whichEffect: effect, time: real): nothing;

/**
 * @param whichEffect effect
 * @param yaw real
 * @param pitch real
 * @param roll real
 */
declare function BlzSetSpecialEffectOrientation(this: void, whichEffect: effect, yaw: real, pitch: real, roll: real): nothing;

/**
 * @param whichEffect effect
 * @param yaw real
 */
declare function BlzSetSpecialEffectYaw(this: void, whichEffect: effect, yaw: real): nothing;

/**
 * @param whichEffect effect
 * @param pitch real
 */
declare function BlzSetSpecialEffectPitch(this: void, whichEffect: effect, pitch: real): nothing;

/**
 * @param whichEffect effect
 * @param roll real
 */
declare function BlzSetSpecialEffectRoll(this: void, whichEffect: effect, roll: real): nothing;

/**
 * @param whichEffect effect
 * @param x real
 */
declare function BlzSetSpecialEffectX(this: void, whichEffect: effect, x: real): nothing;

/**
 * @param whichEffect effect
 * @param y real
 */
declare function BlzSetSpecialEffectY(this: void, whichEffect: effect, y: real): nothing;

/**
 * @param whichEffect effect
 * @param z real
 */
declare function BlzSetSpecialEffectZ(this: void, whichEffect: effect, z: real): nothing;

/**
 * @param whichEffect effect
 * @param loc location
 */
declare function BlzSetSpecialEffectPositionLoc(this: void, whichEffect: effect, loc: location): nothing;

/**
 * @param whichEffect effect
 */
declare function BlzGetLocalSpecialEffectX(this: void, whichEffect: effect): real;

/**
 * @param whichEffect effect
 */
declare function BlzGetLocalSpecialEffectY(this: void, whichEffect: effect): real;

/**
 * @param whichEffect effect
 */
declare function BlzGetLocalSpecialEffectZ(this: void, whichEffect: effect): real;

/**
 * @param whichEffect effect
 */
declare function BlzSpecialEffectClearSubAnimations(this: void, whichEffect: effect): nothing;

/**
 * @param whichEffect effect
 * @param whichSubAnim subanimtype
 */
declare function BlzSpecialEffectRemoveSubAnimation(this: void, whichEffect: effect, whichSubAnim: subanimtype): nothing;

/**
 * @param whichEffect effect
 * @param whichSubAnim subanimtype
 */
declare function BlzSpecialEffectAddSubAnimation(this: void, whichEffect: effect, whichSubAnim: subanimtype): nothing;

/**
 * @param whichEffect effect
 * @param whichAnim animtype
 */
declare function BlzPlaySpecialEffect(this: void, whichEffect: effect, whichAnim: animtype): nothing;

/**
 * @param whichEffect effect
 * @param whichAnim animtype
 * @param timeScale real
 */
declare function BlzPlaySpecialEffectWithTimeScale(this: void, whichEffect: effect, whichAnim: animtype, timeScale: real): nothing;

/**
 * @param whichAnim animtype
 */
declare function BlzGetAnimName(this: void, whichAnim: animtype): string;

/**
 * @param whichUnit unit
 */
declare function BlzGetUnitArmor(this: void, whichUnit: unit): real;

/**
 * @param whichUnit unit
 * @param armorAmount real
 */
declare function BlzSetUnitArmor(this: void, whichUnit: unit, armorAmount: real): nothing;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param flag boolean
 */
declare function BlzUnitHideAbility(this: void, whichUnit: unit, abilId: integer, flag: boolean): nothing;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param flag boolean
 * @param hideUI boolean
 */
declare function BlzUnitDisableAbility(this: void, whichUnit: unit, abilId: integer, flag: boolean, hideUI: boolean): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzUnitCancelTimedLife(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzIsUnitSelectable(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function BlzIsUnitInvulnerable(this: void, whichUnit: unit): boolean;

/**
 * @param whichUnit unit
 */
declare function BlzUnitInterruptAttack(this: void, whichUnit: unit): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzGetUnitCollisionSize(this: void, whichUnit: unit): real;

/**
 * @param abilId integer
 * @param level integer
 */
declare function BlzGetAbilityManaCost(this: void, abilId: integer, level: integer): integer;

/**
 * @param abilId integer
 * @param level integer
 */
declare function BlzGetAbilityCooldown(this: void, abilId: integer, level: integer): real;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param level integer
 * @param cooldown real
 */
declare function BlzSetUnitAbilityCooldown(this: void, whichUnit: unit, abilId: integer, level: integer, cooldown: real): nothing;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param level integer
 */
declare function BlzGetUnitAbilityCooldown(this: void, whichUnit: unit, abilId: integer, level: integer): real;

/**
 * @param whichUnit unit
 * @param abilId integer
 */
declare function BlzGetUnitAbilityCooldownRemaining(this: void, whichUnit: unit, abilId: integer): real;

/**
 * @param whichUnit unit
 * @param abilCode integer
 */
declare function BlzEndUnitAbilityCooldown(this: void, whichUnit: unit, abilCode: integer): nothing;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param level integer
 */
declare function BlzGetUnitAbilityManaCost(this: void, whichUnit: unit, abilId: integer, level: integer): integer;

/**
 * @param whichUnit unit
 * @param abilId integer
 * @param level integer
 * @param manaCost integer
 */
declare function BlzSetUnitAbilityManaCost(this: void, whichUnit: unit, abilId: integer, level: integer, manaCost: integer): nothing;

/**
 * @param whichUnit unit
 */
declare function BlzGetLocalUnitZ(this: void, whichUnit: unit): real;

/**
 * @param whichPlayer player
 * @param techid integer
 * @param levels integer
 */
declare function BlzDecPlayerTechResearched(this: void, whichPlayer: player, techid: integer, levels: integer): nothing;

/**
 * @param damage real
 */
declare function BlzSetEventDamage(this: void, damage: real): nothing;

/**
 */
declare function BlzGetEventDamageTarget(this: void): unit;

/**
 */
declare function BlzGetEventAttackType(this: void): attacktype;

/**
 */
declare function BlzGetEventDamageType(this: void): damagetype;

/**
 */
declare function BlzGetEventWeaponType(this: void): weapontype;

/**
 * @param attackType attacktype
 */
declare function BlzSetEventAttackType(this: void, attackType: attacktype): boolean;

/**
 * @param damageType damagetype
 */
declare function BlzSetEventDamageType(this: void, damageType: damagetype): boolean;

/**
 * @param weaponType weapontype
 */
declare function BlzSetEventWeaponType(this: void, weaponType: weapontype): boolean;

/**
 * @param dataType integer
 * @param whichPlayer player
 * @param param1 string
 * @param param2 string
 * @param param3 boolean
 * @param param4 integer
 * @param param5 integer
 * @param param6 integer
 */
declare function RequestExtraIntegerData(this: void, dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): integer;

/**
 * @param dataType integer
 * @param whichPlayer player
 * @param param1 string
 * @param param2 string
 * @param param3 boolean
 * @param param4 integer
 * @param param5 integer
 * @param param6 integer
 */
declare function RequestExtraBooleanData(this: void, dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): boolean;

/**
 * @param dataType integer
 * @param whichPlayer player
 * @param param1 string
 * @param param2 string
 * @param param3 boolean
 * @param param4 integer
 * @param param5 integer
 * @param param6 integer
 */
declare function RequestExtraStringData(this: void, dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): string;

/**
 * @param dataType integer
 * @param whichPlayer player
 * @param param1 string
 * @param param2 string
 * @param param3 boolean
 * @param param4 integer
 * @param param5 integer
 * @param param6 integer
 */
declare function RequestExtraRealData(this: void, dataType: integer, whichPlayer: player, param1: string, param2: string, param3: boolean, param4: integer, param5: integer, param6: integer): real;

/**
 * @param whichUnit unit
 */
declare function BlzGetUnitZ(this: void, whichUnit: unit): real;

/**
 * @param enableSelection boolean
 * @param enableSelectionCircle boolean
 */
declare function BlzEnableSelections(this: void, enableSelection: boolean, enableSelectionCircle: boolean): nothing;

/**
 */
declare function BlzIsSelectionEnabled(this: void): boolean;

/**
 */
declare function BlzIsSelectionCircleEnabled(this: void): boolean;

/**
 * @param whichSetup camerasetup
 * @param doPan boolean
 * @param forcedDuration real
 * @param easeInDuration real
 * @param easeOutDuration real
 * @param smoothFactor real
 */
declare function BlzCameraSetupApplyForceDurationSmooth(this: void, whichSetup: camerasetup, doPan: boolean, forcedDuration: real, easeInDuration: real, easeOutDuration: real, smoothFactor: real): nothing;

/**
 * @param enable boolean
 */
declare function BlzEnableTargetIndicator(this: void, enable: boolean): nothing;

/**
 */
declare function BlzIsTargetIndicatorEnabled(this: void): boolean;

/**
 * @param frameType originframetype
 * @param index integer
 */
declare function BlzGetOriginFrame(this: void, frameType: originframetype, index: integer): framehandle;

/**
 * @param enable boolean
 */
declare function BlzEnableUIAutoPosition(this: void, enable: boolean): nothing;

/**
 * @param enable boolean
 */
declare function BlzHideOriginFrames(this: void, enable: boolean): nothing;

/**
 * @param a integer
 * @param r integer
 * @param g integer
 * @param b integer
 */
declare function BlzConvertColor(this: void, a: integer, r: integer, g: integer, b: integer): integer;

/**
 * @param TOCFile string
 */
declare function BlzLoadTOCFile(this: void, TOCFile: string): boolean;

/**
 * @param name string
 * @param owner framehandle
 * @param priority integer
 * @param createContext integer
 */
declare function BlzCreateFrame(this: void, name: string, owner: framehandle, priority: integer, createContext: integer): framehandle;

/**
 * @param name string
 * @param owner framehandle
 * @param createContext integer
 */
declare function BlzCreateSimpleFrame(this: void, name: string, owner: framehandle, createContext: integer): framehandle;

/**
 * @param typeName string
 * @param name string
 * @param owner framehandle
 * @param inherits string
 * @param createContext integer
 */
declare function BlzCreateFrameByType(this: void, typeName: string, name: string, owner: framehandle, inherits: string, createContext: integer): framehandle;

/**
 * @param frame framehandle
 */
declare function BlzDestroyFrame(this: void, frame: framehandle): nothing;

/**
 * @param frame framehandle
 * @param point framepointtype
 * @param relative framehandle
 * @param relativePoint framepointtype
 * @param x real
 * @param y real
 */
declare function BlzFrameSetPoint(this: void, frame: framehandle, point: framepointtype, relative: framehandle, relativePoint: framepointtype, x: real, y: real): nothing;

/**
 * @param frame framehandle
 * @param point framepointtype
 * @param x real
 * @param y real
 */
declare function BlzFrameSetAbsPoint(this: void, frame: framehandle, point: framepointtype, x: real, y: real): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameClearAllPoints(this: void, frame: framehandle): nothing;

/**
 * @param frame framehandle
 * @param relative framehandle
 */
declare function BlzFrameSetAllPoints(this: void, frame: framehandle, relative: framehandle): nothing;

/**
 * @param frame framehandle
 * @param visible boolean
 */
declare function BlzFrameSetVisible(this: void, frame: framehandle, visible: boolean): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameIsVisible(this: void, frame: framehandle): boolean;

/**
 * @param name string
 * @param createContext integer
 */
declare function BlzGetFrameByName(this: void, name: string, createContext: integer): framehandle;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetName(this: void, frame: framehandle): string;

/**
 * @param frame framehandle
 */
declare function BlzFrameClick(this: void, frame: framehandle): nothing;

/**
 * @param frame framehandle
 * @param text string
 */
declare function BlzFrameSetText(this: void, frame: framehandle, text: string): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetText(this: void, frame: framehandle): string;

/**
 * @param frame framehandle
 * @param size integer
 */
declare function BlzFrameSetTextSizeLimit(this: void, frame: framehandle, size: integer): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetTextSizeLimit(this: void, frame: framehandle): integer;

/**
 * @param frame framehandle
 * @param color integer
 */
declare function BlzFrameSetTextColor(this: void, frame: framehandle, color: integer): nothing;

/**
 * @param frame framehandle
 * @param flag boolean
 */
declare function BlzFrameSetFocus(this: void, frame: framehandle, flag: boolean): nothing;

/**
 * @param frame framehandle
 * @param modelFile string
 * @param cameraIndex integer
 */
declare function BlzFrameSetModel(this: void, frame: framehandle, modelFile: string, cameraIndex: integer): nothing;

/**
 * @param frame framehandle
 * @param enabled boolean
 */
declare function BlzFrameSetEnable(this: void, frame: framehandle, enabled: boolean): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetEnable(this: void, frame: framehandle): boolean;

/**
 * @param frame framehandle
 * @param alpha integer
 */
declare function BlzFrameSetAlpha(this: void, frame: framehandle, alpha: integer): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetAlpha(this: void, frame: framehandle): integer;

/**
 * @param frame framehandle
 * @param primaryProp integer
 * @param flags integer
 */
declare function BlzFrameSetSpriteAnimate(this: void, frame: framehandle, primaryProp: integer, flags: integer): nothing;

/**
 * @param frame framehandle
 * @param texFile string
 * @param flag integer
 * @param blend boolean
 */
declare function BlzFrameSetTexture(this: void, frame: framehandle, texFile: string, flag: integer, blend: boolean): nothing;

/**
 * @param frame framehandle
 * @param scale real
 */
declare function BlzFrameSetScale(this: void, frame: framehandle, scale: real): nothing;

/**
 * @param frame framehandle
 * @param tooltip framehandle
 */
declare function BlzFrameSetTooltip(this: void, frame: framehandle, tooltip: framehandle): nothing;

/**
 * @param frame framehandle
 * @param enable boolean
 */
declare function BlzFrameCageMouse(this: void, frame: framehandle, enable: boolean): nothing;

/**
 * @param frame framehandle
 * @param value real
 */
declare function BlzFrameSetValue(this: void, frame: framehandle, value: real): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetValue(this: void, frame: framehandle): real;

/**
 * @param frame framehandle
 * @param minValue real
 * @param maxValue real
 */
declare function BlzFrameSetMinMaxValue(this: void, frame: framehandle, minValue: real, maxValue: real): nothing;

/**
 * @param frame framehandle
 * @param stepSize real
 */
declare function BlzFrameSetStepSize(this: void, frame: framehandle, stepSize: real): nothing;

/**
 * @param frame framehandle
 * @param width real
 * @param height real
 */
declare function BlzFrameSetSize(this: void, frame: framehandle, width: real, height: real): nothing;

/**
 * @param frame framehandle
 * @param color integer
 */
declare function BlzFrameSetVertexColor(this: void, frame: framehandle, color: integer): nothing;

/**
 * @param frame framehandle
 * @param level integer
 */
declare function BlzFrameSetLevel(this: void, frame: framehandle, level: integer): nothing;

/**
 * @param frame framehandle
 * @param parent framehandle
 */
declare function BlzFrameSetParent(this: void, frame: framehandle, parent: framehandle): nothing;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetParent(this: void, frame: framehandle): framehandle;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetHeight(this: void, frame: framehandle): real;

/**
 * @param frame framehandle
 */
declare function BlzFrameGetWidth(this: void, frame: framehandle): real;

/**
 * @param frame framehandle
 * @param fileName string
 * @param height real
 * @param flags integer
 */
declare function BlzFrameSetFont(this: void, frame: framehandle, fileName: string, height: real, flags: integer): nothing;

/**
 * @param frame framehandle
 * @param vert textaligntype
 * @param horz textaligntype
 */
declare function BlzFrameSetTextAlignment(this: void, frame: framehandle, vert: textaligntype, horz: textaligntype): nothing;

/**
 * @param whichTrigger trigger
 * @param frame framehandle
 * @param eventId frameeventtype
 */
declare function BlzTriggerRegisterFrameEvent(this: void, whichTrigger: trigger, frame: framehandle, eventId: frameeventtype): event;

/**
 */
declare function BlzGetTriggerFrame(this: void): framehandle;

/**
 */
declare function BlzGetTriggerFrameEvent(this: void): frameeventtype;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param prefix string
 * @param fromServer boolean
 */
declare function BlzTriggerRegisterPlayerSyncEvent(this: void, whichTrigger: trigger, whichPlayer: player, prefix: string, fromServer: boolean): event;

/**
 * @param prefix string
 * @param data string
 */
declare function BlzSendSyncData(this: void, prefix: string, data: string): boolean;

/**
 */
declare function BlzGetTriggerSyncPrefix(this: void): string;

/**
 */
declare function BlzGetTriggerSyncData(this: void): string;

/**
 * @param whichTrigger trigger
 * @param whichPlayer player
 * @param key oskeytype
 * @param metaKey integer
 * @param keyDown boolean
 */
declare function BlzTriggerRegisterPlayerKeyEvent(this: void, whichTrigger: trigger, whichPlayer: player, key: oskeytype, metaKey: integer, keyDown: boolean): event;

/**
 */
declare function BlzGetTriggerPlayerKey(this: void): oskeytype;

/**
 */
declare function BlzGetTriggerPlayerMetaKey(this: void): integer;

/**
 */
declare function BlzGetTriggerPlayerIsKeyDown(this: void): boolean;

/**
 * @param enable boolean
 */
declare function BlzEnableCursor(this: void, enable: boolean): nothing;

/**
 * @param x integer
 * @param y integer
 */
declare function BlzSetMousePos(this: void, x: integer, y: integer): nothing;

/**
 */
declare function BlzGetLocalClientWidth(this: void): integer;

/**
 */
declare function BlzGetLocalClientHeight(this: void): integer;

/**
 */
declare function BlzIsLocalClientActive(this: void): boolean;

/**
 */
declare function BlzGetMouseFocusUnit(this: void): unit;

/**
 * @param texFile string
 */
declare function BlzChangeMinimapTerrainTex(this: void, texFile: string): boolean;

/**
 */
declare function BlzGetLocale(this: void): string;

/**
 * @param whichEffect effect
 */
declare function BlzGetSpecialEffectScale(this: void, whichEffect: effect): real;

/**
 * @param whichEffect effect
 * @param x real
 * @param y real
 * @param z real
 */
declare function BlzSetSpecialEffectMatrixScale(this: void, whichEffect: effect, x: real, y: real, z: real): nothing;

/**
 * @param whichEffect effect
 */
declare function BlzResetSpecialEffectMatrix(this: void, whichEffect: effect): nothing;

/**
 * @param whichUnit unit
 * @param abilId integer
 */
declare function BlzGetUnitAbility(this: void, whichUnit: unit, abilId: integer): ability;

/**
 * @param whichUnit unit
 * @param index integer
 */
declare function BlzGetUnitAbilityByIndex(this: void, whichUnit: unit, index: integer): ability;

/**
 * @param whichPlayer player
 * @param recipient integer
 * @param message string
 */
declare function BlzDisplayChatMessage(this: void, whichPlayer: player, recipient: integer, message: string): nothing;

/**
 * @param whichUnit unit
 * @param flag boolean
 */
declare function BlzPauseUnitEx(this: void, whichUnit: unit, flag: boolean): nothing;

/**
 * @param x integer
 * @param y integer
 */
declare function BlzBitOr(this: void, x: integer, y: integer): integer;

/**
 * @param x integer
 * @param y integer
 */
declare function BlzBitAnd(this: void, x: integer, y: integer): integer;

/**
 * @param x integer
 * @param y integer
 */
declare function BlzBitXor(this: void, x: integer, y: integer): integer;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanfield
 */
declare function BlzGetAbilityBooleanField(this: void, whichAbility: ability, whichField: abilitybooleanfield): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerfield
 */
declare function BlzGetAbilityIntegerField(this: void, whichAbility: ability, whichField: abilityintegerfield): integer;

/**
 * @param whichAbility ability
 * @param whichField abilityrealfield
 */
declare function BlzGetAbilityRealField(this: void, whichAbility: ability, whichField: abilityrealfield): real;

/**
 * @param whichAbility ability
 * @param whichField abilitystringfield
 */
declare function BlzGetAbilityStringField(this: void, whichAbility: ability, whichField: abilitystringfield): string;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelfield
 * @param level integer
 */
declare function BlzGetAbilityBooleanLevelField(this: void, whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelfield
 * @param level integer
 */
declare function BlzGetAbilityIntegerLevelField(this: void, whichAbility: ability, whichField: abilityintegerlevelfield, level: integer): integer;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelfield
 * @param level integer
 */
declare function BlzGetAbilityRealLevelField(this: void, whichAbility: ability, whichField: abilityreallevelfield, level: integer): real;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelfield
 * @param level integer
 */
declare function BlzGetAbilityStringLevelField(this: void, whichAbility: ability, whichField: abilitystringlevelfield, level: integer): string;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelarrayfield
 * @param level integer
 * @param index integer
 */
declare function BlzGetAbilityBooleanLevelArrayField(this: void, whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelarrayfield
 * @param level integer
 * @param index integer
 */
declare function BlzGetAbilityIntegerLevelArrayField(this: void, whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer): integer;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelarrayfield
 * @param level integer
 * @param index integer
 */
declare function BlzGetAbilityRealLevelArrayField(this: void, whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer): real;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelarrayfield
 * @param level integer
 * @param index integer
 */
declare function BlzGetAbilityStringLevelArrayField(this: void, whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer): string;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanfield
 * @param value boolean
 */
declare function BlzSetAbilityBooleanField(this: void, whichAbility: ability, whichField: abilitybooleanfield, value: boolean): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerfield
 * @param value integer
 */
declare function BlzSetAbilityIntegerField(this: void, whichAbility: ability, whichField: abilityintegerfield, value: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityrealfield
 * @param value real
 */
declare function BlzSetAbilityRealField(this: void, whichAbility: ability, whichField: abilityrealfield, value: real): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitystringfield
 * @param value string
 */
declare function BlzSetAbilityStringField(this: void, whichAbility: ability, whichField: abilitystringfield, value: string): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelfield
 * @param level integer
 * @param value boolean
 */
declare function BlzSetAbilityBooleanLevelField(this: void, whichAbility: ability, whichField: abilitybooleanlevelfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelfield
 * @param level integer
 * @param value integer
 */
declare function BlzSetAbilityIntegerLevelField(this: void, whichAbility: ability, whichField: abilityintegerlevelfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelfield
 * @param level integer
 * @param value real
 */
declare function BlzSetAbilityRealLevelField(this: void, whichAbility: ability, whichField: abilityreallevelfield, level: integer, value: real): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelfield
 * @param level integer
 * @param value string
 */
declare function BlzSetAbilityStringLevelField(this: void, whichAbility: ability, whichField: abilitystringlevelfield, level: integer, value: string): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelarrayfield
 * @param level integer
 * @param index integer
 * @param value boolean
 */
declare function BlzSetAbilityBooleanLevelArrayField(this: void, whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, index: integer, value: boolean): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelarrayfield
 * @param level integer
 * @param index integer
 * @param value integer
 */
declare function BlzSetAbilityIntegerLevelArrayField(this: void, whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, index: integer, value: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelarrayfield
 * @param level integer
 * @param index integer
 * @param value real
 */
declare function BlzSetAbilityRealLevelArrayField(this: void, whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, index: integer, value: real): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelarrayfield
 * @param level integer
 * @param index integer
 * @param value string
 */
declare function BlzSetAbilityStringLevelArrayField(this: void, whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, index: integer, value: string): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelarrayfield
 * @param level integer
 * @param value boolean
 */
declare function BlzAddAbilityBooleanLevelArrayField(this: void, whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelarrayfield
 * @param level integer
 * @param value integer
 */
declare function BlzAddAbilityIntegerLevelArrayField(this: void, whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelarrayfield
 * @param level integer
 * @param value real
 */
declare function BlzAddAbilityRealLevelArrayField(this: void, whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelarrayfield
 * @param level integer
 * @param value string
 */
declare function BlzAddAbilityStringLevelArrayField(this: void, whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitybooleanlevelarrayfield
 * @param level integer
 * @param value boolean
 */
declare function BlzRemoveAbilityBooleanLevelArrayField(this: void, whichAbility: ability, whichField: abilitybooleanlevelarrayfield, level: integer, value: boolean): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityintegerlevelarrayfield
 * @param level integer
 * @param value integer
 */
declare function BlzRemoveAbilityIntegerLevelArrayField(this: void, whichAbility: ability, whichField: abilityintegerlevelarrayfield, level: integer, value: integer): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilityreallevelarrayfield
 * @param level integer
 * @param value real
 */
declare function BlzRemoveAbilityRealLevelArrayField(this: void, whichAbility: ability, whichField: abilityreallevelarrayfield, level: integer, value: real): boolean;

/**
 * @param whichAbility ability
 * @param whichField abilitystringlevelarrayfield
 * @param level integer
 * @param value string
 */
declare function BlzRemoveAbilityStringLevelArrayField(this: void, whichAbility: ability, whichField: abilitystringlevelarrayfield, level: integer, value: string): boolean;

/**
 * @param whichItem item
 * @param index integer
 */
declare function BlzGetItemAbilityByIndex(this: void, whichItem: item, index: integer): ability;

/**
 * @param whichItem item
 * @param abilCode integer
 */
declare function BlzGetItemAbility(this: void, whichItem: item, abilCode: integer): ability;

/**
 * @param whichItem item
 * @param abilCode integer
 */
declare function BlzItemAddAbility(this: void, whichItem: item, abilCode: integer): boolean;

/**
 * @param whichItem item
 * @param whichField itembooleanfield
 */
declare function BlzGetItemBooleanField(this: void, whichItem: item, whichField: itembooleanfield): boolean;

/**
 * @param whichItem item
 * @param whichField itemintegerfield
 */
declare function BlzGetItemIntegerField(this: void, whichItem: item, whichField: itemintegerfield): integer;

/**
 * @param whichItem item
 * @param whichField itemrealfield
 */
declare function BlzGetItemRealField(this: void, whichItem: item, whichField: itemrealfield): real;

/**
 * @param whichItem item
 * @param whichField itemstringfield
 */
declare function BlzGetItemStringField(this: void, whichItem: item, whichField: itemstringfield): string;

/**
 * @param whichItem item
 * @param whichField itembooleanfield
 * @param value boolean
 */
declare function BlzSetItemBooleanField(this: void, whichItem: item, whichField: itembooleanfield, value: boolean): boolean;

/**
 * @param whichItem item
 * @param whichField itemintegerfield
 * @param value integer
 */
declare function BlzSetItemIntegerField(this: void, whichItem: item, whichField: itemintegerfield, value: integer): boolean;

/**
 * @param whichItem item
 * @param whichField itemrealfield
 * @param value real
 */
declare function BlzSetItemRealField(this: void, whichItem: item, whichField: itemrealfield, value: real): boolean;

/**
 * @param whichItem item
 * @param whichField itemstringfield
 * @param value string
 */
declare function BlzSetItemStringField(this: void, whichItem: item, whichField: itemstringfield, value: string): boolean;

/**
 * @param whichItem item
 * @param abilCode integer
 */
declare function BlzItemRemoveAbility(this: void, whichItem: item, abilCode: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitbooleanfield
 */
declare function BlzGetUnitBooleanField(this: void, whichUnit: unit, whichField: unitbooleanfield): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitintegerfield
 */
declare function BlzGetUnitIntegerField(this: void, whichUnit: unit, whichField: unitintegerfield): integer;

/**
 * @param whichUnit unit
 * @param whichField unitrealfield
 */
declare function BlzGetUnitRealField(this: void, whichUnit: unit, whichField: unitrealfield): real;

/**
 * @param whichUnit unit
 * @param whichField unitstringfield
 */
declare function BlzGetUnitStringField(this: void, whichUnit: unit, whichField: unitstringfield): string;

/**
 * @param whichUnit unit
 * @param whichField unitbooleanfield
 * @param value boolean
 */
declare function BlzSetUnitBooleanField(this: void, whichUnit: unit, whichField: unitbooleanfield, value: boolean): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitintegerfield
 * @param value integer
 */
declare function BlzSetUnitIntegerField(this: void, whichUnit: unit, whichField: unitintegerfield, value: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitrealfield
 * @param value real
 */
declare function BlzSetUnitRealField(this: void, whichUnit: unit, whichField: unitrealfield, value: real): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitstringfield
 * @param value string
 */
declare function BlzSetUnitStringField(this: void, whichUnit: unit, whichField: unitstringfield, value: string): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitweaponbooleanfield
 * @param index integer
 */
declare function BlzGetUnitWeaponBooleanField(this: void, whichUnit: unit, whichField: unitweaponbooleanfield, index: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitweaponintegerfield
 * @param index integer
 */
declare function BlzGetUnitWeaponIntegerField(this: void, whichUnit: unit, whichField: unitweaponintegerfield, index: integer): integer;

/**
 * @param whichUnit unit
 * @param whichField unitweaponrealfield
 * @param index integer
 */
declare function BlzGetUnitWeaponRealField(this: void, whichUnit: unit, whichField: unitweaponrealfield, index: integer): real;

/**
 * @param whichUnit unit
 * @param whichField unitweaponstringfield
 * @param index integer
 */
declare function BlzGetUnitWeaponStringField(this: void, whichUnit: unit, whichField: unitweaponstringfield, index: integer): string;

/**
 * @param whichUnit unit
 * @param whichField unitweaponbooleanfield
 * @param index integer
 * @param value boolean
 */
declare function BlzSetUnitWeaponBooleanField(this: void, whichUnit: unit, whichField: unitweaponbooleanfield, index: integer, value: boolean): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitweaponintegerfield
 * @param index integer
 * @param value integer
 */
declare function BlzSetUnitWeaponIntegerField(this: void, whichUnit: unit, whichField: unitweaponintegerfield, index: integer, value: integer): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitweaponrealfield
 * @param index integer
 * @param value real
 */
declare function BlzSetUnitWeaponRealField(this: void, whichUnit: unit, whichField: unitweaponrealfield, index: integer, value: real): boolean;

/**
 * @param whichUnit unit
 * @param whichField unitweaponstringfield
 * @param index integer
 * @param value string
 */
declare function BlzSetUnitWeaponStringField(this: void, whichUnit: unit, whichField: unitweaponstringfield, index: integer, value: string): boolean;