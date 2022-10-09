# Vue 3 + TypeScript + Vite 実行手順
$ npm create vite@latest
-projectname: my-vue-app
-select a framework: vue
-select a variant: vue-ts
$ cd my-vue-app
$ vue add vuetify
-chose apreset: Vite Previwe
$ npm insall
$ npm install pinia --piniaもインストールする
$ npm run dev
## ここでエラーが起きる可能あり
>error when starting dev server:
>Error: Cannot find module 'vuetify/dist/json/importMap.json'
### 解決策 以下の1と2を実行して解決する。npm run devで確認済み。
1.nodeのバージョンアップ
node v14.17.4 ⇒　v16.17.1
2.Vuetifyのインストール
$ npm install vuetify@^3.0.0-alpha.11
vue add vuetify のみでは依存しているファイルがインストールされていないため（よくわかってない）

