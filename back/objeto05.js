function apresentar(pessoa) {
    if(pessoa.idade > 65) {
        console.log(`Olá, meu nome é ${pessoa.nome}, sou um idoso de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)

    } else if(pessoa.idade > 25 && pessoa.idade < 66 ) {
        console.log(`Olá, meu nome é ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)

    } else {
        console.log(`Olá, meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
    }
}

const pessoa = {
    nome: "Joâo",
    idade: 68,
    profissao: "DEV Jr",
    altura: 1.80
};

apresentar(pessoa)
