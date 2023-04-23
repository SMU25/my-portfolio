import React, { FC, useMemo } from "react";
import cn from "classnames";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IPostItem } from "src/types/post";
import { renderPreloader } from "./Preloader";
import { BlogCard } from "./BlogCard";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IPostItem[];
  countItemsPreloader?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = ({
  className,
  listTypeView,
  isLoading,
  items,
  countItemsPreloader,
  isSlider,
}) => {
  const isRowListTypeView = ListTypeView.ROW === listTypeView;

  //CHANGE - Слайдер перебиває меню та хедер

  const renderBlogPosts = useMemo(() => {
    if (isLoading)
      return renderPreloader(isRowListTypeView, countItemsPreloader);

    return items?.map((item) => (
      <BlogCard
        key={item.id}
        listTypeView={listTypeView}
        maxLengthMessage={220}
        isLink
        {...item}
      />
    ));
  }, [listTypeView, isRowListTypeView, isLoading, items, countItemsPreloader]);

  return isSlider ? (
    <SwiperSlider items={renderBlogPosts} />
  ) : (
    <div
      className={cn(className, {
        "grid sm:grid-cols-2 lg:grid-cols-3 gap-5": isRowListTypeView,
      })}
    >
      {renderBlogPosts}
    </div>
  );
};
