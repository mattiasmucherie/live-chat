<template>
  <v-text-field
    label="Enter message"
    class="px-4"
    v-model="newMessage"
    @keydown.enter.prevent="addMessage"
    color="purple"
    :error="feedback?true:false"
    :error-messages="feedback"
  ></v-text-field>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "NewMessage",
  props: ["name"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => console.log(err)); //eslint-disable-line
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "You must enter a message in order to send one";
      }
    }
  }
};
</script>
