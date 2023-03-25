import React, { FC, ReactNode } from "react";
import { Trans } from "react-i18next";
import cn from "classnames";
import { Error } from "../Error";

const T_PREFIX = "form-field";

interface Props {
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  label?: string;
  labelFor: string;
  showError?: boolean;
  error?: string;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  label,
  labelFor,
  showError,
  error,
}) => {
  return (
    <div className={cn("relative flex flex-col", className)}>
      {Boolean(label) && (
        <label
          htmlFor={labelFor}
          className={cn("ml-4 text-xl leading-7", labelClassName)}
        >
          <Trans>{`${T_PREFIX} - ${label}`}</Trans>
        </label>
      )}
      {children}
      <Error showError={showError}>{error}</Error>
    </div>
  );
};
