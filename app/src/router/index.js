import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Profile from '../pages/Profile.vue'
import Explore from '../pages/Explore.vue'
import Gallery from '../pages/Gallery.vue'
import Contact from '../pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Beranda - Wisata Alam Jabodetabek' }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { title: 'Profil - Wisata Alam Jabodetabek' }
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore,
    meta: { title: 'Eksplorasi - Wisata Alam Jabodetabek' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: { title: 'Galeri - Wisata Alam Jabodetabek' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { title: 'Kontak - Wisata Alam Jabodetabek' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Wisata Alam Jabodetabek'
  next()
})

export default router
