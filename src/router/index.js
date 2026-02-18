import { createRouter, createWebHistory } from 'vue-router'
import ProjectsView from '@/views/ProjectsView.vue'
import StudiesView from '@/views/StudiesView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'HomeView', component: () => import('@/views/HomeView.vue') },
  { path: '/projects', name: 'ProjectsView', component: ProjectsView },
  { path: '/studies', name: 'StudiesView', component: StudiesView },
  { path: '/contact', name: 'ContactView', component: ContactView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 👇 AÑADE ESTO:
  scrollBehavior() {
    return { top: 0, left: 0 }
  },
})

export default router
