import { ReactComponent as Call } from "src/assets/icons/call.svg";
import { ReactComponent as Email } from "src/assets/icons/email.svg";
import { ReactComponent as Github } from "src/assets/icons/github.svg";
import { ReactComponent as Telegram } from "src/assets/icons/telegram.svg";
import { ReactComponent as Linkedin } from "src/assets/icons/linkedin.svg";
import { ReactComponent as Instagram } from "src/assets/icons/insta.svg";
import { ReactComponent as Facebook } from "src/assets/icons/fb.svg";
import { ReactComponent as Twitter } from "src/assets/icons/twitter.svg";

export const CONTACT_ITEMS = [
  {
    id: 1,
    title: "phone",
    linkLabel: "+380 98 032 8706",
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
    title: "telegram",
    linkLabel: "@sanchos_mironchuk",
    link: "https://t.me/sanchos_mironchuk",
    icon: Telegram,
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
    title: "linkedin",
    linkLabel: "oleksandr-myronchuk",
    link: "https://www.linkedin.com/in/oleksandr-myronchuk/",
    icon: Linkedin,
    isOpenNewTab: true,
  },
  {
    id: 6,
    title: "facebook",
    linkLabel: "Oleksandr Myronchuk",
    link: "https://www.facebook.com/profile.php?id=100009263917153",
    isOpenNewTab: true,
    icon: Facebook,
  },
  {
    id: 7,
    title: "instagram",
    linkLabel: "@sanchos_mironchuk",
    link: "https://www.instagram.com/sanchos_mironchuk/",
    isOpenNewTab: true,
    icon: Instagram,
  },
  {
    id: 8,
    title: "twitter",
    linkLabel: "sanchos_mir",
    link: "https://twitter.com/sanchos_mir",
    isOpenNewTab: true,
    icon: Twitter,
  },
];
