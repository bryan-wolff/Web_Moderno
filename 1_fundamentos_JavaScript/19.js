function calcularVenda(codigoProduto, qtd) {
    switch (codigoProduto) {
        case 100:
            return "R$" + (qtd*3).toFixed(2)
        case 200:
            return "R$" + (qtd * 4).toFixed(2)
        case 300:
            return "R$" + (qtd * 5.5).toFixed(2)
        case 400:
            return "R$" + (qtd * 7.5).toFixed(2)
        case 500:
            return "R$" + (qtd * 3.5).toFixed(2)
        case 600:
            return "R$" + (qtd * 2.8).toFixed(2)
        default:
            return 'Produto não existente.'
    }
}

console.log(calcularVenda(100, 2))
console.log(calcularVenda(200, 2))
console.log(calcularVenda(300, 2))
console.log(calcularVenda(400, 2))
console.log(calcularVenda(500, 2))
console.log(calcularVenda(600, 2))
console.log(calcularVenda(700, 2))
