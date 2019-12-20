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
