import { Link } from "react-router-dom";
import { IconArrow, IconCheck } from "../components/Icons";
import { GoogleReviews } from "../components/GoogleReviews";
import { useCopy } from "../i18n";
import { useBooking } from "../booking";
import { useReveal } from "../hooks";
import { faqs, instructors } from "../content";

export function Home() {
  const { t } = useCopy();
  const { openBook } = useBooking();

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-cream">
        <div className="absolute inset-0">
          <img src="/images/hero.jpg" alt="" className="h-full w-full object-cover object-[center_30%] animate-kenburns" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-ink/30" />
        </div>
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:justify-center">
          <p className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.28em] text-rose">{t("hero.kicker")}</p>
          <h1 className="font-display animate-fade-up delay-1 mt-4 max-w-3xl text-[2.6rem] leading-[1.06] tracking-tight sm:text-6xl lg:text-[4.4rem]">
            {t("hero.titleA")}
            <br />
            <span className="hl text-rose">{t("hero.titleB")}</span>
            <br />
            {t("hero.titleC")}
          </h1>
          <p className="animate-fade-up delay-2 mt-6 max-w-lg text-[1.02rem] leading-relaxed text-cream/78">{t("hero.lead")}</p>
          <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button type="button" onClick={() => openBook()} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-red px-6 text-sm font-semibold text-cream hover:bg-crimson">
              {t("hero.cta")}
              <IconArrow className="h-4 w-4" />
            </button>
            <Link to="/theory" className="inline-flex h-12 items-center justify-center rounded-full border border-cream/25 px-6 text-sm font-medium text-cream hover:border-cream/60">
              {t("hero.secondary")}
            </Link>
          </div>
          <dl className="animate-fade-up delay-4 mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-cream/15 pt-7">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/50">{t("hero.pass")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">94%</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/50">{t("hero.students")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">18k+</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-cream/50">{t("hero.rating")}</dt>
              <dd className="font-display mt-1 text-2xl sm:text-3xl">4.9</dd>
            </div>
          </dl>
        </div>
      </section>

      <Why />
      <About />
      <Path />
      <Services />
      <Teachers />
      <GoogleReviews />
      <Faq />

      <section className="px-5 pb-8 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink">
          <img src="/images/coastal-road.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/35" />
          <div className="relative grid gap-10 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-rose">{t("cta.kicker")}</p>
              <h2 className="font-display mt-3 max-w-xl text-4xl tracking-tight text-cream sm:text-5xl">
                {t("cta.title")} <span className="hl text-rose">{t("cta.titleHl")}</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/70">{t("cta.lead")}</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <button type="button" onClick={() => openBook()} className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-semibold text-cream hover:bg-crimson">
                {t("cta.button")}
                <IconArrow className="h-4 w-4" />
              </button>
              <p className="text-[12px] text-cream/50">{t("cta.note")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Why() {
  const { t, copy } = useCopy();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("why.kicker")}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
            {t("why.title")} <span className="hl">{t("why.titleHl")}</span> {t("why.titleEnd")}
          </h2>
          <p className="mt-4 text-[1.02rem] leading-relaxed text-mute">{t("why.lead")}</p>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.why.items.map((item) => (
            <article key={item.t} className="rounded-3xl border border-sand bg-cream/50 p-7">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red text-cream">
                <IconCheck className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-medium tracking-tight text-ink">{item.t}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-mute">{item.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useCopy();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal bg-paper pb-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-cream lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <img src="/images/student-keys.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-8 py-12 sm:px-12">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("about.kicker")}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink">
            {t("about.title")} <span className="hl">{t("about.titleHl")}</span>
          </h2>
          <p className="mt-5 text-[1.02rem] leading-relaxed text-mute">{t("about.body")}</p>
          <dl className="mt-10 space-y-4 border-t border-linen pt-8">
            {[
              [t("about.a"), t("about.av")],
              [t("about.b"), t("about.bv")],
              [t("about.c"), t("about.cv")],
            ].map(([k, v]) => (
              <div key={k} className="flex flex-col gap-0.5 sm:flex-row sm:gap-6">
                <dt className="w-40 shrink-0 text-sm font-medium text-ink">{k}</dt>
                <dd className="text-sm text-mute">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Path() {
  const { t, copy } = useCopy();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal relative overflow-hidden bg-petal py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-paper to-transparent" />
      <div className="absolute -right-20 top-32 h-64 w-64 rounded-full bg-lilac/70 blur-3xl" />
      <div className="absolute -left-16 bottom-10 h-56 w-56 rounded-full bg-mint/80 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("path.kicker")}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
            {t("path.title")} <span className="hl">{t("path.titleHl")}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-mute">{t("path.lead")}</p>
        </div>

        <ol className="relative mx-auto mt-16 max-w-3xl">
          <span className="milestone-line pointer-events-none absolute start-[1.15rem] top-3 bottom-3 w-[2px] sm:start-1/2 sm:-ms-px" />
          {copy.path.steps.map((s, i) => {
            const left = i % 2 === 0;
            return (
              <li key={s.n} className="relative mb-10 last:mb-0 sm:mb-14">
                <span className="absolute start-0 top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-red font-display text-sm text-cream shadow-[0_0_0_6px_rgba(247,228,223,0.9)] sm:start-1/2 sm:-translate-x-1/2 rtl:sm:translate-x-1/2">
                  {s.n}
                </span>
                <div
                  className={`ms-16 sm:ms-0 sm:w-[calc(50%-2.2rem)] ${
                    left ? "sm:me-auto sm:pe-2 sm:text-end" : "sm:ms-auto sm:ps-2 sm:text-start"
                  }`}
                >
                  <article className="glass-card rounded-[1.4rem] p-5 sm:p-6">
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-red">{s.time}</span>
                    <h3 className="mt-2 text-xl font-medium text-ink">{s.t}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-mute">{s.d}</p>
                  </article>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function Services() {
  const { t } = useCopy();
  const { openBook } = useBooking();
  const ref = useReveal<HTMLElement>();
  const cards = [
    { t: t("services.risk1"), d: t("services.risk1d"), img: "https://images.pexels.com/photos/10994097/pexels-photo-10994097.jpeg?auto=compress&cs=tinysrgb&w=900", id: "risk1" },
    { t: t("services.risk2"), d: t("services.risk2d"), img: "https://images.pexels.com/photos/7507949/pexels-photo-7507949.jpeg?auto=compress&cs=tinysrgb&w=900", id: "risk2" },
    { t: t("services.handledare"), d: t("services.handledared"), img: "/images/lesson.jpg", id: "handledare" },
    { t: t("services.intensiv"), d: t("services.intensivd"), img: "/images/hero.jpg", id: "smart" },
  ];
  return (
    <section ref={ref} className="reveal bg-cream py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("services.kicker")}</p>
        <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
          {t("services.title")} <span className="hl">{t("services.titleHl")}</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {cards.map((c) => (
            <article key={c.id} className="overflow-hidden rounded-[1.6rem] bg-paper">
              <div className="relative h-52">
                <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{c.d}</p>
                <button type="button" onClick={() => openBook(c.id)} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-red">
                  {t("nav.book")} <IconArrow className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Teachers() {
  const { t, lang } = useCopy();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal bg-paper py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("instructors.kicker")}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
            {t("instructors.title")} <span className="hl">{t("instructors.titleHl")}</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((p) => (
            <article key={p.name}>
              <div className="aspect-[4/5] overflow-hidden rounded-[1.4rem] bg-sand">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-4">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium text-ink">{p.name}</h3>
                  <span className="text-[12px] text-mute">{p.years} {t("instructors.years")}</span>
                </div>
                <p className="text-sm text-red">{p.role[lang]}</p>
                <p className="mt-1 text-[12px] text-mute">{t("instructors.langs")}: {p.langs}</p>
                <p className="mt-2 text-sm italic leading-relaxed text-mute">“{p.quote[lang]}”</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const { t, lang } = useCopy();
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="reveal bg-cream py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-red">{t("faq.kicker")}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight text-ink sm:text-5xl">
            {t("faq.title")} <span className="hl">{t("faq.titleHl")}</span>
          </h2>
        </div>
        <div className="divide-y divide-sand border-y border-sand">
          {faqs.map((f) => (
            <details key={f.q.sv} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[1.05rem] font-medium text-ink">
                {f.q[lang]}
                <span className="text-red transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-mute">{f.a[lang]}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
