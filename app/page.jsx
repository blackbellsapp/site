import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <main className="home-main">
        {/* Logo branco sobre fundo preto */}
        <img
          className="home-logo"
          src="/black-bells-white.png"
          alt="Black Bells"
        />
      </main>

      <footer className="home-footer">
        <Link href="/privacidade" className="foot-btn">
          Política de Privacidade
        </Link>
        <p className="foot-copy">© 2026 Black Bells. Feito em Minas Gerais.</p>
      </footer>
    </div>
  );
}
