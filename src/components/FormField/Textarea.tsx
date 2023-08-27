import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useField } from "formik";
import { IFormField } from "src/types/form";
import { FormField } from ".";
import {
  FORM_FIELD_PLACEHOLDER,
  DEFAULT_TEXT_FIELD_CLASSNAME,
  TEXT_FIELD_STYLE_VARIANTS,
} from "./constants";
import { TextFieldVariants } from "./types";

export const Textarea: FC<Omit<IFormField, "type">> = ({
  className,
  containerClassName,
  labelClassName,
  id,
  label,
  placeholder,
  isShownDefaultPlaceholder = true,
  variant = TextFieldVariants.PRIMARY,
  ...props
}) => {
  const { t } = useTranslation();

  const fieldId = id || props.name;

  const [{ value, ...field }, { error, touched }] = useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  const defaultPlaceholder =
    isShownDefaultPlaceholder && t(`${FORM_FIELD_PLACEHOLDER} - ${label}`);

  return (
    <FormField
      className={containerClassName}
      labelClassName={labelClassName}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      <textarea
        id={fieldId}
        className={cn(
          "min-h-27.5 sm:min-h-32.5 md:min-h-37.5",
          DEFAULT_TEXT_FIELD_CLASSNAME,
          TEXT_FIELD_STYLE_VARIANTS[variant],
          className,
          { "border-red-primary": isShownError }
        )}
        value={value}
        placeholder={placeholder || defaultPlaceholder}
        {...props}
        {...field}
      />
    </FormField>
  );
};
