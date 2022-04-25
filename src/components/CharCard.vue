<template>
  <v-card class="char-card mx-auto mb-3" width="250">
    <v-hover v-slot="{hover}">
      <v-img :src="char.img" height="330">
        <v-expand-transition>
          <v-container
              v-if="hover"
              class="transition-fast-in-fast-out d-flex align-center justify-center"
              style="height: 100%; background-color: rgba(0, 128, 128, .5)">
            <v-btn @click="$router.push({name: 'charPage', params: {charName: `${char.name}`, char: char}})">More</v-btn>
          </v-container>
        </v-expand-transition>
      </v-img>
    </v-hover>
    <v-card-title class="word-wr">{{char.name}}</v-card-title>
    <v-card-text class="d-flex justify-space-between pa-0 pr-3">
      <v-card-subtitle>"{{char.nickname}}"</v-card-subtitle>
      <v-btn icon @click="addToFavorites">
        <v-icon large color="teal darken-2" v-if="!isActive">mdi-star-plus-outline</v-icon>
        <v-icon large color="teal" v-else>mdi-star-remove</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    char: {
      type: Object,
      required: true
    },
    favoritesArr: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    addToFavorites() {
     if (!this.isActive) {
       this.isActive = true
       this.favoritesArr.push(this.char)
     } else {
       this.isActive = false
       this.favoritesArr.splice(this.favoritesArr.indexOf(this.char), 1)
     }
    }
  },
  mounted() {
    const res = this.favoritesArr.includes(this.char)
    if (!!res) {
      this.isActive = true
    }
  }
}
</script>

<style lang="scss">
.word-wr {
  word-break: keep-all !important;
}
</style>