// Delta
// Na Famigerada fórmula de báskhara, que serve para calcular as raízes de uma equação de segundo grau, 
// o primeiro passo é calcular o valor de delta, a partir dos coeficientes A, B e C, conforme a fórmula abaixo.

// delta = b2 - 4ac

// Faça um programa que calcula o valor de delta a partir desses coeficientes.


let delta
let a = 7
let b = 3
let c = 4

delta = Math.pow(b, 2)
delta = delta - (4*a*c)   // Outra opção -->  const delta = b ** 2 - 4 * a * c;
console.log(`O valor de Delta é --> ${delta}`)
