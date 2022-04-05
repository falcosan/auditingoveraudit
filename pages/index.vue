<script setup>
import { useStoryApi, useStoryBridge } from "../services/stroyblok";
const story = ref({});
await useStoryApi()
  .get("cdn/stories/home")
  .then(({ data }) => (story.value = data.story));
onMounted(() => useStoryBridge(story.id, (event) => (story = event)));
</script>
<template>
  <div>
    <Page :blok="story" />
  </div>
</template>
