import { createApp } from "vue";
import App from './App.vue';
import router from "./routes";

// Main application
createApp(App)
    .use(router)
    .mount('#app')