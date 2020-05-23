<template lang="pug">
h1.title Welcome to {{ name }}!
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Greeting',
  props: {
    name: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
h1.title {
  font-size: 2.5em;
}
</style>
