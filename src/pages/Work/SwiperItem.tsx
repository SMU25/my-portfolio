import React, { FC, useState, useEffect, useRef } from "react";
import cn from "classnames";
import { Heading } from "src/components/Heading";
import { TagsHeading } from "src/components/Heading/types";
import { THUMBS_MAIN_SWIPER_ID } from "src/components/SwiperSlider/ThumbsGallerySwiper";
import { ImageAlbumItem } from "src/types/work";

const THUMBS_MAIN_SWIPER_SELECTOR = `#${THUMBS_MAIN_SWIPER_ID}`;

interface Props extends Omit<ImageAlbumItem, "id"> {
  isActiveSlide: boolean;
}

export const SwiperItem: FC<Props> = ({
  title,
  description,
  imageUrl,
  isActiveSlide,
}) => {
  const slideRef = useRef(null);

  const [isMainSwiperItem, setIsMainSwiperItem] = useState<boolean>();

  const isActiveThumbItem = isActiveSlide && !isMainSwiperItem;
  const shownDescription = description && isMainSwiperItem;

  useEffect(() => {
    if (slideRef.current) {
      setIsMainSwiperItem(
        slideRef.current.closest(THUMBS_MAIN_SWIPER_SELECTOR)
      );
    }
  }, [slideRef]);

  return (
    <div
      className={cn("relative", {
        "flex flex-col max-h-200 h-full": isMainSwiperItem,
        "cursor-pointer group": !isMainSwiperItem,
      })}
      ref={slideRef}
    >
      <div className="ml-1">
        <Heading
          className={cn("font-medium", {
            "text-2xl leading-15": isMainSwiperItem,
            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 text-blue-lighter text-center leading-5 break-words opacity-0 group-hover:opacity-100 overflow-hidden drop-shadow-black-dark-outer transition-all z-10":
              !isMainSwiperItem,
            "!opacity-100": isActiveThumbItem,
          })}
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        {shownDescription && (
          <p
            className={cn("text-black-base leading-6", {
              "mb-7.5 max-h-44 overflow-auto": isMainSwiperItem,
            })}
          >
            {description}
          </p>
        )}
      </div>

      <img
        className={cn("w-full object-cover rounded transition-all", {
          "h-full": isMainSwiperItem,
          "min-h-40 max-h-40 group-hover:brightness-50": !isMainSwiperItem,
          "brightness-50": isActiveThumbItem,
        })}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};
