<template>
  <div class="mt-5 container-fluid">
  <h2>Orders baby</h2>
  <v-btn v-for="drink in getDrinks" :key="drink._id">
        Nombre: {{drink.name}} - Precio: {{drink.price}}
  </v-btn>
  <v-btn v-for="product in getProducts" :key="product._id">
        Nombre: {{product.name}} - Precio: {{product.price}} - Turno: {{product.shift}}
  </v-btn>  
  </div>    
</template>

<script>
import {gql} from 'apollo-boost';

export default {
name: "Order",
apollo: {
    getDrinks:{
        query:gql`
        query{
            getDrinks{
                _id
                name
                price
          }
        }`    
    },
    getProducts:{
        query:gql`
        query{
            getProducts{
                _id
                name
                price
                shift
            }
        }`
    }
}
}
</script>

<style>

</style>


