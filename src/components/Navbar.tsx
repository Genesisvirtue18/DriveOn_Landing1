import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LogoMark, IconMenu, IconClose } from "./Icons";
import { useCopy } from "../i18n";
import { langLabels, type Lang } from "../translations";
import { useScrolled } from "../hooks";
import { useBooking } from "../booking";

const links = [
  { to: "/", key: "home" as const },
  { to: "/packages", key: "packages" as const },
  { to: "/theory", key: "theory" as const },
  { to: "/gallery", key: "gallery" as const },
  { to: "/blog", key: "blog" as const },
  { to: "/contact", key: "contact" as const },
];

export function Navbar() {
  const { t, lang, setLang } = useCopy();
  const { openBook } = useBooking();
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const onDark = loc.pathname === "/" && !scrolled && !open;
  const solid = !onDark;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          solid ? "bg-paper/93 shadow-[0_1px_0_#e6ddd0] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <NavLink to="/" className={`flex items-center gap-2.5 ${solid ? "text-ink" : "text-cream"}`}>
            <LogoMark className="h-8 w-8" />
            <span className="font-display text-[1.25rem] leading-none tracking-tight">
              DriveOn
            </span>
          </NavLink>

          <nav className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `text-[13.5px] font-medium transition ${
                    isActive
                      ? solid
                        ? "text-red"
                        : "text-rose"
                      : solid
                        ? "text-slate/80 hover:text-ink"
                        : "text-cream/75 hover:text-cream"
                  }`
                }
              >
                {t(`nav.${l.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className={`hidden items-center rounded-full border px-1 py-0.5 text-[11px] font-medium sm:flex ${
              solid ? "border-sand text-slate" : "border-cream/20 text-cream/80"
            }`}>
              {(["sv", "en", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full px-2 py-1 ${lang === l ? (solid ? "bg-ink text-cream" : "bg-red text-cream") : ""}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => openBook()}
              className={`hidden rounded-full px-4 py-2 text-[13px] font-medium sm:inline-flex ${
                solid ? "bg-red text-cream hover:bg-crimson" : "bg-red text-cream hover:bg-rose"
              }`}
            >
              {t("nav.book")}
            </button>
            <button
              type="button"
              className={`rounded-full p-2 lg:hidden ${solid ? "text-ink" : "text-cream"}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-[72px] lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className="font-display border-b border-sand py-4 text-3xl text-ink"
              >
                {t(`nav.${l.key}`)}
              </NavLink>
            ))}
            <div className="mt-6 flex gap-2">
              {(["sv", "en", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  className={`rounded-full px-4 py-2 text-sm ${lang === l ? "bg-red text-cream" : "bg-sand text-ink"}`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBook();
              }}
              className="mt-6 rounded-full bg-red py-3.5 text-sm font-medium text-cream"
            >
              {t("nav.book")}
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
