<script setup lang="ts">
import { defineModel } from "vue";

const modelValue = defineModel<string>();

const rules = {
  required: (value: string) => !!value || "ApiKey必須入力です",
};
</script>

<template>
  <v-text-field
    v-model="modelValue"
    prepend-icon="mdi-key"
    variant="solo-filled"
    label="NHK番組表APIからKeyを取得して入力してください"
    :rules="[rules.required]"
    clearable
    hideDetails
    flat
  ></v-text-field>
</template>
