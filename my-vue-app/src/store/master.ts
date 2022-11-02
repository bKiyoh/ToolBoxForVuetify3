export type type = "Tank" | "Attacker" | "Healer";

export type tableHeader = {
  text: string;
  align?: "start" | "center" | "end";
  sortable: boolean;
  value: string;
};

export type items = {
  name: string;
  value: string;
  type: type;
};

export type Tab = {
  key: string;
  label: string;
  icon: string;
};
