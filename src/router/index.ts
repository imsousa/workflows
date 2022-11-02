import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Processos from "../views/Processos.vue";
import Tarefa from "../views/Tarefa.vue";
import Processo from "../views/Processo.vue";



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
    {
      path: "/tarefa/:id/:nome",
      name: "tarefa",
      component: Tarefa,
    },
    {
      path: "/processo/:id/:nome",
      name: "processo",
      component: Processo,
    }
  ],
});

export default router;
