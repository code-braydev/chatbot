"use client";
import { useState } from "react";
import { ChatMessages } from "./components/chat/ChatMessages";
import { ChatInput } from "./components/chat/ChatInput";
import { cn } from "@/lib/utils";

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
  // Empezamos con mensajes vacíos para detectar el estado inicial
  const [messages, setMessages] = useState<Message[]>([]);

  const isInitialState = messages.length === 0;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const userMessageId = Date.now().toString();

    const userMessage: Message = {
      id: userMessageId,
      role: "user",
      content: input,
      time: userTime,
      status: "sending",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // --- Lógica de simulación de Ari ---
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessageId ? { ...msg, status: "sent" } : msg
        )
      );
    }, 600);

    setTimeout(() => {
      setIsLoading(true);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessageId ? { ...msg, status: "read" } : msg
        )
      );

      setTimeout(() => {
        const ariResponse: Message = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "¡Claro! Como tu compañera de la U, estoy lista para ayudarte con tus dudas académicas o simplemente para charlar. 🌸",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, ariResponse]);
        setIsLoading(false);
      }, 2500);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-screen w-full relative overflow-hidden">
      {/* 1. MODO CONVERSACIÓN: Solo aparece si hay mensajes */}
      {!isInitialState && (
        <div className="flex-1 overflow-hidden flex flex-col">
          <ChatMessages messages={messages} isLoading={isLoading} />
        </div>
      )}

      {/* 2. MODO INICIAL: Texto centrado y espacio flexible */}
      <div
        className={cn(
          "flex flex-col items-center justify-center transition-all duration-700 ease-in-out px-4",
          isInitialState ? "flex-1 pb-20" : "pb-6 pt-2"
        )}
      >
        {isInitialState && (
          <div className="text-center mb-8 message-animate">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--foreground) mb-2">
              ¡Hola! Soy Ari, tu compañera de la U. ✨
            </h1>
            <p className="text-(--foreground)/50 text-lg">
              ¿En qué puedo ayudarte hoy?
            </p>
          </div>
        )}

        {/* 3. INPUT DINÁMICO: Se mueve de centro a abajo */}
        <div
          className={cn(
            "w-full max-w-3xl transition-all duration-700",
            !isInitialState && "sticky bottom-0 z-10"
          )}
        >
          <ChatInput
            input={input}
            setInput={setInput}
            onSend={handleSend}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
