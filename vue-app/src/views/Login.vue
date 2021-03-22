<template>
  <div class="about content">
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="6">
        <h1>Login page</h1>
        <v-form>
          <v-text-field v-model="email" label="email" required></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            type="password"
            required
          ></v-text-field>
          <v-btn @click="sendData">Login</v-btn>
        </v-form>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},

  methods: {
    sendData: function () {
      console.log("button pressed")
      // console.log(email)
      // console.log(password)
      // axios
      //   // .post(this.safeBluesPostURL, this.virusParameters)
      //   .post(someurl, somevalue)
      //   .then(response => console.log(response))
      //   .catch(error => console.log(error))
    },
  },
}
</script>
<style>
</style>