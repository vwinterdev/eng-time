const routes = [
  {
    path: '/',
    component: () => import('./pages/index.vue'), 
  },
  {
    path: '/test',
    component: () => import('./pages/test.vue'), 
  },
]

export default routes