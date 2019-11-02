<template>
  <v-container class="d-flex justify-center" v-if="data">
    <v-card max-width="1024" min-width="320">
      <v-container class="deep-purple darken-1 px-4">
        <v-card-title class="headline justify-space-between pa-0 pb-2">
          <span class="font-weight-bold"> {{ data.name }}</span>
          <v-img style="max-width: 50px;" :src="data.iconUrl" />
        </v-card-title>
        <v-card-subtitle
          class="d-flex justify-space-between font-weight-bold pa-0"
        >
          <span>{{ currentDate }} {{ data.country }}</span>
          <span>{{ data.description }}</span>
        </v-card-subtitle>
      </v-container>
      <v-card-text class="display-1"
        ><span v-if="!inCelsius">{{ fahrenheit }}&deg;F</span>
        <span v-else>{{ celsius }}&deg;C</span>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="justify-end pa-0 px-4">
        <v-checkbox v-model="inCelsius" label="Show in Celsius"></v-checkbox>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherView',
  props: ['data'],
  data() {
    return {
      inCelsius: false
    };
  },
  computed: {
    currentDate() {
      return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
        new Date()
      );
    },
    fahrenheit() {
      const { temp } = this.data.weatherInfo;
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    },
    celsius() {
      const { temp } = this.data.weatherInfo;
      return Math.round(temp - 273.15);
    }
  }
};
</script>
