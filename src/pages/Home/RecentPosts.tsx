import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPosts } from "src/redux/posts/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";

const MAX_COUNT_POSTS_LIMIT = 6;

const T_PREFIX = "recent-posts";

const HEADING = "title";

export const RecentPosts: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectPosts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ limit: MAX_COUNT_POSTS_LIMIT }));
  }, [dispatch]);

  if (!posts?.length && !isLoading) return null;

  return (
    <>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.BLOG}
      />
      <BlogPosts
        variant={ViewVariants.ROW}
        isLoading={isLoading}
        items={posts}
        isSlider
      />
    </>
  );
};
