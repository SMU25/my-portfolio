import { ListTypeView } from "src/types";

export const MAX_LENGTH_DESCRIPTION = {
  [ListTypeView.ROW]: 220,
  [ListTypeView.COLUMN]: 350,
};

export const CARD_VIEW_VARIANTS_STYLES = {
  [ListTypeView.ROW]: {
    container:
      "h-full pt-2 xs:pt-4 pb-3 xs:pb-4 sm:pt-5 sm:pb-5 px-2 xs:px-3 sm:px-5 hover:scale-100 sm:hover:scale-105",
    title:
      "text-sm sm:text-xl md:text-26 font-bold leading-5 sm:leading-6.5 md:leading-9.5",
    infoContainer:
      "mt-2.5 md:mt-4.5 text-xs sm:text-sm md:text-lg leading-3.5 sm:leading-6.5",
    date: "mr-3 md:mr-6.5",
    category: "pl-3 md:pl-6.5 italic",
    description:
      "max-h-72 mt-1.5 md:mt-3 text-xs sm:text-base leading-4 sm:leading-6 overflow-auto",
    viewButton: "w-full mt-3 sm:mt-5",
  },

  [ListTypeView.COLUMN]: {
    container: "first:mt-0 mt-5 pt-4.5 sm:pt-8 pb-6 sm:pb-7.5 px-4",
    title:
      "md:w-calc-full-minus-62 text-26 sm:text-3xl font-medium leading-9.5 sm:leading-11",
    infoContainer: "mt-1.5 sm:mt-4 text-base sm:text-xl leading-7",
    date: "mr-3.5 sm:mr-5",
    category: "pl-3.5 sm:pl-5 text-gray-light",
    description: "leading-6 mt-4",
    viewButton:
      "md:absolute md:top-8 md:right-4 w-full md:w-auto mt-3 sm:mt-5 md:mt-0",
  },
};
