export function dataHora(inputItem){
    const item = inputItem.value;

    if(item){
        const data = new Date();
        const dataMelhorada = data.toLocaleDateString("pt-br",{day: "2-digit", month: "2-digit", year: "numeric"})
        const hora = data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
        console.log(dataMelhorada)
        console.log(hora)
    }
}