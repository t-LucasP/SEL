import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import "../styles/globals.css";
import { Providers } from "./providers";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SEL",
  description: "Blank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          "dark min-h-screen bg-background antialiased font-spaceGrotesk overflow-x-hidden  "
        )}
      >
        {children}
      </body>
    </html>
  );
}
