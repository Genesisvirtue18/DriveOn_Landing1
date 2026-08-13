import { useState, type ReactNode } from "react";
import { PageHero } from "../components/Layout";
import { IconMail, IconPhone, IconPin, IconClock, IconCheck } from "../components/Icons";
import { useCopy } from "../i18n";
import { ADDRESS, EMAIL, PHONE } from "../content";

export function Contact() {
  const { t } = useCopy();
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero kicker={t("contactPage.kicker")} title={t("contactPage.title")} highlight={t("contactPage.titleHl")} lead={t("contactPage.lead")} />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <Info icon={<IconPin className="h-5 w-5" />} label={t("contactPage.address")} value={ADDRESS} />
            <Info icon={<IconPhone className="h-5 w-5" />} label={t("contactPage.tel")} value={PHONE} href={`tel:${PHONE}`} />
            <Info icon={<IconMail className="h-5 w-5" />} label={t("contactPage.mail")} value={EMAIL} href={`mailto:${EMAIL}`} />
            <div className="rounded-3xl border border-sand bg-paper p-6">
              <div className="flex items-center gap-3 text-red">
                <IconClock className="h-5 w-5" />
                <span className="text-[11px] font-medium uppercase tracking-[0.16em]">{t("contactPage.hours")}</span>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-ink">
                <li>{t("contactPage.week")}</li>
                <li>{t("contactPage.sat")}</li>
                <li className="text-mute">{t("contactPage.sun")}</li>
              </ul>
            </div>
            <div className="overflow-hidden rounded-3xl border border-sand">
              <iframe
                title="DriveOn map"
                className="h-64 w-full"
                loading="lazy"
                src="https://maps.google.com/maps?q=Lergöksgatan%201F%20Västra%20Frölunda&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-sand bg-paper p-7 sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <IconCheck className="h-7 w-7" />
                </span>
                <p className="mt-5 max-w-sm text-lg text-ink">{t("contactPage.sent")}</p>
              </div>
            ) : (
              <form
                className="grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("contactPage.name")}</span>
                  <input required className="field" name="name" />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("contactPage.email")}</span>
                    <input required type="email" className="field" name="email" />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("contactPage.phone")}</span>
                    <input required type="tel" className="field" name="phone" />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("contactPage.message")}</span>
                  <textarea required rows={5} className="field resize-none" name="message" />
                </label>
                <button type="submit" className="h-12 rounded-full bg-red text-sm font-medium text-cream hover:bg-crimson">
                  {t("contactPage.send")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Info({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const inner = href ? <a href={href} className="text-ink hover:text-red">{value}</a> : <span className="text-ink">{value}</span>;
  return (
    <div className="rounded-3xl border border-sand bg-paper p-6">
      <div className="flex items-center gap-3 text-red">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-[0.16em]">{label}</span>
      </div>
      <p className="mt-3 text-sm">{inner}</p>
    </div>
  );
}
