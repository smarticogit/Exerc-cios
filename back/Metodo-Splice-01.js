// Exemplos com Método Splice;
const array = ["a", "b", "c", "d", "h", "i", "j"];

// Inserindo 3 itens a partir do índice 4. Resultado => ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
array.splice(4, 0, "e", "f", "g");   

// Simulando o método Push;
array.splice(array.length, 0, "k");  //Inserindo a letra K no final do Array;

//Simulando o método Pop;
array.splice(0, 0, "Alfabeto->");

console.log(array)