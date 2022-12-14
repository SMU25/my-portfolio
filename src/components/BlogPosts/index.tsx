import React, { FC } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { POST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { BlogCard } from "./BlogCard";
import { ViewVariants, IBlogItem } from "./types";

interface Props {
  className?: string;
  variant?: ViewVariants;
  // items: IBlogItem[];
  maxCountPosts?: number;
}

export const BlogPosts: FC<Props> = ({ className, variant, maxCountPosts }) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);

  //CHANGE - винести цю логіку в редакс
  const slisedItems = [1, 2, 3, 4, 5].slice(0, maxCountPosts);

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
          dateCreated={new Date()}
          variant={activeVariant}
        />
      ))}
    </div>
  );
};
