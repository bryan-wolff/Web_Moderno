function Bhaskara(a,b,c) {
    let delta = b**2 - 4*a*c
    let raizes = []
    if (delta>=0){
        raizes.push(((-b + Math.sqrt(delta))/(2*a)))
        raizes.push(((-b - Math.sqrt(delta))/(2*a)))
        return raizes
    } else {
        return "Delta é Negativo"
    }
}

console.log(Bhaskara(1,-1,-6))