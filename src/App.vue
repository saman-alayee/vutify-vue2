<template>
  <v-app>
    <v-system-bar><Thenavbar /></v-system-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Thenavbar from "./layout/TheNavbar.vue";

export default {
  name: "App",

  components: {
    HelloWorld,
    Thenavbar,
  },

  data: () => ({
    //
  }),
};
</script>
