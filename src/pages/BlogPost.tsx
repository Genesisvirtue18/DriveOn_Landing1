import { Link, useParams, Navigate } from "react-router-dom";
import { useCopy } from "../i18n";
import { posts } from "../content";

export function BlogPost() {
  const { slug } = useParams();
  const { t, lang } = useCopy();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="bg-paper">
      <div className="relative h-[46vh] min-h-[280px] bg-ink">
        <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />
        <div className="relative mx-auto flex h-full max-w-3xl flex-col justify-end px-5 pb-12 pt-28 sm:px-8">
          <Link to="/blog" className="text-[12px] font-medium uppercase tracking-[0.18em] text-rose">
            ← {t("blogPage.back")}
          </Link>
          <h1 className="font-display mt-3 text-3xl tracking-tight text-cream sm:text-5xl">{post.title[lang]}</h1>
          <p className="mt-3 text-sm text-cream/60">
            {post.mins} {t("blogPage.min")}
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
        {post.body[lang].map((para) => (
          <p key={para.slice(0, 24)} className="mb-6 text-[1.05rem] leading-relaxed text-slate">
            {para}
          </p>
        ))}
      </div>
    </article>
  );
}
