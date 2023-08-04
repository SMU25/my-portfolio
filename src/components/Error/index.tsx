import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { Ii18nInterpolationObject } from "src/types/i18next";

const T_PREFIX = "error";

interface Props {
  children: string | Ii18nInterpolationObject;
  className?: string;
  isShownError: boolean;
}

export const Error: FC<Props> = ({ children, className, isShownError }) => {
  const { t } = useTranslation();

  if (!isShownError) return null;

  const errorText =
    typeof children === "string"
      ? t(`${T_PREFIX} - ${children}`)
      : t(`${T_PREFIX} - ${children.i18nKey}`, children.i18nParams);

  return (
    <div className={cn("absolute -bottom-6 left-4 text-red-dark", className)}>
      {errorText}
    </div>
  );
};
