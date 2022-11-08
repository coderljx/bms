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
      },
      {
        path : "userManager",
        component : () => import("../components/index/userManager/userManager.vue")
      },
      {
        path : "storeManager",
        component : () => import("../components/index/storeManager/storeManager.vue")
      },
      {
        path : "field",
        component : () => import("../components/index/field/field.vue")
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});




export default router;
