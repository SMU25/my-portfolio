import React, { FC } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { POST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { BlogCard } from "./BlogCard";
import { ViewVariants } from "./types";

interface Props {
  className?: string;
  variant?: ViewVariants;
  maxCountPosts?: number;
}

export const BlogPosts: FC<Props> = ({ className, variant, maxCountPosts }) => {
  const activeVariant = variant || Cookies.get(POST_TYPE_VIEW);

  return (
    <div
      className={cn(className, {
        "flex flex-wrap": ViewVariants.ROW === activeVariant,
      })}
    >
      {/* CHANGE */}
      {[1, 2, 3].map((item) => (
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
