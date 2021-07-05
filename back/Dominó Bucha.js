// Modifique o código anterior para que, quando a pedra for uma bucha, digamos qual o "nome" da bucha.
// Para quem não constuma jogar dominó, segue um glossário:

// Bucha de Nome
// 0	Branco
// 1	Ás
// 2	Duque
// 3	Terno
// 4	Quadra
// 5	Quina
// 6	Sena

const ladoA = 2;
const ladoB = 2;

//seu código aqui

if (ladoA !== ladoB) {
    console.log("Não é uma bucha")
} else if (ladoA === 0) {
    console.log("Bucha de Branco")
} else if (ladoA === 1) {
    console.log("Bucha de Ás")
} else if (ladoA === 2) {
    console.log("Bucha de Duque")
} else if (ladoA === 3) {
    console.log("Bucha de Terno")
} else if (ladoA === 4) {
    console.log("Bucha de Quadra")
} else if (ladoA === 5) {
    console.log("Bucha de Quina")
} else if (ladoA === 6) {
    console.log("Bucha de Sena")
} else if (ladoA > 6 || ladoB > 6) {
    console.log("Número inválido para dominó")
}