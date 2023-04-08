import * as yup from "yup";
import { Input } from "src/components/FormField/Input";
import {
  EMAIL_VALIDATION_SCHEMA,
  NAME_VALIDATION_SCHEMA,
  PHONE_VALIDATION_SCHEMA,
} from "src/constants/formConstants";
import { Contacts } from "./Contacts";
import { FeedbackForm } from "./FeedbackForm";
import { DEFAULT_SECTION_CLASS_NAME } from "../constants";

export const SECTIONS = [
  {
    id: 1,
    component: Contacts,
    className: DEFAULT_SECTION_CLASS_NAME,
  },
  {
    id: 2,
    component: FeedbackForm,
    className: "bg-blue-lighter pt-22.5 pb-40",
  },
];

export const CONTACTS_ITEMS = [
  {
    id: 1,
    title: "phone",
    linkLabel: "+380 98-032-87-06",
    link: "tel:380980328706",
  },
  {
    id: 2,
    title: "email",
    linkLabel: "smironcuk35@gmail.com",
    link: "mailto:smironcuk35@gmail.com",
  },
  {
    id: 3,
    title: "linkedin",
    linkLabel: "oleksandr-myronchuk",
    link: "https://www.linkedin.com/in/oleksandr-myronchuk-426598255/",
    isOpenNewTab: true,
  },
  {
    id: 4,
    title: "github",
    linkLabel: "Myronchuk Oleksandr",
    link: "https://github.com/SMU25",
    isOpenNewTab: true,
  },
  {
    id: 5,
    title: "facebook",
    linkLabel: "oleksandr_myronchuk",
    link: "https://www.facebook.com/profile.php?id=100009263917153",
    isOpenNewTab: true,
  },
  {
    id: 6,
    title: "instagram",
    linkLabel: "@sanchos_mironchuk",
    link: "https://www.instagram.com/sanchos_mironchuk/",
    isOpenNewTab: true,
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
