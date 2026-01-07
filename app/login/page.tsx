"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ArrowRight, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulación de entrada a Ari
    setTimeout(() => {
      router.push("/chat"); // Ajusta la ruta a donde tengas el chat
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-(--background) transition-colors duration-500">
      <div className="w-full max-w-[400px] space-y-8 message-animate">
        {/* Logo / Cabecera */}
        <div className="text-center space-y-2">
          <div className="w-20 h-20 bg-(--ari-gradient) rounded-[2.5rem] mx-auto flex items-center justify-center shadow-xl shadow-purple-500/20 rotate-12 transition-transform hover:rotate-0 duration-500">
            <span className="text-3xl font-black text-white">A</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tighter mt-6">
            Hola, soy Ari
          </h1>
          <p className="text-(--foreground)/50 text-sm font-medium">
            Tu compañera de estudio te espera.
          </p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-4">
            {/* Input Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--foreground)/30 group-focus-within:text-(--ari-purple) transition-colors" />
              <input
                type="email"
                required
                placeholder="Tu correo de la U"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border-none rounded-2xl py-4 pl-12 pr-4 outline-none shadow-sm input-shadow text-sm transition-all"
              />
            </div>

            {/* Input Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-(--foreground)/30 group-focus-within:text-(--ari-purple) transition-colors" />
              <input
                type="password"
                required
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white dark:bg-slate-900 border-none rounded-2xl py-4 pl-12 pr-4 outline-none shadow-sm input-shadow text-sm transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full bg-(--ari-gradient) text-white font-bold py-4 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden relative",
              isLoading
                ? "opacity-70 cursor-not-allowed"
                : "hover:scale-[1.02] active:scale-[0.98]"
            )}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Entrar a clase
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Registro / Olvido */}
        <div className="text-center">
          <button className="text-[12px] font-bold text-(--ari-purple) hover:opacity-70 transition-opacity uppercase tracking-widest">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </div>
    </div>
  );
}
