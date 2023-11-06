import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IBlogPost } from "src/types/blog";
import { ReactComponent as DataMissing } from "src/assets/icons/data-missing.svg";
import { renderPreloader } from "./Preloader";
import { BlogCard } from "./BlogCard";

const T_PREFIX = "blog-items";

const DATA_MISSING_TEXT = "data-missing-text";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IBlogPost[];
  preloaderItemCount?: number;
  isSlider?: boolean;
}

export const BlogItems: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    preloaderItemCount,
    isSlider,
  }) => {
    const { t } = useTranslation();

    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedBlogItems = useMemo(() => {
      if (isLoading) {
        return renderPreloader(isRowListTypeView, preloaderItemCount);
      } else if (items?.length) {
        return items.map((item) => (
          <BlogCard
            key={item.id}
            className={cn({
              "default:shadow-light-white": isSlider,
            })}
            listTypeView={listTypeView}
            isActiveLink
            {...item}
          />
        ));
      }
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      preloaderItemCount,
      isSlider,
    ]);

    if (!renderedBlogItems)
      return (
        <div className="flex flex-col items-center justify-center mt-5 xs:mt-8 sm:mt-15">
          <DataMissing className="fill-g-red-medium w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32" />
          <p className="mt-1 xs:mt-2 sm:mt-5 mb-5 text-center text-red-medium text-xl sm:text-3xl font-bold">
            {t(`${T_PREFIX} - ${DATA_MISSING_TEXT}`)}
          </p>
        </div>
      );

    return isSlider ? (
      <SwiperSlider
        slideClassName="flex !h-initial"
        items={renderedBlogItems}
        isShownNavigationButtons
        isShownKeyboardInfoPopup
      />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5": isRowListTypeView,
        })}
      >
        {renderedBlogItems}
      </div>
    );
  }
);
