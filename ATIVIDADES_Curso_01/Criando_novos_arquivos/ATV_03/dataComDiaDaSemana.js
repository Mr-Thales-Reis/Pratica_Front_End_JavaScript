export function dataHora(inputItem){
    const item = inputItem.value;

    if(item){
        const data = new Date();
        const hora = data.toLocaleTimeString("pt-br", {hour: "2-digit", minute: "2-digit"})
        const dataDia = data.toLocaleDateString("pt-br", {weekday:"long"})
        const dataCompleta = data.toLocaleDateString("pt-br", {day:"2-digit", month: "2-digit", year:"numeric"})
        console.log(`Salvo em ${dataDia}, (${dataCompleta}) ás ${hora}`)
    }
}