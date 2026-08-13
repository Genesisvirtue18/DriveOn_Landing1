import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsApp } from "./WhatsApp";
import { BookingWizard } from "./BookingWizard";

export function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
      <BookingWizard />
    </div>
  );
}

export function PageHero({
  kicker,
  title,
  highlight,
  lead,
}: {
  kicker: string;
  title: string;
  highlight: string;
  lead: string;
}) {
  return (
    <section className="bg-ink pt-28 pb-16 text-cream sm:pt-32 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-rose">{kicker}</p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl tracking-tight sm:text-6xl">
          {title} <span className="hl text-rose">{highlight}</span>
        </h1>
        <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-cream/70">{lead}</p>
      </div>
    </section>
  );
}
