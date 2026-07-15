import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL("https://blackbells.app"),
  title: "Black Bells — O seu app de avaliações em Ouro Preto",
  description:
    "Descubra e avalie os melhores bares, restaurantes, pousadas, hotéis e pontos turísticos de Ouro Preto. Avalie com um toque, graças à tecnologia NFC.",
  icons: {
    icon: "/black-bells-black.png",
  },
  openGraph: {
    title: "Black Bells — O seu app de avaliações em Ouro Preto",
    description:
      "O app de descoberta e avaliação de estabelecimentos de Ouro Preto: bares, restaurantes, pousadas, hotéis e pontos turísticos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
