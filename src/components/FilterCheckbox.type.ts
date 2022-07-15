import { Option } from "./../App.type";

export interface FilterCheckboxProps {
  options: Array<Option>;
  selected: Array<Option>;
  onChange: (selected: Array<Option>) => void;
  labelledBy: string;
}
