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
console.log(`${comanda.nome}, ${comanda.idade}`)
comanda.idade = 30
console.log(`${comanda.nome}, ${comanda.idade}`)
console.log(`${comanda.produto[0].nome}`)
console.log(`${comanda.produto[comanda.produto.length-1].valor}`)


