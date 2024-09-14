<script setup lang="ts">
import { reactive, computed } from "vue";
import dayjs from "dayjs";
import { testRepository } from "../../repository/repos/testRepository";
import {
  GetProgramListRequest,
  GetProgramListResponse,
  ProgramElement,
} from "@/repository/@types/program";
import { DataTableHeader } from "@/store/master";
import { services, areas } from "../../constants";
import { useApiKey } from "../../store/keyStore";
import { ServiceValues } from "../../constants";

const apiKeyStore = useApiKey();

const searchParams: GetProgramListRequest = reactive({
  area: "130",
  service: "g1",
  date: `${dayjs().format("YYYY-MM-DD")}`,
  apiKey: "",
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
    width: 150,
  },
  {
    title: "タイトル",
    align: "start",
    sortable: true,
    key: "title",
    width: 400,
  },
  {
    title: "サブタイトル",
    align: "start",
    sortable: true,
    key: "subtitle",
    width: 400,
  },
  {
    title: "コンテント",
    align: "start",
    sortable: true,
    key: "content",
    width: 400,
  },
  {
    title: "出演者",
    align: "start",
    sortable: true,
    key: "act",
    width: 200,
  },
];

const search = async () => {
  state.items = await testRepository.getProgram(
    searchParams,
    apiKeyStore.$state.apiKey
  );
  state.selectItems = buildItems(searchParams.service);
};

const buildItems = (service: string) => {
  const itemMappings = new Map<string, ProgramElement[]>([
    [ServiceValues.NHK_SOGO_1, state.items.list[ServiceValues.NHK_SOGO_1]],
    [ServiceValues.NHK_SOGO_2, state.items.list[ServiceValues.NHK_SOGO_2]],
    [ServiceValues.NHK_ETV_1, state.items.list[ServiceValues.NHK_ETV_1]],
    [ServiceValues.NHK_ONESEG_2, state.items.list[ServiceValues.NHK_ONESEG_2]],
    [ServiceValues.NHK_BS1, state.items.list[ServiceValues.NHK_BS1]],
    [
      ServiceValues.NHK_BS_PREMIUM,
      state.items.list[ServiceValues.NHK_BS_PREMIUM],
    ],
    [ServiceValues.NHK_RADIO_1, state.items.list[ServiceValues.NHK_RADIO_1]],
    [ServiceValues.NHK_RADIO_2, state.items.list[ServiceValues.NHK_RADIO_2]],
    [ServiceValues.NHK_FM, state.items.list[ServiceValues.NHK_FM]],
  ]);

  return itemMappings.get(service) || [];
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
        <h1>Search (NHK番組表)</h1>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-autocomplete
          label="地域"
          :items="areas"
          item-title="text"
          item-value="value"
          variant="outlined"
          v-model="searchParams.area"
        />
      </v-col>
      <v-col>
        <v-select
          label="サービス"
          :items="services"
          item-title="text"
          item-value="value"
          variant="outlined"
          v-model="searchParams.service"
        />
      </v-col>
      <v-col>
        <v-select
          label="日付"
          :items="dates"
          variant="outlined"
          v-model="searchParams.date"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-spacer />
      <v-col cols="auto">
        <v-btn
          @click="search"
          :disabled="apiKeyStore.$state.apiKey.length === 0"
          >検索</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="tableHeaders" :items="formattedItems" />
      </v-col>
    </v-row>
  </v-container>
</template>
