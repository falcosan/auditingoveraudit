<template>
  <li>
    <div
      :class="`${
        removeBackticks(blok.drop_text) ? 'flex flex-col' : 'list-none'
      }`"
    >
      <div
        class="w-full"
        :class="{
          'flex items-center': removeBackticks(blok.drop_text),
        }"
      >
        <Icon
          v-if="removeBackticks(blok.drop_text)"
          class="flex-none mr-2 transition"
          :class="[
            { 'transform rotate-90': showDropText },
            {
              'cursor-pointer': removeBackticks(blok.drop_text),
            },
          ]"
          icon="bx:chevron-right"
          width="20"
          height="20"
          @click="toggleDropText(blok)"
        />
        <paragraph
          :class="{
            'cursor-pointer': removeBackticks(blok.drop_text),
          }"
          :blok="blok"
          @click="toggleDropText(blok)"
        />
      </div>
      <paragraph
        v-if="removeBackticks(blok.drop_text) && showDropText"
        class="pt-5"
        :blok="blok"
        source="drop_text"
      />
    </div>
  </li>
</template>
<script>
import { ref, inject } from "vue";
import { Icon } from "@iconify/vue";
import paragraph from "./paragraphIndex.vue";
export default {
  components: { Icon, paragraph },
  props: {
    blok: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const removeBackticks = inject("removeBackticks");
    const showDropText = ref(false);
    const toggleDropText = (item) => {
      if (removeBackticks(item.drop_text)) {
        showDropText.value = !showDropText.value;
      }
    };
    return {
      showDropText,
      toggleDropText,
      removeBackticks,
    };
  },
};
</script>
