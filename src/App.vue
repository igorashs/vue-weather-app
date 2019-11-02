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
      <no-data-dialog :show="errorDialog" @toggle-dialog="handleToggleDialog" />
      <loading-progress-view absolute :show="isLoading" />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';
import WeatherView from './components/WeatherView.vue';
import NoDataDialog from './components/NoDataDialog.vue';
import LoadingProgressView from './components/LoadingProgressView.vue';

import weatherService from './services/weatherService';
import userPrefSerivice from './services/userPref';

export default {
  name: 'App',
  data: () => ({
    weatherData: null,
    userPref: null,
    errorDialog: false,
    isLoading: false
  }),
  components: {
    NavBar,
    InputSearch,
    WeatherView,
    NoDataDialog,
    LoadingProgressView
  },
  methods: {
    async handleSearchLocationData(location) {
      const data = await weatherService.getLocationData(location);

      await this.showLoadingProgress(1000);
      this.weatherData = data;

      if (!this.weatherData) this.errorDialog = true;
    },
    handleSaveUserPref(pref) {
      userPrefSerivice.setUserPref(pref);
    },
    handleToggleDialog(val) {
      this.errorDialog = val;
    },
    async showLoadingProgress(ms) {
      this.isLoading = true;
      await new Promise(resolve => setTimeout(resolve, ms));
      this.isLoading = false;
    }
  },
  beforeMount() {
    this.userPref = userPrefSerivice.getUserPref();
  }
};
</script>
