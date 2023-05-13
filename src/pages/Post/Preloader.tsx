import React from "react";
import { Shimmer } from "src/components/Shimmer";
import { SkeletonBlogPost } from "src/components/BlogPosts/Preloader";

export const Preloader = () => {
  return (
    <div>
      <SkeletonBlogPost />
      <Shimmer className="w-full h-125" />
    </div>
  );
};
