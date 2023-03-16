import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getPostByIdAsync } from "src/redux/posts/action";
import { selectIsLoading, selectPostById } from "src/redux/posts/selectors";

interface Props {}

const Post: FC<Props> = () => {
  const { id } = useParams();

  const isLoading = useAppSelector(selectIsLoading);
  const post = useAppSelector(selectPostById);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPostByIdAsync(id));
  }, [id, dispatch]);

  return <div>{id}</div>;
};

export default Post;
