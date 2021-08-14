let texto = "Cuidado, pois usuarios as vezes  deixam espacos  vazios no fim  do texto  sem querer"

let newtexto = texto.split(" ");
let palavras = []
newtexto.filter((x) => {
    if( x.length > 0){
        palavras.push(x)
    }
})
console.log(palavras.length)