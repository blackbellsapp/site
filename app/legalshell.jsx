"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
import SiteFooter from "./sitefooter";

/**
 * Estrutura das páginas legais (Privacidade / Termos):
 *  - Top bar flutuante com logo + alternância de tema (padrão: dark).
 *  - Conteúdo do documento (injetado como HTML).
 *  - Rodapé compartilhado com a home (suspenso e arredondado).
 * Tema padrão é "dark" para entrar no clima da marca; a preferência
 * escolhida fica salva em localStorage.
 */
export default function LegalShell({ html }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("bb-legal-theme");
      if (saved === "light" || saved === "dark") setTheme(saved);
    } catch {}
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("bb-legal-theme", next);
    } catch {}
  };

  return (
    <div className="legal" data-theme={theme}>
      <header className="legal-nav">
        <Link href="/" aria-label="Voltar para a home">
          <img className="legal-logo" src="/brand/logotipo.png" alt="Black Bells" />
        </Link>
        <button
          type="button"
          className="theme-toggle"
          onClick={toggle}
          aria-label={theme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
          title={theme === "dark" ? "Modo claro" : "Modo escuro"}
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          <span>{theme === "dark" ? "Claro" : "Escuro"}</span>
        </button>
      </header>

      <div className="doc-area" dangerouslySetInnerHTML={{ __html: html }} />

      <SiteFooter />
    </div>
  );
}
