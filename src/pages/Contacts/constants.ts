import * as yup from "yup";
import { Input } from "src/components/FormField/Input";
import {
  EMAIL_VALIDATION_SCHEMA,
  NAME_VALIDATION_SCHEMA,
  PHONE_VALIDATION_SCHEMA,
} from "src/constants/formConstants";
import { Contacts } from "./Contacts";
import { Feedback } from "./Feedback";
import { DEFAULT_SECTION_CLASS_NAME } from "../constants";

export const SECTIONS = [
  {
    id: 1,
    component: Contacts,
    className: DEFAULT_SECTION_CLASS_NAME,
  },
  {
    id: 2,
    component: Feedback,
    className: "bg-blue-lighter pt-22.5 pb-40",
  },
];

export const CONTACTS_ITEMS = [
  {
    id: 1,
    title: "phone",
    linkLabel: "+38098123456",
    link: "tel:+38098123456",
  },
  {
    id: 2,
    title: "email",
    linkLabel: "gmailGmail@gamil.com",
    link: "mailto:gmailGmail@gamil.com",
  },
  {
    id: 3,
    title: "linkedin",
    linkLabel: "gmailGmail@gamil.com",
    link: "https://gmailGmail@gamil.com",
  },
  {
    id: 4,
    title: "github",
    linkLabel: "gmailGmail@gamil.com",
    link: "https://gmailGmail@gamil.com",
  },
  {
    id: 5,
    title: "facebook",
    linkLabel: "gmailGmail@gamil.com",
    link: "https://gmailGmail@gamil.com",
  },
  {
    id: 6,
    title: "instagram",
    linkLabel: "gmailGmail@gamil.com",
    link: "https://gmailGmail@gamil.com",
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
    type: "phone",
    component: Input,
  },
  {
    name: "email",
    label: "email",
    type: "email",
    component: Input,
  },
];

export const FEEDBACK_VALIDATION_SCHEMA = yup.object().shape({
  firstName: NAME_VALIDATION_SCHEMA.required("required"),
  lastName: NAME_VALIDATION_SCHEMA,
  phone: PHONE_VALIDATION_SCHEMA,
  email: EMAIL_VALIDATION_SCHEMA,
  message: yup.string().required("required"),
});
