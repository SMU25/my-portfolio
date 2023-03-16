import React, { FC } from "react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { VideoItem } from "src/types/work";

export const Video: FC<VideoItem> = ({ title, description, poster, url }) => {
  return (
    <div className="w-full  py-7">
      <div className="ml-1">
        <Heading
          className="text-3xl leading-15 font-medium"
          tagHeading={TagsHeading.H3}
        >
          {title}
        </Heading>
        <p className="text-black-base leading-6">{description}</p>
      </div>
      <iframe
        className="w-full h-125 mt-7.5"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};
