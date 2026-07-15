import fs from "node:fs";
import path from "node:path";

// Lê o documento legal em content/<slug>.html e devolve apenas o <main>
// (o rodapé antigo do arquivo é descartado — usamos o rodapé compartilhado).
export function loadLegalBody(slug) {
  const filePath = path.join(process.cwd(), "content", `${slug}.html`);
  const html = fs.readFileSync(filePath, "utf8");
  const start = html.indexOf("<main");
  const end = html.indexOf("</main>");
  if (start === -1 || end === -1) return "";
  return html.slice(start, end + "</main>".length);
}
