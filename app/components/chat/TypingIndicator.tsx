"use client";
import { cn } from "@/lib/utils";

export const TypingIndicator = () => {
  return (
    <div className="flex w-full mb-4 px-2 justify-start message-animate">
      <div
        className={cn(
          "relative px-4 py-3 transition-all duration-300",
          "rounded-2xl rounded-tl-none shadow-sm",
          "bg-white dark:bg-slate-900",
          "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.3)]"
        )}
      >
        <div className="flex gap-1.5 items-center h-2.5">
          {/* Asegúrate de que bg-(--ari-purple) tenga color, si no usa bg-purple-500 para probar */}
          <div className="w-1.5 h-1.5 bg-ari-purple rounded-full animate-messenger delay-dots-1" />
          <div className="w-1.5 h-1.5 bg-ari-purple rounded-full animate-messenger delay-dots-2" />
          <div className="w-1.5 h-1.5 bg-ari-purple rounded-full animate-messenger" />
        </div>
      </div>
    </div>
  );
};
