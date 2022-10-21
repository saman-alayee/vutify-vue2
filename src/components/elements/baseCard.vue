<template>
  <v-card class="mx-auto" max-width="400" elevation="10">
    <v-img class="white--text align-end" height="200px" :src="image">
      <v-card-title>{{ imageText }}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <div>{{ title }}</div>

      <div>{{ description }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="blue" text>{{ buttonText }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    imageText: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>