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
      <v-row no-gutters>
        <v-col v-for="card in cards" :key="card.id" md="3"
          ><BaseCard
            :title="card.title"
            :image="card.image"
            :imageText="card.imageText"
            :description="card.description"
            :buttonText="card.buttonText"
          ></BaseCard
        ></v-col>
      </v-row>
    </div>
    <div><LineChart
					:width="900"
					:height="400"
					:chart-data="chartData"
					:chart-options="chartOptions"
					class="mt-4"
				/></div>
  </div>
</template>

<script>
import BaseCard from "../elements/baseCard.vue";
import LineChart from "../elements/charts/lineChart.vue";
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
