import React, { FC } from "react";
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
  // items: IBlogItem[];
  maxCountPosts?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = ({
  className,
  variant,
  maxCountPosts,
  isSlider,
}) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);

  //CHANGE - винести цю логіку в редакс , додати хук для перемикача
  const slisedItems = [1, 2, 3, 4, 5].slice(0, maxCountPosts);

  if (isSlider) {
    return (
      <SlickSlider settings={SLIDER_SETTINGS}>
        {slisedItems.map((item) => (
          <BlogCard
            key={item}
            title="Making a design system from scratch"
            message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            category="Design, design"
            createdAt={new Date()}
            variant={activeVariant}
          />
        ))}
      </SlickSlider>
    );
  }

  return (
    <div
      className={cn(className, {
        "flex flex-wrap": ViewVariants.ROW === activeVariant,
      })}
    >
      {/* CHANGE */}
      {slisedItems.map((item) => (
        <BlogCard
          key={item}
          title="Making a design system from scratch"
          message="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          category="Design, design"
          createdAt={new Date()}
          variant={activeVariant}
        />
      ))}
    </div>
  );
};
