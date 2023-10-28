<script setup lang="ts">
import { ref } from "vue";

const newTask = ref<string>("");
const tasks = ref<{ text: string; completed: boolean }[]>([]);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push({ text: newTask.value, completed: false });
    newTask.value = "";
  }
};

const deleteTask = (index: number) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>ToDoList</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="newTask"
          @keyup.enter="addTask"
          label="New Task"
          hint="Press Enter"
        />
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-list>
          <v-list-item
            v-for="(task, index) in tasks"
            :key="index"
            border
            class="rounded-lg mb-4"
          >
            <template v-slot:default>
              <v-list-item-title
                :style="{
                  'text-decoration': task.completed ? 'line-through' : 'none',
                }"
                >{{ task.text }}</v-list-item-title
              >
            </template>
            <template v-slot:prepend>
              <v-list-item-action class="d-flex align-center"
                ><v-checkbox v-model="task.completed" hide-details />
              </v-list-item-action>
            </template>
            <template v-slot:append>
              <v-btn
                @click="deleteTask(index)"
                variant="text"
                icon="mdi-delete"
              />
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
