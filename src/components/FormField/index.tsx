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
          className={cn(
            "ml-3 md:ml-4 sm:text-lg md:text-xl leading-5 sm:leading-6 md:leading-7",
            labelClassName
          )}
        >
          {t(`${T_PREFIX} - ${label}`)}
        </label>
      )}
      {children}
      <Error isShownError={isShownError}>{error}</Error>
    </div>
  );
};
