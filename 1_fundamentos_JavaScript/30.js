function maiorMenor (vetor) {
    vetor.sort((a,b) => a < b ? 1 : -1)
    return [vetor[0], vetor[vetor.length - 1]]
}
vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maiorMenor(vetor))