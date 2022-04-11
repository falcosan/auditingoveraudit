<template>
  <div
    v-if="blok.body.length > 0"
    :class="[
      'h-full',
      container
        ? { 'p-5 rounded-md shadow-md': blok.color.color }
        : 'p-5 md:p-10',
      { 'flex justify-center': blok.center },
    ]"
    :style="`background-color: ${blok.color.color}`"
  >
    <template v-if="blok.title">
      <span class="text-xl" v-text="blok.title" />
      <hr class="my-2.5" />
    </template>
    <div
      :class="[
        'grid sm:flex',
        { '-my-2.5 sm:-mx-2.5': !container },
        { 'max-w-prose': blok.center },
        !!+blok.direction ? 'w-full h-full flex-col' : 'flex-row flex-wrap',
      ]"
    >
      <div
        :class="[
          container ? 'h-full' : 'my-2.5 sm:mx-2.5',
          { 'flex-auto sm:w-3/12': !!!+blok.direction },
        ]"
        v-for="component in blok.body"
        :key="component._uid"
      >
        <component :is="component.component" :blok="component" container />
      </div>
      <div
        v-if="hasSlot('content')"
        :class="[
          'text-center',
          { 'my-2.5 sm:mx-2.5': !container },
          { 'flex-auto sm:w-3/12': !!!+blok.direction },
        ]"
      >
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
<script>
import utils from "../mixins/utils";
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
    container: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { hasSlot } = utils();
    return { hasSlot };
  },
};
</script>
