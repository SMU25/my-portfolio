import { ButtonVariants } from "./types";

export const BUTTON_VARIANTS_STYLES = {
  [ButtonVariants.PRIMARY]:
    "bg-red-light text-white rounded-sm hover:bg-red-primary active:translate-y-1 active:brightness-95",
  [ButtonVariants.SIMPLE_SECONDARY]: "text-blue-light hover:brightness-50",
  [ButtonVariants.DISABLED]: "bg-gray-light",
};
