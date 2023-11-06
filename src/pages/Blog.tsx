import React, { FC, useEffect, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { useQueryParams } from "src/hooks/useQueryParams";
import { usePageTitle } from "src/hooks/usePageTitle";
import { getBlogPostsAsync } from "src/redux/blog/actions";
import { toggleBlogListTypeView } from "src/redux/config/actions";
import { selectIsLoading, selectBlogPosts } from "src/redux/blog/selectors";
import { selectBlogListTypeView } from "src/redux/config/selectors";
import { SectionWrapper } from "src/components/Layouts/SectionWrapper";
import { BreadCrumbs } from "src/components/BreadCrumbs";
import { ContainerHead } from "src/components/Layouts/ContainerHead";
import { BlogItems } from "src/components/BlogItems";
import { ChangeViewButton } from "src/components/Button/ChangeViewButton";
import { ShowMore } from "src/components/Button/ShowMore";
import { TagsHeading } from "src/components/Heading/types";
import {
  DEFAULT_SECTION_CLASSNAME,
  DEFAULT_ITEMS_COMPONENT_CLASSNAME,
  DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME,
} from "./constants";

const T_PREFIX = "blog";

const HEADING = "title";

const Blog: FC = () => {
  const { t } = useTranslation();

  const pageTitle = t(`${T_PREFIX} - ${HEADING}`);

  usePageTitle(pageTitle);

  const dispatch = useAppDispatch();

  const { limitInitialValue, page, limit } = useQueryParams();

  const isLoading = useAppSelector(selectIsLoading);
  const posts = useAppSelector(selectBlogPosts);
  const blogListTypeView = useAppSelector(selectBlogListTypeView);

  const toogleBlogListView = useCallback(() => {
    dispatch(toggleBlogListTypeView());
  }, [dispatch]);

  useEffect(() => {
    if (!posts) {
      dispatch(getBlogPostsAsync({ page, limit }));
    }
  }, [dispatch, posts, page, limit]);

  const isDataMissing = !isLoading && !posts?.length;
  const isShownPagination = !isDataMissing;
  //CHANGE - тут буде ще 1 значення ^ (!isDataMissing && countPages > 1). Якщо кількість сторінок не більше 1, то не показувати пагінацію

  const isLoadingShowMore = isLoading && Boolean(posts);

  return (
    //CHANGE - Додати до цекції ContainerHead і через флаг контролити чи рендерити його

    <>
      <BreadCrumbs />
      <SectionWrapper
        className={cn("bg-gradient-blue-sky", DEFAULT_SECTION_CLASSNAME)}
      >
        <ContainerHead
          titleClassName="!py-1.5"
          title={pageTitle}
          tagHeading={TagsHeading.H2}
        >
          {!isDataMissing && (
            <ChangeViewButton
              listTypeView={blogListTypeView}
              toogleListTypeView={toogleBlogListView}
            />
          )}
        </ContainerHead>
        <BlogItems
          className={DEFAULT_ITEMS_COMPONENT_CLASSNAME}
          listTypeView={blogListTypeView}
          isLoading={isLoading}
          items={posts}
          preloaderItemCount={limit}
        />
        {isShownPagination && (
          <>
            <div className={DEFAULT_SHOW_MORE_BTN_CONTAINER_CLASSNAME}>
              <ShowMore
                isLoading={isLoadingShowMore}
                loadableItemCountLabel={limitInitialValue}
              />
            </div>
            pagination
          </>
        )}
      </SectionWrapper>
    </>
  );
};

export default Blog;
