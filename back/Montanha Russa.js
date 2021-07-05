// Num parque de diversões existe uma Montanha Russa Muito Assustadora. 
// Por isso, nesta montanha russa não são permitidas pessoas:
// Menores de 12 anos
// Maiores de 65 anos
// Que possuam qualquer patologia cardíaca
// Menores de 150cm de altura
// Para as pessoas que podem brincar na montanha russa, a tabela de preços é a seguinte:

// 10 reais caso a pessoa seja estudante ou menor de 18 anos (meia entrada)
// 20 reias, caso contrário
// Se papel é imprimir na tela:

// ACESSO NEGADO caso a pessoa não possa brincar
// 10 reais caso esse seja o valor que a pessoa deve pagar para brincar
// 20 reais caso esse seja o valor que a pessoa deve pagar para brincar

const idade = 15;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO")
} else if (ehEstudante || idade <18) {
    console.log("O valor é 10 reais")
} else {
    console.log("O valor é 20 reais")
}

