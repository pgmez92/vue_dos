const express = require('express')
const daoUsuarios = require('../dao/daoUsuarios')
const rtMain = express.Router()
const Usuario = require('../models/Usuario')

rtMain.get("/welcome", (req, res) => {
    res.json({
        saludo: "ey q pacha"
    })
})

/* rtMain.post("/nuevo", (req, res) => {
    let datos = req.body;
    console.log("guardaddo en bdd", datos)
    res.json({
        respuesta: "datos recibidos",
        datos: datos,
    })
}) */

rtMain.post('/guardar', (req, res) => {
    daoUsuarios.guardar(req.body)
        .then(user => {
            user
        })
        .catch((err) => {
            console.log(err)
        })
})

module.exports = rtMain;