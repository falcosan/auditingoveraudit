<template>
  <div class="flex justify-end">
    <img
      class="overflow-hidden rounded-md transition shadow hover:shadow-md object-cover object-center"
      :src="blok.media.filename"
      draggable="false"
      :style="`width: ${blok.width}`"
    />
  </div>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
};
</script>
