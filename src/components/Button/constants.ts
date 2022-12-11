import { ButtonVariants } from "./types";

export const BUTTON_VARIANTS_STYLES = {
  [ButtonVariants.PRIMARY]:
    "bg-red-light text-white rounded-sm hover:bg-red-primary",
  [ButtonVariants.SIMPLE_SECONDARY]: "text-blue-light",
  [ButtonVariants.DISABLED]: "bg-gray-light",
};
