import { ListTypeView } from "src/types";

export const CARD_VIEW_VARIANTS_STYLES = {
  [ListTypeView.ROW]: {
    container:
      "sm:max-w-72.5 md:max-w-95 lg:max-w-104.5 h-full bg-white pt-2 sm:pt-3 sm:pt-6 px-3 sm:px-5 sm:px-6 pb-3 sm:pb-5 shadow-light-white rounded hover:scale-105",
    title:
      "text-sm sm:text-xl md:text-26 font-bold leading-5 sm:leading-6.5 md:leading-9.5",
    infoContainer:
      "mt-2.5 md:mt-4.5 text-10 sm:text-sm md:text-lg leading-3 sm:leading-6.5",
    date: "mr-3 md:mr-6.5",
    category: "pl-3 md:pl-6.5 italic",
    description:
      "max-h-72 mt-1.5 md:mt-3 text-10 sm:text-base leading-3.5 sm:leading-6 overflow-auto",
    viewButton: "w-full mt-3 sm:mt-5",
  },

  [ListTypeView.COLUMN]: {
    container: "pt-4.5 sm:pt-8 pb-6 sm:pb-7.5 border-b border-gray-lighter",
    title:
      "md:w-calc-full-minus-54 text-26 sm:text-3xl font-medium leading-9.5 sm:leading-11",
    infoContainer: "mt-1.5 sm:mt-4 text-base sm:text-xl leading-7",
    date: "mr-3.5 sm:mr-5",
    category: "pl-3.5 sm:pl-5 text-gray-light",
    description: "leading-6 mt-4",
    viewButton:
      "md:absolute md:top-8 md:right-0 w-full md:w-auto mt-3 sm:mt-5 md:mt-0",
  },
};
