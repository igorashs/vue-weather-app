<template>
  <v-app>
    <nav-bar />
    <v-content>
      <input-search />
      <v-divider></v-divider>
      <v-container></v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue';
import InputSearch from './components/InputSearch.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    NavBar,
    InputSearch
  }
};
</script>
