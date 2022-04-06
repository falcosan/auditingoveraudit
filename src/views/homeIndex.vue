<template>
  <template v-for="story in setStories" :key="story.id">
    <main class="relative z-10">
      <component
        v-for="component in story.content.body"
        :key="component._uid"
        :is="component.component"
        class="p-5 md:p-10"
        :blok="component"
      />
    </main>
  </template>
</template>
<script>
import top from "../components/layout/topIndex.vue";
import center from "../components/layout/centerIndex.vue";
import bottom from "../components/layout/bottomIndex.vue";
import { useStoryblokApi } from "@storyblok/vue";
import { ref, computed } from "vue";
export default {
  components: { top, center, bottom },
  provide() {
    return {
      language: computed(() => this.language),
    };
  },
  setup() {
    const storyblok = useStoryblokApi();
    const stories = ref({});
    const language = ref(localStorage.getItem("lang") || "en");
    const token = import.meta.env.DEV
      ? import.meta.env.VITE_STORYBLOK_PREVIEW
      : import.meta.env.VITE_STORYBLOK_PUBLIC;
    fetch(`https://api.storyblok.com/v1/cdn/spaces/me/?token=${token}`).then(
      async (res) => {
        const { space } = await res.json();
        stories.value = space.language_codes.reduce(
          (acc, val) => {
            acc[val] = [];
            return acc;
          },
          { en: [] }
        );
        storyblok
          .get("cdn/stories", {
            language: language.value,
          })
          .then(({ data }) => {
            stories.value[language.value] = data.stories;
            Object.keys(stories.value).forEach((currentLang) => {
              if (stories.value[currentLang].length === 0) {
                storyblok
                  .get("cdn/stories", {
                    language: currentLang,
                  })
                  .then(({ data }) => {
                    stories.value[currentLang] = data.stories;
                  });
              }
            });
          });
      }
    );
    const setStories = computed(() => stories.value[language.value]);
    return {
      language,
      setStories,
    };
  },
};
</script>
