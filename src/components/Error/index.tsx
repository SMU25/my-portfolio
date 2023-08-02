import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";

const T_PREFIX = "error";

interface Ii18nErrorObject {
  i18nKey: string;
  i18nParams: object;
}

interface Props {
  children: string | Ii18nErrorObject;
  className?: string;
  showError: boolean;
}

export const Error: FC<Props> = ({ children, className, showError }) => {
  const { t } = useTranslation();

  if (!showError) return null;

  const errorText =
    typeof children === "string"
      ? t(`${T_PREFIX} - ${children}`)
      : t(`${T_PREFIX} - ${children.i18nKey}`, children.i18nParams);

  return (
    <div className={cn("absolute -bottom-6 left-4 text-red-dark", className)}>
      {String(errorText)}
    </div>
  );
};
