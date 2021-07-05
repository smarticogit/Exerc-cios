
// Pedra, papel ou tesoura
// Duas pessoas estão jogando pedra, papel ou tesoura. 
// Você deve imprimir o nome da jogada vencedora, ou "empate", em caso de empate.

const jogada1 = "tesoura"
const jogada2 = "tesoura"

//seu código aqui

if (jogada1 === "pedra" && jogada2 ==="pedra") {
    console.log("Empate")

} else if (jogada1 === "pedra" && jogada2 ==="papel") {
    console.log("Vitória do jogador 2")

} else if (jogada1 === "pedra" && jogada2 ==="tesoura") {
    console.log("Vitória do jogador 1")

} else if (jogada1 === "papel" && jogada2 ==="pedra") {
    console.log("Vitória do jogador 1")

} else if (jogada1 === "papel" && jogada2 ==="papel") {
    console.log("Empate")

} else if (jogada1 === "papel" && jogada2 ==="tesoura") {
    console.log("Vitória do jogador 2")

} else if (jogada1 === "tesoura" && jogada2 ==="pedra") {
    console.log("Vitória do jogador 2")

} else if (jogada1 === "tesoura" && jogada2 ==="papel") {
    console.log("Vitória do jogador 1")

} else if (jogada1 === "tesoura" && jogada2 ==="tesoura") {
    console.log("Empate")

} 

// Opção Simplificada;

// if (jogada1 === jogada2) {
//     console.log("empate");
// } else if (
//     (jogada1 === "pedra" && jogada2 === "tesoura") ||
//     (jogada2 === "pedra" && jogada1 === "tesoura") ) {
//     console.log("pedra");
// } else if (
//     (jogada1 === "papel" && jogada2 === "pedra") ||
//     (jogada2 === "papel" && jogada1 === "pedra") ) {
//     console.log("papel");
// } else {
//     console.log("tesoura");
// }
