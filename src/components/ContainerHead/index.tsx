import React, { FC } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { Button } from "src/components/Button";
import { ButtonVariants } from "src/components/Button/types";

//CHANGE - add translate
const DEFAULT_LINK_LABEL = "View all";

interface Props {
  title?: string;
  titleClassName?: string;
  href?: string;
  linkLabel?: string;
}

export const ContainerHead: FC<Props> = ({
  title,
  titleClassName,
  href,
  linkLabel,
}) => {
  //CHANGE - тут буде перевоД, тому не постaвив параметр за замовчуванням

  const label = linkLabel || DEFAULT_LINK_LABEL;

  return (
    <div className="flex justify-between items-baseline">
      <Heading
        className={cn("max-w-1/2 text-22 leading-15 truncate", titleClassName)}
        tagHeading={TagsHeading.H2}
      >
        {title}
      </Heading>
      {href && (
        <Link to={href} className="max-w-1/2 ml-10">
          <Button variant={ButtonVariants.SIMPLE_SECONDARY}>{label}</Button>
        </Link>
      )}
    </div>
  );
};
