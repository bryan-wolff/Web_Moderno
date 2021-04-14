function observarIntervalo (vetor) {
    let qtdNumerosNoIntervalo = 0
    for (let i of vetor){
        if (i>=10 && i<=20) qtdNumerosNoIntervalo++
    }
    console.log(`Dentro do intervalo: ${qtdNumerosNoIntervalo} \nFora do intervalo: ${vetor.length - qtdNumerosNoIntervalo}`)
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]

observarIntervalo(vetor)