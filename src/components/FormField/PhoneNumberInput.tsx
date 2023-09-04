import React, { FC } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useField } from "formik";
import PhoneInput from "react-phone-number-input/input";
import { IFormField } from "src/types/form";
import { FormField } from ".";
import {
  FORM_FIELD_PLACEHOLDER,
  DEFAULT_TEXT_FIELD_CLASSNAME,
  TEXT_FIELD_STYLE_VARIANTS,
} from "./constants";
import { TextFieldVariants } from "./types";

export const PhoneNumberInput: FC<IFormField> = ({
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

  const [{ value, onChange, ...field }, { error, touched }, { setValue }] =
    useField(fieldId);
  const isShownError = Boolean((touched || value) && error);

  const defaultPlaceholder =
    isShownDefaultPlaceholder && t(`${FORM_FIELD_PLACEHOLDER} - ${label}`);

  const onChangeValue = (inputValue: string) => {
    if (inputValue) {
      setValue(inputValue);
    }
  };

  return (
    <FormField
      className={containerClassName}
      labelClassName={labelClassName}
      label={label}
      labelFor={fieldId}
      isShownError={isShownError}
      error={error}
    >
      <PhoneInput
        id={fieldId}
        className={cn(
          DEFAULT_TEXT_FIELD_CLASSNAME,
          TEXT_FIELD_STYLE_VARIANTS[variant],
          className,
          { "border-red-medium": isShownError }
        )}
        value={value}
        onChange={onChangeValue}
        placeholder={placeholder || defaultPlaceholder}
        maxLength={20}
        {...props}
        {...field}
      />
    </FormField>
  );
};
