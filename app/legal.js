import fs from "node:fs";
import path from "node:path";

// Lê um documento legal em content/<slug>.html, extrai o conteúdo do <body>
// e ajusta os caminhos de imagem para absolutos (servidos de /public).
export function loadLegalBody(slug) {
  const filePath = path.join(process.cwd(), "content", `${slug}.html`);
  const html = fs.readFileSync(filePath, "utf8");
  const body = html.slice(
    html.indexOf("<body>") + "<body>".length,
    html.indexOf("</body>")
  );
  return body.replace(/src="(black-bells-[^"]+)"/g, 'src="/$1"');
}
