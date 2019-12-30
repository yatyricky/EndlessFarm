local Timer = class("Timer")

Timer.refs = {}

function Timer.Update()
    local this = Timer.refs[GetExpiredTimer()]
    if this.this then
        this.callback(this.this)
    else
        this.callback()
    end
    this.cloop = this.cloop - 1
    if this.cloop <= 0 and this.loop ~= -1 then
        Timer.Destroy(this)
    end
end

---@param interval float
---@param loop int loop times, -1 is infinity loop
---@param callback fun(...): void
---@param this any if present, pass to callback as the first arg
function Timer:Constructor(interval, loop, callback, this)
    self.interval = interval
    self.loop = loop
    self.cloop = self.loop
    self.callback = callback
    self.this = this
    self.nTimer = CreateTimer()
    Timer.refs[self.nTimer] = self
end

function Timer:Start()
    TimerStart(self.nTimer, self.interval, true, Timer.Update)
    return self
end

---@param value number
---@param isLoop boolean true = extend loop count, false = extend by seconds
function Timer:Extend(value, isLoop)
    isLoop = isLoop or false
    local res = value
    if not isLoop then
        res = math.floor(value / self.interval)
    end
    self.cloop = self.cloop + res
end

function Timer:Pause()

end

function Timer:Resume()

end

function Timer:Destroy()
    Timer.refs[self.nTimer] = nil
    DestroyTimer(self.nTimer)
end

return Timer
