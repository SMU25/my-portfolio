import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_VARIANTS_STYLES } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  children: ReactNode;
  variant?: ButtonVariants;
  className?: string;
  onClick?: VoidFunction;
}

export const Button: FC<Props> = ({
  children,
  variant = ButtonVariants.PRIMARY,
  className,
  onClick,
}) => (
  <button
    className={cn(
      "max-w-full px-5 truncate transition ease-in-out duration-200 active:duration-150",
      BUTTON_VARIANTS_STYLES[variant],
      className
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
