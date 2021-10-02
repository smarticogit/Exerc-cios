const conexao = require('../conexao');

// Listar
const listarlances = async (req, res) => {
    try {
        const { rows: lances } = await conexao.query('select * from lances');
        return res.status(200).json(lances);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Obter
const obterlance = async (req, res) => {
    const {id} =req.params;
    try {
        const lance = await conexao.query('select * from lances where id = $1', [id]);

        if (lance.rowCount === 0) {
            return res.status(404).json('lance não encontrado');
        }
        return res.status(200).json(lance.rows[0]); 

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Criar
const criarlance = async (req, res) => {
    const { id_provider, id_offer, value, amount } = req.body;

    try {
        const query = 'insert into lances (id_provider, id_offer, value, amount) values ($1, $2, $3, $4)'
        const lance = await conexao.query(query, [id_provider, id_offer, value, amount]);

        if (lance.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar o lance!');
        }

        return res.status(200).json('lance cadastrado com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Editar
const editarlance = async (req, res) => {
    const { id } = req.params;
    const { id_provider, id_offer, value, amount } = req.body;
    try {
        const lance = await conexao.query('select * from lances where id = $1', [id]);

        if (lance.rowCount === 0) {
            return res.status(404).json('lance não encontrado');
        }

        const query = `update lances set id_provider =$1, id_offer = $2, value = $3, amount = $4 where id = $5`;
        const lanceAtualizado = await conexao.query(query, [id_provider, id_offer, value, amount, id]);

        if (lanceAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar a lance!');
        }

        return res.status(200).json('Lance atualizada com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Excluir
const excluirlance = async (req, res) => {
    const { id } = req.params;

    try {
        const lance = await conexao.query('select * from lances where id = $1', [id]);
        if (lance.rowCount === 0) {
            return res.status(404).json('lance não encontrado');
        }

        const lanceExcluido = await conexao.query('delete from lances where id = $1', [id]);
        if (lanceExcluido.rowCount === 0) {
            return res.status(400).json('Não foi possível excluir a lance');
        }

        return res.status(200).json('lance excluído com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarlances,
    obterlance,
    criarlance,
    editarlance,
    excluirlance
};