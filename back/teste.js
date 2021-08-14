const caminhoImagens = './assets';
const contatos = [{
    mensagens: 1024,
    nome: 'Mãe ❤',
    descricao: 'O Senhor é o meu pastor; de nada me faltará. (Salmos 23:1) 🙏🙏',
    imagem: `${caminhoImagens}/alice.jpg`
}, {
    mensagens: 645,
    nome: 'Tio Omar',
    descricao: 'Disponível',
    imagem: `${caminhoImagens}/omar.jpg`
}, {
    mensagens: 877,
    nome: 'Irene RH',
    descricao: 'Olá! Eu estou usando o WhatsApp.',
    imagem: `${caminhoImagens}/irene.jpg`
}, {
    mensagens: 30,
    nome: 'Otavio Carona',
    descricao: '',
    imagem: `${caminhoImagens}/otavio.jpg`
}, {
    mensagens: 190,
    nome: 'Isaura',
    descricao: '🌞',
    imagem: `${caminhoImagens}/isaura.jpg`
}, {
    mensagens: 249,
    nome: 'Assistência Técnica',
    descricao: 'Horário de atendimento 08:00 - 17:30',
    imagem: `${caminhoImagens}/tiago.jpg`
}, {
    mensagens: 581,
    nome: 'Lurdes ONG animais',
    descricao: '🐱🐶',
    imagem: `${caminhoImagens}/lurdes.jpg`
}];

let numeros = contatos.sort((a, b) => b.mensagens - a.mensagens);

numeros = numeros.slice(0, 5);
console.log(numeros)


