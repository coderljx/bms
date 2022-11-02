import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path : "/",
    redirect : "login"
  },
  {
    path : "/login",
    component : import("../components/login/login.vue")
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
