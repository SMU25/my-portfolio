import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostByIdAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPostById } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { BlogCard } from "src/components/BlogPosts/BlogCard";
import { ListTypeView } from "src/types";
import { Preloader } from "./Preloader";

interface Props {}

const Post: FC<Props> = () => {
  const { id } = useParams();

  const isLoading = useAppSelector(selectIsLoading);
  const post = useAppSelector(selectPostById);
  const postImg = post?.img;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostByIdAsync(id));
  }, [id, dispatch]);

  const sectionContent = isLoading ? (
    <Preloader />
  ) : (
    post && (
      <BlogCard
        containerClassName="border-b-0"
        listTypeView={ListTypeView.COLUMN}
        {...post}
      >
        {postImg && (
          <img className="w-full" src={postImg.url} alt={postImg?.title} />
        )}
      </BlogCard>
    )
  );

  return (
    <>
      <BreadCrumbs tertiaryPageName={post?.title} />
      <SectionWrapper className="pt-13.5 pb-7">{sectionContent}</SectionWrapper>
    </>
  );
};

export default Post;
