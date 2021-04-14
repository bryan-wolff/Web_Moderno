let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function avaliaPontuacoes(stringPontos){
    let pontos = stringPontos.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 1; i<pontos.length;i++){
        if (pontos[i]>maiorPontuacao) {
            maiorPontuacao = pontos[i]
            qtdQuebraDeRecords++
        } 
        else if (pontos[i]<menorPontuacao){
            menorPontuacao = pontos[i]
            piorJogo = i + 1
        }
    }
    return [qtdQuebraDeRecords, piorJogo]

}

console.log(avaliaPontuacoes(stringPontuacoes))
