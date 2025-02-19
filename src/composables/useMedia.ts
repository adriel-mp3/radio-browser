import { ref, watchEffect } from "vue";

export const useMedia = (query: string) => {
  const matches = ref<boolean>(true);

  watchEffect((onInvalidate) => {
    const media = window.matchMedia(query);

    if (media.matches !== matches.value) {
      matches.value = media.matches;
    }

    const onChange = () => {
      matches.value = media.matches;
    };

    media.addEventListener("change", onChange);

    onInvalidate(() => {
      media.removeEventListener("change", onChange);
    });
  });

  return matches;
};
