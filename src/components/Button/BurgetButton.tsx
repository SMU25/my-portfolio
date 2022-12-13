import cn from "classnames";
import React, { FC } from "react";

const ARRAY_NUMBERS = [1, 2, 3];

interface Props {
  className?: string;
  setIsOpen: (isOpen: any) => void;
  //CHANGE - fix any
}

export const BurgetButton: FC<Props> = ({ className, setIsOpen }) => {
  const toggleIsOpen = () => setIsOpen((prev: boolean) => !prev);

  return (
    <button
      className={cn("hover:rounded-full hover:bg-blue-lighter", className)}
      onClick={toggleIsOpen}
    >
      {ARRAY_NUMBERS.map((item) => (
        <div key={item} className="w-7.5 h-0.5 bg-black-dark mt-3 first:mt-0" />
      ))}
    </button>
  );
};
