export function criarItemDaLista(texto) {
  const li = document.createElement("li");
  li.textContent = texto;
  return li;
}