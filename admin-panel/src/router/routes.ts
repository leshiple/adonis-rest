import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'AppMainLayout',
      requiresAuth: true,
    },
    component: () => import('src/pages/AppIndexPage.vue'),
  },
  {
    path: '/login',
    name: 'auth-login',
    meta: {
      layout: 'AppAuthLayout',
    },
    component: () => import('src/pages/AppLoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'auth-signup',
    meta: {
      layout: 'AppAuthLayout',
    },
    component: () => import('src/pages/AppSignupPage.vue'),
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    meta: {
      layout: 'AppAuthLayout',
    },
    component: () => import('src/pages/AppForgotPasswordPage.vue'),
  },
  {
    path: '/reset-password',
    name: 'auth-reset-password',
    meta: {
      layout: 'AppAuthLayout',
    },
    component: () => import('src/pages/AppResetPasswordPage.vue'),
  },
  {
    path: '/confirm-email',
    name: 'auth-confirm-email',
    meta: {
      layout: 'AppAuthLayout',
    },
    component: () => import('src/pages/AppConfirmEmailPage.vue'),
  },
  {
    path: '/categories',
    name: 'categories',
    meta: {
      layout: 'AppMainLayout',
      requiresAuth: true,
    },
    component: () => import('src/pages/AppCategoriesPage.vue'),
  },
  {
    path: '/categories/:id',
    name: 'category',
    meta: {
      layout: 'AppMainLayout',
      requiresAuth: true,
    },
    component: () => import('src/pages/AppCategoryPage.vue'),
  },
  {
    path: '/products',
    name: 'products',
    meta: {
      layout: 'AppMainLayout',
      requiresAuth: true,
    },
    component: () => import('src/pages/AppProductsPage.vue'),
  },
  {
    path: '/products/:id',
    name: 'product',
    meta: {
      layout: 'AppMainLayout',
      requiresAuth: true,
    },
    component: () => import('src/pages/AppProductPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/App404Page.vue'),
  },
];

export default routes;
