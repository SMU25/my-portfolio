import { ListTypeView } from "src/types";

export const CARD_VIEW_VARIANTS_STYLES = {
  [ListTypeView.ROW]: {
    container: "pt-2 xs:pt-4 pb-3 xs:pb-4 px-2 xs:px-3 hover:scale-105",
    wrapper: "",
    img: "h-24 xs:h-28 sm:h-45 xl:h-60",
    infoContainer: "mt-2 sm:mt-4.5",
    title: "text-base xs:text-lg sm:text-2xl default:leading-5 sm:leading-8",
    infoContainerCenter: "mt-1 sm:mt-4",
    date: "text-xs sm:text-base",
    category: "text-xs sm:text-base",
    description:
      "mt-1 sm:mt-4 text-xs sm:text-base default:leading-4 sm:leading-6",
    viewButton: "w-full mt-3 sm:mt-5",
  },

  [ListTypeView.COLUMN]: {
    container: "first:mt-0 mt-5 py-4.5 sm:py-8 px-3",
    wrapper: "flex flex-col sm:flex-row",
    img: "sm:min-w-61.5 sm:max-w-61.5 max-h-55 xs:max-h-70 sm:max-h-45 h-full",
    infoContainer: "mt-4.5 sm:mt-0 sm:ml-4.5",
    title: "md:w-calc-full-minus-62 text-2xl",
    infoContainerCenter: "mt-4",
    date: "",
    category: "",
    description: "sm:max-h-25.5 mt-6 sm:mt-2 md:mt-5.5",
    viewButton:
      "md:absolute md:top-8 md:right-3 w-full md:w-auto mt-3 sm:mt-5 md:mt-0",
  },
};