export function verificar(lista, msg){
    if(lista.children.length >= 1){ //se dentro da minha lista(ul) existir elementos filhos(Li, p) conte eles, se for >= 1, retire a mensagem
        msg.textContent = "";
    }else{
        msg.textContent = "A lista está vazia!"
    }
    
}