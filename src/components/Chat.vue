<template>
  <v-container>
    <v-layout row wrap justify-center>
      <v-flex xs12 class="text-xs-center ma-4">
        <span class="headline">Live Chat</span>
      </v-flex>
      <v-flex xs12 sm10 md8 lg8>
        <v-card>
          <v-card-text class="chat-card" v-chat-scroll>
            <v-list v-chat-scroll>
              <template v-for="message in messages">
                <v-list-tile :key="message.id" avatar ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>{{message.content}}</v-list-tile-title>
                    <v-list-tile-sub-title>
                      <span class="purple--text text--darken-4">{{message.name}}</span>
                      <span class="text--primary">{{` `}}-</span>
                      {{message.timestamp}}
                    </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>

          <v-divider></v-divider>
          <v-card-actions>
            <NewMessage :name="name"/>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import NewMessage from "@/components/NewMessage";
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {
      messages: []
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style>
.chat-card {
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}

.messages::-webkit-scrollbar-track {
  background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
  background: #aaa;
}
</style>