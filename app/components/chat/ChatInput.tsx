"use client";
import { cn } from "@/lib/utils";
import { LoadingButton } from "./LoadingButton";

export const ChatInput = ({
  input,
  setInput,
  onSend,
  isLoading,
}: {
  input: string;
  setInput: (input: string) => void;
  onSend: () => void;
  isLoading: boolean;
}) => {
  const isDisabled = !input.trim() || isLoading;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6 pt-2">
      <div
        className={cn(
          "flex items-end rounded-3xl p-1.5 transition-all duration-300 border border-white/40 dark:border-white/5",
          "bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl input-shadow",
          // Usamos la variable de fondo para el modo enfocado
          "focus-within:bg-white dark:focus-within:bg-slate-950",
          isLoading && "opacity-70 pointer-events-none"
        )}
      >
        <input
          type="text"
          value={input}
          disabled={isLoading}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !isDisabled && onSend()}
          placeholder={
            isLoading ? "Ari está pensando..." : "Escribe un mensaje..."
          }
          // Usamos la variable --foreground para el texto principal
          className="flex-1 bg-transparent px-4 py-3 text-[15px] outline-none text-(--foreground) placeholder:text-(--foreground)/40"
        />

        <LoadingButton
          isLoading={isLoading}
          isDisabled={isDisabled}
          onSend={onSend}
        />
      </div>
    </div>
  );
};
