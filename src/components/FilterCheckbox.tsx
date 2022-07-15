import { MultiSelect } from "react-multi-select-component";
import Checkbox from "./Checkbox";
import { CheckboxValue } from "./CheckboxValue";
import { FilterCheckboxProps } from "./FilterCheckbox.type";

const FilterCheckbox = (props: FilterCheckboxProps) => (
  <MultiSelect
    ItemRenderer={Checkbox}
    valueRenderer={CheckboxValue}
    options={props.options}
    value={props.selected}
    onChange={props.onChange}
    labelledBy={props.labelledBy}
    hasSelectAll={false}
    disableSearch
    overrideStrings={{
      selectSomeItems: `${props.labelledBy}`,
    }}
  />
);

export default FilterCheckbox;
