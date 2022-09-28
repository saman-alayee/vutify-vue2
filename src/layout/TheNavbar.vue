<template>
  <v-app-bar app color="blue-grey darken-4" dark>
    <div class="d-flex align-sta">
      <v-img
        alt="Vuetify Logo"
        class="shrink"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />
    </div>

    <v-spacer></v-spacer>
    <v-btn target="_blank" text>
      <span @click="goLogin" class="mr-2">Login/Signup</span>
    </v-btn>
    <v-btn target="_blank" text>
      <span  class="mr-2">Contact</span>
    </v-btn>
    <v-btn target="_blank" text>
      <span class="mr-2">Product</span>
    </v-btn>
    <v-btn target="_blank" text>
      <span @click="goHome" class="mr-2">Home</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods:{
    goLogin(){
      return this.$router.push('/login');
    },
    goHome(){
      return this.$router.push('/');
    }
  }
};
</script>

<style>
</style>