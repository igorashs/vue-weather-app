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
      <v-card-text class="d-flex justify-space-between grey darken-1"
        ><span class="display-2" v-if="!inCelsius">{{ fahrenheit }}&deg;F</span>
        <span class="display-2" v-else>{{ celsius }}&deg;C</span>
        <v-list class="subtitle-1">
          <v-list-item style="min-height: 24px">
            <span>Humidity {{ data.weatherInfo.humidity }}%</span>
          </v-list-item>
          <v-list-item style="min-height: 24px">
            <span>Pressure {{ data.weatherInfo.pressure }}hPa</span>
          </v-list-item>
        </v-list>
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
  props: ['data', 'userPref'],
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
  },
  watch: {
    inCelsius(val) {
      if (val != this.userPref.inCelsius) {
        this.$emit('save-user-pref', { inCelsius: val });
      }
    }
  },
  beforeMount() {
    if (this.userPref && this.userPref.inCelsius) {
      this.inCelsius = this.userPref.inCelsius;
    }
  }
};
</script>
