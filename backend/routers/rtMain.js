const express = require('express')
const daoUsuarios = require('../dao/daoUsuarios')
const rtMain = express.Router()

rtMain.get("/welcome", (req, res) => {
    res.json({
        saludo: "ey q pacha"
    })
})

rtMain.get('/listado', async function (req, res) {
    let misUsuarios = await daoUsuarios.listar()
    res.json(misUsuarios)
})

rtMain.post('/guardar', (req, res) => {
    daoUsuarios.guardar(req.body)
    .then(res.json())
})

rtMain.post('/eliminar', (req, res) => {
    daoUsuarios.eliminar(req.body.id)
    res.json("usuario eliminado")
})

module.exports = rtMain;