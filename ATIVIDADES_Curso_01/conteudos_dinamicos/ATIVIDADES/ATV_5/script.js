const button = document.getElementById("salvar");
const res = document.getElementById("res");

button.addEventListener("click", (evento) =>{
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    const li = document.createElement("li")

    li.appendChild(checkbox)

    res.appendChild(li)
})
