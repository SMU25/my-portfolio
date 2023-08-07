import React, { FC, useMemo, memo } from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import { SwiperSlider } from "src/components/SwiperSlider";
import { ListTypeView } from "src/types";
import { IPostItem } from "src/types/post";
import { renderPreloader } from "./Preloader";
import { BlogCard } from "./BlogCard";

const T_PREFIX = "posts";

const DATA_MISSING_TEXT = "data-missing-text";

interface Props {
  className?: string;
  listTypeView?: ListTypeView;
  isLoading: boolean;
  items: IPostItem[];
  countItemsPreloader?: number;
  isSlider?: boolean;
}

export const BlogPosts: FC<Props> = memo(
  ({
    className,
    listTypeView = ListTypeView.ROW,
    isLoading,
    items,
    countItemsPreloader,
    isSlider,
  }) => {
    const { t } = useTranslation();

    const isRowListTypeView = ListTypeView.ROW === listTypeView;

    const renderedBlogPosts = useMemo(() => {
      if (isLoading) {
        return renderPreloader(isRowListTypeView, countItemsPreloader);
      } else if (items?.length) {
        return items.map((item) => (
          <BlogCard
            key={item.id}
            listTypeView={listTypeView}
            isLink
            {...item}
          />
        ));
      }
    }, [
      listTypeView,
      isRowListTypeView,
      isLoading,
      items,
      countItemsPreloader,
    ]);

    if (!renderedBlogPosts)
      return (
        <p className="mt-1 sm:mt-3 mb-5 text-red-dark text-xl sm:text-3xl font-bold">
          {t(`${T_PREFIX} - ${DATA_MISSING_TEXT}`)}
        </p>
      );

    return isSlider ? (
      <SwiperSlider
        slideClassName="flex !h-initial"
        items={renderedBlogPosts}
        isShownNavigationButtons
        isShownKeyboardInfoPopUp
      />
    ) : (
      <div
        className={cn(className, {
          "grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5": isRowListTypeView,
        })}
      >
        {renderedBlogPosts}
      </div>
    );
  }
);
