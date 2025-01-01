import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home/Home.vue";
import User from "../components/User/User.vue";
import Github from "../components/Github/Github.vue";
import About from "../components/About/About.vue";
import Contact from "../components/Contact/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:userid",
    name: "User",
    component: User,
  },
  {
    path: "/github",
    name: "Github",
    component: Github,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
