import { ViewVariants } from "./types";

export const CARD_VIEW_VARIANTS_STYLES = {
  [ViewVariants.ROW]: {
    container:
      "max-w-104.5 bg-white ml-5 first:ml-0 p-6 pb-2 shadow-light-white rounded",
    title: "text-26 font-bold leading-9.5",
    infoContainer: "mt-4.5 text-lg leading-6.5",
    date: "mr-6.5",
    category: "pl-6.5",
    message: "mt-3",
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
