<template>
  <div class="Api">
    <div id="mapid"></div>
    <button @click="marca">botonsito</button>
  </div>
</template>

<script>
import { onMounted } from "vue";
import L from "leaflet";

export default {
  name: "Api",
  props: {},
  setup() {
    let mymap;
    onMounted(() => {
      L.map("mapid").setView([51.505, -0.09], 13);
      mymap = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ).addTo(mymap);
    });

    return { mymap };
  },
};
</script>

<style scoped>
#mapid {
  height: 500px;
}
</style>
