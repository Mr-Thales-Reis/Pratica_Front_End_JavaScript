export function dataHora(inputItem){
        const item = inputItem.value;

        if(item){
            const data = new Date();
            const hora = data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
            console.log(data)
            console.log(hora)
        }
    }