<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
  <header class="p-4 bg-gray-800 flex justify-between items-center">
    <button @click="emit('toggle-sidebar')" class="text-xl md:hidden">☰</button>
    <h1 class="text-xl">Radio Browser</h1>
  </header>
</template>
