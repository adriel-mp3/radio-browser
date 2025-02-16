<script setup lang="ts">
import type {
  RadioStation,
  UpdateFavoriteRadio,
  TogglePlayBack,
  UpdateFavoriteRadioPayload,
  DeleteFavoriteRadio,
} from "@/types/radio";
import { inject, ref } from "vue";
import RadioCard from "@/components/RadioCard.vue";
import EditRadioModal from "./EditRadioModal.vue";

defineProps<{
  radio: RadioStation;
  isPlaying: boolean;
}>();

const isEditModalOpen = ref(false);
const updateFavoriteRadio = inject(
  "updateFavoriteRadio",
) as UpdateFavoriteRadio;
const deleteFavoriteRadio = inject<DeleteFavoriteRadio>("deleteFavoriteRadio");
const togglePlayback = inject<TogglePlayBack>("togglePlayback");

const handleEditModalSubmit = (payload: UpdateFavoriteRadioPayload) => {
  updateFavoriteRadio(payload);
  isEditModalOpen.value = false;
};
</script>

<template>
  <RadioCard>
    <template #label>
      <div class="flex items-center gap-2">
        <img :src="radio.favicon" alt="Favicon" class="w-5 h-5 rounded" />
        <h3 class="text-lg font-semibold">{{ radio.name }}</h3>
      </div>
      <p class="text-sm text-neutral-300">{{ radio.country }}</p>
    </template>
    <span v-if="isPlaying" class="text-red-500 ml-2">🔥 Tocando agora</span>
    <template #actions>
      <div class="flex gap-3 mt-2 sm:mt-0">
        <button
          class="text-green-400"
          :aria-label="isPlaying ? 'Play' : 'Pause'"
          data-testid="play-button"
          @click="togglePlayback(radio)"
        >
          {{ isPlaying ? "⏸" : "▶" }}
        </button>
        <button
          @click="isEditModalOpen = !isEditModalOpen"
          data-testid="edit-button"
          class="text-yellow-400"
        >
          ✏
        </button>
        <EditRadioModal
          :is-open="isEditModalOpen"
          :radio="radio"
          @close="isEditModalOpen = false"
          @submit="handleEditModalSubmit"
        />
      </div>
      <button
        class="text-red-400 hover:text-red-500 transition"
        @click="deleteFavoriteRadio(radio)"
      >
        🗑
      </button>
    </template>
  </RadioCard>
</template>
