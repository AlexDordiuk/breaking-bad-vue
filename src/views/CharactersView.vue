<template>
  <v-container>
    <v-row class="d-flex mx-auto mb-3 mt-1 justify-center">
      <v-text-field
          class="mr-4 ml-2"
          append-icon="mdi-magnify"
          label="Search character"
          single-line
          hide-details
          v-model="searchValue"
          @keypress.enter="findChar"
      ></v-text-field>
      <v-btn
          class="align-self-center mr-4 mt-3"
          @click="findChar"
      >Search</v-btn>
      <v-badge
          class="mr-2 mt-3"
          bordered
          color="teal darken-1"
          :content="[favoritesArr.length]"
          overlap
          v-if="favoritesArr.length"
      >
        <v-btn
            class="white--text"
            color="teal darken-1"
            depressed
            @click="$router.push('/favorites')"
        >
          Favorites
        </v-btn>
      </v-badge>
    </v-row>

  <v-container class="d-flex justify-lg-space-around flex-wrap">
    <CharCard v-for="char in getAllCharacters"
              :key="char.char_id"
              :char="char"
              :favoritesArr="favoritesArr"
    ></CharCard>
  </v-container>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
import CharCard from "@/components/CharCard";
import favoritesMixin from "@/mixins/favoritesMixin";
  export default {
    name: 'Characters',
    components: {CharCard},
    mixins: [favoritesMixin],
    data() {
      return {
        searchValue: '',
      }
    },
    methods: {
      findChar() {
        this.$store.dispatch('searchChar', this.searchValue)
        this.searchValue = ''
      }
    },
    computed: {
      ...mapGetters(['getAllCharacters'])
    },
    async mounted() {
      await this.$store.dispatch('fetchChars');
    }
  }
</script>
