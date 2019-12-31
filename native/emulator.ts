// function os.capture(cmd, raw)
//     local handle = assert(io.popen(cmd, 'r'))
//     local output = assert(handle:read('*a'))

//     handle:close()

//     if raw then
//         return output
//     end

//     output = string.gsub(
//         string.gsub(
//             string.gsub(output, '^%s+', ''),
//             '%s+$',
//             ''
//         ),
//         '[\n\r]+',
//         ' '
//     )

//    return output
// end

// local time = os.clock()
// g_expiredTimer = nil
// local coTasks = {}

// local co = coroutine.create(function()
//     while true do
//         os.execute("powershell.exe Start-Sleep -Seconds 0.1")
//         local now = os.clock()
//         local elapsed = now - time
//         local i = #coTasks
//         while i > 0 do
//             local e = coTasks[i]
//             e.time = e.time + elapsed
//             if e.time >= e.timeout then
//                 g_expiredTimer = e
//                 e.time = e.time - e.timeout
//                 e.callback()
//                 if not e.periodic then
//                     table.remove(coTasks, i)
//                 end
//             end
//             i = i - 1
//         end
//         time = now
//     end
// end)

// function launch_emulator()
//     coroutine.resume(co)
// end

// ---@return timer
// function CreateTimer()
//     return {}
// end

// ---@param whichTimer timer
// ---@param timeout real
// ---@param periodic boolean
// ---@param handlerFunc code
// ---@return void
// function TimerStart(whichTimer, timeout, periodic, handlerFunc)
//     whichTimer.timeout = timeout
//     whichTimer.periodic = periodic
//     whichTimer.callback = handlerFunc
//     whichTimer.time = 0
//     table.insert(coTasks, whichTimer)
// end

// ---@param whichTimer timer
// ---@return real
// function TimerGetElapsed(whichTimer)
//     return whichTimer.time
// end

// ---@return timer
// function GetExpiredTimer()
//     return g_expiredTimer
// end

// ---@param msg string
// ---@return void
// function BJDebugMsg(msg)
//     print(msg)
// end

// ---@param number integer
// ---@return player
// function Player(number)
//     return {
//         pid = number
//     }
// end

// ---@param id player
// ---@param unitid integer
// ---@param x real
// ---@param y real
// ---@param face real
// ---@return unit
// function CreateUnit(id, unitid, x, y, face)
//     return {
//         player = id,
//         utid = unitid,
//         x = x,
//         y = y,
//         face = face,
//     }
// end

// ---@param whichHero unit
// ---@param newStr integer
// ---@param permanent boolean
// ---@return void
// function SetHeroStr(whichHero, newStr, permanent)
//     whichHero.str = newStr
//     whichHero.strPerm = permanent
// end

// ---@param whichHero unit
// ---@param newAgi integer
// ---@param permanent boolean
// ---@return void
// function SetHeroAgi(whichHero, newAgi, permanent)
//     whichHero.agi = newStr
//     whichHero.agiPerm = permanent
// end

// ---@param whichHero unit
// ---@param newInt integer
// ---@param permanent boolean
// ---@return void
// function SetHeroInt(whichHero, newInt, permanent)
//     whichHero.int = newStr
//     whichHero.intPerm = permanent
// end

// ---@param whichHero unit
// ---@param includeBonuses boolean
// ---@return integer
// function GetHeroStr(whichHero, includeBonuses)
//     local b = includeBonuses and (whichHero.strBonus or 0) or 0
//     local c = whichHero.str or 0
//     return c + b
// end

// ---@param whichHero unit
// ---@param includeBonuses boolean
// ---@return integer
// function GetHeroAgi(whichHero, includeBonuses)
//     local b = includeBonuses and (whichHero.agiBonus or 0) or 0
//     local c = whichHero.agi or 0
//     return c + b
// end

// ---@param whichHero unit
// ---@param includeBonuses boolean
// ---@return integer
// function GetHeroInt(whichHero, includeBonuses)
//     local b = includeBonuses and (whichHero.intBonus or 0) or 0
//     local c = whichHero.int or 0
//     return c + b
// end

// ---@param whichUnit unit
// ---@param mana integer
// ---@return void
// function BlzSetUnitMaxMana(whichUnit, mana)
//     whichUnit.maxMana = mana
// end

// ---@param whichUnit unit
// ---@param hp integer
// ---@return void
// function BlzSetUnitMaxHP(whichUnit, hp)
//     whichUnit.maxHP = hp
// end

// ---@param x integer
// ---@param y integer
// ---@return integer
// function BlzBitAnd(x, y)
//     return os.capture("powershell.exe " .. x .. " -band " .. y)
// end

// ---@param whichUnit unit
// ---@param abilcode integer
// ---@return integer
// function GetUnitAbilityLevel(whichUnit, abilcode)
//     return whichUnit["abil"..abilcode] or 0
// end

// ---@param whichUnit unit
// ---@param baseDamage integer
// ---@param weaponIndex integer
// ---@return void
// function BlzSetUnitBaseDamage(whichUnit, baseDamage, weaponIndex)
//     whichUnit["baseDamage" .. weaponIndex] = baseDamage
// end

// ---@param whichUnit unit
// ---@param diceNumber integer
// ---@param weaponIndex integer
// ---@return void
// function BlzSetUnitDiceNumber(whichUnit, diceNumber, weaponIndex)
//     whichUnit["diceNumber" .. weaponIndex] = diceNumber
// end

// ---@param whichUnit unit
// ---@param diceSides integer
// ---@param weaponIndex integer
// ---@return void
// function BlzSetUnitDiceSides(whichUnit, diceSides, weaponIndex)
//     whichUnit["diceSides" .. weaponIndex] = diceSides
// end

// ---@param whichUnit unit
// ---@param armorAmount real
// ---@return void
// function BlzSetUnitArmor(whichUnit, armorAmount)
//     whichUnit.armorAmount = armorAmount
// end
