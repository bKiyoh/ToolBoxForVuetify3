export type tableHeader = {
  text: string;
  align?: "start" | "center" | "end";
  sortable: boolean;
  value: string;
};

export type TestData = {
  guid: string;
  name: string;
  furigana: string;
  type: string;
  region: string;
  description: string;
};

export type Tab = {
  key: string;
  label: string;
  icon: string;
};

export type SelectItemKey =
  | boolean // Ignored
  | string // Lookup by key, can use dot notation for nested objects
  | (string | number)[] // Nested lookup by key, each array item is a key in the next level
  | ((item: Record<string, any>, fallback?: any) => any);

export type DataTableCompareFunction<T = any> = (a: T, b: T) => number;

export type DataTableHeader = {
  key: string;
  value?: SelectItemKey;
  title: string;
  colspan?: number;
  rowspan?: number;
  fixed?: boolean;
  align?: "start" | "end";
  width?: number;
  minWidth?: string;
  maxWidth?: string;
  sortable?: boolean;
  sort?: DataTableCompareFunction;
};
