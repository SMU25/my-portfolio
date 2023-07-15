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

  const isThumbsSwiperItem = !isMainSwiperItem;
  const isActiveThumbsSwiperItem = isThumbsSwiperItem && isActiveSlide;
  const shownDescription = isMainSwiperItem && description;

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
        "flex flex-col max-h-87.5 xs:max-h-125 sm:max-h-150 lg:max-h-200 h-full":
          isMainSwiperItem,
        "cursor-pointer group": isThumbsSwiperItem,
      })}
      ref={slideRef}
    >
      <div className="ml-1">
        <Heading
          className={cn("font-medium", {
            "text-lg sm:text-2xl leading-7 sm:leading-15": isMainSwiperItem,
            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10/12 text-blue-lighter text-center text-xs xs:text-sm sm:text-base leading-4 sm:leading-5 break-words opacity-0 group-hover:opacity-100 overflow-hidden drop-shadow-black-dark-outer transition-all z-10":
              isThumbsSwiperItem,
            "!opacity-100": isActiveThumbsSwiperItem,
          })}
          tagHeading={TagsHeading.H4}
        >
          {title}
        </Heading>
        {shownDescription && (
          <p className="max-h-20 xs:max-h-28 sm:max-h-36 md:max-h-44 mt-0.5 sm:mt-0 mb-2 xs:mb-3 sm:mb-5 lg:mb-7.5 text-black-base text-xs xs:text-sm sm:text-base leading-4 xs:leading-4.5 sm:leading-6 overflow-auto">
            {description}
          </p>
        )}
      </div>

      <img
        className={cn(
          "w-full object-cover overflow-hidden rounded-10 transition-all",
          {
            "h-full": isMainSwiperItem,
            "min-h-17.5 xs:min-h-20 sm:min-h-32.5 md:min-h-35 lg:min-h-40 max-h-17.5 xs:max-h-20 sm:max-h-32.5 md:max-h-35 lg:max-h-40 group-hover:brightness-50":
              isThumbsSwiperItem,
            "brightness-50": isActiveThumbsSwiperItem,
          }
        )}
        src={imageUrl}
        alt={title}
      />
    </div>
  );
};
