import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getBlogPostByIdAsync } from "src/redux/blog/actions";
import { selectIsLoading, selectBlogPostsById } from "src/redux/blog/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { BlogCard } from "src/components/BlogItems/BlogCard";
import { ListTypeView } from "src/types";
import { Preloader } from "./Preloader";

const Post: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectBlogPostsById);
  const post = posts[id];
  const { title } = post || {};

  usePageTitle(title);

  useEffect(() => {
    if (!post) dispatch(getBlogPostByIdAsync(id));
  }, [dispatch, id, post]);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    post && (
      <BlogCard
        listTypeView={ListTypeView.COLUMN}
        isShownCardImg
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
