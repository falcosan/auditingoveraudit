<template>
  <div class="flex min-h-full items-center">
    <a class="h-full" :href="href" target="_blank">
      <Icon
        v-if="blok.icon"
        class="w-auto"
        :width="blok.icon_size ? `${blok.icon_size}rem` : 'auto'"
        :height="blok.icon_size ? `${blok.icon_size}rem` : 'auto'"
        :icon="blok.icon"
        :color="blok.icon_color.color"
      />
      <span v-else v-text="href" />
    </a>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: { Icon },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const href = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(props.blok.link)
      ? `mailto:${props.blok.link}`
      : props.blok.link;
    return {
      href,
    };
  },
};
</script>
