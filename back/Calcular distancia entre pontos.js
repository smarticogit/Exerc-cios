// Calcular a distância entre dois pontos
// Calcule a distância entre dois pontos utilizando a seguinte fórmula, considerando que (x1, y1) e (x2, y2) sejam dois pontos em um plano:

// d = \/ {(x2 - x1)² + (y2 - y1)²}  (d= Raiz quadradra de (x2 -x1)² + (y2-y1)²)

// O seu programa deverá imprimir na tela o resultado d

// Exemplos:
// x1	x2	y1	y2
// 1	1	1	4

// Valor esperado ->  d = 3


let d = Math.pow(1-1, 2) + Math.pow(4-1, 2)
d = Math.sqrt(d)

console.log(`A distância é ${d}`)

