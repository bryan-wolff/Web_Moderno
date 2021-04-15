function arredondarNota(nota) {
    if (nota%5>2) return nota + (5 - nota%5)
    else return nota
}

function classificarAluno(nota){
    if (arredondarNota(nota)<40) console.log(`Reprovado com nota ${arredondarNota(nota)}`);
    else console.log(`Aprovado com nota ${arredondarNota(nota)}`);
}

classificarAluno(100)
classificarAluno(30)
classificarAluno(38)
classificarAluno(88)
classificarAluno(61)