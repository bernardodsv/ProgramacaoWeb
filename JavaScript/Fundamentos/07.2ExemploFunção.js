// Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3) // 5
imprimirSoma(2) // Not a number
imprimirSoma(2,10,8,5,7,4) // 12

// Função com retorno

function soma(a,b=1){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))