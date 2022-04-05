import { defineNuxtConfig } from "nuxt3";
 
export default defineNuxtConfig({
  buildModules: [
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_API_TOKEN }],
  ]
});