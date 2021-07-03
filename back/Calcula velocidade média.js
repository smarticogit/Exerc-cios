// Velocidade média
// Suponha que você está trabalhando no desenvolvimento de um app para smart watch que calcula 
// a velocidade média de uma pessoa que está usando o dispositivo numa corrida.
// Calcule a velocidade média dessa pessoa a partir da distância percorrida pela pessoa e pelo 
// tempo que passou, utilizando a fórmula abaixo.

// Velocidade = Distancia Percorrida / tempo 

// Contudo, as informações de distância que você recebe estão em metros e o tempo em segundos. 
// Ou seja, ao aplicar esta fórmula, a velocidade estará em metros por segundo. O ideal é que o seu usuário veja a velocidade em km/h.
// Para isso, após fazer o calcula da velocidade, você deve tranformar a unidade de metros por segundo para km/h. 
// Para isso, basta multiplicar o resultado por 3,6.



let distPercorrida
let tempo
let velocidade = distPercorrida / tempo
velocidade = velocidade * 3,6
console.log(`A velocidade média é ${velocidade} Km/h`)
