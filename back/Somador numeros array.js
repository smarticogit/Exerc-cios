// Faça um programa que cria um array de números.

// Depois calcule e imprima no console a soma de todos os números desse array.

// Exemplo: Para o array numeros abaixo

let  numero = [];

numero.push(2);
numero.push(3);
numero.push(4);
numero.push(6);

let somador = 0

for (let i=0; i < numero.length; i++ ) {
    somador += numero[i]
}
console.log(somador)