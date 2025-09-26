import { verificaRepeicao } from "./Mensagem.js";

const button = document.getElementById("button");
const inputItem = document.getElementById("input-item");
const lista = document.getElementById("lista");

button.addEventListener("click", evento =>{

    const li = document.createElement("li");
    const p = document.createElement("p");

    li.appendChild(p);
    lista.appendChild(li);

    p.textContent = inputItem.value;

    if(lista.children.length <=1){
        verificaRepeicao(1)
    }

})