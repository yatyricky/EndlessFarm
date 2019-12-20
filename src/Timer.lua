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
