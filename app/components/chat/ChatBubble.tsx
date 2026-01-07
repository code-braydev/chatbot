"use client";
import { cn } from "@/lib/utils";
import { CheckCheck } from "lucide-react";

interface ChatBubbleProps {
  role: "user" | "assistant";
  content: string;
  time: string;
  status?: "sending" | "sent" | "read";
}

export const ChatBubble = ({
  role,
  content,
  time,
  status = "read",
}: ChatBubbleProps) => {
  const isAri = role === "assistant";

  return (
    <div
      className={cn(
        "flex w-full mb-4 px-2",
        isAri ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative px-4 py-2.5 transition-all duration-300 max-w-[85%] sm:max-w-[70%]",
          "rounded-2xl shadow-sm",
          "bg-white dark:bg-slate-900",
          "text-slate-700 dark:text-slate-200",
          "shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] dark:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.3)]",
          isAri ? ["rounded-tl-none"] : ["rounded-tr-none"]
        )}
      >
        {/* Contenido */}
        <p className="text-[14.5px] leading-relaxed">{content}</p>

        {/* Info de mensaje (Hora y Checks) */}
        <div
          className={cn(
            "flex items-center gap-1.5 mt-1 justify-end text-slate-400"
          )}
        >
          <span className="text-[9px] font-medium tracking-tight">{time}</span>

          {!isAri && (
            <CheckCheck
              size={13}
              strokeWidth={2.5}
              className={cn(
                "transition-colors",
                status === "read"
                  ? "text-cyan-300"
                  : "text-slate-400 dark:text-white/30"
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
};
