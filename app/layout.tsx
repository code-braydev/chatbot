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
        className={`${jakarta.variable} font-sans antialiased min-h-screen flex flex-col bg-(--background) text-(--foreground) transition-colors duration-500`}
      >
        {/* Fondo Ambiental */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-(--ari-purple)/10 blur-[120px]" />
          <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-(--ari-cyan)/10 blur-[100px]" />
        </div>

        <Header />

        <main className="flex-1 flex flex-col relative w-full overflow-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
