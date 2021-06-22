const pessoa = {
    nome: "Joâo",
    idade: 60,
    profissao: "DEV Jr",
    altura: 1.80
};

function eMaior(idade) {
    if(idade >65) {
        return "idoso"
    } else if(pessoa.idade > 25 && pessoa.idade < 66 ) {
        return "adulto"
    } else {
        return "jovem"
    }
}

function apresentar(pessoa) {
    console.log(`Olá, meu nome é ${pessoa.nome}, sou um ${eMaior(pessoa.idade)} de ${pessoa.idade} anos, tenho ${pessoa.altura}m de altura e sou ${pessoa.profissao}`)
}

apresentar(pessoa)
