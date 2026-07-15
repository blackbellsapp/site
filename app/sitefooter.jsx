import Link from "next/link";

// Rodapé compartilhado (home + páginas legais): suspenso e arredondado.
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="foot-inner">
        <div className="foot-brand">
          <img src="/brand/logotipo.png" alt="Black Bells" />
          <p>
            O app de descoberta e avaliação de estabelecimentos de Ouro Preto.
            Feito em Minas Gerais.
          </p>
        </div>
        <div className="foot-right">
          <p className="label">Black Bells</p>
          <div className="foot-links">
            <Link href="/#app">O app</Link>
            <Link href="/#nfc">Tecnologia NFC</Link>
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
            <a href="mailto:blackbellsapp@gmail.com">Contato</a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <p>© 2026 Black Bells. Feito em Minas Gerais.</p>
        <div className="foot-legal">
          <Link href="/privacidade">Política de Privacidade</Link>
          <Link href="/termos">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
