const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue'), 
  },
  {
    path: '/test',
    component: () => import('./pages/test.vue'), 
  },
  {
    path: '/about',
    component: () => import('./pages/about.vue'), 
  },

]

export default routes