---@param classname string
---@param super class
function class(classname, super)
    local superType = type(super)
    local cls
    if superType ~= "function" and superType ~= "table" then
        superType = nil
        super = nil
    end
    if superType == "function" or (super and super.__ctype == 1) then
        cls = {}
        if superType == "table" then
            for k, v in pairs(super) do cls[k] = v end
            cls.__create = super.__create
            cls.super    = super
        else
            cls.__create = super
        end
        cls.Constructor = function() end
        cls.__cname = classname
        cls.__ctype = 1
        function cls.New(...)
            local instance = cls.__create(...)
            for k, v in pairs(cls) do instance[k] = v end
            instance.class = cls
            instance:Constructor(...)
            return instance
        end
    else
        if super then
            cls = clone(super)
            cls.super = super
        else
            cls = { Constructor = function() end }
        end

        cls.__cname = classname
        cls.__ctype = 2
        cls.__index = cls
        function cls.New(...)
            local instance = setmetatable({}, cls)
            instance.class = cls
            instance:Constructor(...)
            return instance
        end
    end
    return cls
end
