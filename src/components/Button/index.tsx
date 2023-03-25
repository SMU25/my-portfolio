import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";
import { Loader } from "../Loader";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  variant?: ButtonVariants;
  className?: string;
  onClick?: VoidFunction;
  isDisabled?: boolean;
}

export const Button: FC<Props> = ({
  children,
  isLoading,
  variant = ButtonVariants.PRIMARY,
  className,
  onClick,
  isDisabled,
}) => (
  <button
    className={cn(
      "max-w-full truncate transition ease-in-out duration-200 active:duration-150 disabled:bg-gray-light disabled:active:translate-y-0",
      BUTTON_STYLE_VARIANTS[variant],
      className
    )}
    onClick={onClick}
    disabled={isDisabled}
  >
    {isLoading ? <Loader /> : children}
  </button>
);
