<template>
      <v-form v-model="valid">
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      :rules="emailRules"
      label="Password"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      password: '',
      emailRules: [
        v => !!v || 'Password is required',
        v => /.+@.+/.test(v) || 'Password must be valid'
      ]
    })
}
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


