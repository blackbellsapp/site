import { loadLegalBody } from "../legal";
import LegalShell from "../legalshell";

export const metadata = {
  title: "Termos de Uso — Black Bells",
  description:
    "Termos de Uso do aplicativo Black Bells: conta, avaliações com prova de presença, cadastro de estabelecimentos e anúncios.",
};

export default function Termos() {
  const body = loadLegalBody("termos");
  return <LegalShell html={body} />;
}
