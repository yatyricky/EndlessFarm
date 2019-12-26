local Time = require("Time")

local function stdoutWith(level, ...)
    local sb = ""
    for _, v in pairs({...}) do
        sb = sb .. " " .. t_tojson(v)
    end
    BJDebugMsg(Time.GetTime() .. "[" .. level .. "]:" .. sb)
end

function log(...)
    stdoutWith("I")
end

function logwarn(...)
    stdoutWith("W")
end

function logerror(...)
    stdoutWith("E")
end
