import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { BUTTON_VARIANTS_STYLES } from "./constants";
import { ButtonVariants } from "./types";

interface Props {
  children: ReactNode;
  variant?: ButtonVariants;
  className?: string;
  onClick: VoidFunction;
}

export const Button: FC<Props> = ({
  children,
  variant = ButtonVariants.PRIMARY,
  className,
  onClick,
}) => {
  return (
    <button
      className={cn("py-3.5 px-5", BUTTON_VARIANTS_STYLES[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
