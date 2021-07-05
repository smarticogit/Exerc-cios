// Valor da parcela do Sucesso Compartilhado
// Na Cubos Academy alguns estudantes podem fazer o Curso de Programação do Zero 
// e só começar a pagar após finalizado o curso quando (e se) tiverem obtido renda acima de R$ 2.000,00.
//  Nesse caso o valor da parcela a ser paga é de 18% do valor da renda mensal da pessoal.
// Após 60 meses, independente de ter quitado ou não o valor total do curso (de R$ 18.000,00) a pessoa não deve nada, ou seja, o valor da parcela é zero.
// a) Faça um programa que calcula o valor da parcela a ser paga pelo aluno. Imprima uma mensagem bonita na tela, com o valor em reais.

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 26;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;

if (rendaMensalEmCentavos >= 200000 && mesesDecorridos <= 60) {
    let parcela = (rendaMensalEmCentavos * 0.18) /100
    console.log(`O valor da parcela é R$${parcela} reais`)
} else if (rendaMensalEmCentavos < 200000){
    console.log("O valor da parcela desse mês é R$ 0 reais, pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
} else {
    console.log("O valor da parcela desse mês é R$ 0 reais, pois o tempo de 60 meses para pagamento já acabou.")
}
