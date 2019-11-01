<template>
  <v-app>
    <nav-bar />
    <v-content>
      <input-search @search-location-data="handleSearchLocationData" />
      <v-divider></v-divider>
      <weather-view :data="weatherData" />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';
import WeatherView from './components/WeatherView.vue';

import weatherService from './services/weatherService';

export default {
  name: 'App',
  data: () => ({
    weatherData: null
  }),
  components: {
    NavBar,
    InputSearch,
    WeatherView
  },
  methods: {
    async handleSearchLocationData(location) {
      this.weatherData = await weatherService.getLocationData(location);
    }
  }
};
</script>
