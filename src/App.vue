<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/shared/Navbar.vue'
import Footer from './components/shared/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
  <Footer />
</template>

<style scoped>
.container {
  max-width: 1204px;
  margin: 0 auto;
  padding-top: 20px;
}
</style>
