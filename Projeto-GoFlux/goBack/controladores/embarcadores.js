const conexao = require('../conexao');

// Listar
const listarEmbarcadores = async (req, res) => {
    try {
        const { rows: embarcadores, rowCount } = await conexao.query('select * from embarcadores');

        if (rowCount === 0) {
            return res.status(404).json('Embarcadores não encontrados');
        }

        return res.status(200).json(embarcadores);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Obter
const obterEmbarcador = async (req, res) => {
    const { id } = req.params;
    try {
        const embarcador = await conexao.query('select * from embarcadores where id = $1', [id]);

        if (embarcador.rowCount === 0) {
            return res.status(404).json('embarcador não encontrado');
        }
        return res.status(200).json(embarcador.rows[0]);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Criar
const criarEmbarcador = async (req, res) => {
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
        const query = 'insert into embarcadores (name, doc, about, active, site) values ($1, $2, $3, $4, $5)'
        const embarcador = await conexao.query(query, [name, doc, about, active, site]);

        if (embarcador.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o embarcador!');
        }

        return res.status(200).json('Embarcador cadastrado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Editar
const editarEmbarcador = async (req, res) => {
    const { id } = req.params;
    const { name, doc, about, active, site } = req.body;
    try {
        const embarcador = await conexao.query('select * from embarcadores where id = $1', [id]);

        if (embarcador.rowCount === 0) {
            return res.status(404).json('Embarcador não encontrado');
        }

        const query = 'update embarcadores set name = $1, doc = $2, about = $3, active = $4, site = $5 where id = $6';
        const embarcadorAtualizado = await conexao.query(query, [name, doc, about, active, site, id]);

        if (embarcadorAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar o embarcador!');
        }

        return res.status(200).json('Embarcador atualizado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Excluir
const excluirEmbarcador = async (req, res) => {
    const { id } = req.params;

    try {
        const embarcador = await conexao.query('select * from embarcadores where id = $1', [id]);
        if (embarcador.rowCount === 0) {
            return res.status(404).json('embarcador não encontrado');
        }

        const embarcadorExcluido = await conexao.query('delete from embarcadores where id = $1', [id]);
        if (embarcadorExcluido.rowCount === 0) {
            return res.status(400).json('Não foi possível excluir o embarcador');
        }

        return res.status(200).json('Embarcador excluído com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarEmbarcadores,
    obterEmbarcador,
    criarEmbarcador,
    editarEmbarcador,
    excluirEmbarcador
};