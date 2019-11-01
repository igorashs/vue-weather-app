<template>
  <nav>
    <v-app-bar app flat>
      <v-toolbar-items>
        <v-btn text>
          <v-icon left large>mdi-cloud-search</v-icon>
          <v-toolbar-title class="headline">
            <span class="font-weight-bold">Weather </span>
            <span>App</span>
          </v-toolbar-title>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn depressed fab class="grey darken-3" @click="openRepo">
        <v-icon x-large>mdi-github-circle</v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    openRepo() {
      window.open('https://github.com/igorashs/vue-weather-app', '_blank');
    }
  }
};
</script>
