import Vue from 'vue'
import Vuex from 'vuex'

import CharactersData from "@/store/CharactersData";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    CharactersData
  }
})
