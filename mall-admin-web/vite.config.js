// vite.config.js
const resolve = path.resolve;
import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import path from "path";
export default defineConfig({
  plugins: [
    createVuePlugin(/*options*/),
  ],

  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    //导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会干扰 IDE 和类型支持。
    alias: [
      { find: "@", replacement: resolve(__dirname, "./src") },

    ],
  },
  build: {
    // sourcemap: true,
    minify: false,
  },
  server: {
    port: 4200,
  },
});

// 这里的 options 可配置 vueTemplateOptions， jsx
// 详情查看 https://github.com/underfin/vite-plugin-vue2
