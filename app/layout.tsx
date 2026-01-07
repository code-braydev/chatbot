import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Nueva fuente con más cuerpo
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Ari | Tu Espacio Seguro",
  description: "Asistente virtual empática y comprensiva.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} font-sans antialiased h-screen flex flex-col bg-(--background) text-(--foreground)`}
      >
        {/* El Header ahora es parte del flujo, empuja al main hacia abajo */}
        <Header />

        {/* El main ocupa todo el espacio restante sin que nada se le encime */}
        <main className="flex-1 overflow-hidden relative w-full flex flex-col bg-(--background)">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
