<template>
  <section v-if="blok.body.length > 0" class="bottom w-full mt-auto">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <component
        v-for="component in blok.body"
        :key="component._uid"
        :is="component.component"
        :blok="component"
      >
        <template #content>
          <span
            class="text-center font-bold"
            v-text="`© ${currentYear} - Auditing Overaudit`"
          />
        </template>
      </component>
    </div>
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
  setup() {
    const currentYear = new Date().getFullYear();
    return {
      currentYear,
    };
  },
};
</script>
