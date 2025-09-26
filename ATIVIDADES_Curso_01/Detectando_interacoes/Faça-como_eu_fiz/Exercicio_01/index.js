const input = document.getElementById("input-item");
const botao = document.getElementById("input-button");
const lista = document.getElementById("lista-de-compras")
let contador = 0

botao.addEventListener("click", (evento) => {//Essa é uma função dinâmica(Função de evento), ou seja, quando ela é chamada pelo usuário o navegador chama quando algo acontece (clique, tecla, scroll, etc.).
    evento.preventDefault();//Impede que a página recaregue e eu perca o que escrevi

    if(input.value === ""){
        alert("Por gentileza adicionar algo!!")
        return;
    }

    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");//Cria dinâmicamente um elemento div na minha página
    containerItemDaLista.classList.add("lista-item-container");//Adiciona uma classe ao meu nono elemento div

    const inputChecbox = document.createElement("input");//Crio dinâmicamente um elemento input
    inputChecbox.type = "checkbox";//Informo que ele será do tipo Checkbox
    inputChecbox.id = "checkbox-" + contador++; // Deve atribuir um contador ao checkbox, pois cada vez que ele for criado dinâmicamente ele precisa de uma alteração do nome do id, pois se todos forem iguais podem gerar conflito de processamento, por exemplo 3 checkbox diferentes com o mesmo ID, isso vai dar conflito

    const nomeItem = document.createElement("p");//Cria dinâmicamente um elemento p na página
    nomeItem.innerText = input.value; // O innerText define o texto que aparece dentro do p e o input.value pega o que o usuário digitou no campo input

    containerItemDaLista.appendChild(inputChecbox);//Adiciono o input dentro da minha div(container)
    containerItemDaLista.appendChild(nomeItem)//Adiciono o paragrafo dentro da div
    itemDaLista.appendChild(containerItemDaLista)//Adiciono a div dentro da Lista li
    lista.appendChild(itemDaLista);//Adiciono li dentro de ul

    input.value = "";// limpa o campo de input
    input.focus();//Faz o cursor voltar ao input para escrever novamente


});