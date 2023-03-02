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
  // props.itemsがMapだった場合(instanceofはクラスチェック演算子)
  if (props.items instanceof Map) {
    /* Array.from()
    Array.from() メソッドは、反復可能オブジェクトや配列風オブジェクトからシャローコピーされた、新しい Array インスタンスを生成します。
  */
    /* Shallow copy (シャローコピー)
    シャローコピーはざっくり言うと参照元のオブジェクトとコピー先のオブジェクトどちらも同じメモリを参照していることをいいます。
  */
    /* Deep copy (ディープコピー)
    ディープコピーとは、オブジェクトのみのコピーではなく、オブジェクトとメモリ上のデータの両方をコピーします。コピー元のプロパティを変更しても、コピー先のプロパティは変更されません。
  */
    /* map()
    「map」は配列データに使うメソッドであり、各要素1つずつに対して「コールバック関数」を実行し、
    その結果を新しい配列として返すことが出来るようになっています。
    つまり、この関数内に実行したい処理を書いておくことで、配列の各要素に対して好きな操作をすることが出来る。
  */
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
  />
</template>
