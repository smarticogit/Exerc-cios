const conexao = require('../conexao');
const bcrypt = require('bcrypt');

// Listar
const listarUsuarios = async (req, res) => {
    try {
        const { rows: usuarios } = await conexao.query('select * from usuarios');
        return res.status(200).json(usuarios);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Obter
const obterUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('usuario não encontrado');
        }
        return res.status(200).json(usuario.rows[0]);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Criar
const criarUsuario = async (req, res) => {
    const { nome, email, passw } = req.body;

    if (!nome) {
        return res.status(400).json('O campo nome é obrigatório!');
    }

    if (!email) {
        return res.status(400).json('O campo email é obrigatório!');
    }

    if (!passw) {
        return res.status(400).json('O campo passw é obrigatório!');
    }

    const consultaEmail = 'select * from usuarios where email = $1';
    const { rowCount: QtdEmails } = await conexao.query(consultaEmail, [email]);

    if (QtdEmails > 0  ) {
        return res.status(400).json('O email já está cadastrado');
    }

    const passwCrypt = await bcrypt.hash(passw, 10)
    

    try {
        const query = 'insert into usuarios (username, email, passw) values ($1, $2, $3)'
        const usuario = await conexao.query(query, [nome, email, passwCrypt]);

        if (usuario.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o usuario!');
        }

        return res.status(200).json('usuario cadastrado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Editar
const editarUsuario = async (req, res) => {
    const { id } = req.params;
    const { nome, email, passw } = req.body;
    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);

        if (usuario.rowCount === 0) {
            return res.status(404).json('usuario não encontrado');
        }

        const query = 'update usuarios set username =$1, email = $2, passw = $3 where id = $4';
        const usuarioAtualizado = await conexao.query(query, [nome, email, passw, id]);

        if (usuarioAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o usuario!');
        }

        return res.status(200).json('usuario atualizado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Excluir
const excluirUsuario = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await conexao.query('select * from usuarios where id = $1', [id]);
        if (usuario.rowCount === 0) {
            return res.status(404).json('usuario não encontrado');
        }

        const usuarioExcluido = await conexao.query('delete from usuarios where id = $1', [id]);
        if (usuarioExcluido.rowCount === 0) {
            return res.status(400).json('Não foi possível excluir o usuario');
        }

        return res.status(200).json('usuario excluído com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarUsuarios,
    obterUsuario,
    criarUsuario,
    editarUsuario,
    excluirUsuario
};