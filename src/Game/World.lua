local World = class("World")

function World:Constructor()
    self:Init()
end

function World:Init()
    self.systems = {} ---@type System[]
    self.time = 0 ---@type float
    self.frame = 0 ---@type int
end

---@param system System
function World:Add(system)
    t_insert(self.systems, system)
end

function World:Awake()
    for _, v in pairs(self.systems) do
        v:Awake()
    end
end

function World:Start()
    for _, v in pairs(self.systems) do
        v:Start()
    end
end

---@param delta float in seconds
function World:Update(delta)
    self.frame = self.frame + 1
    self.time = self.time + delta
    for _, v in pairs(self.systems) do
        v:Update(delta)
    end
end

return World
