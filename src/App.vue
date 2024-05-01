<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

  <header>
    <nav class="navigation-links">
      <RouterLink to="/">генератор</RouterLink>
      <RouterLink to="/favorites">избранное</RouterLink>
    </nav>
  </header>
</template>
