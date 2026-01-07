"use client";
import { SendHorizontal, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps {
  isLoading: boolean;
  isDisabled: boolean;
  onSend: () => void;
}

export const LoadingButton = ({
  isLoading,
  isDisabled,
  onSend,
}: LoadingButtonProps) => {
  return (
    <button
      onClick={onSend}
      disabled={isDisabled}
      className={cn(
        "relative flex h-11 w-11 items-center justify-center rounded-2xl transition-all duration-300",
        isDisabled
          ? "text-(--ari-purple)/20 opacity-40"
          : "text-(--ari-purple) scale-105 active:scale-95"
      )}
    >
      {!isDisabled && (
        <div className="absolute inset-0 rounded-full bg-(--ari-purple)/5 dark:bg-(--ari-purple)/10 animate-in zoom-in duration-300" />
      )}

      {isLoading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <SendHorizontal
          size={20}
          strokeWidth={2}
          className={cn(
            "relative z-10 transition-transform duration-300",
            !isDisabled && "drop-shadow-[0_2px_8px_rgba(168,85,247,0.4)]"
          )}
        />
      )}
    </button>
  );
};
