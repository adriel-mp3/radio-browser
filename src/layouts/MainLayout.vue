<script setup lang="ts">
import { ref, watch } from "vue";
import MainHeader from "@/components/shared/MainHeader.vue";
import MainSideNav from "@/components/shared/MainSideNav.vue";
import { useMedia } from "@/composables/useMedia";

const isSidebarOpen = ref(true);
const isDesktop = useMedia("(min-width: 768px)");
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

watch(isDesktop, (newValue) => {
    isSidebarOpen.value = newValue;
  });
</script>

<template>
  <div class="flex h-screen bg-gray-900 text-white">
    <MainSideNav
      :is-sidebar-open="isSidebarOpen || isDesktop"
      @toggle-sidebar="toggleSidebar"
    >
      <slot name="sidebar" />
    </MainSideNav>

    <main class="flex-1 flex flex-col">
      <MainHeader @toggle-sidebar="toggleSidebar" />
      <slot name="main" />
    </main>
  </div>
</template>
