"use client";
import { Settings } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 glass px-4 py-3 transition-all duration-300 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Lado Izquierdo: Perfil de Ari */}
        <div className="flex items-center gap-3.5">
          <div className="relative shrink-0">
            {/* Contenedor del Avatar con borde de degradado y sombra */}
            <div className="w-11 h-11 rounded-full bg-(--ari-linear) p-0.5 shadow-md">
              <div className="relative w-full h-full bg-white rounded-full overflow-hidden isolate">
                <Image
                  src="/perfil.png"
                  alt="Ari"
                  fill
                  sizes="44px"
                  className="object-cover"
                  priority
                  quality={75} // Calidad máxima para evitar pixelado
                />
              </div>
            </div>
            {/* Indicador de Estado: Verde esmeralda con borde blanco limpio */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-[2.5px] border-white rounded-full shadow-sm"></span>
          </div>

          <div className="flex flex-col">
            {/* Nombre: Con peso extra y emoji de destello */}
            <h1 className="text-[16px] font-extrabold text-(--foreground) flex items-center gap-1.5 leading-none tracking-tight">
              Ari{" "}
              <span className="text-[13px] filter drop-shadow-sm select-none">
                ✨
              </span>
            </h1>

            {/* Estado: tracking-tight para evitar letras demasiado separadas */}
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-tight mt-1 opacity-90">
              En línea ahora
            </span>
          </div>
        </div>

        {/* Lado Derecho: Configuración (Estilo Minimalista) */}
        <button
          className="p-2.5 rounded-2xl hover:bg-(--ari-purple)/10 text-(--foreground)/40 hover:text-(--ari-purple) transition-all active:scale-95 group"
          aria-label="Configuración"
        >
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
