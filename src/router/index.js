import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import Timeline from '/src/pages/Timeline.vue'
import Resources from '/src/pages/Resources.vue'
import Projects from '/src/pages/Projects.vue'
import Skills from '/src/pages/Skills.vue'
import Contacts from '/src/pages/Contacts.vue'
import Blogs from '/src/pages/Blogs.vue'
import Typewriter from '/src/pages/Projects/Typewriter.vue'
import Tiles from '/src/pages/Projects/Tiles.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/Skills',
    name: 'Skills',
    component: Skills,
  },
  {
    path: '/Timeline',
    name: 'Timeline',
    component: Timeline,
  },
  {
    path: '/Resources',
    name: 'Resources',
    component: Resources,
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs,
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: '/Projects/Tiles',
    name: 'Tiles',
    component: Tiles,
  },
  {
    path: '/Projects/Typewriter',
    name: 'Typewriter',
    component: Typewriter,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
