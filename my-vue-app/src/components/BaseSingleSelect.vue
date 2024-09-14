<script setup lang="ts">
import { defineModel, computed } from "vue";

type ItemValue = string | number | boolean | bigint | symbol;

const props = defineProps<{
  required?: boolean;
  items: Array<unknown> | Map<string, ItemValue>;
}>();

const modelValue = defineModel<ItemValue | Array<ItemValue>>();

const items = computed(() => {
  if (props.items instanceof Map) {
    return Array.from(props.items).map(([value, text]) => ({ value, text }));
  }
  return props.items;
});
</script>

<template>
  <v-autocomplete
    v-bind:="$attrs"
    v-model="modelValue"
    :items="items"
    variant="outlined"
    clearable
  ></v-autocomplete>
</template>
