export const Footer = () => {
  return (
    <footer className="hidden sm:block sm:sticky sm:bottom-0 w-full py-4 bg-transparent">
      <div className="max-w-full mx-auto px-6 grid grid-cols-3 items-center">
        <div className="text-[9px] text-(--foreground)/30 uppercase tracking-[0.2em] font-bold">
          V1.0.0
        </div>

        <p className="text-[10px] text-(--foreground)/50 whitespace-nowrap text-center font-medium tracking-tight">
          Ari te acompaña <span className="mx-1 opacity-60">•</span> No
          reemplaza la ayuda profesional
        </p>

        <div className="flex justify-end items-center gap-1.5 text-[10px] text-(--foreground)/40 tracking-tight">
          <span className="opacity-80">© {new Date().getFullYear()}</span>
          <span className="font-black text-(--ari-purple) tracking-[0.2em] uppercase text-[8px]">
            BrayDev
          </span>
        </div>
      </div>
    </footer>
  );
};
