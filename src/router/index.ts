import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FeaturesView from '../views/FeaturesView.vue'
import PricingView from '../views/PricingView.vue'
import TutorialView from '../views/TutorialView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/features/:id',
      name: 'features',
      component: FeaturesView,
    },
    {
      path: '/pricing/:id',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/tutorial/:id',
      name: 'tutorial',
      component: TutorialView,
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: ContactView,
    },
  ],
})

export default router
