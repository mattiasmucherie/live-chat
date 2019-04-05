<template>
  <v-app>
    <v-toolbar flat app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link class="toolbar-title" to="/">
          <span class="purple--text">LIVE</span>
          <span class="font-weight-light">CHAT</span>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: { Footer },
  data() {
    return {
      //
    };
  }
};
</script>
<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>

