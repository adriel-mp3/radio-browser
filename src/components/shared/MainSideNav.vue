<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ isSidebarOpen: boolean }>();
const emit = defineEmits(["toggle-sidebar"]);
</script>

<template>
  <aside
    v-if="isSidebarOpen"
    class="bg-gray-800 p-4 flex flex-col fixed inset-y-0 left-0 transition-all duration-300 md:relative md:w-64 z-50 overflow-y-auto"
  >
    <button
      class="text-xl mb-4 md:hidden self-end"
      @click="emit('toggle-sidebar')"
    >
      ✖
    </button>
    <slot />
  </aside>
</template>
