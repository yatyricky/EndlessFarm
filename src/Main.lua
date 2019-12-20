require("class")
require("clone")
require("TableExt")
local Timer = require("Timer")

local Test = class("Test")

function Test:Constructor()
    
end

function Test:Run()
    
end

print("start of program")
local timer = Timer.New(1, 5, function ()
    print("called")
end):Start()
