const inputItem = document.getElementById("input-item");
const button = document.getElementById("button");
const divTotal = document.getElementById("divresultado")
let contador = 0;

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const check = document.createElement("input");

    check.type = "checkbox";
    check.id = "checkbox-" + contador++;

    div.appendChild(ul);
    ul.appendChild(li);
    li.appendChild(check);

    li.appendChild(document.createTextNode(" " + inputItem.value ))

    const datainfo = document.createElement("p");
    const data = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    const horas = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'});
    
    datainfo.textContent = `Data: ${data} ás ${horas} horas`

    li.appendChild(document.createTextNode(`(${datainfo.textContent})`))
    divTotal.appendChild(li);
}) 