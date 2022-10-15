import { createApp } from "vue";
import { createPinia } from "pinia";
import { loadFonts } from "./plugins/webfontloader";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./plugins/router";

loadFonts();

createApp(App).use(vuetify).use(createPinia()).use(router).mount("#app");
