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
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';
import WeatherView from './components/WeatherView.vue';
import NoDataDialog from './components/NoDataDialog.vue';

import weatherService from './services/weatherService';
import userPrefSerivice from './services/userPref';

export default {
  name: 'App',
  data: () => ({
    weatherData: null,
    userPref: null,
    errorDialog: false
  }),
  components: {
    NavBar,
    InputSearch,
    WeatherView,
    NoDataDialog
  },
  methods: {
    async handleSearchLocationData(location) {
      this.weatherData = await weatherService.getLocationData(location);
      if (!this.weatherData) this.errorDialog = true;
    },
    handleSaveUserPref(pref) {
      userPrefSerivice.setUserPref(pref);
    },
    handleToggleDialog(val) {
      this.errorDialog = val;
    }
  },
  beforeMount() {
    this.userPref = userPrefSerivice.getUserPref();
  }
};
</script>
