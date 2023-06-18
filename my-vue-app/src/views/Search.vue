<script setup lang="ts">
import { tableItems } from "../constants";
import { tableHeader } from "../store/master";
import { initialSearchParams } from "../store/store";
import BaseSingleSelectVue from "../components/BaseSingleSelect.vue";
import { reactive } from "vue";

export type searchParamsType = {
  name: string;
  furigana: string;
  type: string;
  region: string;
};

const searchParams = reactive({ ...initialSearchParams });
const state = reactive({
  name: "",
  region: "",
  type: "",
  searchParams: {} as searchParamsType,
});

const tableHeaders: Array<tableHeader> = [
  {
    text: "NAME",
    align: "start",
    sortable: true,
    value: "name",
  },
  {
    text: "FURIGANA",
    align: "start",
    sortable: true,
    value: "furigana",
  },
  {
    text: "TYPE",
    align: "start",
    sortable: true,
    value: "type",
  },
  {
    text: "REGION",
    align: "start",
    sortable: true,
    value: "region",
  },
];

const search = () => {
  state.searchParams = {
    name: searchParams.name,
    furigana: searchParams.furigana,
    type: searchParams.type,
    region: searchParams.region,
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
                  placeholder="出現地域"
                  :items="
                    tableItems
                      .filter((x, i, self) => {
                        return (
                          self.findIndex((obj) => obj.region === x.region) === i
                        );
                      })
                      .map((x) => x.region)
                  "
                  v-model="searchParams.region"
                  item-value="value"
                  item-title="text"
                />
              </v-col>
              <v-col>
                <BaseSingleSelectVue
                  placeholder="タイプ"
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
                          (state.searchParams.region
                            ? state.searchParams.region === x.region
                            : true)
                      )"
                      :key="item.name"
                    >
                      <td>{{ item.name }}</td>
                      <td>{{ item.furigana }}</td>
                      <td>{{ item.type }}</td>
                      <td>{{ item.region }}</td>
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
