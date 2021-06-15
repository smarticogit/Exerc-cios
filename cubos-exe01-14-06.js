let valor = 10000;
let parcelas = 1;

if (parcelas === 1) {
    let valoravista = (valor - valor * 0.1) /100;
    console.log(`O Valor com 10% de desconto por pagar a vista é de${valoravista} reais.`)
} else {
    let valoraprazo = valor / parcelas / 100
    console.log(`O Valor parcelado fica ${parcelas}x de ${valoraprazo.toFixed(2)}`)
}