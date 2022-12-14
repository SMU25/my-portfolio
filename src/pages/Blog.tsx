import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";

const HEADING = "blog";

const Blog: FC = () => {
  return (
    <SectionWrapper className="pt-22.5 pb-13.5">
      <ContainerHead
        titleClassName="capitalize default:text-3xl sm:text-44"
        title={HEADING}
      />
      <BlogPosts className="mt-4.5 sm:mt-6" variant={ViewVariants.COLUMN} />
    </SectionWrapper>
  );
};

export default Blog;
