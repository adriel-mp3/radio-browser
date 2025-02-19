import { ref, watchEffect } from "vue";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const storedValue = localStorage.getItem(key);
  const data = ref<T>(storedValue ? JSON.parse(storedValue) : defaultValue);

  watchEffect(() => {
    localStorage.setItem(key, JSON.stringify(data.value));
  });

  return data;
}