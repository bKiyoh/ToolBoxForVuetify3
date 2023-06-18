<script setup lang="ts">
import { computed } from "vue";
import dayjs from "dayjs";
import { scheduleItems } from "../../constants";

const header: Array<{ memberName: string; memberId: string; color: string }> = [
  {
    memberName: "Alex Johnson",
    memberId: "1",
    color: "#3A98B9",
  },
  {
    memberName: "Lena Garcia",
    memberId: "2",
    color: "#FFF1DC",
  },
  {
    memberName: "Thomas Lee",
    memberId: "3",
    color: "#E8D5C4",
  },
  {
    memberName: "Sara Ahmed",
    memberId: "4",
    color: "#EEEEEE",
  },
];

const formattedScheduleItems = computed(
  () => (memberId: string) =>
    scheduleItems
      .filter((x) => x.memberId === memberId)
      .sort((a, b) => dayjs(a.startTime).diff(dayjs(b.startTime)))
);
</script>

<template>
  <v-container>
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
          <v-col
            v-for="s in formattedScheduleItems(x.memberId)"
            :key="s.memberId"
          >
            <div>
              {{ dayjs(s.startTime).format("HH:ss") }}-{{
                dayjs(s.endTime).format("HH:ss")
              }}
            </div>
            <div class="my-1">
              <p>{{ s.title }}</p>
            </div>
            <v-expansion-panels>
              <v-expansion-panel
                title="詳細"
                :text="s.description"
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
