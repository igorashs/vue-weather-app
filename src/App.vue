<template>
  <v-app>
    <nav-bar />
    <v-content></v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    NavBar
  }
};
</script>
