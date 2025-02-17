import { ref, computed } from "vue";
import type { RadioStation } from "@/types/radio";
import { RadioService } from "@/services/radio";
import { debounce } from "@/utils/debounce";
import { useAudioPlayer } from "@/composables/useAudioPlayer";
import { useLocalStorage } from "@/composables/useLocalStorage";
import { STORAGE_KEYS } from "@/constants/storageKeys";

export function useRadioStation() {
  const { pause, play } = useAudioPlayer();
  const isLoading = ref(false);
  const radios = ref<RadioStation[]>([]);
  const playingRadioStation = ref<RadioStation | null>();
  const search = ref("");
  const page = ref(1);
  const favoriteSearch = ref("");

  const favoriteRadios = useLocalStorage<RadioStation[]>(
    STORAGE_KEYS.FAVORITE_RADIOS,
    [],
  );

  const addFavoriteRadio = (selectedRadio: RadioStation) => {
    const isAlreadyFavorite = favoriteRadios.value.some(
      (favoriteStation) =>
        favoriteStation.stationuuid === selectedRadio.stationuuid,
    );

    if (!isAlreadyFavorite) {
      favoriteRadios.value.push(selectedRadio);
    }
  };

  const deleteFavoriteRadio = ({ stationuuid }: RadioStation) => {
    const isPlayingStation =
      playingRadioStation.value?.stationuuid === stationuuid;

    if (isPlayingStation) {
      pause();
      playingRadioStation.value = null;
    }

    favoriteRadios.value = favoriteRadios.value.filter(
      (favoriteStation) => favoriteStation.stationuuid !== stationuuid,
    );
  };

  const updateFavoriteRadio = (updatedRadio: RadioStation) => {
    const index = favoriteRadios.value.findIndex(
      (fav) => fav.stationuuid === updatedRadio.stationuuid,
    );

    if (index !== -1) {
      favoriteRadios.value[index] = updatedRadio;
    }
  };

  const getStations = async () => {
    try {
      isLoading.value = true;

      const limit = 10;
      const offset = (page.value - 1) * limit;
      const params = {
        limit,
        offset,
        name: search.value,
      };
      const { data } = await RadioService.getStations(params);
      radios.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  const debouncedGetStations = debounce(getStations, 450);

  const changePage = (direction: "next" | "prev") => {
    if (direction === "next") page.value++;
    if (direction === "prev" && page.value > 1) page.value--;

    getStations();
  };

  const togglePlayback = (radio: RadioStation) => {
    const isSameMusic =
      playingRadioStation.value?.stationuuid === radio.stationuuid;

    if (isSameMusic) {
      pause();
      playingRadioStation.value = null;
      return;
    }

    playingRadioStation.value = radio;
    play(playingRadioStation.value.url_resolved);
  };

  const filteredFavoriteRadios = computed(() => {
    if (!favoriteSearch.value) return favoriteRadios.value;
    return favoriteRadios.value.filter((radio) =>
      radio.name.toLowerCase().includes(favoriteSearch.value.toLowerCase()),
    );
  });

  return {
    isLoading,
    radios,
    favoriteRadios,
    playingRadioStation,
    search,
    page,
    debouncedGetStations,
    changePage,
    filteredFavoriteRadios,
    favoriteSearch,
    addFavoriteRadio,
    togglePlayback,
    updateFavoriteRadio,
    deleteFavoriteRadio,
  };
}
