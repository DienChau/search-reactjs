interface SelectionProps {
  isSelected: string | number;
  isDisabled?: boolean | undefined;
  containerStyles?: string;
  title: string;
  opts: string[] | number[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectComponent = ({
  isSelected,
  isDisabled,
  containerStyles,
  title,
  opts,
  onChange,
}: SelectionProps) => {
  return (
    <>
      <select
        className={`select select-success w-full max-w-xs ${containerStyles}`}
        name={title}
        aria-label="Select an option"
        onChange={(e) => onChange(e)}
        value={isSelected === 0 ? "" : isSelected} //"" //0
      >
        <option value="" disabled>
          {title}
        </option>
        {opts.map((opt, index) => (
          <option key={index} disabled={isDisabled} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectComponent;
