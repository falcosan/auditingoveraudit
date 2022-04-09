<template>
  <div
    v-if="removeBackticks(blok[source])"
    :class="[
      { 'max-w-prose mx-auto': blok.space_center },
      { 'text-center': blok.text_center },
      { 'rounded-md shadow-md': blok.background.color },
    ]"
    :style="`background-color: ${blok.background.color}`"
  >
    <Markdown
      class="markdown"
      :class="{ 'p-2.5 md:p-5': blok.background.color }"
      :style="`color: ${blok.color.color}`"
      :source="text"
      breaks
      emoji
      html
      linkify
    />
  </div>
</template>
<script>
import { computed } from "vue";
import Markdown from "vue3-markdown-it";
export default {
  components: {
    Markdown,
  },
  inject: ["removeBackticks"],
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
    source: {
      type: String,
      default: "text",
    },
  },
  setup(props) {
    const text = computed(() =>
      props.blok[props.source].replace(/` `/g, "</br>")
    );
    return {
      text,
    };
  },
};
</script>
