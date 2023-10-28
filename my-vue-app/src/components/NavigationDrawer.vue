<script setup lang="ts">
import { reactive } from "vue";

type Navigation = { label: string; name: string; icon: string };

const state = reactive({
  navigationDrawer: true,
});

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const navigations: Array<Navigation> = [
  {
    label: "TOP",
    name: "Home",
    icon: "mdi-home",
  },
  {
    label: "TODOLIST",
    name: "ToDoList",
    icon: "mdi-check",
  },
  {
    label: "TABLE",
    name: "Table",
    icon: "mdi-table",
  },
  {
    label: "TAB",
    name: "Tab",
    icon: "mdi-folder-table-outline ",
  },
  {
    label: "SEARCH",
    name: "Search",
    icon: "mdi-magnify",
  },
  {
    label: "SCHEDULE",
    name: "Schedule",
    icon: "mdi-calendar-month",
  },
];
</script>

<template>
  <!-- header -->
  <v-app-bar app clipped-left color="deep-purple accent-4">
    <v-app-bar-nav-icon @click="setNavigationDrawer()" />

    <v-toolbar-title>Page title</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom>
      <!-- todo:ripple="false"エラーがでるので要調査 -->
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template> -->

      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => {}">
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>

  <!-- navigationBar -->
  <v-navigation-drawer app clipped v-model="state.navigationDrawer">
    <v-list>
      <v-list-subheader>Vuetify</v-list-subheader>
      <v-list-item
        v-for="(item, i) in navigations"
        :key="i"
        :value="item"
        :to="item"
        active-color="primary"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
