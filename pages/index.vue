<script setup>
import { useStoryApi, useStoryBridge } from "../services/stroyblok";
const api = useStoryApi();
const { data } = await api.get("cdn/stories/home");
onMounted(() => {
  useStoryBridge(state.story.id, (event) => {
    state.story = event;
  });
});
const state = reactive({
  story: data.story,
});
</script>
<template>
  <div>
    <Page :blok="state" />
  </div>
</template>
