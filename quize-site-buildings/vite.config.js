/* eslint-disable no-undef */
import { defineConfig } from vite;
import react from @vitejs/plugin-react;
import Inspect from vite-plugin-inspect;
// import { resolve } from path;

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Inspect()],
	server: {
		open: true,
		port: 8684,
		//+все заголовки попадают в response
		// headers: {
		// 	a: v,
		// },
		//+ прокси
		// proxy: {
		// 	/products: https://dummyjson.com,

		// 	//++сложные конфиги роутов
		// 	/api: {
		// 		target: https://dummyjson.com,
		// 		changeOrigin: true,
		// 		rewrite: path => path.replace(/^\/api/, ),
		// 	},
		// },
	},
	build: {
		sourcemap: true,
		outDir: build,
		//+for multipage app
		// rollupOptions: {
		// 	input: {
		// 		main: resolve(__dirname, index.html),
		// 		login: resolve(__dirname, login/index.html),
		// 	},
		// },
	},
	css: {
		devSourcemap: true,
	},
	envPrefix: APP_,
	resolve: {
		alias: {
			app: /src/app,
			pages: /src/pages,
			features: /src/features,
			widgets: /src/widgets,
			entities: /src/entities,
			shared: /src/shared,
		},
	},
});

