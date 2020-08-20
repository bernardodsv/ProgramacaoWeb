const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) // 1.0 é considerado inteiro.(Integer)
console.log(Number.isInteger(peso2))

const avaliacao1 = 0.22
const avaliacao2 = 8.33333

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

// FUNÇÕES DENTRO DE NUMBER
console.log(media.toFixed(2)) 
console.log(media.toString(2)) // Convertendo para binário.

console.log(typeof media)


///         ALGUNS CUIDADOS EM NUMBER        //

console.log( 7 / 0)
console.log("10" / 2)
console.log("show!" / 2)
console.log(0.1 + 0.7)
// console.log(10.toString())  ERRO
console.log((10.3680).toFixed(2))

console.log("3" + 10)