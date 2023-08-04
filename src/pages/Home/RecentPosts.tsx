import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPosts } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { PATHNAMES } from "src/constants/routes";
import { ListTypeView } from "src/types";

const MAX_COUNT_POSTS_LIMIT = 3;

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

  const isDataMissing = !isLoading && !posts?.length;

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
        items={posts}
      />
    </SectionWrapper>
  );
};
