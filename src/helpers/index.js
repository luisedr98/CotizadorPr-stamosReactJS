const formatearDinero = (valor) => {
    const formater = new Intl.NumberFormat('en-US', {
        style : "currency",
        currency : "USD"
    })

    return formater.format(valor);
}

const calcularTotalPagar = (cantidad, plazo) => {
    let total = 0;

    //* si mayor cantidad menor interes
    if(cantidad < 5000){
        total = cantidad * 1.5;
    }else if(cantidad >= 5000 && cantidad < 10000){
        total = cantidad * 1.4;
    }else if(cantidad >= 10000 && cantidad < 150000){
        total = cantidad * 1.3;
    }else{
        total = cantidad * 1.2;
    }

    //* a mayor plazo - mayor interes
    if(plazo===6){
        total *= 1.1;
    }else if(plazo===12){
        total *= 1.2;
    }else{
        total *= 1.3;
    }

    return total;
}

export {
    formatearDinero,
    calcularTotalPagar,
}