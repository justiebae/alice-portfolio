<template>
  <header class="header">
    <NuxtLink :to="{ name: 'index' }">Алиса С.</NuxtLink>
    <div class="header__links">
      <NuxtLink :to="{ name: 'about' }">Обо мне</NuxtLink>
      <NuxtLink :to="{ name: 'projects' }">Проекты</NuxtLink>
      <NuxtLink :to="{ name: 'contacts' }">Контакты</NuxtLink>
    </div>
  </header>
</template>