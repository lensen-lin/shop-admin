import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import eslint from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

const pathSrc = path.resolve(__dirname, 'src')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint({
      
    }),
    vueJsx(),
    AutoImport({
      resolvers: [
        // 自动导入 element-plus 组件
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon",
        }),
      ],
      dts: path.resolve(pathSrc, 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"],
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
      ],
      dts: path.resolve(pathSrc, 'components.d.ts'),

    }),
    Icons({
      autoInstall: true,
    }),
  ],
  
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  server: {
    proxy: {
      // 选项写法
      "/rtx-admin": {
        target: "http://ectbao.imdo.co",
        // 兼容基于名字的虚拟主机
        // a.com localhost:xxx
        // b.com localhost:xxx
        // HTTP 请求头部的 origin 字段
        // 默认的 origin 是真实的 origin: localhost:3000
        // changeOrigin: true 代理服务会把 origin 修改 为目标地址 http://jsonplaceholder.typicode.com
        changeOrigin: true,

        // 路径重写
        // http://jsonplaceholder.typicode.com/api/xxx
        // /api/xxx => http://jsonplaceholder.typicode.com/xxx
        // rewrite: (path) => path.replace(/^\/rtx-admin/, ""),
      },
    },
  },
});
