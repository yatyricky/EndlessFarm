import { Logger } from "../Logger";
import { EN } from "./EN";
import { ZHCN } from "./ZHCN";

type LangCode = "EN" | "ZHCN";

interface ILocale {
    [key: string]: string;
}

export class Locale {

    public static Init(lang: LangCode): void {
        if (lang === "EN") {
            Locale.lang = EN;
        } else if (lang === "ZHCN") {
            Locale.lang = ZHCN;
        }
    }

    public static S(key: string): string {
        const ret = Locale.lang[key];
        if (ret) {
            return ret;
        } else {
            Logger.Error("Lang undefined " + key);
            return "";
        }
    }

    private static lang: ILocale;

}
