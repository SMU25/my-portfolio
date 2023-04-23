import React, { FC, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { getPostsAsync } from "src/redux/posts/action";
import { togglePostListTypeView } from "src/redux/config/action";
import { selectIsLoading, selectPosts } from "src/redux/posts/selectors";
import { selectPostListTypeView } from "src/redux/config/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogPosts } from "src/components/BlogPosts";
import { ChangeViewButton } from "src/components/Button/ChangeViewButton";
import { ShowMore } from "src/components/Button/ShowMore";
import { TagsHeading } from "src/components/Heading/types";
import {
  DEFAULT_SECTION_CLASS_NAME,
  DEFAULT_ITEMS_COMPONENT_CLASS_NAME,
} from "./constants";

const T_PREFIX = "blog";

const HEADING = "title";

const Blog: FC = () => {
  const { t } = useTranslation();

  const {
    limitInitialValue,
    page,
    limit,
    offset,
    isChangedLimit,
    incrementLimit,
  } = useQueryParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectPosts);
  const postListTypeView = useAppSelector(selectPostListTypeView);

  const tooglePostView = useCallback(() => {
    dispatch(togglePostListTypeView());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPostsAsync({ page, limit }));
  }, [page, limit, dispatch]);

  const isLoadingShowMore = isLoading && isChangedLimit;

  return (
    //CHANGE - Додати до цекції ContainerHead і через флаг контролити чи рендерити його
    <SectionWrapper className={DEFAULT_SECTION_CLASS_NAME}>
      <ContainerHead
        title={t(`${T_PREFIX} - ${HEADING}`)}
        tagHeading={TagsHeading.H2}
      >
        <ChangeViewButton
          listTypeView={postListTypeView}
          toogleListTypeView={tooglePostView}
        />
      </ContainerHead>
      <BlogPosts
        className={DEFAULT_ITEMS_COMPONENT_CLASS_NAME}
        listTypeView={postListTypeView}
        isLoading={isLoading}
        items={posts}
        countItemsPreloader={limit}
      />
      <div className="flex justify-center w-full mt-6">
        <ShowMore
          isLoading={isLoadingShowMore}
          showMoreItemsCount={limitInitialValue}
          onClick={incrementLimit}
        />
      </div>
      pagination
    </SectionWrapper>
  );
};

export default Blog;
