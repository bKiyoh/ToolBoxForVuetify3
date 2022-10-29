<script setup lang="ts">
import { reactive } from "vue";
import { tableHeader, items } from "./store";

const state = reactive({
  isShowItems: false,
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
        <h1>テーブル</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-sheet>
          <v-container>
            <v-row>
              <v-col>
                <v-row dense align="center">
                  <v-col>
                    <h5>特定の条件に合致したテーブルを常時表示する</h5>
                  </v-col>
                  <v-col cols="auto">
                    <v-checkbox
                      label="全てのメンバーを見る"
                      v-model="state.isShowItems"
                      value="value"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-table>
                      <thead>
                        <tr>
                          <th
                            v-for="header in tableHeaders"
                            :key="header.value"
                          >
                            {{ header.text }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in tableItems.filter(
                            (x) => x.name === 'キリコ' || state.isShowItems
                          )"
                          :key="item.name"
                        >
                          <td>{{ item.name }}</td>
                          <td>{{ item.value }}</td>
                          <td>{{ item.type }}</td>
                        </tr>
                      </tbody>
                    </v-table>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
