import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ToDoList from "../views/ToDoList/View.vue";
import Table from "../views/Table/View.vue";
import Tab from "../views/Tab/View.vue";
import Search from "../views/Search/View.vue";
import Schedule from "../views/Schedule/View.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/toDoList",
    name: "ToDoList",
    component: ToDoList,
  },
  {
    path: "/table",
    name: "Table",
    component: Table,
  },
  {
    path: "/tab",
    name: "Tab",
    component: Tab,
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
