import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostByIdAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPostById } from "src/redux/posts/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
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

  if (isLoading) {
    return (
      <SectionWrapper>
        <Preloader />
      </SectionWrapper>
    );
  } else if (!post) {
    return null;
  }

  return (
    <SectionWrapper className="pt-13.5 pb-7">
      <BlogCard
        containerClassName="border-b-0"
        listTypeView={ListTypeView.COLUMN}
        {...post}
      >
        {postImg && (
          <img className="w-full" src={postImg.url} alt={postImg?.title} />
        )}
      </BlogCard>
    </SectionWrapper>
  );
};

export default Post;
