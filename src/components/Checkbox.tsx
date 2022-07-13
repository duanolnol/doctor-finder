const Checkbox = ({
  checked,
  option,
  onClick,
  disabled,
}: {
  checked: boolean;
  option: {
    label: string;
  };
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <div className="item-renderer">
      <input
        type="checkbox"
        onChange={onClick}
        checked={checked}
        tabIndex={-1}
        disabled={disabled}
      />
      <div className="ml-3.5">{option.label}</div>
    </div>
  );
};

export default Checkbox;
