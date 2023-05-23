import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IPostItem } from "src/types/post";
import { renderPreloader } from "./Preloader";
import { BlogCard } from "./BlogCard";

const MAX_LENGTH_DESCRIPTION = 220;

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IPostItem[];
  countItemsPreloader?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    countItemsPreloader,
    isSlider,
  }) => {
    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedBlogPosts = useMemo(() => {
      if (isLoading)
        return renderPreloader(isRowListTypeView, countItemsPreloader);

      return items?.map((item) => (
        <BlogCard
          key={item.id}
          listTypeView={listTypeView}
          maxLengthDesciption={MAX_LENGTH_DESCRIPTION}
          isLink
          {...item}
        />
      ));
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      countItemsPreloader,
    ]);

    return isSlider ? (
      <SwiperSlider items={renderedBlogPosts} />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5": isRowListTypeView,
        })}
      >
        {renderedBlogPosts}
      </div>
    );
  }
);
