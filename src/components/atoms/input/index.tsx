import React from "react";

type Props = {
  placeholder: string;
  term: string;
  handleSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, term, handleSubmit }: Props) => (
  <div>
    <input
      className="w-full py-2 rounded-sm pl-2"
      type="text"
      placeholder={placeholder}
      onChange={handleSubmit}
      value={term}
    />
  </div>
);

export default Input;
