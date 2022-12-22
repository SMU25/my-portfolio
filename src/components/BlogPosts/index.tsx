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
  maxCountItemsPreloader?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = ({
  className,
  variant,
  isLoading,
  items,
  maxCountItemsPreloader,
  isSlider,
}) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);
  const isRowVariant = ViewVariants.ROW === activeVariant;

  //CHANGE - Слайдер перебиває меню та хедер

  const renderBlogPosts = useMemo(() => {
    if (isLoading) return renderPreloader(isRowVariant, maxCountItemsPreloader);

    return items?.map((item) => (
      <BlogCard key={item.id} variant={activeVariant} {...item} />
    ));
  }, [activeVariant, isRowVariant, isLoading, items, maxCountItemsPreloader]);

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
