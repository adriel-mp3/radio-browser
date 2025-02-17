<script setup lang="ts">
import type { RadioStation } from "@/types/radio";
import RadioSearchedCard from "./RadioSearchedCard.vue";
import { inject } from "vue";

const props = defineProps<{
  radios: RadioStation[];
  favoriteRadios: RadioStation[];
}>();


const playingRadioStation = inject<RadioStation | null>("playingRadioStation");

const isFavorite = (radio: RadioStation) => {
  return props.favoriteRadios.some(
    (favoriteRadio) => favoriteRadio.stationuuid === radio.stationuuid,
  );
};
</script>

<template>
  <ul class="space-y-2">
    <li v-for="searchedRadio in radios" :key="searchedRadio.stationuuid">
      <RadioSearchedCard
        :radio="searchedRadio"
        :is-favorite="isFavorite(searchedRadio)"
        :is-playing="playingRadioStation?.stationuuid === searchedRadio.stationuuid"
      />
    </li>
  </ul>
</template>
