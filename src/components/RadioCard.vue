<script setup lang="ts"></script>
<template>
  <div class="w-full bg-gray-600 p-3 rounded flex items-center justify-between">
    <div>
      <slot name="label"></slot>
    </div>

    <div class="flex-1 mx-4">
      <slot></slot>
    </div>

    <div class="flex gap-3">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
