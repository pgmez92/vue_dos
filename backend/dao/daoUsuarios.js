const Usuario = require('../models/Usuario')

let daoUsuarios = {}

daoUsuarios.guardar = function guardar(usuario) {
    let u = new Usuario(usuario)
    return new Promise((resolved, reject) => {
        u.save()
            .then(() => {
                resolved("usuario guardado correctamente")
            })
            .catch(err => reject(err))
    })
}

module.exports = daoUsuarios