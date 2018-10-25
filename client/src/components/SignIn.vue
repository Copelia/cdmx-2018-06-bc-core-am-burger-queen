<template>
  <v-form>
    <v-text-field
      label="Name"
      required
      v-model="username"
    ></v-text-field>
    <v-text-field
      label="Password"
      required
      v-model="password"
    ></v-text-field>
    <v-btn v-on:click="handleSignInUser" to="/orders">Ingresemos</v-btn>
  </v-form>
</template>

<script>
export default {
    name: "SignIn",
    data() {
         return{
           username: '',
           password: ''
         };
    },
    methods:{
      handleSignInUser() {
        this.$store.dispatch("signinUser", {
          username: this.username,
          password: this.password
        });
      }
    }
};
</script>

<style>
  v-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: block;
  }

</style>


