local IDGenerator = class("IDGenerator")

function IDGenerator:Constructor(start)
    self.start = start or 0
end

function IDGenerator:Next()
    self.start = self.start + 1
    return self.start
end

return IDGenerator
