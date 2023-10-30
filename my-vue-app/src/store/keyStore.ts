import { defineStore } from "pinia";
import { ref } from "vue";

export const useApiKey = defineStore("apiKey", () => {
  const apiKey = ref("");
  return { apiKey };
});
