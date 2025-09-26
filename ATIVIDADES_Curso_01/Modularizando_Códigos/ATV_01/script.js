import { criarItemDaLista } from "./criarItemDaLista.js";

const input = document.getElementById("input-item");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaCompras = document.getElementById("lista-compras");



// Evento para adicionar item
btnAdicionar.addEventListener("click", () => {
  const valor = input.value.trim();

  if (valor !== "") {
    const novoItem = criarItemDaLista(valor);
    listaCompras.appendChild(novoItem);
    input.value = ""; // limpa o campo
  }
});
