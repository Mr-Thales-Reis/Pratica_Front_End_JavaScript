const inputItem = document.getElementById("input-item");
const botao = document.getElementById("button-item");

botao.addEventListener("click", (evento) => {
    evento.preventDefault();

    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.innerText = inputItem.value;// Aqui eu pego o conteudo do texto do meu paragráfo e digo que ele será igual ao valor que o usuário digitou no campo input e por isso o meu paragráfo fica com o texto input
    console.log(inputItem.value); 

    li.appendChild(p); 
    ul.appendChild(li);
    div.appendChild(ul);

    document.body.appendChild(div); // adiciona a div ao DOM
});
