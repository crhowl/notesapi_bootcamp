const express = require("express");
const app = express();
const PORTA = 3000;

app.use(express.json());

const usuario = require("./rotas/usuario");
const nota = require("./rotas/nota")

app.use("/usuario", usuario);
app.use("/nota", nota);

app.listen(PORTA, function(){
    console.log(`Aplicação todando na porta ${PORTA}`);
});