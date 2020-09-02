// novo recurso
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1001
    }
}

const {nome,idade} = pessoa // tirar de dentro da estrutura 
console.log(nome,idade)

const { nome: n,idade: i} = pessoa 
console.log(n,i)

const { sobrenome, bemHumorada = true } = pessoa // UF
console.log(sobrenome,bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro,numero,cep)