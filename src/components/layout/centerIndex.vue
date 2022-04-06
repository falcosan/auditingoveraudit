<template>
  <section v-if="blok.body.length > 0" class="center flex flex-col space-y-5">
    <component
      v-for="component in blok.body"
      class="w-full"
      :key="component._uid"
      :is="component.component"
      :blok="component"
    />
  </section>
</template>
<script>
import paragraph from "../paragraphIndex.vue";
export default {
  components: { paragraph },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
