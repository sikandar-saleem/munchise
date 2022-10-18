import { forwardRef } from "react";

import { CheckboxProps } from "./types";

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, label, value, checked, onChange }, ref) => {
    return (
      <label
        htmlFor={id}
        className="flex items-baseline md:items-center text-sm font-light cursor-pointer"
      >
        <input
          ref={ref}
          id={id}
          name={name}
          value={value}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="w-0 h-0 -z-10 opacity-0"
        />

        <div className="mr-1 md:mr-2">
          <div className="w-4 h-4 border-2 border-black">
            <svg
              viewBox="0 0 16 16"
              className={`${checked ? "block" : "hidden"}`}
            >
              <rect x="2" y="2" className="h-3 w-3" />
            </svg>
          </div>
        </div>

        <span>{label}</span>
      </label>
    );
  }
);

export default Checkbox;
