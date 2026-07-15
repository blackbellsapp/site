import { loadLegalBody } from "../legal";
import LegalShell from "../legalshell";

export const metadata = {
  title: "Política de Privacidade — Black Bells",
  description:
    "Política de Privacidade do aplicativo Black Bells, em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
};

export default function Privacidade() {
  const body = loadLegalBody("privacidade");
  return <LegalShell html={body} />;
}
