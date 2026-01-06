"use client";
import { cn } from "@/lib/utils";
import { Check, CheckCheck } from "lucide-react";

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
        "flex w-full mb-6 message-animate",
        isAri ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "relative p-4 rounded-3xl transition-all duration-300",
          "max-w-[85%] sm:max-w-[70%]",
          isAri
            ? "bg-white/70 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-(--foreground) rounded-tl-none"
            : "bg-(--ari-linear) text-(--foreground) shadow-[0_10px_25px_-5px_rgba(157,124,251,0.4)] rounded-tr-none font-medium"
        )}
      >
        {isAri && (
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-(--ari-purple)/5 to-transparent pointer-events-none" />
        )}

        <p className="relative z-10 text-[15px] leading-relaxed tracking-tight">
          {content}
        </p>

        <div
          className={cn(
            "text-[10px] mt-2 flex items-center gap-1 font-bold uppercase tracking-wider",
            isAri ? "justify-start opacity-40" : "justify-end opacity-60"
          )}
        >
          {time}

          {!isAri && (
            <div className="flex ml-0.5 items-center">
              {status === "sending" ? (
                <div className="w-2.5 h-2.5 border-2 border-(--foreground)/20 border-t-(--foreground) rounded-full animate-spin" />
              ) : status === "sent" ? (
                <Check size={13} strokeWidth={3} className="opacity-40" />
              ) : (
                <CheckCheck
                  size={13}
                  strokeWidth={3}
                  className="text-(--ari-cyan) animate-in zoom-in duration-300"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
