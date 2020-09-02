// Trabalho de freelancer :
function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV30 = trabalho1 != trabalho2 // Ou exclusivo
    const manterSaudavel = !comprarSorvete

    return{ comprarSorvete, comprarTV50, comprarTV30, manterSaudavel}
}
console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))