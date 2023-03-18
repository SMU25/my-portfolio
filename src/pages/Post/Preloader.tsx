import React from "react";
import { Shimmer } from "src/components/Shimmer";
import { SkeletonBlogPost } from "src/components/BlogPosts/Preloader";

export const Preloader = () => {
  return (
    <div className="pt-13.5 pb-7">
      <SkeletonBlogPost />
      <Shimmer className="w-full h-125" />
    </div>
  );
};
