let a =3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'
// console.log(this.a)
// console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports)

// Criando uma variavel maluca; sem VAR  e LET
abc = 3 // Ñ FAZER ISSO
console.log(global.abc)
