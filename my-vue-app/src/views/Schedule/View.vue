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
import { areas } from "../../constants";

const initialItems = {
  list: {
    g1: [
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
    memberName: "NHK総合1",
    memberId: "g1",
    color: "#A8A8A8",
  },
  {
    memberName: "NHK Eテレ1",
    memberId: "e1",
    color: "#959595",
  },
  {
    memberName: "NHK BS1",
    memberId: "s1",
    color: "#8A8A8A",
  },
  {
    memberName: "NHK BSプレミアム",
    memberId: "s3",
    color: "#7F7F7F",
  },
];

const selectItems = (service: string) => {
  const itemMappings = new Map<string, ProgramElement[]>([
    ["g1", state.items.list?.g1],
    ["e1", state.items.list?.e1],
    ["s1", state.items.list?.s1],
    ["s3", state.items.list?.s3],
  ]);
  return itemMappings.get(service) || [];
};

const search = async () => {
  state.items.list.g1 = (
    await testRepository.getProgram({
      area: searchParams.area,
      service: "g1",
      date: searchParams.date,
    })
  ).list.g1;
  state.items.list.e1 = (
    await testRepository.getProgram({
      area: searchParams.area,
      service: "e1",
      date: searchParams.date,
    })
  ).list.e1;
  state.items.list.s1 = (
    await testRepository.getProgram({
      area: searchParams.area,
      service: "s1",
      date: searchParams.date,
    })
  ).list.s1;
  state.items.list.s3 = (
    await testRepository.getProgram({
      area: searchParams.area,
      service: "s3",
      date: searchParams.date,
    })
  ).list.s3;
};

const dates = computed(() => {
  const today = dayjs().add(7, "day");
  return Array.from({ length: 8 }, (_, index) =>
    dayjs(today)
      .subtract(7 - index, "day")
      .format("YYYY-MM-DD")
  );
});

onBeforeMount(() => search());
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Schedule</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
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
        <v-btn @click="search">検索</v-btn>
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
    <v-row>
      <v-col v-for="x in header" :key="x.memberId">
        <v-row class="flex-column event-row">
          <v-col v-for="s in selectItems(x.memberId)" :key="s.id">
            <div>
              {{ dayjs(s.start_time).format("HH:mm") }}-{{
                dayjs(s.end_time).format("HH:mm")
              }}
            </div>
            <div class="my-1">
              <p>{{ s.title }}</p>
            </div>
            <v-expansion-panels>
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
