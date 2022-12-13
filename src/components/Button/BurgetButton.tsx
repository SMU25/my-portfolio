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
    <div
      className={cn(
        "flex flex-col w-7.5 h-full hover:rounded-full hover:bg-black-dark",
        className
      )}
      onClick={toggleIsOpen}
    >
      {ARRAY_NUMBERS.map((item) => (
        <span
          key={item}
          className="absolute w-7.5 w-full h-0.5 bg-black-dark top-5 first:top-2.5 last:top-7.5"
        />
      ))}
    </div>
  );
};
