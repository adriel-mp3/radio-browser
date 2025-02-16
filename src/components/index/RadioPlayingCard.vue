<script setup lang="ts">
import type { RadioStation, TogglePlayBack } from "@/types/radio";
import RadioStationTags from "./RadioStationTags.vue";
import RadioCard from "../RadioCard.vue";
import { inject } from "vue";
const togglePlayback = inject<TogglePlayBack>("togglePlayback");
defineProps<{
  radio: RadioStation;
}>();
</script>

<template>
  <RadioCard class="bg-gray-700 py-6">
    <template #label>
      <div class="flex items-center gap-2">
        <img :src="radio.favicon" alt="Favicon" class="w-5 h-5 rounded" />
        <h3 class="text-lg font-semibold">{{ radio.name }}</h3>
      </div>
      <p class="text-sm text-neutral-300">{{ radio.country }}</p>
    </template>
    <template #actions>
      <button
        class="text-green-400"
        aria-label="Pause"
        data-testid="play-button"
        @click="togglePlayback(radio)"
      >
        ⏸
      </button>
    </template>
    <RadioStationTags :tags="radio.tags.split(',')" />
  </RadioCard>
</template>
