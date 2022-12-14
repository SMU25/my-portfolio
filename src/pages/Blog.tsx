import React, { FC } from "react";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_HEADING_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const HEADING = "blog";

const Blog: FC = () => (
  <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
    <ContainerHead
      titleClassName={DEFAULT_HEADING_CLASS_NAME}
      title={HEADING}
    />
    <BlogPosts
      className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
      variant={ViewVariants.COLUMN}
    />
  </SectionWrapper>
);

export default Blog;
