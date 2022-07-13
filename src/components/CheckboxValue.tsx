import { Option } from "../App.type";

export const CheckboxValue = (selected: Array<Option>) => {
  return selected.length ? `${selected.length} Selected` : "";
};
