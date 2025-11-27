document.addEventListener("DOMContentLoaded", () => {
  // Marca links externos
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.setAttribute('rel', 'noopener noreferrer');
  });

  // Cria um sumário automático
  const headings = Array.from(document.querySelectorAll("article h2"));
  const toc = document.createElement("div");
  toc.className = "toc";
  toc.innerHTML = `<strong>Sumário</strong><ul>${headings.map(h => {
    const id = h.id || h.textContent.toLowerCase().replace(/\s+/g, "-");
    h.id = id;
    return `<li><a href="#${id}">${h.textContent}</a></li>`;
  }).join("")}</ul>`;
  document.querySelector(".post").prepend(toc);
});

// Estilos inline para o sumário
const style = document.createElement("style");
style.textContent = `
.toc {
  border: 1px solid var(--border);
  background: rgba(17,38,59,0.6);
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 16px;
}
.toc ul { list-style: none; padding-left: 0; }
.toc li { margin: 6px 0; }
.toc a { color: var(--muted); }
`;
document.head.appendChild(style);
