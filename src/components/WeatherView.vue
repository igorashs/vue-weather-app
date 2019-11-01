<template>
  <v-container class="d-flex justify-center" v-if="data">
    <v-card max-width="1024" min-width="320">
      <v-card-title class="headline">
        <span class="font-weight-bold"> {{ data.name }}</span>
      </v-card-title>
      <v-card-subtitle>{{ currentDate }} {{ data.country }}</v-card-subtitle>
      <v-card-text class="display-1"
        >{{ fahrenheit }}<span>&deg;F</span>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherView',
  props: ['data'],
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
