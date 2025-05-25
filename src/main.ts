import { createApp } from "vue";
import { createI18n } from 'vue-i18n';
import App from '@/App.vue';
import router from "@/router";

// Main application
createApp(App).use(router).mount('#app');