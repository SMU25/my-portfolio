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
      <div className="bg-gradient-blue-sky">
        <FeaturedWorks />
        <RecentPosts />
      </div>
    </>
  );
};

export default Home;
