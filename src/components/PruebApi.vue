<template>
  <div>
    <h1>prueba</h1>
    Nombre: <input type="text" v-model="nombre" placeholder="nombre" />
    <hr />
    <button @click="enviarDatos">Enviar</button>
    <hr />
    <h2>Respuesta del servidor</h2>
    <p>{{ info.user }}</p>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "PruebApi",
  props: {},
  setup() {
    let nombre = ref("");
    let info = reactive({});

    function enviarDatos() {
      fetch("http://localhost:8081/api/guardar", {
        method: "POST",
        body: JSON.stringify({ nombre: nombre.value }),
        headers: { "Content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((datos) => (info.user = datos));
    }
    return {
      nombre,
      enviarDatos,
      info,
    };
  },
};
</script>

<style>
</style>