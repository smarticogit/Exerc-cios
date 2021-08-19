const express = require("express");
const controlador = require("./controladores");

const router = express();

router.get("/", controlador.listar);

router.post("/criar", controlador.criar);

router.patch("/editar/:id", controlador.editar);

router.put("/substituir/:id", controlador.substituir)

router.delete("/excluir/:id", controlador.excluir)

module.exports = router;
