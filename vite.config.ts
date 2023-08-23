import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/variables.scss";'
      }
    }
  },
  // 配置前端服务地址和端口
	server: {
    host: '0.0.0.0',//自定义主机名
    port: 8000,//自定义端口
    // 是否开启 https
    https: false,
  },
  // 设置反向代理，跨域
  // proxy: {
  // 	'/api': {
  // 		// 后台地址
  // 		target: 'http://127.0.0.1:8000/',
  // 		changeOrigin: true,
  // 		rewrite: path => path.replace(/^\/api1/, '')
  // 	}
})
