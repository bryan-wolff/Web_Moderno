function jurosCompostos(capital,juros,tempo){
    let montante = capital*((1+juros)**tempo);
    return montante
}


function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return jurosCompostos(valor,0.05,atraso).toFixed(2)
    } else {
        return 'Mês inválido.'
    }

}
console.log(calcularValor(4, 100))