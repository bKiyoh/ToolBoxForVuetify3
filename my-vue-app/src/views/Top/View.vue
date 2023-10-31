<script setup lang="ts"></script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">ToolBox For Vuetify3</h1>

        <h2>
          このサイトはVue3とVuetify3の開発で得た知見を活かして作成しました
        </h2>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">詳細情報</h2>

        <v-row justify="center">
          <a
            href="https://github.com/Oyukawa/ToolBoxForVuetify3"
            target="_blank"
            >https://github.com/Oyukawa/ToolBoxForVuetify3</a
          >
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">使用API</h2>

        <v-row justify="center">
          <p>
            当サイトの
            <router-link to="search">Search</router-link>、
            <router-link to="schedule">Schedule</router-link>では
            <a href="https://api-portal.nhk.or.jp/" target="_blank"
              >NHK番組表API</a
            >を使用しています。 <br />Keyはご自身で取得したものをApi
            Keyに入力してください。
          </p>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
