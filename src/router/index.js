import Vue from 'vue';
import VueRouter from 'vue-router';
import { ROUTER } from '../config/const';

Vue.use(VueRouter);

const routes = [
  // auth
  {
    path: ROUTER.login.path,
    component: () => import('@/pages/auth/Auth'),
    children: [
      {
        name: ROUTER.login.name,
        path: ROUTER.login.path,
        component: () => import('@/pages/auth/Login'),
      },
      {
        name: ROUTER.register.name,
        path: ROUTER.register.path,
        component: () => import('@/pages/auth/Register'),
      },
    ],
  },
  // nav bar
  {
    path: ROUTER.dashboard.path,
    component: () => import('@/layout/Layout'),
    children: [
      {
        name: 'ManageAccount',
        path: '/manage-account',
        component: () => import('@/pages/ManageAccount/ManageAccount'),
      },
      {
        name: 'Manage',
        path: '/manage',
        component: () => import('@/pages/Manage'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
