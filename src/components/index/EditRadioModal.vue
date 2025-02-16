<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import BaseModal from "@/components/BaseModal.vue";
import type { RadioStation } from "@/types/radio";

const props = defineProps<{ radio: RadioStation; isOpen: boolean }>();
const emit = defineEmits(["close", "submit"]);

const name = ref(props.radio.name);
const country = ref(props.radio.country);

const saveChanges = () => {
  emit("submit", { ...props.radio, name: name.value, country: country.value });
};

</script>

<template>
  <BaseModal :title="'Editar Rádio'" :is-open="isOpen" @close="emit('close')" @confirm="saveChanges">
    <div class="flex flex-col gap-3">
      <label class="text-white" for="name">Nome da Rádio</label>
      <input v-model="name" id="name" class="p-2 rounded bg-gray-700 text-white w-full" />

      <label class="text-white" for="country">País</label>
      <input v-model="country" id="country" class="p-2 rounded bg-gray-700 text-white w-full" />
    </div>
  </BaseModal>
</template>
