


function solucao(carta) {
    let opcoes = ["Q", "J", "K", "A", "2", "3"]
    let manilha = ""
    if (carta === "3"){
        manilha = opcoes[0]
    } else {
        for (let i = 0; opcoes.length > i; i++){
            if(carta === opcoes[i]){
                manilha = opcoes[i+1]
    }
    
    }
    }console.log(manilha)
}
solucao("3")