import { Link } from "react-router-dom";
import { LogoMark } from "./Icons";
import { useCopy } from "../i18n";
import { ADDRESS, EMAIL, PHONE, PHONE_E164, INSTAGRAM } from "../content";

export function Footer() {
  const { t } = useCopy();
  return (
    <footer className="bg-paper pb-10 pt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 border-t border-sand pt-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2 text-ink">
              <LogoMark className="h-7 w-7" />
              <span className="font-display text-xl">DriveOn</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mute">{t("footer.blurb")}</p>
          </div>
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-mute">{t("footer.visit")}</h4>
            <p className="mt-4 text-sm text-ink">{ADDRESS}</p>
            <p className="mt-2 text-sm text-mute">Västra Frölunda · Göteborg</p>
          </div>
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-mute">{t("footer.learn")}</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/packages" className="text-ink hover:text-red">{t("nav.packages")}</Link></li>
              <li><Link to="/theory" className="text-ink hover:text-red">{t("nav.theory")}</Link></li>
              <li><Link to="/gallery" className="text-ink hover:text-red">{t("nav.gallery")}</Link></li>
              <li><Link to="/blog" className="text-ink hover:text-red">{t("nav.blog")}</Link></li>
              <li><Link to="/contact" className="text-ink hover:text-red">{t("nav.contact")}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-mute">{t("footer.desk")}</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink">
              <li><a href={`tel:+${PHONE_E164}`}>{PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="hover:text-red">
                  @driveontrafikskola
                </a>
              </li>
              <li className="text-mute">{t("contactPage.week")}</li>
              <li className="text-mute">{t("contactPage.sat")}</li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-sand pt-6 text-[12px] text-mute sm:flex-row">
          <p>© {new Date().getFullYear()} DriveOn Trafikskola AB. {t("footer.rights")}</p>
          <p>{t("footer.legal")}</p>
        </div>
      </div>
    </footer>
  );
}
