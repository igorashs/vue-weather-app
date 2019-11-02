<template>
  <v-overlay v-if="show">
    <v-progress-circular indeterminate></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
  props: {
    show: Boolean
  }
};
</script>
