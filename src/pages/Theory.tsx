import { useMemo, useState } from "react";
import { PageHero } from "../components/Layout";
import { useCopy } from "../i18n";
import { theoryQuestions } from "../theory";
import { theoryCats } from "../content";

export function Theory() {
  const { t, lang } = useCopy();
  const [mode, setMode] = useState<"all" | "exam">("all");
  const [cat, setCat] = useState("all");
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);

  const pool = useMemo(() => {
    const base = cat === "all" ? theoryQuestions : theoryQuestions.filter((q) => q.cat === cat);
    if (mode === "exam") {
      const shuffled = [...base].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 20);
    }
    return base;
  }, [mode, cat]);

  const q = pool[idx];
  const score = pool.filter((item) => picked[item.id] === item.answer).length;
  const answered = Object.keys(picked).filter((id) => pool.some((p) => p.id === Number(id))).length;

  function restart(nextMode: "all" | "exam", nextCat = cat) {
    setMode(nextMode);
    setCat(nextCat);
    setIdx(0);
    setPicked({});
    setDone(false);
  }

  return (
    <>
      <PageHero kicker={t("theoryPage.kicker")} title={t("theoryPage.title")} highlight={t("theoryPage.titleHl")} lead={t("theoryPage.lead")} />
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="mb-6 flex flex-wrap gap-2">
            <button type="button" onClick={() => restart("all")} className={`rounded-full px-4 py-2 text-sm ${mode === "all" ? "bg-red text-cream" : "bg-paper text-ink"}`}>
              {t("theoryPage.all")}
            </button>
            <button type="button" onClick={() => restart("exam")} className={`rounded-full px-4 py-2 text-sm ${mode === "exam" ? "bg-red text-cream" : "bg-paper text-ink"}`}>
              {t("theoryPage.exam")}
            </button>
            <select
              className="field !w-auto"
              value={cat}
              onChange={(e) => restart(mode, e.target.value)}
            >
              <option value="all">{t("theoryPage.filterAll")}</option>
              {Object.entries(theoryCats).map(([k, v]) => (
                <option key={k} value={k}>{v[lang]}</option>
              ))}
            </select>
          </div>

          {done || !q ? (
            <div className="rounded-[1.8rem] bg-ink p-8 text-cream sm:p-12">
              <p className="text-[11px] uppercase tracking-[0.2em] text-rose">{t("theoryPage.score")}</p>
              <p className="font-display mt-3 text-6xl text-rose">
                {score}
                <span className="text-3xl text-cream/40"> {t("theoryPage.of")} {pool.length}</span>
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">
                {score / pool.length >= 0.8 ? t("theoryPage.pass") : t("theoryPage.fail")}
              </p>
              <button type="button" onClick={() => restart(mode)} className="mt-8 rounded-full bg-red px-6 py-2.5 text-sm font-medium text-cream">
                {t("theoryPage.again")}
              </button>
            </div>
          ) : (
            <div className="rounded-[1.8rem] bg-ink p-6 text-cream sm:p-10">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-[12px] text-cream/50">
                <span>
                  {t("theoryPage.q")} {idx + 1} {t("theoryPage.of")} {pool.length}
                </span>
                <span>
                  {theoryCats[q.cat][lang]} · {answered} {t("theoryPage.correct")}
                </span>
              </div>
              <div className="mb-6 h-1 overflow-hidden rounded-full bg-cream/10">
                <div className="h-full bg-red transition-all" style={{ width: `${((idx + 1) / pool.length) * 100}%` }} />
              </div>
              <p className="text-xl font-medium leading-snug sm:text-2xl">{q.q[lang]}</p>
              <div className="mt-6 space-y-2">
                {q.options[lang].map((opt, i) => {
                  const chosen = picked[q.id];
                  const revealed = chosen !== undefined;
                  let cls = "w-full rounded-2xl border border-cream/15 px-4 py-3 text-start text-sm";
                  if (revealed && i === q.answer) cls += " border-sage bg-sage/25";
                  else if (revealed && i === chosen) cls += " border-rose bg-red/25";
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={revealed}
                      onClick={() => setPicked((p) => ({ ...p, [q.id]: i }))}
                      className={cls}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {picked[q.id] !== undefined && (
                <p className="mt-5 text-sm leading-relaxed text-cream/65">
                  <span className="font-medium text-rose">{t("theoryPage.why")}: </span>
                  {q.why[lang]}
                </p>
              )}
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  disabled={idx === 0}
                  onClick={() => setIdx((i) => i - 1)}
                  className="h-11 flex-1 rounded-full border border-cream/20 text-sm disabled:opacity-30"
                >
                  {t("theoryPage.prev")}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (idx === pool.length - 1) setDone(true);
                    else setIdx((i) => i + 1);
                  }}
                  className="h-11 flex-1 rounded-full bg-red text-sm font-medium text-cream"
                >
                  {idx === pool.length - 1 ? t("theoryPage.finish") : t("theoryPage.next")}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
