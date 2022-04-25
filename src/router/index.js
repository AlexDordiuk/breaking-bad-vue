import Vue from 'vue'
import VueRouter from 'vue-router'
import CharactersPage from '../pages/CharactersPage.vue'
import EpisodesPage from '../pages/EpisodesPage'
import FavoritesCharactersPage from "@/pages/FavoritesCharactersPage";
import NotFoundPage from "@/pages/NotFoundPage";
import CharPage from "@/pages/CharPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters',
    component: CharactersPage
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesCharactersPage
  },
  {
    path: '/:charName',
    name: "charPage",
    component: CharPage
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: EpisodesPage
  },
  {
    path: '*',
    name: "notFound",
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
