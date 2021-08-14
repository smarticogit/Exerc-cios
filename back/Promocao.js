const precos = [100, 100, 300, 50]

function solucao (precos) {
    let total = 0;
    let menorPreco;
    if (precos.length > 2){
        menorPreco = precos[0]
        for(let i = 1; precos.length > i ; i++){
            if(precos[i] >= menorPreco){
                total += precos[i];
            } else {
                total += menorPreco;
                menorPreco = precos[i];
            }
        }
        let desconto = menorPreco - (menorPreco * 0.50);
        console.log(total + desconto);
    } else {
        for (let valor of precos){
            total += valor;
        }
        console.log(total);
    }
};

solucao(precos)
