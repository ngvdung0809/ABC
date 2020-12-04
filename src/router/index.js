import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    component: () => import('@/layout/Layout'),
    children: [
      {
        name: 'ManageAccount',
        path: '/manage-account',
        component: () => import('@/pages/ManageAccount/ManageAccount'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/auth/Auth'),
    children: [
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/pages/auth/Login'),
      },
      {
        name: 'Register',
        path: '/register',
        component: () => import('@/pages/auth/Register'),
      },
    ],
  },
  // {
  //   path: '*',
  //   redirect: '/404',
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
