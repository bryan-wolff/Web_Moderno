function sacarDinheiro(valorSaque) {
    let saque = ""

    // notas de 100
    let nota_100 = Math.floor((valorSaque/100))
    if (nota_100!=0) {
        saque += `${nota_100} nota(s) de R$ 100. `
    }
    let res_100 = valorSaque % 100
    
    // notas de 50
    let nota_50 = Math.floor(res_100/50)
    if (nota_50!=0) {
        saque += `${nota_50} nota(s) de R$ 50. `
    }
    let res_50 = res_100 % 50

    // notas de 10
    let nota_10 = Math.floor(res_50/10)
    if (nota_10!=0) {
        saque += `${nota_10} nota(s) de R$ 10. `
    }
    let res_10 = res_50 % 10

    // notas de 5
    let nota_5 = Math.floor(res_10 / 5)
    if (nota_5!=0) {
        saque += `${nota_5} nota(s) de R$ 5. `
        }
    let res_5 = res_10 % 5

    // notas de 1
    let nota_1 = res_5
    if (nota_1!=0) {
        saque += `${nota_1} nota(s) de R$ 1. `
        }
    return saque
}

console.log(sacarDinheiro(53));