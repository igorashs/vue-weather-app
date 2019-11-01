<template>
  <v-container class="d-flex justify-center" v-if="data">
    <v-card max-width="1024" min-width="320">
      <v-card-title>Weather For {{ data.name }}</v-card-title>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'WeatherView',
  props: ['data']
};
</script>
