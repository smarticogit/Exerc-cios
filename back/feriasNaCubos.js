const input = [2, 1, 2, 2]

function processData(input) {
    // const array = input.trim().split(" ")
    // let grupos = [];
    // for (let item of array){
    //     grupos.push(parseInt(item))
    // }
    let grupos = input
    let taxis = 0;
    let sozinhas = grupos[0];
    let vagas = 0;
    let resto;
    if(grupos[3] > 0){
        taxis += grupos[3];
    };
    if(grupos[2] > 0){
        taxis += grupos[2];
        vagas += grupos[2];
    };
    if(grupos[1] > 0){
        resto = grupos[1] % 2;
        if(resto === 0){
            taxis += grupos[1] / 2;
        } else {
            taxis += Math.ceil(grupos[1]/2);
            vagas += 2
        }
    };
    if (sozinhas < vagas) {
        console.log(taxis);
    } else {
        sozinhas = sozinhas - vagas;
        resto = 0;
        resto = sozinhas % 4;
        if(resto === 0){
            taxis += sozinhas / 4;
        } else {
            taxis += Math.ceil(sozinhas / 4);
        }
        console.log(taxis)
    };
};
processData(input)