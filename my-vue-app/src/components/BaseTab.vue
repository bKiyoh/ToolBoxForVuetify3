<script setup lang="ts">
export type Tab = {
  key: string;
  label: string;
  icon: string;
};

const props = defineProps<{
  tabs: Array<Tab>;
  value: number;
}>();

const emit = defineEmits(["input"]);

const onInput = (e: unknown) => emit("input", e);
</script>

<template>
  <v-tabs
    fixed-tabs
    bg-color="indigo-darken-2"
    slider-color="yellow"
    :value="props.value"
    @change="onInput"
  >
    <v-tab v-for="tab of props.tabs" :key="tab.key">
      <v-icon>{{ tab.icon }}</v-icon>
      {{ tab.label }}
    </v-tab>
  </v-tabs>
</template>
