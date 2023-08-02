import React, { FC } from "react";
import cn from "classnames";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { VideoItem } from "src/types/work";
import {
  DEFAULT_HEADING_CLASSNAME,
  DEFAULT_DESCRIPTION_CLASSNAME,
} from "./constants";

export const Video: FC<VideoItem> = ({ title, description, poster, url }) => {
  return (
    <div className="w-full py-7">
      <div className="ml-1">
        <Heading
          className={DEFAULT_HEADING_CLASSNAME}
          tagHeading={TagsHeading.H3}
        >
          {title}
        </Heading>
        <p className={cn("mt-2", DEFAULT_DESCRIPTION_CLASSNAME)}>
          {description}
        </p>
      </div>
      <iframe
        className="w-full h-60 sm:h-100 md:h-125 gl:h-150 xl:h-160 mt-3 sm:mt-5 md:mt-7.5"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
