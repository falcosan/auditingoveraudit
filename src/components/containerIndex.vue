<template>
  <div
    v-if="blok.body.length > 0"
    class="w-full p-5 md:p-10"
    :style="`background-color: ${blok.color.color}`"
  >
    <div
      class="flex"
      :class="[
        { 'max-w-prose mx-auto': blok.center },
        !!+blok.direction
          ? 'flex-col space-y-5'
          : 'flex-col space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row items-center justify-between flex-wrap',
      ]"
    >
      <component
        v-for="component in blok.body"
        :key="component._uid"
        :is="component.component"
        :blok="component"
      />
      <slot />
    </div>
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
