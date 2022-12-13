import React, { FC } from "react";
import cn from "classnames";
import Cookies from "js-cookie";
import { BlogCard } from "./BlogCard";
import { POST_TYPE_VIEW } from "src/constants/cookiesKeys";
import { ViewVariants } from "./types";

interface Props {
  variant: ViewVariants;
  maxCountPosts?: number;
}

export const BlogPosts: FC<Props> = ({ variant, maxCountPosts }) => {
  const activeVariant = Cookies.get(POST_TYPE_VIEW) || variant;

  return (
    <div
      className={cn({
        "flex flex-wrap": ViewVariants.ROW === activeVariant,
      })}
    >
      {/* CHANGE */}
      {[1, 2, 3, 4, 5].map((item, index) => (
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
