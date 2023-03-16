import { ViewVariants } from "./types";

export const CARD_VIEW_VARIANTS_STYLES = {
  [ViewVariants.ROW]: {
    container:
      "sm:max-w-72.5 md:max-w-95 lg:max-w-104.5 bg-white mb-5 sm:ml-5 first:ml-0 pt-3 sm:pt-6 px-5 sm:px-6 pb-3 sm:pb-5 shadow-light-white rounded",
    // sm:even:ml-5 xl:ml-5 CHANGE - del
    title: "text-xl md:text-26 font-bold leading-6.5 md:leading-9.5",
    infoContainer: "mt-2.5 md:mt-4.5 text-sm md:text-lg leading-6.5",
    date: "mr-3 md:mr-6.5",
    category: "pl-3 md:pl-6.5 italic",
    message: "mt-1.5 md:mt-3 max-h-72 overflow-auto",
  },

  [ViewVariants.COLUMN]: {
    container: "pt-4.5 sm:pt-8 pb-6 sm:pb-7.5 border-b border-gray-lighter",
    title: "text-26 sm:text-3xl font-medium leading-9.5 sm:leading-11",
    infoContainer: "mt-1.5 sm:mt-4 text-base sm:text-xl leading-7",
    date: "mr-3.5 sm:mr-5",
    category: "pl-3.5 sm:pl-5 text-gray-light",
    message: "mt-4",
  },
};
