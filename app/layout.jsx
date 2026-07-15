import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Black Bells — Avaliações com prova de presença",
  description:
    "O Black Bells é o app de descoberta e avaliação de restaurantes, hotéis e experiências com prova de presença: só avalia quem realmente esteve lá.",
  icons: {
    icon: "/black-bells-black.png",
  },
  openGraph: {
    title: "Black Bells — Avaliações com prova de presença",
    description:
      "Descubra e avalie restaurantes, hotéis e experiências. Só avalia quem realmente esteve lá.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
