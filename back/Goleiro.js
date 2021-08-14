let numeros = [1, 1, 1, 2];

function solucao (numeros) {
    let soma = 0
    let posicao
    for (let i of numeros){
        soma += i
    }
    posicao = soma % numeros.length
    if (posicao === 0){
        posicao = (numeros.length);
    }
    console.log(posicao)

}
solucao(numeros)

