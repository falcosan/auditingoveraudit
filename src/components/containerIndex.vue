<template>
  <div
    v-if="blok.body.length > 0"
    class="w-full flex flex-col space-y-5 p-5 md:p-10"
    :style="`background-color: ${blok.color.color}`"
  >
    <component
      v-for="component in blok.body"
      class="w-full"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
    <slot />
  </div>
</template>
<script>
import paragraph from "./paragraphIndex.vue";
import media from "./mediaIndex.vue";
import link from "./linkIndex.vue";
export default {
  components: {
    paragraph,
    media,
    link,
  },
  inject: ["removeBackticks"],
  props: {
    blok: {
      type: Object,
      default: () => {},
    },
  },
  setup() {
    return {};
  },
};
</script>
