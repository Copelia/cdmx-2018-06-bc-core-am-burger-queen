<template>
  <v-app>
    <v-item-group class="items">
    <v-container grid-list-sm>
      <v-layout wrap>
        <v-flex
          v-for="n in 6"
          :key="n"
          xs12
          md4
        >
          <v-item>
             <v-card
              slot-scope="{ active, toggle }"
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="150"
              width="180"
              @click.native="toggle"
            >
<!--              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-6 text-xs-center"
                >
                  Active
                </div>
              </v-scroll-y-transition> -->
            </v-card> 
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
  </v-app>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.items {
  margin-top: 80px;
}
</style>

