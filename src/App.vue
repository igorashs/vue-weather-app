<template>
  <v-app>
    <nav-bar />
    <v-content>
      <input-search />
      <v-divider></v-divider>
      <weather-view initData="weatherData" />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';
import WeatherView from './components/WeatherView.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    NavBar,
    InputSearch,
    WeatherView
  }
};
</script>
