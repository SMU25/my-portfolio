import { ButtonVariants } from "./types";

export const BUTTON_VARIANTS_STYLES = {
  [ButtonVariants.PRIMARY]:
    "bg-red-light py-3.5 px-5 text-white rounded-sm hover:bg-red-primary active:translate-y-1 active:brightness-95",
  [ButtonVariants.SIMPLE_SECONDARY]:
    "py-1.5 text-blue-light hover:brightness-50",
  [ButtonVariants.DISABLED]: "bg-gray-light",
};
