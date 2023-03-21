import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { Trans } from "react-i18next";

interface Props {
  children: ReactNode;
  className?: string;
  showError: boolean;
}

export const Error: FC<Props> = ({ children, className, showError }) => {
  if (!showError) return null;

  return (
    <div className={cn("text-red-dark", className)}>
      <Trans>{children}</Trans>
    </div>
  );
};
