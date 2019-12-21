local input = arg[1]

if string.len(input) == 4 then
    local n1 = string.byte(input, 1) * 16777216
    local n2 = string.byte(input, 2) * 65536
    local n3 = string.byte(input, 3) * 256
    local n4 = string.byte(input, 4)
    print("'"..input.."' => " .. (n1 + n2 + n3 + n4))
else
    print("no idea what input")
end
