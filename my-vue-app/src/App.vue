<script setup lang="ts">
import NavigationDrawer from "./components/NavigationDrawer.vue";
</script>

<template>
  <v-app>
    <NavigationDrawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
