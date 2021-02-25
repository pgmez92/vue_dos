<template>
  <div>
    <h1>prueba</h1>
    Nombre:
    <input type="text" v-model="nombre" placeholder="nombre" /> Apellido:
    <input type="text" v-model="apellido" placeholder="apellido" />
    <hr />
    <button @click="enviarDatos">Enviar</button>
    <hr />
    <table class="tabla" id="cantProd">
      <thead>
        <tr>
          <th>indice</th>
          <th>Nombre</th>
          <th>Apellido</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in info" :key="i">
          <td>{{ i + 1 }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td><button @click="eliminarUsuarios(item.id)">Eliminar</button></td>
        </tr>
      </tbody>
    </table>
    <!--     <h2>Respuesta del servidor</h2>
    <p>{{ info }}</p> -->
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "PruebApi",
  props: {},
  setup() {
    let nombre = ref("");
    let apellido = ref("");
    let info = reactive([]);

    function listarUsuarios() {
      fetch("http://localhost:8081/api/listado")
        .then((res) => res.json())
        .then((datos) => {
          info.splice(0);
          datos.forEach((element) => {
            info.push(element);
          });
        });
    }

    function enviarDatos() {
      fetch("http://localhost:8081/api/guardar", {
        method: "POST",
        body: JSON.stringify({
          nombre: nombre.value,
          apellido: apellido.value,
        }),
        headers: { "Content-type": "application/json" },
      }).then(() => {
        listarUsuarios();
      });
    }

    function eliminarUsuarios(id) {
      fetch("http://localhost:8081/api/eliminar", {
        method: "POST",
        body: JSON.stringify({
          id: id,
        }),
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then(() => {
          listarUsuarios();
        });
    }
    listarUsuarios();
    return {
      nombre,
      apellido,
      enviarDatos,
      listarUsuarios,
      eliminarUsuarios,
      info,
    };
  },
};
</script>

<style lang="scss">
.inputs {
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: round;
  border-style: double;
  border-color: black;
  color: black;
  background-color: darkslateblue;
  font-size: medium;
  font-weight: bold;
  width: 60%;
  align-content: center;
}

.total {
  border: 1px solid black;
  background-color: black;
  width: 20%;
  color: orange;
  margin: 0 auto;
  margin-top: 20px;
}
.tabla {
  margin: 0 auto;
  margin-top: 20px;

  th {
    border: 1px solid black;
    background-color: black;
    color: orange;
  }
  td {
    border: 1px solid black;
  }
}
</style>