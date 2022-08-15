<script setup>
import TheHeader from "./components/TheHeader.vue"
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <the-header />
  <main>
    <router-view />
  </main>
  <the-footer />
</template>

<style scoped>
</style>
