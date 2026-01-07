export const Footer = () => {
  return (
    // Quitamos bordes y usamos el mismo color de fondo
    <footer className="hidden sm:block w-full py-6 bg-(--background) transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6 grid grid-cols-3 items-center">
        {/* Versión */}
        <div className="text-[9px] text-(--foreground)/20 uppercase tracking-[0.2em] font-bold">
          V1.0.0
        </div>

        {/* Mensaje Central */}
        <p className="text-[10px] text-(--foreground)/40 whitespace-nowrap text-center font-medium tracking-tight">
          Ari te acompaña <span className="mx-1 opacity-40">•</span> No
          reemplaza la ayuda profesional
        </p>

        {/* Copyright y Marca */}
        <div className="flex justify-end items-center gap-1.5 text-[10px] text-(--foreground)/30 tracking-tight">
          <span className="opacity-60">© {new Date().getFullYear()}</span>
          <span className="font-black text-(--ari-purple)/60 tracking-[0.2em] uppercase text-[8px]">
            BrayDev
          </span>
        </div>
      </div>
    </footer>
  );
};
