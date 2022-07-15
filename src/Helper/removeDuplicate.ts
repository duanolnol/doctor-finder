import { Option } from "../App.type";

export const removeDuplicate = (arr: Array<Option>) => [
  ...Array.from(new Map(arr.map((obj) => [JSON.stringify(obj), obj])).values()),
];
