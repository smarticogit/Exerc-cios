const conexao = require('../conexao');

const listarTransportadores = async (req, res) => {
    try {
        const { rows: transportadores } = await conexao.query('select * from transportadores');
        return res.status(200).json(transportadores);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const obterTransportador = async (req, res) => {
    const {id} =req.params;
    try {
        const transportador = await conexao.query('select * from transportadores where id = $1', [id]);

        if (transportador.rowCount === 0) {
            return res.status(404).json('transportador não encontrado');
        }
        return res.status(200).json(transportador.rows[0]); 

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const criarTransportador = async (req, res) => {
    const { name, doc, about, active, site } = req.body;

    if (!name) {
        return res.status(400).json('O campo nome é obrigatório!');
    }

    if (!doc) {
        return res.status(400).json('O campo doc é obrigatório!');
    }
    
    if (!about) {
        return res.status(400).json('O campo about é obrigatório!');
    }

    try {
        const query = 'insert into transportadores (name, doc, about, active, site) values ($1, $2, $3, $4, $5)'
        const transportador = await conexao.query(query, [name, doc, about, active, site]);

        if (transportador.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o transportador!');
        }

        return res.status(200).json('transportador cadastrado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const editarTransportador = async (req, res) => {
    const { id } = req.params;
    const { name, doc, about, active, site } = req.body;
    try {
        const transportador = await conexao.query('select * from transportadores where id = $1', [id]);

        if (transportador.rowCount === 0) {
            return res.status(404).json('transportador não encontrado');
        }

        const query = 'update transportadores set name = $1, doc = $2, about = $3, active = $4, site = $5 where id = $6';
        const transportadorAtualizado = await conexao.query(query, [name, doc, about, active, site, id]);

        if (transportadorAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o transportador!');
        }

        return res.status(200).json('transportador atualizado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const excluirTransportador = async (req, res) => {
    const { id } = req.params;

    try {
        const transportador = await conexao.query('select * from transportadores where id = $1', [id]);
        if (transportador.rowCount === 0) {
            return res.status(404).json('transportador não encontrado');
        }

        const transportadorExcluido = await conexao.query('delete from transportadores where id = $1', [id]);
        if (transportadorExcluido.rowCount === 0) {
            return res.status(400).json('Não foi possível excluir o transportador');
        }

        return res.status(200).json('Transportador excluído com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarTransportadores,
    obterTransportador,
    criarTransportador,
    editarTransportador,
    excluirTransportador
};