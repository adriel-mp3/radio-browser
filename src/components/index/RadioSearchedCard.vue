<script setup lang="ts">
import type { AddFavoriteRadio, RadioStation, TogglePlayBack } from "@/types/radio";
import { inject } from "vue";
import RadioCard from "../RadioCard.vue";

defineProps<{
  radio: RadioStation;
  isFavorite?: boolean;
  isPlaying?: boolean;
}>();

const addFavoriteRadio = inject<AddFavoriteRadio>("addFavoriteRadio");
const togglePlayback = inject<TogglePlayBack>("togglePlayback");
</script>

<template>
  <RadioCard>
    <template #label>
      <div class="flex items-center gap-2">
        <h3 class="text-sm">{{ radio.name }}</h3>
      </div>
    </template>
    <template #actions>
      <span v-if="isFavorite" class="text-blue-400 font-bold block">✔️</span>
      <button v-else @click="addFavoriteRadio(radio)" class="text-green-400">
        ➕
      </button>
      <button
          class="text-green-400"
          :aria-label="isPlaying ? 'Play' : 'Pause'"
          data-testid="play-button"
          @click="togglePlayback(radio)"
        >
          {{ isPlaying ? "⏸" : "▶" }}
        </button>
    </template>
  </RadioCard>
</template>
