<script setup lang="ts">
import type { RadioStation } from "@/types/radio";
import { inject } from "vue";
import RadioFavoriteCard from "./RadioFavoriteCard.vue";

defineProps<{
  radios: RadioStation[];
}>();

const playingRadioStation = inject<RadioStation | null>("playingRadioStation");
</script>

<template>
  <ul class="space-y-3 pr-4">
    <li v-for="radio in radios" :key="radio.stationuuid">
      <RadioFavoriteCard
        :radio="radio"
        :is-playing="playingRadioStation?.stationuuid === radio.stationuuid"
      />
    </li>
  </ul>
</template>
