const inputItem = document.getElementById("item-input");
const botao = document.getElementById("button")

botao.addEventListener("click", (evento) => {
    evento.preventDefault();

    const p = document.createElement("p")
    p.innerText = inputItem.value;

    const inputCheck = document.createElement("input")
    inputCheck.type = "checkbox"
    inputCheck.id = "checkbox-" + inputItem.value;

    p.appendChild(inputCheck);

    document.body.appendChild(p)

})