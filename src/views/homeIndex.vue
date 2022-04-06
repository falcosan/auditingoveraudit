<template>
  <div>{{ setStories }}</div>
</template>
<script>
import { useStoryblokApi } from "@storyblok/vue";
import { ref, computed } from "vue";
export default {
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
