const valores = [8.8,9.5,7.4,5.5]
console.log(valores[0],valores[3])

valores [4] = 10
console.log(valores)

//length para acessar quantos elementos há;
console.log(valores.length)

valores.push({id: 3}, false, null, ' teste ')
console.log(valores)

console.log(valores.pop())  // Excluir o ultimo;
// delete valores[0]
console.log(valores)

console.log(typeof valores) // OBJECT