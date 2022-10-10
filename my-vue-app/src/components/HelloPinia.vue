<script setup lang='ts'>
import { useCounterStore } from "../store/counter";

const counter = useCounterStore();
const onClickCounter = () => {
  counter.increment();
};
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Pinia入門</h1>
        <p>name:{{ counter.name }}</p>
        <p>Count:{{ counter.count }}</p>
        <p>doubleCount:{{ counter.doubleCount }}</p>
      </v-col>
      <v-col>
        <v-btn color="primary" @click="onClickCounter">increment</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
