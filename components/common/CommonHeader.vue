<script setup>
const links = [
  { path: { name: 'about' }, text: 'Обо мне' },
  { path: { name: 'projects' }, text: 'Проекты' },
  { path: { name: 'contacts' }, text: 'Контакты' },
];
</script>

<template>
  <header class="header">
    <NuxtLink :to="{ name: 'index' }">Алиса С.</NuxtLink>
    <div class="header__links">
      <NuxtLink v-for="link in links" :key="link.text" :to="link.path">{{ link.text }}</NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
</style>