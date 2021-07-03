// Soma dos ângulos internos de um polígono

// Faça um programa que, a partir do número de lados de um polígono, 
// imprima na tela a soma dos seus ângulos internos, conforme a fórmula abaixo:
//  S = (n-2) * 180
// Em seguida, calcule quanto vale cada um desses ângulos, caso eles sejam todos iguais, como no exemplo abaixo:
// (poligono com 6 pontos de 120º casa totalizando = 720º)


let n = 6
let s = (n-2) * 180
let a = s / 6
console.log(`Cada angulo é ${a} e a soma dos angulos é ${s}`)