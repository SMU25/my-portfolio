import React, { FC, useMemo } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { SlickSlider } from "src/components/Slider";
import { POST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { IPostItem } from "src/types/post";
import { BlogCard } from "./BlogCard";
import { SLIDER_SETTINGS } from "./constants";
import { ViewVariants } from "./types";

interface Props {
  className?: string;
  variant?: ViewVariants;
  items: IPostItem[];
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = ({
  className,
  variant,
  items,
  isSlider,
}) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);

  const renderBlogPosts = useMemo(
    () =>
      Boolean(items?.length) &&
      items.map(({ id, ...item }) => (
        <BlogCard key={id} variant={activeVariant} {...item} />
      )),
    [activeVariant, items]
  );

  if (isSlider) {
    return (
      <SlickSlider settings={SLIDER_SETTINGS}>{renderBlogPosts}</SlickSlider>
    );
  }

  return (
    <div
      className={cn(className, {
        "flex flex-wrap": ViewVariants.ROW === activeVariant,
      })}
    >
      {renderBlogPosts}
    </div>
  );
};
