import { Logger } from "../Logger";
import { ILocaleConfig, LocaleConfig } from "./Configs/LocaleConfig";

type LangKey = Exclude<keyof ILocaleConfig, "Key">;

/** @noSelf */
export class Locale {

    public static Init(lang: LangKey): void {
        Locale.lang = lang;
    }

    public static S(key: string): string {
        const ret = LocaleConfig[key];
        if (ret) {
            return ret[Locale.lang];
        } else {
            Logger.Error("Lang undefined " + key);
            return "";
        }
    }

    private static lang: LangKey;

}
