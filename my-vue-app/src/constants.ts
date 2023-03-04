import { hero } from "./store/master";

export const heroType = new Map<string, string>([
  ["Tank", "タンク"],
  ["Attacker", "アタッカー"],
  ["Healer", "ヒーラー"],
]);

export const weapon = new Map<string, string>([
  ["Tank", "タンク"],
  ["Attacker", "アタッカー"],
  ["Healer", "ヒーラー"],
]);

export const tableItems: Array<hero> = [
  {
    name: "キリコ",
    weapon: "クナイ",
    type: "Healer",
  },
  {
    name: "ゲンジ",
    weapon: "刀",
    type: "Attacker",
  },
  {
    name: "ハンゾー",
    weapon: "弓",
    type: "Attacker",
  },
  {
    name: "ジャンカークイーン",
    weapon: "斧",
    type: "Tank",
  },
];
