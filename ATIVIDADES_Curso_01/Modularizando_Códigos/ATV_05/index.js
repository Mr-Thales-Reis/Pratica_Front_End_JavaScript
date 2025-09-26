import { verificador } from "./Verificador.js";
const button = document.getElementById("button");
const inputItem = document.getElementById("input-item");
const lista = document.getElementById("lista");
const msg = document.getElementById("msg")


button.addEventListener("click", evento =>{

    verificador(msg);

    const li = document.createElement("li");
    const p = document.createElement("p");

    li.appendChild(p);
    lista.appendChild(li);

    p.textContent = inputItem.value;
    
})