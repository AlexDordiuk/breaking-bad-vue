import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersPage from '../pages/CharactersPage.vue'
import EpisodesPage from '../pages/EpisodesPage'
import FavoritesCharactersPage from "@/pages/FavoritesCharactersPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharactersPage
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesPage
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesCharactersPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
