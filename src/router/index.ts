import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";
import CaseStudies from "@/pages/CaseStudies.vue";
import Blog from "@/pages/Blog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/case-studies", name: "CaseStudies", component: CaseStudies },
    { path: "/blog", name: "blog", component: Blog },
    {
      path: "/case-studies/erp-business-management-system",
      alias: "/case-study/erp",
      name: "ERPBusinessManagementSystem",
      component: () =>
        import("@/pages/case-studies/ERPBusinessManagementSystem.vue"),
    },
    {
      path: "/case-studies/gis-property-digitization-platform",
      alias: "/case-study/gis",
      name: "GISPropertyDigitizationPlatform",
      component: () =>
        import("@/pages/case-studies/GISPropertyDigitizationPlatform.vue"),
    },
    {
      path: "/case-study/matalas",
      alias: "/case-studies/matalas",
      name: "MATALAS",
      component: () => import("@/pages/case-studies/MATALAS.vue"),
    },
    { path: "/contact", name: "contact", component: Contact },
  ],
});

export default router;
