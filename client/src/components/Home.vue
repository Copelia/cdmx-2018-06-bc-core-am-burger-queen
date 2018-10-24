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
              :color="active ? 'prueba' : ''"
              class="d-flex align-center"
              dark
              height="150"
              width="180"
              @click.native="toggle"
            >
            <v-card-text>
              <v-text-field box value="Comida"></v-text-field>
                  </v-card-text>
            </v-card> 
                  <v-btn color="warning">Ordenar</v-btn>
          </v-item>
        </v-flex>
      </v-layout>
    </v-container>
  </v-item-group>
  <v-footer color="footer" class="mt-5"></v-footer>
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

