<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld /> -->
      <v-btn color="primary">
        <router-link to="/"> Go to Top </router-link>
      </v-btn>
      <v-btn color="purple">
        <router-link to="/about"> Go to About </router-link>
      </v-btn>
      <router-view />
    </v-main>
  </v-app>
</template>
