import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectPosts } from "src/redux/posts/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";

const POSTS_LIMIT_MAX_COUNT = 3;

const HEADING = "Recent posts";

export const RecentPosts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({ limit: POSTS_LIMIT_MAX_COUNT }));
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);

  //CHANGE - видалити лишні div і додати загрузку в пости

  return (
    <div>
      <ContainerHead title={HEADING} href={PATHNAMES.BLOG} />
      <BlogPosts variant={ViewVariants.ROW} items={posts} isSlider />
    </div>
  );
};
