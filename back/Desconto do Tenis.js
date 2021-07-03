// Desconto do tênis
// Você deseja comprar um tênis novo, porém, está com o dinheiro do mês contado e te sobrará somente R$ 80,00 para comprá-lo.

// O tênis custa R$ 129,99 porém um amigo seu trabalha na loja e consegue te dar um cupom de desconto, a única coisa que ele precisa é saber quanto por cento de desconto você necessita.

// Crie um programa para calcular a porcentagem necessária de desconto para você conseguir comprar o tênis, utilizando a regra de três.

// Cálculo da regra de três
// Dado 3 números, a, b e c, calculamos d utilizando a regra de três.


let precoTenis = 12999
let meuDinheiro = 8000
let desconto = precoTenis - meuDinheiro
let cupom = 100 * desconto / precoTenis

console.log(`O Desconto é de ${Math.round(cupom)}%`);