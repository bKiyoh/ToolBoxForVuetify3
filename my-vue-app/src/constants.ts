import { hero } from "./store/master";

export const heroType = new Map<string, string>([
  ["Tank", "タンク"],
  ["Attacker", "アタッカー"],
  ["Healer", "ヒーラー"],
]);

export const tableItems: Array<hero> = [
  {
    name: "キリコ",
    value: "クナイ",
    type: "Healer",
  },
  {
    name: "ゲンジ",
    value: "刀",
    type: "Attacker",
  },
  {
    name: "ハンゾー",
    value: "弓",
    type: "Attacker",
  },
  {
    name: "ジャンカークイーン",
    value: "斧",
    type: "Tank",
  },
];
