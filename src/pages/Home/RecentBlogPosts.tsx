import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getRecentBlogPostsAsync } from "src/redux/blog/actions";
import {
  selectIsLoading,
  selectRecentBlogPosts,
} from "src/redux/blog/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogItems } from "src/components/BlogItems";
import { PATHNAMES } from "src/constants/routes";
import { ListTypeView } from "src/types";

const POSTS_COUNT_LIMIT = 5;

const T_PREFIX = "recent-blog-posts";

const HEADING = "title";

export const RecentBlogPosts: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const recentPosts = useAppSelector(selectRecentBlogPosts);

  useEffect(() => {
    if (!recentPosts) {
      dispatch(getRecentBlogPostsAsync({ limit: POSTS_COUNT_LIMIT }));
    }
  }, [dispatch, recentPosts]);

  const isDataMissing = !isLoading && !recentPosts?.length;

  if (isDataMissing) return null;

  return (
    <SectionWrapper className="sm:pt-4 pb-7 sm:pb-21">
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.BLOG}
      />
      <BlogItems
        listTypeView={ListTypeView.COLUMN}
        isLoading={isLoading}
        items={recentPosts}
      />
    </SectionWrapper>
  );
};
