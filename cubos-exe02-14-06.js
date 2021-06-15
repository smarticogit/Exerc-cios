
// a vista 10% desconto
// de 2 a 6x sem juros
// de 7 a 12x 0,01 ao mês
// m = c.(1+i)n

let valor = 10000;
let parcelas = 12;

if (parcelas === 1) {
    let valoravista = (valor - valor * 0.1) /100;
    console.log(`O Valor com 10% de desconto por pagar a vista é de ${valoravista} reais.`)

} else if (parcelas > 1 && parcelas < 7) {
    let valoraprazo = valor / parcelas / 100
    console.log(`O Valor parcelado fica ${parcelas}x de ${valoraprazo.toFixed(2)} totalizando ${parcelas*valoraprazo} reais`)

} else if (parcelas <= 12) {
    let comjuros = valor * Math.pow((1+0.01), parcelas) /100
    console.log(`O Valor parcelado com juros fica ${parcelas}x de ${(comjuros/parcelas).toFixed(2)} totalizando ${comjuros.toFixed(2)}`)

} else {
    console.log("Só parcelamos até em 12x")
}
