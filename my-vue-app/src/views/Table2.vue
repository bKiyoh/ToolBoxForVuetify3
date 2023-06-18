<script setup lang="ts">
import { reactive, computed } from "vue";
import dayjs from "dayjs";
import { testRepository } from "../repository/repos/testRepository";
import {
  GetProgramListRequest,
  GetProgramListResponse,
  ProgramElement,
} from "@/repository/@types/program";
import { VDataTable } from "vuetify/lib/labs/components.mjs";
import { DataTableHeader } from "@/store/master";
import { services, areas } from "../constants";

const searchParams: GetProgramListRequest = reactive({
  area: "130",
  service: "g1",
  date: `${dayjs().format("YYYY-MM-DD")}`,
});

const state = reactive({
  items: {} as GetProgramListResponse,
  selectItems: new Array<ProgramElement>(),
});

const tableHeaders: DataTableHeader[] = [
  {
    title: "放映時間",
    align: "start",
    sortable: true,
    key: "broadcastTime",
  },
  {
    title: "タイトル",
    align: "start",
    sortable: true,
    key: "title",
  },
  {
    title: "サブタイトル",
    align: "start",
    sortable: true,
    key: "subtitle",
  },
  {
    title: "コンテント",
    align: "start",
    sortable: true,
    key: "content",
  },
  {
    title: "出演者",
    align: "start",
    sortable: true,
    key: "act",
  },
];

const search = async () => {
  state.items = await testRepository.getProgram(searchParams);
  buildItems(searchParams.service);
};

const buildItems = (service: string) => {
  const itemMappings = new Map<string, ProgramElement[]>([
    ["g1", state.items.list.g1],
    ["g2", state.items.list.g2],
    ["e1", state.items.list.e1],
    ["e2", state.items.list.e2],
    ["e3", state.items.list.e3],
    ["e4", state.items.list.e4],
    ["s1", state.items.list.s1],
    ["s2", state.items.list.s2],
    ["s3", state.items.list.s3],
    ["s4", state.items.list.s4],
    ["r1", state.items.list.r1],
    ["r2", state.items.list.r2],
    ["r3", state.items.list.r3],
    ["n1", state.items.list.n1],
    ["n2", state.items.list.n2],
    ["n3", state.items.list.n3],
  ]);

  state.selectItems = itemMappings.get(service) || [];
};

const formattedItems = computed(() =>
  state.selectItems.map((x) => ({
    ...x,
    broadcastTime: `${dayjs(x.start_time).format("HH:mm")}~${dayjs(
      x.end_time
    ).format("HH:mm")}`,
  }))
);

const dates = computed(() => {
  const today = dayjs().add(7, "day");
  return Array.from({ length: 8 }, (_, index) =>
    dayjs(today)
      .subtract(7 - index, "day")
      .format("YYYY-MM-DD")
  );
});
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
        <v-select
          label="地域"
          :items="areas"
          item-title="text"
          item-value="value"
          v-model="searchParams.area"
        />
      </v-col>
      <v-col>
        <v-select
          label="サービス"
          :items="services"
          item-title="text"
          item-value="value"
          v-model="searchParams.service"
        />
      </v-col>
      <v-col>
        <v-select label="日付" :items="dates" v-model="searchParams.date" />
      </v-col>
    </v-row>
    <v-row dense>
      <v-spacer />
      <v-col cols="auto">
        <v-btn @click="search">検索</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="tableHeaders" :items="formattedItems" />
      </v-col>
    </v-row>
  </v-container>
</template>
