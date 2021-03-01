<template>
  <div>
    {{ saludo }}
  </div>
  <hr />
</template>

<script>
import i18next from "i18next";
/* import { reactive } from "vue"; */

export default {
  name: "Idioma",
  props: {},
  setup() {
    console.log(i18next);
    let saludo = i18next.t("hello");

    return {
      saludo,
    };
  },
};
</script>

<style>
</style>