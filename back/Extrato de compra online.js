// Extrato de Compra Online
// a) Dado o valor de um produto, a quantidade de parcelas escolhida e quanto já foi pago, 
// Faça um programa que ajude a Fernanda a saber o valor restante para pagamento e quantas parcelas faltam pagar.

//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let saldo = (valorDoProduto / 100) - valorPago
let parcelaspagas = valorPago / (valorDoProduto / quantidadeDoParcelamento / 100) 
let parecelasresantes = quantidadeDoParcelamento - parcelaspagas


console.log(`Restam ${parecelasresantes} parcelas de R$${saldo/parecelasresantes} reais`)
