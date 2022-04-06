import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Global from "./mixins/global.js";
import { StoryblokVue, StoryblokConfig } from "./api/storyblok";

import "./assets/index.css";

const app = createApp(App);
app.provide("unicSet", Global.unicSet);
app.provide("removeBackticks", Global.removeBackticks);
app.use(router);
app.use(StoryblokVue, StoryblokConfig);
app.mount("#auditingoveraudit");
