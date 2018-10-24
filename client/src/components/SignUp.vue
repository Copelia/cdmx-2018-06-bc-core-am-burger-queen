<template>
      <v-form>
    <v-text-field
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      label="Password"
      required
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
    data: () => ({

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