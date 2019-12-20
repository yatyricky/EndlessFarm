local Time = require("Time")

function log(...)
    print(Time.GetTime() .. "[I]:", ...)
end

function logwarn(...)
    print(Time.GetTime() .. "[W]:", ...)
end

function logerror()
    print(Time.GetTime() .. "[E]:", ...)
end
