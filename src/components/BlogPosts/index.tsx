import React, { FC, useMemo } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { SwiperSlider } from "src/components/SwiperSlider";
import { POST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { IPostItem } from "src/types/post";
import { renderPreloader } from "./Preloader";
import { BlogCard } from "./BlogCard";
import { ViewVariants } from "./types";

interface Props {
  className?: string;
  variant?: ViewVariants;
  isLoading: boolean;
  items: IPostItem[];
  countItemsPreloader?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = ({
  className,
  variant,
  isLoading,
  items,
  countItemsPreloader,
  isSlider,
}) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);
  const isRowVariant = ViewVariants.ROW === activeVariant;

  //CHANGE - Слайдер перебиває меню та хедер

  const renderBlogPosts = useMemo(() => {
    if (isLoading) return renderPreloader(isRowVariant, countItemsPreloader);

    return items?.map((item) => (
      <BlogCard
        key={item.id}
        variant={activeVariant}
        maxLengthMessage={220}
        isLink
        {...item}
      />
    ));
  }, [activeVariant, isRowVariant, isLoading, items, countItemsPreloader]);

  return isSlider ? (
    <SwiperSlider items={renderBlogPosts} />
  ) : (
    <div
      className={cn(className, {
        "flex flex-wrap": isRowVariant,
      })}
    >
      {renderBlogPosts}
    </div>
  );
};
