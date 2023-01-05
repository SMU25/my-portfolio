import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getWorkByIdAsync } from "src/redux/works/action";
import { selectIsLoading, selectWorkById } from "src/redux/works/selectors";

const Work = () => {
  const { id } = useParams();

  const isLoading = useAppSelector(selectIsLoading);
  const work = useAppSelector(selectWorkById);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWorkByIdAsync(id));
  }, [id, dispatch]);

  return <div>{id}</div>;
};

export default Work;
