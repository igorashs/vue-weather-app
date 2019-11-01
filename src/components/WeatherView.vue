<template>
  <v-container class="d-flex justify-center">
    <v-card max-width="1024" min-width="320">
      <v-card-title>Weather For {...}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherView',
  props: {
    initData: Object
  },
  data() {
    return {
      data: this.initData
    };
  }
};
</script>
