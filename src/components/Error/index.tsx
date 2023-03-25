import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { TYPE_STRING } from "src/constants/types";

const T_PREFIX = "error";

interface Ii18nErrorObject {
  i18nKey: string;
  i18nParams: object;
}

interface Props {
  children: any;
  // CHANGE - fix any
  // children: Ii18nErrorObject | string;
  className?: string;
  showError: boolean;
}

export const Error: FC<Props> = ({ children, className, showError }) => {
  const { t } = useTranslation();

  if (!showError) return null;

  const errorText =
    typeof children === TYPE_STRING
      ? t(`${T_PREFIX} - ${children}`)
      : t(`${T_PREFIX} - ${children.i18nKey}`, children.i18nParams);

  return (
    <div className={cn("absolute -bottom-6 left-4 text-red-dark", className)}>
      {String(errorText)}
    </div>
  );
};
