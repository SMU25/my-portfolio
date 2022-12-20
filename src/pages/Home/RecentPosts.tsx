import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectPosts } from "src/redux/posts/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";

const POSTS_LIMIT_MAX_COUNT = 3;

const T_PREFIX = "recent-posts";

const HEADING = "title";

export const RecentPosts: FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ limit: POSTS_LIMIT_MAX_COUNT }));
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);

  //CHANGE - видалити лишні div і додати загрузку в пости

  return (
    <div>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        href={PATHNAMES.BLOG}
      />
      <BlogPosts variant={ViewVariants.ROW} items={posts} isSlider />
    </div>
  );
};
