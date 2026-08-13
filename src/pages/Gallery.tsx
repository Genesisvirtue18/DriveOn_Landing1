import { useState } from "react";
import { PageHero } from "../components/Layout";
import { IconClose } from "../components/Icons";
import { useCopy } from "../i18n";
import { gallery, INSTAGRAM } from "../content";

export function Gallery() {
  const { t, lang } = useCopy();
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      <PageHero kicker={t("galleryPage.kicker")} title={t("galleryPage.title")} highlight={t("galleryPage.titleHl")} lead={t("galleryPage.lead")} />
      <section className="bg-cream py-16 sm:py-20">
        <div className="mx-auto mb-10 flex max-w-7xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center sm:px-8">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-sand bg-white/70 px-4 py-2 text-sm font-medium text-ink backdrop-blur-md hover:border-red/30"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
              </svg>
            </span>
            {t("galleryPage.follow")}
            <span className="text-red">{t("galleryPage.handle")}</span>
          </a>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <button
              key={`${g.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-sand"
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-3 text-start text-[12px] leading-snug text-cream opacity-0 transition group-hover:opacity-100">
                {g.caption[lang]}
              </span>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/88 p-4" onClick={() => setActive(null)}>
          <button type="button" className="absolute end-5 top-5 rounded-full bg-cream/10 p-2 text-cream" aria-label="Close">
            <IconClose className="h-6 w-6" />
          </button>
          <figure className="max-h-[90vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={gallery[active].src} alt={gallery[active].alt} className="max-h-[78vh] w-full rounded-2xl object-contain" />
            <figcaption className="mt-4 text-center text-sm text-cream/80">{gallery[active].caption[lang]}</figcaption>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="mt-2 block text-center text-[12px] text-rose">
              {t("galleryPage.handle")}
            </a>
          </figure>
        </div>
      )}
    </>
  );
}
