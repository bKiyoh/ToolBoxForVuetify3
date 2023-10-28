<script setup lang="ts">
import { reactive } from "vue";
import { tableHeader } from "../../store/master";
import { tableItems } from "../../constants";
import BaseSingleSelectVue from "../../components/BaseSingleSelect.vue";

const state = reactive({
  isShowItems: false,
  name: "",
});

const tableHeaders: Array<tableHeader> = [
  {
    text: "NAME",
    align: "start",
    sortable: true,
    value: "name",
  },
  {
    text: "TYPE",
    align: "start",
    sortable: true,
    value: "type",
  },
];
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Table</h1>
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
                </v-row>
                <v-row>
                  <v-col cols="auto">
                    <v-checkbox
                      label="全てのメンバーを見る"
                      v-model="state.isShowItems"
                      value="value"
                      :disabled="!!state.name"
                    />
                  </v-col>
                  <v-col cols="3">
                    <BaseSingleSelectVue
                      placeholder="名前"
                      :items="tableItems.map((x) => x.name)"
                      v-model="state.name"
                      :disabled="state.isShowItems"
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
                            (x) => x.name === state.name || state.isShowItems
                          )"
                          :key="item.name"
                        >
                          <td>{{ item.name }}</td>
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
