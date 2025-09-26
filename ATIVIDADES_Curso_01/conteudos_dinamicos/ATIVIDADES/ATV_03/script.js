const inputItem = document.getElementById("input-item");
const botao = document.getElementById("botao");
const divResultado = document.getElementById("resultado")
let contador = 0;

botao.addEventListener("click", (evento) =>{
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
    li.appendChild(document.createTextNode(" " + inputItem.value));//Adiciona o meu texto enfrente ao meu checkbox

    const dataInfo = document.createElement("p");
    const data = new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});//Variavel que armazena a data 
    const hora = new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit'});//variavel que armazena o horário

    dataInfo.textContent = "Adicionado ás: " + hora + ", " + data;//dataInfo.textContent contém o conteudo do meu paragrafo que sera DATA + HORA

    li.appendChild(dataInfo);

    divResultado.appendChild(li);

});
