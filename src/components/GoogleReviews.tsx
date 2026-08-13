import { GoogleG, IconStar } from "./Icons";
import { useCopy } from "../i18n";
import { googleReviews, GOOGLE_REVIEWS } from "../content";
import { useReveal } from "../hooks";

export function GoogleReviews() {
  const { t, lang } = useCopy();
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="reveal bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("reviews.kicker")}</p>
            <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
              {t("reviews.title")} <span className="hl">{t("reviews.titleHl")}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-sand bg-cream/70 px-4 py-3">
            <GoogleG className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-1 text-[#F4B400]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
                <span className="ms-1 text-sm font-semibold text-ink">4.9</span>
              </div>
              <p className="text-[12px] text-mute">{t("reviews.based")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {googleReviews.map((r) => (
            <article key={r.name} className="rounded-3xl border border-sand bg-white p-6 shadow-[0_1px_0_rgba(20,25,31,0.03)]">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red text-sm font-semibold text-cream">
                    {r.initial}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink">{r.name}</p>
                    <p className="text-[12px] text-mute">{t(`reviews.${r.agoKey}`)}</p>
                  </div>
                </div>
                <GoogleG className="h-5 w-5" />
              </div>
              <div className="mt-3 flex gap-0.5 text-[#F4B400]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-3.5 w-3.5" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate">{r.text[lang]}</p>
            </article>
          ))}
        </div>

        <a
          href={GOOGLE_REVIEWS}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-red"
        >
          {t("reviews.write")} →
        </a>
      </div>
    </section>
  );
}
