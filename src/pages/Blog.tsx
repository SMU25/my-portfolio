import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPosts } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { TagsHeading } from "src/components/Heading/types";
import { ViewVariants } from "src/components/BlogPosts/types";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const MAX_COUNT_POSTS_LIMIT = 5;

const T_PREFIX = "blog";

const HEADING = "title";

const Blog: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectPosts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ limit: MAX_COUNT_POSTS_LIMIT }));
  }, [dispatch]);

  return (
    //CHANGE - Додати до цекції ContainerHead і через флаг контролити чи рендерити його
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        tagHeading={TagsHeading.H2}
      />
      <BlogPosts
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        variant={ViewVariants.COLUMN}
        isLoading={isLoading}
        items={posts}
        maxCountItemsPreloader={MAX_COUNT_POSTS_LIMIT}
      />
    </SectionWrapper>
  );
};

export default Blog;
