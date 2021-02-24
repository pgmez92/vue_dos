const express = require("express");
const app = express();
const rtMain = require("./routers/rtMain")
const db = require('./connection')

//middlewares
app.use(express.json());


//enrutadores
app.use("/api", rtMain);

//base de datos mongodb
db.on('error', console.error.bind(console, "Error de conexion mongo"))
db.once('open', () => console.log("Conexión mongo OK!!"))


//lanzamiento de servidor
app.listen(8081, (err) => {
    if (err) console.log("errores:", err)
    console.log("servidor backend arrancado en 8081")
})