<script setup lang="ts">
import { provide } from "vue";
import { useRadioStation } from "@/composables/useRadioStation";
import MainLayout from "@/layouts/MainLayout.vue";
import SearchPagination from "@/components/index/SearchPagination.vue";
import RadioFavoriteList from "@/components/index/RadioFavoriteList.vue";
import RadioSearchedList from "@/components/index/RadioSearchedList.vue";
import RadioPlayingCard from "@/components/index/RadioPlayingCard.vue";
import EmptyRadioFavoriteList from "@/components/index/EmptyRadioFavoriteList.vue";

const {
  isLoading,
  radios,
  playingRadioStation,
  search,
  page,
  debouncedGetStations,
  changePage,
  favoriteSearch,
  filteredFavoriteRadios,
  favoriteRadios,
  addFavoriteRadio,
  deleteFavoriteRadio,
  updateFavoriteRadio,
  togglePlayback,
} = useRadioStation();

provide("addFavoriteRadio", addFavoriteRadio);
provide("deleteFavoriteRadio", deleteFavoriteRadio);
provide("updateFavoriteRadio", updateFavoriteRadio);
provide("playingRadioStation", playingRadioStation);
provide("togglePlayback", togglePlayback);
</script>

<template>
  <MainLayout>
    <template #sidebar>
      <input
        v-model="search"
        @input="debouncedGetStations"
        type="text"
        placeholder="Search here ..."
        class="w-full p-2 rounded bg-gray-700 text-white mb-4"
      />
      <p v-if="isLoading" class="text-gray-400 text-center my-4">
        🔄 Buscando rádios...
      </p>
      <RadioSearchedList :radios="radios" :favorite-radios="favoriteRadios" />
      <SearchPagination
        v-if="radios.length"
        :current-page="page"
        @change-page="changePage"
      />
    </template>

    <template #main>
      <main class="flex-1 flex flex-col">
        <section v-if="playingRadioStation" class="px-4 mt-4 mr-6">
          <h2 class="text-lg mb-2">🔥 Playing Now</h2>
          <RadioPlayingCard :radio="playingRadioStation" />
        </section>

        <section class="px-4 mt-4 pr-4">
          <div class="flex items-center flex-wrap justify-between mr-6">
            <h2 class="text-lg mb-2">🎹 Favorite Radios</h2>
            <input
              v-model="favoriteSearch"
              type="text"
              placeholder="Search favorite radio ..."
              class="p-2 rounded bg-gray-700 text-white mb-4 pr-4"
            />
          </div>
          <RadioFavoriteList
            class="max-h-[50vh] overflow-y-auto"
            v-if="filteredFavoriteRadios.length"
            :radios="filteredFavoriteRadios"
          />
          <EmptyRadioFavoriteList v-else />
        </section>
      </main>
    </template>
  </MainLayout>
</template>
