// Dia da Semana
// a) Sabendo que a semana possui 7 dias, sendo 1 para segunda e 7 para domingo, 
// faça um programa que verifica o número armazenado em uma variável e imprima o dia (por extenso) da semana correspondente.

// const diaDaSemana = 3;
// Para o exemplo acima, o programa deve imprimir a mensagem:

// Quarta Feira

// b) Crie uma verificação padrão para caso o número informado não esteja no intervalo de 1 a 7.

// const diaDaSemana = 10;
// Para o exemplo acima, o programa deve imprimir a mensagem:

// O dia da semana informado não é válido.

const diaDaSemana = 1;

if (diaDaSemana === 7) {
    console.log("O dia da semana é Domingo")
} else if (diaDaSemana === 1) {
    console.log("O dia da semana é Segunda")
} else if (diaDaSemana === 2) {
    console.log("O dia da semana é Terça")
} else if (diaDaSemana === 3) {
    console.log("O dia da semana é Quarta")
} else if (diaDaSemana === 4) {
    console.log("O dia da semana é Quinta")
} else if (diaDaSemana === 5) {
    console.log("O dia da semana é Sexta")
} else if (diaDaSemana === 6) {
    console.log("O dia da semana é Sábado")
} else {
    console.log("O dia informado não é válido")
}
    

