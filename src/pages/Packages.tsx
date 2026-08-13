import { IconCheck } from "../components/Icons";
import { useCopy } from "../i18n";
import { useBooking } from "../booking";
import { packages, addons } from "../content";

export function Packages() {
  const { t, lang } = useCopy();
  const { openBook } = useBooking();

  return (
    <>
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#faf7f2_0%,#f7e4df_42%,#e8dde8_100%)]" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-peach/70 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-lilac/80 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("packagesPage.kicker")}</p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight text-ink sm:text-6xl">
            {t("packagesPage.title")} <span className="hl">{t("packagesPage.titleHl")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-mute">{t("packagesPage.lead")}</p>
        </div>
      </section>

      <section className="relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f3eee6_0%,#f7e4df_50%,#dce8e2_100%)]" />
        <div className="absolute left-1/3 top-24 h-80 w-80 rounded-full bg-lilac/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.id}
              className={`flex flex-col rounded-[1.8rem] p-8 text-ink ${p.popular ? "glass-card glass-card-featured" : "glass-card"}`}
            >
              {p.popular && (
                <span className="mb-4 self-start rounded-full border border-white/70 bg-white/45 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-red backdrop-blur-md">
                  {t("packagesPage.popular")}
                </span>
              )}
              <h3 className="text-lg font-medium">{p.name[lang]}</h3>
              <p className="font-display mt-3 text-5xl tracking-tight text-red">
                {p.price}
                <span className="text-base font-sans font-normal text-mute"> {t("common.sek")}</span>
              </p>
              <p className="mt-2 text-sm text-mute">
                {t("packagesPage.save")} {p.save} {t("common.sek")}
              </p>
              <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.16em] text-red">{t("packagesPage.included")}</p>
              <ul className="mt-3 flex-1 space-y-2.5 text-sm text-slate">
                {p.items[lang].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                    {item}
                  </li>
                ))}
              </ul>
              <button type="button" onClick={() => openBook(p.id)} className={`mt-8 btn-glass ${p.popular ? "btn-glass-strong" : ""}`}>
                {t("packagesPage.choose")}
              </button>
            </article>
          ))}
        </div>

        <div className="relative mx-auto mt-16 max-w-7xl px-5 sm:px-8">
          <h3 className="font-display text-3xl text-ink">{t("packagesPage.extra")}</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {addons.map((a) => (
              <article key={a.id} className="glass-card rounded-3xl p-6">
                <h4 className="font-medium text-ink">{a.name[lang]}</h4>
                <p className="font-display mt-2 text-3xl text-red">
                  {a.price}
                  <span className="ms-1 text-sm font-sans text-mute">{a.unit[lang]}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-mute">{a.d[lang]}</p>
                <button type="button" onClick={() => openBook(a.id)} className="btn-glass mt-5 !h-11">
                  {t("nav.book")}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
