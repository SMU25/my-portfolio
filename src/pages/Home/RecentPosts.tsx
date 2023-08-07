import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getRecentPostsAsync } from "src/redux/posts/action";
import { selectIsLoading, selectRecentPosts } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { PATHNAMES } from "src/constants/routes";
import { ListTypeView } from "src/types";

const MAX_COUNT_POSTS_LIMIT = 5;

const T_PREFIX = "recent-posts";

const HEADING = "title";

export const RecentPosts: FC = () => {
  const { t } = useTranslation();

  const isLoading = useAppSelector(selectIsLoading);
  const recentPosts = useAppSelector(selectRecentPosts);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!recentPosts) {
      dispatch(getRecentPostsAsync({ limit: MAX_COUNT_POSTS_LIMIT }));
    }
  }, [dispatch, recentPosts]);

  const isDataMissing = !isLoading && !recentPosts?.length;

  if (isDataMissing) return null;

  return (
    <SectionWrapper className="sm:pt-4 pb-37.5 sm:pb-21">
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.BLOG}
      />
      <BlogPosts
        listTypeView={ListTypeView.COLUMN}
        isLoading={isLoading}
        items={recentPosts}
      />
    </SectionWrapper>
  );
};
