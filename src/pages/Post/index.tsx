import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getPostByIdAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPostsById } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { BlogCard } from "src/components/BlogPosts/BlogCard";
import { ListTypeView } from "src/types";
import { Preloader } from "./Preloader";

const Post: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectPostsById);
  const post = posts[id];
  const { title } = post || {};

  usePageTitle(title);

  useEffect(() => {
    if (!post) dispatch(getPostByIdAsync(id));
  }, [dispatch, id, post]);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    post && (
      <BlogCard
        listTypeView={ListTypeView.COLUMN}
        isShownPostImg
        isDisabledTruncateDescription
        {...post}
      />
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={title} />
      <SectionWrapper className="pt-1.5 sm:pt-2 md:pt-4 gl:pt-11.5 pb-7">
        {sectionContent}
      </SectionWrapper>
    </>
  );
};

export default Post;
