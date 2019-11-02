<template>
  <v-container style="max-width: 512px">
    <v-form @submit.stop.prevent="onSearchLocationData">
      <v-row class="align-start">
        <v-text-field
          class="title pa-1"
          label="Enter Your Location Here..."
          v-model="location"
        ></v-text-field>
        <v-btn class="ma-3" @click="onSearchLocationData"
          ><v-icon>mdi-magnify</v-icon></v-btn
        >
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'InputSearch',
  data() {
    return {
      location: ''
    };
  },
  methods: {
    onSearchLocationData() {
      this.$emit('search-location-data', this.location);
    }
  }
};
</script>
