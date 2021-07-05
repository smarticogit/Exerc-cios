// Compra com Desconto
// A Loja do Juninho está com uma super promoção. 
// E na compra de qualquer produto você ganha desconto conforme a forma de pagamento seguindo a tabela seguinte.
// Forma de Pagamento	Desconto
// credito	5%
// cheque	3%
// debito ou dinheiro	10%
// a) Faça um programa que verifica o tipo de desconto, calcule o valor do produto com o desconto e imprima o resultado.
// Lembre-se de cuidar para que o valor monetário tenha sempre duas casas decimais, apenas.
// //tipo de pagamento (dinheiro, credito, debito, cheque).
// const tipoDePagamento = "credito";
// //valor da mercadoria (centavos)
// const valorDoProduto = 13000;
// Para o exemplo acima, o programa deve imprimir a mensagem:
// Valor a ser pago: R$123.50

//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 10000;

if (tipoDePagamento === "credito") {
        let pcredito = (valorDoProduto - (valorDoProduto * 0.05)) /100
        console.log(`O valor a ser pago é R$${pcredito.toFixed(2)} reais`)

} else if (tipoDePagamento === "cheque") {
        let pcheque = (valorDoProduto - (valorDoProduto * 0.03)) /100
        console.log(`O valor a ser pago é R$${pcheque.toFixed(2)} reais`)

} else if  (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
        let pdindeb = (valorDoProduto - (valorDoProduto * 0.10)) /100
        onsole.log(`O valor a ser pago é R$${pdindeb.toFixed(2)} reais`)
}