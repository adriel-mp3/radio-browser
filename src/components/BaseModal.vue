<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{ title: string; isOpen: boolean }>();
const emit = defineEmits(["close", "confirm"]);
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-modal="true"
    >
      <div class="bg-gray-800 p-5 rounded-lg w-96 shadow-lg" tabindex="-1">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-white text-lg font-semibold">{{ title }}</h2>
          <button @click="emit('close')" class="text-red-400 text-xl">
            ✖
          </button>
        </div>

        <slot></slot>

        <div class="mt-4 flex justify-end gap-3">
          <button
            @click="emit('close')"
            class="bg-gray-700 px-3 py-1 rounded text-white"
          >
            Cancelar
          </button>
          <button
            @click="emit('confirm')"
            data-testid="confirm-button"
            class="bg-green-600 px-3 py-1 rounded text-white"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
