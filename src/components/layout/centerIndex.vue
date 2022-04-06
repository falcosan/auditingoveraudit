<template>
  <section v-if="blok.body.length > 0" class="center w-full">
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
import container from "../containerIndex.vue";
export default {
  components: { container },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
