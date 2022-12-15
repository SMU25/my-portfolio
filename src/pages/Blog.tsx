import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectPosts } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_HEADING_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const POSTS_LIMIT_COUNT = 5;

const HEADING = "blog";

const Blog: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ limit: POSTS_LIMIT_COUNT }));
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);

  return (
    //CHANGE - Додати до цекці ContainerHead і через флаг контролити чи рендерити його
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        titleClassName={DEFAULT_HEADING_CLASS_NAME}
        title={HEADING}
      />
      <BlogPosts
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        variant={ViewVariants.COLUMN}
        items={posts}
      />
    </SectionWrapper>
  );
};

export default Blog;
