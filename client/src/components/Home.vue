<template>
  <v-app>
    <v-btn color="warning"><v-icon>search</v-icon></v-btn>
    <router-view/>

  </v-app>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
  }
}
</script>
