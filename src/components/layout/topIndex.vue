<template>
  <section
    v-if="blok.body.length > 0"
    class="top flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between"
  >
    <component
      v-for="component in blok.body"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
  </section>
</template>
<script>
import media from "../mediaIndex.vue";
import paragraph from "../paragraphIndex.vue";
export default {
  components: { media, paragraph },
  inject: ["unicSet"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
