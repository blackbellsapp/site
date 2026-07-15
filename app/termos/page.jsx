import { loadLegalBody } from "../legal";

export const metadata = {
  title: "Termos de Uso — Black Bells",
  description:
    "Termos de Uso do aplicativo Black Bells: conta, avaliações com prova de presença, cadastro de estabelecimentos e anúncios.",
};

export default function Termos() {
  const body = loadLegalBody("termos");
  return <div className="legal" dangerouslySetInnerHTML={{ __html: body }} />;
}
