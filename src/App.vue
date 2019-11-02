<template>
  <v-app>
    <nav-bar />
    <v-content>
      <input-search @search-location-data="handleSearchLocationData" />
      <v-divider></v-divider>
      <weather-view
        :data="weatherData"
        :userPref="userPref"
        @save-user-pref="handleSaveUserPref"
      />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';
import WeatherView from './components/WeatherView.vue';

import weatherService from './services/weatherService';
import userPrefSerivice from './services/userPref';

export default {
  name: 'App',
  data: () => ({
    weatherData: null,
    userPref: null
  }),
  components: {
    NavBar,
    InputSearch,
    WeatherView
  },
  methods: {
    async handleSearchLocationData(location) {
      this.weatherData = await weatherService.getLocationData(location);
    },
    handleSaveUserPref(pref) {
      userPrefSerivice.setUserPref(pref);
    }
  },
  beforeMount() {
    this.userPref = userPrefSerivice.getUserPref();
  }
};
</script>
