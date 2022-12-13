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
    message: "mt-1.5 md:mt-3",
  },

  [ViewVariants.COLUMN]: {
    container: "pt-8 pb-4.5 border-b border-gray-lighter",
    title: "text-3xl font-medium leading-11",
    infoContainer: "mt-4 text-xl leading-7",
    date: "mr-5",
    category: "pl-5 text-gray-light",
    message: "mt-4",
  },
};
