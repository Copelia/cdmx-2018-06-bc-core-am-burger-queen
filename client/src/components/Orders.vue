<template>
  <div class="mt-5 container-fluid">
  <h2>Orders baby</h2>
  <ul v-for="product in getProducts" :key="product._id">
    <li>
        Nombre: {{product.name}} - Precio: {{product.price}} - Turno: {{product.shift}}
    </li>
  </ul>
  </div>    
</template>

<script>
import {gql} from 'apollo-boost';

export default {
name: "Order",
apollo: {
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


