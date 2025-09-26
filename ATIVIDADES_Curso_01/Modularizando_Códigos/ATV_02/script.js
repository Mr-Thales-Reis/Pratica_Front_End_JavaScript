import {remover, editar, itemFixo} from "./variaveisGlobais.js";

remover.addEventListener("click", (evento) =>{
    itemFixo.remove();
})

editar.addEventListener("click", (evento) =>{
    const novoitem = window.prompt("Digite um novo valor:")
    itemFixo.innerText = novoitem
})