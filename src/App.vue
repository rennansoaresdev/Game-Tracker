<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

    <!-- Aqui são rotas criadas no "router/index.js", "funcionamento bem parecido com rails routes" -->
        <RouterLink to="/">Talvez eu use</RouterLink>
        <RouterLink to="/about">Este tambem</RouterLink>

        <RouterView />

  </header>

</template>

<style scoped></style>
