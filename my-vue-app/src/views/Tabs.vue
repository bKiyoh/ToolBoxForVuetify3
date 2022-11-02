<script setup lang="ts">
import { reactive } from "vue";
import BaseTab from "../components/BaseTab.vue";
import { fooTab, hogeTab } from "../components/tabs";
import { Tab } from "@/store/master";

const state = reactive({
  selectedTab: 0,
});

const tabs: Array<Tab> = [
  { key: "fooInfo", label: "フー", icon: "mdi-alien-outline" },
  { key: "hogeInfo", label: "ホゲ", icon: "mdi-emoticon-devil-outline" },
];
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card color="basil" background-color="success">
          <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 text-basil">BASiL</h1>
          </v-card-title>
          <BaseTab
            :tabs="tabs"
            :value="state.selectedTab"
            v-model="state.selectedTab"
          />
          <v-window v-model="state.selectedTab">
            <v-window-item key="fooInfo">
              <fooTab />
            </v-window-item>
            <v-window-item key="hogeInfo">
              <hogeTab />
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
