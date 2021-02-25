const Usuario = require('../models/Usuario')

let daoUsuarios = {}
//guardar
daoUsuarios.guardar = function guardar(usuario) {
    let u = new Usuario(usuario)
    return new Promise((resolved, reject) => {
        resolved(u.save())
    })
}

//listar
daoUsuarios.listar = function find() {
    return new Promise((resolved, reject) => {
        resolved(Usuario.find().lean())
    })
}

//eliminar
daoUsuarios.eliminar = function eliminar(id) {
    Usuario.findOneAndDelete(id).then(datos => console.log(datos))
}
module.exports = daoUsuarios