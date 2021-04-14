let vetorPilha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionaVetor(vetorInicial, vetorAdicionar) {
    for(let i of vetorAdicionar) {
        console.log(i)
        vetorInicial.push(i)
    }
    console.log('Vetor adicionado: ' + vetorAdicionar)
    console.log('Vetor resultado: ' + vetorInicial)
}

adicionaVetor(vetorPilha, vetorAdiciona)
console.log("vetorPilha =", vetorPilha)
console.log("vetorAdiciona =", vetorAdiciona)