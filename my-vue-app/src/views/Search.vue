<script setup lang="ts">
import { tableHeader, items } from "../store/master";
import { heroType, testItems } from "../constants";
import BaseSingleSelectVue from "../components/BaseSingleSelect.vue";
import { reactive } from "vue";

const search = reactive({
  heroType: "",
  selectedItem: "",
});

const tableHeaders: Array<tableHeader> = [
  {
    text: "NAME",
    align: "start",
    sortable: true,
    value: "name",
  },
  {
    text: "WEAPON",
    align: "start",
    sortable: true,
    value: "weapon",
  },
  {
    text: "TYPE",
    align: "start",
    sortable: true,
    value: "type",
  },
];
const tableItems: Array<items> = [
  {
    name: "キリコ",
    value: "クナイ",
    type: "Healer",
  },
  {
    name: "ゲンジ",
    value: "刀",
    type: "Attacker",
  },
  {
    name: "ハンゾー",
    value: "弓",
    type: "Attacker",
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>検索</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="1">
          <v-container>
            <v-row>
              <v-col>
                <v-text-field label="Name" placeholder="ヒーロー名" />
              </v-col>
              <v-col>
                <v-text-field label="WEAPON" filled placeholder="武器" />
              </v-col>
              <v-col>
                <BaseSingleSelectVue
                  placeholder="職"
                  :items="heroType"
                  v-model="search.heroType"
                  item-value="value"
                  item-title="text"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-spacer />
              <v-col cols="auto">
                <v-btn color="primary" variant="outlined"> クリア </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn prepend-icon="mdi-magnify" color="primary"> 検索 </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet elevation="1">
          <v-container>
            <v-row>
              <v-col>
                <v-table>
                  <thead>
                    <tr>
                      <th v-for="header in tableHeaders" :key="header.value">
                        {{ header.text }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in tableItems" :key="item.name">
                      <td>{{ item.name }}</td>
                      <td>{{ item.value }}</td>
                      <td>{{ item.type }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
