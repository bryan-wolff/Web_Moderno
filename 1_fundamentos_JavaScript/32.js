function mediaVetor (vetor) {
    let soma = 0
    for (i of vetor) soma += i
    return soma/vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))