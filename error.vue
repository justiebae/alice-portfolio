<template>
  <div>{{ error.statusCode }}</div>
  <div>{{ error.message }}</div>
  
  <button @click="handleClick">go home</button>
</template>

<script setup>
const props = defineProps(['error']);

const handleClick = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
</style>