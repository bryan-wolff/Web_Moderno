function calculadora() {
    switch(arguments[1]) {
        case "+":
            return arguments[0]+arguments[2]
        case "-":
            return arguments[0]-arguments[2]
        case "*":
            return arguments[0]*arguments[2]
        case "/":
            return arguments[0]/arguments[2]
        default:
            return 'Operação inválida'
    }
}
console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));