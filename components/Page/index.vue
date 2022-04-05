<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div v-editable="blok">
    <component
      :is="element.component"
      v-for="element in blok.body"
      :key="element._id"
      :blok="element"
    />
  </div>
</template>
