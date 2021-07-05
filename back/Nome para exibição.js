// Nome para exibição
// Uma pessoa pode ter nome, sobrenome e/ou apelido. 
// Escreva um código que imprima no console apenas o apelido (se o apelido estiver preenchido), 
// ou primeiro nome + sobrenome (se o sobrenome estiver preenchido), ou apenas o primeiro nome (que no nosso programa é obrigatório e deverá sempre estar preenchido).
// Importante: Neste exercício, não deveremos utilizar nenhum operador de comparação, nem de igualdade e nem de identidade. 
// Para este exercício deveremos utilizar apenas o conceito de truthiness.

// Exemplo primeiro nome:
// const primeiroNome = "Mario";
// const sobrenome = "";
// const apelido = "";

// Para o exemplo acima, deverá ser impresso no console apenas:
// Mario
// Teste também para outros casos de uso, como por exemplo quando o apelido estiver preenchido, 
// que deverá ser impresso apenas o apelido, e também teste quando sobrenome estiver preenchido que deverá imprimir no console primeiro nome + sobrenome.

const primeiroNome = "Mario";
const sobrenome = "";
const apelido = "";

if (apelido) {
    console.log(apelido)
} else if (sobrenome && primeiroNome) {
    console.log(`${primeiroNome} ${sobrenome}`)
} else if (primeiroNome) {
    console.log(primeiroNome)
} else {
    console.log("Pelo menos o nome é obrigatório")
}
