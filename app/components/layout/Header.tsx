"use client";
import { Settings } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const Header = () => {
  return (
    <header
      className={cn(
        "w-full transition-all duration-500 sticky top-0 z-50",
        "bg-header-bg shadow-[0_4px_20px_-4px_var(--header-shadow)]",
        "backdrop-blur-xl"
      )}
    >
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Lado Izquierdo: Perfil de Ari */}
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            {/* El borde del avatar también se adapta con dark:bg-white/10 */}
            <div className="w-10 h-10 rounded-full bg-white/30 dark:bg-white/10 p-0.5 shadow-sm">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-800 isolate">
                <Image
                  src="/perfil.png"
                  alt="Ari"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                  quality={75}
                />
              </div>
            </div>

            {/* Punto de estado: border-(--status-border) cambiará solo */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-(--status-border) rounded-full shadow-sm transition-colors duration-500" />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[15px] font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 leading-none tracking-tight">
              Ari <span className="text-[12px] opacity-80">✨</span>
            </h1>
            <span className="text-[9px] text-slate-700/60 dark:text-emerald-500 font-extrabold uppercase tracking-widest mt-1">
              En línea ahora
            </span>
          </div>
        </div>

        {/* Lado Derecho: Configuración */}
        <button className="p-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-400 transition-all active:scale-95 group">
          <Settings
            size={20}
            strokeWidth={2.2}
            className="group-hover:rotate-90 transition-transform duration-700 ease-in-out"
          />
        </button>
      </div>
    </header>
  );
};
