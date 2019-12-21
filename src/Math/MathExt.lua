---@param n number
---@param a number
---@param b number
---@return number
math.clamp = function(n, a, b)
    return math.min(math.max(n, a), b)
end
