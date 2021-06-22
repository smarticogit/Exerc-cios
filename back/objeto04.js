const comanda = {
    nome: "Rita",
    idade: 26,
    produto: [
        {
            nome:"cerveja",
            valor: 1000,
            qtd: 05
        },
        {
            nome:"batata-frita",
            valor: 1500,
            qtd: 02
        },
        {
            nome:"queijo-coalho",
            valor: 700,
            qtd: 02
        }
    ]
};
let total = 0
for (let item of comanda.produto) {
    total += (item.qtd * item.valor)
}
console.log(`${comanda.nome}, o valor a ser pago é R$ ${total} reais`);

