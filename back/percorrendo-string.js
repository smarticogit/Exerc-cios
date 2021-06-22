// Crie um código pra imprimir quantas letras 'a' tem na palavra"!

let palavra = "amarelando"

let contador = 0
for (let letra of palavra) {
    if(letra === "a")
    contador++
}
if (contador === 0) {
    console.log("A palavra não possui letra 'a' ")
} else if( contador === 1) {
    console.log("A palavra possui 1 letra 'a' ")
} else {
    console.log(`A palavra possui ${contador} letras 'a' `)
}
