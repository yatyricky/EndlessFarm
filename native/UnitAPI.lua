function        GetUnitAcquireRange    (whichUnit) end --returns real
function        GetUnitTurnSpeed        (whichUnit) end --returns real
function        GetUnitPropWindow    (whichUnit) end --returns real
function        GetUnitFlyHeight        (whichUnit) end --returns real
function        GetUnitDefaultAcquireRange    (whichUnit) end --returns real
function        GetUnitDefaultTurnSpeed        (whichUnit) end --returns real
function        GetUnitDefaultPropWindow        (whichUnit) end --returns real
function        GetUnitDefaultFlyHeight        (whichUnit) end --returns real
function GetUnitLevel        (whichUnit) end --returns integer
function        GetUnitAbilityLevel(whichUnit, abilcode) end --returns integer
function        GetUnitPointValue    (whichUnit) end --returns integer
function        GetUnitPointValueByType(unitType) end --returns integer
function GetUnitX            (whichUnit) end --returns real
function GetUnitY            (whichUnit) end --returns real
function GetUnitLoc        (whichUnit) end --returns location
function GetUnitFacing    (whichUnit) end --returns real
function GetUnitMoveSpeed    (whichUnit) end --returns real
function GetUnitDefaultMoveSpeed(whichUnit) end --returns real
function GetUnitState        (whichUnit, whichUnitState) end --returns real
function GetUnitTypeId    (whichUnit) end --returns integer
function GetUnitRace        (whichUnit) end --returns race
function GetUnitName        (whichUnit) end --returns string
function GetUnitFoodUsed    (whichUnit) end --returns integer
function GetUnitFoodMade    (whichUnit) end --returns integer
function GetUnitRallyPoint        (whichUnit) end --returns location
function GetUnitRallyUnit            (whichUnit) end --returns unit
function GetUnitRallyDestructable    (whichUnit) end --returns destructable
function GetUnitCurrentOrder        (whichUnit) end --returns integer
function GetUnitUserData            (whichUnit) end --returns integer
function BlzGetUnitMaxHP                            (whichUnit) end --returns integer
function BlzGetUnitMaxMana                        (whichUnit) end --returns integer
function BlzGetUnitBaseDamage                        (unit, whichUnit, integer, weaponIndex) end --returns integer
function BlzGetUnitDiceNumber                        (unit, whichUnit, integer, weaponIndex) end --returns integer
function BlzGetUnitDiceSides                        (unit, whichUnit, integer, weaponIndex) end --returns integer
function BlzGetUnitAttackCooldown                    (unit, whichUnit, integer, weaponIndex) end --returns real
function BlzGetUnitArmor                            (unit, whichUnit) end --returns real
function BlzGetUnitCollisionSize                    (unit, whichUnit) end --returns real
function BlzGetUnitAbilityCooldown                (unit, whichUnit, integer, abilId, integer, level) end --returns real
function BlzGetUnitAbilityCooldownRemaining        (unit, whichUnit, integer, abilId) end --returns real
function BlzGetUnitAbilityManaCost                (unit, whichUnit, integer, abilId, integer, level) end --returns integer
function BlzGetUnitZ                                (unit, whichUnit) end --returns real
function BlzGetUnitAbility                        (unit, whichUnit, integer, abilId) end --returns ability
function BlzGetUnitAbilityByIndex                    (unit, whichUnit, integer, index) end --returns ability
function BlzGetUnitBooleanField                    (unit, whichUnit, unitbooleanfield, whichField) end --returns boolean
function BlzGetUnitIntegerField                    (unit, whichUnit, unitintegerfield, whichField) end --returns integer
function BlzGetUnitRealField                        (unit, whichUnit, unitrealfield, whichField) end --returns real
function BlzGetUnitStringField                    (unit, whichUnit, unitstringfield, whichField) end --returns string
function BlzGetUnitWeaponBooleanField                (unit, whichUnit, unitweaponbooleanfield, whichField, integer, index) end --returns boolean
function BlzGetUnitWeaponIntegerField                (unit, whichUnit, unitweaponintegerfield, whichField, integer, index) end --returns integer
function BlzGetUnitWeaponRealField                (unit, whichUnit, unitweaponrealfield, whichField, integer, index) end --returns real
function BlzGetUnitWeaponStringField                (unit, whichUnit, unitweaponstringfield, whichField, integer, index) end --returns string

