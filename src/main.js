import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { StoryblokVue, StoryblokConfig } from "./api/storyblok";

import "./assets/index.css";

const app = createApp(App);
app.use(router);
app.use(StoryblokVue, StoryblokConfig);
app.mount("#auditingoveraudit");
