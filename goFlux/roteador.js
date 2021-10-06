const express = require('express');
const embarcadores = require('./controladores/embarcadores');
const transportadores = require('./controladores/transportadores');
const ofertas = require('./controladores/ofertas');
const lances = require('./controladores/lances');
const usuarios = require('./controladores/usuarios');
const login = require('./controladores/login');
const autenticacao = require('./filtros/autenticacao');

const router = express();

router.get("/teste", usuarios.listar);
// Usuarios
router.post("/usuarios", usuarios.criarUsuario);

//login
router.post("/login", login.login);

// Autenticação
router.use(autenticacao.autenticar);

router.get("/usuarios", usuarios.listarUsuarios);
router.get("/usuarios/:id", usuarios.obterUsuario);
router.put("/usuarios/:id", usuarios.editarUsuario);
router.delete("/usuarios/:id", usuarios.excluirUsuario);

// Embarcadores
router.get("/embarcadores", embarcadores.listarEmbarcadores);
router.get("/embarcadores/:id", embarcadores.obterEmbarcador);
router.post("/embarcadores", embarcadores.criarEmbarcador);
router.put("/embarcadores/:id", embarcadores.editarEmbarcador);
router.delete("/embarcadores/:id", embarcadores.excluirEmbarcador);

// Transportadores
router.get("/transportadores", transportadores.listarTransportadores);
router.get("/transportadores/:id", transportadores.obterTransportador);
router.post("/transportadores", transportadores.criarTransportador);
router.put("/transportadores/:id", transportadores.editarTransportador);
router.delete("/transportadores/:id", transportadores.excluirTransportador);

// Ofertas
router.get("/ofertas", ofertas.listarOfertas);
router.get("/ofertas/:id", ofertas.obterOferta);
router.post("/ofertas", ofertas.criarOferta);
router.put("/ofertas/:id", ofertas.editarOferta);
router.delete("/ofertas/:id", ofertas.excluirOferta);

// Lance
router.get("/lances", lances.listarlances);
router.post("/lances", lances.criarlance);
router.put("/lances/:id", lances.editarlance);
router.delete("/lances/:id", lances.excluirlance);

module.exports = router;
