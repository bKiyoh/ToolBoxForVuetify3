<script setup lang="ts">
type ItemValue = string | number | boolean | bigint | symbol;

const props = defineProps<{
  value?: ItemValue | Array<ItemValue>;
  required?: boolean;
}>();
const emit = defineEmits(["input"]);
const onInput = (e: unknown) => emit("input", e);

const rules = {
  required: (value: string) => !!value || "ApiKey必須入力です",
};
</script>

<template>
  <v-text-field
    :modelValue="props.value"
    @update:modelValue="onInput"
    label="Api Key"
    hint="NHK番組表APIからKeyを取得して入力してください"
    :rules="[rules.required]"
    clearable
  />
</template>
