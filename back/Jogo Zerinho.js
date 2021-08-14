const jogadores = [
    {
      "nome": "Herman",
      "jogada": 0
    },
    {
      "nome": "Rhodes",
      "jogada": 0
    },
    {
      "nome": "Beach",
      "jogada": 0
    },
    {
      "nome": "Laurel",
      "jogada": 0
    },
    {
      "nome": "Beatrice",
      "jogada": 1
    },
    {
      "nome": "Alison",
      "jogada": 0
    },
    {
      "nome": "Saundra",
      "jogada": 0
    },
    {
      "nome": "Klein",
      "jogada": 0
    }
];

function solucao(jogadores) {
    let um = 0;
    let zero = 0;
    for (let jogador of jogadores){
        if (jogador.jogada === 0){
            zero += 1;
        } else {
            um += 1;
        }
    }
    if (um === 1) {
        for(let jogador of jogadores) {
            if (jogador.jogada === 1) {
            console.log(jogador.nome);
        }
    }
    } else if (zero === 1) {
        for(let jogador of jogadores){
            if (jogador.jogada === 0) {
            console.log(jogador.nome);
        }
    }
    } else {
        console.log("Ninguém Ganhou!");
    }
}
solucao(jogadores); 
