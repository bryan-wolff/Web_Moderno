function round(valor) {
    return `R$ ${valor.toFixed(2).toString().replace(".",",")}`

}

console.log(round(2.00000000))