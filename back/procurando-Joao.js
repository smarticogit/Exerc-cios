let nomes = ["Claudio", "Ana", "Rui", "Joao", "Andre"]

let encontrado = false
for (let i = 0; i < nomes.length; i++) {
    let item = nomes[i]

    if(item === "Joao") {
        console.log(`João está no índice ${i}`)
        encontrado = true
        break
    }

}
if (!encontrado) {
    console.log("João não está na lista")
}