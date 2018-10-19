<template>
  <div id="app">
    <v-toolbar fixed color="secondary">
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          Burger Cuin
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in navItem" :key="item.title" :to="item.link">
          <v-icon class="hidden-sm-only" left >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>

      </v-toolbar-items>

    </v-toolbar>
    <!--App content-->
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    navItem() {
      return [
        {icon: 'create', title:'Registro', link: '/signUp'},
        {icon: 'lock_open', title:'Inicia sesión', link: '/signIn'}
      ]
    }
  }
}
</script>


<style>

</style>
