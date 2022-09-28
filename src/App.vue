<template>
  <v-app>
    <RouterView name="Navigation"></RouterView>

    <v-main><RouterView></RouterView></v-main>
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
