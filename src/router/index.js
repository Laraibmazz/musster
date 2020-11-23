import Vue from 'vue'
import VueRouter from 'vue-router'
import song from '../views/song.vue'
import index from '../views/index.vue'
import upload from '../views/upload.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/song/:name',
    name: 'song',
    component: song
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router