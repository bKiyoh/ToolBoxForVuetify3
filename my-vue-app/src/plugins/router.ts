import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Table from "../views/Table.vue";
import Tabs from "../views/Tabs.vue";
import Search from "../views/Search.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/tabel",
    name: "Table",
    component: Table,
  },
  {
    path: "/tabs",
    name: "Tabs",
    component: Tabs,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
