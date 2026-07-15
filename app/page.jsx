import Link from "next/link";
import { UtensilsCrossed, Beer, BedDouble, Hotel, Landmark } from "lucide-react";
import ScrollFX from "./scrollfx";

const CATEGORIES = [
  { Icon: UtensilsCrossed, name: "Restaurantes" },
  { Icon: Beer, name: "Bares" },
  { Icon: BedDouble, name: "Pousadas" },
  { Icon: Hotel, name: "Hotéis" },
  { Icon: Landmark, name: "Pontos turísticos" },
];

const STEPS = [
  {
    step: "01",
    img: "/screens/abertura.png",
    title: "Entre em segundos",
    text: "Acesse com a Apple ou o Google e comece a explorar Ouro Preto na hora — sem cadastro complicado.",
  },
  {
    step: "02",
    img: "/screens/mapa.png",
    title: "Descubra no mapa",
    text: "Veja os estabelecimentos perto de você no mapa da cidade, com nota da comunidade e distância em tempo real.",
    reverse: true,
  },
  {
    step: "03",
    img: "/screens/estabelecimento.png",
    title: "Conheça cada lugar",
    text: "Fotos, descrição, especialidades e a nota do local. Tudo o que você precisa para decidir aonde ir.",
  },
  {
    step: "04",
    img: "/screens/avaliacoes.png",
    title: "Avaliações reais",
    text: "Leia opiniões de quem realmente visitou o lugar e deixe a sua nota em sinos para ajudar a comunidade de Ouro Preto.",
    reverse: true,
  },
  {
    step: "05",
    img: "/screens/especialista.png",
    title: "Curadoria de especialistas",
    text: "Além da comunidade, conte com a visão de gastrônomos e curadores convidados sobre os melhores endereços da cidade.",
  },
];

export default function Home() {
  return (
    <>
      <ScrollFX />

      {/* NAV — top bar flutuante */}
      <header className="nav">
        <Link href="/">
          <img className="nav-logo" src="/brand/logotipo.png" alt="Black Bells" />
        </Link>
        <nav className="nav-links">
          <a href="#app">O app</a>
          <a href="#nfc">Tecnologia NFC</a>
          <Link className="btn btn-accent" href="/privacidade">
            Privacidade
          </Link>
        </nav>
      </header>

      {/* HERO — full */}
      <section className="hero">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">Avaliações · Ouro Preto</p>
          <h1>
            O seu app de avaliações em <span className="accent">Ouro Preto</span>
          </h1>
          <p className="hero-sub">
            Descubra e avalie os melhores bares, restaurantes, pousadas, hotéis e
            pontos turísticos da cidade — e ajude a comunidade a encontrar o que
            Ouro Preto tem de melhor.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#app">
              Ver como funciona
            </a>
            <a className="btn btn-outline" href="#nfc">
              Conheça a tecnologia NFC
            </a>
          </div>
          <p className="hero-note">Em breve na App Store e no Google Play.</p>
        </div>
        <div className="hero-shot" data-reveal>
          <img
            src="/brand/hero.png"
            alt="App Black Bells aberto em um iPhone"
            data-parallax="0.16"
          />
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">O que você encontra</p>
            <h2>Tudo o que Ouro Preto oferece, em um só app.</h2>
            <p>
              Um aplicativo focado 100% na cidade de Ouro Preto, reunindo os
              lugares que fazem a experiência valer a pena.
            </p>
          </div>
          <div className="cats">
            {CATEGORIES.map(({ Icon, name }) => (
              <div className="cat" key={name} data-reveal>
                <span className="cat-ico">
                  <Icon strokeWidth={1.75} aria-hidden />
                </span>
                <span className="cat-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WALKTHROUGH */}
      <section className="section" id="app">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Como funciona</p>
            <h2>Da descoberta à avaliação, em poucos toques.</h2>
          </div>
          <div className="walk">
            {STEPS.map((s) => (
              <div
                className={`walk-row${s.reverse ? " reverse" : ""}`}
                key={s.step}
              >
                <div className="walk-text" data-reveal>
                  <p className="walk-step">{s.step}</p>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <div className="walk-media" data-reveal>
                  <img src={s.img} alt={s.title} data-parallax="0.14" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFC */}
      <section className="section" id="nfc">
        <div className="wrap">
          <div className="nfc-grid">
            <div className="nfc-text" data-reveal>
              <span className="nfc-badge">Tecnologia NFC</span>
              <h2>Avalie com um toque.</h2>
              <p>
                Cada estabelecimento parceiro recebe um adesivo Black Bells com
                tecnologia NFC. Basta aproximar o celular para avaliar na hora —
                rápido, real e sem complicação.
              </p>
              <p>
                É a prova de presença que garante avaliações de quem realmente
                esteve no local.
              </p>
            </div>
            <div className="nfc-media" data-reveal>
              <img
                src="/brand/nfc-parede.png"
                alt="Adesivo NFC Black Bells aplicado na fachada de um estabelecimento"
                data-parallax="0.14"
              />
            </div>
          </div>

          {/* Selo grande, sozinho */}
          <div className="nfc-seal" data-reveal>
            <img
              src="/brand/nfc-sticker.png"
              alt="Selo NFC Black Bells — avalie no Black Bells"
              data-parallax="0.1"
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="closing">
        <img
          className="closing-logo"
          src="/brand/logotipo.png"
          alt="Black Bells"
          data-reveal
        />
        <h2 data-reveal>Feito para Ouro Preto.</h2>
        <p data-reveal>
          Fique por dentro do lançamento do Black Bells e seja um dos primeiros a
          avaliar a cidade.
        </p>
        <div className="hero-cta" data-reveal>
          <a
            className="btn btn-primary"
            href="mailto:blackbellsapp@gmail.com?subject=Quero%20saber%20do%20lan%C3%A7amento%20do%20Black%20Bells"
          >
            Quero ser avisado do lançamento
          </a>
        </div>
      </section>

      {/* FOOTER */}
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
              <a href="#app">O app</a>
              <a href="#nfc">Tecnologia NFC</a>
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
    </>
  );
}
