import React, { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostsAsync } from "src/redux/posts/action";
import { selectPosts } from "src/redux/posts/selectors";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";

const HEADING = "Recent posts";

export const RecentPosts: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostsAsync({}));
  }, [dispatch]);

  const posts = useAppSelector(selectPosts);

  return (
    <div>
      <ContainerHead title={HEADING} href={PATHNAMES.BLOG} />
      <BlogPosts variant={ViewVariants.ROW} items={posts} isSlider />
    </div>
  );
};
