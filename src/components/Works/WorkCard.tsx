import React, { FC } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";

const DATE_FORMAT = "yyyy";

const WORK_IMG_SIZE = {
  WIDTH: 246,
  HEIGHT: 180,
};

interface Props {
  className?: string;
  imageUrl: string;
  title: string;
  dateCreated: Date;
  category: string;
  description: string;
}

export const WorkCard: FC<Props> = ({
  className,
  imageUrl,
  title,
  dateCreated,
  category,
  description,
}) => {
  const date = format(dateCreated, DATE_FORMAT);

  return (
    <div className={cn("flex py-8 border-b border-gray-lighter", className)}>
      <img
        className="rounded-md"
        src={imageUrl}
        width={WORK_IMG_SIZE.WIDTH}
        height={WORK_IMG_SIZE.HEIGHT}
        alt={title}
      />
      <div className="ml-4.5">
        <Heading
          className="text-3xl font-bold leading-11"
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        <div className="flex items-center mt-4 leading-6.5">
          <MarkLabel>
            <time dateTime={date}>{date}</time>
          </MarkLabel>
          <span className="ml-6.5 text-gray-light text-xl break-all">
            {category}
          </span>
        </div>
        <p className="mt-5.5 leading-6">{description}</p>
      </div>
    </div>
  );
};
