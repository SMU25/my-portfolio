import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";
import { BlogPosts } from "src/components/BlogPosts";
import { ViewVariants } from "src/components/BlogPosts/types";
import { PATHNAMES } from "src/constants/routes";

const HEADING = "Recent posts";
const VIEW_ALL_BUTTON_NAME = "View all";

export const RecentPosts: FC = () => (
  <div>
    <div className="flex justify-between items-baseline">
      <Heading className="text-22 leading-15" tagHeading={TagsHeading.H2}>
        {HEADING}
      </Heading>
      <Link to={PATHNAMES.BLOG}>
        <Button variant={ButtonVariants.SIMPLE_SECONDARY}>
          {VIEW_ALL_BUTTON_NAME}
        </Button>
      </Link>
    </div>
    <BlogPosts variant={ViewVariants.ROW} />
  </div>
);
