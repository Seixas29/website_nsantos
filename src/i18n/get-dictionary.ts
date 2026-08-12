import { defaultLocale, isLocale, type Locale } from "./config";
import en from "./messages/en.json";
import pt from "./messages/pt.json";

type Dict = Record<string, unknown>;

const dictionaries: Record<Locale, Dict> = {
  en: en as Dict,
  pt: pt as Dict,
};

export async function getDictionary(locale: string): Promise<Dict> {
  const safe: Locale = isLocale(locale) ? locale : defaultLocale;
  return dictionaries[safe];
}

export function t(dict: Dict, path: string, fallback = ""): string {
  const parts = path.split(".");
  let cur: unknown = dict;
  for (const part of parts) {
    if (cur && typeof cur === "object" && part in (cur as Dict)) {
      cur = (cur as Dict)[part];
    } else {
      return fallback || path;
    }
  }
  return typeof cur === "string" ? cur : fallback || path;
}
