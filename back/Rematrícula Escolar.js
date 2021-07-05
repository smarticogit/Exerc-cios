// Rematrícula Escolar
// Para fazer a rematrícula na escola o aluno precisa ser maior de idade ou estar acompanhado de um responsável. 
// Sendo assim...

// a) Faça um programa que verifique se o aluno é maior de idade e realize a rematrícula, caso não seja, 
// só será possível acompanhado de um responsável.

//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = true;

if (idadeDoAluno >= 18 || possuiResponsavel) {
    console.log("Rematrícula realizada com sucesso")
} else {
    console.log("Não é possível realizar a matrícula")
}