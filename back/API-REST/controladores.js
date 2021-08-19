const fs = require("fs/promises");
const funcionarios = require("./dados.json");
const axios = require("axios");

let id;
try {
  id = funcionarios[funcionarios.length - 1].id + 1;
} catch {
  id = 1;
}

// const dadosCep = {};
//   const cep = req.body.cep;
//   const dados = (await axios(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)).data;
//   Object.assign(dadosCep, dados)
//   console.log(dadosCep.cep)


//Consultar
async function listar(req, res) {
  res.status(201).json(funcionarios);
}

//Criar
async function criar(req, res) {
  try {
    if( req.body.nome === undefined ||
        req.body.idade === undefined ||
        req.body.cpf === undefined ||
        req.body.cep === undefined  ) {
        res.status(400).json({mensagem: "Campos obrigatórios :Nome, Idade, CPF, CEP"});
        return;
    }
    const cep = req.body.cep;
    const dadosCep = (await axios(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)).data;

    if (!dadosCep.cep){
      res.status(400).json({mensagem: 'Cep Inválido'})
      return;
    }

    const dados = {
      id: id,
      nome: req.body.nome,
      idade: req.body.idade,
      cpf: req.body.cpf,
      cep: dadosCep.cep,
      rua: dadosCep.logradouro,
      bairro: dadosCep.bairro,
      cidade: dadosCep.localidade,
      estado: dadosCep.uf
    };
      funcionarios.push(dados);
      gravarDados();
      id++;
      res.status(201);
      res.json({ mensagem: "Funcionário Criado com Sucesso!" });
      return;
     
  } catch (err) {
    return res.status(400).json({mensagem: "Formato de CEP inválido (00000-000) ou erro no servidor"})
  }
}

//Editar
async function editar(req, res) {
  try {
    const encontrado = funcionarios.find((item) => item.id === Number(req.params.id));

  if (!encontrado) {
    res.status(404).json({ erro: "Id não encontrado" });
    return;
  }
  if (req.body.nome !== undefined) {
    encontrado.nome = req.body.nome;
  }
  if (req.body.idade !== undefined) {
    encontrado.idade = req.body.idade;
  }
  if (req.body.cpf !== undefined) {
    encontrado.cpf = req.body.cpf;
  }
  if (req.body.cep !== undefined) {
    const cep = req.body.cep;
    const dadosCep = (await axios(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)).data;

    if (!dadosCep.cep){
      res.status(400).json({mensagem: 'Cep Inválido'})
      return;
    }   

    encontrado.cep = dadosCep.cep;
    encontrado.rua = dadosCep.logradouro;
    encontrado.bairro = dadosCep.bairro;
    encontrado.cidade = dadosCep.localidade;
    encontrado.estado = dadosCep.uf;
  }
  gravarDados();
  res.status(200).json({ mensagem: "Alterado" });

  } catch (error) {
    res.status(400).json({mensagem: "Erro Catch"})
  }
  
}

//Substituir
async function substituir(req, res) {
  try {
    const encontrado = funcionarios.find((item) => item.id === Number(req.params.id));
    const cep = req.body.cep;

  if( req.body.nome === undefined ||
    req.body.idade === undefined ||
    req.body.cpf === undefined ||
    req.body.cep === undefined  ) {
    res.status(400).json({mensagem: "Campos obrigatórios :Nome, Idade, CPF, CEP"});
    return;
  }

  if (encontrado) {
    const dadosCep = (await axios(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)).data;

    if (!dadosCep.cep){
      res.status(400).json({mensagem: 'Cep Inválido'})
      return;
    } 

    encontrado.nome = req.body.nome;
    encontrado.idade = req.body.idade;
    encontrado.cpf = req.body.cpf;
    encontrado.cep = dadosCep.cep;
    encontrado.rua = dadosCep.logradouro;
    encontrado.bairro = dadosCep.bairro;
    encontrado.cidade = dadosCep.localidade;
    encontrado.estado = dadosCep.uf;
    res.json({ mensagem: "Substituido" });

  } else {

    const dadosCep = (await axios(`https://viacep.com.br/ws/${cep.replace("-", "")}/json/`)).data;
    
    if (!dadosCep) {
      res.status(400).json({ erro: "CEP inválido" });
      return;
    }

    const dados = {
      id: id,
      nome: req.body.nome,
      idade: req.body.idade,
      cpf: req.body.cpf,
      cep: dadosCep.cep,
      rua: dadosCep.logradouro,
      bairro: dadosCep.bairro,
      cidade: dadosCep.localidade,
      estado: dadosCep.uf,
    };
    id++;
    funcionarios.push(dados);
    res.status(201).json({ mensagem: "ALterado" });
  }
  gravarDados();

  } catch (error) {
    res.status(400).json({mensagem: "Erro Catch"})
  }
}

//Excluir
async function excluir (req, res) {
  const encontrado = funcionarios.find((item) => item.id === Number(req.params.id));

  if (!encontrado) {
    res.status(404).json({ erro: "Id não encontrado" });
    return;
  }

  const posicao = funcionarios.indexOf(encontrado);
  funcionarios.splice(posicao, 1);
  res.status(200).json({mensagem: `O Funcionário foi excluído : `, encontrado});
  gravarDados();
}

function gravarDados (){
  fs.writeFile("./dados.json", JSON.stringify(funcionarios, null, 2));
}

module.exports = { listar, criar, editar, substituir, excluir };