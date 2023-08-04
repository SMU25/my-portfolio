import React, { FC } from "react";
import { usePageTitle } from "src/hooks/usePageTitle";
import { AboutMySelf } from "./AboutMySelf";
import { FeaturedWorks } from "./FeaturedWorks";
import { RecentPosts } from "./RecentPosts";

const Home: FC = () => {
  usePageTitle();

  return (
    <>
      <AboutMySelf />
      <FeaturedWorks />
      {/* <RecentPosts /> */}
    </>
  );
};

export default Home;
