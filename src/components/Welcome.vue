<template>
  <v-container fill-height>
    <v-layout text-xs-center wrap justify-center align-center fill-height>
      <v-flex xs12 sm10 md8 lg6>
        <v-card class="pa-4">
          <h1 class="display-3 m-4">Welcome</h1>
          <v-layout mt-4 row wrap justify-center>
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
        <v-alert v-if="feedback" value="true" type="error">{{feedback}}</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: null,
    feedback: null
  }),
  methods: {
    enterChat() {
      if (this.name) {
        this.feedback = null;
        this.$router.push({
          name: "Chat",
          params: { name: this.name }
        });
      } else {
        this.feedback = "You must enter a name to join";
      }
    }
  }
};
</script>

<style>
</style>
