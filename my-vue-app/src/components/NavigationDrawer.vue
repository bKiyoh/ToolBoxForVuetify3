<script setup lang="ts">
type Navigation = { label: string; name: string; icon: string };

const navigations: Array<Navigation> = [
  {
    label: "とっぷ",
    name: "Home",
    icon: "mdi-ab-testing",
  },
  {
    label: "あばうと",
    name: "About",
    icon: "mdi-ab-testing",
  },
];
</script>

<template>
  <v-card>
    <v-navigation-drawer class="bg-deep-purple" theme="dark" permanent>
      <v-list density="compact">
        <v-list-subheader>REPORTS</v-list-subheader>
        <v-list-item
          v-for="(item, i) in navigations"
          :key="i"
          :value="item"
          :to="item"
          active-color="primary"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<!-- <template>
  <v-card height="400" width="256" class="mx-auto">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item-group>
        <template v-for="(item, i) in navigations">
          <v-list-item v-if="'name' in item" :key="i" :to="item">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.label }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-if="'childs' in item" :key="i">
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item.label }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list-group>
        </template>
      </v-list-item-group>
    </v-navigation-drawer>
  </v-card>
</template> -->
