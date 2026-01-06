"use client";
import { SendHorizontal, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChatInput = ({
  input,
  setInput,
  onSend,
  isLoading,
}: {
  input: string;
  setInput: (input: string) => void;
  onSend: () => void;
  isLoading: boolean; // Tipo booleano
}) => {
  const hasText = input.trim().length > 0;
  const isDisabled = !hasText || isLoading;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pb-6 pt-2">
      <div
        className={cn(
          "sticky bottom-2.5 flex items-end transition-all duration-300 rounded-3xl p-1.5",
          "bg-white/70 backdrop-blur-xl input-shadow",
          "focus-within:bg-white",
          isLoading && "opacity-80 cursor-not-allowed"
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
          className="flex-1 bg-transparent border-none outline-none focus:ring-0 px-4 py-3 text-[15px] text-(--foreground) placeholder:text-(--foreground) disabled:cursor-not-allowed"
        />

        <button
          onClick={onSend}
          disabled={isDisabled}
          className={cn(
            "p-3 rounded-2xl transition-all duration-300 flex items-center justify-center relative min-w-11 min-h-11",
            !isDisabled
              ? "text-(--ari-purple) opacity-100 scale-105 active:scale-95"
              : "text-(--ari-purple)/20 opacity-40 cursor-not-allowed"
          )}
        >
          {!isDisabled && (
            <div className="absolute inset-0 bg-(--ari-purple)/5 rounded-full animate-in fade-in zoom-in duration-300" />
          )}

          {isLoading ? (
            <Loader2 size={20} className="animate-spin text-(--ari-purple)" />
          ) : (
            <SendHorizontal
              size={20}
              strokeWidth={2}
              className={cn(
                "relative z-10 transition-all duration-300",
                hasText ? "drop-shadow-[0_2px_4px_rgba(157,124,251,0.2)]" : ""
              )}
            />
          )}
        </button>
      </div>
    </div>
  );
};
