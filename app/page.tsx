"use client";
import { useState } from "react";
import { ChatMessages } from "./components/chat/ChatMessages";
import { ChatInput } from "./components/chat/ChatInput";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  time: string;
  status?: "sending" | "sent" | "read";
}

export default function Page() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "¡Hola! Soy Ari, tu compañera de la U. ✨ ¿En qué puedo ayudarte hoy?",
      time: "10:00 AM",
      status: "read",
    },
  ]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMessageId = Date.now().toString();

    // 1. Agregamos el mensaje del usuario (Estado inicial: enviado)
    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: input,
      time: userTime,
      status: "sent",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // 2. Simulamos la respuesta de Ari (Aquí conectarás tu API luego)
    setTimeout(() => {
      // Actualizamos el mensaje del usuario a "leído" (chulitos azules)
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessageId ? { ...msg, status: "read" } : msg
        )
      );

      const ariResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content:
          "¡Claro! Entiendo perfectamente. Estoy procesando tu solicitud para ayudarte de la mejor manera. 🌸",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, ariResponse]);
      setIsLoading(false);
    }, 2000); // 2 segundos de "pensamiento"
  };

  return (
    <div className="flex flex-col h-full w-full relative">
      {/* El contenedor de mensajes ahora recibe isLoading para mostrar los puntitos */}
      <ChatMessages messages={messages} isLoading={isLoading} />

      {/* Input de Chat con el degradado para el efecto de desvanecido */}
      <div className="w-full pt-10 pb-2 bg-linear-to-t from-(--background) via-(--background)/90 to-transparent z-10">
        <ChatInput
          input={input}
          setInput={setInput}
          onSend={handleSend}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
