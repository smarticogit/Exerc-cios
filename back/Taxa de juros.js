// Taxa de Juros
// Faça um programa que calcula a taxa de juros que foi operada sobre um financiamento a partir 
// do montante total que foi pago, do capital inicial que foi obtido como empréstimo e do tempo dexorrido do financiamento.

// A fórmula (e um exemplo) que calcula essa taxa segue abaixo:

//i = (m/c) 1/n -1
// Fórmula de juros compostos
// Imprima a taxa de juros com uma mensagem seguindo o formato a seguir (substituindo C, i, M e n por números):
// "O seu financiamento de C reais teve uma taxa de juros de i%, pois após n meses você teve que pagar M reais."

let m = 90000
let c = 60000
let n = 24
let i = (m/c)
i = Math.pow(i, 1/n)-1
console.log(`O seu financiamento de ${c} reais teve uma taxa de juros de ${(i*100).toPrecision(4)}%, pois após ${n} meses você teve que pagar ${m} reais.`)
