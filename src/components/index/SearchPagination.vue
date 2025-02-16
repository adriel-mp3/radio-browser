<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps<{ currentPage: number; totalPages?: number }>();
const emit = defineEmits(["change-page"]);

const goToPrevPage = () => {
  if (props.currentPage > 1) {
    emit("change-page", "prev");
  }
};

const goToNextPage = () => {
  emit("change-page", "next");
};
</script>

<template>
  <div class="flex justify-between mt-4">
    <button
      @click="goToPrevPage"
      :disabled="currentPage === 1"
      class="bg-gray-700 px-3 py-1 rounded text-white disabled:opacity-50"
    >
      ⬅
    </button>
    <span class="text-white">Página {{ currentPage }}</span>
    <button @click="goToNextPage" class="bg-gray-700 px-3 py-1 rounded text-white">
      ➡
    </button>
  </div>
</template>
