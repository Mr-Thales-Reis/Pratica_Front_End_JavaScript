const botao = document.getElementById("botaoSalvar");
const inputItem = document.getElementById("entrada")
const lista = document.getElementById("minha-lista")

botao.addEventListener("click", (evento) =>{
    evento.preventDefault();

    if(inputItem.value === ""){
        window.alert("Você não preencheu o campo de adicionar item!")
    }

    const div = document.createElement("div");
    const ul = document.createElement("ul")
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = inputItem.value
    
    li.appendChild(p);
    ul.appendChild(li);
    div.appendChild(ul);
    lista.appendChild(div)
    
    div.classList.add("container-lista")

    const botaoEditar = document.createElement("input")
    botaoEditar.type = "button"
    botaoEditar.value = "Editar"

    p.appendChild(botaoEditar)
    botaoEditar.classList.add("botaoEditar")
    


    botaoEditar.addEventListener("click", (evento) => {
        inputAlterado =  window.prompt("Altere o texto da lista:")
        p.innerText = inputAlterado;
        p.appendChild(botaoEditar)
        p.appendChild(botaoExcluir)
    })

    const botaoExcluir = document.createElement("input");
    botaoExcluir.type = "button";
    botaoExcluir.value = "Excluir"

    p.appendChild(botaoExcluir)
    botaoEditar.classList.add("botaoRemover")

    botaoExcluir.addEventListener("click", (evento) =>{
        div.remove();
    })


    inputItem.value = "";
    inputItem.focus();
})