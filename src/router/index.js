import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import discovery from '../views/indexNav/discovery.vue'
import playlists from '../views/indexNav/playlists.vue'
import songs from '../views/indexNav/songs.vue'
import mvs from '../views/indexNav/mvs.vue'
import result from '../views/search/result.vue'
const routes = [{
    path: '/discovery',
    name: 'discovery',
    component: discovery,
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: playlists,
  },
  {
    path: '/songs',
    name: 'songs',
    component: songs,
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: mvs,
  },
  {
    path: '/result',
    name: 'result',
    component: result

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router