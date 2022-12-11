import { AboutMySelf } from "./AboutMySelf";
import { RecentPosts } from "./RecentPosts";
import { FeaturedWorks } from "./FeaturedWorks";

export const SECTIONS = [
  {
    id: 1,
    component: AboutMySelf,
    className: "pt-35 pb-17",
  },
  {
    id: 2,
    component: RecentPosts,
    className: "bg-blue-lighter pt-2 pb-8",
  },
  {
    id: 3,
    component: FeaturedWorks,
    className: "",
  },
];
