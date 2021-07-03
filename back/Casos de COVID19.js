// Casos de COVID-19
// Suponha que você está trabalhando no Ministério da Saúde e está trabalhando num simulador de casos de COVID-19. 
// Seu trabalho é fazer um programa que calcula qual será o total de pessoas infectadas a partir de 3 variáveis.
// Po = a população incial de pessoas infectadas
// X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
// t = tempo percorrido

// Ou seja, se:

// Po = 1000
// x = 4
// t = 100

// O seu sistema ira calcular quantas pessoas estarão infectadas após 100 dias, 
// dado que inicialmente havia 1000 pessoas infectadas, cada uma delas transmitindo para outras 4 pessoas.

// Para isso, a fórmula é a seguinte:

// P = Po * x t/7    (Po * x na potencia de t/7)

// P será a quantidade de pessoas infectadas após decorrido o tempo t

let po = 1000
let x = 4
let t = 100
let p = po * Math.pow(x, t/7)        // outra opção ->   p = po * x ** (t/7);
console.log(p)
