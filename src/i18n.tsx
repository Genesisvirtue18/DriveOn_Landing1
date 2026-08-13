import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations, type Lang } from "./translations";

type I18nCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
};

const Ctx = createContext<I18nCtx | null>(null);

function read(obj: unknown, path: string): string {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === "object" && p in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  return typeof cur === "string" ? cur : path;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("driveon-lang");
    if (saved === "sv" || saved === "en" || saved === "ar") return saved;
    return "sv";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang === "sv" ? "sv" : lang === "ar" ? "ar" : "en";
    document.documentElement.dir = dir;
    localStorage.setItem("driveon-lang", lang);
  }, [lang, dir]);

  const setLang = (l: Lang) => setLangState(l);

  const value = useMemo<I18nCtx>(
    () => ({
      lang,
      setLang,
      dir,
      t: (key: string) => read(translations[lang], key),
    }),
    [lang, dir]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

export function useCopy() {
  const ctx = useI18n();
  return { ...ctx, copy: translations[ctx.lang] };
}
