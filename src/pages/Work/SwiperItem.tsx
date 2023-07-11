import React, { FC } from "react";
import cn from "classnames";
import { useSwiper } from "swiper/react";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { ImageAlbumItem } from "src/types/work";

interface Props extends Omit<ImageAlbumItem, "id"> {
  isActiveSlide: boolean;
}

export const SwiperItem: FC<Props> = ({
  title,
  description,
  imageUrl,
  isActiveSlide,
}) => {
  const { thumbs } = useSwiper();

  const isMainSliderItem = Boolean(thumbs);
  const isActiveThumbItem = isActiveSlide && !isMainSliderItem;
  const shownDescription = description && isMainSliderItem;

  return (
    <div
      className={cn("relative", {
        "flex flex-col max-h-200 h-full": isMainSliderItem,
        "cursor-pointer group": !isMainSliderItem,
      })}
    >
      <div className="ml-1">
        <Heading
          className={cn("font-medium", {
            "text-2xl leading-15": isMainSliderItem,
            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 text-blue-lighter text-center leading-5 break-words opacity-0 group-hover:opacity-100 overflow-hidden drop-shadow-black-dark-outer transition-all z-10":
              !isMainSliderItem,
            "!opacity-100": isActiveThumbItem,
          })}
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        {shownDescription && (
          <p
            className={cn("text-black-base leading-6", {
              "mb-7.5 max-h-44 overflow-auto": isMainSliderItem,
            })}
          >
            {description}
          </p>
        )}
      </div>

      <img
        className={cn("w-full object-cover rounded transition-all", {
          "h-full": isMainSliderItem,
          "min-h-40 max-h-40 group-hover:brightness-50": !isMainSliderItem,
          "brightness-50": isActiveThumbItem,
        })}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};
