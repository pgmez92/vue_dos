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
          @calcTotal="ver"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Item from "@/components/Item";
export default {
  name: "Carrito",
  components: {
    Item,
  },
  props: {},
  setup() {
    const catalogo = [
      {
        nombre: "barco",
        descripcion: "",
        precio: 30,
        img: "img/barco-vikingo.png",
      },
      { nombre: "cuerno", descripcion: "", precio: 10, img: "img/cuerno.png" },
      {
        nombre: "vikingo",
        descripcion: "",
        precio: 20,
        img: "img/vikingo.png",
      },
      {
        nombre: "vikinga",
        descripcion: "",
        precio: 20,
        img: "img/vikinga.png",
      },
    ];
    const ver = () => {
      
    };

    return {
      catalogo,
    };
  },
};
</script>

<style>
</style>