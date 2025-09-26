const inputItem = document.getElementById("input-tarefa");
const botao = document.getElementById("button")
let contador = 0;

botao.addEventListener("click", (evento) => {
    evento.preventDefault();

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + contador++;

    const p = document.createElement("p");
    p.innerText = inputItem.value;

    const div = document.createElement("div")

    div.appendChild(checkbox);
    div.appendChild(p);
    
   document.getElementById("lista").appendChild(div);

})