import { IconWhatsApp } from "./Icons";
import { useCopy } from "../i18n";
import { WHATSAPP } from "../content";

export function WhatsApp() {
  const { t } = useCopy();
  const href = `${WHATSAPP}?text=${encodeURIComponent(t("wa.text"))}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t("wa.label")}
      className="wa-float fixed bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg end-5 hover:scale-105"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
