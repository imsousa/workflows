import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Processos from "../views/Processos.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/processos",
      name: "processos",
      component: Processos,
    },
  ],
});

export default router;
