const express = require("express");
const router = require("./roteador");

const app = express();
app.use(express.json());

app.use(router);

app.listen(8000);
