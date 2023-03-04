export type tableHeader = {
  text: string;
  align?: "start" | "center" | "end";
  sortable: boolean;
  value: string;
};

export type hero = {
  name: string;
  weapon: string;
  type: string;
};

export type Tab = {
  key: string;
  label: string;
  icon: string;
};
