<script setup>
import { useAgeStore, useCounterStore } from "@/stores/index.js";
import { storeToRefs } from "pinia";
const ageStore=useAgeStore();
const counterStore = useCounterStore();

const { counter, gettersCounter} = storeToRefs(counterStore);
const { addCounter } = counterStore;
</script>

<template>
  <main>
    <h2>{{ ageStore.age }}</h2>
    <h2>{{ ageStore.gettersAge }}</h2>
    <button @click="ageStore.addAge">修改Age</button>

    <h2>{{ counter }}</h2>
    <h2>{{ gettersCounter }}</h2>
    <button @click="counterStore.addCounter">修改Counter</button>
  </main>
</template>
