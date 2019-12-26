local Locale = {}

function Locale.Init(lang)
    if lang == "EN" then
        Locale.lang = require("Locale/EN")
    elseif lang == "ZHCN" then
        Locale.lang = require("Locale/EN")
    end
end

function Locale.S(key)
    local ret = Locale.lang[key]
    if ret then
        return ret
    else
        logerror("Lang undefined " .. key)
        return ""
    end
end

return Locale
