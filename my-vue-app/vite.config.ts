import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VuetifyResolver } from "unplugin-vue-components/resolvers";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  base: "/ToolBoxForVuetify3/",
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    Components({
      resolvers: [VuetifyResolver()],
      types: [],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": `${__dirname}src/`,
      "~": `${__dirname}public/`,
    },
  },
});
