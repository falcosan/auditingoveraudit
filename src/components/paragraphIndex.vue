<template>
  <div :class="[{ 'rounded-md shadow-md bg-gray-50': blok?.card }]">
    <Markdown
      class="markdown"
      :class="{ 'p-5': blok?.card }"
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
