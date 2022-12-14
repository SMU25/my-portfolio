import React, { FC } from "react";
import cn from "classnames";
import format from "date-fns/format";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { MarkLabel } from "src/components/MarkLabel";
import { getTruncateString } from "src/utils/getTruncateString";

const MAX_COUNT_DESCRIPTION_SYMBOLS = 175;

const DATE_FORMAT = "yyyy";

const WORK_IMG_SIZE = {
  WIDTH: 246,
  HEIGHT: 180,
};

interface Props {
  imageUrl: string;
  title: string;
  dateCreated: Date;
  category: string;
  description: string;
}

export const WorkCard: FC<Props> = ({
  imageUrl,
  title,
  dateCreated,
  category,
  description,
}) => {
  const date = format(dateCreated, DATE_FORMAT);

  const truncatedDescription = getTruncateString(
    description,
    MAX_COUNT_DESCRIPTION_SYMBOLS
  );

  return (
    <div className="flex flex-col sm:flex-row py-4.5 sm:py-8 border-b border-gray-lighter">
      <img
        className="w-full sm:max-w-61.5 sm:self-start rounded-md"
        src={imageUrl}
        width={WORK_IMG_SIZE.WIDTH}
        height={WORK_IMG_SIZE.HEIGHT}
        alt={title}
      />
      <div className="mt-4.5 sm:mt-0 sm:ml-4.5">
        <Heading
          className="text-2xl md:text-3xl font-bold leading-8 md:leading-11"
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        <div className="flex items-center mt-4 leading-6.5">
          <MarkLabel>
            <time dateTime={date}>{date}</time>
          </MarkLabel>
          <span className="ml-3 md:ml-6.5 text-gray-light text-base md:text-xl break-all">
            {category}
          </span>
        </div>
        <p className="max-h-25.5 mt-6 sm:mt-2 md:mt-5.5 leading-6 overflow-hidden">
          {truncatedDescription}
        </p>
      </div>
    </div>
  );
};
