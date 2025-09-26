import { verificar } from "./Verificar.js";

const button = document.getElementById("button-submit");
const buttonExcluir = document.getElementById("button-excluir")
const inputItem = document.getElementById("input-item");
const msg = document.getElementById("msg");
const lista = document.getElementById("lista");

button.addEventListener("click", () => {

    const li = document.createElement("li");
    const p = document.createElement("p");

    li.appendChild(p);
    lista.appendChild(li)

    p.textContent = inputItem.value

    verificar(lista, msg);
});

buttonExcluir.addEventListener("click", (evento) =>{

    lista.innerHTML = ""
    verificar(lista, msg);
})

