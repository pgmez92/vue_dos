<template>
  <div>
    <img :src="imagen" alt="nordic" />
    <div class="col-10">
      nombre:
      <h3 v-html="titulo"></h3>
      descrp:
      <p v-text="descripcion"></p>
      precio:
      <p v-text="precio"></p>
      TOTAL:
      <p v-text="total"></p>
      <input type="number" v-model="cantidad" size="5" />
    </div>
  </div>
  <hr />
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
  name: "Item",
  props: {
    imagen: String,
    titulo: String,
    descripcion: String,
    precio: Number,
  },
  setup(props, context) {
    let cantidad = ref(1);
    let total = computed(() => {
      return (props.precio * cantidad.value).toFixed(2);
    });
    watch(total, () => {
      context.emit("calcTotal", total);
    });
    return {
      total,
      cantidad,
    };
  },
};
</script>

<style>
</style>