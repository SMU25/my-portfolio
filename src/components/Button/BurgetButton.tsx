import React, { FC } from "react";
import cn from "classnames";
import { getArrayNumbers } from "src/utils/getArrayNumbers";

const ARRAY_NUMBERS = getArrayNumbers();

interface Props {
  className?: string;
  setIsOpen: (isOpen: boolean | ((isOpen: boolean) => void)) => void;
}

export const BurgetButton: FC<Props> = ({ className, setIsOpen }) => {
  const toggleIsOpen: VoidFunction = () => setIsOpen((prev) => !prev);

  return (
    <button className={cn("p-2.5", className)} onClick={toggleIsOpen}>
      {ARRAY_NUMBERS.map((item) => (
        <div key={item} className="w-7.5 h-0.5 bg-black-dark mt-3 first:mt-0" />
      ))}
    </button>
  );
};
