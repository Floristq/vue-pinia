<script setup>
import { useAgeStore } from '@/stores/index.js';
const ageStore = useAgeStore();
console.log(ageStore.age);

function changeAge(){
  ageStore.age++;
}
</script>

<template>
  <main>
    <h2>{{ ageStore.age }}</h2>
    <h2>{{ ageStore.gettersAge }}</h2>
    <button @click="changeAge">修改age值</button>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
