import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from "@tailwindcss/vite";
import { lezer } from "@lezer/generator/rollup";
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig({
    plugins: [vue(), vueDevTools(), tailwindcss(), lezer()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      }
    }
})