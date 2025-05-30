import { createRouter, createWebHistory } from "vue-router";

// Import components
import HomeView from "./views/HomeView.vue";
import SkillView from "./views/SkillView.vue";
import CvView from "./views/CvView.vue";
import ExperienceView from "./views/ExperienceView.vue";
import ProjectsView from "./views/ProjectsView.vue";
import EngVideoView from "./views/EngVideoView.vue";
import NotFoundView from "./views/NotFoundView.vue";

// Nested components
import ADSecurityProject from "./views/projects/ADSecurityProject.vue";
import MultisiteProject from "./views/projects/MultisiteProject.vue";
import NetworkSecurityProject from "./views/projects/NetworkSecurityProject.vue";
import PosterProject from "./views/projects/PortfolioProject.vue";
import PortfolioProject from "./views/projects/PortfolioProject.vue";
import TBDProject from "./views/projects/TBDProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/competences",
      name: "Skill",
      component: SkillView,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/cv",
      name: "CV",
      component: CvView,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/about",
      name: "About me",
      component: ExperienceView,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/projets",
      name: "Projects",
      component: ProjectsView,
      meta: { attached: true }, // Show NavBar and FooterBar
      children: [
        {
          path: "security",
          component: ADSecurityProject,
        },
        {
          path: "multisite",
          component: MultisiteProject,
        },
        {
          path: "network-security",
          component: NetworkSecurityProject,
        },
        {
          path: "portfolio",
          component: PortfolioProject,
        },
        {
          path: "poster",
          component: PosterProject,
        },
        {
          path: "tobedecided",
          component: TBDProject,
        },
      ],
    },
    {
      path: "/engvideo",
      name: "Video en anglais",
      component: EngVideoView,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/page-not-found",
      name: "Not Found",
      component: NotFoundView,
      meta: { attached: true },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/page-not-found",
    },
  ],
});

router.beforeEach((to, from) => {
  console.debug(`Navigation event: ${from.fullPath} -> ${to.fullPath}`);
});
export default router;
