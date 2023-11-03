import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Pricing from '@/components/Pricing.vue'
import Contact from '@/components/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/services', name: 'Services', component: Services },
  { path: '/pricing', name: 'Pricing', component: Pricing },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router