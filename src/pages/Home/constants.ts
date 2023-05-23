import { AboutMySelf } from "./AboutMySelf";
import { RecentPosts } from "./RecentPosts";
import { FeaturedWorks } from "./FeaturedWorks";

export const SECTIONS = [
  {
    id: 1,
    component: AboutMySelf,
    className: "pt-8.5 sm:pt-35 pb-15 sm:pb-17",
  },
  {
    id: 2,
    component: FeaturedWorks,
    className: "bg-blue-lighter sm:pt-2 pb-7 sm:pb-10",
  },
  {
    id: 3,
    component: RecentPosts,
    className: "sm:pt-4 pb-37.5 sm:pb-21",
  },
];

export const RESUME_LINKS = {
  ua: "https://drive.google.com/file/d/1KiR48q0TXmkTbfWYx1XEIouv8Gb8BVvB/view?usp=sharing",
  en: "https://drive.google.com/file/d/1hFDbpfM57Uac9yJVEnsY8PnrUK67shWC/view?usp=sharing",
};
