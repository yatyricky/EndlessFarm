local Time = require("Time")

function log(...)
    local sb = ""
    for _, v in pairs({...}) do
        sb = sb .. " " .. t_tojson(v)
    end
    print(Time.GetTime() .. "[I]:" .. sb)
end

function logwarn(...)
    print(Time.GetTime() .. "[W]:", ...)
end

function logerror(...)
    print(Time.GetTime() .. "[E]:", ...)
end
