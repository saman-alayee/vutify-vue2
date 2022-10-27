<template>
  <v-app>
    <RouterView name="Navigation"></RouterView>

    <v-main><RouterView></RouterView></v-main>
    <div class="mt-5"><RouterView name="Footer"></RouterView></div>

    
  </v-app>
</template>

<script>


export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
