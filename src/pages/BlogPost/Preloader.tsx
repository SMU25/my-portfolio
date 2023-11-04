import React from "react";
import { SkeletonBlogCard } from "src/components/BlogItems/Preloader";

export const Preloader = () => (
  <div className="mt-4.5">
    <SkeletonBlogCard isBlogPostPage />
  </div>
);
