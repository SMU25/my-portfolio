import React, { FC } from "react";
import { usePageTitle } from "src/hooks/usePageTitle";
import { AboutMySelf } from "./AboutMySelf";
import { FeaturedPortfolioProjects } from "./FeaturedPortfolioProjects";
import { RecentBlogPosts } from "./RecentBlogPosts";

const Home: FC = () => {
  usePageTitle();

  return (
    <>
      <AboutMySelf />
      <div className="bg-gradient-blue-sky">
        <FeaturedPortfolioProjects />
        <RecentBlogPosts />
      </div>
    </>
  );
};

export default Home;
