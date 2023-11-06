import React, { FC, ReactNode, MouseEventHandler, memo } from "react";
import cn from "classnames";
import { BUTTON_STYLE_VARIANTS } from "./constants";
import { ButtonVariants } from "./types";
import { Loader } from "../Loader";

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  variant?: ButtonVariants;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
}

export const Button: FC<Props> = memo(
  ({
    children,
    isLoading,
    variant = ButtonVariants.PRIMARY,
    className,
    type,
    onClick,
    isDisabled,
  }) => (
    <button
      className={cn(
        "font-e-Ukraine truncate rounded-10 outline-0 transition ease-in-out duration-200 active:duration-150 disabled:bg-gray-light disabled:active:translate-y-0",
        BUTTON_STYLE_VARIANTS[variant],
        className
      )}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {isLoading ? <Loader /> : children}
    </button>
  )
);
