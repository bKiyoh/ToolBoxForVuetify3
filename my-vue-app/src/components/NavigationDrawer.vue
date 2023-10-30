<script setup lang="ts">
import { reactive, computed } from "vue";
import { useTheme } from "vuetify/lib/framework.mjs";

type Navigation = { label: string; name: string; icon: string };

const theme = useTheme();

const state = reactive({
  navigationDrawer: true,
  isNightMode: false,
});

const navigation: Array<Navigation> = [
  {
    label: "TOP",
    name: "/",
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

const setNavigationDrawer = () => {
  state.navigationDrawer = !state.navigationDrawer;
};

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const themeDependentIcon = computed(() =>
  theme.global.name.value === "light"
    ? "mdi-weather-sunny"
    : "mdi-weather-night"
);
</script>

<template>
  <!-- header -->
  <v-app-bar app>
    <v-toolbar>
      <v-app-bar-nav-icon @click="setNavigationDrawer()" />
      <v-toolbar-title class="font-weight-bold"
        >ToolBox For Vuetify3</v-toolbar-title
      >

      <v-spacer />

      <v-btn v-model="state.isNightMode" @click="toggleTheme" icon
        ><v-icon>{{ themeDependentIcon }}</v-icon></v-btn
      >
    </v-toolbar>

    <v-menu>
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
      <v-list-item
        v-for="(item, i) in navigation"
        :key="i"
        :value="item"
        :to="item.name"
        color="info"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
