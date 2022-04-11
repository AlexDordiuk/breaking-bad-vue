import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersView from '../views/CharactersView.vue'
import EpisodesView from '../views/EpisodesView'
import FavoritesCharactersView from "@/views/FavoritesCharactersView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharactersView
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesCharactersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
