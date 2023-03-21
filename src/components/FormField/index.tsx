import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Error } from "../Error";

interface Props {
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  error?: string;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  error,
}) => {
  return (
    <div className={cn("", className)}>
      <label className={cn("", labelClassName)}>label</label>
      {children}
      <Error showError>{error}</Error>
    </div>
  );
};
