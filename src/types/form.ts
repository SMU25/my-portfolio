import { FC } from "react";
import { TextFieldVariants } from "src/components/FormField/types";

export interface IOptionSelect {
  value: string;
  label?: string;
}

export interface IFormField {
  id?: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  isShownDefaultPlaceholder?: boolean;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  variant?: TextFieldVariants;
  options?: IOptionSelect[];
}

export interface IRenderFormField extends IFormField {
  component: FC<IFormField>;
}

export interface IFeedbackFormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}
