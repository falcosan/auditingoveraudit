import { StoryblokVue, apiPlugin } from "@storyblok/vue";

const StoryblokConfig = {
  accessToken: import.meta.env.DEV
    ? import.meta.env.VITE_STORYBLOK_PREVIEW
    : import.meta.env.VITE_STORYBLOK_PUBLIC,
  bridge: import.meta.env.DEV,
  use: [apiPlugin],
};

export { StoryblokVue, StoryblokConfig };
