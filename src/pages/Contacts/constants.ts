import * as yup from "yup";
import { Input } from "src/components/FormField/Input";
import { PhoneNumberInput } from "src/components/FormField/PhoneNumberInput";
import { Textarea } from "src/components/FormField/Textarea";
import {
  EMAIL_VALIDATION_SCHEMA,
  NAME_VALIDATION_SCHEMA,
  PHONE_VALIDATION_SCHEMA,
} from "src/constants/formValidation";
import { Contacts } from "./Contacts";
import { FeedbackForm } from "./FeedbackForm";
import { DEFAULT_SECTION_CLASSNAME } from "../constants";

export const SECTIONS = [
  {
    id: 1,
    component: Contacts,
    className: DEFAULT_SECTION_CLASSNAME,
  },
  {
    id: 2,
    component: FeedbackForm,
    className:
      "pt-5 sm:pt-10 md:pt-15 gl:pt-22.5 pb-8 xs:pb-10 sm:pb-20 lg:pb-32 gl:pb-40",
  },
];

export const FEEDBACK_FIELDS = [
  {
    name: "firstName",
    label: "first-name",
    type: "text",
    component: Input,
  },
  {
    name: "lastName",
    label: "last-name",
    type: "text",
    component: Input,
  },
  {
    name: "phone",
    label: "phone",
    type: "tel",
    component: PhoneNumberInput,
  },
  {
    name: "email",
    label: "email",
    type: "email",
    component: Input,
  },
  {
    name: "message",
    label: "message",
    component: Textarea,
    containerClassName: "xs:col-span-2",
  },
];

export const FEEDBACK_VALIDATION_SCHEMA = yup.object().shape({
  firstName: NAME_VALIDATION_SCHEMA.required("required"),
  lastName: NAME_VALIDATION_SCHEMA,
  phone: PHONE_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
  message: yup.string(),
});
