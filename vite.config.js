import Inspect from 'vite-plugin-inspect'

// импорт для сборки хеадер и футер
import handlebars from 'vite-plugin-handlebars'

// импортируем значение для единого пути к файлам
import path from 'path'

// импортируем модуль resolve
import { resolve } from 'path'

// оптимизация изображений
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { defineConfig } from 'vite'



export default defineConfig(() => {
	return {
		// присваивае новое имя для исходной  папки build  вместо  public (переименовать ее) (publicDir: 'build',)
	//   publicDir: 'build',
	  esbuild: {
		// фукнция обработки jsx файлов компонентов (components)
		 jsxFactory: 'create',
		 jsxInject: 'import { create } from "./js.mjs/components.mjs"'

	  },
	  plugins: [
		 Inspect(),
		 ViteImageOptimizer({
			png: {
				quality: 40,
			 },
			 jpeg: {
				quality: 40,
			 },
			 jpg: {
				quality: 40,
			 },
			 tiff: {
				quality: 40,
			 },
			 // gif does not support lossless compression
			 gif: {},
			 webp: {
				lossless: true,
			 },
		 }),
		 handlebars({
			partialDirectory: resolve(__dirname, './src/partials'),
		 }) // Добавляем плагин handlebars здесь
	  ],
		//   задаем параметры сборки для нескольких страниц
	  build: {
			// root: 'src',
			// outDir: 'dist', //папка для выходных файлов
			// assetsDir: 'assets', //папка для ассетов внутри dir
    		// emptyOutDir: true, // also necessary
			rollupOptions: {
			input: {
			// перечисляем все наши доступные страницы
			  main: resolve(__dirname, 'index.html'),
			//   book: resolve(__dirname, 'pages/book/book.html'),
			},
		
			// output: {
			// 	dir: '../public/js',
			// 	entryFileNames: 'app-[name].mjs',
			// 	assetFileNames: 'app-[name].scss',
			// 	chunkFileNames: "chunk-[name].mjs",
			// 	manualChunks: undefined,
      //   assetFileNames: (assetInfo) => {
      //     // Сохранение структуры папок
      //     if (assetInfo.name.startsWith('assets/')) {
      //       return assetInfo.name;
      //     }
      //     return 'assets/[name]-[hash][extname]';
      //   },
      // },

		 },
	  },
	  resolve: {
		 alias: {
		//   задаем единый путь к файлам
			'@': path.resolve(__dirname, './src'),
			// '@@': path.resolve(__dirname, './src/assets'),
		 },
	  },
	  css: {
		preprocessorOptions: {
		  scss: {
			// additionalData: '@import "./src/";', // путь к вашему файлу с миксинами
			 api: 'modern', // Указываем новый API\
			 additionalData: `
				@use '@/styles/abstract/index' as *;
			  `,
		  },
		},
	 },
	 server: {
      port: 3000, // Укажите нужный порт
    },

	};
 });
