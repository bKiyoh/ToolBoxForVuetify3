<script setup lang="ts">
import { computed, reactive } from "vue";
import dayjs from "dayjs";
import {
  GetProgramListRequest,
  GetProgramListResponse,
  ProgramElement,
} from "@/repository/@types/program";
import { testRepository } from "../../repository/repos/testRepository";
import { onBeforeMount } from "vue";
import { areas, ServiceTexts, ServiceValues } from "../../constants";
import { useApiKey } from "../../store/keyStore";

const apiKeyStore = useApiKey();

const initialItems = {
  list: {
    [ServiceValues.NHK_SOGO_1]: [
      {
        id: "",
        event_id: "",
        start_time: "",
        end_time: "",
        area: {
          id: "",
          name: "",
        },
        service: {
          id: "",
          name: "",
          logo_s: {
            url: "",
            width: "",
            height: "",
          },
          logo_m: {
            url: "",
            width: "",
            height: "",
          },
          logo_l: {
            url: "",
            width: "",
            height: "",
          },
        },
        title: "",
        subtitle: "",
        content: "",
        act: "",
        genres: [""],
      },
    ],
  },
};

const searchParams: GetProgramListRequest = reactive({
  area: "130",
  service: "",
  date: `${dayjs().format("YYYY-MM-DD")}`,
});

// initialItemsする
const state = reactive({
  items: { ...initialItems } as GetProgramListResponse,
  selectItems: new Array<ProgramElement>(),
});

const header: Array<{ memberName: string; memberId: string; color: string }> = [
  {
    memberName: ServiceTexts.NHK_SOGO_1,
    memberId: ServiceValues.NHK_SOGO_1,
    color: "#A8A8A8",
  },
  {
    memberName: ServiceTexts.NHK_ETV_1,
    memberId: ServiceValues.NHK_ETV_1,
    color: "#959595",
  },
  {
    memberName: ServiceTexts.NHK_BS1,
    memberId: ServiceValues.NHK_BS1,
    color: "#8A8A8A",
  },
  {
    memberName: ServiceTexts.NHK_BS_PREMIUM,
    memberId: ServiceValues.NHK_BS_PREMIUM,
    color: "#7F7F7F",
  },
];

const selectItems = (service: string) => {
  const itemMappings = new Map<string, ProgramElement[]>([
    [ServiceValues.NHK_SOGO_1, state.items.list?.[ServiceValues.NHK_SOGO_1]],
    [ServiceValues.NHK_ETV_1, state.items.list?.[ServiceValues.NHK_ETV_1]],
    [ServiceValues.NHK_BS1, state.items.list?.[ServiceValues.NHK_BS1]],
    [
      ServiceValues.NHK_BS_PREMIUM,
      state.items.list?.[ServiceValues.NHK_BS_PREMIUM],
    ],
  ]);
  return itemMappings.get(service) || [];
};

const search = async () => {
  state.items.list[ServiceValues.NHK_SOGO_1] = (
    await testRepository.getProgram(
      {
        area: searchParams.area,
        service: ServiceValues.NHK_SOGO_1,
        date: searchParams.date,
      },
      apiKeyStore.$state.apiKey
    )
  ).list[ServiceValues.NHK_SOGO_1];

  state.items.list[ServiceValues.NHK_ETV_1] = (
    await testRepository.getProgram(
      {
        area: searchParams.area,
        service: ServiceValues.NHK_ETV_1,
        date: searchParams.date,
      },
      apiKeyStore.$state.apiKey
    )
  ).list[ServiceValues.NHK_ETV_1];

  state.items.list[ServiceValues.NHK_BS1] = (
    await testRepository.getProgram(
      {
        area: searchParams.area,
        service: ServiceValues.NHK_BS1,
        date: searchParams.date,
      },
      apiKeyStore.$state.apiKey
    )
  ).list[ServiceValues.NHK_BS1];

  state.items.list[ServiceValues.NHK_BS_PREMIUM] = (
    await testRepository.getProgram(
      {
        area: searchParams.area,
        service: ServiceValues.NHK_BS_PREMIUM,
        date: searchParams.date,
      },
      apiKeyStore.$state.apiKey
    )
  ).list[ServiceValues.NHK_BS_PREMIUM];
};

const dates = computed(() => {
  const today = dayjs().add(7, "day");
  return Array.from({ length: 8 }, (_, index) =>
    dayjs(today)
      .subtract(7 - index, "day")
      .format("YYYY-MM-DD")
  );
});

onBeforeMount(() => {
  if (apiKeyStore.$state.apiKey.length !== 0) search();
});
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Schedule (NHK番組表)</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" dense>
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
        <v-select label="日付" :items="dates" v-model="searchParams.date" />
      </v-col>
      <v-spacer />
      <v-col cols="auto">
        <v-btn @click="search" :disabled="!apiKeyStore.$state.apiKey">
          検索
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col
        v-for="(x, i) in header"
        :key="i"
        :style="{ backgroundColor: x.color }"
      >
        {{ x.memberName }}
      </v-col>
    </v-row>
    <v-row v-if="selectItems.length !== 0">
      <v-col v-for="x in header" :key="x.memberId">
        <v-row class="flex-column event-row">
          <!-- TODO:初期表示時にcolが一つ生成されてしまう -->
          <v-col v-for="s in selectItems(x.memberId)" :key="s.id">
            <div v-if="s.content">
              {{
                `${dayjs(s.start_time).format("HH:mm") ?? ""}-${dayjs(
                  s.end_time
                ).format("HH:mm")}`
              }}
            </div>
            <div class="my-1">
              <p>{{ s.title }}</p>
            </div>
            <v-expansion-panels class="my-2" v-if="s.content">
              <v-expansion-panel
                title="詳細"
                :text="s.content"
              ></v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.event-row {
  border-right: solid 1px #e0e0e0;
  border-left: solid 1px #e0e0e0;
  border-bottom: solid 1px #e0e0e0;
}
</style>
