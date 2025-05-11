import { createApp } from "vue";
import App from '@/App.vue';
import router from "@/router";

import CvView from "./views/CvView.vue";

// Main application
createApp(App)
    .use(router)
    .component('Cv', CvView)
    .mount('#app') 