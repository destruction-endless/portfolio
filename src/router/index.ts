import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import CaseStudy from "@/pages/CaseStudy.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/case-study", name: "caseStudy", component: CaseStudy },
    { path: "/contact", name: "contact", component: Contact },
  ],
});

export default router;
