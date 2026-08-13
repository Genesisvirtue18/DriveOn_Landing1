import { useEffect, useMemo, useState } from "react";
import { IconClose, IconCheck } from "./Icons";
import { useCopy } from "../i18n";
import { useBooking } from "../booking";
import { bookServices, timeSlots } from "../content";
import { langLabels, type Lang } from "../translations";

export function BookingWizard() {
  const { t, lang } = useCopy();
  const { open, closeBook, preset } = useBooking();
  const services = useMemo(() => bookServices(lang), [lang]);
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [service, setService] = useState(services[3].id);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("09:00");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pref, setPref] = useState<Lang>(lang);
  const [pickup, setPickup] = useState("no");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (!open) return;
    setSent(false);
    setStep(1);
    if (preset) {
      const match = services.find((s) => s.id === preset || s.name === preset);
      if (match) setService(match.id);
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, preset, services]);

  if (!open) return null;

  const chosen = services.find((s) => s.id === service) ?? services[0];
  const minDate = new Date().toISOString().slice(0, 10);

  function next() {
    if (step === 2 && !date) return;
    if (step === 3 && (!name || !phone || !email)) return;
    if (step < 4) setStep((s) => s + 1);
  }

  const labels = [t("book.s1"), t("book.s2"), t("book.s3"), t("book.s4")];

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6">
      <button type="button" aria-label={t("book.close")} className="absolute inset-0 bg-ink/55 backdrop-blur-sm" onClick={closeBook} />
      <div className="relative z-10 max-h-[94vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-paper shadow-2xl sm:rounded-3xl">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-sand bg-paper px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-red">
              {t("book.step")} {step} {t("book.of")} 4
            </p>
            <h3 className="font-display mt-1 text-2xl text-ink">{t("book.title")}</h3>
          </div>
          <button type="button" onClick={closeBook} className="rounded-full p-2 text-mute hover:bg-sand" aria-label={t("book.close")}>
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-1 px-6 pt-4 sm:px-8">
          {labels.map((l, i) => (
            <div key={l} className="min-w-0">
              <div className={`h-1 rounded-full ${i < step ? "bg-red" : "bg-sand"}`} />
              <p className={`mt-1 truncate text-[10px] ${i < step ? "text-red" : "text-mute"}`}>{l}</p>
            </div>
          ))}
        </div>

        {sent ? (
          <div className="flex flex-col items-center px-8 py-14 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/15 text-sage">
              <IconCheck className="h-7 w-7" />
            </span>
            <h4 className="font-display mt-5 text-2xl text-ink">{t("book.thanks")}</h4>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-mute">{t("book.thanksD")}</p>
            <button type="button" onClick={closeBook} className="mt-8 rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-cream">
              {t("book.close")}
            </button>
          </div>
        ) : (
          <div className="px-6 py-6 sm:px-8">
            {step === 1 && (
              <div className="grid gap-2">
                {services.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setService(s.id)}
                    className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-start ${
                      service === s.id ? "border-red bg-blush/50" : "border-sand bg-white"
                    }`}
                  >
                    <span className="text-sm font-medium text-ink">{s.name}</span>
                    <span className="text-sm text-red">{s.price}</span>
                  </button>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="grid gap-5">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.date")}</span>
                  <input type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} className="field" required />
                </label>
                <div>
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.time")}</span>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={`rounded-xl border py-2 text-sm ${time === slot ? "border-red bg-blush/50 text-ink" : "border-sand bg-white"}`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="grid gap-4">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.name")}</span>
                  <input className="field" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.phone")}</span>
                    <input className="field" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.email")}</span>
                    <input className="field" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.langPref")}</span>
                  <select className="field" value={pref} onChange={(e) => setPref(e.target.value as Lang)}>
                    {(["sv", "en", "ar"] as Lang[]).map((l) => (
                      <option key={l} value={l}>{langLabels[l]}</option>
                    ))}
                  </select>
                </label>
                <div>
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.pickup")}</span>
                  <div className="grid grid-cols-2 gap-2">
                    <button type="button" onClick={() => setPickup("yes")} className={`rounded-xl border py-2 text-sm ${pickup === "yes" ? "border-red bg-blush/50" : "border-sand bg-white"}`}>
                      {t("book.pickupYes")}
                    </button>
                    <button type="button" onClick={() => setPickup("no")} className={`rounded-xl border py-2 text-sm ${pickup === "no" ? "border-red bg-blush/50" : "border-sand bg-white"}`}>
                      {t("book.pickupNo")}
                    </button>
                  </div>
                </div>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-medium uppercase tracking-[0.16em] text-mute">{t("book.note")}</span>
                  <textarea className="field resize-none" rows={3} placeholder={t("book.notePh")} value={note} onChange={(e) => setNote(e.target.value)} />
                </label>
              </div>
            )}

            {step === 4 && (
              <div className="rounded-2xl border border-sand bg-cream/60 p-5 text-sm">
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-red">{t("book.summary")}</p>
                <dl className="mt-4 space-y-3 text-ink">
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.service")}</dt>
                    <dd className="font-medium">{chosen.name} · {chosen.price}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.when")}</dt>
                    <dd className="font-medium">{date} · {time}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.name")}</dt>
                    <dd className="font-medium">{name}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.phone")}</dt>
                    <dd className="font-medium">{phone}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.email")}</dt>
                    <dd className="font-medium">{email}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.langPref")}</dt>
                    <dd className="font-medium">{langLabels[pref]}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-mute">{t("book.pickup")}</dt>
                    <dd className="font-medium">{pickup === "yes" ? t("book.pickupYes") : t("book.pickupNo")}</dd>
                  </div>
                </dl>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              {step > 1 && (
                <button type="button" onClick={() => setStep((s) => s - 1)} className="h-12 flex-1 rounded-full border border-sand text-sm font-medium text-ink">
                  {t("book.back")}
                </button>
              )}
              {step < 4 ? (
                <button type="button" onClick={next} className="h-12 flex-1 rounded-full bg-red text-sm font-medium text-cream hover:bg-crimson">
                  {t("book.next")}
                </button>
              ) : (
                <button type="button" onClick={() => setSent(true)} className="h-12 flex-1 rounded-full bg-red text-sm font-medium text-cream hover:bg-crimson">
                  {t("book.confirm")}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
