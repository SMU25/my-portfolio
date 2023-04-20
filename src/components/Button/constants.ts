import { ButtonVariants } from "./types";

export const T_PREFIX = "button";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]:
    "bg-red-primary py-3.5 px-5 text-white rounded-sm hover:bg-red-dark active:translate-y-1 active:brightness-95",
  [ButtonVariants.SECONDARY]:
    "bg-blue-light py-3.5 px-5 text-white rounded-sm hover:bg-blue-dark active:translate-y-1 active:brightness-95",
  // [ButtonVariants.BORDERED_SECONDARY]:
  //   "px-5 py-2.5 text-blue-dark border-2 border-blue-light hover:text-white hover:bg-blue-light active:translate-y-1",
  [ButtonVariants.SIMPLE_SECONDARY]:
    "py-1.5 text-blue-light hover:brightness-50",
};
