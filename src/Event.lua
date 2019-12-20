local Event = class("Event")

function Event:Constructor(id)
    self.id = id
    self.handlers = {}
end

---@param handler fun(...): void
---@param context this
function Event:AddListener(handler, context)
    if self.handlers[handler] then
        logwarn("double AddListener ", self.id, handler, context)
    end
    self.handlers[handler] = context or false
end

function Event:RemoveListener(handler)
    if handler then
        if not self.handlers[handler] then
            logwarn("no hander in event ", self.id, handler)
        end
        self.handlers[handler] = nil
    else
        self.handlers = {}
    end
end

function Event:Broadcast(...)
    local count = 0
    for handler, context in pairs(self.handlers) do
        if context then
            handler(context, ...)
        else
            handler(...)
        end
        count = count + 1
    end
    if count == 0 then
        log("event " .. self.id .. " has no listener")
    end
end

return Event
