// local SkillConfig = {}

// SkillConfig.Type = {
//     Main = 1,
//     Passive = 2,
//     Extension = 3,
// }

// SkillConfig.Target = {
//     Immediate = 1,
//     Unit = 2,
//     Point = 3,
//     Smart = 4,
//     Orb = 5,
// }

// ---@class SkillConfig
// ---@field SID int
// ---@field Type int
// ---@field NameKey string
// ---@field DescKey string
// ---@field Children int[]
// ---@field Exts int[]
// ---@field Require int
// ---@field Levels int
// ---@field Cool float
// ---@field Cost int
// ---@field Name string to init
// ---@field Parents int[] to init

// ---@type SkillConfig[]
// SkillConfig.DB = {
//     { SID = 1, Type = 1, NameKey = "skill_cleave_name", DescKey = "skill_cleave_desc", Children = {}, Exts = {}, Require = 0, Levels = 5, AOE = 0, Range = 0 }
// }

// local ref = {}

// for _, v in pairs(SkillConfig.DB) do
//     ref[v.SID] = v
// end

// ---@type table<int, SkillConfig>
// SkillConfig.ById = setmetatable(ref, {
//     __index = function(t, k)
//         local v = rawget(t, k)
//         if v then
//             return v
//         else
//             logerror("id not found " .. k)
//         end
//     end
// })

// return SkillConfig
