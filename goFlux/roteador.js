const express = require('express');
const embarcadores = require('./controladores/embarcadores');
const transportadores = require('./controladores/transportadores');
const ofertas = require('./controladores/ofertas');
const lances = require('./controladores/lances');

const router = express();

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
