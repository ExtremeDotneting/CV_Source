// Composables
import { createRouter, createWebHistory } from 'vue-router'

function queryRouting(currentComponentName){
  return (window.location.search+"").contains("page=" + currentComponentName);
}

const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        name: 'CV',
        component: () => import('@/views/CV.vue'),
      },
      {
        path: 'pdf',
        name: 'CV_AsPdf',
        component: () => import('@/views/CV_AsPdf.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
