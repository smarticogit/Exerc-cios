const conexao = require('../conexao');

// Listar
const listarOfertas = async (req, res) => {
    try {
        const { rows: ofertas } = await conexao.query('select * from ofertas');
        return res.status(200).json(ofertas);

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Obter
const obterOferta = async (req, res) => {
    const {id} =req.params;
    try {
        const oferta = await conexao.query('select * from ofertas where id = $1', [id]);

        if (oferta.rowCount === 0) {
            return res.status(404).json('oferta não encontrado');
        }
        return res.status(200).json(oferta.rows[0]); 

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Criar
const criarOferta = async (req, res) => {
    const { id_customer, from, to, initial_value, amount, amount_type } = req.body;

    if (!id_customer) {
        return res.status(400).json('O campo nome é id_customer!');
    }

    if (!from) {
        return res.status(400).json('O campo origin é origin!');
    }
    
    if (!to) {
        return res.status(400).json('O campo destiny é destiny!');
    }

    try {
        const query = 'insert into ofertas (id_customer, origin, destiny, initial_value, amount, amount_type) values ($1, $2, $3, $4, $5, $6)'
        const oferta = await conexao.query(query, [id_customer, from, to, initial_value, amount, amount_type]);

        if (oferta.rowCount === 0) {
            return res.status(400).json('Não foi possível cadastrar a oferta!');
        }

        return res.status(200).json('oferta cadastrada com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Editar
const editarOferta = async (req, res) => {
    const { id } = req.params;
    const {  id_customer, from, to, initial_value, amount, amount_type } = req.body;
    try {
        const oferta = await conexao.query('select * from ofertas where id = $1', [id]);

        if (oferta.rowCount === 0) {
            return res.status(404).json('oferta não encontrado');
        }

        const query = `update ofertas set
        id_customer = $1, 
        origin = $2, 
        destiny = $3, 
        initial_value = $4, 
        amount = $5, 
        amount_type = $6 
        where id = $7`;
        const ofertaAtualizado = await conexao.query(query, [id_customer, from, to, initial_value, amount, amount_type, id]);

        if (ofertaAtualizado.rowCount === 0) {
            return res.status(404).json('Não foi possível atualizar a oferta!');
        }

        return res.status(200).json('Oferta atualizada com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

// Excluir
const excluirOferta = async (req, res) => {
    const { id } = req.params;

    try {
        const oferta = await conexao.query('select * from ofertas where id = $1', [id]);
        if (oferta.rowCount === 0) {
            return res.status(404).json('oferta não encontrada');
        }

        const ofertaExcluido = await conexao.query('delete from ofertas where id = $1', [id]);
        if (ofertaExcluido.rowCount === 0) {
            return res.status(400).json('Não foi possível excluir a oferta');
        }

        return res.status(200).json('oferta excluída com sucesso!');

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarOfertas,
    obterOferta,
    criarOferta,
    editarOferta,
    excluirOferta
};