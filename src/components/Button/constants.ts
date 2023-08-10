import cn from "classnames";
import { ButtonVariants } from "./types";

export const T_PREFIX = "button";

const DEFAULT_BTN_CLASSNAME =
  "py-3.5 px-5 text-white font-medium active:translate-y-1 active:brightness-95";

const DEFAULT_BORDERED_BTN_CLASSNAME =
  "px-5 py-2 font-medium border-2 active:translate-y-1";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.PRIMARY]: cn(
    "bg-red-primary hover:bg-red-dark",
    DEFAULT_BTN_CLASSNAME
  ),
  [ButtonVariants.SECONDARY]: cn(
    "bg-blue-light hover:bg-blue-dark",
    DEFAULT_BTN_CLASSNAME
  ),
  [ButtonVariants.BORDERED_SECONDARY]: cn(
    "text-blue-dark border-blue-light hover:text-white hover:bg-blue-light",
    DEFAULT_BORDERED_BTN_CLASSNAME
  ),
  [ButtonVariants.SIMPLE_SECONDARY]:
    "py-1.5 text-blue-light hover:brightness-50",
  [ButtonVariants.BORDERED_GRAY]: cn(
    "text-gray-light border-gray-light hover:text-black-dark hover:border-black-dark",
    DEFAULT_BORDERED_BTN_CLASSNAME
  ),
  [ButtonVariants.BORDERED_BLACK_DARK]: cn(
    "text-black-dark border-black-dark hover:bg-black-dark hover:text-white hover:border-black-dark",
    DEFAULT_BORDERED_BTN_CLASSNAME
  ),
};
