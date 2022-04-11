<template>
  <v-container>
    <div class="text-h4 font-weight-medium teal--text text--darken-3">FAVORITES: {{favoritesArr.length}}</div>
    <v-container class="d-flex justify-lg-space-around flex-wrap">
      <CharCard v-for="char in favoritesArr"
                :key="char.char_id"
                :char="char"
                :charImg="char.img"
                :favoritesArr="favoritesArr"
      ></CharCard>
    </v-container>
  </v-container>
</template>

<script>
import CharCard from "@/components/CharCard";
import favoritesMixin from "@/mixins/favoritesMixin";
export default {
  name: "FavoritesCharactersView",
  components: {CharCard},
  mixins: [favoritesMixin]
}
</script>

<style lang="scss">

</style>