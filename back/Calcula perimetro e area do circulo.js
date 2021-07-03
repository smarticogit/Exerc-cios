// Calculo do perímetro e área de um círculo
// Faça um programa que, a partir do raio de um círculo, calcula o comprimento (C) e a área (Ao) deste círculo.
// OBS: Nós sabemos que não falamos sobre o número PI nas aulas. 
// O objetivo aqui é que vocês aprendam a pesquisar esse ponto específico também. 
// Boa sorte, qualquer coisa é só pedir socorro pra gente! =)
// C = 2.PI.r
// Ao = PI.r²

let r = 10
let c = 2 * Math.PI * r 
let area = Math.PI * Math.pow(r, 2) //Math.PI * r ** 2;
console.log(c.toPrecision(3))
console.log(area.toPrecision(3))