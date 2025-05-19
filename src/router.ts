import { createRouter, createWebHistory } from 'vue-router';

// Import components
import HomeView from './views/HomeView.vue';
import SkillView from './views/SkillView.vue';
import CvView from './views/CvView.vue';
import ProjectsView from './views/ProjectsView.vue';
import EngVideoView from './views/EngVideoView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        meta: { attached: true },
    },
    {
        path: '/competences',
        name: 'Skill',
        component: SkillView,
        meta: { attached: true },
    },
    {
        path: '/cv',
        name: 'CV',
        component: CvView,
        meta: { attached: true },
    },
    {
        path: '/about',
        name: 'About me',
        component: ProfExpView,
        meta: { attached: true },
    },
    {
        path: '/projets',
        name: 'Projects',
        component: ProjectsView,
        meta: { attached: true },
    },
    {
        path: '/engvideo',
        name: 'Video en anglais',
        component: EngVideoView,
        meta: { attached: true },
    }
    ]
})

router.beforeEach((to, from) => {
    console.debug(`Navigation event: ${from.fullPath} -> ${to.fullPath}`);
  });
export default router;