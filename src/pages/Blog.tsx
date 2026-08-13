import { Link } from "react-router-dom";
import { PageHero } from "../components/Layout";
import { useCopy } from "../i18n";
import { posts } from "../content";

export function Blog() {
  const { t, lang } = useCopy();

  return (
    <>
      <PageHero kicker={t("blogPage.kicker")} title={t("blogPage.title")} highlight={t("blogPage.titleHl")} lead={t("blogPage.lead")} />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-[1.6rem] bg-paper">
              <div className="relative h-56">
                <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-7">
                <p className="text-[12px] text-mute">
                  {p.mins} {t("blogPage.min")}
                </p>
                <h2 className="font-display mt-2 text-2xl tracking-tight text-ink">{p.title[lang]}</h2>
                <p className="mt-3 text-sm leading-relaxed text-mute">{p.excerpt[lang]}</p>
                <Link to={`/blog/${p.slug}`} className="mt-5 inline-block text-sm font-medium text-red">
                  {t("blogPage.read")} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
