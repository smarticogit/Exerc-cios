// Num jogo de dominó toda pedra tem dois números. 
// Quando uma pedra tem o mesmo número dos dois lados, dizemos que essa pedra é uma bucha. 
// Faça um programa que imprima "SIM" caso a pedra seja uma bucha e "NÃO" caso contrário.
// Neste exemplo a resposta correta é *SIM. Lembre-se de testar seu código para outras variações de entrada.

const ladoA = 4;
const ladoB = 4;

//seu código aqui

if (ladoA === ladoB) {
    console.log("Sim é uma bucha")
} else {
    console.log("Não é uma bucha")
}