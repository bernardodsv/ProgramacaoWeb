let valor // ñ inicializar
console.log(valor) //undefined
// console.log(valor2) //is not defined

valor = null // Null = ñ tem valor, e nenhum endereço de memória.
console.log(valor) // Null

// console.log(valor.toString()) // Cannot read property 'toString' of null, você ñ pode ler.

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto.preco)
// delete produto.preco. Forma correta de usar o undifined sem ser explicito.
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // !! modificando para booleano.
console.log(produto)
