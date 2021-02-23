<template>
  <div class="col-8 col-md-6">
    <h1>CARRO</h1>
    <ul>
      <li v-for="(item, i) in catalogo" :key="i">
        <Item
          :titulo="item.nombre"
          :descripcion="item.descripcion"
          :imagen="item.img"
          :precio="item.precio"
          @calcTotal="verCambio"
        />
      </li>
    </ul>
    TOTAL PASTISAL:
    <p>{{ totalGlobal }}</p>
  </div>
</template>

<script>
import Item from "@/components/Item";
import { ref } from "vue";
export default {
  name: "Carrito",
  components: {
    Item,
  },
  props: {},
  setup() {
    let totalGlobal = ref(0);
    const catalogo = [
      {
        nombre: "barco",
        descripcion: "",
        precio: 30.3,
        img: "img/barco-vikingo.png",
      },
      {
        nombre: "cuerno",
        descripcion: "",
        precio: 10.2,
        img: "img/cuerno.png",
      },
      {
        nombre: "vikingo",
        descripcion: "",
        precio: 20.5,
        img: "img/vikingo.png",
      },
      {
        nombre: "vikinga",
        descripcion: "",
        precio: 20,
        img: "img/vikinga.png",
      },
    ];
    function verCambio(total) {
      totalGlobal.value += parseFloat(total.value);
    }

    return {
      catalogo,
      verCambio,
      totalGlobal,
    };
  },
};
</script>

<style>
</style>