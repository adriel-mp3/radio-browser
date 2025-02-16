<script setup lang="ts">
import { defineProps } from "vue";

// Props recebendo um array de tags
defineProps<{
  tags: string[];
}>();
</script>

<template>
  <div v-if="tags.length" class="flex flex-wrap gap-1 ml-4">
    <span
      v-for="tag in tags.slice(0, 10)"
      :key="tag"
      class="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
    >
      {{ tag.trim() }}
    </span>
    <span v-if="tags.length > 10" class="text-gray-400 text-xs">
      + mais
    </span>
  </div>
</template>