function SetUnitState        (unit, whichUnit, unitstate, whichUnitState, real, newVal) end --returns nothing
function SetUnitX            (unit, whichUnit, real, newX) end --returns nothing
function SetUnitY            (unit, whichUnit, real, newY) end --returns nothing
function SetUnitPosition    (unit, whichUnit, real, newX, real, newY) end --returns nothing
function SetUnitPositionLoc(unit, whichUnit, location, whichLocation) end --returns nothing
function SetUnitFacing    (unit, whichUnit, real, facingAngle) end --returns nothing
function SetUnitFacingTimed(unit, whichUnit, real, facingAngle, real, duration) end --returns nothing
function SetUnitMoveSpeed    (unit, whichUnit, real, newSpeed) end --returns nothing
function SetUnitFlyHeight    (unit, whichUnit, real, newHeight, real, rate) end --returns nothing
function SetUnitTurnSpeed    (unit, whichUnit, real, newTurnSpeed) end --returns nothing
function SetUnitPropWindow(unit, whichUnit, real, newPropWindowAngle) end --returns nothing
function SetUnitAcquireRange(unit, whichUnit, real, newAcquireRange) end --returns nothing
function SetUnitCreepGuard(unit, whichUnit, boolean, creepGuard) end --returns nothing
function SetUnitOwner        (unit, whichUnit, player, whichPlayer, boolean, changeColor) end --returns nothing
function SetUnitColor        (unit, whichUnit, playercolor, whichColor) end --returns nothing
function SetUnitScale        (unit, whichUnit, real, scaleX, real, scaleY, real, scaleZ) end --returns nothing
function SetUnitTimeScale    (unit, whichUnit, real, timeScale) end --returns nothing
function SetUnitBlendTime    (unit, whichUnit, real, blendTime) end --returns nothing
function SetUnitVertexColor(unit, whichUnit, integer, red, integer, green, integer, blue, integer, alpha) end --returns nothing
function SetUnitAnimation            (unit, whichUnit, string, whichAnimation) end --returns nothing
function SetUnitAnimationByIndex    (unit, whichUnit, integer, whichAnimation) end --returns nothing
function SetUnitAnimationWithRarity(unit, whichUnit, string, whichAnimation, raritycontrol, rarity) end --returns nothing
function SetUnitLookAt    (unit, whichUnit, string, whichBone, unit, lookAtTarget, real, offsetX, real, offsetY, real, offsetZ) end --returns nothing
function ResetUnitLookAt    (unit, whichUnit) end --returns nothing
function SetUnitRescuable    (unit, whichUnit, player, byWhichPlayer, boolean, flag) end --returns nothing
function SetUnitRescueRange(unit, whichUnit, real, range) end --returns nothing
function SetUnitAbilityLevel(unit, whichUnit, integer, abilcode, integer, level) end --returns integer,
function SetUnitExploded    (unit, whichUnit, boolean, exploded) end --returns nothing
function SetUnitInvulnerable(unit, whichUnit, boolean, flag) end --returns nothing
function SetUnitPathing    (unit, whichUnit, boolean, flag) end --returns nothing
function SetUnitUseFood    (unit, whichUnit, boolean, useFood) end --returns nothing
function SetUnitTypeSlots            (unit, whichUnit, integer, slots) end --returns nothing
function SetUnitUserData            (unit, whichUnit, integer, data) end --returns nothing
function SetUnitFog                (real, a, real, b, real, c, real, d, real, e) end --returns nothing
function BlzSetUnitMaxHP                            (unit, whichUnit, integer, hp) end --returns nothing
function BlzSetUnitMaxMana                        (unit, whichUnit, integer, mana) end --returns nothing
function BlzSetUnitName                            (unit, whichUnit, string, name) end --returns nothing
function BlzSetUnitBaseDamage                        (unit, whichUnit, integer, baseDamage, integer, weaponIndex) end --returns nothing
function BlzSetUnitDiceNumber                        (unit, whichUnit, integer, diceNumber, integer, weaponIndex) end --returns nothing
function BlzSetUnitDiceSides                        (unit, whichUnit, integer, diceSides, integer, weaponIndex) end --returns nothing
function BlzSetUnitAttackCooldown                    (unit, whichUnit, real, cooldown, integer, weaponIndex) end --returns nothing
function BlzSetUnitArmor                            (unit, whichUnit, real, armorAmount) end --returns nothing
function BlzSetUnitAbilityCooldown                (unit, whichUnit, integer, abilId, integer, level, real, cooldown) end --returns nothing
function BlzSetUnitAbilityManaCost                (unit, whichUnit, integer, abilId, integer, level, integer, manaCost) end --returns nothing
function BlzSetUnitBooleanField                    (unit, whichUnit, unitbooleanfield, whichField, boolean, value) end --returns boolean
function BlzSetUnitIntegerField                    (unit, whichUnit, unitintegerfield, whichField, integer, value) end --returns boolean
function BlzSetUnitRealField                        (unit, whichUnit, unitrealfield, whichField, real, value) end --returns boolean
function BlzSetUnitStringField                    (unit, whichUnit, unitstringfield, whichField, string, value) end --returns boolean
function BlzSetUnitWeaponBooleanField                (unit, whichUnit, unitweaponbooleanfield, whichField, integer, index, boolean, value) end --returns boolean
function BlzSetUnitWeaponIntegerField                (unit, whichUnit, unitweaponintegerfield, whichField, integer, index, integer, value) end --returns boolean
function BlzSetUnitWeaponRealField                (unit, whichUnit, unitweaponrealfield, whichField, integer, index, real, value) end --returns boolean
function BlzSetUnitWeaponStringField                (unit, whichUnit, unitweaponstringfield, whichField, integer, index, string, value) end --returns boolean
