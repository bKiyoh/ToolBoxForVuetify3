<script setup lang="ts">
import {Tab} from '../store/master'

// 親コンポーネントから子コンポーネント（this）から渡される値を宣言
const props = defineProps<{
  tabs: Array<Tab>;
  value: number;
}>();

// 子コンポーネント（this）から親コンポーネントへ値を渡す発火イベントを宣言
// (e: "Emitの名前", 渡したい引数: 型): void
const emit = defineEmits(["input"]);

// イベント発火するオブジェクトを宣言
// unknown型は型安全なany型
// https://typescriptbook.jp/reference/statements/unknown
const onInput = (e: unknown) => emit("input", e);
</script>

<template>
  <!-- チェンジイベントでemitを発火 -->
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
