"use client";

import { ComponentPropsWithoutRef, useState } from "react";

type InputProps = {
  id: string;
  onChange?: (value: string) => void;
} & ComponentPropsWithoutRef<"textarea">;

const TextArea: React.FC<InputProps> = ({ id, onChange, ...inputProps }) => {
  const [isFilled, setIsFilled] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setIsFilled(value.trim() !== "");

    onChange && onChange(value);
  };

  return (
    <div>
      <textarea
        id={id}
        onChange={handleInputChange}
        className={`w-10/12 mt-4 border-b font-semibold focus:outline-none ${
          isFilled ? "border-primary" : "border-black"
        } w-full py-2 px-1 transition-colors duration-200`}
        {...inputProps}
      />
    </div>
  );
};

export default TextArea;
