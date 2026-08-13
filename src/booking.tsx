import { createContext, useContext, useState, type ReactNode } from "react";

type BookingCtx = {
  open: boolean;
  preset?: string;
  openBook: (preset?: string) => void;
  closeBook: () => void;
};

const Ctx = createContext<BookingCtx | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>();

  return (
    <Ctx.Provider
      value={{
        open,
        preset,
        openBook: (p) => {
          setPreset(p);
          setOpen(true);
        },
        closeBook: () => setOpen(false),
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used inside BookingProvider");
  return ctx;
}
