<script setup lang="ts">
import { computed } from "vue";

type ItemValue = string | number | boolean | bigint | symbol;

const props = defineProps<{
  value?: ItemValue | Array<ItemValue>;
  required?: boolean;
  items: Array<unknown> | Map<string, ItemValue>;
}>();
const emit = defineEmits(["input"]);
const onInput = (e: unknown) => emit("input", e);

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
    :modelValue="props.value"
    :items="items"
    @update:modelValue="onInput"
    variant="outlined"
    clearable
  />
</template>
