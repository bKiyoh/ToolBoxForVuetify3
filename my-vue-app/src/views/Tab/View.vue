<script setup lang="ts">
import { reactive } from "vue";
import BaseTab from "../../components/BaseTab.vue";
import { fooTab, hogeTab } from "./components";
import { Tab } from "@/store/master";

const state = reactive({
  selectedTab: 0,
});

const tabs: Array<Tab> = [
  { key: "fooInfo", label: "foo", icon: "mdi-alien-outline" },
  { key: "hogeInfo", label: "hoge", icon: "mdi-emoticon-devil-outline" },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Tab</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-card color="basil" background-color="success">
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
./tabs
