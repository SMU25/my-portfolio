import React from "react";
import { SkeletonBlogPost } from "src/components/BlogPosts/Preloader";

export const Preloader = () => (
  <div className="mt-4.5">
    <SkeletonBlogPost isPostPage />
  </div>
);
