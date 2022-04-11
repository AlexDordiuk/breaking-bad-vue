<template>
  <v-app-bar
      app
      color="teal darken-1"
      dark
      class="app-bar p-2"
  >
    <v-container>
      <v-img
          src="@/assets/bb_logo.png"
          width="90"
          height="50"
      ></v-img>
    </v-container>

    <v-btn class="app-bar__btn mr-2 " outlined>
      <router-link to="/">Characters</router-link>
    </v-btn>
    <v-btn outlined>
      <router-link to="/episodes">Episodes</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style lang="scss">
.v-application a {
  text-decoration: none;
  color: #fff !important;
}
</style>