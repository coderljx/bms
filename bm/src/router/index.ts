import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path : "/",
    redirect : "index"
  },
  {
    path : "/login",
    component : () => import("../components/login/login.vue")
  },
  {
    path : "/index",
    component : () => import("../components/index/index.vue"),
    children : [
      {
        path : "charges",
        component : () => import("../components/index/charges/charges.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});




export default router;
