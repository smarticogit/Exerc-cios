
// Duas pessoas estão jogando par ou ímpar. 
// Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par e "ímpar" 
// caso a vencedora seja a pessoa que escolheu ímpar.

//seu código aqui

A resposta deste exemplo é par. Lembre-se de testar seu código para outras variações de entrada.
const jogada1 = 1;
const jogada2 = 10;

//seu código aqui
let rodada = jogada1 + jogada2

if (rodada % 2 === 0) {
    console.log("A jogada deu Par")
} else {
    console.log("A jogada deu ímpar")
}

// Outra opção;
// if ((jogada1 + jogada2) % 2 === 0) {
//     console.log("par");
//   } else {
//     console.log("ímpar");
//   }