let lista = [12 ,16, 17]

function solucao(lista) {
    let maiores = [];
    let menor = 0
    for (let idade of lista){
        if(idade >= 18){
            maiores.push(idade);
        }
    }
    menor = maiores[0];
    for(let i of maiores){
        if (i < menor){
            menor = i;
        }
    }
    if(maiores < 1){
        console.log("CRESCA E APARECA");
    } else {
        console.log(menor);
    }
};
solucao(lista)
