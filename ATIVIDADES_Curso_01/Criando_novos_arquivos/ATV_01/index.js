import { dataHora } from "./DataHora.js";

const button = document.getElementById("button");
const inputItem = document.getElementById("input-item")
const lista = document.getElementById("lista")

button.addEventListener("click", evento => {
    evento.preventDefault();

    const li = document.createElement("li")
    const p = document.createElement("p")

    li.appendChild(p);
    lista.appendChild(li)

    p.textContent = inputItem.value;

    console.log(dataHora(inputItem))

})