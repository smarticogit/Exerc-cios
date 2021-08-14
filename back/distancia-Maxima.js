
const input = [3
    0 0
    0 3
    4 0]

    
// [ { x: 0, y: 0 }, { x: 0, y: 3 }, { x: 4, y: 0 } ];

function processData(input) {
    const linhas = input.trim().split('\n');
    const n = parseFloat(linhas[0],10);
    
    const coordenadas = [];
    for (let i = 0; i < linhas.length; i++) {
        const coord = linhas[i].split(" ");
        coordenadas.push({
            x: parseFloat(coord[0],10),
            y: parseFloat(coord[1],10)
        })
    }
    let maior = 0
    let resultado = 0
    for (let item of coordenadas) {
        for(let item2 of coordenadas){
            resultado = ((item2.x-item.x)**2 + (item2.y-item.y)**2 ) ** 0.5 
            if(resultado > maior){
                maior = resultado;
            }
        }
    }
    console.log(maior);
}
processData(input)
