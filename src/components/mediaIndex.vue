<template>
  <img
    class="object-cover object-center"
    :src="blok.media.filename"
    draggable="false"
  />
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
