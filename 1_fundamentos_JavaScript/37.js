function pA(n, a1, r){
    termos = []
    for (let i = 0; i < n; i++){
        termos.push(a1 + r*i)
    }
    let soma = (n * (a1 + (a1 + ((n-1)*r))))/2
    console.log(`Termos da PA: ${termos}`)
    console.log(`Soma = ${soma}`)
}

function pG(n, a1, r){
    termos = []
    for (let i = 0; i < n; i++){
        termos.push(a1*(r**i))
    }
    let soma = (a1*((r**n)-1))/(r-1)
    console.log(`Termos da PG: ${termos}`)
    console.log(`Soma = ${soma}`)
}

pA(10, 10, 15)
console.log('----------------')
pG(10, 5, 3)