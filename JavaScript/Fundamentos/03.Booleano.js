let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

// TODOS OS TRUES 
isAtivo = 1
console.log(!!isAtivo) // Negação da negação !
console.log(!!3)
console.log(!!-9)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!"texto")

// TODAS AS FALSES
console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar:')
console.log(!!('' || null || 0 || ' ' ))

let nome = ''
console.log(nome || 'Desconhecido')

let nome1 = 'be'
console.log(nome1 || 'Desconhecido')