"use client";
import { useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
  status?: "sending" | "sent" | "read";
}

export const ChatMessages = ({
  messages,
  isLoading,
}: {
  messages: Message[];
  isLoading: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 py-6 space-y-2 chat-container scroll-smooth"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col">
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            role={msg.role}
            content={msg.content}
            time={msg.time}
            status={msg.status}
          />
        ))}

        {isLoading && (
          <div className="flex w-full mb-6 message-animate justify-start">
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-3xl rounded-tl-none shadow-sm border border-white/40">
              <div className="flex gap-1.5 items-center h-5">
                <div className="w-1.5 h-1.5 bg-(--ari-purple) rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-(--ari-purple) rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-(--ari-purple) rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
