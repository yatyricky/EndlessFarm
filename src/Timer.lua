local Timer = class("Timer")

---@param interval float
---@param loop int loop times, -1 is infinity loop
---@param callback fun(...): void
---@param this any if present, pass to callback as the first arg
function Timer:Constructor(interval, loop, callback, this)
    print("Timer Constructor")
    self.interval = interval
    self.loop = loop
    self.callback = callback
    self.this = this
    self.nTimer = CreateTimer()
end

function Timer:Start()
    print("Timer start")
    self.updater = bindfunc(self.Update, self)
    TimerStart(self.nTimer, self.interval, self.loop ~= 1, self.updater)
end

function Timer:Pause()
    
end

function Timer:Stop()
    
end

function Timer:Update(...)
    print("Timer update, self = " .. t_tojson(self) .. "args = " .. t_tojson({...}))
    if self.this then
        self.callback(self.this, ...)
    else
        self.callback(...)
    end
end

return Timer
