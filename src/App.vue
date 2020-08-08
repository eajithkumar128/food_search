<template>
  <v-app class="checking">
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
@font-face {
  font-family: Metropolis;
  src: url("./assets/Metropolis/Metropolis-Regular.otf") format("otf");
}
.v-application {
  /* background-color: #f0f0f0 !important; */
  font-family: "Metropolis";
}

.checking {
  background-color: gray;
  background-position: top -110px right -110px, bottom 120px left -80px,
    top 30% left 120px, bottom 220px right -50px, bottom 450px right 100px !important;
  background-repeat: no-repeat !important;
  background-image: url("./assets/Images/Illustration2.png"),
    url("./assets/Images/Illustration1.png"),
    url("./assets/Images/Illustration3.png"),
    url("./assets/Images/Illustration4.png"),
    url("./assets/Images/Illustration5.png") !important;
}
</style>