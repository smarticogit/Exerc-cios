// Área total de um cilindro.
// Um cilindro tem duas bases e uma lateral. Veja como fica um cilindro planificado.
// Portanto, para calcular a área total de um cilindro, é necessário somar a área de cada uma das suas duas bases, 
// com a sua área lateral. A fórmula da área total é a seguinte:
// at = 2ab + al
// ab = 2 * PI * r²
// al = 2 * PI * r*h
// at = 2 * PI * r (r+h)

// Faça um programa que calcula a área total de um cilindro a partir do raio da sua base e da sua altura.

let h = 3
let r = 2
let a = 2 * Math.PI * r * (r + h)
console.log(`A área do total do cilindro é ${a.toFixed(2)} cm²`)

