<template>
  <v-container style="max-width: 512px">
    <v-form @submit.stop.prevent="findLocationData">
      <v-row class="align-center">
        <v-text-field
          class="title pa-1"
          label="Enter Your Location Here..."
          v-model="location"
        ></v-text-field>
        <v-btn class="ma-3" @click="findLocationData"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import weatherService from '../services/weatherService';

export default {
  name: 'InputSearch',
  data() {
    return {
      location: '',
      weatherData: null
    };
  },
  methods: {
    async findLocationData() {
      this.weatherData = await weatherService.getLocationData(this.location);
    }
  }
};
</script>
