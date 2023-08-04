import React, { FC, ReactNode } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Error } from "../Error";

const T_PREFIX = "form-field";

interface Props {
  children: ReactNode;
  className?: string;
  labelClassName?: string;
  label?: string;
  labelFor: string;
  isShownError?: boolean;
  error?: string;
}

export const FormField: FC<Props> = ({
  children,
  className,
  labelClassName,
  label,
  labelFor,
  isShownError,
  error,
}) => {
  const { t } = useTranslation();

  return (
    <div className={cn("relative flex flex-col", className)}>
      {Boolean(label) && (
        <label
          htmlFor={labelFor}
          className={cn("ml-4 text-xl leading-7", labelClassName)}
        >
          {t(`${T_PREFIX} - ${label}`)}
        </label>
      )}
      {children}
      <Error isShownError={isShownError}>{error}</Error>
    </div>
  );
};
