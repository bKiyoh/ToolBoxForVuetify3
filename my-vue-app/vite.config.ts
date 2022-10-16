import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VuetifyResolver } from 'unplugin-vue-components/resolvers'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vuetify({ autoImport: true }),
		Components({
			resolvers:[
				VuetifyResolver(),
			],
			types:[],
			dts: true,
		}),
	],
	resolve:{
		alias:{
			'@':`${__dirname}src/`,
			'~':`${__dirname}public/`
		}
	}

})
