const conexao = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../securekey')

// Listar
const login = async (req, res) => {
    const {email, passw} = req.body;

    if (!email || !passw) {
        return res.status(404).json('Email e senha obrigatórios!')
    }

    try {
        const consultaEmail = 'select * from usuarios where email = $1';
        const { rowCount, rows } = await conexao.query(consultaEmail, [email]);
    
        if (rowCount === 0) {
            return res.status(400).json('Usuário não encontrado');
        }

        const usuario = rows[0];

        const senhaOk = await bcrypt.compare(passw.trim(), usuario.passw.trim());
        console.log(passw)
        console.log(usuario.passw)
        console.log(senhaOk)

        if (!senhaOk) {
            return res.status(400).json('Email ou senha não conferem');
        }

        const token = jwt.sign({ id: usuario.id }, key);

        return res.status(200).json({ usuario, token })

    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = { login };