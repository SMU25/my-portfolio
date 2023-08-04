import { ReactNode } from "react";

export interface IModalState {
  isOpen?: boolean;
  isShownOverlay?: boolean;
  isActiveCloseClickOutside?: boolean;
  cookiesKeyModal?: string;
  className?: string;
  title?: string;
  text?: string;
  children?: ReactNode;
}
