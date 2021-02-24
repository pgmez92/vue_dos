const mongoose = require("mongoose")
const { Schema } = mongoose

const schemaUsuario = new Schema({
    nombre: {
        type: String,
    }
})

class Usuario {

}

schemaUsuario.loadClass(Usuario)


module.exports = mongoose.model('ejercicio_user', schemaUsuario)