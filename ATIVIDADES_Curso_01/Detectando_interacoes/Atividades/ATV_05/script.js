// Captura dos elementos
const input = document.getElementById("input_item");
const botao = document.getElementById("adicionar_Button");
const lista = document.getElementById("lista_de_filmes");

// Função que adiciona o filme
function adicionarFilme() {
    // 1. pegar o valor digitado
    const filme = input.value.trim();

    // não deixa adicionar vazio
    if (filme === "") return;

    // 2. criar o li
    const novoItem = document.createElement("li");

    // 3. colocar o texto dentro do li
    novoItem.textContent = filme;

    // 4. jogar o li na lista
    lista.appendChild(novoItem);

    // 5. limpar o campo
    input.value = "";
}

// Evento de clique no botão
botao.addEventListener("click", adicionarFilme);
