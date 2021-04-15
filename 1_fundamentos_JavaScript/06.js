function jurosSimples(capital,juros,tempo){
    let montante = capital*(1+(juros*tempo));
    return montante
}

function jurosCompostos(capital,juros,tempo){
    let montante = capital*((1+juros)**tempo);
    return montante
    
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));

