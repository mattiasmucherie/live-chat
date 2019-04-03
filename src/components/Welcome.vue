<template>
  <v-container fill-height>
    <v-layout text-xs-center wrap justify-center align-center fill-height>
      <v-flex xs12 sm10 md8 lg6>
        <v-card class="pa-4">
          <h1 class="display-2 font-weight-bold mb-3">Welcome</h1>
          <v-layout row wrap justify-center>
            <v-flex sm8 md4>
              <v-text-field v-model="name" label="Enter your name:"></v-text-field>
            </v-flex>
            <v-flex sm4>
              <v-btn @click="enterChat">
                <v-icon left>account_circle</v-icon>
                <span>ENTER</span>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: null
  }),
  methods: {
    enterChat() {
      console.log(this.name);
    }
  }
};
</script>

<style>
</style>
