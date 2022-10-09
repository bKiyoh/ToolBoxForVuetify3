<script setup lang='ts'>
import { useStoreCounter } from "../store/counter";

const counter = useStoreCounter();
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Pinia入門</h1>
        <p>Count:{{ counter.count }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>
