const notas = [6.7,7.4,8.1,7.7,5]

for (let i in notas) {
    console.log(i,notas[i])
}

const pessoa = {
    nome:'Be',
    idade: 54,
    peso: 85,
}

for (let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// console.log(atributo)