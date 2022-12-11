import React, { FC } from "react";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";
import { ContainerHead } from "src/components/ContainerHead";

const HEADING = "Recent posts";

export const RecentPosts: FC = () => (
  <div>
    <ContainerHead title={HEADING} href={PATHNAMES.BLOG} />
    <BlogPosts variant={ViewVariants.ROW} />
  </div>
);
