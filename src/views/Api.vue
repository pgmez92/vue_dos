<template>
  <div class="Api">
    <div id="mapid"></div>
    <button class="btn-success" @click="marca">butonsito</button>
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
      mymap = L.map("mapid").setView([41.596549, -4.751587], 10);
      L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
        {
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        }
      ).addTo(mymap);
      mymap.on("click", ver);
    });
    const marca = () => {
      let marker = L.marker([36.8165, 10.2172]).addTo(mymap);
      var circle = L.circle([36.8165, 10.2172], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(mymap);
    };

    const ver = (e) => {
      let popup = L.popup();
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    };

    return { mymap, marca, ver };
  },
};
</script>

<style scoped>
#mapid {
  height: 400px;
}
.btn-success {
  margin: 10px;
  border-radius: 10%;
}
</style>
