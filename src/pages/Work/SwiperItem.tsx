import React, { FC } from "react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { ImageAlbumItem } from "src/types/work";

export const SwiperItem: FC<Omit<ImageAlbumItem, "id">> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div>
      <div className="ml-1">
        <Heading
          className="text-2xl leading-15 font-medium"
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        <p className="text-black-base leading-6">{description}</p>
      </div>
      <img className="max-h-96 w-full mt-7.5" src={imageUrl} alt={title} />
    </div>
  );
};
