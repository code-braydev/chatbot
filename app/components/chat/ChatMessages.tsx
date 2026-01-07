"use client";
import { useEffect, useRef } from "react";
import { ChatBubble } from "./ChatBubble";
import { TypingIndicator } from "./TypingIndicator";

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

  // Función para hacer scroll hacia el final
  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  // Se ejecuta cada vez que hay mensajes nuevos o Ari empieza a pensar
  useEffect(() => {
    scrollToBottom();
    // Un pequeño delay extra para asegurar que las animaciones de entrada terminaron
    const timeout = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeout);
  }, [messages, isLoading]);

  return (
    <div
      ref={scrollRef}
      className="flex-1 overflow-y-auto px-4 pt-6 pb-32 chat-container scroll-smooth"
    >
      <div className="max-w-3xl mx-auto w-full flex flex-col">
        {/* Renderizado de mensajes históricos */}
        {messages.map((msg) => (
          <ChatBubble
            key={msg.id}
            role={msg.role}
            content={msg.content}
            time={msg.time}
            status={msg.status}
          />
        ))}

        {/* Indicador de escritura: Aparece como una burbuja más al final */}
        {isLoading && <TypingIndicator />}
      </div>
    </div>
  );
};
