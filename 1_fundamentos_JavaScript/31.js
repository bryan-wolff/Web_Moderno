function numerosNegativos (vetor) {
    let qtdnegativo = 0
    for (let i of vetor) {
        if (i<0) qtdnegativo++
    }
    return qtdnegativo
}



vetor =  [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]

console.log(numerosNegativos(vetor))