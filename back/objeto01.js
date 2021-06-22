const pessoa = {
    nome: "josé",
    idade: 30,
    altura: 1.73,
    cnh: true,
    apelido: ["Jr", "Juninho"]
};

let textocnh = ""

if (pessoa.cnh) {
    textocnh = "possui CNH"
} else {
    textocnh = "não possui CNH"
}

console.log(`${pessoa["nome"]} tem ${pessoa["idade"]} anos, ${pessoa.altura}m de altura, ${textocnh} e os seguintes apelidos:`);
for (let apelido of pessoa.apelido) {
    console.log(`-${apelido}`)
}