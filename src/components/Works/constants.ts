import { ListTypeView } from "src/types";

export const CARD_VIEW_VARIANTS_STYLES = {
  [ListTypeView.ROW]: {
    container: "py-4 px-3 rounded-lg hover:shadow-card-primary hover:scale-105",
    img: "h-24 xs:h-28 sm:h-45 xl:h-60",
    infoContainer: "mt-2 sm:mt-4.5",
    title: "text-base xs:text-lg sm:text-2xl default:leading-5 sm:leading-8",
    infoContainerCenter: "mt-1 sm:mt-4",
    date: "text-xs sm:text-base",
    category: "text-xs sm:text-base",
    description:
      "mt-1 sm:mt-4 text-10 xs:text-xs default:leading-3.5 xs:leading-4 sm:leading-6 sm:text-base",
    viewButton: "w-full mt-3 sm:mt-5",
  },

  [ListTypeView.COLUMN]: {
    container: "sm:flex-row py-4.5 sm:py-8 border-b",
    img: "sm:min-w-61.5 sm:max-w-61.5 max-h-45 h-full",
    infoContainer: "mt-4.5 sm:mt-0 sm:ml-4.5",
    title: "text-2xl",
    infoContainerCenter: "mt-4",
    date: "",
    category: "",
    description: "max-h-25.5 mt-6 sm:mt-2 md:mt-5.5",
    viewButton: "absolute right-0",
  },
};
