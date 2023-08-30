import * as yup from "yup";
import { Input } from "src/components/FormField/Input";
import { Textarea } from "src/components/FormField/Textarea";
import {
  EMAIL_VALIDATION_SCHEMA,
  NAME_VALIDATION_SCHEMA,
  PHONE_VALIDATION_SCHEMA,
} from "src/constants/formValidation";
import { ReactComponent as Call } from "src/assets/icons/call.svg";
import { ReactComponent as Email } from "src/assets/icons/email.svg";
import { ReactComponent as Facebook } from "src/assets/icons/fb.svg";
import { ReactComponent as Instagram } from "src/assets/icons/insta.svg";
import { ReactComponent as Linkedin } from "src/assets/icons/linkedin.svg";
import { ReactComponent as Github } from "src/assets/icons/github.svg";
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
      "bg-blue-lighter pt-5 sm:pt-10 md:pt-15 gl:pt-22.5 pb-8 xs:pb-10 sm:pb-20 lg:pb-32 gl:pb-40",
  },
];

export const CONTACT_ITEMS = [
  {
    id: 1,
    title: "phone",
    linkLabel: "+380 (98) 032-87-06",
    link: "tel:380980328706",
    icon: Call,
  },
  {
    id: 2,
    title: "email",
    linkLabel: "smironcuk35@gmail.com",
    link: "mailto:smironcuk35@gmail.com",
    icon: Email,
  },
  {
    id: 3,
    title: "linkedin",
    linkLabel: "oleksandr-myronchuk",
    link: "https://www.linkedin.com/in/oleksandr-myronchuk/",
    icon: Linkedin,
    isOpenNewTab: true,
  },
  {
    id: 4,
    title: "github",
    linkLabel: "SMU25",
    link: "https://github.com/SMU25",
    isOpenNewTab: true,
    icon: Github,
  },
  {
    id: 5,
    title: "facebook",
    linkLabel: "Oleksandr Myronchuk",
    link: "https://www.facebook.com/profile.php?id=100009263917153",
    isOpenNewTab: true,
    icon: Facebook,
  },
  {
    id: 6,
    title: "instagram",
    linkLabel: "@sanchos_mironchuk",
    link: "https://www.instagram.com/sanchos_mironchuk/",
    isOpenNewTab: true,
    icon: Instagram,
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
    component: Input,
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
