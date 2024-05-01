import { createRouter, createWebHistory } from 'vue-router'
import GenerationView from '../views/GenerationView.vue'
import FavoritesView from '../views/FavoritesView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'generation',
      component: GenerationView,
      meta: {
        title: 'Генератор'
    }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: FavoritesView,
      meta: {
        title: 'Избранное'
    }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // @ts-ignore
  document.title = to.meta.title
  next()
})

export default router
