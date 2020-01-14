export interface ILocaleConfig {
    Key: string;
    EN: string;
    ZHCN: string;
}

export const LocaleConfig: { [key: string]: ILocaleConfig } = {
    ["unit_name_blade_master"]: { Key: "unit_name_blade_master", EN: "Blade Master", ZHCN: "剑圣" },
    ["unit_name_demon_hunter"]: { Key: "unit_name_demon_hunter", EN: "", ZHCN: "恶魔猎手" },
    ["unit_name_archmage"]: { Key: "unit_name_archmage", EN: "Archmage", ZHCN: "大法师" },
};
