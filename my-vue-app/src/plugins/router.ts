import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Table from "../views/Table.vue";
import Table2 from "../views/Table2.vue";
import Tabs from "../views/Tabs.vue";
import Search from "../views/Search.vue";
import Schedule from "../views/Schedule/View.vue";
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
    path: "/table",
    name: "Table",
    component: Table,
  },
  {
    path: "/table2",
    name: "Table2",
    component: Table2,
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
  {
    path: "/Schedule/View",
    name: "Schedule",
    component: Schedule,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
