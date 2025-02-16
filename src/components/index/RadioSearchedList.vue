<script setup lang="ts">
import type { RadioStation } from "@/types/radio";
import RadioSearchedCard from "./RadioSearchedCard.vue";
import { STORAGE_KEYS } from "@/constants/storageKeys";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { inject } from "vue";

defineProps<{
  radios: RadioStation[];
}>();

const favoriteRadios = useLocalStorage<RadioStation[]>(
  STORAGE_KEYS.FAVORITE_RADIOS,
  [],
);
const playingRadioStation = inject<RadioStation | null>("playingRadioStation");

const isFavorite = (radio: RadioStation) => {
  return favoriteRadios.value.some(
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
