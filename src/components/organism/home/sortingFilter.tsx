import Checkbox from "../../atoms/checkbox";
import CloseIcon from "../../../assets/icons/closeIcon";

import { SortingFilterProps } from "./types";

function SortingFilter({
  title,
  type,
  items,
  onClickFilter,
  onClickReset,
}: SortingFilterProps) {
  return (
    <div className="mb-0 lg:mb-12">
      <div className="flex justify-between mb-4 lg:mb-6">
        <p className="text-smfont-medium m-0">{title}</p>
        <button
          type="button"
          className="flex items-center"
          onClick={() => onClickReset(type)}
        >
          <span className="text-sm font-light">Reset</span>
          <CloseIcon className="w-6 h-5" />
        </button>
      </div>
      <div className="flex flex-col space-y-2">
        {items.map((item) => (
          <Checkbox
            key={item.title}
            value={item.isChecked.toString()}
            checked={item.isChecked}
            label={item.title}
            onChange={() => onClickFilter(type,item)}
          />
        ))}
      </div>
    </div>
  );
}

export default SortingFilter;
