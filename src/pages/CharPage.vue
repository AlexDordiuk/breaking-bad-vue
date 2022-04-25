<template>
  <v-container fluid class="pb-0 pl-0 pt-0">
    <v-container style="height: 100%" fluid class="char d-flex">
      <v-container
          class="ml-0 pl-0 pt-0"
          style="max-width: 30vw; max-height: 60vh"
      >
        <v-img
            :src="char.img"
            class="char__image ml-0 rounded"
        ></v-img>
      </v-container>
      <v-container class="pt-0">
        <p class="font-weight-medium mb-0" style="font-size: 22px">Name: {{char.name}}</p>
        <p class="mb-0">Nickname: "{{char.nickname}}"</p>
        <p class="mb-0">Birthday: {{char.birthday}}</p>
        <p class="mb-0">Status: {{char.status}}</p>
        <v-divider></v-divider>
      </v-container>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "CharPage",
  data() {
    return {
      char: this.$route.params.char,
      timelineArr: []
    }
  }

}
</script>
