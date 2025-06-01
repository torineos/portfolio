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
import PosterProject from "./views/projects/PosterProject.vue";
import PythonProject from "./views/projects/PythonProject.vue";
import NetworkSchemeProject from "./views/projects/NetworkSchemeProject.vue";
import DevWebProject from "./views/projects/DevWebProject.vue";
import PortfolioProject from "./views/projects/PortfolioProject.vue";
import TBDProject from "./views/projects/TBDProject.vue";
import StageMyMSPProject from "./views/projects/StageMyMSPProject.vue";
import StageILLProject from "./views/projects/StageILLProject.vue";

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
          path: "tobedecided",
          component: TBDProject,
        },
      ],
    },
    {
      path: "/project/internship-my-msp",
      name: "StageMyMSP",
      component: StageMyMSPProject,
      meta: { attached: true },
    },
    {
      path: "/project/internship-ill",
      name: "StageILL",
      component: StageILLProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-poster",
      name: "ProjectPoster",
      component: PosterProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-network",
      name: "ProjectNetworkScheme",
      component: NetworkSchemeProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-python-dev",
      name: "ProjectPython",
      component: PythonProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-webapp",
      name: "ProjectDevWeb",
      component: DevWebProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-multisite",
      name: "ProjectMultisite",
      component: MultisiteProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-windows-security",
      name: "ProjectWinSec",
      component: ADSecurityProject,
      meta: { attached: true },
    },
    {
      path: "/project/project-portfolio",
      name: "ProjectPortfolio",
      component: PortfolioProject,
      meta: { attached: true }, // Show NavBar and FooterBar
    },
    {
      path: "/project/project-network-security",
      name: "ProjectNetSec",
      component: NetworkSecurityProject,
      meta: { attached: true },
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
