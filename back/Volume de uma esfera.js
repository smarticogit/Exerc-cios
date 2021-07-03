// Volume de uma esfera
// Para calcular o volume de uma esfera, utilizamos a seguinte fórmula:
// Volume = 4/3 * PI * r3
// Faça um programa que calcula o volume de uma esfera a partir de seu DIÂMETRO.
// Lembre-se que o DIÂMETRO de uma esfera é sempre o dobro do raio.

// Imprima uma mensagem no seguinte formato com a sua resposta:

// "O volume de uma esfera de raio 3 é 36 PI"


//Volume = 4/3 * PI * r³
const d = 6;
const r = d / 2;

const v = 4 / 3 * r ** 3;

console.log(`O volume da esfera é ${v} PI ou ${Math.round(v * Math.PI)} cm³`);