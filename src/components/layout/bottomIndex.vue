<template>
  <section
    v-if="blok.body.length > 0"
    class="bottom max-w-prose flex flex-wrap mx-auto rounded-t-md"
    :style="`background-color: ${blok.color.color}`"
  >
    <div class="w-full h-full flex flex-col justify-center items-center -m-2">
      <div class="flex flex-wrap justify-center items-center">
        <component
          v-for="component in blok.body"
          :key="component._uid"
          :is="component.component"
          :blok="component"
          class="m-2"
          :class="[
            {
              'h-full': unicSet(component.component, 'media'),
            },
          ]"
        />
      </div>
      <span
        class="m-2 text-center"
        v-text="`© ${currentYear} - Agostina Dimaio`"
      />
    </div>
  </section>
</template>
<script>
import paragraph from "../paragraphIndex.vue";
import media from "../mediaIndex.vue";
import link from "../linkIndex.vue";
export default {
  components: { paragraph, media, link },
  inject: ["unicSet"],
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const filterComponent = (componentName, exclude = false) => {
      return props.blok.body.filter((comp) => {
        if (exclude) return comp.component !== componentName;
        else return comp.component === componentName;
      });
    };
    const currentYear = new Date().getFullYear();
    return {
      currentYear,
      filterComponent,
    };
  },
};
</script>
