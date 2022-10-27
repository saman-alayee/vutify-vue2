<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in carousels"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div class="mt-4">
      <v-container fluid
        ><v-row no-gutters>
          <v-col class="pr-2" v-for="card in cards" :key="card.id" md="3"
            ><BaseCard
              :title="card.title"
              :image="card.image"
              :imageText="card.imageText"
              :description="card.description"
              :buttonText="card.buttonText"
            ></BaseCard
          ></v-col> </v-row
      ></v-container>
    </div>
    <div class="mt-4">
      <v-row
        ><v-col md="6"
          ><LineChart
            :width="900"
            :height="400"
            :chart-data="chart03Data"
            :chart-options="chartOptions"
        /></v-col>
        <v-col md="6"
          ><div>
            <p class="font-weight-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div></v-col
        ></v-row
      >
    </div>
    <div class="mt-8">
    <v-container >
        <v-row justify="center">
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
    </v-container></div>
  </div>
</template>

<script>
import BaseCard from "@/components/elements/baseCard.vue";
import LineChart from "@/components/elements/charts/lineChart.vue";
export default {
  data() {
    return {
      carousels: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      cards: [
        {
          image: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          imageText: "text",
          title: "this is a title",
          description: "this is a description",
          buttonText: "click me",
          id: "1",
        },
        {
          image: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          imageText: "text",
          title: "this is a title",
          description: "this is a description",
          buttonText: "click me",
          id: "2",
        },
        {
          image: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          imageText: "text",
          title: "this is a title",
          description: "this is a description",
          buttonText: "click me",
          id: "3",
        },
        {
          image: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          imageText: "text",
          title: "this is a title",
          description: "this is a description",
          buttonText: "click me",
          id: "3",
        },
      ],
    };
  },
  components: { BaseCard, LineChart },
};
</script>
