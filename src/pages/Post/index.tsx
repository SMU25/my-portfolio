import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getPostByIdAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPostById } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { BlogCard } from "src/components/BlogPosts/BlogCard";
import { ListTypeView } from "src/types";
import { Preloader } from "./Preloader";

const Post: FC = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const post = useAppSelector(selectPostById);
  const { title } = post || {};

  useEffect(() => {
    dispatch(getPostByIdAsync(id));
  }, [id, dispatch]);

  usePageTitle(title);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    post && (
      <BlogCard
        containerClassName="border-b-0"
        listTypeView={ListTypeView.COLUMN}
        isShownPostImg
        {...post}
      />
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={title} />
      <SectionWrapper className="pt-13.5 pb-7">{sectionContent}</SectionWrapper>
    </>
  );
};

export default Post;
