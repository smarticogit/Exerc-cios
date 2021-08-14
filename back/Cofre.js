let input = [ 'cubos', 'fsfcuggbos' ]

function processData(input) {
    // const array = input.trim().split("\n")
    array = input;
    let lixo
    let senha = array[0].split("");
    let digitado = array[1].split("");
    while (digitado.length > 0){
        if (senha[0] === digitado[0]){
            senha.shift();
            digitado.shift();
        } else {
            digitado.shift();
        }
    }
    if(senha.length === 0){
        console.log("SIM")
    } else {
        console.log("NAO")
    }
};
processData(input);