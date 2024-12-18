import { fileURLToPath, URL } from 'node:url'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import viewport from 'postcss-mobile-forever'

import { defineConfig } from 'vite'

// 按需引入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

export default defineConfig({

  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        // autoprefixer(),
        // https://github.com/wswmsword/postcss-mobile-forever
        viewport({
          appSelector: '#app',
          viewportWidth: 750,
          maxDisplayWidth: 1200,
          // rootContainingBlockSelectorList: [
          //   'van-tabbar',
          //   'van-popup',
          // ],
          border: true,
        }),
      ],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    // port: 3000,
    proxy: {
      // 在此处为需要解决跨域的 API 配置代理
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '') // 去掉 /api 前缀
      }
    }
  }
})
