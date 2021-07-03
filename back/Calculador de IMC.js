// Faça um código que calcule o imc.
// Lembrando que a fórmula é Peso / Altura²

let p = 76
let a = 1.79

let imc = p / a ** 2

console.log(`O IMC é ${Math.trunc(imc)}`) // Math.trunc -> Elimina as casas decimais

