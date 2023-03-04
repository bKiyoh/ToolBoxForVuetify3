<script setup lang="ts">
import { tableItems } from "../constants";
import { tableHeader, hero } from "../store/master";
import { initialSearchParams } from "../store/store";
import BaseSingleSelectVue from "../components/BaseSingleSelect.vue";
import { reactive } from "vue";

const searchParams = reactive({ ...initialSearchParams });
const state = reactive({
  name: "",
  weapon: "",
  type: "",
  searchParams: {} as hero,
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

const search = () => {
  state.searchParams = {
    name: searchParams.name,
    weapon: searchParams.weapon,
    type: searchParams.type,
  };
};

const clear = () => {
  Object.assign(state.searchParams, initialSearchParams);
  Object.assign(searchParams, initialSearchParams);
};
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
                <v-text-field
                  label="Name"
                  placeholder="ヒーロー名"
                  v-model="searchParams.name"
                  clearable
                />
              </v-col>
              <v-col>
                <BaseSingleSelectVue
                  placeholder="武器"
                  :items="
                    tableItems
                      .filter((x, i, self) => {
                        return (
                          self.findIndex((obj) => obj.weapon === x.weapon) === i
                        );
                      })
                      .map((x) => x.weapon)
                  "
                  v-model="searchParams.weapon"
                  item-value="value"
                  item-title="text"
                />
              </v-col>
              <v-col>
                <BaseSingleSelectVue
                  placeholder="職"
                  :items="
                    tableItems
                      .filter((x, i, self) => {
                        return (
                          self.findIndex((obj) => obj.type === x.type) === i
                        );
                      })
                      .map((x) => x.type)
                  "
                  v-model="searchParams.type"
                  item-value="value"
                  item-title="text"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-spacer />
              <v-col cols="auto">
                <v-btn color="primary" variant="outlined" @click="clear">
                  クリア
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  prepend-icon="mdi-magnify"
                  color="primary"
                  @click="search"
                >
                  検索
                </v-btn>
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
                    <tr
                      v-for="item in tableItems.filter(
                        (x) =>
                          (state.searchParams.name
                            ? state.searchParams.name === x.name
                            : true) &&
                          (state.searchParams.type
                            ? state.searchParams.type === x.type
                            : true) &&
                          (state.searchParams.weapon
                            ? state.searchParams.weapon === x.weapon
                            : true)
                      )"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.weapon }}</td>
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
